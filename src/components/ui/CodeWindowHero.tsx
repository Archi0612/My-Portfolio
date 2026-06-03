"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Animated "engineer's workspace" panel that replaces the profile photo.
 *
 * — A mock editor that types out a TypeScript snippet line-by-line.
 * — A side terminal that streams a few build/deploy lines on a loop.
 * — Floating tech glyphs orbiting the panel for personality.
 */
const codeLines: { tab: number; tokens: { t: string; c?: string }[] }[] = [
  {
    tab: 0,
    tokens: [
      { t: "const", c: "text-[#7c5cff]" },
      { t: " engineer", c: "text-[#22d3ee]" },
      { t: " = ", c: "text-muted" },
      { t: "{", c: "text-fg" },
    ],
  },
  {
    tab: 1,
    tokens: [
      { t: "name: ", c: "text-fg" },
      { t: "'Archi Saksena'", c: "text-[#34d399]" },
      { t: ",", c: "text-muted" },
    ],
  },
  {
    tab: 1,
    tokens: [
      { t: "role: ", c: "text-fg" },
      { t: "'Full-Stack Engineer'", c: "text-[#34d399]" },
      { t: ",", c: "text-muted" },
    ],
  },
  {
    tab: 1,
    tokens: [
      { t: "stack: ", c: "text-fg" },
      { t: "[", c: "text-fg" },
      { t: "'Next.js'", c: "text-[#34d399]" },
      { t: ", ", c: "text-muted" },
      { t: "'NestJS'", c: "text-[#34d399]" },
      { t: ", ", c: "text-muted" },
      { t: "'Kafka'", c: "text-[#34d399]" },
      { t: "],", c: "text-fg" },
    ],
  },
  {
    tab: 1,
    tokens: [
      { t: "shipping: ", c: "text-fg" },
      { t: "true", c: "text-[#f59e0b]" },
      { t: ",", c: "text-muted" },
    ],
  },
  {
    tab: 0,
    tokens: [{ t: "};", c: "text-fg" }],
  },
];

const terminalLines = [
  { t: "$ pnpm build", c: "text-fg" },
  { t: "  ✓ compiled in 1.4s", c: "text-[#34d399]" },
  { t: "$ deploy --env=prod", c: "text-fg" },
  { t: "  → uploading bundles…", c: "text-muted" },
  { t: "  ✓ live · 4 regions", c: "text-[#34d399]" },
  { t: "$ tail -f logs", c: "text-fg" },
  { t: "  [voice] booking ok", c: "text-[#22d3ee]" },
  { t: "  [kafka] leads.created", c: "text-[#7c5cff]" },
  { t: "  [stripe] sub.renewed", c: "text-[#34d399]" },
];

export function CodeWindowHero() {
  const reduce = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(reduce ? codeLines.length : 0);
  const [terminalCursor, setTerminalCursor] = useState(reduce ? terminalLines.length : 0);

  useEffect(() => {
    if (reduce) return;
    let cancelled = false;

    const typeNext = (i: number) => {
      if (cancelled) return;
      setVisibleLines(i + 1);
      if (i + 1 < codeLines.length) {
        const delay = 420 + Math.random() * 220;
        setTimeout(() => typeNext(i + 1), delay);
      } else {
        // pause then restart
        setTimeout(() => {
          if (cancelled) return;
          setVisibleLines(0);
          setTimeout(() => typeNext(0), 600);
        }, 3500);
      }
    };
    const cancelType = setTimeout(() => typeNext(0), 400);

    const termTimer = setInterval(() => {
      setTerminalCursor((c) => (c + 1) % (terminalLines.length + 1));
    }, 900);

    return () => {
      cancelled = true;
      clearTimeout(cancelType);
      clearInterval(termTimer);
    };
  }, [reduce]);

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* glow */}
      <div className="absolute -inset-4 rounded-[2rem] bg-accent/15 blur-2xl" aria-hidden />

      {/* main editor card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass relative overflow-hidden rounded-2xl border border-border shadow-2xl"
      >
        {/* title bar */}
        <div className="flex items-center justify-between border-b border-border/60 bg-elevated/40 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
          </div>
          <span className="font-mono text-[11px] text-muted">~/portfolio/engineer.ts</span>
          <span className="font-mono text-[11px] text-accent">TS</span>
        </div>

        {/* editor body */}
        <div className="relative grid grid-cols-[28px_1fr] gap-0 px-3 py-4 font-mono text-[13px] leading-relaxed">
          <div className="select-none text-right text-muted/50">
            {codeLines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div>
            {codeLines.map((line, i) => {
              const visible = i < visibleLines;
              const isLastVisible = i === visibleLines - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: visible ? 1 : 0.05 }}
                  transition={{ duration: 0.25 }}
                  className="pl-2"
                  style={{ paddingInlineStart: line.tab * 14 + 8 }}
                >
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={tok.c}>
                      {tok.t}
                    </span>
                  ))}
                  {isLastVisible && !reduce ? (
                    <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-accent" style={{ animation: "blink-caret 1s steps(1) infinite" }} />
                  ) : null}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* terminal panel */}
        <div className="border-t border-border/60 bg-base/60 px-4 py-3 font-mono text-[11.5px] leading-relaxed">
          <div className="mb-1 flex items-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34d399]" />
            <span>zsh · build</span>
          </div>
          <div className="grid">
            {terminalLines.slice(0, terminalCursor).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
                className={line.c}
              >
                {line.t}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating tech glyphs */}
      <FloatingChip className="-left-6 top-12" delay={0.1}>
        <span className="text-[#22d3ee]">{`{...}`}</span>
      </FloatingChip>
      <FloatingChip className="-right-4 top-24" delay={0.25}>
        <span className="text-[#7c5cff]">⌘ K</span>
      </FloatingChip>
      <FloatingChip className="-right-8 bottom-16" delay={0.4}>
        <span className="text-[#34d399]">{`</>`}</span>
      </FloatingChip>
      <FloatingChip className="-left-8 bottom-20" delay={0.55}>
        <span className="text-[#f59e0b]">npm run ship</span>
      </FloatingChip>
    </div>
  );
}

function FloatingChip({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`pointer-events-none absolute font-mono text-xs ${className ?? ""}`}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
        className="glass rounded-full border border-border/80 bg-surface/80 px-3 py-1.5 backdrop-blur-md"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
