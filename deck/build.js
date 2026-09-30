const pptxgen = require("pptxgenjs");

// ---------- Design system — taken from the ValenOS site ----------
const PAPER = "F7F5F1"; // warm off-white, dominant
const CARD  = "FFFFFF";
const INK   = "1A1917"; // near-black
const MUTED = "6B665C";
const DIM   = "9A9488";
const HAIR  = "E4DFD5";
const GOLD  = "A8813C"; // accent
const MARK  = "F0E6CE"; // highlight wash
const DGOLD = "D9B871"; // accent on dark
const DMUT  = "8A857B"; // muted on dark

const F = "Arial";
const M = 0.62;
const W = 10, H = 5.625;

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "V&P — ValenOS";
pres.title  = "ValenOS — Investor Pitch";

let n = 0;
function slide(dark = false) {
  n += 1;
  const s = pres.addSlide();
  s.background = { color: dark ? INK : PAPER };
  s.addText("V&P   ValenOS", {
    isTextBox: true, x: M, y: 0.32, w: 3, h: 0.22,
    fontFace: F, fontSize: 8.5, bold: true, charSpacing: 2,
    color: dark ? "55514A" : DIM, margin: 0, valign: "middle",
  });
  s.addText(String(n).padStart(2, "0"), {
    isTextBox: true, x: W - M - 1, y: 0.32, w: 1, h: 0.22,
    fontFace: F, fontSize: 8.5, color: dark ? "55514A" : DIM,
    align: "right", margin: 0, valign: "middle",
  });
  return s;
}

// The one repeated motif: a small gold dot.
function dot(s, x, y, size = 0.075, color = GOLD) {
  s.addShape(pres.ShapeType.ellipse, { x, y, w: size, h: size, fill: { color } });
}

function eyebrow(s, text, y = 1.0, color = GOLD) {
  s.addText(text, {
    isTextBox: true, x: M, y, w: 6.5, h: 0.22,
    fontFace: F, fontSize: 9, bold: true, charSpacing: 2.2,
    color, margin: 0, valign: "middle",
  });
}

// Sized, labelled slot for a real product screenshot.
function shot(s, x, y, w, h, label) {
  s.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.05,
    fill: { color: CARD }, line: { color: HAIR, width: 1 },
  });
  s.addText("SCREENSHOT", {
    isTextBox: true, x, y: y + h / 2 - 0.36, w, h: 0.24,
    fontFace: F, fontSize: 9, bold: true, charSpacing: 2, color: DIM, align: "center", margin: 0,
  });
  s.addText(label, {
    isTextBox: true, x: x + 0.2, y: y + h / 2 - 0.07, w: w - 0.4, h: 0.7,
    fontFace: F, fontSize: 10.5, color: DIM, align: "center", margin: 0, valign: "top", lineSpacing: 15,
  });
}

// ============================================================
// 01 — HOOK
// ============================================================
{
  const s = slide(true);
  s.addText(
    [
      { text: "What if your CRM\ndidn’t just record the work — ", options: { color: PAPER } },
      { text: "it did the work?", options: { color: DGOLD } },
    ],
    {
      isTextBox: true, x: M, y: 1.85, w: 8.6, h: 2.0,
      fontFace: F, fontSize: 32, bold: true, charSpacing: -0.7, lineSpacing: 41,
      margin: 0, valign: "top",
    }
  );
  s.addText("An AI-native CRM for B2B revenue teams.", {
    isTextBox: true, x: M, y: 4.45, w: 7, h: 0.3,
    fontFace: F, fontSize: 12, color: DMUT, margin: 0, valign: "middle",
  });
  s.addNotes(
    "[0:00–0:25] Open on the question, then stop talking for a beat.\n" +
    "Every CRM you have ever used is a filing cabinet. You feed it, it remembers. " +
    "That is the whole deal. We think that deal is finished."
  );
}

