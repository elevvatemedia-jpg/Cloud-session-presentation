/**
 * Everything on this page that is a fact about the business lives here.
 * Edit this file, not the components.
 */

export const founding = {
  /**
   * The page says the number of places is capped. It deliberately never says
   * what the number is — no counter, no "x of y left", nothing a visitor could
   * later find out was untrue.
   *
   * Flip this to false when you stop taking applications and the page switches
   * to a closed state on its own.
   */
  applicationsOpen: true,

  /** Why the number is capped. Shown in the founding-members section. */
  capReason:
    "Two people run every setup call and answer every message, so we cap the number rather than stretch ourselves thin.",

  /** The short version, used in the sticky bar and the form. */
  capShort: "Places are capped",
} as const;

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
