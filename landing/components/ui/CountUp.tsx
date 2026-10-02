"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Counts to `value` the first time it scrolls into view.
 * Under reduced motion it renders the final number immediately — the figure
 * is the point, the animation is not.
 */
export function CountUp({
  value,
  duration = 1.5,
  className,
  locale = "pl-PL",
}: {
  value: number;
  duration?: number;
  className?: string;
  locale?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduced) {
      setShown(value);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      // Matches --ease-out-soft closely enough for a number ticking up.
      const eased = 1 - Math.pow(1 - t, 4);
      setShown(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reduced, value, duration]);

  return (
    <span ref={ref} className={className}>
      {/* The accessible name is always the real figure, never a partial count. */}
      <span aria-hidden>{shown.toLocaleString(locale)}</span>
      <span className="sr-only">{value.toLocaleString(locale)}</span>
    </span>
  );
}
