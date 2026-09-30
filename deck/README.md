# ValenOS investor deck

**Live deck:** https://www.figma.com/slides/nZCVLnHAeYLKMJNc6748ay

Thirteen slides, English, built in Figma Slides in the Valen & Partners design
language extracted from the previous V&P pitch deck.

## Design system

Taken from the old deck's OOXML, not guessed from screenshots.

| Role | Value |
|---|---|
| Paper | `FAFAF9` |
| Ink | `1B1814` |
| Muted | `6B665E` |
| Light | `A8A399` |
| Gold | `C8A96E` |

**Display and all numerals: Fraunces Regular.** Never bold. Negative tracking of
roughly 2% at headline sizes and 3% on large numerals.

**Body, labels and UI: Manrope.** Regular for copy, Medium for small caps labels
with positive tracking, SemiBold only inside the CTA.

Structural motifs carried over: the running header (brand left, `NN / 10` right,
hairline rule beneath), the second headline line set in gold, the small gold
dash above headlines on dark slides, paired display numerals split by a vertical
hairline, and dark slides reserved for the turn and the close.

Slides are 1920 x 1080. Margin 120px, content width 1680px.

## Structure

Some slides are built as progressive reveals across several grid frames and
share one header number, so the grid holds 18 frames for 13 logical slides.

| # | Slide | Purpose |
|---|---|---|
| 01 | Revenue, not records | Positioning, with the context orbit |
| 02 | You are already paying for this | The full cost of the work the agents take over |
| 03 | Not a CRM problem, a context problem | Problem, five-step reveal |
| 04 | Not buildable three years ago | Why now |
| 05 | AI agents live inside the CRM | The shift (dark), two-step reveal |
| 06 | Same agent, same prospect | The proof, two email cards with source chips |
| 07 | Your pipeline is already filled | Product (dark), full app window |
| 08 | Agents hand work to each other | The chain, with the human approval step |
| 09 | Everyone can call a model | Defensibility, shown as an asymmetry |
| 10 | Early, and already validated | Traction |
| 11 | Two founders | Team |
| 12 | We started with the CRM | Vision, three horizons (dark) |
| 13 | $95,000 | The ask (dark) |

Every slide carries speaker notes with timing cues for a five minute run.

## Product mockups

No screenshot slots anywhere. The ValenOS interface is drawn as vectors in the
deck itself, the same way the old V&P deck drew its product views. Nothing to
paste in, and every pixel stays editable.

- **Slide 01** carries the context orbit: eight source tiles beaded on a dashed
  ring with gold flow dots between them (Gmail, Outlook, Calendar, Meet, Slack,
  Apollo, Calls, and a dashed "+ more"), with an arrow out of the ring into a
  dark gold-bordered ValenOS node reading "one context layer, read by every
  agent". All eight sources are live integrations.

  The tiles currently hold names, not logos. Each is named `logo:<Source>` so a
  real mark can be dropped straight in; supply the files and they can be
  uploaded as assets and swapped without touching the layout.
- **Slide 06** is a dark slide carrying the full app window (sidebar, Companies
  to work table with ICP score pills) with the Follow-up agent draft card
  breaking out over the table, lit by a radial gold glow.
- **Slide 05** shows the same agent writing twice, as two email cards. The
  contextual one carries gold facts and a row of source chips.
- **Slide 07** draws the agent chain as a flow diagram with status pills, a
  wrapping connector and the human approval step in gold.
- **Slide 09** makes the moat visual rather than asserted: a small, nearly empty
  prompt card for what a bolt-on assistant works from, against a large dark
  panel listing eight sources of context ValenOS already holds on one
  relationship. The size difference between the two objects is the argument.
  The record is illustrative and the slide says so.

Presentation devices (a card breaking out of its frame, layered shadows, a glow
behind the product) follow the Attio reference, applied inside the V&P palette
and type system rather than replacing it.

## Before presenting

Confirm the contact address on slide 11.

## Constraints honoured

No invented figures. The five testing companies are stated as testing and not
paying, with no revenue claimed. Raise terms are verbatim. There is no market
sizing slide because no defensible figures were available.

## render.py

Rasterises any .pptx to HTML and PNG straight from its package XML. Written
because LibreOffice cannot run in this container, and used here to study the old
deck's layouts. Usage: `python3 render.py deck.pptx outdir`.

## Cost slide sources

Slide 02 sizes the annual cost of the work the agents take over, for a
five-person sales team at a Polish B2B company. Polish market basis, since that
is the initial ICP. Checked September 2026.

| Component | Basis | Per year |
|---|---|---|
| Tool licences | HubSpot Sales Hub Pro $90, Apollo Basic $49, Fireflies Business $19 per seat per month at annual billing, five seats, converted at 3.85 PLN to the dollar | PLN 36,500 |
| Half an operations role | Sales operations manager at the Polish market average, counted as half a role since a team this size rarely has a full-time CRM owner | PLN 85,000 |
| Rep hours on admin | Polish B2B sales salary average, five reps, a quarter of the week on admin and data entry | PLN 163,000 |
| **Total** | | **PLN 284,500** |

About $74,000. An earlier version used US salaries, a ten-person team and
enterprise tooling, which produced $296,560 and did not reflect the market
ValenOS actually sells into.

Deliberately conservative throughout: mid-tier licences rather than enterprise,
half an operations role rather than one, and the cheapest credible tool tiers.
The slide carries a second line noting that twenty seats on enterprise tooling
passes 1.5 million by the same arithmetic.

Every assumption is printed on the slide itself. The arithmetic is checked
programmatically against the rendered text rather than asserted.

No savings figure is claimed, because ValenOS has no price yet.
