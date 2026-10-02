"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section, Chapter } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip, Avatar } from "@/components/ui/AppWindow";
import { ContextFlow } from "@/components/ui/ContextFlow";
import { SOURCE_ICONS, CheckIcon, LayersIcon, SendIcon } from "@/components/ui/Icons";
import { context } from "@/lib/content";
import { clsx } from "@/lib/clsx";
import { easeOutSoft } from "@/lib/motion";

/** Wraps the quoted fragment without dangerouslySetInnerHTML. */
function Marked({ text, mark }: { text: string; mark: string }) {
  const at = text.indexOf(mark);
  if (at === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <mark className="text-highlight text-inherit">{mark}</mark>
      {text.slice(at + mark.length)}
    </>
  );
}

/**
 * Chapter 02. The mechanism, then one email written from it.
 *
 * This used to carry a second card listing the sources, joined to the email by
 * measured SVG curves. The curves only existed from lg up, the card repeated
 * the same four facts, and together they made the longest chapter on the page.
 * Each line now names its own source, which is the same claim in a quarter of
 * the space and works identically on a phone.
 */
export function ContextDemo() {
  const [withContext, setWithContext] = useState(true);

  return (
    <Section id="context" tone="warm" label="How ValenOS works">
      <Reveal className="max-w-[46rem]">
        <Chapter {...context.chapter} />
        <h2 className="text-h1 text-ink">
          Nothing it does
          <br className="hidden sm:block" />{" "}
          <span className="text-muted">starts from zero.</span>
        </h2>
        <p className="mt-5 max-w-[54ch] text-lead text-body">
          ValenOS connects your inbox, your calendar and your tools, and keeps
          one living picture of every company you sell to. Every agent reads
          that same picture before it does anything.
        </p>
      </Reveal>

      <Reveal tall className="mt-9 sm:mt-12">
        <ContextFlow />
      </Reveal>

      {/* ------------------------------------------------- the same email */}
      <Reveal className="mt-16 max-w-[46rem] sm:mt-24">
        <h3 className="text-h2 text-ink">
          {context.headline[0]} {context.headline[1]}
        </h3>
      </Reveal>

      <Reveal className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <div
          role="group"
          aria-label="Compare the email with and without context"
          className="inline-flex self-start rounded-[12px] border border-line bg-card p-1"
        >
          {[
            { on: false, label: "Without context" },
            { on: true, label: "With context" },
          ].map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => setWithContext(opt.on)}
              aria-pressed={withContext === opt.on}
              className={clsx(
                "relative min-h-11 cursor-pointer rounded-[9px] px-4 text-[0.875rem] font-medium transition-colors duration-200",
                withContext === opt.on ? "text-ink" : "text-muted hover:text-body",
              )}
            >
              {withContext === opt.on && (
                <motion.span
                  layoutId="ctx-toggle"
                  className="absolute inset-0 rounded-[9px] bg-paper-warm"
                  transition={{ duration: 0.3, ease: easeOutSoft }}
                />
              )}
              <span className="relative flex items-center gap-1.5">
                {opt.on && <LayersIcon className="size-3.5" />}
                {opt.label}
              </span>
            </button>
          ))}
        </div>
        <p className="text-sm text-muted">
          {withContext ? context.hint : "The same agent, with nothing to read."}
        </p>
      </Reveal>

      <Reveal tall className="mt-6 sm:mt-8">
        <div className="mx-auto max-w-[46rem] overflow-hidden rounded-[16px] border border-line bg-card shadow-lift">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3.5 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <span
                aria-hidden
                className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-gold-wash text-gold-deep ring-1 ring-gold/25"
              >
                <SendIcon className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[0.9375rem] font-medium text-ink">
                  Follow-up agent
                </p>
                <p className="truncate text-[0.8125rem] text-muted">
                  writing as Kamil Rogalski
                </p>
              </div>
            </div>
            <Chip tone={withContext ? "green" : "neutral"} className="shrink-0">
              {withContext ? <CheckIcon className="size-3" /> : null}
              {withContext ? "Sent" : "Draft"}
            </Chip>
          </div>

          <div className="flex items-center gap-3 border-b border-line px-4 py-3 text-[0.875rem] sm:px-6">
            <span className="shrink-0 text-muted">To</span>
            <Avatar initials="MW" className="size-6 text-[0.625rem]" tone="plain" />
            <span className="truncate text-ink">Marta Wilczyńska</span>
          </div>

          <div className="px-4 py-6 sm:px-7 sm:py-8">
            <p className="text-[0.9375rem] text-ink sm:text-base">Hi Marta,</p>

            <AnimatePresence mode="wait" initial={false}>
              {withContext ? (
                <motion.div
                  key="with"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: easeOutSoft }}
                  className="mt-5 space-y-5"
                >
                  {context.with.map((line) => {
                    const Icon = SOURCE_ICONS[line.source as keyof typeof SOURCE_ICONS];
                    return (
                      <div key={line.source}>
                        <p className="text-[0.9375rem] leading-relaxed text-body sm:text-base">
                          <Marked text={line.text} mark={line.mark} />
                        </p>
                        <p className="mt-2 flex items-center gap-1.5 text-[0.75rem] text-faint">
                          <Icon className="size-3.5 text-gold-deep" />
                          {line.chip}
                        </p>
                      </div>
                    );
                  })}
                  <p className="pt-1 text-[0.9375rem] text-body sm:text-base">
                    {context.closing}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="without"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: easeOutSoft }}
                  className="mt-5 space-y-4"
                >
                  {context.without.map((line) => (
                    <p
                      key={line}
                      className="text-[0.9375rem] leading-relaxed text-muted sm:text-base"
                    >
                      {line}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-6 text-[0.9375rem] text-ink sm:text-base">
              {context.signoff}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
