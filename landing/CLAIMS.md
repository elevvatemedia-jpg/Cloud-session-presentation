# Every factual claim on the page

The page makes statements about your business to strangers. This lists all of
them, where each came from, and which ones I could not verify.

Grounded claims came from `deck/README.md` in this repo or from the screenshots
of valenos.com. Everything marked **CONFIRM** is my inference and needs your
sign-off before the page is public.

## Grounded

| Claim | Source |
|---|---|
| PLN 36,500 tool licences, 85,000 half an ops role, 163,000 rep hours, 284,500 total | `deck/README.md`, "Cost slide sources" — Polish market, checked Sept 2026 |
| "Twenty seats on enterprise tooling passes 1.5 million" | Same section, stated verbatim there |
| Mid-tier tools, half a role, conservative hours | Same section |
| One-time setup fee on a live call, plus a subscription | `deck/README.md`, "Business model slide" |
| Pricing is being set with the founding members | Same — stated as a position, not a gap |
| Mario runs sales and strategy, Bruno builds the product | Founders section of valenos.com |
| The whole "Two friends from Warsaw" copy | Lifted near-verbatim from valenos.com |
| The four process steps and their chips | The "What happens after you apply" screenshot |
| Agents read one context layer; nothing sends without approval | Deck slides 05–08, human approval step |
| The Wydmy Logistyka / Marta Wilczyńska scenario, both emails, all four sources | Reproduced from your own context-demo screenshots |
| "Mario and Bruno read every application and reply themselves" | On valenos.com under the form |

## CONFIRM before launch

| Claim | Where | Why it needs you |
|---|---|---|
| **"Applications are open"** | Membership status card | True today. Flip `founding.applicationsOpen` when it stops being true. |
| **"Five companies are testing it now"** | Hero trust line | From the deck, which also says they are testing and *not paying*. Still true? |
| **"Two people run every setup call"** | Membership lead | Implied by the deck, not stated. True? |
| **Founding pricing stays yours as the price rises** | Membership benefit 02 | This is a commitment. The deck says terms are being set with members; it does not promise they are locked. Only promise this if you mean it. |
| **"Not on day one" on leaving your current CRM** | FAQ 1 | Nothing in the deck says ValenOS runs alongside an existing CRM. If it cannot, cut this answer. |
| **"It pays for itself from about three salespeople up"** | FAQ 4 | My inference from the five-person cost model. No source. |
| **"You are running on live deals the same week"** | FAQ 5 | Implied by a one-call setup. Confirm it is realistic. |
| **founders@valen-partners.com** | `lib/config.ts` | Placeholder. |
| **© 2026 Valen & Partners** | Footer | Matches the site; check at new year. |
| **valenos.com** | `NEXT_PUBLIC_SITE_URL`, OG tags | Placeholder domain. |

## Deliberately not claimed

- No prices or discount percentages — none were supplied.
- No revenue, customer count or growth figures.
- No named customer logos. Dale Carnegie Poland appears in the deck as a pilot,
  but you did not pick it as public social proof, so it is not on the page.
- **No number of places.** The page says the list is short and the number is
  capped, and never says what the number is. No counter, no "x of y left". That
  was a deliberate call: a count is the one scarcity claim a visitor can later
  discover was false, and it would lock you into a number before you want one.
- No countdown timer or fake urgency of any kind.
- No testimonials, because there are none yet.
