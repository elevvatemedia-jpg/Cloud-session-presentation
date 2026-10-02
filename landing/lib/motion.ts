import type { Transition, Variants } from "motion/react";

/**
 * One easing family across the whole page, three speeds.
 * Matches --ease-out-soft in globals.css.
 */
export const easeOutSoft = [0.22, 1, 0.36, 1] as const;

export const fast: Transition = { duration: 0.28, ease: easeOutSoft };
export const base: Transition = { duration: 0.5, ease: easeOutSoft };
export const slow: Transition = { duration: 0.8, ease: easeOutSoft };

/**
 * The page-wide scroll reveal. Deliberately small: 14px of travel reads as a
 * fade with weight, not a slide. Anything larger starts to feel like a carousel.
 */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  shown: { opacity: 1, y: 0, transition: base },
};

/** Parent of a reveal group. Children inherit `hidden` / `shown`. */
export const revealGroup = (stagger = 0.07, delay = 0): Variants => ({
  hidden: {},
  shown: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/** Standard viewport trigger: fires once, a little before the element lands. */
export const inView = { once: true, amount: 0.25, margin: "0px 0px -80px 0px" } as const;

/** For tall blocks that would otherwise never reach 25% on a phone. */
export const inViewTall = { once: true, amount: 0.08, margin: "0px 0px -60px 0px" } as const;