// ============================================================
// 02 — THE MESS
// ============================================================
{
  const s = slide();
  eyebrow(s, "THE MESS");
  s.addText("The work of selling is scattered\nacross nine different tools.", {
    isTextBox: true, x: M, y: 1.35, w: 8.6, h: 1.1,
    fontFace: F, fontSize: 26, bold: true, charSpacing: -0.6, lineSpacing: 34,
    color: INK, margin: 0, valign: "top",
  });

  const items = ["CRM", "Inbox", "Calendar", "Calls", "Lead gen", "Enrichment", "Follow-ups", "Automation", "Sales ops"];
  const cols = 3, cw = 2.75, ch = 0.6, gx = 0.13, gy = 0.13;
  items.forEach((label, i) => {
    const cx = M + (i % cols) * (cw + gx);
    const cy = 2.96 + Math.floor(i / cols) * (ch + gy);
    s.addShape(pres.ShapeType.roundRect, {
      x: cx, y: cy, w: cw, h: ch, rectRadius: 0.04,
      fill: { color: CARD }, line: { color: HAIR, width: 1 },
    });
    s.addText(label, {
      isTextBox: true, x: cx + 0.28, y: cy, w: cw - 0.4, h: ch,
      fontFace: F, fontSize: 12, color: MUTED, margin: 0, valign: "middle",
    });
  });
  s.addNotes(
    "[0:25–0:55] Nine systems, nine logins, nine half-pictures of the same customer.\n" +
    "The context that actually decides the deal — what was said on the call, what was promised in " +
    "the email, what procurement is waiting on — is split across all of them. Nothing holds the whole relationship."
  );
}

// ============================================================
// 03 — THE OLD MODEL
// ============================================================
{
  const s = slide();
  eyebrow(s, "THE OLD MODEL");
  s.addText("Your CRM doesn’t do the work.\nIt waits for you to do it.", {
    isTextBox: true, x: M, y: 1.4, w: 8.6, h: 1.2,
    fontFace: F, fontSize: 28, bold: true, charSpacing: -0.6, lineSpacing: 36,
    color: INK, margin: 0, valign: "top",
  });

  ["People enter.", "People maintain.", "People decide.", "People execute."].forEach((t, i) => {
    s.addText(t, {
      isTextBox: true, x: M + i * 2.28, y: 3.2, w: 2.2, h: 0.4,
      fontFace: F, fontSize: 13, color: MUTED, margin: 0, valign: "middle",
    });
  });
  s.addText("Sales teams lose their days to research, first emails and CRM updates —\nwith little time left for the buyers.", {
    isTextBox: true, x: M, y: 3.95, w: 8.6, h: 0.65,
    fontFace: F, fontSize: 12, color: DIM, lineSpacing: 18, margin: 0, valign: "top",
  });
  s.addNotes(
    "[0:55–1:20] Ask the room: who here has someone whose actual job is keeping the CRM clean?\n" +
    "That is the tell. The software is not working for you — you are working for the software. " +
    "That is the problem we watched our own team have."
  );
}

// ============================================================
// 04 — THE NEW MODEL
// ============================================================
{
  const s = slide(true);
  dot(s, M, 1.62, 0.1, DGOLD);
  s.addText("ValenOS", {
    isTextBox: true, x: M + 0.22, y: 1.5, w: 4, h: 0.32,
    fontFace: F, fontSize: 11, bold: true, charSpacing: 2.2, color: DGOLD, margin: 0, valign: "middle",
  });
  s.addText("AI agents live\ninside your CRM.", {
    isTextBox: true, x: M, y: 2.05, w: 8.6, h: 1.6,
    fontFace: F, fontSize: 40, bold: true, charSpacing: -1.2, lineSpacing: 48,
    color: PAPER, margin: 0, valign: "top",
  });
  s.addText("Not a copilot bolted onto a database.\nThe system itself takes part in the sale.", {
    isTextBox: true, x: M, y: 3.95, w: 7, h: 0.8,
    fontFace: F, fontSize: 14, color: DMUT, lineSpacing: 22, margin: 0, valign: "top",
  });
  s.addNotes(
    "[1:20–1:40] This is the turn of the whole pitch. Say it slowly and let it land.\n" +
    "Agents sit inside the system, with the company’s full context, working alongside the team."
  );
}

