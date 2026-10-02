/**
 * Everything on this page that is a fact about the business lives here.
 * Edit this file, not the components.
 */

export const founding = {
  /**
   * How many founding-member places exist in total.
   * The page states this number in the hero, the membership section and the
   * sticky bar. Change it in one place and it changes everywhere.
   */
  total: 10,

  /**
   * How many are already taken. SET THIS TO THE REAL NUMBER before the page
   * goes live — it is rendered as a claim to visitors.
   * Left at 0 the page reads "10 places open", which is true on day one and
   * stays true until someone is accepted.
   */
  claimed: 0,

  /** Shown as the reason the number is capped. */
  capReason: "Two people run every setup call, so the number is small on purpose.",
} as const;

export const remaining = Math.max(founding.total - founding.claimed, 0);

export const company = {
  name: "ValenOS",
  parent: "Valen & Partners",
  city: "Warsaw",
  /** Confirm before launch. */
  email: "founders@valen-partners.com",
  year: 2026,
} as const;

export const founders = [
  {
    initials: "MM",
    name: "Mario Martinez",
    role: "Sales and strategy",
    line: "Runs the setup calls and answers your messages.",
  },
  {
    initials: "BS",
    name: "Bruno Smuga",
    role: "Builds the product",
    line: "Ships what founding members ask for.",
  },
] as const;

/** Where the form posts. Swap the body of submitApplication in lib/submit.ts. */
export const applyEndpoint = "/api/apply";
