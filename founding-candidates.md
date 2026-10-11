# Founding candidates

**Status: not delivered. The data is gone and I could not re-read it.**

This is the weakest of the four deliverables and I am not going to dress it up.

## What exists in the product

`/en/crm/lists/founding_candidates` was created in session 1 and is **EMPTY**. Nothing was
ever added to it, because the workflow that would have populated it (workflow 1, Draft) can
never be run — defect D2. Adding records by hand was the fallback.

## What exists on disk

Nothing. Session 1 transcribed the agent-created companies into a `founding-candidates.md`
in its container and never committed it. The container was reclaimed. Session 2 was
provisioned with no browser tool of any kind, so the workspace could not be reopened to
re-transcribe. Both copies are therefore unavailable.

## What is recoverable from the surviving run notes

Six companies were created by the Lead agent across six runs of the "New leads" workflow.
Of those, five are named in the session-1 notes, and the firmographics survive for only one:

| Company | Where it appears | Firmographics recovered | Signals |
|---|---|---|---|
| G1ANT | Added, run 1 or 2; enriched | Warsaw, PL; IT / Robotic Process Automation; ~25 employees; founded 2015; Facebook, Instagram, X filled. **No contact person.** | **0** |
| Bachoo Agency | Read every run; added at some point | El Segundo, California, US — wrong continent for a Poland campaign (D5) | **0** |
| Autotesto | Read every run | none | **0** |
| AidPort | Read every run | none | **0** |
| SafetyHeads | Read every run; enrichment started and never observed to finish (O3) | none | **0** |
| (sixth company) | unrecoverable | unrecoverable | unrecoverable |

I cannot say with confidence which four of these six were the ones actually *added* versus
merely read and rejected — the run logs distinguished them and the run logs are no longer
reachable. Treat the table as a pointer to re-derive from `/en/crm/companies` (filter to
records created by the Lead agent), not as the list.

## The thing that matters more than the missing rows

Every candidate carries **0 verified buying signals** (D3). The list the product was supposed
to hand Mario is a list of Polish-ish companies with no stated reason why any of them would
buy anything this week. Even fully populated, it is not a prospect list — it is a sample of
Apollo output with one of them enriched with Instagram handles. Six runs, roughly 470,000
tokens, one company with a founding year and no contact email.

Re-deriving the rows is 10 minutes of browser work. Making them worth sending to is the
unsolved problem.
