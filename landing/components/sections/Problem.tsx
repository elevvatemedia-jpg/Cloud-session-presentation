"use client";

import { motion } from "motion/react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { CoinIcon, ClockIcon, PersonIcon } from "@/components/ui/Icons";
import { problem } from "@/lib/content";
import { easeOutSoft, inView } from "@/lib/motion";

const ROW_ICONS = [CoinIcon, PersonIcon, ClockIcon];
const WIDEST = Math.max(...problem.rows.map((r) => r.amount));

export function Problem() {
  return (
    <Section tone="warm" label="What the work costs today">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-16">
        {/* ------------------------------------------------------- intro */}
        <Reveal>
          <Eyebrow>{problem.eyebrow}</Eyebrow>
          <h2 className="text-h1 text-ink">{problem.headline}</h2>
          <p className="mt-6 max-w-[42ch] text-lead text-body">{problem.lead}</p>
        </Reveal>

        {/* -------------------------------------------------- cost stack */}
        <div>
          <RevealGroup stagger={0.12} tall className="space-y-7">
            {problem.rows.map((row, i) => {
              const Icon = ROW_ICONS[i];
              return (
                <RevealItem key={row.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="flex items-center gap-2.5 text-h3 text-ink">
                      <Icon className="size-[1.1em] shrink-0 text-gold-deep" />
                      {row.label}
                    </p>
                    <p className="shrink-0 text-right font-medium tracking-[-0.02em] text-ink tabular-nums">
                      <span className="mr-1 text-[0.8em] text-muted">PLN</span>
                      <CountUp value={row.amount} duration={1.3} />
                    </p>
                  </div>

                  {/* scaleX, never width — width animation forces layout */}
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: row.amount / WIDEST }}
                      viewport={inView}
                      transition={{ duration: 1.1, ease: easeOutSoft, delay: 0.1 }}
                      style={{ transformOrigin: "left" }}
                      className="h-full rounded-full bg-gradient-to-r from-gold-deep to-gold"
                    />
                  </div>

                  <p className="mt-2.5 max-w-[48ch] text-sm text-muted">{row.note}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {/* ------------------------------------------------------ total */}
          <Reveal className="mt-10 border-t border-line-strong pt-8">
            <p className="text-sm tracking-[0.14em] text-muted uppercase">Every year</p>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-3 text-h1 text-ink">
              <span className="text-[0.42em] font-medium tracking-normal text-muted">
                PLN
              </span>
              <CountUp value={problem.total} duration={1.9} className="tabular-nums" />
            </p>
            <p className="mt-3 text-lead text-body">{problem.totalLabel}.</p>
            <p className="mt-6 max-w-[56ch] border-l-2 border-gold/40 pl-4 text-sm leading-relaxed text-muted">
              {problem.footnote}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