// ============================================================
// 05 — THE PROOF: without context vs with context
// ============================================================
{
  const s = slide();
  s.addText("Same agent. Same prospect.\nOne of them has read everything.", {
    isTextBox: true, x: M, y: 0.88, w: 8.6, h: 0.95,
    fontFace: F, fontSize: 22, bold: true, charSpacing: -0.5, lineSpacing: 28,
    color: INK, margin: 0, valign: "top",
  });

  const cy = 2.12, ch = 2.55, cw = 4.2;
  // Left — without context
  s.addText("WITHOUT CONTEXT", {
    isTextBox: true, x: M, y: 1.78, w: cw, h: 0.24,
    fontFace: F, fontSize: 8.5, bold: true, charSpacing: 1.8, color: DIM, margin: 0, valign: "middle",
  });
  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: cy, w: cw, h: ch, rectRadius: 0.05,
    fill: { color: CARD }, line: { color: HAIR, width: 1 },
  });
  s.addText(
    "Hi Marta,\n\nI hope this email finds you well. I wanted to reach out and introduce our company.\n\n" +
    "We help companies of every size find the right people, hire faster and grow.",
    {
      isTextBox: true, x: M + 0.26, y: cy + 0.18, w: cw - 0.52, h: ch - 0.36,
      fontFace: F, fontSize: 10, color: DIM, lineSpacing: 15, margin: 0, valign: "top",
    }
  );

  // Right — with context
  const rx = M + cw + 0.36;
  s.addText("WITH CONTEXT", {
    isTextBox: true, x: rx, y: 1.78, w: cw, h: 0.24,
    fontFace: F, fontSize: 8.5, bold: true, charSpacing: 1.8, color: GOLD, margin: 0, valign: "middle",
  });
  s.addShape(pres.ShapeType.roundRect, {
    x: rx, y: cy, w: cw, h: ch, rectRadius: 0.05,
    fill: { color: CARD }, line: { color: GOLD, width: 1.25 },
  });
  s.addText(
    [
      { text: "Hi Marta,\n\nYou need all four people " },
      { text: "selling by March", options: { highlight: MARK } },
      { text: ", so the plan works back from that date.\n\nAs we agreed on Tuesday, we fill " },
      { text: "two roles in Gdańsk", options: { highlight: MARK } },
      { text: " first, then the other two.\n\nI will send your procurement team " },
      { text: "two references", options: { highlight: MARK } },
      { text: " this week." },
    ],
    {
      isTextBox: true, x: rx + 0.26, y: cy + 0.18, w: cw - 0.52, h: ch - 0.36,
      fontFace: F, fontSize: 10, color: INK, lineSpacing: 15, margin: 0, valign: "top",
    }
  );

  s.addText("Nobody typed those details into a prompt. Every highlighted line was read from an email, a meeting and a note already in the CRM.", {
    isTextBox: true, x: M, y: 4.8, w: 8.76, h: 0.3,
    fontFace: F, fontSize: 10.5, color: MUTED, margin: 0, valign: "middle",
  });
  s.addNotes(
    "[1:40–2:15] THE slide. Give them time to read both — say nothing for four or five seconds.\n" +
    "Left is what every AI sales tool on the market produces. Right is the same agent with the " +
    "relationship behind it. And every line is cited back to its source, so people trust it enough to send it."
  );
}

