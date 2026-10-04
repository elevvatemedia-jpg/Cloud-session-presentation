FX = 3.85  # PLN/USD, the rate the previous V&P deck used, checked Sept 2026

# ---------- inference per client per month ----------
def inf(enrich_co, enrich_pp, per_email, src, crm):
    co_screened, co_enriched, contacts, emails, actions = 1000, 250, 600, 2400, 2000
    usd = (co_screened*src + co_enriched*enrich_co + contacts*enrich_pp
           + emails*per_email + actions*crm)
    return usd, usd*FX

d_usd, d_pln = inf(0.15, 0.025, 0.020, 0.03, 0.005)   # disciplined
u_usd, u_pln = inf(0.60, 0.070, 0.040, 0.03, 0.010)   # undisciplined
print(f"inference disciplined   ${d_usd:7.1f}  {d_pln:7.0f} PLN")
print(f"inference undisciplined ${u_usd:7.1f}  {u_pln:7.0f} PLN")

# ---------- cost to serve ----------
INFRA = {1: 770, 10: 1230, 50: 3465}   # total platform PLN/month
DATA  = {1: 240, 10: 230, 50: 215}
SUPP  = {1: 300, 10: 250, 50: 200}
print("\ncost to serve one client / month")
for n in (1, 10, 50):
    for name, inference in (("disc", d_pln), ("undisc", u_pln)):
        tot = inference + DATA[n] + INFRA[n]/n + SUPP[n]
        print(f"  n={n:2d} {name:6s} inf {inference:5.0f} data {DATA[n]:4d} "
              f"infra {INFRA[n]/n:5.0f} supp {SUPP[n]:4d} = {tot:6.0f}")

print("\ngross margin")
for price in (3000, 5000):
    for n in (10, 50):
        for name, inference in (("disc", d_pln), ("undisc", u_pln)):
            c = inference + DATA[n] + INFRA[n]/n + SUPP[n]
            print(f"  {price} PLN n={n:2d} {name:6s} cost {c:6.0f} "
                  f"GP {price-c:6.0f} margin {100*(price-c)/price:5.1f}%")

# ---------- founding discount ----------
print("\nfounding discount, 2000 PLN/mo forgone + 6000 setup forgone")
for k in (4, 10):
    print(f"  {k:2d} members: {k*2000:6d}/mo  {k*2000*12:7d}/yr  "
          f"3yr {k*2000*36:7d} + setup {k*6000:6d} = {k*2000*36+k*6000:7d}")
print(f"  per member over 3 years: {2000*36+6000}")

# ---------- CAC ----------
print("\nCAC, 26 meetings/mo")
for spend, label in ((2000, "tools only"), (4000, "tools + Mario time at 2000")):
    for r in (0.05, 0.08, 0.10, 0.15):
        print(f"  {label:26s} close {r:5.0%}  closes {26*r:4.2f}  CAC {spend/(26*r):7.0f}")
FIXED_NO_ZUS = 770+2000+600+400+150   # infra base, own outbound, accounting, tooling, misc
FIXED_ZUS    = FIXED_NO_ZUS + 1900    # sole-shareholder ZUS exposure
SAL_ONE = 10000*1.2048                # 10k gross UoP, employer cost
print(f"fixed no salaries, 2+ shareholders : {FIXED_NO_ZUS:.0f}")
print(f"fixed no salaries, jednoosobowa    : {FIXED_ZUS:.0f}")
print(f"employer cost, one founder at 10k  : {SAL_ONE:.0f}")
print(f"employer cost, both founders       : {2*SAL_ONE:.0f}\n")

# GP per client at small scale (3 clients, infra 770/3=257)
GP3_F_d  = 3000 - (541+240+257+300)
GP3_F_u  = 3000 - (1301+240+257+300)
GP3_S_d  = 5000 - (541+240+257+300)
GP10_F_d, GP10_S_d = 1856, 3856
GP10_F_u, GP10_S_u = 1096, 3096
print(f"GP/client founding disc @3 clients : {GP3_F_d:.0f}")
print(f"GP/client founding undisc @3       : {GP3_F_u:.0f}")
print(f"GP/client standard disc @3         : {GP3_S_d:.0f}\n")

print("BREAK-EVEN, no salaries")
for lbl, fx in (("2+ shareholders", FIXED_NO_ZUS), ("jednoosobowa", FIXED_ZUS)):
    for p, gp, pn in ((3000, GP3_F_d, "founding disc"), (3000, GP3_F_u, "founding undisc"),
                      (5000, GP3_S_d, "standard disc")):
        import math
        print(f"  {lbl:16s} {pn:16s} {fx/gp:5.2f} -> {math.ceil(fx/gp)} clients")

print("\nBREAK-EVEN with salaries (4 founding + N standard)")
import math
for lbl, sal in (("Bruno only", SAL_ONE), ("both founders", 2*SAL_ONE)):
    for dn, gf, gs in (("disc", GP10_F_d, GP10_S_d), ("undisc", GP10_F_u, GP10_S_u)):
        need = FIXED_NO_ZUS + sal - 4*gf
        n_std = math.ceil(need/gs)
        print(f"  {lbl:14s} {dn:6s} target {FIXED_NO_ZUS+sal:7.0f}  "
              f"4 founding cover {4*gf:6.0f}  need {n_std} standard  "
              f"= {4+n_std} clients total")

