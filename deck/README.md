# ValenOS investor deck

**Live deck:** https://www.figma.com/slides/nZCVLnHAeYLKMJNc6748ay

Eleven slides, English, built in Figma Slides in the Valen & Partners design
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

| # | Slide | Purpose |
|---|---|---|
| 01 | Revenue, not records | Positioning, with the Home window cropped off the bottom |
| 02 | Not a CRM problem, a context problem | Problem |
| 03 | Not buildable three years ago | Why now |
| 04 | AI agents live inside the CRM | The shift (dark) |
| 05 | Same agent, same prospect | The proof, two email cards with source chips |
| 06 | Your pipeline is already filled | Product (dark), full app window |
| 07 | Agents hand work to each other | The chain, with the human approval step |
| 08 | The moat is the context | Defensibility |
| 09 | Early, and already validated | Traction |
| 10 | Two founders | Team |
| 11 | $95,000 | The ask (dark) |

Every slide carries speaker notes with timing cues for a five minute run.

## Product mockups

No screenshot slots anywhere. The ValenOS interface is drawn as vectors in the
deck itself, the same way the old V&P deck drew its product views. Nothing to
paste in, and every pixel stays editable.

- **Slide 01** carries the Home view cropped off the bottom edge: the greeting,
  the overnight summary and the assistant exchange.
- **Slide 06** is a dark slide carrying the full app window (sidebar, Companies
  to work table with ICP score pills) with the Follow-up agent draft card
  breaking out over the table, lit by a radial gold glow.
- **Slide 05** shows the same agent writing twice, as two email cards. The
  contextual one carries gold facts and a row of source chips.
- **Slide 07** draws the agent chain as a flow diagram with status pills, a
  wrapping connector and the human approval step in gold.

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

## Staged, not yet applied

`figma/slide01-context-graphic.js` replaces slide 01's hero window with a
context-source manifold: a row of source pills across the content width, each
dropping a hairline into a shared spine, the spine feeding one line down into a
single dark ValenOS node. Many places in, one context layer out.

It runs in one `use_figma` call once Figma's tools are re-enabled for the chat.
`preview/s01-preview.png` is a geometry preview rendered locally; the type there
is a substitute, so judge layout from it, not letterforms.
