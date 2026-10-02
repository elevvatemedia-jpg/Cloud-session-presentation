"use client";

import { motion } from "motion/react";
import { Section, Chapter } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ambition } from "@/lib/content";
import { clsx } from "@/lib/clsx";
import { easeOutSoft, inView } from "@/lib/motion";

const STATE_STYLE = {
  live: {
    dot: "bg-signal-green",
    label: "border-signal-green/30 bg-signal-green-wash text-signal-green",
    text: "Running now",
  },
  building: {
    dot: "bg-gold",
    label: "border-gold/35 bg-gold-wash text-[#6d5420]",
    text: "Being built",
  },
  horizon: {
    dot: "bg-faint",
    label: "border-line bg-card text-muted",
    text: "Where it is going",
  },
} as const;

/**
 * Chapter 06. The part organic traffic actually buys into: not what the
 * product does this week, but what it is for. Three horizons, honestly
 * labelled, so nothing here reads as a shipped feature.
 */
export function Ambition() {
  return (
    <Section id="ambition" label="Where ValenOS is going">
      <Reveal className="max-w-[52rem]">
        <Chapter {...ambition.chapter} />
        <h2 className="text-h1 text-ink">
          {ambition.headline[0]}
          <br className="hidden sm:block" />{" "}
          <span className="text-muted">{ambition.headline[1]}</span>
        </h2>
      </Reveal>

      <div className="relative mt-9 sm:mt-12">
        {/* One line running the length of the three horizons */}
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={inView}
          transition={{ duration: 1.3, ease: easeOutSoft }}
          style={{ transformOrigin: "top" }}
          className="absolute top-3 bottom-3 left-[7px] w-px bg-gradient-to-b from-gold/60 via-gold/35 to-transparent sm:left-[9px]"
        />

        <ol className="space-y-9 sm:space-y-11">
          {ambition.horizons.map((h, i) => {
            const style = STATE_STYLE[h.state];
            return (
              <motion.li
                key={h.when}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.6, delay: i * 0.16, ease: easeOutSoft }}
                className="relative pl-9 sm:pl-14"
              >
                <span
                  aria-hidden
                  className={clsx(
                    "absolute top-[7px] left-0 size-[15px] rounded-full border-2 border-paper sm:top-[9px] sm:size-[19px]",
                    style.dot,
                  )}
                />
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[0.75rem] font-medium tracking-[0.16em] text-gold-text uppercase">
                    {h.when}
                  </p>
                  <span
                    className={clsx(
                      "rounded-full border px-2.5 py-1 text-[0.6875rem] leading-none font-medium",
                      style.label,
                    )}
                  >
                    {style.text}
                  </span>
                </div>
                <h3 className="mt-2.5 max-w-[26ch] text-h3 text-ink">{h.title}</h3>
                <p className="mt-2.5 max-w-[56ch] text-[1rem] leading-relaxed text-muted">
                  {h.body}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>

      <Reveal className="mt-10 border-t border-line pt-8 sm:mt-14">
        <p className="max-w-[40ch] text-h3 text-ink">{ambition.close}</p>
      </Reveal>
    </Section>
  );
}
