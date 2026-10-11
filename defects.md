# ValenOS defect list

Test date 2026-10-11. Tester: first-time user, browser only, Mario's signed-in workspace.
Ordered by severity. "Blocks" = how badly it blocks a founding member going live.

Provenance note: D1–D24 were observed directly in session 1. The screenshots referenced
below were taken but **never committed** and are lost with that session's container — the
reproduction steps here are the only surviving evidence. Session 2 had no browser access
at all (see "OPEN — NOT VERIFIED") so nothing below was re-confirmed, and four items
remain unchecked.

## BLOCKING

**D1 — Enrichment deleted a company record.**
Where: Companies > Masorange (masorange.es, id `14d35530-3099-41f1-8a58-9d0df0752e28`) > Enrich.
What happened: clicked Enrich on a sparse company record (name + domain only). The record
ceased to exist. Its URL returns "This record doesn't exist or you can't see it" and the
Companies count dropped 34 -> 33. No Delete was clicked. The linked person record (Bajas
Jazztel) survived with its email history intact but now carries a Company chip pointing at a
dead record.
Should have happened: enrichment fills empty fields and never removes a record.
Blocks: totally. You cannot hand a client a tool where a read-shaped button destroys CRM
rows. No undo, no trash found. Check the enrichment job log for that record id.

**D2 — A Draft workflow cannot be run or tested at all.**
Where: any Draft workflow; also Companies > select rows > Run workflow.
What happened: Draft workflows have no "Run now" (only Live ones do) and no per-block test.
The bulk Run-workflow dialog states "No published workflow can be run by hand on these
records" with Run disabled.
Should have happened: a dry-run / test-run against a sample so config can be validated
before going Live.
Blocks: severely. Every client configuration is therefore tested in production. This also
makes the "configure in hours" claim hollow — you can configure in hours but you cannot
verify without exposing real prospects.

**D3 — Lead agent delivers 1 company out of 5 requested, with zero verified signals.**
Where: "New leads" workflow > Run now > Runs tab > Lead agent step.
What happened: reproduced on two runs an hour apart. Configured for 5 companies/run.
Searched Apollo (25 results), read 4 companies, added 1, reporting "Added 1 company with 0
signals ... could not check remaining candidates due to budget constraints." Token spend
76,147 and 78,846. The Follow-up agent panel reveals the cause: "Stops at 80,000 tokens and
25 emails per run." Reading ~4 company pages exhausts the entire run budget.
Should have happened: 5 companies, each with the configured signal ("Hiring sales reps")
actually verified.
Blocks: severely. The product's core claim is signal-driven leads. It is shipping
unsignalled leads at ~78k tokens each and calling the run "Completed" in green.

**D4 — The agent re-reads the same rejected companies every run, wasting the whole budget.**
Where: same run logs.
What happened: run 2 read the identical four companies as run 1 (Bachoo, Autotesto, AidPort,
SafetyHeads) before giving up. No memory of prior evaluation.
Should have happened: skip already-evaluated companies; spend budget on new candidates.
Blocks: severely — it is the mechanism behind D3 and makes repeat runs near-worthless.

**D5 — A Live workflow is running against an empty ICP, and the UI offers that as the default.**
Where: "New leads" (LIVE) > Lead agent > Ideal customer profile.
What happened: "Use the workspace ICP" is selected and the panel itself says "The workspace
ICP is empty." The workflow has run 6 times in that state. Result: it pulled Bachoo Agency,
El Segundo, US into a Poland campaign.
Should have happened: refuse to run, or hard-block publish, when the selected ICP is empty.
Blocks: severely. A founding member's first run silently targets the whole world.

## HIGH

**D6 — Workflows cannot be renamed.**
Where: workflow editor title.
What happened: the title is plain text, not an input (triple-click selects page text; cmd+A
selects the whole document). The "..." menu contains only "Archive". No rename, no duplicate.
Should have happened: rename from the title or the "..." menu.
Blocks: badly for a per-client configuration product. Every from-scratch workflow is called
"New workflow" forever. The workspace already contains two different workflows both named
"New workflow", which is exactly how a client misconfigures the wrong one.

**D7 — Token spend is shown to the user on the workflow run screen.**
Where: Workflows > Runs > any step: "78,846 tokens".
What happened: raw token counts rendered in the run inspector, which is a normal operating
screen, not an admin area.
Should have happened: cost belongs in Settings, admin only. A client seeing "78,846 tokens"
for one lead will do the arithmetic and it will not flatter you.
Blocks: commercially, not functionally. Fix before any demo.

