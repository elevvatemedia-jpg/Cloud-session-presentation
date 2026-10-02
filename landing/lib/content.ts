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

/* --------------------------------------------------------------- problem */

export const problem = {
  eyebrow: "The problem",
  headline: "You are already paying for this.",
  lead: "Not in licences. In the hours your team gives to work that software should be doing.",
  rows: [
    {
      label: "Tool licences",
      note: "CRM, prospecting and call notes. Five seats, mid-tier, billed annually.",
      amount: 36_500,
    },
    {
      label: "Half an operations role",
      note: "Someone has to own the CRM. Usually nobody does, so everybody does a little.",
      amount: 85_000,
    },
    {
      label: "Rep hours on admin",
      note: "Five reps, a quarter of the week on research and data entry.",
      amount: 163_000,
    },
  ],
  total: 284_500,
  totalLabel: "a year, for a five-person sales team in Poland",
  footnote:
    "Mid-tier tools, half a role rather than one, conservative hours. Twenty seats on enterprise tooling passes 1.5 million by the same arithmetic.",
};

/* --------------------------------------------------------------- context */

export const context = {
  eyebrow: "Context",
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
  eyebrow: "The product",
  headline: "Four agents, one context layer.",
  lead: "They hand work to each other, and every one of them reads the same history. Nothing gets sent without you.",
  tabs: [
    {
      id: "lead",
      tab: "Your list fills itself",
      title: "Your list fills itself.",
      body: "The lead agent looks for companies shaped like the ones you already sell to, and puts them in front of you with the reason it picked them.",
      proof: "Found 6 companies that fit, 2 of them hiring salespeople.",
    },
    {
      id: "followup",
      tab: "The follow-up knows the last call",
      title: "The follow-up knows the last call.",
      body: "Every email is written from what was actually said on the call and in the thread. Select any line and it shows you the source.",
      proof: "Sent 9 first emails. Marta Wilczyńska replied at 07:42.",
    },
    {
      id: "pipeline",
      tab: "Deals move when something happens",
      title: "Deals move when something happens.",
      body: "A reply moves the deal to Replied. A booked call moves it to Meeting. You stop updating stages by hand.",
      proof: "Moved Wydmy Logistyka to Replied and booked Dębowa Kancelaria.",
    },
    {
      id: "assistant",
      tab: "Ask how to close a deal",
      title: "Ask how to close a deal.",
      body: "The assistant answers from every email, meeting and note with that company, and shows where each line came from.",
      proof: "Budget is approved, so it comes down to timing and trust.",
    },
  ],
};

/* ------------------------------------------------------------ membership */

export const membership = {
  eyebrow: "Founding members",
  headline: "The list is short.",
  lead: "We would rather have a few companies using ValenOS properly than a long queue of names.",
  statusLabel: "Right now",
  statusTitle: "Applications are open.",
  statusNote: founding.capReason,
  statusFoot: "Mario and Bruno read every one.",
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

/* --------------------------------------------------------------- founders */

export const foundersCopy = {
  headline: ["Two friends from Warsaw,", "building the CRM we wanted."],
  paragraphs: [
    "We have known each other since we were kids. Mario runs sales and strategy. Bruno builds the product.",
    "We watched sales teams, ours included, lose their days to research, first emails and CRM updates, with little time left for buyers. We think software should do that work now, and people should get the conversations back.",
    "We are early. The first version works, and we are shaping the rest with our first companies. Join now and you get the two of us: we set it up with you, we answer when you write, and we build what you tell us is missing.",
  ],
};

/* ---------------------------------------------------------------- process */

export const process = {
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

/* -------------------------------------------------------------------- faq */

export const faq = {
  headline: "Before you apply",
  items: [
    {
      q: "Do we have to leave our current CRM?",
      a: "Not on day one. Start with one pipeline running next to what you use today, and move the rest once the agents are doing more than your old CRM was.",
    },
    {
      q: "What happens to our email?",
      a: "It stays yours. ValenOS reads your inbox to build the context the agents work from. Nothing goes out without a person approving it, and we will walk you through exactly what is stored on the call.",
    },
    {
      q: "What does it cost?",
      a: "There is a one-time setup, done live with us, and a subscription after it. The numbers are being set with the founding members, and you will see them on the call before you commit to anything.",
    },
    {
      q: "How big does our sales team need to be?",
      a: "It pays for itself fastest from about three salespeople up. Below that you usually do not have the volume for the agents to work with yet.",
    },
    {
      q: "How long is setup?",
      a: "One call to connect your inbox, calendar and tools and to build the first workflow with you. You are running on live deals the same week.",
    },
    {
      q: "What if it is not for us?",
      a: "Then you tell us on the call and we part as friends. We would rather have eight companies that use it than ten that signed up.",
    },
  ],
};

/* ------------------------------------------------------------------ apply */

export const apply = {
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
  { label: "Product", href: "#product" },
  { label: "Context", href: "#context" },
  { label: "Founding members", href: "#founding" },
];
