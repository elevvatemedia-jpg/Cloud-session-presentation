"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { SOURCE_ICONS, AGENT_ICONS, LayersIcon, PlusIcon } from "@/components/ui/Icons";
import { workflow } from "@/lib/content";
import { clsx } from "@/lib/clsx";
import { easeOutSoft, inView } from "@/lib/motion";

const ICONS = { ...SOURCE_ICONS, ...AGENT_ICONS };

/**
 * The agents working off one shared context.
 *
 * Every step branches from the same spine, which is the point: they are not a
 * fixed set of parts, they are work done against one context. The list ends
 * open because it keeps growing — an earlier version drew four agents and read
 * as though four were all there were.
 */
export function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: 0.2 });
  const reduced = useReducedMotion();
  const [lit, setLit] = useState(-1);

  useEffect(() => {
    if (!visible || reduced) {
      setLit(-1);
      return;
    }
    const id = setInterval(
      () => setLit((i) => (i + 1) % (workflow.steps.length + 1)),
      1100,
    );
    return () => clearInterval(id);
  }, [visible, reduced]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[16px] bg-ink-dark p-5 sm:p-8 lg:p-10"
    >
      <div aria-hidden className="warm-glow pointer-events-none absolute inset-0" />
      <div aria-hidden className="dot-grid-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[44rem]">
        {/* The context the whole column hangs off */}
        <div className="flex items-start gap-3.5 rounded-[12px] border border-gold/30 bg-gold/[0.08] p-4 sm:items-center sm:p-5">
          <span className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-gold/40 bg-gold/15 text-gold">
            <LayersIcon className="size-4.5" />
          </span>
          <div className="min-w-0">
            <p className="text-[0.9375rem] font-medium text-white">
              {workflow.railTitle}
            </p>
            <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-white/60">
              {workflow.railBody}
            </p>
          </div>
        </div>

        <ol className="relative mt-1 pt-4">
          {/* The spine. Every step taps into it, which is the whole argument. */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={inView}
            transition={{ duration: 1.1, ease: easeOutSoft }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 bottom-9 left-[18px] w-px bg-gradient-to-b from-gold/70 via-gold/40 to-gold/10 sm:left-[22px]"
          />

          {workflow.steps.map((step, i) => {
            const Icon = ICONS[step.id as keyof typeof ICONS];
            const on = lit === i;
            return (
              <motion.li
                key={step.act}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={inView}
                transition={{ duration: 0.5, delay: i * 0.08, ease: easeOutSoft }}
                className="relative flex items-start gap-3.5 py-2.5 sm:gap-4"
              >
                <span
                  className={clsx(
                    "relative z-10 grid size-9 shrink-0 place-items-center rounded-[10px] border transition-colors duration-500 sm:size-11",
                    on
                      ? "border-gold/60 bg-gold/20 text-gold"
                      : "border-white/[0.14] bg-ink-dark text-white/50",
                  )}
                >
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1 pt-1">
                  <span
                    className={clsx(
                      "block text-[0.9375rem] font-medium transition-colors duration-500",
                      on ? "text-white" : "text-white/80",
                    )}
                  >
                    {step.act}
                  </span>
                  <span className="mt-0.5 block text-[0.8125rem] leading-relaxed text-white/55">
                    {step.detail}
                  </span>
                </span>
              </motion.li>
            );
          })}

          {/* Open end: the list is not the product, it is a sample of it */}
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{
              duration: 0.5,
              delay: workflow.steps.length * 0.08,
              ease: easeOutSoft,
            }}
            className="relative flex items-center gap-3.5 pt-2.5 sm:gap-4"
          >
            <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-[10px] border border-dashed border-white/20 bg-ink-dark text-white/40 sm:size-11">
              <PlusIcon className="size-4" />
            </span>
            <span className="text-[0.8125rem] text-white/50 italic">
              {workflow.open}
            </span>
          </motion.li>
        </ol>
      </div>
    </div>
  );
}
