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

## 1b. What the money actually buys

**Correction to what I wrote before.** I argued that the raise could not honestly
be described as "almost entirely to finish building the software", on the basis
that a two-week ship meant none of the money was a build budget. That was wrong,
and it was wrong because I had the wrong picture of what is left to build. The
CRM substrate is shipped. **What remains is the agents and the context layer,
which is the expensive part**, and it is expensive for a reason I under-budgeted
by a factor of four: tuning an agent means re-running it over real batches of
real companies, so development cost is driven by **iteration count**, not by
feature count.

### Why agent development actually costs money

A full-intensity development day, with four agents and a context layer in active
tuning: [forecast, and the per-unit token costs are the same ones used in
section 2a]

| | Per day |
|---|---|
| Enrichment agent: 25 companies per batch, 8 batches, at $0.30 each with extraction not yet tuned | $60.00 |
| Lead agent: 200 candidates per batch, 4 batches, at $0.03 each | $24.00 |
| Follow-up agent: 100 emails of copy iteration at $0.04 | $4.00 |
| Context layer: embedding and retrieval re-runs | $10.00 |
| **Total** | **$98, about 377 PLN** |

| Phase | Cost |
|---|---|
| Intensive build, 14 working days at full intensity | 5,282 PLN |
| Tuning, months one to three, 40% intensity | 9,961 PLN |
| Refinement, months four to six, 20% intensity | 4,980 PLN |
| **Six months of development inference** | **20,223 PLN** |

That is 40% of the round, on its own, and it is a real cost rather than a
notional one. It is also the honest answer to "what costs 50,000 PLN when the
founders take no salary", which is the question I could not answer before.

### The revised allocation

| Line | PLN | Share |
|---|---|---|
| Agent and context development: model inference | 19,000 | 38% |
| Agent and context development: Apollo credits and search API for testing | 3,500 | 7% |
| Go to market: own outbound stack, 6 months at 2,000 | 12,000 | 24% |
| Platform infrastructure, 6 months | 4,600 | 9% |
| Product design: front end to a price-defensible standard | 5,000 | 10% |
| Operations: accounting, tooling, client compliance documents, 6 months | 4,400 | 9% |
| Buffer | 1,500 | 3% |
| **Total** | **50,000** | |

**Software build is now 32,100 PLN, 64% of the round**, against 43% on the
budget I built before. So "almost entirely to finish building the software" is
roughly defensible, and the use-of-funds slide can say so without a reader
catching an inconsistency. Recurring burn is 3,500 PLN a month.

**The milestone it reaches:** four agents and the context layer live and tuned on
real data, ValenOS running Valen's own outbound, four founding members signed,
unit economics measured rather than modelled, break-even passed.

### The new dominant risk, which is sharper and more useful than the old ones

Development inference scales with **how many iterations the agents need**, and
nobody knows that number until they are in it.

| | Dev inference | Share of the round |
|---|---|---|
| As planned | 20,223 PLN | 40% |
| Twice the iteration | 40,447 PLN | **81%, round exhausted** |
| Three times the iteration | 60,670 PLN | **121%, round exhausted** |

**At two to three times the planned iteration, inference alone consumes the
entire raise and there is nothing to show for it.** That is now the single
largest execution risk in the plan, ahead of everything in section 6, and it has
a cheap control: instrument token spend per test run from day one, set a weekly
inference budget, and get text extraction working early, because extraction is
the difference between $0.30 and $0.12 per enrichment run and it compounds across
every iteration that follows. Section 5, assumption three, becomes the first
engineering task rather than a measurement to take later.

The buffer at 3% is thin, and that is a consequence of the allocation rather than
an oversight. Say it plainly if asked: the round is fully committed, the
contingency is the design contractor, and that line gets cut first if inference
runs hot.

## 1c. The second half of the investment case

Section 1b gives the build argument, which is now the primary one. This is the
second argument, and it stands beside rather than instead of it. It is checkable
from the numbers in section 2c rather than asserted, which makes it useful in a
room.

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