# ---------- 12 month plan ----------
print("\n12-MONTH PLAN (base case)")
MEET=26; CHURN=0.04
rate = [0.06]*3 + [0.08]*3 + [0.10]*3 + [0.12]*3
cap_founding = 4
f, s = 0.0, 0.0          # founding, standard client counts
cum = 0
print(" m  rate close  fnd  std  tot      MRR   setup   revenue    COGS   fixed    hire       net       cum")
for m in range(12):
    f, s = f*(1-CHURN), s*(1-CHURN)
    closes = MEET*rate[m]
    if f+ (cap_founding-f if m<3 else 0) and m < 3:
        add_f = min(closes, max(0.0, cap_founding - f)); add_s = 0.0
    else:
        add_f, add_s = 0.0, closes
    f += add_f; s += add_s
    tot = f+s
    cps = 1350 if m < 3 else (1200 if m < 8 else 1100)
    mrr = f*3000 + s*5000
    setup = add_s*6000
    rev = mrr + setup
    cogs = tot*cps
    fixed = FIXED_NO_ZUS
    hire = 10000 if m >= 7 else 0
    net = rev - cogs - fixed - hire
    cum += net
    print(f"{m+1:2d} {rate[m]:5.0%} {closes:5.2f} {f:4.1f} {s:4.1f} {tot:5.1f} "
          f"{mrr:8.0f} {setup:7.0f} {rev:9.0f} {cogs:7.0f} {fixed:7.0f} {hire:7d} "
          f"{net:9.0f} {cum:9.0f}")
print(f"\ncum less market founder comp (24,100 x 12 = 289,200): {cum-289200:.0f}")

print("\nSENSITIVITY on close rate, month 12")
for flat in (0.04, 0.08, 0.12, 0.15):
    f2, s2 = 0.0, 0.0
    for m in range(12):
        f2, s2 = f2*(1-CHURN), s2*(1-CHURN)
        c = MEET*flat
        if m < 3:
            a = min(c, max(0.0, cap_founding-f2)); f2 += a; s2 += c-a
        else:
            s2 += c
    print(f"  close {flat:4.0%}  clients {f2+s2:5.1f}  MRR {f2*3000+s2*5000:8.0f}  "
          f"ARR run-rate {(f2*3000+s2*5000)*12:9.0f}")

print("\nCAPACITY, Mario hours/month")
for n in (5, 10, 20, 30):
    h = 40 + 26*1.5 + 2.5*8 + n*3
    print(f"  {n:2d} clients: outbound 40 + meetings 39 + onboarding 20 + support {n*3:3d} = {h:5.0f} h")

print("\n6-MONTH BUILD BURN")
items = [("Own outbound stack, 6 mo", 12000), ("Design contractor, fixed scope", 12000),
         ("Platform infrastructure, 6 mo", 4600), ("Development inference, 6 mo", 4800),
         ("Legal: convertible + minor opinion", 5000), ("GDPR/PKE opinion, DPA, policies", 4000),
         ("Accounting and housekeeping, 6 mo", 3600), ("Buffer", 4000)]
t = sum(v for _, v in items)
for k, v in items: print(f"  {k:36s} {v:6d}  {100*v/t:4.1f}%")
print(f"  {'TOTAL':36s} {t:6d}")
print(f"  build (design+infra+inference) {12000+4600+4800:6d} = {100*(12000+4600+4800)/t:.0f}%")
SETUP_GP = 6000 - 1200
cases = [
  ("pessimistic", 3096, 0.05, 3077),   # undisciplined inference, 5% churn, 5% close + founder time
  ("base",        3856, 0.04, 1923),   # disciplined, 4% churn, 8% close + founder time
  ("optimistic",  3975, 0.03, 1538),   # disciplined at scale, 3% churn, 10% close + founder time
]
print("STANDARD CLIENT, 5000 PLN/mo + 6000 setup")
for n, gp, ch, cac in cases:
    life = 1/ch
    ltv = gp*life + SETUP_GP
    print(f"  {n:12s} GP/mo {gp:5d}  churn {ch:4.0%} life {life:4.1f} mo  "
          f"LTV {ltv:7.0f}  CAC {cac:5d}  LTV/CAC {ltv/cac:5.1f}x  "
          f"payback {cac/ (gp+SETUP_GP):.2f} mo (setup counted) / {cac/gp:.2f} mo (subscription only)")
print("\nFOUNDING CLIENT, 3000 PLN/mo, no setup fee")
for n, gp, ch, cac in [("pessimistic",1096,0.05,3077),("base",1856,0.04,1923),("optimistic",1975,0.03,1538)]:
    life=1/ch; ltv=gp*life
    print(f"  {n:12s} GP/mo {gp:5d}  churn {ch:4.0%} life {life:4.1f} mo  "
          f"LTV {ltv:7.0f}  CAC {cac:5d}  LTV/CAC {ltv/cac:5.1f}x  payback {cac/gp:5.2f} mo")
print("\nchurn -> average lifetime:", {f"{c:.0%}": round(1/c,1) for c in (0.02,0.03,0.04,0.05,0.07)})
print("\ntrue cost per meeting if Mario's 40h/mo priced at 50 PLN/h:",
      f"{(2000+2000)/26:.0f} PLN vs the 77 PLN tools-only figure")
