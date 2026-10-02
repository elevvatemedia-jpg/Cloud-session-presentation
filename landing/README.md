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

| # | Section | What it is doing |
|---|---------|------------------|
| 1 | Hero | Says what this is in one line, states the cap, offers the one action |
| 2 | Problem | The cost of the work today, counted up as you scroll |
| 3 | Context | The with/without-context email, with live source connectors |
| 4 | Product | Four agents as auto-advancing tabs, each with its own mockup |
| 5 | Founding members | The offer, the places counter, what is asked in return |
| 6 | Founders | Mario and Bruno, in their own words from the site |
| 7 | Process | The four steps after applying |
| 8 | FAQ | The objections that stop a cold visitor applying |
| 9 | Apply | The form, on dark, with the reassurance line |

Problem → proof → product → offer → people → process → objections → ask. The
dark sections are the offer and the close, following the deck's own rule that
dark is reserved for the turn and the close.

## Where to edit

Almost nothing requires touching a component.

| You want to change | File |
|---|---|
| Whether applications are open, and the cap wording | `lib/config.ts` |
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
