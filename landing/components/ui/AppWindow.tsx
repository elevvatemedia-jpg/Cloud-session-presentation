import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

/**
 * The ValenOS browser chrome used for every product mockup on the page.
 * Purely presentational — it never claims to be a live app.
 */
export function AppWindow({
  children,
  title = "ValenOS",
  hint,
  className,
  bodyClassName,
}: {
  children: ReactNode;
  title?: string;
  hint?: string;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-[14px] border border-line bg-card shadow-float sm:rounded-[18px]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-paper-warm px-3.5 py-2.5 sm:px-5 sm:py-3">
        <div aria-hidden className="flex shrink-0 gap-1.5">
          <span className="size-2.5 rounded-full bg-[#d9d4c9]" />
          <span className="size-2.5 rounded-full bg-[#d9d4c9]" />
          <span className="size-2.5 rounded-full bg-[#d9d4c9]" />
        </div>
        <p className="flex-1 truncate text-center text-[0.8125rem] font-medium text-muted">
          {title}
        </p>
        <p className="hidden shrink-0 text-[0.8125rem] text-gold-text sm:block">
          {hint}
        </p>
      </div>
      <div className={clsx("bg-card", bodyClassName)}>{children}</div>
    </div>
  );
}

/** Rounded pill used for chips, counts and status markers throughout. */
export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "gold" | "green" | "dark";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.75rem] leading-none font-medium whitespace-nowrap",
        tone === "neutral" && "border-line bg-card text-body",
        tone === "gold" && "border-gold/35 bg-gold-wash text-[#6d5420]",
        tone === "green" &&
          "border-signal-green/25 bg-signal-green-wash text-signal-green",
        tone === "dark" && "border-white/12 bg-white/5 text-white/75",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Monogram avatar. Initials only — no stock photography anywhere on the page. */
export function Avatar({
  initials,
  className,
  tone = "gold",
}: {
  initials: string;
  className?: string;
  tone?: "gold" | "plain";
}) {
  return (
    <span
      aria-hidden
      className={clsx(
        "inline-flex shrink-0 items-center justify-center rounded-full text-[0.6875rem] font-medium tracking-wide",
        tone === "gold"
          ? "bg-gold-wash text-[#6d5420] ring-1 ring-gold/30"
          : "bg-paper-warm text-muted ring-1 ring-line",
        className ?? "size-8",
      )}
    >
      {initials}
    </span>
  );
}
