"use client";

import { useEffect } from "react";
import { useConsent } from "@/components/site/Consent";
import { tracking } from "@/lib/config";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[] };
    _fbq?: unknown;
    _linkedin_data_partner_ids?: string[];
    lintrk?: (...args: unknown[]) => void;
  }
}

let loaded = false;

/**
 * Loads the advertising pixels, and only ever after the visitor has accepted.
 *
 * Nothing is injected on the server, nothing is injected on a decline, and
 * nothing is injected twice. A decline that is later reversed loads on the
 * next accept; a reversal the other way needs a reload, which is why the
 * banner says so.
 */
export function Analytics() {
  const { status } = useConsent();

  useEffect(() => {
    if (status !== "granted" || loaded) return;
    loaded = true;

    if (tracking.metaPixelId) {
      /* Meta's own loader, inlined rather than fetched from a third party. */
      const fbq: NonNullable<Window["fbq"]> = Object.assign(
        (...args: unknown[]) => {
          fbq.queue = fbq.queue ?? [];
          fbq.queue.push(args);
        },
        { queue: [] as unknown[] },
      );
      window.fbq = window.fbq ?? fbq;
      window._fbq = window._fbq ?? window.fbq;

      const s = document.createElement("script");
      s.async = true;
      s.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(s);

      window.fbq("init", tracking.metaPixelId);
      window.fbq("track", "PageView");
    }

    if (tracking.linkedInPartnerId) {
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids ?? [];
      window._linkedin_data_partner_ids.push(tracking.linkedInPartnerId);

      const s = document.createElement("script");
      s.async = true;
      s.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      document.head.appendChild(s);
    }
  }, [status]);

  return null;
}

/**
 * Fires the conversion when an application is actually accepted by the form.
 * Silently does nothing without consent, which is the whole point.
 */
export function trackApplication() {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.("track", "Lead");
    window.lintrk?.("track", { conversion_id: tracking.linkedInPartnerId });
  } catch {
    // A blocked or failed pixel must never break the form.
  }
}
