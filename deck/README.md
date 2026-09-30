# ValenOS investor deck

**Live deck:** https://www.figma.com/slides/nZCVLnHAeYLKMJNc6748ay

Ten slides, English, built in Figma Slides in the Valen & Partners design
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
| 01 | Revenue, not records | Positioning |
| 02 | Not a CRM problem, a context problem | Problem |
| 03 | Not buildable three years ago | Why now |
| 04 | AI agents live inside the CRM | The shift (dark) |
| 05 | Same agent, same prospect | The proof |
| 06 | One environment | Product |
| 07 | The moat is the context | Defensibility |
| 08 | Early, and already validated | Traction |
| 09 | Two founders | Team |
| 10 | $95,000 | The ask (dark) |

Every slide carries speaker notes with timing cues for a five minute run.

## Before presenting

1. Slide 06 has a `SCREENSHOT SLOT` frame. Drop a real 1680 x 520 export in and
   delete the placeholder labels.
2. Confirm the contact address on slide 10.

## Constraints honoured

No invented figures. The five testing companies are stated as testing and not
paying, with no revenue claimed. Raise terms are verbatim. There is no market
sizing slide because no defensible figures were available.

## render.py

Rasterises any .pptx to HTML and PNG straight from its package XML. Written
because LibreOffice cannot run in this container, and used here to study the old
deck's layouts. Usage: `python3 render.py deck.pptx outdir`.
