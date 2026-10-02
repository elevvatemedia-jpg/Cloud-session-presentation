"use client";

import { useConsent } from "@/components/site/Consent";
import { hasTracking } from "@/lib/config";

/** Lets a visitor change their mind, which consent has to allow. */
export function CookieSettings() {
  const { reopen, status } = useConsent();
  if (!hasTracking) return null;

  return (
    <button
      type="button"
      onClick={reopen}
      className="inline-flex min-h-11 cursor-pointer items-center text-[0.8125rem] text-muted underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline sm:min-h-0"
    >
      Cookie settings
      {status !== "unknown" && (
        <span className="ml-1.5 text-faint">
          ({status === "granted" ? "accepted" : "declined"})
        </span>
      )}
    </button>
  );
}
