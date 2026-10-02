"use client";

import { AnimatePresence, motion } from "motion/react";
import { useConsent } from "@/components/site/Consent";
import { legal } from "@/lib/config";
import { easeOutSoft } from "@/lib/motion";

/**
 * Accept and Decline are the same size, weight and prominence. A reject that
 * is harder to find than an accept is not consent, and regulators have said so
 * repeatedly.
 */
export function ConsentBanner() {
  const { asking, accept, decline } = useConsent();

  return (
    <AnimatePresence>
      {asking && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookies"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: easeOutSoft }}
          className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-5 sm:pb-5"
        >
          <div className="mx-auto flex w-full max-w-[640px] flex-col gap-4 rounded-[14px] border border-line bg-paper/97 p-5 shadow-float backdrop-blur-xl sm:max-w-[760px] sm:flex-row sm:items-center sm:gap-6">
            <p className="min-w-0 flex-1 text-[0.875rem] leading-relaxed text-body">
              We would like to measure which posts bring people here, using
              Meta and LinkedIn. Nothing loads unless you say yes.
              {legal.cookiesUrl && (
                <>
                  {" "}
                  <a
                    href={legal.cookiesUrl}
                    className="text-ink underline underline-offset-4"
                  >
                    What this stores
                  </a>
                  .
                </>
              )}
            </p>

            <div className="flex shrink-0 gap-2.5">
              <button
                type="button"
                onClick={decline}
                className="min-h-11 flex-1 cursor-pointer rounded-[11px] border border-line-strong bg-card px-5 text-[0.9375rem] font-medium text-ink transition-colors duration-200 hover:border-ink/25 sm:flex-none"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={accept}
                className="min-h-11 flex-1 cursor-pointer rounded-[11px] bg-ink px-5 text-[0.9375rem] font-medium text-paper transition-colors duration-200 hover:bg-[#241f19] sm:flex-none"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
