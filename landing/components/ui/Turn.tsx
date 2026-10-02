"use client";

import { motion } from "motion/react";
import { clsx } from "@/lib/clsx";
import { easeOutSoft, inView } from "@/lib/motion";

/**
 * A single sentence on its own between two chapters. It is what makes the page
 * read as one argument rather than a stack of sections, so it is deliberately
 * rare — two on the whole page, at the two real pivots.
 */
export function Turn({
  children,
  tone = "paper",
}: {
  children: string;
  tone?: "paper" | "warm" | "dark";
}) {
  const words = children.split(" ");

  return (
    <div
      className={clsx(
        "relative",
        tone === "warm" && "bg-paper-warm",
        tone === "dark" && "bg-ink-dark",
      )}
    >
      <div
        className={clsx(
          "mx-auto w-full max-w-[1320px] border-x",
          tone === "dark" ? "border-line-dark" : "border-line",
        )}
      >
        <p
          className={clsx(
            "mx-auto max-w-[22ch] px-5 py-14 text-center text-h1 sm:px-8 sm:py-20 lg:px-14 lg:py-24",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block"
              initial={{ opacity: 0, y: "0.3em" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOutSoft }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
}
