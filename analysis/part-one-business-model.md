# ValenOS: Part one, the business model before the deck

For Mario and Bruno. English, since it is for us. Status: draft for correction.

Conventions used throughout. FX is **3.85 PLN to the dollar**. Everything drawn from the approved facts list is
unmarked. Everything else is marked **[assumption]** or **[forecast]** at the
point it is used. I am not a Polish lawyer or tax adviser; the corporate and
tax sections are a brief for a one hour conversation with one, not a substitute
for it.

---

## 0. What Mario settled, and what it changed

Four decisions came back. Two of them changed the arithmetic.

1. **The old deck is not a reference.** This is a new deck. Nothing is carried
   over: not the design language, not the structure, not its figures. Its
   284,500 PLN cost-of-work number is therefore also off the table as a given.
   If the problem slide needs a cost-of-today figure, I build it from scratch and
   label it an assumption on the slide, with the components printed.
2. **Mario's age and the corporate-law detail stay out of the pitch.** Agreed and
   adopted. One narrow carve-out below, because slide 10 in the brief's own spine
   is "the ask and the structure", and "the structure" means naming the
   instrument. That is commercial, not legal.
3. **The MVP ships in two weeks, given the funds.** This is the big one. It
   invalidates the six-month build budget I wrote and replaces it with something
   better. Section 1b is rebuilt and section 1c is new.
4. **No approval gate by default, available as configuration.** Settled, and it
   is the commercially strongest version of the answer: the default carries the
   pitch, the option removes the objection. Assumption four in section 5 is
   resolved and the product slide can state both in one line.

One thing I am noting once and then dropping, because it is a cost rather than a
legal point. If Valen is a single-shareholder sp. z o.o., the sole-shareholder
ZUS obligation is roughly **1,900 PLN per month, about 22,800 PLN a year.** That
moves break-even from three clients to four. It belongs in the model as a toggle
and nowhere near a slide. It stays in section 3 for that reason alone.

## 1a. What the angel actually gets for 50,000 PLN

### The problem with the question

50,000 PLN is about $13,000. It is a sum where the transaction cost of the
instrument is a material fraction of the instrument. That reframes the whole
question: the right structure is the one with the lowest friction, not the one
with the cleverest terms.

### Option A: a straight equity stake (podwyższenie kapitału zakładowego)

**Mechanics.** Shareholder resolution to increase share capital, which for an
sp. z o.o. ordinarily requires a notarial deed unless the existing articles
already provide for an increase without amending them. New udziały are created
at nominal value of at least 50 PLN each, almost certainly with agio (share
premium) so the angel pays 50,000 PLN for a small nominal amount, with the
excess going to kapitał zapasowy. Then a KRS filing, and the increase becomes
effective on registration rather than on signing.

**Cost.** Notary for a small increase is roughly 1,000 to 1,700 PLN plus VAT,
KRS filing 250 to 500 PLN, Monitor Sądowy publication 100 PLN, PCC at 0.5% on
the **nominal** increase only (a reason to structure most of the money as agio),
plus a lawyer to draft the resolution and an investment or shareholders'
agreement. Realistically **5,000 to 12,000 PLN all in**, which is 10% to 24% of
the round consumed by paperwork. [assumption on the fee ranges; confirm with a
Warsaw corporate lawyer]

**Dilution.** You have to put a pre-money valuation on a pre-revenue product.
At 500,000 PLN pre-money the angel gets 9.1% post. At 1,000,000 PLN, 4.8%. At
2,000,000 PLN, 2.4%.

**Why I am against it.** Either you price low enough that 50,000 PLN buys a
meaningful stake, in which case you have put a 500k PLN valuation on the public
record twelve to eighteen months before a seed round and anchored yourself
badly, or you price high enough to protect the next round, in which case the
angel is buying 2% to 3% and the notary has eaten a fifth of the money. Equity
also triggers the minor-shareholder machinery described below **now**, at
signing, rather than deferring it.

### Option B: a convertible loan (pożyczka konwertowalna)

**Mechanics.** Poland has no statutory SAFE. The working equivalent is an
ordinary written loan agreement with a conversion right or obligation at the
next priced round, at a valuation cap and/or a discount. No notary at signing,
no KRS filing, no valuation set today, no change to the cap table until
conversion. Typical Polish angel terms: **cap 1.5M to 3M PLN pre-money,
discount 15% to 20%, interest 0% to 5%, maturity 24 to 36 months.** [assumption
on typical terms]

