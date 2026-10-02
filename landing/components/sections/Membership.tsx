"use client";

import { motion } from "motion/react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { membership } from "@/lib/content";
import { founding, remaining } from "@/lib/config";
import { clsx } from "@/lib/clsx";
import { easeOutSoft, inView } from "@/lib/motion";

export function Membership() {
  return (
    <Section id="founding" tone="dark" label="What founding members get" className="overflow-hidden">
      <div aria-hidden className="warm-glow pointer-events-none absolute inset-0" />
      <div aria-hidden className="dot-grid-dark pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,.85fr)] lg:items-end lg:gap-16">
          <Reveal>
            <Eyebrow tone="dark">{membership.eyebrow}</Eyebrow>
            <h2 className="text-h1 text-white">{membership.headline}</h2>
            <p className="mt-6 max-w-[42ch] text-lead text-white/65">{membership.lead}</p>
          </Reveal>

          {/* ------------------------------------------- places remaining */}
          <Reveal>
            <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6">
              <p className="text-[0.8125rem] tracking-[0.14em] text-white/60 uppercase">
                Places remaining
              </p>
              <p className="mt-2 flex items-baseline gap-2 text-h1 text-white">
                {remaining}
                <span className="text-base font-medium tracking-normal text-white/60">
                  of {founding.total}
                </span>
              </p>

              <div
                className="mt-5 flex flex-wrap gap-1.5"
                role="img"
                aria-label={`${remaining} of ${founding.total} founding places remaining`}
              >
                {Array.from({ length: founding.total }).map((_, i) => {
                  const open = i >= founding.claimed;
                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.4 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={inView}
                      transition={{
                        delay: 0.2 + i * 0.045,
                        duration: 0.4,
                        ease: easeOutSoft,
                      }}
                      className={clsx(
                        "h-7 flex-1 rounded-[5px] border",
                        open
                          ? "border-gold/60 bg-gold/30"
                          : "border-white/10 bg-white/[0.03]",
                      )}
                    />
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------------ benefits */}
        <RevealGroup tall stagger={0.09} className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-white/10 bg-white/10 sm:mt-16 sm:grid-cols-2">
          {membership.benefits.map((b, i) => (
            <RevealItem
              key={b.title}
              className="group bg-ink-dark/90 p-6 transition-colors duration-300 hover:bg-white/[0.045] sm:p-8"
            >
              <p className="font-serif text-[0.9rem] text-gold/70 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-h3 text-white">{b.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-white/60">
                {b.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* ------------------------------------------------- what we ask */}
        <Reveal className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-10 sm:mt-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-h3 text-white">{membership.askTitle}</h3>
            <ul className="mt-4 space-y-2.5">
              {membership.asks.map((ask) => (
                <li key={ask} className="flex items-start gap-3 text-[0.9375rem] text-white/65">
                  <CheckIcon className="mt-1 size-4 shrink-0 text-gold" />
                  {ask}
                </li>
              ))}
            </ul>
          </div>
          <Button href="#apply" variant="gold" size="lg" className="shrink-0 self-start lg:self-auto">
            Apply as a founding member
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