// ============================================================
// 06 — THE CONTEXT ENGINE
// ============================================================
{
  const s = slide();
  eyebrow(s, "THE CONTEXT ADVANTAGE");
  s.addText("It reads your inbox\nbefore it writes a word.", {
    isTextBox: true, x: M, y: 1.35, w: 8.6, h: 1.1,
    fontFace: F, fontSize: 26, bold: true, charSpacing: -0.6, lineSpacing: 34,
    color: INK, margin: 0, valign: "top",
  });

  const stages = [
    { k: "CONNECT", v: "Inbox, calendar, calls,\nyour team, the web.\nGoogle and Microsoft 365." },
    { k: "CONTEXT", v: "People, companies, deals,\nnotes, tasks, transcripts —\nlinked into one picture." },
    { k: "ACT",     v: "Read by every agent:\nLead, Enrichment,\nFollow-up, CRM." },
  ];
  const cw = 2.72, gx = 0.3;
  stages.forEach((st, i) => {
    const cx = M + i * (cw + gx);
    dot(s, cx, 3.02, 0.07, i === 2 ? GOLD : DIM);
    s.addText(st.k, {
      isTextBox: true, x: cx + 0.17, y: 2.91, w: cw - 0.2, h: 0.3,
      fontFace: F, fontSize: 10, bold: true, charSpacing: 1.8,
      color: i === 2 ? GOLD : INK, margin: 0, valign: "middle",
    });
    s.addText(st.v, {
      isTextBox: true, x: cx + 0.17, y: 3.38, w: cw - 0.2, h: 1.15,
      fontFace: F, fontSize: 11.5, color: MUTED, lineSpacing: 17, margin: 0, valign: "top",
    });
    if (i < 2) {
      s.addText("→", {
        isTextBox: true, x: cx + cw - 0.04, y: 2.91, w: 0.34, h: 0.3,
        fontFace: F, fontSize: 13, color: DIM, align: "center", margin: 0, valign: "middle",
      });
    }
  });
  s.addNotes(
    "[2:15–2:40] This is the moat, and it is a boring one: we own the CRM, so we own the context.\n" +
    "A bolt-on assistant sees one prompt. Our agents see the whole relationship — and they all read " +
    "the same context, which is what lets them hand work to each other."
  );
}

// ============================================================
// 07 — THE CHAIN (how it actually works)
// ============================================================
{
  const s = slide();
  eyebrow(s, "HOW IT WORKS");
  s.addText("Agents hand work to each other.\nYou keep the veto.", {
    isTextBox: true, x: M, y: 1.32, w: 8.6, h: 1.1,
    fontFace: F, fontSize: 25, bold: true, charSpacing: -0.6, lineSpacing: 32,
    color: INK, margin: 0, valign: "top",
  });

  const nodes = [
    { t: "Record created",   d: "New company\nadded",        a: false },
    { t: "Enrichment agent", d: "Researches the\ncompany",   a: false },
    { t: "Lead agent",       d: "Scores for ideal\nfit",     a: false },
    { t: "You approve",      d: "Before anything\nsends",    a: true  },
    { t: "Follow-up agent",  d: "Writes and sends\nthe email", a: false },
  ];
  const cw = 1.46, gx = 0.26, cy = 2.85, ch = 1.28;
  const rowW = nodes.length * cw + (nodes.length - 1) * gx;

  // Connector hairline, drawn first so the cards sit on top of it.
  s.addShape(pres.ShapeType.line, {
    x: M, y: cy + ch / 2, w: rowW, h: 0, line: { color: HAIR, width: 1.25 },
  });

  nodes.forEach((nd, i) => {
    const cx = M + i * (cw + gx);
    s.addShape(pres.ShapeType.roundRect, {
      x: cx, y: cy, w: cw, h: ch, rectRadius: 0.05,
      fill: { color: nd.a ? MARK : CARD },
      line: { color: nd.a ? GOLD : HAIR, width: nd.a ? 1.25 : 1 },
    });
    s.addText(nd.t, {
      isTextBox: true, x: cx + 0.16, y: cy + 0.2, w: cw - 0.32, h: 0.46,
      fontFace: F, fontSize: 10.5, bold: true, color: nd.a ? GOLD : INK,
      margin: 0, valign: "top", lineSpacing: 13,
    });
    s.addText(nd.d, {
      isTextBox: true, x: cx + 0.16, y: cy + 0.72, w: cw - 0.32, h: 0.46,
      fontFace: F, fontSize: 9, color: MUTED, margin: 0, valign: "top", lineSpacing: 12,
    });
  });

  s.addText("One trigger starts the chain. Add an approval step anywhere you want a look first.", {
    isTextBox: true, x: M, y: 4.45, w: 8.76, h: 0.3,
    fontFace: F, fontSize: 11.5, color: MUTED, margin: 0, valign: "middle",
  });
  s.addNotes(
    "[2:40–3:05] This is the architecture answer without a tech-stack slide.\n" +
    "Connected data gives deep context, agents act on it, workflows chain them together, and a " +
    "human approval step sits wherever the team wants one. Autonomy is a dial, not a switch."
  );
}