| M | Close rate | Founding | Standard | Total | MRR | Revenue | Net | Cumulative |
|---|---|---|---|---|---|---|---|---|
| 1 | 6% | 1.6 | 0.0 | 1.6 | 4,680 | 4,680 | -1,346 | -1,346 |
| 2 | 6% | 3.1 | 0.0 | 3.1 | 9,173 | 9,173 | 1,125 | -221 |
| 3 | 6% | 4.0 | 0.5 | 4.5 | 14,476 | 17,448 | 7,460 | 7,239 |
| 4 | 8% | 3.8 | 2.6 | 6.4 | 24,297 | 36,777 | 25,183 | 32,421 |
| 5 | 8% | 3.7 | 4.5 | 8.2 | 33,726 | 46,206 | 32,422 | 64,843 |
| 6 | 8% | 3.5 | 6.4 | 10.0 | 42,777 | 55,257 | 39,371 | 104,215 |
| 7 | 10% | 3.4 | 8.8 | 12.2 | 54,065 | 69,665 | 51,139 | 155,354 |
| 8 | 10% | 3.3 | 11.0 | 14.3 | 64,903 | 80,503 | 49,441 | 204,794 |
| 9 | 10% | 3.1 | 13.2 | 16.3 | 75,307 | 90,907 | 59,042 | 263,836 |
| 10 | 12% | 3.0 | 15.8 | 18.8 | 87,894 | 106,614 | 72,035 | 335,871 |
| 11 | 12% | 2.9 | 18.3 | 21.1 | 99,979 | 118,699 | 81,514 | 417,385 |
| 12 | 12% | 2.8 | 20.7 | 23.4 | 111,580 | 130,300 | 90,613 | 507,998 |

Month twelve: **23 clients, 112,000 PLN MRR, 1.34M PLN ARR run-rate.**

One correction against the first version of this table. The spreadsheet models
demand beyond the founding cap converting at **standard** price, where my first
script discarded it. The spreadsheet is right, so months three onward are
slightly higher and the deck carries the spreadsheet's numbers. Every figure
above is a live formula in `model-valenos.xlsx`, so changing an assumption
changes the table.

**Now the part that matters more than the table.** That cumulative 508,000 PLN
is not profit, it is profit plus two unpaid salaries. Charge market founder comp
of 24,100 PLN per month for twelve months and the real surplus is
**219,000 PLN.** Use that number. The 508,000 one is true and misleading, which
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

### 6b. No third-party client evidence at all

This risk inverted. It was concentration: if the first clients all came through
one relationship, you would have a vertical product and a single point of
failure. With Dale Carnegie out of the presentation, the problem is the opposite
and sharper. **Slide 6 now carries no third-party client evidence whatsoever.**

What is left is Valen's own outbound numbers, which prove the channel works and
that Mario can sell, and a shipped CRM substrate. Both are real. Neither is a
customer saying ValenOS did something for them.

*Mitigation, and it is a slide decision rather than a business one.* State it
first, in your own words, before the angel works it out: the approach is proven,
the channel is measured, the product is two weeks from running it, and the
founding-member cohort exists precisely to produce the evidence that is missing.
An angel who hears that said plainly reads it as self-awareness. An angel who
discovers a traction slide with no customer on it reads it as concealment. The
underlying concentration risk still applies to whoever the first clients turn out
to be, so the section 4 discipline stands: at least two of the first five from
cold outbound you ran yourself.

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

### 6f. Five more worth naming

- **Development inference overrun, which is now the largest of them.** Section
  1b. At two to three times the planned iteration count, model spend alone
  consumes the round. Control it with per-run instrumentation and a weekly
  budget from day one, and get text extraction working before the tuning phase
  rather than during it.
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

## 7. The conclusion, restated again

The picture changed twice, and the second change was the important one.

**What I had wrong.** I budgeted six months of build, then rebuilt it as nine
months of runway from a finished product, and argued from both that the raise
could not honestly be called a build budget. With the CRM shipped and the agents
and context still to build, the right answer was neither: **the raise is a build
budget, and the thing it buys is iteration on the agents.** 64% of it is software.
The original framing in the brief was closer to correct than my revision of it.

**What still holds.** Break-even is three clients with no salaries and ten paying
both founders. The twelve-month plan turns cash-positive in month two. Each
founding member costs 78,000 PLN over three years, so the money also buys the
option to cap that cohort at three or four rather than taking as many discounted
members as cash flow demands, which is worth roughly four times the raise. None
of that moved.

