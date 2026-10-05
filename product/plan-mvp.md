# ValenOS build plan: my read on the 89-item list

## The summary, in four lines

The list says ValenOS already matches Attio on the CRM core: objects, fields,
tables, filters, the deal board, record pages, mail and calendar sync, call
recording, the workflow canvas, dashboards, import, roles and auth. It is ahead
on Polish, lead sourcing, assignment rules and agent approvals.

The 89 gaps are mostly **screens for things the server already does** (9 items),
**half-done features missing their last mile** (about 25), and **genuinely
missing features** (the rest). Twenty-four are marked Core, and five of those
are week-plus jobs: sending email from inside the CRM, the assistant making
changes, AI columns, the public API, and self-serve sign-up.

---

## The one structural problem with the suggested first batch

Proposed batch: **15, 2, 1, 20, 14, 12, 11, 29, 63, 71, 60, 13, 61, 85, 10.**

Thirteen of those fifteen are CRM table plumbing: board settings, fields,
stages, lists, columns, sort, bulk select, saved views, shortcuts. Good work,
all of it needed. But when it ships you have **a competent table and nothing
that distinguishes ValenOS from Attio**, which is the one comparison you cannot
win on features and do not need to.

Hold it against the deck. Slides 3 and 4 are the two key features: agents
working inside the CRM, and the context layer. Slide 4 is explicitly labelled
"co kończy 50 000 PLN". **An investor watching a demo built from this batch
would not see slide 4 working at all.** Only items 60 and 61 touch the agent or
context story, and both are small.

The fix is not to drop the plumbing. Most of it is S-sized or server-ready, so
it is cheap. The fix is to pull two differentiators forward into the same batch.

---

## Changes I would make

### Promote into batch 1

**53, AI columns** (Core, L). This is the single best demo on the whole list.
"Add a column called 'what does this company sell' and watch it fill two hundred
rows" is the context layer made visible in fifteen seconds. Nothing else on the
list sells the product that fast, to a customer or an investor. It is an L, and
it is worth the week.

**9, list templates** (currently Later, M). Slide 3 claims wdrożenie is
"konfiguracja liczona w godzinach, nie budowa liczona w miesiącach". Today that
is a promise. A new client picking "sales pipeline" and running ten minutes
later is that promise demonstrated. It is also the cheapest possible proof of
the whole one-product-not-an-agency thesis.

### Demote out of Core, to buy back three weeks

**33, send email inside the CRM** (Core, L) → Next. The follow-up agent already
sends. For an outbound-automation product, the agent sending is the point;
a human composing from inside the CRM is a convenience. Saves a week.

**10, saved views** (Core, L) → Next. Painful, but the table already has
filters and sort. Saves a week.

**75, public API** (Core, L) → Next. Nobody paying 990 to 2 490 PLN a month asks
for an API in month one. It gates 56, 77 and 78, so it is not optional
forever, just not first. Saves a week.

**14, time in stage** (Core, M) and **34, email privacy per mailbox** (Core, M)
→ Next. Both real, neither blocks a first customer.

### Keep as Core, with one note

**21, merge duplicates** is more urgent than its position suggests. Your agents
create records automatically from mail sync and lead sourcing. An auto-creating
system without merge turns into a swamp within weeks, and it will be your own
workspace that gets swamped first.

---

## Revised batches

### Batch 1, roughly three weeks: "nothing looks broken, and one thing looks magic"

Server-ready S items first, because they are nearly free:

| # | Feature | Size |
|---|---|---|
| 15 | Board grouping settings on screen | S |
| 29 | Edit a task on screen | S |
| 46 | Delete or archive a workflow | S |
| 63 | Rename and delete dashboards | S |
| 23 | "Run workflow" button on a record | S |
| 60 | "Enrich this record" button plus AI-filled marker | S |
| 71 | Export what you see | S |
| 12 | Multi-column sort, persisted | S |
| 1 | Custom fields on screen | M |
| 2 | Dropdown options and stages on screen | M |
| 11 | Column choose, hide, reorder, resize | M |
| 20 | Lists on screen | M |
| 4 | Proper new-record form | M |
| **53** | **AI columns** | **L** |
| **9** | **List templates** | **M** |

Eight S plus six M plus one L is about eighteen to twenty-three working days for
one engineer. **That is three to four weeks, not two.** Worth knowing before
anyone repeats the two-week number to an investor. The deck's roadmap already
says Etap 1 runs months one to two, so the deck is right and the two-week
figure was optimistic.

### Batch 2: the rest of the differentiators

52 (assistant makes changes), 58 and 59 (auto-enrichment on create), 61
(relationship strength), 13 (bulk select), 21 (merge), 44 and 45 (sequences on
screen), 55 (prep for meeting).

### Batch 3: the revenue gate

82 (self-serve sign-up and card payment), plus the metering gap below.

---

## Two things nothing on the list covers

### 1. Usage metering against the plan allowance

The cennik on slide 7 sells Start, Standard and Skala with **included volume
allowances** (50, 200 and 600 enriched companies a month). That allowance is the
only mechanism protecting your margin: a Standard client running Skala volumes
earns 29 percent instead of 75.

Nothing in the 89 items meters agent consumption against a plan limit, warns at
80 percent, or handles overage. "AI spend tracking" exists, but tracking spend is
not enforcing an allowance. **Without this the pricing model on the deck cannot
actually be applied**, and the margin protection I built into the cennik exists
only in the spreadsheet.

Size: M. It belongs in batch 2 at the latest, because it has to exist before the
first paying client, not after.

### 2. Item 82 is not a feature, it is the business model

Self-serve sign-up is marked Core and L and sits in nobody's first batch. But the
whole mass-market pivot assumes clients onboard themselves. If an operator sets
up every workspace by hand, **the capacity ceiling does not move from twenty
clients to eighty**, which is the single strongest argument in the deck and the
reason the lower price makes sense at all.

Etap 3 of the roadmap is "sprzedaż masowa". Item 82 is what makes Etap 3
possible. It does not need to be in batch 1, but it cannot slip past batch 3,
and it should be understood as revenue infrastructure rather than an admin
feature.

---

## What an investor actually wants to see in the demo

In order:

1. **Agents working on live records inside the CRM.** You have this today.
2. **An AI column filling two hundred companies at once** (53). This is the
   context layer made visible, and it is the moment the demo stops being a CRM
   tour.
3. **A fresh workspace configured and running in ten minutes** (9, 1, 2).
   This is "godziny, nie miesiące" proven rather than claimed.
4. **Relationship strength climbing as context accumulates** (61). This is the
   barrier-to-entry line from slide 4 made concrete.

Three of those four are in my revised batch 1. None but the first is in the
original one.

---

## Agreements

The three Skips are right: 70 (SQL and BI connector, Enterprise), 81 (app SDK
and store, needs customers first), 88 (Mac wrapper, it is the website in a
window).
