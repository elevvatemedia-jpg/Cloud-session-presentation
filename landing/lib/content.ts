import { founding } from "./config";

/* ------------------------------------------------------------------ hero */

export const hero = {
  eyebrow: "Launching soon. Founding members wanted.",
  headline: ["Revenue,", "not records."],
  lead: "ValenOS finds the companies worth talking to, starts the conversations and keeps them alive until someone replies.",
  support:
    "A capped number of companies get it before anyone else, on terms set with them.",
  primary: "Apply as a founding member",
  secondary: "See how it works",
  trust: "Built in Warsaw. Five companies are testing it now.",
};

/* ------------------------------------------------------------- 02 · week */

export const week = {
  chapter: { n: "03", name: "The week" },
  headline: "Nobody grew up wanting to update a CRM.",
  lead: "This is the week your team actually has.",
  days: [
    {
      day: "Monday",
      text: "You research twelve companies and send four emails.",
    },
    {
      day: "Tuesday",
      text: "A good call. You spend the evening writing it up.",
    },
    {
      day: "Wednesday",
      text: "Someone replies, in a thread you had already forgotten.",
    },
    {
      day: "Thursday",
      text: "The CRM still says the deal is New.",
    },
  ],
  turn: "None of that was selling.",
};

/* ------------------------------------------------------------- 03 · idea */

export const idea = {
  sources: [
    { id: "email", label: "Gmail" },
    { id: "email", label: "Outlook" },
    { id: "meeting", label: "Calendar" },
    { id: "meeting", label: "Meetings" },
    { id: "note", label: "Your notes" },
    { id: "note", label: "Call notes" },
    { id: "signal", label: "Web signals" },
    { id: "signal", label: "Your tools" },
  ],
  layerTitle: "One context layer",
  layerBody:
    "Every email, meeting, note and signal about a company, in one place, kept current.",
  agentLabels: [
    { id: "lead", label: "Lead" },
    { id: "followup", label: "Follow-up" },
    { id: "pipeline", label: "CRM" },
    { id: "assistant", label: "Assistant" },
  ],
  /** Says plainly that the four named above are examples, not the whole set. */
  more: "Four worth naming. There are more behind them, and more every month.",
};

export const workflow = {
  railTitle: "The context layer",
  railBody: "Every email, meeting, note and signal about a company, in one place.",
  /**
   * Deliberately not a fixed set. Each step is one thing the agents do off the
   * same context, and the list ends open because it keeps growing.
   */
  steps: [
    { act: "Spots a signal", detail: "Careers page: hiring four account managers.", id: "signal" },
    { act: "Researches the company", detail: "Six that fit your best customers, two of them hiring.", id: "lead" },
    { act: "Writes the first email", detail: "From what was actually said, not a template.", id: "followup" },
    { act: "Follows up", detail: "On its own schedule, until somebody answers.", id: "assistant" },
    { act: "Stops the moment they reply", detail: "Marta answered at 07:42. Nothing chased her again.", id: "note" },
    { act: "Moves the deal", detail: "Contacted to Replied, without you touching it.", id: "pipeline" },
    { act: "Prepares your call", detail: "A brief built from every thread with that company.", id: "meeting" },
  ],
  open: "And whatever the founding members ask for next.",
};

/** The line that bridges the product chapter into the ambition. */
export const turnToAmbition = "That is the first version.";

/* --------------------------------------------------------------- context */

export const context = {
  chapter: { n: "02", name: "How it works" },
  headline: ["It reads your inbox", "before it writes a word."],
  lead: "Connect Gmail or Outlook and your calendar. ValenOS goes through every conversation you have had, so each agent knows the history before it sends anything.",
  hint: "Select any line to see where it came from.",
  company: { name: "Wydmy Logistyka", person: "Marta Wilczyńska, Sales Director" },
  sources: [
    {
      id: "email",
      kind: "Email",
      title: "Re: Four account managers by March",
      when: "Mon",
      text: "We need all four people selling by March.",
      mark: "selling by March",
      rail: "Inbox",
    },
    {
      id: "meeting",
      kind: "Meeting",
      title: "Discovery call with Marta",
      when: "Tue 14:00",
      text: "Start with two roles in Gdańsk, then the rest.",
      mark: "two roles in Gdańsk",
      rail: "Calendar",
    },
    {
      id: "note",
      kind: "Note",
      title: "from Kamil Rogalski",
      when: "Tue",
      text: "Budget is approved. Procurement wants two references.",
      mark: "two references",
      rail: "Your team",
    },
    {
      id: "signal",
      kind: "Signal",
      title: "Careers page",
      when: "Wed",
      text: "Hiring 4 account managers, posted this week.",
      mark: "4 account managers",
      rail: "Web",
    },
  ],
  subject: "Re: Four account managers by March",
  without: [
    "I hope this email finds you well. I wanted to reach out and introduce our company.",
    "We help companies of every size find the right people, hire faster and grow.",
    "Would you be open to a quick fifteen-minute call this week?",
  ],
  with: [
    {
      source: "email",
      text: "You need all four people selling by March, so the plan works back from that date.",
      mark: "selling by March",
    },
    {
      source: "meeting",
      text: "As we agreed on Tuesday, we fill two roles in Gdańsk first and then the other two.",
      mark: "two roles in Gdańsk",
    },
    {
      source: "note",
      text: "I will send your procurement team two references this week, so nothing holds up the start.",
      mark: "two references",
    },
    {
      source: "signal",
      text: "We commit to having the four account managers you are hiring on board by March.",
      mark: "four account managers",
    },
  ],
  closing: "Does Thursday work to walk through it?",
  signoff: "Kamil",
};

