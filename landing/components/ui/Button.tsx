"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { clsx } from "@/lib/clsx";

type Variant = "dark" | "light" | "gold";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  dark: "bg-ink text-paper shadow-[0_1px_2px_rgba(20,17,14,.18),0_10px_24px_-10px_rgba(20,17,14,.5)] hover:bg-[#241f19]",
  light:
    "bg-card text-ink border border-line-strong hover:border-ink/25 hover:bg-white",
  gold: "gold-fill text-[#2a2008] shadow-[0_1px_2px_rgba(20,17,14,.14),0_12px_28px_-10px_rgba(160,126,67,.6)] hover:brightness-[1.04]",
};

const SIZES: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  trailing?: ReactNode;
};

export function Button({
  children,
  href,
  variant = "dark",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
  trailing,
}: Props) {
  const cls = clsx(
    "group relative inline-flex select-none items-center justify-center gap-2 rounded-[11px] font-medium",
    "transition-[background-color,border-color,filter,box-shadow] duration-200 ease-[cubic-bezier(.22,1,.36,1)]",
    "disabled:pointer-events-none disabled:opacity-55",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  // Press/lift is on a wrapper so it never fights the colour transition above.
  const motionProps = {
    whileHover: disabled ? undefined : { y: -2 },
    whileTap: disabled ? undefined : { y: 0, scale: 0.985 },
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (href) {
    return (
      <motion.a href={href} className={cls} {...motionProps}>
        {children}
        {trailing}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
    >
      {children}
      {trailing}
    </motion.button>
  );
}
