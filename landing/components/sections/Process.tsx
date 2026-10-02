"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Chip, Avatar } from "@/components/ui/AppWindow";
import { CheckIcon } from "@/components/ui/Icons";
import { process } from "@/lib/content";
import { easeOutSoft, inView } from "@/lib/motion";

export function Process() {
  return (
    <Section tone="warm" label="What happens after you apply">
      <Reveal>
        <h2 className="text-h2 text-ink">{process.headline}</h2>
      </Reveal>

      <div className="relative mt-10 sm:mt-14">
        {/* The rail: horizontal on desktop, vertical on a phone. Drawn, not faded. */}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={inView}
          transition={{ duration: 1.1, ease: easeOutSoft, delay: 0.15 }}
          style={{ transformOrigin: "left" }}
          className="absolute top-[13px] right-0 left-0 hidden h-px bg-gold/45 sm:block"
        />
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={inView}
          transition={{ duration: 1.1, ease: easeOutSoft, delay: 0.15 }}
          style={{ transformOrigin: "top" }}
          className="absolute top-2 bottom-8 left-[13px] w-px bg-gold/45 sm:hidden"
        />

        <RevealGroup
          tall
          stagger={0.13}
          className="grid gap-9 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4"
        >
          {process.steps.map((step, i) => (
            <RevealItem key={step.title} className="relative pl-10 sm:pl-0">
              <span className="absolute top-0 left-0 grid size-[27px] place-items-center rounded-full border border-gold/55 bg-paper-warm text-[0.8125rem] font-medium text-ink tabular-nums sm:relative sm:mb-6">
                {i + 1}
              </span>

              <h3 className="text-h3 text-ink sm:mt-0">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                {step.body}
              </p>

              <div className="mt-4">
                {step.tone === "green" && (
                  <Chip tone="green">
                    <CheckIcon className="size-3" />
                    {step.chip}
                  </Chip>
                )}
                {step.tone === "avatars" && (
                  <Chip>
                    <span aria-hidden className="flex -space-x-1.5">
                      <Avatar initials="M" className="size-4 text-[0.5rem]" />
                      <Avatar initials="B" className="size-4 text-[0.5rem]" tone="plain" />
                    </span>
                    {step.chip}
                  </Chip>
                )}
                {step.tone === "dot" && (
                  <Chip>
                    <span aria-hidden className="size-1.5 rounded-full bg-signal-green" />
                    {step.chip}
                  </Chip>
                )}
                {step.tone === "gold" && <Chip tone="gold">{step.chip}</Chip>}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