**Two details worth getting right.** Use a low but non-zero interest rate rather
than 0%, because an interest-free loan from an unrelated party can raise a free
benefit (nieodpłatne świadczenie) question for CIT. And PCC on a loan to a
company is 0.5% payable by the borrower, with an exemption for loans from an
existing shareholder; the angel is not a shareholder yet, so budget **250 PLN**
of PCC. [both need the accountant's confirmation]

**Cost.** A template-based convertible reviewed by a Polish corporate lawyer:
roughly **2,000 to 4,000 PLN.** Bespoke with a full shareholders' agreement:
6,000 to 10,000 PLN.

**The one thing to negotiate hard.** What happens at maturity if there is no
next round. On the arithmetic in section 4, the likeliest outcome is that you
never raise again, which means a plain convertible matures into a 50,000 PLN
cash demand at the worst possible moment. Insist on a maturity clause that
**converts at the cap by default**, with extension and repayment as the angel's
options rather than yours.

### Option C: a revenue-share loan

**Mechanics.** 50,000 PLN repaid as a fixed percentage of monthly revenue until
a multiple cap is returned. Typical shape: 8% to 12% of revenue, cap 1.3x to
1.8x. No valuation, no dilution, no cap table change ever.

**Arithmetic at a 1.5x cap and 10% of revenue.** Total repayment 75,000 PLN. At
15,000 PLN of monthly revenue that is 1,500 PLN per month and 50 months to
clear. At 40,000 PLN of monthly revenue it is 4,000 PLN per month and 19 months.
In section 4's base case you cross 50,000 PLN of monthly revenue around month 6,
so the instrument clears in roughly 20 to 24 months and costs 25,000 PLN in
cash. [forecast, dependent on section 4]

**Why it is more attractive than it looks.** 25,000 PLN is less than the
dilution cost of giving away 5% of a company you believe will be worth more than
500,000 PLN, and it costs nothing in governance. **Why it is less attractive
than it looks.** The repayments land exactly in the months when every spare
zloty should be going into the first hire. And there is no upside for the angel,
which means you are asking a person to take equity-like risk for debt-like
return. Most angels will decline. It works with a family-office or
operator-lender type, not with a typical angel.

### Option D: do not raise

This has to be on the list, because the arithmetic in sections 3 and 4 puts it
there. 50,000 PLN is 25 months of your current 2,000 PLN per month tool spend,
or roughly the first two months of four founding members. Break-even with no
salaries is **three clients** (section 3). If the plan works, you do not need
the money; if it does not, 50,000 PLN does not save you. See section 7 for what
follows from that.

### Recommendation: the convertible loan, for four reasons

1. **It sets no valuation today.** You have no revenue. Any number you write
   down now is a guess that will be used against you in the next round.
2. **It keeps the cap table still** until there is something to price it
   against. With the product two weeks out, the next twelve months of selling
   will produce a far better valuation than any number defensible today.
3. **The transaction cost is 2,000 to 4,000 PLN instead of 5,000 to 12,000.** On
   a 50,000 PLN round, that difference is 10% to 16% of the money.
4. **Bruno signs it alone**, as the sole member of the zarząd, with no notary
   appointment and no co-signature problem.

Terms I would go in with: **50,000 PLN, cap 2,000,000 PLN pre-money, 20%
discount, 5% simple interest, 36 month maturity, automatic conversion at the cap
at maturity, pro-rata right in the next round, information rights limited to a
quarterly one-page update.** Give the information rights freely; they cost
nothing and they are the thing a good angel actually wants.

### The signatory complication, stated plainly

This is the most important legal content in the document.

- **Mario cannot sit on the zarząd.** KSH art. 18 § 1 requires full legal
  capacity for a management board member. Until 18, he cannot be a director and
  cannot bind the company.
- **Mario can own udziały**, but a person aged 13 to 18 has limited legal
  capacity. Acquiring or disposing of shares, and signing a shareholders'
  agreement, will normally be treated as exceeding ordinary administration of a
  minor's property, which means **consent of his statutory representative and
  probably permission of the guardianship court** under art. 101 § 3 KRO. That
  is weeks of lead time, not days, and it recurs on every future transfer,
  drag-along or restructuring.
- **Mario cannot cleanly take a salary or run a JDG** before 18.
- **Practical friction nobody plans for.** Banks, Apollo, Google Workspace and
  mid-market procurement departments all have signature and age requirements. A
  17 year old as the commercial counterparty will be refused somewhere, at a
  moment you did not choose.
- **The asymmetry that matters most is internal.** Mario is the sales engine and
  the brand of a company in which, as far as this brief tells me, he may hold no
  formal position and no shares. That is a founder risk before it is a legal
  one.

Three things to do about it, in order: get a written founder agreement between
Mario and Bruno **this month** covering equity, vesting and what happens at 18;
use the convertible so the cap table does not move until it has to; and ask the
lawyer specifically whether a limited pełnomocnictwo can cover the commercial
acts Mario needs to perform before 18, because the answer is not obvious and
should not be guessed.

---

## 1b. What the money actually buys, given a two-week ship

The six-month build budget is gone. If the product ships in two weeks, the
50,000 PLN is not a build budget at all. It is **operating runway from a product
that already works**, which is a materially better thing to be raising for.

Monthly burn with no salaries and the product live:

| | PLN |
|---|---|
| Own outbound stack: Apollo, sending, verification, domains | 2,000 |
| Platform infrastructure | 770 |
| Accounting | 600 |
| Founder tooling | 400 |
| Bank, domains, miscellaneous | 150 |
| **Total per month** | **3,920** |

Which means 50,000 PLN is **nine months of runway with 14,700 PLN left over for
one-off work.** Allocated:

| Line | PLN | Share | What it is |
|---|---|---|---|
| Go to market: Apollo, sending infrastructure, data, 9 months | 18,000 | 36% | The exact channel that produced 26 meetings for 2,000 PLN a month, kept running for nine months. This is the line with measured evidence behind it. |
| Product: design and front end to a price-defensible standard | 10,000 | 20% | A fixed-scope designer. You are charging 5,000 PLN a month against Attio-class expectations. |
| Model inference and infrastructure, 9 months | 9,000 | 18% | 770 PLN a month of platform plus roughly 2,000 PLN of build-sprint and tuning inference. |
| Operations: accounting, tooling, client compliance documentation | 9,000 | 18% | 600 plus 400 a month, plus the DPA and privacy documentation every client's lawyer will ask for. |
| Buffer | 4,000 | 8% | |
| **Total** | **50,000** | | |

**The milestone it reaches:** product live and selling, four founding members
signed, ValenOS running Valen's own outbound, unit economics measured rather
than modelled, break-even passed with seven months of cover still in the bank.

**The uncomfortable arithmetic, which has to be dealt with rather than hidden.**
Break-even with no salaries is three clients (section 3). Nine months of runway
costs 35,280 PLN. **Runway to the point where three clients cover costs is about
11,760 PLN.** So 50,000 PLN is roughly 38,000 PLN, nearly ten months, *more*
than the minimum the plan requires.

That is not a reason to raise less. It is a reason to stop describing the raise
as a necessity and start describing it as what it is, which is section 1c.

One sentence of pushback on the compliance line and then I drop it, because
Mario has already ruled it off the slides and that is the right call for the
slides. Polish cold-email consent under PKE is not an investor question, it is a
**client** question: the first mid-market prospect with an in-house lawyer will
ask, and the answer has to exist before that meeting rather than after it. It is
4,000 PLN inside the operations line, it gates the first standard-price sale, and
it is invisible on the deck. That is the whole of my position on it.

## 1c. The actual investment case, which is better than "we need the money"

Here is the argument the arithmetic supports, and it is checkable from the
numbers in section 2c rather than asserted.

Each founding member costs **78,000 PLN over three years**: 2,000 PLN a month of
forgone subscription for 36 months, plus the 6,000 PLN setup fee you waive.

Without 50,000 PLN in the bank, the size of the founding cohort is not a
marketing decision, it is a **cash-flow decision.** You take as many 3,000 PLN
for-life members as you need to make rent, and you take them early, when you
have the least leverage and the weakest case studies. With the money in the
bank, you cap the cohort at the number you actually need for social proof, which
is three or four, and everyone after that pays 6,000 PLN setup plus 5,000 PLN a
month.

| Cohort without the raise | Cohort with it | Members not discounted | Revenue preserved over 3 years | Multiple of the raise |
|---|---|---|---|---|
| 6 | 3 | 3 | **234,000 PLN** | 4.7x |
| 6 | 2 | 4 | 312,000 PLN | 6.2x |
| 5 | 3 | 2 | 156,000 PLN | 3.1x |

**50,000 PLN buys the option not to discount, and that option is worth roughly
four times the raise.** [the cohort sizes are assumptions; the 78,000 PLN per
member is arithmetic from the stated prices]

This is the strongest honest framing available, for three reasons. It is true.
It is checkable in front of the investor, on one slide, with no forecast in it.
And it answers the question the angel is actually asking, which is not "can you
build it" but "why does this need my money rather than a customer's."

## 2. Unit economics

### 2a. Cost to serve one client per month

**Volume assumptions per client per month** [assumption, and this is the input I
most need you to correct]: 1,000 companies screened, 250 companies fully
enriched, 600 contacts enriched, a four-touch sequence producing 2,400 emails,
2,000 CRM agent actions. 2,400 emails is roughly 110 per working day spread
across several mailboxes, which is a realistic ceiling before deliverability
degrades.

The important finding is that **inference cost per client varies by a factor of
2.4 depending on engineering decisions Bruno has not made yet.** Both cases are
built the same way; only the per-unit token costs differ.

| | Undisciplined | Disciplined |
|---|---|---|
| Company screening, 1,000 at | $0.03 | $0.03 |
| Company enrichment, 250 at | $0.60 | $0.15 |
| Contact enrichment, 600 at | $0.070 | $0.025 |
| Email written and sent, 2,400 at | $0.040 | $0.020 |
| CRM action, 2,000 at | $0.010 | $0.005 |
| **Total per client per month** | **$338 / 1,301 PLN** | **$141 / 541 PLN** |

The disciplined case is not optimistic, it is just three engineering habits:
extract page text before it reaches the model rather than dumping HTML, which is
most of the 4x reduction on enrichment; route synthesis to a cheaper model and
keep the expensive one for judgement; and treat enrichment as a one-time cost
per record so month twelve re-enriches only what changed. **This is a pricing
decision disguised as an architecture decision, and it has to be made before any
price is locked for life.**

Full cost to serve, disciplined case, assuming the client supplies their own
mailboxes:

| Component | 1 client | 10 clients | 50 clients |
|---|---|---|---|
| Inference | 541 | 541 | 541 |
| Data: Apollo credits, search API, verification, sending | 240 | 230 | 215 |
| Infrastructure, allocated | 770 | 123 | 69 |
| Support, 3 hours at 100 PLN notional | 300 | 250 | 200 |
| **Total PLN per client per month** | **1,851** | **1,144** | **1,025** |
| Undisciplined case | 2,611 | 1,904 | 1,786 |

**The structural point to make to the angel before they make it to you:
inference does not fall with scale.** It is 541 PLN at one client and 541 PLN at
fifty. Infrastructure amortises, support partly amortises, data barely
amortises, and inference not at all. That is why the cost curve flattens at
roughly 1,000 PLN per client rather than approaching zero the way a seat-based
SaaS does. Do not let anyone in the room believe this business has 90% margins.
It does not, and the reason is structural rather than fixable.

**One cost decision with a legal consequence.** If Valen provides mailboxes,
add roughly 150 PLN per client per month and take on the deliverability and
consent exposure. If the client sends from their own domain, that cost
disappears and so does a large part of the liability in section 6c. **Recommend
the client supplies mailboxes.** Which is it today?

### 2b. Gross margin

| Price | Scale | Disciplined | Undisciplined |
|---|---|---|---|
| 3,000 PLN founding | 10 clients | 1,856 GP, **61.9%** | 1,096 GP, **36.5%** |
| 3,000 PLN founding | 50 clients | 1,975 GP, **65.8%** | 1,214 GP, **40.5%** |
| 5,000 PLN standard | 10 clients | 3,856 GP, **77.1%** | 3,096 GP, **61.9%** |
| 5,000 PLN standard | 50 clients | 3,975 GP, **79.5%** | 3,214 GP, **64.3%** |

Read the top-right cell carefully. **A founding member at 3,000 PLN with
undisciplined token spend is a 36% gross margin account, locked for life.** That
is not a software business, that is a thin agency retainer you cannot escape.
The 6,000 PLN setup fee on standard accounts is high margin by contrast, maybe
1,200 PLN of real cost against 6,000 PLN of revenue, and it does useful work:
see payback below.

Range to quote honestly: **62% to 79% gross margin.** Respectable, materially
below SaaS, and the gap is entirely inference.

### 2c. The cost of the founding discount

2,000 PLN per month forgone per member, plus 6,000 PLN of forgone setup fee.

| Cohort | Per month | Per year | Over three years | Plus forgone setup | Three year total |
|---|---|---|---|---|---|
| 10 members | 20,000 | 240,000 | 720,000 | 60,000 | **780,000 PLN** |
| 4 members | 8,000 | 96,000 | 288,000 | 24,000 | **312,000 PLN** |

Per member over three years: **78,000 PLN.** And "for life" does not stop at
three years. Ten members at five years is 1,260,000 PLN. At ten years,
2,460,000 PLN.

**Is it worth it? Partly, and not at ten.** What you buy is case studies,
testimonials and named logos, and those are genuinely the thing standing between
a 6% close rate and a 12% one. But the marginal value of case study number eight
is near zero. Three or four strong references in one vertical do nearly all the
work of ten. You are proposing to pay 78,000 PLN each for ten copies of
something where the first four carry the value.

There is also a second-order cost nobody models. Ten accounts at 3,000 PLN is
not a discount cohort, it is **a price discovery event.** Customers talk. Once a
tenth of your base is at 3,000 PLN for life, 3,000 PLN is the real price and
5,000 PLN is the one you ask for first. Four accounts is a cohort. Ten is a
price list.

**Four changes, and I would not sign a founding member without them:**

1. **Cap the cohort at four, not ten.** Saves 468,000 PLN over three years and
   loses nothing that matters. Four is also a better sales story, because
   scarcity only works when the number is small enough to be credible.
2. **Kill "for life" in its current form.** Replace with: locked for life **at
   the scope signed at go-live**, with new agents, new workflows and additional
   seats priced at standard rates. This keeps the headline promise intact, keeps
   it honest, and lets the account grow. "For life" against an undefined product
   is an unbounded liability on something you have not finished designing.
3. **Make the deliverables contractual with a snapback.** You are giving away
   78,000 PLN against a verbal promise of a case study. If the case study,
   testimonial and name permission are not delivered within 90 days of go-live,
   the price reverts to standard. Put it in the agreement.
4. **Price it after you have measured token cost, not before.** Section 2a shows
   a 36% margin scenario. You cannot fix a for-life price later.

A final note for the deck: a perpetual discount on ten accounts is a disclosure
item in any future diligence, and an acquirer or Series A investor models it as
a permanent revenue impairment. Four accounts is a footnote. Ten is a finding.

### 2d. Customer acquisition cost

The real figure: roughly 2,000 PLN per month of tool cost produced about 26
meetings, so roughly **77 PLN per meeting.** That number is good and it is
usable. Two caveats have to be said before the investor says them.

**Caveat one: 77 PLN excludes Mario entirely.** Price his time at a nominal 50
PLN per hour for 40 hours a month and the cost per meeting is **154 PLN**, not
77. An angel will do this arithmetic in the room. Do it first, on the slide, and
you look rigorous instead of caught.

**Caveat two, and this one is more serious.** Those 26 meetings were booked
selling the service, not ValenOS at 5,000 PLN per month. Applying that
conversion rate to a more expensive, less familiar, self-driving product is an
assumption with no evidence behind it. **What was the actual close rate on those
26 meetings?** Even a rough number gives the forecast somewhere to stand.

CAC at various meeting-to-close rates. **Every close rate below is an
assumption, not a measurement.**

| Meeting to close | Closes per month | CAC, tools only | CAC including Mario at 2,000 PLN |
|---|---|---|---|
| 5% | 1.30 | 1,538 PLN | 3,077 PLN |
| 8% | 2.08 | 962 PLN | 1,923 PLN |
| 10% | 2.60 | 769 PLN | 1,538 PLN |
| 15% | 3.90 | 513 PLN | 1,026 PLN |

### 2e. Payback and LTV to CAC

Churn is a named assumption. For an unproven, fully automated product sold to
Polish SMEs I would assume **4% to 5% monthly churn initially**, improving to
2% to 3% once the product settles. 5% monthly is a 20 month average lifetime, 4%
is 25 months, 3% is 33 months.

Standard client at 5,000 PLN per month plus a 6,000 PLN setup fee:

| Case | GP per month | Churn | Lifetime | LTV | CAC | LTV/CAC | Payback |
|---|---|---|---|---|---|---|---|
| Pessimistic: undisciplined tokens, 5% churn, 5% close, founder time counted | 3,096 | 5% | 20 mo | 66,720 | 3,077 | 21.7x | 0.4 mo |
| Base: disciplined, 4% churn, 8% close, founder time counted | 3,856 | 4% | 25 mo | 101,200 | 1,923 | 52.6x | 0.2 mo |
| Optimistic: disciplined at scale, 3% churn, 10% close | 3,975 | 3% | 33 mo | 137,300 | 1,538 | 89.3x | 0.2 mo |

Founding client at 3,000 PLN, no setup fee: LTV/CAC runs 7.1x pessimistic, 24.1x
base, 42.8x optimistic, with payback of 2.8, 1.0 and 0.8 months.

**Do not put 52x on a slide.** Nobody believes it, and they are right not to:
both inputs are unmeasured and the ratio is arithmetically explosive when CAC
excludes the salary of the person doing the selling. The defensible statements
are these two, and they are stronger than a ratio:

1. **The 6,000 PLN setup fee alone covers acquisition cost at every close rate
   modelled.** A new standard client is cash-positive in week one.
2. **Even the pessimistic case clears 20x**, which means the business is not
   CAC-constrained and not margin-constrained.

Which leads to the conclusion worth building the deck around: **the constraint
on this business is delivery capacity and retention, not economics.** That is
what the next two sections are about, and it is a far more credible thing to
tell an investor than a 52x ratio.

---

## 3. Break-even

**Fixed monthly costs, no salaries:**

| | PLN |
|---|---|
| Platform infrastructure baseline | 770 |
| Valen's own outbound machine | 2,000 |
| Accounting (biuro rachunkowe) | 600 |
| Founder tooling: Figma, Workspace, GitHub, Notion | 400 |
| Bank, domains, miscellaneous | 150 |
| **Total** | **3,920** |

**One cost that may be missing, worth up to 25,000 PLN a year.** If Valen is a
*jednoosobowa* sp. z o.o., a single-shareholder company, the sole shareholder is
treated as a person conducting business activity for social insurance purposes
and owes full ZUS, roughly **1,800 to 2,100 PLN per month.** That would take
fixed costs to about 5,820 PLN. The fix is a second shareholder with a
non-token stake, and ZUS has successfully challenged token holdings of a
percent or two as functionally sole ownership, so the minority needs to be
meaningful. **Is the company single-shareholder today?** [this needs the
accountant, not me]

**Break-even with no salaries.** Gross profit per client at three-client scale,
where infrastructure is spread thinly: 1,662 PLN founding disciplined, 902 PLN
founding undisciplined, 3,662 PLN standard disciplined.

| Scenario | Clients needed |
|---|---|
| Founding price, disciplined tokens, two shareholders | **3** |
| Founding price, disciplined tokens, single shareholder | **4** |
| Founding price, undisciplined tokens, two shareholders | **5** |
| Founding price, undisciplined tokens, single shareholder | **7** |
| Standard price, disciplined tokens | **2** |

**Break-even paying both founders.** Modest Warsaw salary taken as 10,000 PLN
gross on an employment contract, which costs the company about 12,048 PLN once
employer-side ZUS of roughly 20.5% is added. Both founders: 24,096 PLN per
month. Total target 28,016 PLN. Mix assumed as four founding members plus
standard clients.

| Scenario | Clients needed |
|---|---|
| Bruno only, disciplined | 4 founding + 3 standard = **7** |
| Bruno only, undisciplined | 4 founding + 4 standard = **8** |
| Both founders, disciplined | 4 founding + 6 standard = **10** |
| Both founders, undisciplined | 4 founding + 8 standard = **12** |

**Ten clients and the company pays both founders.** That is the number for the
slide. It is small, it is credible, and it is robust: the undisciplined token
case only moves it to twelve, which means break-even is the one part of this
model that does not depend on the engineering question in section 2a.

**The caveat that belongs on the same slide.** Mario cannot take an employment
contract or run a JDG at 17. In practice "paying both founders" means paying
Bruno at seven clients and Mario from his eighteenth birthday. That is a
sequencing fact, not a problem, but leaving it out of a document an investor's
lawyer reads is worse than including it.

**The capacity ceiling, which is the real constraint.** Mario's month, at 3
hours of support per client:

| Clients | Outbound | Meetings | Onboarding | Support | Total hours |
|---|---|---|---|---|---|
| 5 | 40 | 39 | 20 | 15 | 114 |
| 10 | 40 | 39 | 20 | 30 | 129 |
| 20 | 40 | 39 | 20 | 60 | 159 |
| 30 | 40 | 39 | 20 | 90 | 189 |

**Mario saturates at around 20 clients.** 159 hours a month is a full-time job
with nothing left over, and Bruno has to be engineering rather than supporting.
So the first delivery hire is needed at roughly 15 to 18 clients, which in
section 4 is month seven or eight. That hire is in the plan below.

---

## 4. The twelve months after the MVP ships

**Month one here is the month the MVP ships, which is month six of the use of
funds.** The two timelines are sequential, not parallel. **When does the MVP
actually ship?** Everything below is dated from that.

**Assumptions, all of them forecasts.** 26 meetings per month sustained, from
the measured machine. Meeting-to-close of 6% in months one to three with no case
studies, 8% in four to six, 10% in seven to nine, 12% in ten to twelve as
references land. Monthly churn 4%. Founding cohort capped at four and closed in
month three. Standard pricing from month four: 6,000 PLN setup plus 5,000 PLN
per month. Cost per client 1,350 PLN early, falling to 1,100 PLN by month nine.
Fixed costs 3,920 PLN. One delivery hire from month eight at 10,000 PLN. No
founder salaries, which matters for reading the bottom line.

| M | Close rate | Founding | Standard | Total | MRR | Setup | Revenue | COGS | Fixed | Hire | Net | Cumulative |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 6% | 1.6 | 0.0 | 1.6 | 4,680 | 0 | 4,680 | 2,106 | 3,920 | 0 | -1,346 | -1,346 |
| 2 | 6% | 3.1 | 0.0 | 3.1 | 9,173 | 0 | 9,173 | 4,128 | 3,920 | 0 | 1,125 | -221 |
| 3 | 6% | 4.0 | 0.0 | 4.0 | 12,000 | 0 | 12,000 | 5,400 | 3,920 | 0 | 2,680 | 2,459 |
| 4 | 8% | 3.8 | 2.1 | 5.9 | 21,920 | 12,480 | 34,400 | 7,104 | 3,920 | 0 | 23,376 | 25,835 |
| 5 | 8% | 3.7 | 4.1 | 7.8 | 31,443 | 12,480 | 43,923 | 9,316 | 3,920 | 0 | 30,687 | 56,522 |
| 6 | 8% | 3.5 | 6.0 | 9.5 | 40,585 | 12,480 | 53,065 | 11,439 | 3,920 | 0 | 37,706 | 94,229 |
| 7 | 10% | 3.4 | 8.4 | 11.8 | 51,962 | 15,600 | 67,562 | 14,102 | 3,920 | 0 | 49,540 | 143,769 |
| 8 | 10% | 3.3 | 10.6 | 13.9 | 62,884 | 15,600 | 78,484 | 16,658 | 3,920 | 10,000 | 47,906 | 191,675 |
| 9 | 10% | 3.1 | 12.8 | 15.9 | 73,368 | 15,600 | 88,968 | 17,519 | 3,920 | 10,000 | 57,530 | 249,205 |
| 10 | 12% | 3.0 | 15.4 | 18.4 | 86,033 | 18,720 | 104,753 | 20,250 | 3,920 | 10,000 | 70,584 | 319,788 |
| 11 | 12% | 2.9 | 17.9 | 20.8 | 98,192 | 18,720 | 116,912 | 22,872 | 3,920 | 10,000 | 80,120 | 399,908 |
| 12 | 12% | 2.8 | 20.3 | 23.1 | 109,864 | 18,720 | 128,584 | 25,389 | 3,920 | 10,000 | 89,275 | 489,184 |

Month twelve: **23 clients, 110,000 PLN MRR, 1.32M PLN ARR run-rate.**

**Now the part that matters more than the table.** That cumulative 489,000 PLN
is not profit, it is profit plus two unpaid salaries. Charge market founder
comp of 24,100 PLN per month for twelve months and the real surplus is
**200,000 PLN.** Use that number. The 489,000 one is true and misleading, which
is the worst kind of number to put in front of an investor.

**Sensitivity on the one assumption that carries everything.** Holding the close
rate flat for the whole year instead of letting it improve:

| Close rate | Month 12 clients | Month 12 MRR | ARR run-rate |
|---|---|---|---|
| 4% | 10 | 46,000 | 554,000 |
| 8% | 20 | 95,000 | 1,142,000 |
| 12% | 30 | 146,000 | 1,746,000 |
| 15% | 38 | 183,000 | 2,199,000 |

The 4% row is the one to study. Ten clients in a year means the company pays
both founders and nothing more, and the plan has not failed so much as stalled.
The 12% and 15% rows are capacity-infeasible without two or three hires, so they
are not upside, they are a different plan.

### Where the clients actually come from

Four channels, specific, in priority order.

**1. Outbound to a named ICP, not "Polish B2B."** Polish companies of 10 to 50
employees that already run an outbound sales motion and are already unhappy with
their CRM. Concretely: training and consulting firms, which is what Dale
Carnegie proves; B2B agencies; software houses and IT services; recruitment
firms; industrial and equipment suppliers with a named sales team. The test for
inclusion is whether one closed deal justifies 5,000 PLN a month, because that
is the actual sales argument. Source in Apollo on headcount, industry and
country, then layer buying signals: a job posting for a sales rep, recent
funding, a new pricing page, a sales leader newly active on LinkedIn.

**2. The Dale Carnegie referral path, which is the highest-leverage thing
available and costs nothing.** Dale Carnegie Poland trains sales teams at
mid-market Polish companies. Their client base *is* the ICP. A named-referral
arrangement or a co-marketing webinar there is worth more than a quarter of cold
email. This is month one and two work, not later. Concentration risk is real and
handled in section 6b.

**3. ValenOS running Valen's own outbound.** The moment the product sources,
enriches and writes your own pipeline, the demo stops being a demo. "The email
that reached you was written by the thing I am selling you" is the only proof
that lands in this category. Target month three or four, and make it a dated
milestone rather than an aspiration.

**4. Founding-member scarcity as a closing mechanism.** Four seats, stated
publicly, closing on a named date. That is what converts a discount into a
reason to decide this week. It only works at four; at ten it reads as a
discount, which is what it would be.

**Not in the plan: content and LinkedIn.** Slow, unmeasured, and attributing
revenue to it is how forecasts become fiction. Do it if you enjoy it, do not
model it.

**One thing the plan requires that the table makes easy to miss.** From roughly
month seven, Mario cannot run 26 meetings a month and onboard and support 15
clients. The hire in month eight is not optional padding, it is the thing that
makes months nine to twelve arithmetically possible.

---

## 5. What has to be true

Ranked by how badly the plan breaks if the assumption is wrong.

### 1. Meeting-to-close on ValenOS at the real price is at least 6% to 8%

Everything in section 4 derives from this one number, and it is entirely
unmeasured. The 26 meetings sold a cheaper, more familiar thing. At 4% the
company reaches ten clients in a year and stays a two-person shop. At 2% there
is no plan.

**How to test it: sell ValenOS at 5,000 PLN per month to the next fifteen
meetings, before the product is finished.** Take deposits for founding places.
**Cost: zero, you are already having the meetings. Time: six weeks. This can
start on Monday and it is the most valuable thing in this document.** It also
has a second payoff: fifteen conversations at the real price tell you what to
build.

### 2. The two-week ship claim survives being stressed in the room

This replaces the six-month version, and the risk moved rather than disappeared.
A multi-tenant CRM with companies, people, deals, lists and a timeline, plus four
agents, plus a workflow engine with triggers and chained steps, plus auth, email
infrastructure, deliverability and consent mechanics, **in two weeks**, is an
extraordinary claim. It is either the strongest thing in the deck or the thing
that ends the meeting, and which one depends entirely on whether it can be shown.

**How to test it: do not put the two-week claim on a slide as a bullet. Show the
product.** A live demo, or failing that a screenshot grid of real screens with
real records in them. An angel who sees the software working stops asking how
long it took. An angel who reads "MVP in two weeks" as a promise discounts every
other number on the page, and correctly, because that is the single least
believable sentence available to a two-person team.

**Cost: zero. It is a slide-design decision, not an experiment.** The corollary
is that slide 5 in the brief's spine, what exists today versus what the 50,000
finishes, has to be mostly "exists today", and I need the real feature list to
write it without inventing anything.

### 3. Token cost per client stays under roughly 600 PLN per month

At 1,300 PLN the founding price is a 36% margin account locked for life, and
break-even moves from ten clients to twelve with no corresponding revenue.

**How to test it: instrument token spend per agent run and put one real client's
full monthly volume through the system, measured, before any price is locked.**
Cost: 1,000 to 2,000 PLN of inference plus a week of engineering. **The
sequencing matters more than the cost: "for life" means a pricing mistake here
is permanent.**

### 4. Full automation with no human approval gate is what Polish SME buyers actually want

The brief states no approval gate as a product fact. The previous deck drew the
approval gate in gold as a feature. Both cannot be right. If buyers demand an
approval step, the product becomes a copilot, the value proposition shifts from
"it runs your sales" to "it helps your rep", and per-client support load rises
because someone is now in the loop every day.

**How to test it: state the no-gate design explicitly to the next ten prospects
and count the objections, rather than letting it come up by accident in month
four.** Cost: zero. Build a gate as a configuration flag either way; it is
cheap now and expensive to retrofit.

### 5. Clients are still there in month six

Automated outbound has a known failure curve: month one is novel, by month four
reply rates decay and the client blames the tool. Above roughly 7% monthly churn
the founding cohort never reaches payback at all.

**This one cannot be tested faster than time passes.** The usable proxy is
whether a client can see pipeline attributable to ValenOS in month one, which
requires the product to report its own results honestly, including when results
are bad. That is a build item that gets cut under deadline pressure and should
not be. **Cost: it is a feature, not an experiment, and it belongs in the MVP
scope in assumption two.**

---

## 6. The honest risk list

### 6a. Founder age and the single signatory

Bruno is the only person who can sit on the zarząd and the only person who can
bind the company. Every contract, bank mandate and vendor agreement runs through
one person. If Mario holds udziały, any future transfer or shareholders'
agreement involving them likely needs parental consent and possibly guardianship
court permission, which adds weeks of uncertainty to a future round at the worst
time. Mario cannot take a salary or run a JDG before 18. And somewhere in the
next twelve months a bank, a vendor or a mid-market procurement department will
refuse to contract with a 17 year old, at a moment nobody chose.

The exposure that worries me most is not legal. **Mario is the sales engine and
the brand of a company in which he may hold nothing in writing.** Fix that
first, this month, independent of the round.

*Mitigations:* written founder agreement now covering equity, vesting and the
mechanics at 18; convertible rather than equity so the cap table does not move;
ask the lawyer specifically about a limited pełnomocnictwo for the commercial
acts Mario needs before 18; and plan the next round's timing around his
birthday rather than discovering the constraint during it.

### 6b. Concentration in one network

Dale Carnegie is both the proof point and, if the first clients come through it,
the whole pipeline. Two distinct failure modes. The relationship cools and new
business stops, with no second channel proven. Or the first five clients are all
trainers and consultancies, in which case you have built a vertical product
while telling the investor you built a horizontal one, and the second vertical
costs as much as the first.

*Mitigation:* a stated cap on any single referral source, say 40% of new
clients, and a requirement that **at least two of the first five come from cold
outbound you ran yourself.** That is also the only honest way to prove the
acquisition channel works, so it costs nothing you were not going to spend.

### 6c. PKE art. 398 and Polish cold-email consent

Since Prawo komunikacji elektronicznej came into force in November 2024, direct
marketing by electronic communication to a subscriber or end user requires prior
consent, with penalties reaching a percentage of turnover. The position on
business-to-business sending is contested; the practical market reading is that
role-based company addresses carry less risk than named individuals' addresses,
and that a legitimate-interest argument under GDPR does not cure the PKE consent
requirement for the marketing message itself. [this paragraph specifically needs
a written opinion, not my summary]

The exposure is sharper for ValenOS than for a normal CRM, for three reasons.
The product's core function is sending cold email in Poland, at volume,
automatically. With no human in the loop, the line between you as processor and
you as controller is blurred, because the sending decisions are made by your
software rather than by your client. And a single UODO or UKE action against one
client is an existential sales problem for a product whose entire pitch is
automated outreach.

*Mitigations:* a written PKE and GDPR opinion **before the first sale**, which is
why it is a line item in section 1b; a DPA with every client; the client clearly
named as controller in the contract and in the product's own language;
consent, opt-out and suppression mechanics built in rather than bolted on;
per-jurisdiction policy configuration; clients sending from their own domains;
and a rehearsed, honest two-sentence answer for the first meeting, because every
Polish buyer will ask. Worth noting as an option: a non-Polish first market may
be materially easier on exactly this axis.

### 6d. Funded incumbents and a crowded category

Attio has raised over $110M building a design-forward AI-native CRM, which is
the same sentence you would use for ValenOS. Clay, Apollo's own sequences,
HubSpot's agents and Pipedrive's AI features all converge here. HubSpot and
Pipedrive together hold 62% of the Polish market and both ship AI features
continuously.

What you have: Polish language and Polish market knowledge; a price point they
cannot reach without cannibalising their own; a willingness to do configuration
work for a 30-person company that no funded platform will do; and full
automation they will not ship, because their enterprise customers demand
approval gates. What you do not have: capital, distribution or time.

*The honest framing for the angel:* the defensibility here is local and
operational, not technical. The realistic outcome is a strong Polish and CEE SME
business, not a global CRM. An angel who believes they are funding a competitor
to Attio will be disappointed in eighteen months. One who believes they are
funding the Polish SME wedge may well be right. **Tell them which one it is.**

### 6e. The product is not yet the thing running your own pipeline

This is the sharpest question in the room and it will be asked. The 130,000 PLN
of Dale Carnegie pipeline and your own 26 meetings were produced by a stack of
tools plus Mario's work, not by ValenOS. So the traction honestly demonstrates
two things: the approach works, and Mario can sell. It does not demonstrate that
the product works. Until ValenOS runs your own outbound, every demo is a
promise.

*Mitigation and milestone:* put "ValenOS runs Valen's own outbound" in the use of
funds as a dated month three to four milestone. It is the product proof, the
sales asset and the cheapest QA available, all in one line item. Saying this
before the investor does converts the weakest slide into a credible one.

### 6f. Four more worth naming

- **Deliverability as a systemic single point of failure.** If shared sending
  infrastructure takes a reputation hit, every client's campaign degrades at
  once. Clients sending from their own domains mitigates this and the consent
  exposure together.
- **Model and API dependency.** Both your COGS and your core capability sit with
  a provider whose pricing and acceptable-use policy you do not control, and
  automated cold outreach is exactly the use case policies tighten around.
  Mitigate with model-agnostic routing and a measured per-task cost table so
  switching is an afternoon rather than a quarter.
- **Key person risk on Bruno.** One engineer, one codebase, no redundancy. If
  Bruno is unavailable for a month, the company stops. This is also the risk the
  50,000 PLN does least about.
- **The for-life price as a balance sheet item.** Covered in 2c, repeated here
  because it is the risk most likely to be waved away in the room and least
  reversible afterwards.

---

## 7. The conclusion, restated for a two-week ship

The two-week answer did not weaken the earlier conclusion, it sharpened it.

**Before:** 50,000 PLN was six months of build runway, 43% of it software, and
break-even arrived in month two of selling. **Now:** the product ships in a
fortnight, so none of the 50,000 PLN is build runway, break-even arrives sooner
still, and the gap between what the plan needs (about 11,760 PLN) and what is
being raised (50,000 PLN) is roughly ten months of cover.

So "we need 50,000 PLN to finish the software" is now not merely imprecise, it
is **contradicted by your own ship date on the previous slide.** Any angel who
reads slide 5 (the product is two weeks out) and then slide 9 (we need the money
to build it) has caught an inconsistency, and that is the kind of catch that ends
a meeting for a reason unrelated to the quality of the business.

The replacement is section 1c, and it is a better pitch on its own merits:

> The product ships in two weeks. Break-even is three clients. We are not
> raising to build it. We are raising so that the size of the founding-member
> cohort is a marketing decision instead of a cash-flow decision, because every
> member we do not have to discount is worth 78,000 PLN over three years.

That framing does three things the old one could not. It makes the 50,000 PLN
figure look deliberate rather than arbitrary. It gives the angel a return
argument built from the company's own price list rather than from a forecast. And
it is robust to the obvious challenge, because the honest answer to "do you need
this money?" becomes "no, and that is the point: we want it on terms we choose
rather than terms a customer dictates when we are short."

**Two things follow, and they are the same two as before.** If the angel is
strategic, someone with distribution into Polish mid-market sales organisations,
take the money and do not negotiate hard over the cap, because their introductions
are worth more than the cash. If the angel is purely financial, the arithmetic
genuinely does not require them, and taking three founding members instead is
the alternative to weigh rather than dismiss.

## 8. What is still open

Resolved by Mario: the old deck, the age and corporate-law material, the ship
date, the approval gate. Remaining, ordered by whether they block the deck.

**Blocking, because a slide cannot be written without them:**

1. **The structure of the ask.** Slide 10 is "the ask and the structure" and has
   to say what the angel receives. Three choices: a named equity percentage, a
   convertible with a cap, or a revenue-share loan. No legal detail goes on the
   slide either way, just the instrument and the headline terms. My
   recommendation remains the convertible, now for a simpler reason than before:
   with the product shipping in two weeks, the next twelve months will set a
   valuation far better than any number you could defend today.
2. **The real feature list, shipped versus two weeks out.** Slide 5 needs it and
   I will not invent screens or capabilities. If there are screenshots, they
   belong on the slide instead of bullets, per section 5 assumption two.
3. **Traction, precisely.** Is Dale Carnegie a paying client, a pilot, or a
   reference? How many founding-member conversations are live, and at what
   stage? Slide 6 is the honesty slide and it needs facts I can stand behind
   under a direct question.

**Not blocking. I will proceed with a labelled assumption unless corrected:**

4. **Close rate on the 26 meetings.** The most load-bearing number in section 4.
   Without it the twelve-month plan ships with 6% to 12% on the slide, marked
   forecast, plus the 4% downside row.
5. **Has token spend per agent run been measured?** Collapses a 2.4x range in
   COGS. Until then the deck quotes 62% to 79% gross margin rather than a point
   figure.
6. **Do clients send from their own mailboxes, or do we provide them?** Worth
   150 PLN per client per month. I will assume the client's own domains, which
   is both cheaper and the right answer on liability.
7. **Is the angel strategic or financial?** Changes the emphasis of slide 10,
   not its content.

## 9. What this means for the twelve slides

- **Slide 5 shows the product, it does not describe it.** Section 5, assumption
  two. This is the highest-leverage design decision in the deck.
- **Slide 9, use of funds, is nine months of runway from a shipped product.**
  Four lines plus a buffer, from section 1b. It must not say "to build the
  product", because slide 5 has just said the product is built.
- **Slide 10 carries the 1c argument, not a funding-gap argument.** 78,000 PLN
  per founding member, roughly 4x the raise in preserved revenue. One table, no
  forecast in it.
- **Slide 7 quotes 62% to 79% gross margin and does not quote LTV to CAC.** The
  setup-fee-covers-acquisition-cost point is both stronger and true.
- **Slide 8 carries the 4% close-rate row** beside the base case. A forecast
  printed with its own downside reads as rigour rather than optimism.
- **Slide 6 separates what the approach proved from what the product proved.**
  Section 6e. The 130,000 PLN of pipeline and the 26 meetings were produced by
  Mario and a tool stack, not by ValenOS, and saying so first is worth more than
  hoping it is not asked.
- **Slide 3 states the gate in one line:** agents run unattended by default, an
  approval step is available per workflow. Default carries the pitch, option
  removes the objection.
- **Slide 12 caps the founding cohort at three or four** and bounds "for life" to
  the scope signed at go-live. Section 2c. At ten members the model in 1c inverts
  and the discount becomes the reason the raise was needed.
- **No legal or corporate-structure content on any slide.** Adopted.
- **Twelve slides still holds**, with the brief's spine intact.