**D8 — "Stop when they reply" defaults to OFF.**
Where: Follow-up agent block.
What happened: the toggle that implements the product's headline promise ("chases replies,
stops when someone replies") is off unless you find it.
Should have happened: on by default.
Blocks: badly. Default-off means a client keeps emailing someone who already replied. That
is the single most reputation-damaging thing an outbound tool can do.

**D9 — Follow-up agent defaults to a sending account that is not configured.**
Where: Follow-up agent > Send from = "Workspace SMTP account (default)"; Settings > Mailboxes
shows Workspace sending account with blank host, blank from-name, blank from-email, Outreach
agent off.
What happened: the default sender cannot send. mario@valen-partners.com is available in the
dropdown but is not the default.
Should have happened: default to a connected mailbox, or refuse to validate with an
unconfigured sender.
Blocks: badly — a workflow built entirely on defaults silently cannot send.

**D10 — Enrichment is unreliable and never fills a contact person.**
Where: record > Enrich; and Enrichment agent block > Fields to fill.
What happened: 5 records enriched. G1ANT filled 4 fields (Facebook, Founded, Instagram, X —
all vanity, no contact). Amerlink filled but with a questionable match (a Polish-facing
contact resolved to "Education, 3 employees, Delray Beach"). Cypressfactor and Lu spun for
minutes and filled nothing. Masorange was destroyed (D1). In the agent block, every People
field (Email, Phone, Job title, Key contact) is UNCHECKED by default.
Should have happened: fill domain/industry/size/location/contact reliably; default the
contact fields ON, since the contact is the only field outbound actually needs.
Blocks: badly. This is the known suspect and it is confirmed.

**D17 — Assistant confabulates a rationale while citing real sources.**
Where: Assistant, asked "Why was G1ANT added as a lead today, and what buying signals did
the lead agent actually find?"
What happened: answered that it "matched the target profile criteria (Warsaw-based IT/Robotic
Process Automation firm, ~25 employees)" and linked a genuine person record. The truth is the
run logged "0 signals" and the workspace ICP is empty — there were no criteria to match.
Citations are real; the reasoning is invented.
Should have happened: "It was added with 0 signals; no ICP criteria were configured."
Blocks: badly for trust. The citation UI makes a confabulated answer look verified.
See also O4 — the Assistant separately asserted a contact email that may not exist.

## MEDIUM

**D11 — Internal block IDs and raw validator output leak into user-facing errors.**
Where: workflow editor "1 thing to fix" banner. Four separate instances captured:
`schedule_mv3qcbnb1: cron Required`
`lead_mv3qcv0o2: icp.criteria Array must contain at least 1 element(s)`
`crm_mv3qfwtd1: action Required`
`record_created_mv3qxp6f1: objectSlug Required`
Should have happened: "The schedule needs a time", "Add at least one ICP criterion", etc.
Blocks: moderately — it is the first thing a new user sees and it reads like a crash.

**D12 — "can never run" with no explanation.**
Where: Follow-up agent appended after an Enrichment agent:
`"followup_mv3r0sut1" can never run`.
Should have happened: say why and what to change.
Blocks: moderately — unactionable.

**D13 — Generated step binding contains a doubled path.**
Where: CRM agent > Records, bound via "Use a value from an earlier block":
`{{ steps.lead_mv3qcv0o2.output.output.companyIds }}`
Note the `.output.output.`. By contrast the trigger binding produces a clean
`{{ trigger.record.id }}`. Unverified whether it resolves, because D2 prevented running it.
Should have happened: `.output.companyIds`.
Blocks: potentially severely if it resolves to undefined — check this first, it is cheap to
verify.

**D14 — Scheduling is raw cron only.**
Where: Schedule trigger > Cron (required), helper text "Five fields, e.g. `0 9 * * 1-5`".
Should have happened: a picker ("every weekday at 09:00"). The target buyer is a Polish sales
lead, not a sysadmin.
Blocks: moderately — it is a wall for non-technical configurators, which is who this product
says it is for.

**D15 — Sidebar "Workflows" does not open a workflow list.**
Where: left nav > Workflows.
What happened: drops you into one workflow's editor. The only index is the title dropdown.
Should have happened: a list view.
Blocks: moderately — there is no place to see all workflows and their status at a glance.

