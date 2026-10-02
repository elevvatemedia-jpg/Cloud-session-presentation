"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip, Avatar } from "@/components/ui/AppWindow";
import {
  SOURCE_ICONS,
  AGENT_ICONS,
  CheckIcon,
  LayersIcon,
  SendIcon,
} from "@/components/ui/Icons";
import { context } from "@/lib/content";
import { clsx } from "@/lib/clsx";
import { easeOutSoft } from "@/lib/motion";

type SourceId = (typeof context.sources)[number]["id"];

/** Wraps the quoted fragment in a <mark> without dangerouslySetInnerHTML. */
function Marked({
  text,
  mark,
  on,
}: {
  text: string;
  mark: string;
  on: boolean;
}) {
  const at = text.indexOf(mark);
  if (at === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <mark
        className={clsx(
          "bg-transparent text-inherit transition-[background-color,box-shadow] duration-300",
          on && "text-highlight",
        )}
      >
        {mark}
      </mark>
      {text.slice(at + mark.length)}
    </>
  );
}

export function ContextDemo() {
  const [withContext, setWithContext] = useState(true);
  const [active, setActive] = useState<SourceId | null>(null);
  const reduced = useReducedMotion();

  const stageRef = useRef<HTMLDivElement>(null);
  const sourceRefs = useRef<Record<string, HTMLElement | null>>({});
  const lineRefs = useRef<Record<string, HTMLElement | null>>({});
  const [paths, setPaths] = useState<{ id: string; d: string }[]>([]);

  /** Re-measure the connector curves whenever anything can have moved. */
  const measure = useCallback(() => {
    const stage = stageRef.current;
    if (!stage || !withContext) {
      setPaths([]);
      return;
    }
    const box = stage.getBoundingClientRect();
    const next: { id: string; d: string }[] = [];

    for (const source of context.sources) {
      const from = sourceRefs.current[source.id];
      const to = lineRefs.current[source.id];
      if (!from || !to) continue;

      const a = from.getBoundingClientRect();
      const b = to.getBoundingClientRect();
      // Right edge of the source dot -> left edge of the email dot.
      const x1 = a.right - box.left;
      const y1 = a.top + a.height / 2 - box.top;
      const x2 = b.left - box.left;
      const y2 = b.top + b.height / 2 - box.top;
      if (x2 <= x1) continue; // columns have stacked; no curve to draw

      const mid = x1 + (x2 - x1) / 2;
      next.push({
        id: source.id,
        d: `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`,
      });
    }
    setPaths(next);
  }, [withContext]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(stage);
    window.addEventListener("resize", measure);
    // Web fonts land after first paint and shift every row.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <Section id="context" label="How ValenOS builds context" className="overflow-hidden">
      {/* ------------------------------------------------------- heading */}
      <Reveal className="max-w-[46rem]">
        <Eyebrow>{context.eyebrow}</Eyebrow>
        <h2 className="text-h1 text-ink">
          {context.headline[0]}
          <br className="hidden sm:block" />{" "}
          <span className="text-muted">{context.headline[1]}</span>
        </h2>
        <p className="mt-6 max-w-[52ch] text-lead text-body">{context.lead}</p>
      </Reveal>

      {/* -------------------------------------------------------- toggle */}
      <Reveal className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
        <div
          role="group"
          aria-label="Compare the email with and without context"
          className="inline-flex self-start rounded-[12px] border border-line bg-paper-warm p-1"
        >
          {[
            { on: false, label: "Without context" },
            { on: true, label: "With context" },
          ].map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => {
                setWithContext(opt.on);
                setActive(null);
              }}
              aria-pressed={withContext === opt.on}
              className={clsx(
                "relative min-h-11 cursor-pointer rounded-[9px] px-4 text-[0.875rem] font-medium transition-colors duration-200",
                withContext === opt.on ? "text-ink" : "text-muted hover:text-body",
              )}
            >
              {withContext === opt.on && (
                <motion.span
                  layoutId="ctx-toggle"
                  className="absolute inset-0 rounded-[9px] bg-card shadow-[0_1px_2px_rgba(20,17,14,.07)]"
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

      {/* ---------------------------------------------------------- stage */}
      <div
        ref={stageRef}
        className="relative mt-8 grid gap-6 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-20"
      >
        {/* Connector curves — desktop only, decorative */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        >
          {paths.map((p) => {
            const on = active === null || active === p.id;
            return (
              <motion.path
                key={p.id}
                d={p.d}
                fill="none"
                stroke="var(--color-gold)"
                strokeWidth={1.25}
                initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: on ? 0.85 : 0.16 }}
                transition={{ duration: 0.9, ease: easeOutSoft }}
              />
            );
          })}
        </svg>

        {/* ------------------------------------------------- source card */}
        <Reveal tall className="order-2 min-w-0 lg:order-1">
          <div className="rounded-[14px] border border-line bg-card shadow-card">
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3.5 sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-9 shrink-0 place-items-center rounded-[9px] bg-[#1f3a34] text-[0.7rem] font-medium text-white"
                >
                  WL
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[0.9375rem] font-medium text-ink">
                    {context.company.name}
                  </p>
                  <p className="truncate text-[0.8125rem] text-muted">
                    {context.company.person}
                  </p>
                </div>
              </div>
              <Chip tone={withContext ? "gold" : "neutral"} className="shrink-0">
                <LayersIcon className="size-3" />
                Context
              </Chip>
            </div>

            <ul className="divide-y divide-line">
              {context.sources.map((source) => {
                const Icon = SOURCE_ICONS[source.id as keyof typeof SOURCE_ICONS];
                const dim = withContext && active !== null && active !== source.id;
                return (
                  <li key={source.id}>
                    <button
                      type="button"
                      onMouseEnter={() => withContext && setActive(source.id)}
                      onMouseLeave={() => withContext && setActive(null)}
                      onFocus={() => withContext && setActive(source.id)}
                      onBlur={() => withContext && setActive(null)}
                      onClick={() =>
                        withContext &&
                        setActive((cur) => (cur === source.id ? null : source.id))
                      }
                      aria-pressed={active === source.id}
                      className={clsx(
                        "flex w-full cursor-pointer items-start gap-3 px-4 py-3.5 text-left transition-opacity duration-300 sm:px-5",
                        dim ? "opacity-40" : "opacity-100",
                        withContext && "hover:bg-paper-warm/50",
                      )}
                    >
                      <span
                        className={clsx(
                          "mt-0.5 grid size-8 shrink-0 place-items-center rounded-[9px] border transition-colors duration-300",
                          active === source.id
                            ? "border-gold/45 bg-gold-wash text-gold-deep"
                            : "border-line bg-paper-warm/70 text-muted",
                        )}
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                          <span className="text-[0.8125rem] font-medium text-ink">
                            {source.kind}
                          </span>
                          <span className="min-w-0 flex-1 truncate text-[0.8125rem] text-muted">
                            {source.title}
                          </span>
                          <span className="shrink-0 text-[0.75rem] text-faint">
                            {source.when}
                          </span>
                        </span>
                        <span className="mt-1 block text-[0.875rem] text-body sm:text-[0.9375rem]">
                          <Marked
                            text={source.text}
                            mark={source.mark}
                            on={withContext}
                          />
                        </span>
                      </span>
                      {/* Connector anchor */}
                      <span
                        ref={(el) => {
                          sourceRefs.current[source.id] = el;
                        }}
                        aria-hidden
                        className={clsx(
                          "mt-4 size-2 shrink-0 self-start rounded-full transition-colors duration-300",
                          withContext ? "bg-gold" : "bg-line-strong",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-line px-4 py-3.5 sm:px-5">
              <p className="text-[0.8125rem] text-muted">Read by every agent</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {(
                  [
                    ["lead", "Lead"],
                    ["followup", "Follow-up"],
                    ["pipeline", "CRM"],
                    ["assistant", "Assistant"],
                  ] as const
                ).map(([id, label]) => {
                  const Icon = AGENT_ICONS[id];
                  return (
                    <Chip key={id}>
                      <Icon className="size-3 text-gold-deep" />
                      {label}
                    </Chip>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* -------------------------------------------------- email card */}
        <Reveal tall className="order-1 min-w-0 lg:order-2">
          <div className="rounded-[14px] border border-line bg-card shadow-lift">
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3.5 sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-9 shrink-0 place-items-center rounded-[9px] bg-gold-wash text-gold-deep ring-1 ring-gold/25"
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
                {withContext ? "Sent" : "Writing"}
              </Chip>
            </div>

            <div className="space-y-2 border-b border-line px-4 py-3.5 text-[0.875rem] sm:px-5">
              <p className="flex items-center gap-3">
                <span className="w-14 shrink-0 text-muted">To</span>
                <Avatar initials="MW" className="size-6 text-[0.625rem]" tone="plain" />
                <span className="truncate text-ink">Marta Wilczyńska</span>
              </p>
              <p className="flex items-baseline gap-3">
                <span className="w-14 shrink-0 text-muted">Subject</span>
                <span className="truncate font-medium text-ink">{context.subject}</span>
              </p>
            </div>

            <div className="px-4 py-5 sm:px-7 sm:py-7">
              <p className="text-[0.9375rem] text-ink sm:text-base">Hi Marta,</p>

              <AnimatePresence mode="wait" initial={false}>
                {withContext ? (
                  <motion.div
                    key="with"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: easeOutSoft }}
                    className="mt-4 space-y-4"
                  >
                    {context.with.map((line) => {
                      const Icon =
                        SOURCE_ICONS[line.source as keyof typeof SOURCE_ICONS];
                      const dim = active !== null && active !== line.source;
                      return (
                        <button
                          key={line.source}
                          type="button"
                          onMouseEnter={() => setActive(line.source as SourceId)}
                          onMouseLeave={() => setActive(null)}
                          onFocus={() => setActive(line.source as SourceId)}
                          onBlur={() => setActive(null)}
                          onClick={() =>
                            setActive((cur) =>
                              cur === line.source ? null : (line.source as SourceId),
                            )
                          }
                          className={clsx(
                            "flex w-full cursor-pointer items-start gap-3 rounded-lg text-left transition-opacity duration-300",
                            dim ? "opacity-40" : "opacity-100",
                          )}
                        >
                          <span
                            ref={(el) => {
                              lineRefs.current[line.source] = el;
                            }}
                            className={clsx(
                              "mt-0.5 grid size-7 shrink-0 place-items-center rounded-[8px] border transition-colors duration-300",
                              active === line.source
                                ? "border-gold/45 bg-gold-wash text-gold-deep"
                                : "border-line bg-paper-warm/60 text-faint",
                            )}
                          >
                            <Icon className="size-3.5" />
                          </span>
                          <span className="text-[0.9375rem] leading-relaxed text-body sm:text-base">
                            <Marked text={line.text} mark={line.mark} on />
                          </span>
                        </button>
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
                    className="mt-4 space-y-4"
                  >
                    {context.without.map((line) => (
                      <p key={line} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-1 size-7 shrink-0 rounded-[8px] border border-dashed border-line-strong"
                        />
                        <span className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                          {line}
                        </span>
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="mt-5 text-[0.9375rem] text-ink sm:text-base">
                {context.signoff}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
