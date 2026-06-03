"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Ambient code-vibe layer that lives behind the whole site.
 *
 * — Soft grid + radial glows for depth.
 * — A column of slowly drifting code snippets (matrix-rain feel, but readable).
 * — All purely decorative, `pointer-events: none`, and disabled when the user
 *   prefers reduced motion.
 */
const snippets = [
  "const greet = (name: string) => `hello, ${name}`;",
  "async function ship() { await build(); deploy(); }",
  "type Job<T> = (input: T) => Promise<Result<T>>;",
  "if (user.role === 'admin') return next();",
  "kafka.consume('leads.created', handleLead);",
  "await stripe.subscriptions.create({ customer });",
  "redis.set(cacheKey, payload, 'EX', 60);",
  "<motion.div whileHover={{ scale: 1.02 }} />",
  "agent.on('voice.input', transcribe);",
  "export const tenants = pgTable('tenants', cols);",
  "router.post('/webhooks/twilio', verify, handler);",
  "useEffect(() => subscribe(channel), [channel]);",
  "while (queue.length) process(queue.shift());",
  "const { data } = await supabase.from('bookings');",
  "socket.emit('order:update', { id, status });",
];

export function CodeBackdrop() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Grid + radial glows */}
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 left-[15%] h-[420px] w-[620px] rounded-full bg-accent/[0.07] blur-[120px]" />
      <div className="absolute bottom-[10%] right-[10%] h-[360px] w-[520px] rounded-full bg-accent-2/[0.08] blur-[120px]" />

      {/* Code rain columns */}
      <div className="absolute inset-0">
        <Column x="6%" duration={48} delay={0} />
        <Column x="28%" duration={62} delay={-12} />
        <Column x="56%" duration={54} delay={-26} />
        <Column x="82%" duration={70} delay={-40} />
      </div>

      {/* Soft vignette so content stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-base/70" />

      {/* Static fallback for reduced-motion users — still renders glyphs */}
      {reduce ? null : null}

      {/* hidden snippet payload so the columns reference a fresh list */}
      <span className="hidden">{snippets.length}</span>
    </div>
  );
}

function Column({ x, duration, delay }: { x: string; duration: number; delay: number }) {
  const reduce = useReducedMotion();
  // Pick a deterministic-looking shuffle per column without random() so SSR matches.
  const offset = Math.abs(parseInt(x, 10)) % snippets.length;
  const lines = Array.from({ length: 14 }, (_, i) => snippets[(i + offset) % snippets.length]);

  return (
    <motion.div
      className="absolute top-0 select-none font-mono text-[11px] leading-7 text-accent/30"
      style={{ left: x }}
      initial={{ y: "-30%" }}
      animate={reduce ? { y: "0%" } : { y: ["-30%", "60%"] }}
      transition={{
        duration,
        delay,
        ease: "linear",
        repeat: reduce ? 0 : Infinity,
      }}
    >
      {lines.map((line, i) => (
        <div key={i} style={{ opacity: 0.5 + (i % 4) * 0.12 }}>
          {line}
        </div>
      ))}
    </motion.div>
  );
}