// ============================================================
// 08 — THE PRODUCT
// ============================================================
{
  const s = slide();
  s.addText("Your pipeline fills itself overnight.", {
    isTextBox: true, x: M, y: 0.95, w: 8.6, h: 0.45,
    fontFace: F, fontSize: 22, bold: true, charSpacing: -0.5, color: INK, margin: 0, valign: "middle",
  });
  s.addText("The Lead agent finds companies that are hiring, growing or changing leadership, scores each one, and drafts the first email.", {
    isTextBox: true, x: M, y: 1.45, w: 8.5, h: 0.32,
    fontFace: F, fontSize: 12, color: MUTED, margin: 0, valign: "middle",
  });
  shot(s, M, 1.95, W - 2 * M, 2.95, "“Companies to work — filled by agents today”\nwith a drafted email and Send / Discard / Save draft\n8.76 × 2.95 in · export at 2×");
  s.addNotes(
    "[3:05–3:25] Let them look before you talk.\n" +
    "You open ValenOS in the morning and the list is already there, already scored, with the first " +
    "email written. Your job is to say yes, no, or change this line — not to do the research."
  );
}

// ============================================================
// 09 — OLD VS NEW
// ============================================================
{
  const s = slide();
  s.addText("A different kind of product,\nnot a better database.", {
    isTextBox: true, x: M, y: 0.95, w: 8.6, h: 1.0,
    fontFace: F, fontSize: 25, bold: true, charSpacing: -0.5, lineSpacing: 32,
    color: INK, margin: 0, valign: "top",
  });

  const cols = [
    { h: "TRADITIONAL CRM", hc: DIM,  c: MUTED, items: ["A database", "Operated by people", "Records what happened", "Fragmented tooling"] },
    { h: "VALENOS",         hc: GOLD, c: INK,   items: ["A contextual environment", "Operated by agents and people", "Acts around the sale", "Connected customer context"] },
  ];
  cols.forEach((col, i) => {
    const cx = M + i * 4.48;
    s.addText(col.h, {
      isTextBox: true, x: cx, y: 2.55, w: 4.1, h: 0.28,
      fontFace: F, fontSize: 10, bold: true, charSpacing: 1.8, color: col.hc, margin: 0, valign: "middle",
    });
    s.addShape(pres.ShapeType.line, { x: cx, y: 2.95, w: 4.1, h: 0, line: { color: HAIR, width: 1.25 } });
    col.items.forEach((it, j) => {
      s.addText(it, {
        isTextBox: true, x: cx, y: 3.15 + j * 0.47, w: 4.1, h: 0.34,
        fontFace: F, fontSize: 12.5, color: col.c, margin: 0, valign: "middle",
      });
    });
  });
  s.addNotes(
    "[3:25–3:40] Don’t read the columns. Say the one-liner and move on:\n" +
    "Old CRM records what happened. ValenOS helps make what happens next."
  );
}

