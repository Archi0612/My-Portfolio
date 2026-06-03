"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * Cursor ambience that lives *with* the native arrow — never replaces it.
 *
 * — A soft cyan halo lags slightly behind the pointer.
 * — Tiny colored bubbles spawn as the mouse moves and drift up while fading out,
 *   like steam off a hot mug. Capped at 30 live bubbles so it stays cheap.
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
const SPAWN_THROTTLE_MS = 28;
const MAX_BUBBLES = 30;

export function CursorTrail() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const haloX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.6 });
  const haloY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.6 });

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
      x.set(e.clientX);
      y.set(e.clientY);

      const now = performance.now();
      if (now - lastSpawn.current < SPAWN_THROTTLE_MS) return;
      lastSpawn.current = now;

      const size = 5 + Math.random() * 10;
      const bubble: Bubble = {
        id: idCounter.current++,
        x: e.clientX,
        y: e.clientY,
        size,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        dx: (Math.random() - 0.5) * 80,
        dy: -40 - Math.random() * 90,
        duration: 1 + Math.random() * 0.7,
      };

      setBubbles((prev) => {
        const next = prev.length >= MAX_BUBBLES ? prev.slice(prev.length - MAX_BUBBLES + 1) : prev;
        return [...next, bubble];
      });
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as Element | null;
      const interactive = !!t?.closest(
        "a, button, [role='button'], input, textarea, label, select",
      );
      setHovering(interactive);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Soft halo trailing the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[60] mix-blend-screen"
        style={{ x: haloX, y: haloY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.span
          className="block rounded-full bg-accent/25 blur-2xl"
          animate={{
            width: hovering ? 140 : 90,
            height: hovering ? 140 : 90,
            opacity: hovering ? 0.55 : 0.35,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
        />
      </motion.div>

      {/* Bubble stream */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[59] overflow-hidden mix-blend-screen"
      >
        <AnimatePresence>
          {bubbles.map((b) => (
            <motion.span
              key={b.id}
              initial={{
                x: b.x,
                y: b.y,
                opacity: 0.9,
                scale: 0.4,
              }}
              animate={{
                x: b.x + b.dx,
                y: b.y + b.dy,
                opacity: 0,
                scale: 1.25,
              }}
              transition={{ duration: b.duration, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => removeBubble(b.id)}
              className="absolute rounded-full"
              style={{
                width: b.size,
                height: b.size,
                marginLeft: -b.size / 2,
                marginTop: -b.size / 2,
                background: `radial-gradient(circle, ${b.color} 0%, ${b.color}00 75%)`,
                boxShadow: `0 0 ${b.size}px ${b.color}55`,
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
