#!/usr/bin/env python3
"""Render a .pptx to HTML pages for visual QA, straight from the package XML.

LibreOffice is unusable in this container, so this reads the real shape
geometry and text runs out of ppt/slides/slideN.xml and lays them out with
absolutely-positioned divs. Liberation Sans is metric-compatible with Arial,
so text-fit and overflow checks here are trustworthy.
"""
import glob, os, re, sys, zipfile
from defusedxml.ElementTree import fromstring

A = "{http://schemas.openxmlformats.org/drawingml/2006/main}"
P = "{http://schemas.openxmlformats.org/presentationml/2006/main}"
EMU = 914400.0
SCALE = 96.0  # px per inch

def px(emu):
    return float(emu) / EMU * SCALE

def solid(node):
    if node is None:
        return None
    c = node.find(f"{A}solidFill/{A}srgbClr")
    return "#" + c.get("val") if c is not None else None

def slide_bg(root):
    c = root.find(f".//{P}bg//{A}srgbClr")
    return "#" + c.get("val") if c is not None else "#ffffff"

def shapes(root):
    out = []
    for sp in root.iter(f"{P}sp"):
        xfrm = sp.find(f".//{A}xfrm")
        if xfrm is None:
            continue
        off, ext = xfrm.find(f"{A}off"), xfrm.find(f"{A}ext")
        if off is None or ext is None:
            continue
        spPr = sp.find(f"{P}spPr")
        geom = spPr.find(f"{A}prstGeom")
        ln = spPr.find(f"{A}ln")
        out.append({
            "x": px(off.get("x")), "y": px(off.get("y")),
            "w": px(ext.get("cx")), "h": px(ext.get("cy")),
            "geom": geom.get("prst") if geom is not None else None,
            "fill": solid(spPr),
            "line": solid(ln) if ln is not None else None,
            "lineW": px(ln.get("w")) if ln is not None and ln.get("w") else 1.0,
            "tx": sp.find(f"{P}txBody"),
        })
    return out

def esc(t):
    return (t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))

def text_html(tx):
    """Return (html, anchor, insets)."""
    bodyPr = tx.find(f"{A}bodyPr")
    anchor = bodyPr.get("anchor", "t") if bodyPr is not None else "t"
    ins = {}
    for k, d in (("lIns", 91440), ("tIns", 45720), ("rIns", 91440), ("bIns", 45720)):
        v = bodyPr.get(k) if bodyPr is not None else None
        ins[k] = px(v if v is not None else d)

    paras = []
    for p in tx.findall(f"{A}p"):
        pPr = p.find(f"{A}pPr")
        algn = pPr.get("algn", "l") if pPr is not None else "l"
        lnspc = None
        if pPr is not None:
            sp = pPr.find(f"{A}lnSpc/{A}spcPts")
            if sp is not None:
                lnspc = float(sp.get("val")) / 100.0 * (SCALE / 72.0)
        runs = []
        for r in p.findall(f"{A}r"):
            rPr = r.find(f"{A}rPr")
            t = r.find(f"{A}t")
            txt = esc(t.text or "") if t is not None else ""
            st = []
            if rPr is not None:
                if rPr.get("sz"):
                    st.append(f"font-size:{float(rPr.get('sz'))/100.0*SCALE/72.0:.2f}px")
                if rPr.get("b") == "1":
                    st.append("font-weight:700")
                if rPr.get("spc"):
                    st.append(f"letter-spacing:{float(rPr.get('spc'))/100.0*SCALE/72.0:.3f}px")
                col = solid(rPr)
                if col:
                    st.append(f"color:{col}")
                hl = rPr.find(f"{A}highlight/{A}srgbClr")
                if hl is not None:
                    st.append(f"background:#{hl.get('val')}")
            runs.append(f'<span style="{";".join(st)}">{txt}</span>')
        style = f"text-align:{'center' if algn=='ctr' else 'right' if algn=='r' else 'left'}"
        if lnspc:
            style += f";line-height:{lnspc:.2f}px"
        paras.append(f'<p style="{style}">{"".join(runs) or "&nbsp;"}</p>')
    return "".join(paras), anchor, ins

def render(pptx, outdir):
    os.makedirs(outdir, exist_ok=True)
    z = zipfile.ZipFile(pptx)
    names = sorted(
        [n for n in z.namelist() if re.match(r"ppt/slides/slide\d+\.xml$", n)],
        key=lambda n: int(re.search(r"(\d+)", n.rsplit("/", 1)[1]).group(1)),
    )
    pages = []
    for i, name in enumerate(names, 1):
        root = fromstring(z.read(name))
        body = []
        for s in shapes(root):
            radius = "8px" if s["geom"] == "roundRect" else "50%" if s["geom"] == "ellipse" else "0"
            box = [
                f"left:{s['x']:.2f}px", f"top:{s['y']:.2f}px",
                f"width:{s['w']:.2f}px", f"height:{s['h']:.2f}px",
            ]
            if s["geom"] == "line":
                col = s["line"] or "#000"
                body.append(
                    f'<div class="sh" style="{";".join(box)};'
                    f'border-top:{max(s["lineW"],1):.1f}px solid {col}"></div>'
                )
                continue
            if s["fill"]:
                box.append(f"background:{s['fill']}")
            if s["line"]:
                box.append(f"border:{max(s['lineW'],1):.1f}px solid {s['line']}")
            box.append(f"border-radius:{radius}")
            body.append(f'<div class="sh" style="{";".join(box)}"></div>')

            if s["tx"] is not None:
                html, anchor, ins = text_html(s["tx"])
                just = {"t": "flex-start", "ctr": "center", "b": "flex-end"}.get(anchor, "flex-start")
                tbox = [
                    f"left:{s['x']+ins['lIns']:.2f}px", f"top:{s['y']+ins['tIns']:.2f}px",
                    f"width:{s['w']-ins['lIns']-ins['rIns']:.2f}px",
                    f"height:{s['h']-ins['tIns']-ins['bIns']:.2f}px",
                    f"justify-content:{just}",
                ]
                body.append(f'<div class="tx" style="{";".join(tbox)}">{html}</div>')

        pages.append(
            f'<div class="slide" style="background:{slide_bg(root)}">'
            f'<div class="num">{i}</div>{"".join(body)}</div>'
        )

    css = """
    *{box-sizing:border-box}
    body{margin:0;background:#3a3a3a;font-family:'Liberation Sans',Arial,sans-serif}
    .slide{position:relative;width:960px;height:540px;margin:0 auto 24px;overflow:hidden}
    .sh{position:absolute}
    .tx{position:absolute;display:flex;flex-direction:column;overflow:visible}
    .tx p{margin:0;white-space:pre-wrap}
    .num{position:absolute;left:-34px;top:0;color:#bbb;font-size:13px}
    """
    out = f"<!doctype html><meta charset=utf-8><style>{css}</style>{''.join(pages)}"
    path = os.path.join(outdir, "preview.html")
    with open(path, "w") as f:
        f.write(out)
    single = css.replace(".slide{position:relative;width:960px;height:540px;margin:0 auto 24px;overflow:hidden}",
                         ".slide{position:relative;width:960px;height:540px;margin:0;overflow:hidden}")
    for i, pg in enumerate(pages, 1):
        pg = pg.replace(f'<div class="num">{i}</div>', "")
        with open(os.path.join(outdir, f"s{i:02d}.html"), "w") as f:
            f.write(f"<!doctype html><meta charset=utf-8><style>body{{margin:0}}{single}</style>{pg}")
    print(f"{len(pages)} slides -> {path}")
    return path

if __name__ == "__main__":
    render(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else "preview")