// ============================================================
// 10 — TRACTION
// ============================================================
{
  const s = slide();
  eyebrow(s, "WHERE WE ARE");
  s.addText("Early — and already validated.", {
    isTextBox: true, x: M, y: 1.35, w: 8.6, h: 0.5,
    fontFace: F, fontSize: 25, bold: true, charSpacing: -0.5, color: INK, margin: 0, valign: "middle",
  });

  const stats = [
    { n: "5",   l: "companies testing" },
    { n: "1",   l: "pilot — Dale Carnegie Poland" },
    { n: "Jun", l: "first line of code, 2026" },
    { n: "2",   l: "co-founders" },
  ];
  stats.forEach((st, i) => {
    const cx = M + i * 2.28;
    s.addText(st.n, {
      isTextBox: true, x: cx, y: 2.5, w: 2.2, h: 0.85,
      fontFace: F, fontSize: 44, bold: true, charSpacing: -1.5,
      color: i === 1 ? GOLD : INK, margin: 0, valign: "middle",
    });
    s.addText(st.l, {
      isTextBox: true, x: cx, y: 3.42, w: 2.15, h: 0.6,
      fontFace: F, fontSize: 11, color: MUTED, lineSpacing: 15, margin: 0, valign: "top",
    });
  });
  s.addText("Testing, not yet paying. We’re being precise about that.", {
    isTextBox: true, x: M, y: 4.5, w: 8.6, h: 0.32,
    fontFace: F, fontSize: 11.5, color: DIM, margin: 0, valign: "middle",
  });
  s.addNotes(
    "[3:40–4:05] Be straight about the stage — it buys credibility for everything else.\n" +
    "Five companies are testing. None are paying yet. The Dale Carnegie Poland pilot is the one " +
    "that tells us this is real. All of it exists four months after the first commit in June."
  );
}

// ============================================================
// 11 — FOUNDERS
// ============================================================
{
  const s = slide();
  s.addText("Two friends from Warsaw,\nbuilding the CRM we wanted.", {
    isTextBox: true, x: M, y: 1.35, w: 8.6, h: 1.1,
    fontFace: F, fontSize: 26, bold: true, charSpacing: -0.6, lineSpacing: 34,
    color: INK, margin: 0, valign: "top",
  });

  const people = [
    { i: "MM", n: "Mario Martinez", r: "Sales and strategy" },
    { i: "BS", n: "Bruno Smuga",    r: "Builds the product" },
  ];
  people.forEach((p, i) => {
    const cx = M + i * 3.2;
    s.addShape(pres.ShapeType.ellipse, {
      x: cx, y: 2.95, w: 0.72, h: 0.72,
      fill: { color: MARK }, line: { color: HAIR, width: 1 },
    });
    s.addText(p.i, {
      isTextBox: true, x: cx, y: 2.95, w: 0.72, h: 0.72,
      fontFace: F, fontSize: 12, bold: true, color: GOLD, align: "center", margin: 0, valign: "middle",
    });
    s.addText(p.n, {
      isTextBox: true, x: cx + 0.88, y: 3.03, w: 2.2, h: 0.3,
      fontFace: F, fontSize: 13.5, bold: true, color: INK, margin: 0, valign: "middle",
    });
    s.addText(p.r, {
      isTextBox: true, x: cx + 0.88, y: 3.34, w: 2.2, h: 0.3,
      fontFace: F, fontSize: 11.5, color: MUTED, margin: 0, valign: "middle",
    });
  });

  s.addText("We’ve known each other since we were kids. We watched sales teams — ours included —\nlose their days to work that software should be doing. So we started building.", {
    isTextBox: true, x: M, y: 4.15, w: 8.6, h: 0.7,
    fontFace: F, fontSize: 12.5, color: MUTED, lineSpacing: 19, margin: 0, valign: "top",
  });
  s.addNotes(
    "[4:05–4:20] Short and human. Thirty years of trust doesn’t show up on a cap table, " +
    "but it is why two people can move this fast without breaking."
  );
}

