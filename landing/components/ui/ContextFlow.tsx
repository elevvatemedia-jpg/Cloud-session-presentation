"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { SOURCE_ICONS, AGENT_ICONS, LayersIcon, ArrowDownIcon } from "@/components/ui/Icons";
import { idea } from "@/lib/content";
import { clsx } from "@/lib/clsx";
import { easeOutSoft, inView } from "@/lib/motion";

/**
 * Everything the company knows converging into one layer, and the agents
 * reading that same layer.
 *
 * The agent row names four because those are the four worth naming, not
 * because there are four — the line underneath says so, and chapter 04 shows
 * the work as an open-ended sequence.
 */
export function ContextFlow() {
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
    // A dark rounded card dropped on a light page is a rectangle with four
    // corners to notice. This runs the full width of the frame with no radius,
    // and the page fades into it and back out, so there is no edge.
    <div className="relative -mx-5 overflow-hidden bg-ink-dark px-5 py-16 sm:-mx-8 sm:px-8 sm:py-24 lg:-mx-14 lg:px-14">
      <div aria-hidden className="warm-glow pointer-events-none absolute inset-0" />
      <div aria-hidden className="dot-grid-dark pointer-events-none absolute inset-0 opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-paper-warm to-transparent sm:h-32"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper-warm to-transparent sm:h-32"
      />
      <div className="relative mx-auto max-w-[44rem]">
        <div ref={ref}>
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

          <Hop />
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

          <Hop />
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
            <p className="mt-4 text-center text-[0.8125rem] text-white/50 italic">
              {idea.more}
            </p>
          </Reveal>

        </div>
      </div>
    </div>
  );
}

/** Phone-sized stand-in for the connector curves: one arrow, no smudge. */
function Hop() {
  return (
    <div aria-hidden className="flex justify-center py-5 sm:hidden">
      <ArrowDownIcon className="size-4 text-gold/55" />
    </div>
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
