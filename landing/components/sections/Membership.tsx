"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section, Chapter } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { membership } from "@/lib/content";

export function Membership() {
  const reduced = useReducedMotion();

  return (
    <Section
      id="founding"
      tone="dark"
      label="What founding members get"
      className="overflow-hidden"
    >
      <div aria-hidden className="warm-glow pointer-events-none absolute inset-0" />
      <div aria-hidden className="dot-grid-dark pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,.85fr)] lg:items-end lg:gap-16">
          <Reveal className="min-w-0">
            <Chapter {...membership.chapter} tone="dark" />
            <h2 className="text-h1 text-white">{membership.headline}</h2>
            <p className="mt-6 max-w-[42ch] text-lead text-white/65">
              {membership.lead}
            </p>
          </Reveal>

          {/* ------------------------------------------------ status card.
              Deliberately no count: the page says the number is capped and
              never says what it is, so nothing here can age into a lie. */}
          <Reveal className="min-w-0">
            <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6">
              <p className="flex items-center gap-2.5 text-[0.8125rem] tracking-[0.14em] text-white/60 uppercase">
                <span aria-hidden className="relative flex size-2">
                  <span className="absolute inset-0 rounded-full bg-gold" />
                  {!reduced && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gold"
                      animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                </span>
                {membership.statusLabel}
              </p>

              <p className="mt-3 text-h2 text-white">{membership.statusTitle}</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/60">
                {membership.statusNote}
              </p>
              <p className="mt-5 border-t border-white/10 pt-4 text-[0.875rem] text-white/60">
                {membership.statusFoot}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------------ benefits */}
        <RevealGroup
          tall
          stagger={0.09}
          className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-white/10 bg-white/10 sm:mt-16 sm:grid-cols-2"
        >
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
                <li
                  key={ask}
                  className="flex items-start gap-3 text-[0.9375rem] text-white/65"
                >
                  <CheckIcon className="mt-1 size-4 shrink-0 text-gold" />
                  {ask}
                </li>
              ))}
            </ul>
          </div>
          <Button
            href="#apply"
            variant="gold"
            size="lg"
            className="shrink-0 self-start lg:self-auto"
          >
            Apply as a founding member
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
