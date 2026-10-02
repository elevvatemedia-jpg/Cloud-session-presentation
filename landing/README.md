# ValenOS — founding members landing page

A single-page landing site for traffic arriving from Instagram and LinkedIn.
One job: turn a cold visitor into a founding-member application.

Built to match valenos.com — same palette, same type, same ruled editorial
layout — but restructured as a funnel rather than a product site.

```bash
cd landing
npm install
npm run dev     # http://localhost:4401
```

`npm run build && npm start` for the production build. It deploys to Vercel with
no configuration; set `NEXT_PUBLIC_SITE_URL` so the Open Graph tags resolve.

## The page, in order

Six chapters, read top to bottom, each numbered and named on the page.

| # | Chapter | What it is doing |
|---|---------|------------------|
| 01 | The hook | Says what this is in one line and offers the one action |
| 02 | How it works | Sources converging into one context layer, then one email written from it |
| 03 | The week | The problem as the buyer's own week, not as a cost model |
| 04 | Where this goes | Today, next, and the ambition — each labelled honestly |
| 05 | The people | Mario and Bruno, in their own words from the site |
| 06 | The invitation | The offer in four lines, then the form |

One **turn** — a single sentence alone on the page — carries the argument out
of the week and into what it is all for.

### One thing per screen

The page is read on a phone, in one pass, by someone who arrived from a story.
Two chapters were each carrying two full demos, and that was what made it feel
packed — not the total length. Chapter 02 had the diagram *and* an email beside
a card listing its sources, joined by measured SVG curves that only existed
from lg up. Chapter 07 had the offer, a numbered process block and the form,
each asking for attention.

Both now carry one object. The email names its own sources inline, which is the
same claim in a quarter of the space and behaves identically on a phone. The
process is one sentence under the offer.

### Never say how many agents

There are many more than the page names, so nothing may imply a count. The
diagram in chapter 02 names four because those four are worth naming, and the
line under them says exactly that.

## Where to edit

Almost nothing requires touching a component.

| You want to change | File |
|---|---|
| Whether applications are open, and the cap wording | `lib/config.ts` |
| Legal entity, address, NIP, policy links | `lib/config.ts` (`legal`) |
| Founder names, roles, contact | `lib/config.ts` |
| Any wording anywhere | `lib/content.ts` |
| Colour, type scale, motion easing | `app/globals.css` (`@theme`) |
| Where the form posts | `app/api/apply/route.ts` |

The page says the number of founding places is **capped** and deliberately never
says what that number is. There is no counter and no "x of y left", so nothing
on the page can age into a claim that turns out to be untrue, and you are free
to take nine companies or twelve without rewriting anything.

`founding.applicationsOpen` in `lib/config.ts` is the switch for when you stop
taking applications.

## The form is a stub

`app/api/apply/route.ts` validates the application and logs it. **It does not
store or send anything yet.** The UI around it is finished — validation, inline
errors, a focusable error summary, success and failure states — so going live
means replacing one marked block in that file with Resend, Notion, or a POST
into ValenOS itself. Nothing in the UI changes.

Put credentials in `.env.local`. See `.env.example`.

## Hosted preview

`node preview/build.mjs` bundles the real components into a static page in
`preview/dist` — same code, no server. Used to publish a shareable preview
without deploying. The form resolves locally there instead of hitting the API
route, and the page says so at the bottom.

## Legal

`legal` in `lib/config.ts` holds the company identification and the policy
links. **Every field is empty and has to be filled before the form goes live.**
The form collects a name, a company and a work email, which is personal data
under GDPR, so the page has to name the controller and link a privacy policy at
the point of collection. The notice under the submit button and the footer's
legal row both read from that object, and any field left empty is not rendered,
so nothing invented reaches the page.

Link the policies on valen-partners.com rather than copying them here. Two
copies of a privacy policy drift apart, and the one that is wrong is the one you
get asked about.

### Pixels and consent

`tracking` in `lib/config.ts` holds the Meta Pixel and LinkedIn Insight ids.
Both are empty, so today the page loads no tracker, sets no cookie, and shows
no banner — there is nothing to ask about. Put an id in and the consent banner
turns itself on, because that is the moment consent starts being required.

Nothing loads before the visitor accepts. Decline and Accept are the same size
and weight, the choice is remembered, and `Cookie settings` in the footer lets
anyone change it. A successful application fires the conversion event, and only
if consent was given.

Measured with a test pixel id in place: no choice → 0 tracker requests; decline
→ 0 requests and remembered across reload; accept → the pixel loads and is
remembered.

### Policy pages

`/privacy`, `/cookies` and `/terms` render from `lib/legal-content.ts`. Every
document is `null`, so each route returns **404** and its footer link stays
hidden — an empty page with a legal-sounding title is worse than no page. Paste
the real text in and all three light up at once.

## Logo

`public/vp-mark.png` is the Valen & Partners mark, navy `#09213D` and grey
`#717272`. One asset at 428×160 covers every placement, the largest of which
renders at 24px. `components/ui/Wordmark.tsx` wraps it and reserves its space so
nothing shifts while it loads. Replace it with an SVG when one is available and
nothing else needs to change.

## Type

**Mona Sans** for everything, **Fraunces** for the `V&P.` mark, both from Google
Fonts with the `latin-ext` subset the Polish names need. To self-host, drop the
`<link>` in `app/layout.tsx` and put the family first in `--font-sans`.

## Motion

Framer Motion, not scroll-jacking. Reveals are 14px of travel over 500ms on one
easing curve; the hero mockup tilt is scroll-linked so it tracks the finger on a
phone. Nothing pins, nothing hijacks the scrollbar — both read badly on mobile,
which is where most of this traffic lands.

Every animation is disabled under `prefers-reduced-motion`, and the final state
renders immediately. Verified: with reduced motion on, zero in-viewport elements
sit below full opacity.

## What was checked, and how

Measured in headless Chromium against the production build, not eyeballed:

- **No horizontal scroll.** `scrollWidth === clientWidth` at 390px and 768px.
  Two real bugs were found and fixed here: grid and flex children default to
  `min-width: auto`, so the context card and the tab rail were pushing the page
  to 1209px wide on a phone. The hero's 3D-tilted mockup needed `overflow-x:
  clip` — `overflow-hidden` does not reliably clip a perspective projection.
- **Contrast.** Every distinct rendered text style sampled and checked against
  WCAG AA. Three real failures were fixed at the token level: `--color-faint`
  was 2.76:1 on paper, and gold-as-text was 3.35:1. Gold is now split into
  `--color-gold-deep` (icons and borders, 3:1 is enough) and
  `--color-gold-text` (5.1:1 on paper). Caveat: Chromium reports the dark
  sections' whites as `oklch()`, which the checker could not parse, so those
  were computed by hand — white at 60% on `#0d0c0a` is 7.2:1, and the gold CTA's
  `#2a2008` on its gradient is 5.8–7.2:1.
- **Touch targets.** Every link, button and input is at least 44px tall on
  mobile.
- **Interactions.** Context toggle, the four connector curves, tab switching,
  the kanban card moving columns, the FAQ, empty-form validation (summary
  present, focused, one link per bad field) and a successful submit.

## Still to do before it goes live

See `CLAIMS.md`. It lists every factual statement on the page and where it came
from. Several need confirming — the page states things about your business that
only you can verify.