// ============================================================
// 12 — FOUNDING MEMBERS
// ============================================================
{
  const s = slide();
  eyebrow(s, "FOUNDING MEMBERS");
  s.addText("We’re shaping the rest with\nour first companies.", {
    isTextBox: true, x: M, y: 1.32, w: 8.6, h: 1.05,
    fontFace: F, fontSize: 25, bold: true, charSpacing: -0.5, lineSpacing: 32,
    color: INK, margin: 0, valign: "top",
  });

  const steps = [
    { n: "1", t: "Apply",                 d: "Three fields and one\nquestion about where\nsales loses time." },
    { n: "2", t: "A call with both of us", d: "We learn how you sell\nand show you where\nValenOS is." },
    { n: "3", t: "Setup",                 d: "We connect your inbox,\ncalendar and tools, and\nbuild your first workflows." },
    { n: "4", t: "Building it together",  d: "You use it on live deals\nand tell us what’s missing.\nWe build it." },
  ];
  const cw = 2.05, gx = 0.2;
  steps.forEach((st, i) => {
    const cx = M + i * (cw + gx);
    if (i < 3) {
      s.addShape(pres.ShapeType.line, {
        x: cx + 0.42, y: 2.93, w: cw + gx - 0.48, h: 0, line: { color: HAIR, width: 1.25 },
      });
    }
    s.addShape(pres.ShapeType.ellipse, {
      x: cx, y: 2.75, w: 0.36, h: 0.36,
      fill: { color: i === 3 ? GOLD : CARD }, line: { color: i === 3 ? GOLD : HAIR, width: 1.25 },
    });
    s.addText(st.n, {
      isTextBox: true, x: cx, y: 2.75, w: 0.36, h: 0.36,
      fontFace: F, fontSize: 10, bold: true, color: i === 3 ? "FFFFFF" : MUTED,
      align: "center", margin: 0, valign: "middle",
    });
    s.addText(st.t, {
      isTextBox: true, x: cx, y: 3.3, w: cw, h: 0.3,
      fontFace: F, fontSize: 12.5, bold: true, color: INK, margin: 0, valign: "middle",
    });
    s.addText(st.d, {
      isTextBox: true, x: cx, y: 3.66, w: cw - 0.05, h: 1.0,
      fontFace: F, fontSize: 10.5, color: MUTED, lineSpacing: 15, margin: 0, valign: "top",
    });
  });
  s.addNotes(
    "[4:20–4:35] Founding member is not a discount — it is access to the two of us. " +
    "We set it up with you, we answer when you write, and we build what you tell us is missing."
  );
}

// ============================================================
// 13 — THE RAISE
// ============================================================
{
  const s = slide();
  eyebrow(s, "THE RAISE");
  s.addText("$95,000", {
    isTextBox: true, x: M, y: 1.75, w: 8.6, h: 1.0,
    fontFace: F, fontSize: 56, bold: true, charSpacing: -2, color: INK, margin: 0, valign: "middle",
  });
  s.addText("for 7% equity + incremented future ownership", {
    isTextBox: true, x: M, y: 2.9, w: 8.6, h: 0.4,
    fontFace: F, fontSize: 17, color: GOLD, margin: 0, valign: "middle",
  });
  s.addText("To accelerate development and commercialization of the product.", {
    isTextBox: true, x: M, y: 3.8, w: 7.5, h: 0.4,
    fontFace: F, fontSize: 13, color: MUTED, margin: 0, valign: "middle",
  });
  s.addNotes("[4:35–4:50] State the terms once, plainly, and stop. Do not over-explain the raise.");
}

