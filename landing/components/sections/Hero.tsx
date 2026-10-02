"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { AppWindow, Avatar, Chip } from "@/components/ui/AppWindow";
import { Wordmark } from "@/components/ui/Wordmark";
import {
  ArrowDownIcon,
  BoardIcon,
  SendIcon,
  SparkIcon,
  TargetIcon,
} from "@/components/ui/Icons";
import { hero } from "@/lib/content";
import { easeOutSoft } from "@/lib/motion";

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // The window starts tilted away and flattens as it enters. Scroll-linked, so
  // it tracks the finger on mobile instead of running on its own clock.
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start 0.95", "start 0.25"],
  });
  // A phone-width window projects much wider under the same angle, so the
  // tilt is dialled back below `sm` instead of being clipped off.
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const rotateX = useTransform(scrollYProgress, [0, 1], [compact ? 5 : 11, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [compact ? 0.96 : 0.93, 1]);
  const lift = useTransform(scrollYProgress, [0, 1], [compact ? 28 : 48, 0]);

  const words = hero.headline.join(" ").split(" ");

  return (
    <section
      id="top"
      className="relative overflow-x-clip pt-16 sm:pt-[4.5rem]"
    >
      {/* Warm light falling from the top of the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(200,169,110,.17),transparent_70%)]"
      />
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper"
      />

      <div className="relative mx-auto w-full max-w-[1320px] border-x border-line">
        <div className="px-5 pt-14 pb-0 sm:px-8 sm:pt-20 lg:px-14 lg:pt-28">
          {/* ---------------------------------------------------- eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutSoft }}
            className="flex justify-center"
          >
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/80 px-4 py-2 text-[0.8125rem] font-medium text-body shadow-[0_1px_2px_rgba(20,17,14,.04)] backdrop-blur">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-gold" />
                {!reduced && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gold"
                    animate={{ scale: [1, 2.4], opacity: [0.55, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
              </span>
              {hero.eyebrow}
            </p>
          </motion.div>

          {/* --------------------------------------------------- headline */}
          <h1 className="mx-auto mt-8 max-w-[20ch] text-center text-display text-ink sm:mt-10">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="inline-block will-change-transform"
                initial={reduced ? false : { opacity: 0, y: "0.4em", filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.75,
                  delay: 0.12 + i * 0.07,
                  ease: easeOutSoft,
                }}
              >
                {word}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </h1>

          {/* ------------------------------------------------------- lead */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: easeOutSoft }}
            className="mx-auto mt-6 max-w-[54ch] text-center sm:mt-8"
          >
            <p className="text-lead text-body">{hero.lead}</p>
            <p className="mt-3 text-[0.9375rem] text-faint sm:text-base">
              {hero.support}
            </p>
          </motion.div>

          {/* -------------------------------------------------------- CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.54, ease: easeOutSoft }}
            className="mt-9 flex flex-col items-stretch gap-3 sm:mt-11 sm:flex-row sm:items-center sm:justify-center"
          >
            <Button href="#apply" variant="dark" size="lg">
              {hero.primary}
            </Button>
            <Button
              href="#context"
              variant="light"
              size="lg"
              trailing={
                <ArrowDownIcon className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              }
            >
              {hero.secondary}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="mt-6 text-center text-sm text-faint"
          >
            {hero.trust}
          </motion.p>
        </div>

        {/* ------------------------------------------------- app mockup */}
        <div
          ref={stageRef}
          className="px-5 pt-14 sm:px-8 sm:pt-20 lg:px-14"
          style={{ perspective: compact ? "2200px" : "1600px" }}
        >
          <motion.div
            style={
              reduced
                ? undefined
                : { rotateX, scale, y: lift, transformOrigin: "50% 0%" }
            }
            className="will-change-transform"
          >
            <HomeMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ mock */

const NAV = [
  { label: "Home", active: true },
  { label: "Tasks", count: 3 },
  { label: "Notifications", count: 4 },
];
const RECORDS = ["Companies", "People", "Deals"];
const LISTS = ["Leads", "Workflows", "Reports"];

const OVERNIGHT = [
  {
    Icon: TargetIcon,
    plain: "Found ",
    bold: "6 companies",
    rest: " that fit, 2 of them hiring salespeople.",
  },
  {
    Icon: SendIcon,
    plain: "Sent 9 first emails. ",
    bold: "Marta Wilczyńska",
    rest: " replied at 07:42.",
  },
  {
    Icon: BoardIcon,
    plain: "Moved ",
    bold: "Wydmy Logistyka",
    rest: " to Replied and booked Dębowa Kancelaria.",
  },
];

function HomeMock() {
  return (
    <AppWindow hint="A view of the app" className="mx-auto max-w-[1060px]">
      <div className="flex min-h-[340px] sm:min-h-[460px]">
        {/* Sidebar — desktop only; on a phone the app is the content */}
        <aside className="hidden w-[208px] shrink-0 flex-col border-r border-line bg-paper-warm/60 p-3 lg:flex">
          <div className="flex items-center gap-2.5 px-2 py-2.5">
<Wordmark height={14} alt="" />
            <span className="text-[0.8125rem] font-medium text-ink">ValenOS</span>
          </div>
          <div className="mt-2 space-y-0.5">
            {NAV.map((item) => (
              <div
                key={item.label}
                className={
                  item.active
                    ? "flex items-center justify-between rounded-lg bg-card px-2.5 py-2 text-[0.8125rem] font-medium text-ink shadow-[0_1px_2px_rgba(20,17,14,.05)]"
                    : "flex items-center justify-between rounded-lg px-2.5 py-2 text-[0.8125rem] text-muted"
                }
              >
                {item.label}
                {item.count ? (
                  <span className="text-[0.6875rem] text-gold-text">{item.count}</span>
                ) : null}
              </div>
            ))}
          </div>
          {[
            { head: "Records", items: RECORDS },
            { head: "Lists", items: LISTS },
          ].map((group) => (
            <div key={group.head} className="mt-5">
              <p className="px-2.5 pb-1.5 text-[0.6875rem] tracking-[0.1em] text-faint uppercase">
                {group.head}
              </p>
              {group.items.map((item) => (
                <p key={item} className="rounded-lg px-2.5 py-1.5 text-[0.8125rem] text-muted">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </aside>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 sm:px-5">
            <p className="text-[0.8125rem] font-medium text-ink">Home</p>
            <div className="hidden flex-1 items-center justify-center sm:flex">
              <div className="flex w-full max-w-[280px] items-center justify-between rounded-lg border border-line bg-paper-warm/60 px-3 py-1.5 text-[0.75rem] text-faint">
                Search
                <span className="text-[0.6875rem]">⌘K</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="hidden text-[0.75rem] text-gold-text sm:inline">
                Assistant
              </span>
              <Avatar initials="KR" className="size-6 text-[0.625rem]" />
            </div>
          </div>

          <div className="flex-1 px-4 py-6 sm:px-8 sm:py-8">
            <h2 className="text-center text-[1.15rem] font-medium tracking-[-0.02em] text-ink sm:text-[1.5rem]">
              Good morning, Kamil
            </h2>
            <p className="mt-1.5 text-center text-[0.8125rem] text-muted sm:text-sm">
              3 replies and 1 meeting came in overnight.
            </p>

            <motion.div
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } } }}
              className="mx-auto mt-5 max-w-[560px] rounded-[12px] border border-line bg-paper-warm/40 p-3.5 sm:mt-7 sm:p-5"
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 8 }, shown: { opacity: 1, y: 0 } }}
                className="flex justify-end"
              >
                <span className="rounded-[10px] bg-ink px-3 py-2 text-[0.8125rem] text-paper">
                  What did the agents do overnight?
                </span>
              </motion.div>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 8 }, shown: { opacity: 1, y: 0 } }}
                className="mt-3.5 flex items-start gap-2.5 text-[0.8125rem] text-body sm:text-sm"
              >
                <SparkIcon className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                A busy night. Here is what moved:
              </motion.p>

              <div className="mt-2.5 space-y-2 pl-0 sm:pl-6">
                {OVERNIGHT.map(({ Icon, plain, bold, rest }) => (
                  <motion.p
                    key={bold}
                    variants={{ hidden: { opacity: 0, y: 8 }, shown: { opacity: 1, y: 0 } }}
                    className="flex items-start gap-2.5 text-[0.8125rem] text-body sm:text-sm"
                  >
                    <Icon className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                    <span>
                      {plain}
                      <strong className="font-medium text-ink">{bold}</strong>
                      {rest}
                    </span>
                  </motion.p>
                ))}
              </div>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 8 }, shown: { opacity: 1, y: 0 } }}
                className="mt-3.5 pl-0 text-[0.8125rem] font-medium text-ink sm:pl-6 sm:text-sm"
              >
                Want me to prepare your call with Marta?
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 8 }, shown: { opacity: 1, y: 0 } }}
                className="mt-4 flex flex-wrap gap-1.5"
              >
                <Chip>How do we close Wydmy Logistyka?</Chip>
                <Chip className="hidden sm:inline-flex">Which deals need attention?</Chip>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}
