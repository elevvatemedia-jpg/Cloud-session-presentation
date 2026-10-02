export type ConsentStatus = "unknown" | "granted" | "denied";

const KEY = "valenos.consent.v1";

/**
 * The visitor's choice lives in localStorage, which can be absent, full, or
 * throw outright in a private window. Every path here has to survive that:
 * if we cannot read a choice, we have not been given one, so nothing loads.
 */
export function readConsent(): ConsentStatus {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw === "granted" || raw === "denied" ? raw : "unknown";
  } catch {
    return "unknown";
  }
}

export function writeConsent(status: Exclude<ConsentStatus, "unknown">) {
  try {
    window.localStorage.setItem(KEY, status);
  } catch {
    // A visitor who blocks storage simply gets asked again next time.
  }
}

export function clearConsent() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* nothing to undo */
  }
}
