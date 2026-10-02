"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronIcon } from "@/components/ui/Icons";
import { faq } from "@/lib/content";
import { clsx } from "@/lib/clsx";
import { easeOutSoft } from "@/lib/motion";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <Section label="Questions people ask before applying">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,.62fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <h2 className="text-h1 text-ink">{faq.headline}</h2>
          <p className="mt-5 max-w-[34ch] text-lead text-muted">
            If yours is not here, ask it in the form. We answer every one.
          </p>
        </Reveal>

        <Reveal tall>
          <ul className="border-t border-line">
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`${uid}-panel-${i}`}
                      id={`${uid}-trigger-${i}`}
                      className="group flex w-full cursor-pointer items-start justify-between gap-5 py-5 text-left"
                    >
                      <span
                        className={clsx(
                          "text-h3 transition-colors duration-200",
                          isOpen ? "text-ink" : "text-body group-hover:text-ink",
                        )}
                      >
                        {item.q}
                      </span>
                      <motion.span
                        aria-hidden
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: easeOutSoft }}
                        className={clsx(
                          "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-colors duration-200",
                          isOpen
                            ? "border-gold/45 bg-gold-wash text-gold-deep"
                            : "border-line text-muted group-hover:border-line-strong",
                        )}
                      >
                        <ChevronIcon className="size-3.5" />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="panel"
                        id={`${uid}-panel-${i}`}
                        role="region"
                        aria-labelledby={`${uid}-trigger-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.36, ease: easeOutSoft }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[58ch] pr-10 pb-6 text-[1rem] leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
