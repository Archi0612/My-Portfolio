"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Cursor ambience that lives *with* the native arrow — never replaces it.
 *
 * Small colored bubbles spawn at the pointer and drift up while fading out.
 * Each bubble has a tinted body, a crisp accent rim, and a tiny white
 * highlight so it reads cleanly on the dark background.
 *
 * Disabled on touch devices and when the user prefers reduced motion.
 */
type Bubble = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  dx: number;
  dy: number;
  duration: number;
};

const PALETTE = ["#22d3ee", "#7c5cff", "#34d399", "#f59e0b", "#d946ef"];
const SPAWN_THROTTLE_MS = 32;
const MAX_BUBBLES = 28;

export function CursorTrail() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const lastSpawn = useRef(0);
  const idCounter = useRef(0);

  const removeBubble = useCallback((id: number) => {
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  }, []);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastSpawn.current < SPAWN_THROTTLE_MS) return;
      lastSpawn.current = now;

      const size = 8 + Math.random() * 10;
      const bubble: Bubble = {
        id: idCounter.current++,
        x: e.clientX,
        y: e.clientY,
        size,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        dx: (Math.random() - 0.5) * 70,
        dy: -45 - Math.random() * 80,
        duration: 1.1 + Math.random() * 0.6,
      };

      setBubbles((prev) => {
        const next = prev.length >= MAX_BUBBLES ? prev.slice(prev.length - MAX_BUBBLES + 1) : prev;
        return [...next, bubble];
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <AnimatePresence>
        {bubbles.map((b) => (
          <motion.span
            key={b.id}
            initial={{ x: b.x, y: b.y, opacity: 0, scale: 0.5 }}
            animate={{
              x: b.x + b.dx,
              y: b.y + b.dy,
              opacity: [0, 1, 0.95, 0],
              scale: [0.5, 1, 1.05, 1.2],
            }}
            transition={{
              duration: b.duration,
              ease: [0.16, 1, 0.3, 1],
              times: [0, 0.18, 0.7, 1],
            }}
            onAnimationComplete={() => removeBubble(b.id)}
            className="absolute rounded-full"
            style={{
              width: b.size,
              height: b.size,
              marginLeft: -b.size / 2,
              marginTop: -b.size / 2,
              background: `radial-gradient(circle at 32% 30%, #ffffffcc 0%, ${b.color} 38%, ${b.color}cc 75%, ${b.color}00 100%)`,
              border: `1px solid ${b.color}`,
              boxShadow: `0 0 ${b.size * 1.4}px ${b.color}aa, inset 0 0 ${b.size * 0.4}px ${b.color}66`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
