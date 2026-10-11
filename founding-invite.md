# The founding invite

**Status: NOT PRODUCED. No invite text exists, and nothing was sent to anyone.**

## Why there is no verbatim text

Two separate blocks, in two separate sessions.

**Session 1 — the product blocked it.** The Follow-up agent is the only thing in ValenOS
that drafts a first email, and it only exists inside a workflow. To make it produce a single
line of copy, the workflow containing it must be published to Live — Drafts cannot run
(D2), and the bulk Run-workflow dialog says in as many words "No published workflow can be
run by hand on these records". Hard rule 2 forbids publishing. The agent's drafting
capability was therefore unreachable within the rules Mario set, and I did not break the
rule to get a nicer deliverable.

The record-level composer cannot substitute. Opening a company record and clicking Email
gives a normal composer with a "Help me write" menu, and that menu is rewrite-only:
Rewrite, Shorten, More formal, Friendlier, More direct, Fix spelling and grammar, Translate
to Polish, Translate to English. Every one of those transforms text you have already
written. There is no "draft a first email" anywhere outside a workflow. For a product whose
pitch is that agents write the first email, that is itself a finding — logged as D25.

**Session 2 — the harness blocked it.** Session 2 opened with no browser tool at all: no
Claude in Chrome, no in-app browser pane, no computer use. The workspace was unreachable, so
neither option (a) nor option (b) below could be executed, and Mario's choice between them
was never put to him in time to act on it.

**Nothing was sent.** In session 1 the composer was opened once on the G1ANT record, the To
field was set to mario@valen-partners.com and nothing else, and the draft was discarded. No
email left the building, to Mario or to anyone else. Session 2 sent nothing because session
2 could not reach anything.

## What was established about the agent's configuration

The configuration surface is genuinely good, and it maps cleanly onto what a Polish campaign
needs:

- **Kind of email** — dropdown
- **What to say** — free text: "What you offer, who it is for, and the one thing you want
  them to do." Correct framing.
- **Tone** — Friendly / Formal / Direct
- **Language** — Match the contact / English / Polish / German / French / Spanish. "Match
  the contact" is the right default for Poland.
- **Follow-ups** and **Days between emails** — numeric
- **Stop when they reply** — a toggle, and it is OFF by default (D8)
- **Send from** — defaults to "Workspace SMTP account (default)", which is unconfigured (D9)

It was configured to Tone: Direct, Language: Polish, with this brief, which is what it would
have written from:

> Valen & Partners is recruiting a small group of founding members for ValenOS, a sales CRM
> where AI agents find companies that are hiring salespeople, research them, and draft the
> first email. Founding members get early access on better commercial terms, permanently, in
> exchange for using it on live deals and giving honest feedback. This is for Polish B2B
> companies of roughly 10-200 people that have a sales team. The one thing I want: a
> 20-minute call this week or next to show them their own pipeline running.

Even fully configured, the block showed `"followup_mv3r0sut1" can never run` (D12) and could
not be exercised. It was then removed so the second workflow matched its spec.

## Honest read on whether a Polish CEO would reply

I cannot review copy that does not exist, and I will not invent a sample and let it read as
the agent's. But the mechanism is reviewable, and the mechanism is where this fails.

**The agent would have been writing to companies with zero verified buying signals.** Every
Lead agent run in this workspace reported "0 signals" (D3), and the workspace ICP is empty
(D5). So the email's opening line — the only line that matters in cold outbound — would have
had nothing true and specific to say about why you are writing to this company today.

"Widziałem, że szukacie handlowca" gets a reply. "Zauważyłem Waszą firmę" does not, in any
language, however well the tone dropdown is set. A Polish CEO at a 10-200 person B2B firm
gets several of the second kind every week and deletes them without reading to the end.
Tone, Polish language support and reply-detection are all sound ideas sitting on top of a
lead engine that is not currently delivering the signal they depend on.

There is a second, quieter problem: the agent has no contact person to write to. Enrichment
never fills Email, Phone, Job title or Key contact — those boxes are unchecked by default
(D10) — and the one enriched record came back with an Instagram handle and no human being on
it. An invite with a perfect opening line and no addressee is still not an invite.

## To finish this

Mario still needs to choose, and this is his call, not mine:

**(a)** He authorises publishing one throwaway workflow to Live, with Send from set to his
own mailbox and the recipient forced to himself. This is the only way to see genuine agent
copy. It carries real risk — a Live workflow plus a send step is exactly the accident the
hard rules exist to prevent — so it needs his explicit say-so and a trigger with no
schedule on it.

**(b)** I write the invite, run it through "More direct" and "Translate to Polish", send it
to mario@valen-partners.com only, and label it unambiguously as my copy processed by
ValenOS's rewriter — not as the Follow-up agent's output. This produces a deliverable and
tests the translator, but it does not test the thing we actually wanted to test.

Either way it needs a browser session that has browser tools.
