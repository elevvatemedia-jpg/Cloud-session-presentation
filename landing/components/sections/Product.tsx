"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Section, Chapter } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip, Avatar } from "@/components/ui/AppWindow";
import {
  AGENT_ICONS,
  CalendarIcon,
  CheckIcon,
  MailIcon,
  NoteIcon,
  SignalIcon,
  SparkIcon,
} from "@/components/ui/Icons";
import { agents } from "@/lib/content";
import { clsx } from "@/lib/clsx";
import { easeOutSoft } from "@/lib/motion";

const DWELL = 7000;

export function Product() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: 0.3 });

  // Advance only while the section is on screen, not paused, and motion is wanted.
  const running = visible && !paused && !reduced;

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % agents.tabs.length),
      DWELL,
    );
    return () => clearTimeout(id);
  }, [running, index]);

  const current = agents.tabs[index];

  return (
    <Section id="product" tone="warm" label="What the agents do">
      <Reveal className="max-w-[46rem]">
        <Chapter {...agents.chapter} />
        <h2 className="text-h1 text-ink">{agents.headline}</h2>
        <p className="mt-6 max-w-[52ch] text-lead text-body">{agents.lead}</p>
      </Reveal>

      <div
        ref={ref}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:gap-14"
      >
        {/* ------------------------------------------------------- tabs */}
        <Reveal tall className="min-w-0">
          <div
            role="tablist"
            aria-label="ValenOS agents"
            className="no-scrollbar -mr-5 flex snap-x snap-mandatory gap-2 overflow-x-auto pr-5 sm:-mr-8 sm:pr-8 lg:mr-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:pr-0"
          >
            {agents.tabs.map((tab, i) => {
              const Icon = AGENT_ICONS[tab.id as keyof typeof AGENT_ICONS];
              const on = i === index;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={on}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setIndex(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                      e.preventDefault();
                      setIndex((i + 1) % agents.tabs.length);
                    }
                    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                      e.preventDefault();
                      setIndex((i - 1 + agents.tabs.length) % agents.tabs.length);
                    }
                  }}
                  className={clsx(
                    "relative min-h-11 shrink-0 cursor-pointer snap-start rounded-[12px] text-left transition-colors duration-300",
                    "px-4 py-3 lg:w-full lg:px-5 lg:py-4",
                    on
                      ? "bg-card shadow-card lg:shadow-lift"
                      : "bg-transparent hover:bg-card/60",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={clsx(
                        "grid size-8 shrink-0 place-items-center rounded-[9px] border transition-colors duration-300",
                        on
                          ? "border-gold/40 bg-gold-wash text-gold-deep"
                          : "border-line bg-card/70 text-muted",
                      )}
                    >
                      <Icon className="size-4" />
                    </span>
                    <span
                      className={clsx(
                        "text-[0.9375rem] font-medium whitespace-nowrap transition-colors duration-300 lg:whitespace-normal",
                        on ? "text-ink" : "text-muted",
                      )}
                    >
                      {tab.tab}
                    </span>
                  </span>

                  {/* Body + dwell bar only on the open one, desktop layout */}
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.span
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: easeOutSoft }}
                        className="hidden overflow-hidden lg:block"
                      >
                        <span className="block pt-3 pl-11 text-[0.9375rem] leading-relaxed text-body">
                          {tab.body}
                        </span>
                        <span className="mt-4 ml-11 block h-0.5 overflow-hidden rounded-full bg-line">
                          <motion.span
                            key={`${tab.id}-${index}-${running}`}
                            className="block h-full origin-left rounded-full bg-gold"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                              duration: running ? DWELL / 1000 : 0.4,
                              ease: running ? "linear" : easeOutSoft,
                            }}
                          />
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* On mobile the body sits under the rail instead of inside the pill */}
          <div className="mt-5 lg:hidden">
            <h3 className="text-h3 text-ink">{current.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
              {current.body}
            </p>
          </div>
        </Reveal>

        {/* ------------------------------------------------------ panel */}
        <Reveal tall className="min-w-0">
          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="relative min-h-[380px] rounded-[16px] border border-line bg-card p-3 shadow-lift sm:min-h-[440px] sm:p-5"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.34, ease: easeOutSoft }}
              >
                {current.id === "lead" && <LeadPanel />}
                {current.id === "followup" && <FollowUpPanel />}
                {current.id === "pipeline" && <PipelinePanel />}
                {current.id === "assistant" && <AssistantPanel />}
              </motion.div>
            </AnimatePresence>

            <p className="mt-4 flex items-start gap-2 border-t border-line pt-4 text-[0.8125rem] text-muted">
              <SparkIcon className="mt-px size-3.5 shrink-0 text-gold-deep" />
              {current.proof}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------ panel: lead */