/* ---------------------------------------------------------------- agents */

export const agents = {
  chapter: { n: "04", name: "It acts" },
  headline: "Agents hand work to each other.",
  lead: "Every one of them reads the same context, and they pass the deal down the line between them. Nothing goes out without you.",
};

/* ------------------------------------------------------------ membership */

export const membership = {
  headline: "The list is short.",
  lead: founding.capReason,
  benefits: [
    {
      title: "You get it first",
      body: "ValenOS runs on your live deals before anyone outside this group can buy it.",
    },
    {
      title: "Terms set with you, and kept",
      body: "Founding pricing is agreed on your call and stays yours as the price moves up behind you.",
    },
    {
      title: "The two of us, directly",
      body: "Mario and Bruno run your setup and answer when you write. No support queue, no account manager.",
    },
    {
      title: "You decide what gets built",
      body: "Tell us what is missing. It goes on the roadmap, and you see it ship.",
    },
  ],
  askTitle: "What we ask back",
  asks: [
    "Use it on deals that actually matter to you.",
    "Tell us when it gets something wrong.",
    "Take a short call with us every few weeks.",
  ],
};

/* --------------------------------------------------------- 06 · ambition */

export const ambition = {
  chapter: { n: "05", name: "Where this goes" },
  headline: ["A CRM records what happened.", "We want one that makes it happen."],
  horizons: [
    {
      when: "Today",
      title: "It finds, writes, chases and moves the deal.",
      body: "The first version works. Five companies are testing it on their own pipelines, and telling us what is missing.",
      state: "live" as const,
    },
    {
      when: "Next",
      title: "Deeper into the pipeline.",
      body: "Preparing the call before you take it. Drafting the proposal from what was agreed. Noticing the deal that went quiet before you do.",
      state: "building" as const,
    },
    {
      when: "The ambition",
      title: "A small team that sells like a large one.",
      body: "Five people in Warsaw should be able to cover the ground of twenty, because the work that never needed a person no longer has one.",
      state: "horizon" as const,
    },
  ],
  close:
    "We are not trying to make the admin faster. We are trying to take it off your team entirely.",
};

/* --------------------------------------------------------------- founders */

export const foundersCopy = {
  chapter: { n: "06", name: "The people" },
  headline: ["Two friends from Warsaw,", "building the CRM we wanted."],
  paragraphs: [
    "We have known each other since we were kids. Mario runs sales and strategy. Bruno builds the product.",
    "We watched sales teams, ours included, lose their days to research, first emails and CRM updates, with little time left for buyers. We think software should do that work now, and people should get the conversations back.",
    "We are early. The first version works, and we are shaping the rest with our first companies. Join now and you get the two of us: we set it up with you, we answer when you write, and we build what you tell us is missing.",
  ],
};

/* ---------------------------------------------------------------- process */

export const process = {
  chapter: { n: "09", name: "What happens next" },
  headline: "What happens after you apply",
  steps: [
    {
      title: "Apply",
      body: "Three fields and one optional question about where your sales loses time.",
      chip: "Application received",
      tone: "green" as const,
    },
    {
      title: "A call with both of us",
      body: "We learn how you sell today and show you where ValenOS is.",
      chip: "Call with Mario and Bruno",
      tone: "avatars" as const,
    },
    {
      title: "Setup",
      body: "We connect your inbox, calendar and tools, and build your first workflows with you.",
      chip: "First workflow live",
      tone: "dot" as const,
    },
    {
      title: "Building it together",
      body: "You use it on live deals and tell us what is missing. We build it.",
      chip: "Requested by founding members",
      tone: "gold" as const,
    },
  ],
};

/* ------------------------------------------------------------------ apply */

export const apply = {
  chapter: { n: "07", name: "The invitation" },
  headline: ["Build it", "with us."],
  lead: `Founding members get ValenOS first, on better terms than anyone after them, with the two people who build it on the other end of every message.`,
  painLabel: "Where does your sales lose the most time?",
  painOptions: [
    "Finding the right companies",
    "Researching leads",
    "Writing first emails",
    "Following up",
    "Keeping the CRM updated",
    "Something else",
  ],
  submit: "Apply as a founding member",
  reassure: "Mario and Bruno read every application and reply themselves.",
  successTitle: "Application received.",
  successBody:
    "One of us will write to you personally, usually within a day. If it is a fit we will put a call in the diary with both of us on it.",
};

/* ----------------------------------------------------------------- nav */

export const navLinks = [
  { label: "How it works", href: "#context" },
  { label: "The product", href: "#product" },
  { label: "Founding members", href: "#founding" },
];
