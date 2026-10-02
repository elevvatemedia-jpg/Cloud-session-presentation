"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Section, Chapter } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SOURCE_ICONS, AGENT_ICONS, LayersIcon } from "@/components/ui/Icons";
import { idea } from "@/lib/content";
import { clsx } from "@/lib/clsx";
import { easeOutSoft, inView } from "@/lib/motion";

/**
 * Chapter 03. The one thing nobody understands from words alone: everything
 * the company knows lands in one layer, and every agent reads that same layer.
 * Drawn as a convergence so the mechanism is the picture, not an illustration
 * next to it.
 */
export function TheIdea() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: 0.3 });
  const reduced = useReducedMotion();
  const [lit, setLit] = useState(-1);

  // One source lights at a time, so the eye follows the flow into the layer.
  useEffect(() => {
    if (!visible || reduced) {
      setLit(-1);
      return;
    }
    const id = setInterval(
      () => setLit((i) => (i + 1) % idea.sources.length),
      900,
    );
    return () => clearInterval(id);
  }, [visible, reduced]);

  return (
    <Section id="idea" tone="dark" label="How ValenOS works" className="overflow-hidden">
      <div aria-hidden className="warm-glow pointer-events-none absolute inset-0" />
      <div aria-hidden className="dot-grid-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative">
        <Reveal className="max-w-[46rem]">
          <Chapter {...idea.chapter} tone="dark" />
          <h2 className="text-h1 text-white">
            {idea.headline[0]}
            <br className="hidden sm:block" />{" "}
            <span className="text-white/55">{idea.headline[1]}</span>
          </h2>
          <p className="mt-6 max-w-[54ch] text-lead text-white/65">{idea.lead}</p>
        </Reveal>

        {/* ------------------------------------------------------ diagram */}
        <div ref={ref} className="mt-12 sm:mt-16">
          {/* What it reads */}
          <Reveal tall>
            <p className="mb-3.5 text-center text-[0.75rem] font-medium tracking-[0.16em] text-white/45 uppercase">
              What it reads
            </p>
            <div className="mx-auto grid max-w-[46rem] grid-cols-2 gap-2 sm:grid-cols-4">
              {idea.sources.map((src, i) => {
                const Icon = SOURCE_ICONS[src.id as keyof typeof SOURCE_ICONS];
                const on = lit === i;
                return (
                  <div
                    key={src.label}
                    className={clsx(
                      "flex min-w-0 items-center gap-2.5 rounded-[10px] border px-3 py-2.5 transition-colors duration-500",
                      on
                        ? "border-gold/60 bg-gold/20"
                        : "border-white/[0.14] bg-white/[0.06]",
                    )}
                  >
                    <Icon
                      className={clsx(
                        "size-4 shrink-0 transition-colors duration-500",
                        on ? "text-gold" : "text-white/55",
                      )}
                    />
                    <span
                      className={clsx(
                        "truncate text-[0.8125rem] transition-colors duration-500",
                        on ? "text-white" : "text-white/75",
                      )}
                    >
                      {src.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Flow direction="in" lanes={[25, 75]} className="sm:hidden" />
          <Flow direction="in" lanes={[12.5, 37.5, 62.5, 87.5]} className="hidden sm:block" />

          {/* The layer */}
          <Reveal>
            <div className="relative mx-auto max-w-[34rem] overflow-hidden rounded-[14px] border border-gold/35 bg-gold/[0.07] p-6 text-center backdrop-blur-sm sm:p-8">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_0%,rgba(200,169,110,.18),transparent_70%)]"
              />
              <span className="relative mx-auto grid size-11 place-items-center rounded-[11px] border border-gold/45 bg-gold/15 text-gold">
                <LayersIcon className="size-5" />
              </span>
              <h3 className="relative mt-4 text-h3 text-white">{idea.layerTitle}</h3>
              <p className="relative mx-auto mt-2.5 max-w-[42ch] text-[0.9375rem] leading-relaxed text-white/65">
                {idea.layerBody}
              </p>
            </div>
          </Reveal>

          <Flow direction="out" lanes={[25, 75]} className="sm:hidden" />
          <Flow direction="out" lanes={[12.5, 37.5, 62.5, 87.5]} className="hidden sm:block" />

          {/* Who reads it */}
          <Reveal tall>
            <div className="mx-auto grid max-w-[46rem] grid-cols-2 gap-2 sm:grid-cols-4">
              {idea.agentLabels.map((a) => {
                const Icon = AGENT_ICONS[a.id as keyof typeof AGENT_ICONS];
                return (
                  <div
                    key={a.label}
                    className="flex min-w-0 items-center justify-center gap-2.5 rounded-[10px] border border-white/[0.14] bg-white/[0.06] px-3 py-2.5"
                  >
                    <Icon className="size-4 shrink-0 text-gold/80" />
                    <span className="truncate text-[0.8125rem] text-white/80">
                      {a.label} agent
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="mt-12 text-center sm:mt-14">
            <p className="mx-auto max-w-[32ch] text-h3 text-white">{idea.close}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/**
 * The converging (or fanning) connector between two rows of the diagram.
 * preserveAspectRatio="none" lets one viewBox stretch to any width, so the
 * lines stay attached to the rows at every breakpoint without measuring.
 */
function Flow({
  direction,
  lanes,
  className,
}: {
  direction: "in" | "out";
  /** Percentage positions of the chip centres this connector joins. */
  lanes: number[];
  className?: string;
}) {
  const paths = lanes.map((x) =>
    direction === "in"
      ? `M ${x} 0 C ${x} 25, 50 25, 50 50`
      : `M 50 0 C 50 25, ${x} 25, ${x} 50`,
  );

  return (
    <div aria-hidden className={clsx("py-1.5 sm:py-2", className)}>
      <svg
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        className="mx-auto h-16 w-full max-w-[46rem] sm:h-24"
      >
        {paths.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth={1}
            strokeOpacity={0.6}
            vectorEffect="non-scaling-stroke"
            strokeDasharray="3 5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={inView}
            transition={{ duration: 0.9, delay: i * 0.07, ease: easeOutSoft }}
            style={{ animation: `flow-dash 1.6s linear ${i * 0.18}s infinite` }}
          />
        ))}
      </svg>
    </div>
  );
}