const FOUND = [
  { name: "Skowronek Software", why: "Hiring 3 business developers", score: 92, mark: "SS" },
  { name: "Iglica Consulting", why: "Opened a second office in Wrocław", score: 87, mark: "IC" },
  { name: "Grupa Nadbrzeże", why: "Shaped like Dębowa, who bought in May", score: 81, mark: "GN" },
  { name: "Klinika Rozwoju", why: "Posted a sales lead role this week", score: 74, mark: "KR" },
];

function LeadPanel() {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 px-1 pb-3">
        <p className="text-[0.9375rem] font-medium text-ink">Companies to work</p>
        <Chip tone="gold">4 new today</Chip>
      </div>
      <ul className="divide-y divide-line overflow-hidden rounded-[12px] border border-line">
        {FOUND.map((row, i) => (
          <motion.li
            key={row.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + i * 0.09, duration: 0.45, ease: easeOutSoft }}
            className="flex items-center gap-3 bg-card px-3 py-3 sm:px-4"
          >
            <Avatar initials={row.mark} tone="plain" className="size-8" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.875rem] font-medium text-ink">{row.name}</p>
              <p className="truncate text-[0.8125rem] text-muted">{row.why}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[0.8125rem] font-medium text-ink tabular-nums">
                {row.score}
              </p>
              <p className="text-[0.6875rem] tracking-wide text-faint uppercase">fit</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------- panel: followup */

const THREAD = [
  { Icon: MailIcon, label: "First email sent", when: "Mon 08:12", tone: "done" },
  { Icon: CalendarIcon, label: "Follow-up queued for Thursday", when: "Mon 08:12", tone: "done" },
  { Icon: NoteIcon, label: "Marta replied", when: "Tue 07:42", tone: "live" },
  { Icon: CheckIcon, label: "Sequence stopped. Nobody chased her again.", when: "Tue 07:42", tone: "stop" },
];

function FollowUpPanel() {
  return (
    <div className="px-1">
      <div className="flex items-center justify-between gap-3 pb-4">
        <p className="text-[0.9375rem] font-medium text-ink">Wydmy Logistyka</p>
        <Chip tone="green">
          <CheckIcon className="size-3" />
          Replied
        </Chip>
      </div>
      <ol className="relative space-y-5 pl-1">
        <span aria-hidden className="absolute top-2 bottom-2 left-[15px] w-px bg-line" />
        {THREAD.map((step, i) => (
          <motion.li
            key={step.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.45, ease: easeOutSoft }}
            className="relative flex items-start gap-3.5"
          >
            <span
              className={clsx(
                "relative z-10 grid size-8 shrink-0 place-items-center rounded-full border",
                step.tone === "stop"
                  ? "border-signal-green/30 bg-signal-green-wash text-signal-green"
                  : step.tone === "live"
                    ? "border-gold/40 bg-gold-wash text-gold-deep"
                    : "border-line bg-card text-muted",
              )}
            >
              <step.Icon className="size-4" />
            </span>
            <span className="min-w-0 flex-1 pt-1">
              <span className="block text-[0.9375rem] text-ink">{step.label}</span>
              <span className="block text-[0.8125rem] text-faint">{step.when}</span>
            </span>
          </motion.li>
        ))}
      </ol>
      <p className="mt-5 rounded-[10px] border border-gold/25 bg-gold-wash/50 px-3.5 py-3 text-[0.875rem] text-[#6d5420]">
        The agent stops the moment a human replies. No sequence ever talks over you.
      </p>
    </div>
  );
}

/* -------------------------------------------------------- panel: pipeline */

const COLUMNS = [
  { name: "New", dot: "bg-faint", count: 2 },
  { name: "Contacted", dot: "bg-signal-blue", count: 3 },
  { name: "Replied", dot: "bg-signal-amber", count: 1 },
  { name: "Meeting", dot: "bg-signal-green", count: 2 },
];

const CARDS = [
  { col: 0, name: "Skowronek Software", value: "PLN 42,000", owner: "Bartek Sowiński" },
  { col: 1, name: "Grupa Nadbrzeże", value: "PLN 54,000", owner: "Bartek Sowiński" },
  { col: 3, name: "Klinika Rozwoju", value: "PLN 30,000", owner: "Ola Zawadzka" },
];

function PipelinePanel() {
  const reduced = useReducedMotion();
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    if (reduced) {
      setMoved(true);
      return;
    }
    const id = setTimeout(() => setMoved(true), 1400);
    return () => clearTimeout(id);
  }, [reduced]);

  return (
    <div className="px-1">
      <div className="no-scrollbar -mx-2 grid grid-flow-col gap-2.5 overflow-x-auto px-2 pb-1 [grid-auto-columns:minmax(150px,1fr)] sm:grid-flow-row sm:grid-cols-4 sm:overflow-visible">
        {COLUMNS.map((col, ci) => (
          <div key={col.name} className="rounded-[12px] border border-line bg-paper-warm/50 p-2">
            <p className="flex items-center gap-2 px-1 pb-2 text-[0.8125rem] font-medium text-ink">
              <span aria-hidden className={clsx("size-1.5 rounded-full", col.dot)} />
              {col.name}
              <span className="ml-auto text-[0.75rem] text-faint tabular-nums">
                {col.count}
              </span>
            </p>

            <div className="space-y-2">
              {/* The deal that moves: Contacted -> Replied when a reply lands */}
              {((moved && ci === 2) || (!moved && ci === 1)) && (
                <motion.div
                  layoutId="moving-deal"
                  transition={{ duration: 0.7, ease: easeOutSoft }}
                  className="rounded-[10px] border border-gold/40 bg-card p-2.5 shadow-lift ring-1 ring-gold/15"
                >
                  <p className="truncate text-[0.8125rem] font-medium text-ink">
                    Wydmy Logistyka
                  </p>
                  <p className="mt-1 text-[0.75rem] text-muted tabular-nums">PLN 96,000</p>
                  <p className="mt-1 truncate text-[0.75rem] text-muted">Kamil Rogalski</p>
                </motion.div>
              )}

              {CARDS.filter((c) => c.col === ci).map((card) => (
                <div
                  key={card.name}
                  className="rounded-[10px] border border-line bg-card p-2.5"
                >
                  <p className="truncate text-[0.8125rem] font-medium text-ink">
                    {card.name}
                  </p>
                  <p className="mt-1 text-[0.75rem] text-muted tabular-nums">{card.value}</p>
                  <p className="mt-1 truncate text-[0.75rem] text-muted">{card.owner}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.p
        key={String(moved)}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easeOutSoft }}
        className="mt-4 flex items-center gap-2 text-[0.875rem] text-body"
        aria-live="polite"
      >
        <span
          aria-hidden
          className={clsx(
            "size-1.5 rounded-full",
            moved ? "bg-signal-amber" : "bg-signal-blue",
          )}
        />
        {moved
          ? "Marta replied at 07:42. The deal moved itself."
          : "First email sent to Marta."}
      </motion.p>
    </div>
  );
}

/* ------------------------------------------------------- panel: assistant */

const STEPS = [
  { text: "Offer to fill ", bold: "two roles in Gdańsk", rest: " first, then the other two.", src: "Discovery call", Icon: CalendarIcon },
  { text: "Send procurement ", bold: "two references", rest: " this week.", src: "Kamil's note", Icon: NoteIcon },
  { text: "Have ", bold: "all four account managers", rest: " hired by March.", src: "Marta's email", Icon: MailIcon },
];

function AssistantPanel() {
  return (
    <div className="px-1">
      <div className="flex items-center justify-between gap-3 pb-4">
        <p className="flex items-center gap-2 text-[0.9375rem] font-medium text-ink">
          <SparkIcon className="size-4 text-gold-deep" />
          Deal assistant
        </p>
        <Chip>Wydmy Logistyka</Chip>
      </div>

      <div className="flex justify-end">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeOutSoft }}
          className="rounded-[10px] bg-ink px-3.5 py-2 text-[0.875rem] text-paper"
        >
          How do we close this deal?
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4, ease: easeOutSoft }}
        className="mt-4 flex flex-wrap items-center gap-1.5"
      >
        <span className="text-[0.8125rem] text-muted">Read 4 sources</span>
        {[MailIcon, CalendarIcon, NoteIcon, SignalIcon].map((Icon, i) => (
          <Chip key={i}>
            <Icon className="size-3 text-gold-deep" />
            {["Email", "Meeting", "Note", "Signal"][i]}
          </Chip>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mt-4 text-[0.9375rem] text-ink"
      >
        Budget is approved, so it comes down to timing and trust:
      </motion.p>

      <ol className="mt-3 space-y-3">
        {STEPS.map((step, i) => (
          <motion.li
            key={step.bold}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.13, duration: 0.42, ease: easeOutSoft }}
            className="flex items-start gap-3"
          >
            <span className="grid size-5 shrink-0 place-items-center rounded-full border border-line text-[0.6875rem] text-muted tabular-nums">
              {i + 1}
            </span>
            <span className="text-[0.9375rem] leading-relaxed text-body">
              {step.text}
              <strong className="font-medium text-ink">{step.bold}</strong>
              {step.rest}{" "}
              <Chip className="ml-0.5 align-middle">
                <step.Icon className="size-3 text-gold-deep" />
                {step.src}
              </Chip>
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
