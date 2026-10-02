"use client";

import { motion, useScroll, useSpring, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { navLinks } from "@/lib/content";
import { clsx } from "@/lib/clsx";

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const [lifted, setLifted] = useState(false);

  // Spring the progress bar so it glides rather than jitters on trackpads.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    setLifted((prev) => (prev === next ? prev : next));
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={clsx(
          "transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-[cubic-bezier(.22,1,.36,1)]",
          lifted
            ? "bg-paper/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-14">
          <div className="flex h-16 items-center gap-4 sm:h-[4.5rem] sm:gap-10">
            <a
              href="#top"
              className="flex min-h-11 shrink-0 items-center gap-3 sm:gap-4"
              aria-label="ValenOS, by Valen and Partners — back to top"
            >
<Wordmark height={21} alt="" className="sm:!h-[23px]" />
              <span aria-hidden className="h-4 w-px bg-line-strong" />
              <span className="text-[0.95rem] font-medium tracking-[-0.015em] text-ink sm:text-base">
                ValenOS
              </span>
            </a>

            <nav
              aria-label="Page sections"
              className="hidden flex-1 items-center gap-8 md:flex"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative py-1 text-[0.9375rem] text-body transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
                  />
                </a>
              ))}
            </nav>

            <Button href="#apply" variant="dark" className="ml-auto h-10 px-4 sm:h-11 sm:px-5">
              Apply
            </Button>
          </div>
        </div>

        {/* Reading progress. Decorative — the page is navigable without it. */}
        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className="h-px origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-soft"
        />
      </div>
    </header>
  );
}
