"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { scrollToSection } from "@/providers/LenisProvider";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-[#04141a] hover:brightness-110",
  secondary: "border border-border bg-surface/60 text-fg hover:border-accent/50 hover:text-accent",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  download?: boolean;
  newTab?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  download,
  newTab,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors",
    variants[variant],
    className,
  );

  const isHash = href?.startsWith("#");

  if (href) {
    const external = !isHash && (newTab || /^(https?:|mailto:)/.test(href));
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        style={{ x: sx, y: sy }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        onClick={(e) => {
          if (isHash) {
            e.preventDefault();
            scrollToSection(href);
          }
          onClick?.();
        }}
        {...(download ? { download: "" } : {})}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      className={classes}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
