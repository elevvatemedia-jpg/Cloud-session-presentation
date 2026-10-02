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

/**
 * Legal identification and policy links.
 *
 * REQUIRED BEFORE THE FORM GOES LIVE. The form collects a name, a company and
 * a work email, which is personal data under GDPR, so the page has to name the
 * controller and link a privacy policy at the point of collection.
 *
 * Take these from valen-partners.com rather than writing new ones: one policy,
 * on the canonical domain, linked from here. Two copies of a privacy policy
 * drift apart, and the one that is wrong is the one you get asked about.
 *
 * Any field left empty is simply not rendered, so the page stays clean until
 * the real values are in.
 */
export const legal = {
  /** Registered company name. */
  entity: "Valen & Partners Sp. z o.o.",
  /** Registered address. Street and postcode still to add. */
  address: "Warszawa",
  /** Polish tax id. */
  nip: "5214136320",
  /** Companies-register number, if the entity has one. */
  krs: "",
  /** Absolute URLs on valen-partners.com. */
  privacyUrl: "",
  termsUrl: "",
  cookiesUrl: "",
} as const;

/** True once there is enough to render the footer's legal row. */
export const hasLegal = Boolean(
  legal.entity || legal.address || legal.nip || legal.privacyUrl,
);

/**
 * Advertising pixels.
 *
 * Both are empty, so today the page loads no tracker and sets no cookie, and
 * the consent banner does not appear at all. Put an id in and the banner turns
 * itself on, because that is the point at which consent is actually required.
 *
 * Nothing here loads before the visitor accepts. That is not a preference, it
 * is what GDPR requires of a pixel: consent first, then the script.
 */
export const tracking = {
  /** Meta (Facebook/Instagram) pixel id, digits only. */
  metaPixelId: "",
  /** LinkedIn Insight Tag partner id, digits only. */
  linkedInPartnerId: "",
} as const;

/** No ids means no cookies, which means no banner is owed to anyone. */
export const hasTracking = Boolean(
  tracking.metaPixelId || tracking.linkedInPartnerId,
);

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
