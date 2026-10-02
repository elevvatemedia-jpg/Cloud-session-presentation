"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { inView, inViewTall, reveal, revealGroup } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Lower the trigger threshold for blocks taller than a phone screen. */
  tall?: boolean;
  delay?: number;
};

/** A single element that fades up once, the first time it reaches the viewport. */
export function Reveal({ tall, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={tall ? inViewTall : inView}
      variants={reveal}
      transition={delay ? { delay } : undefined}
      {...props}
    />
  );
}

type GroupProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delay?: number;
  tall?: boolean;
};

/**
 * Wraps a list whose children should arrive one after another.
 * Children must be <RevealItem> (or any motion element with the same variants).
 */
export function RevealGroup({
  stagger = 0.07,
  delay = 0,
  tall,
  ...props
}: GroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={tall ? inViewTall : inView}
      variants={revealGroup(stagger, delay)}
      {...props}
    />
  );
}

export function RevealItem(props: HTMLMotionProps<"div">) {
  return <motion.div variants={reveal} {...props} />;
}