// ============================================================
// 14 — CLOSING
// ============================================================
{
  const s = slide(true);
  s.addText("Revenue, not records.", {
    isTextBox: true, x: M, y: 1.7, w: 8.6, h: 0.9,
    fontFace: F, fontSize: 42, bold: true, charSpacing: -1.3, color: PAPER, margin: 0, valign: "middle",
  });
  s.addText("Old CRM records what happened. ValenOS makes what happens next.", {
    isTextBox: true, x: M, y: 2.72, w: 8.6, h: 0.35,
    fontFace: F, fontSize: 14, color: DMUT, margin: 0, valign: "middle",
  });
  dot(s, M, 3.77, 0.1, DGOLD);
  s.addText("Become a founding member.", {
    isTextBox: true, x: M + 0.24, y: 3.65, w: 6, h: 0.35,
    fontFace: F, fontSize: 15, bold: true, color: DGOLD, margin: 0, valign: "middle",
  });
  s.addText("Build it with us while it’s still being shaped.", {
    isTextBox: true, x: M + 0.24, y: 4.07, w: 7, h: 0.32,
    fontFace: F, fontSize: 12, color: DMUT, margin: 0, valign: "middle",
  });
  s.addNotes(
    "[4:50–5:05] Close on the invitation, not on an ask.\n" +
    "We are not looking for customers yet. We are looking for founding members — companies and " +
    "backers who want to shape what a CRM becomes when agents are actually part of the company.\n" +
    "[ADD YOUR CONTACT DETAILS HERE BEFORE PRESENTING.]"
  );
}

// ============================================================
// 15 — APPENDIX: market (kept out of the 5-minute run)
// ============================================================
{
  const s = slide();
  eyebrow(s, "APPENDIX — MARKET", 1.0, DIM);
  s.addText("Every seat that maintains a CRM\nis a seat an agent can work beside.", {
    isTextBox: true, x: M, y: 1.35, w: 8.6, h: 1.1,
    fontFace: F, fontSize: 23, bold: true, charSpacing: -0.5, lineSpacing: 30,
    color: INK, margin: 0, valign: "top",
  });

  const boxes = [
    { k: "TOTAL MARKET",     l: "Global CRM software spend" },
    { k: "SERVICEABLE",      l: "B2B teams scaling acquisition" },
    { k: "NEAR-TERM TARGET", l: "First segment we can win" },
  ];
  const cw = 2.72, gx = 0.3, by = 2.85, bh = 1.5;
  boxes.forEach((b, i) => {
    const cx = M + i * (cw + gx);
    s.addShape(pres.ShapeType.roundRect, {
      x: cx, y: by, w: cw, h: bh, rectRadius: 0.04,
      fill: { color: CARD }, line: { color: HAIR, width: 1 },
    });
    s.addText(b.k, {
      isTextBox: true, x: cx + 0.25, y: by + 0.22, w: cw - 0.5, h: 0.24,
      fontFace: F, fontSize: 8.5, bold: true, charSpacing: 1.6, color: MUTED, margin: 0, valign: "middle",
    });
    s.addText("$ —", {
      isTextBox: true, x: cx + 0.25, y: by + 0.55, w: cw - 0.5, h: 0.48,
      fontFace: F, fontSize: 26, bold: true, charSpacing: -0.8, color: DIM, margin: 0, valign: "middle",
    });
    s.addText(b.l, {
      isTextBox: true, x: cx + 0.25, y: by + 1.08, w: cw - 0.5, h: 0.3,
      fontFace: F, fontSize: 10.5, color: MUTED, margin: 0, valign: "middle",
    });
  });
  s.addText("Figures to be inserted. Leave this out of the 5-minute run unless you can source and defend every number.", {
    isTextBox: true, x: M, y: 4.58, w: 8.76, h: 0.3,
    fontFace: F, fontSize: 10.5, color: DIM, margin: 0, valign: "middle",
  });
  s.addNotes(
    "APPENDIX — not part of the 5-minute run. Structure is ready for real figures. " +
    "If you fill it in, move it to just before the raise. If you can’t source the numbers, delete it: " +
    "an invented TAM is the fastest way to lose a room that knows the market."
  );
}

pres.writeFile({ fileName: "ValenOS-Pitch-Deck.pptx" })
  .then(() => console.log("wrote ValenOS-Pitch-Deck.pptx —", n, "slides"));
