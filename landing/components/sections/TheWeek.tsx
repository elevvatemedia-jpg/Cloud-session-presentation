"use client";

import { motion } from "motion/react";
import { Section, Chapter } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { week } from "@/lib/content";
import { easeOutSoft, inView } from "@/lib/motion";

/**
 * Chapter 02. The problem stated as the buyer's own week rather than as a
 * cost model — the arithmetic belongs in the deck, not in front of someone
 * who arrived here from Instagram.
 */
export function TheWeek() {
  return (
    <Section tone="warm" label="The week your team actually has">
      <Reveal className="max-w-[46rem]">
        <Chapter {...week.chapter} />
        <h2 className="text-h1 text-ink">{week.headline}</h2>
        <p className="mt-6 text-lead text-muted">{week.lead}</p>
      </Reveal>

      <ol className="relative mt-12 sm:mt-16">
        {/* The week as a line being drawn, left on mobile, top on desktop */}
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={inView}
          transition={{ duration: 1.2, ease: easeOutSoft }}
          style={{ transformOrigin: "top" }}
          className="absolute top-2 bottom-2 left-[5px] w-px bg-gold/40 lg:hidden"
        />

        <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
          {week.days.map((d, i) => (
            <motion.li
              key={d.day}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.6, delay: i * 0.14, ease: easeOutSoft }}
              className="relative pl-7 lg:pl-0"
            >
              <span
                aria-hidden
                className="absolute top-[7px] left-0 size-[11px] rounded-full border border-gold/60 bg-paper-warm lg:relative lg:top-0 lg:mb-5 lg:block"
              />
              {/* Desktop keeps its own rule per column, so the row reads across */}
              <span
                aria-hidden
                className="absolute top-[12px] right-0 left-[11px] hidden h-px bg-gold/25 lg:block"
              />
              <p className="text-[0.75rem] font-medium tracking-[0.16em] text-gold-text uppercase">
                {d.day}
              </p>
              <p className="mt-2.5 max-w-[32ch] text-h3 leading-snug text-ink">
                {d.text}
              </p>
            </motion.li>
          ))}
        </div>
      </ol>
    </Section>
  );
}
