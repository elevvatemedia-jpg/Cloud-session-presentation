"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Section, Chapter } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AGENT_ICONS } from "@/components/ui/Icons";
import { agents, acts } from "@/lib/content";
import { clsx } from "@/lib/clsx";
import { easeOutSoft } from "@/lib/motion";

/**
 * Chapter 04. One product moment shown at size, then the rest said briefly.
 *
 * The previous two attempts both failed by being busy: four named tabs read as
 * though four agents were the product, and the dark spine told instead of
 * showing. This shows the single most convincing thing the product does and
 * trusts three short lines for the rest.
 */
export function Acts() {
  return (
    <Section id="product" label="What the agents do">
      <Reveal className="max-w-[46rem]">
        <Chapter {...agents.chapter} />
        <h2 className="text-h1 text-ink">{agents.headline}</h2>
        <p className="mt-5 max-w-[54ch] text-lead text-body">{agents.lead}</p>
      </Reveal>

      {/* The board, at size. Everything else on this page is words about it. */}
      <Reveal tall className="mt-10 sm:mt-14">
        <div className="overflow-hidden rounded-[18px] border border-line bg-card shadow-lift">
          <div className="p-4 sm:p-7">
            <Pipeline />
          </div>
          <div className="border-t border-line bg-paper-warm/40 px-5 py-5 sm:px-7">
            <p className="text-h3 text-ink">{acts.featured.title}</p>
            <p className="mt-1.5 max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted">
              {acts.featured.body}
            </p>
          </div>
        </div>
      </Reveal>

      {/* The rest, briefly. No cards, no borders — just three columns of text. */}
      <RevealGroup
        tall
        stagger={0.08}
        className="mt-12 grid gap-8 border-t border-line pt-10 sm:mt-16 sm:grid-cols-3 sm:gap-10"
      >
        {acts.cards.map((card) => {
          const Icon = AGENT_ICONS[card.id as keyof typeof AGENT_ICONS];
          return (
            <RevealItem key={card.title} className="min-w-0">
              <Icon className="size-5 text-gold-deep" />
              <h3 className="mt-3.5 text-h3 text-ink">{card.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                {card.body}
              </p>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal className="mt-9">
        <p className="text-[0.9375rem] text-faint italic">{acts.more}</p>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------- the board */

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

function Pipeline() {
  const reduced = useReducedMotion();
  const [moved, setMoved] = useState(false);
  const rail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) {
      setMoved(true);
      return;
    }
    const id = setTimeout(() => setMoved(true), 1600);
    return () => clearTimeout(id);
  }, [reduced]);

  // The board only scrolls on a phone, where Replied sits off-screen. Bring it
  // into view as the deal lands there, or the caption describes something the
  // viewer cannot see.
  useEffect(() => {
    const el = rail.current;
    if (!moved || !el || el.scrollWidth <= el.clientWidth) return;
    const target = el.querySelector<HTMLElement>("[data-col='2']");
    if (!target) return;
    el.scrollTo({
      left: target.offsetLeft - 12,
      behavior: reduced ? "auto" : "smooth",
    });
  }, [moved, reduced]);

  return (
    <div>
      <div
        ref={rail}
        className="no-scrollbar -mx-1 grid grid-flow-col gap-2.5 overflow-x-auto px-1 pb-1 [grid-auto-columns:minmax(154px,1fr)] sm:grid-flow-row sm:grid-cols-4 sm:overflow-visible">
        {COLUMNS.map((col, ci) => (
          <div
            key={col.name}
            data-col={ci}
            className="rounded-[12px] bg-paper-warm/55 p-2.5"
          >
            <p className="flex items-center gap-2 px-1 pb-2.5 text-[0.8125rem] font-medium text-ink">
              <span aria-hidden className={clsx("size-1.5 rounded-full", col.dot)} />
              {col.name}
              <span className="ml-auto text-[0.75rem] text-faint tabular-nums">
                {col.count}
              </span>
            </p>

            <div className="space-y-2">
              {/* The deal that moves when the reply lands */}
              {((moved && ci === 2) || (!moved && ci === 1)) && (
                <motion.div
                  layoutId="acts-deal"
                  transition={{ duration: 0.75, ease: easeOutSoft }}
                  className="rounded-[10px] border border-gold/45 bg-card p-2.5 shadow-lift"
                >
                  <p className="truncate text-[0.8125rem] font-medium text-ink">
                    Wydmy Logistyka
                  </p>
                  <p className="mt-1 text-[0.75rem] text-muted tabular-nums">PLN 96,000</p>
                  <p className="mt-1 truncate text-[0.75rem] text-muted">Kamil Rogalski</p>
                </motion.div>
              )}

              {CARDS.filter((c) => c.col === ci).map((card) => (
                <div key={card.name} className="rounded-[10px] border border-line bg-card p-2.5">
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        aria-live="polite"
        className="mt-4 flex items-center gap-2 px-1 text-[0.875rem] text-muted"
      >
        <span
          aria-hidden
          className={clsx(
            "size-1.5 rounded-full",
            moved ? "bg-signal-amber" : "bg-signal-blue",
          )}
        />
        {moved ? "Marta replied at 07:42. The deal moved itself." : "First email sent to Marta."}
      </motion.p>
    </div>
  );
}
