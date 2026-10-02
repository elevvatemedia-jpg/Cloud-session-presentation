import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

/**
 * The page frame. Every section sits inside the same pair of vertical
 * hairlines, which is what gives the site its ruled, editorial feel.
 */
export function Section({
  id,
  children,
  className,
  tone = "paper",
  flush = false,
  label,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "warm" | "dark";
  /** Remove the vertical padding — for sections that manage their own. */
  flush?: boolean;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={clsx(
        "relative",
        tone === "warm" && "bg-paper-warm",
        tone === "dark" && "bg-ink-dark text-white/80",
        className,
      )}
    >
      <div
        className={clsx(
          "mx-auto w-full max-w-[1320px] border-x",
          tone === "dark" ? "border-line-dark" : "border-line",
        )}
      >
        <div
          className={clsx(
            "px-5 sm:px-8 lg:px-14",
            !flush && "py-20 sm:py-24 lg:py-32",
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

/**
 * The chapter marker that opens each section. The number is not decoration:
 * the page is read in order and each section is a step in one argument.
 */
export function Chapter({
  n,
  name,
  tone = "light",
}: {
  n: string;
  name: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={clsx(
        "mb-5 flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.16em] uppercase",
        tone === "dark" ? "text-gold-soft" : "text-gold-text",
      )}
    >
      <span className="font-serif text-[1.05rem] leading-none tracking-normal tabular-nums">
        {n}
      </span>
      <span
        aria-hidden
        className={clsx(
          "h-px w-6",
          tone === "dark" ? "bg-gold-soft/50" : "bg-gold/60",
        )}
      />
      {name}
    </p>
  );
}
