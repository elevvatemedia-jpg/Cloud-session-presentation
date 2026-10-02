/**
 * The policy documents, hosted on this page.
 *
 * EMPTY ON PURPOSE. Nothing here was written by Claude and nothing was guessed:
 * valen-partners.com could not be reached from the build container, so the text
 * has to be pasted in from the real policies.
 *
 * A document left null makes its route return 404 and keeps its footer link
 * hidden, so an empty policy can never be served to anyone.
 *
 * To fill one in: paste each heading as a section `title` and its paragraphs as
 * `body` entries. Keep the original Polish unless the policy has an English
 * version — a translated policy is not the policy.
 */
export type LegalSection = {
  title: string;
  /** Plain paragraphs. A nested array renders as a bulleted list. */
  body: (string | string[])[];
};

export type LegalDoc = {
  title: string;
  /** Shown under the title, e.g. "Last updated 12 March 2026". */
  updated: string;
  /** One line under the heading, before the sections. */
  intro?: string;
  sections: LegalSection[];
};

export const legalDocs: Record<"privacy" | "cookies" | "terms", LegalDoc | null> =
  {
    privacy: null,
    cookies: null,
    terms: null,
  };