**D16 — No way to create a list from inside the workflow editor.**
Where: Lead agent / CRM agent > "Add them to list" — dropdown shows existing lists only.
Creating one from the sidebar "+" works but then NAVIGATES AWAY from the editor to the new
list page, mid-build.
Should have happened: "Create new list" inline; and never navigate away from unsaved work.
Blocks: moderately — breaks the build flow at exactly the point the demo would be running.

**D25 — No agent can draft a first email outside a published workflow.**
Where: company record > Email > "Help me write".
What happened: the menu is rewrite-only — Rewrite, Shorten, More formal, Friendlier, More
direct, Fix spelling and grammar, Translate to Polish, Translate to English. Every option
transforms text you have already written. There is no "draft a first email" anywhere outside
a workflow, and inside a workflow the Follow-up agent is unreachable without publishing to
Live (D2).
Should have happened: generate-from-brief at the record level, or a Draft-workflow preview.
Blocks: moderately on its own, severely in combination with D2 — for a product whose pitch is
that agents write the first email, the drafting capability cannot be demonstrated to a
prospect without putting a Live workflow in front of real contacts.

## LOW

**D18 — "Founded 2,015".** Year rendered with a thousands separator on the G1ANT record.

**D19 — Agent writes attributed to the human.** G1ANT activity reads "Mario updated Founded,
X (Twitter), Facebook, Instagram" for changes made by the Enrichment agent. Provenance is
wrong; the line above it correctly says "Enrichment filled 4 fields".

**D20 — CRM pollution from calendar and vendor mail.** Company records auto-created for lu.ma
(an events platform, from a calendar invite) and Masorange (a Spanish telco, from
customer-service mail). These are not prospects. 28 of 33 company records have no
firmographics at all.

**D21 — Free-text country field with no validation.** Lead agent > Company HQ accepts any
string; a typo returns nothing silently.

**D22 — Worldwide-only headcount.** Lead agent > Employees says "Worldwide headcount.
Per-country headcount is not available." For a Poland-only ICP this both excludes Polish
mid-size subsidiaries and admits multinationals at the wrong size.

**D23 — Assistant composer: Enter inserts a newline instead of sending.**

**D24 — Invalid URLs render a scary red error inside a normal page shell rather than a 404**
(`/en/crm/home` showed "This no longer exists. It may have been deleted or archived.").

## OPEN — NOT VERIFIED

Session 2 was provisioned without any browser tool (no Claude in Chrome, no in-app browser,
no computer use), so the workspace could not be reached at all. These four items were queued
for session 2 and remain open. All four are cheap.

**O1 — Is `rsroczynski@safetyheads.com` a real contact or an invented one?** The Assistant
asserted it as SafetyHeads' key contact. Check whether a People record exists for that
address. If it does not, the Assistant invented a prospect's email address — that is
BLOCKING severity, not high, and it is the single most important open question on this list.

**O2 — Does `{{ steps.lead_mv3qcv0o2.output.output.companyIds }}` (D13) resolve, or does it
resolve to undefined?** Cheapest high-value check available.

**O3 — Did the SafetyHeads and Cypressfactor enrichments ever finish?** Both were still
spinning when session 1 ended. If they are still spinning, enrichment has no timeout and no
failure state — add it as a defect.

**O4 — Does a trash / undo exist for D1?** No trash was found, but Settings was only
partially walked. If D1 is recoverable it drops from blocking to high.

## KNOWN SUSPECTS — verdict on each

- **Empty domain/industry/size/location:** CONFIRMED (D10, D20). 28 of 33 companies are bare.
  Agent-created leads are populated; everything else is not.
- **Deal stages as channels:** CLEARED. Stages are New, Contacted, Replied, Meeting,
  Proposal, Won, Lost. Exactly right.
- **Leftover test data ("asd" workflow, "TEST" activity):** NOT FOUND in Workflows,
  Companies, Deals or Home. Two workflows named "New workflow" exist but that is D6, not test
  junk. Archived workflows not checked.
- **Internal fields exposed (Apollo Org ID):** CLEARED on Companies — no Apollo field in the
  column picker. Not checked on People. Note Apollo is visible in run logs ("Searched Apollo
  (page 1): 25 companies"), which is acceptable in a run trace, less so if a client reads it.
- **Token spend visible:** CONFIRMED (D7). Not on Home, but on every workflow run screen.
