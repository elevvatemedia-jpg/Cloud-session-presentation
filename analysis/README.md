# Part one working

- `part-one-business-model.md` is the analysis. English, for us, not the investor.
- `model-valenos.xlsx` is the live model. Polish, driver-based: change a blue cell
  on the `Zalozenia` tab and every other tab recalculates. Yellow cells are the
  assumptions that most need confirming.
- `model.py` is the scratch arithmetic the analysis was first written from. The
  xlsx supersedes it where the two differ (the xlsx converts demand beyond the
  founding cap at standard price; the script discarded it).

The deck is at https://www.figma.com/slides/AwenRp6CKhGAnQEtODzXiV

## How the workbook was verified

LibreOffice will not run in this container, so `recalc.py` could not be used.
Every formula was instead evaluated with the pure-Python `formulas` engine and
checked against independently computed values: **0 cells evaluate to an Excel
error**, and 21 spot checks across all seven tabs match. Note that openpyxl
writes formulas without cached values, so opening the file in Excel or Sheets
will populate them on first calculation.

FX is 3.85 PLN to the dollar throughout.