**So the case to put to the angel has two halves and both are true.** The money
funds the hard part of the build, which is agent iteration, and the arithmetic
for that is on the slide. And it buys the option not to discount, which is the
reason the figure is 50,000 rather than 20,000. A strategic angel gets a third
reason that matters more than either: on this plan their introductions into
Polish mid-market sales organisations are worth more than their cash, and the
deck should ask for both in the same breath rather than treating the
introductions as a bonus.

**The risk register has reordered.** The dominant execution risk is no longer
whether the product ships or whether the close rate holds. It is that
development inference overruns and the round disappears into test runs. Two to
three times the planned iteration exhausts it. That risk is cheap to control and
expensive to ignore, and it is the one I would want a weekly number on.

## 8. What is still open

**Settled:** the old deck is not a reference. Age and corporate-law material stay
off the slides. The CRM substrate is shipped; agents and context are in build and
are what the money funds. No approval gate by default, available per workflow.
The ask is a convertible loan, 50,000 PLN, cap 2,000,000 PLN pre-money, 20%
discount, converting at the next round, with a pro-rata right and a quarterly
one-page report. The angel is strategic, so the deck asks for introductions as
explicitly as for money. Dale Carnegie does not appear. Built in Figma Slides.

**Blocking:**

1. **The palette.** The network policy denied valen-partners.com, so the site
   could not be read. Either allow the domain, or paste the hex values for paper,
   ink, muted text, hairline and gold. Failing both, I build the master on Figma
   variables with values chosen from the brief's description, so swapping the
   real ones later is one edit rather than a redraw.
2. **How many founding-member conversations are live, and at what stage?** With
   Dale Carnegie out, this is the only forward-looking evidence slide 6 has, and
   it is the difference between a slide that works and a slide that is empty.

**Not blocking. Proceeding with a labelled assumption unless corrected:**

3. **Close rate on the 26 meetings.** The deck ships 6% to 12% marked forecast,
   with the 4% downside row printed beside it.
4. **Token spend per agent run, measured.** Until then the deck quotes 62% to 79%
   gross margin rather than a point figure. Note that this measurement is now
   also the control on the largest risk in the plan, per section 1b.
5. **Client mailboxes or ours?** Assuming the client's own domains, which is
   cheaper and better on liability.

## 9. What this means for the twelve slides

Built in **Figma Slides**.

- **Slide 5 shows the product, it does not describe it.** The CRM substrate is
  shipped, so this slide is a real screen with real records, and the agents and
  context layer are what the 50,000 finishes. That split is now the slide's whole
  structure and it is a strong one: the unglamorous half is done, the money
  finishes the half that is hard.
- **Slide 9, use of funds, leads with agent and context development at 64% of the
  round.** Section 1b. It can say the money finishes the software, because now it
  does. The iteration-cost arithmetic belongs on the slide, because it is the
  answer to "what costs 50,000 PLN when nobody takes a salary."
- **Slide 10 carries the convertible terms, the 1c option-not-to-discount table,
  and the distribution ask**, in that order of space. 78,000 PLN per founding
  member, roughly 4x the raise in preserved revenue, no forecast in it.
- **Slide 6 is the honest slide and it is thin.** No Dale Carnegie, no customer
  outcome. It carries the 77 PLN per meeting figure, the 26 meetings, the shipped
  substrate and the live founding-member conversations, and it says in one line
  that the approach and channel are proven while the product outcome is not yet.
  Section 6b.
- **Slide 7 quotes 62% to 79% gross margin and does not quote LTV to CAC.** The
  setup-fee-covers-acquisition-cost point is stronger and true.
- **Slide 8 carries the 4% close-rate row** beside the base case.
- **Slide 3 states the gate in one line:** agents run unattended by default, an
  approval step available per workflow.
- **Slide 12 caps the founding cohort at three or four** and bounds "for life" to
  the scope signed at go-live, and names the inference-overrun risk rather than a
  generic one, because a specific risk with a stated control reads as competence.
- **No legal or corporate-structure content on any slide.**
- **Twelve slides still holds.** With Dale Carnegie out, slide 6 is the one at
  risk of being too thin to justify its place; if the founding-member
  conversations are few, it folds into slide 8 and the deck runs to eleven.
