"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function Typewriter({ words, className }: { words: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && sub === current) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setSub((s) => current.slice(0, deleting ? s.length - 1 : s.length + 1)),
        deleting ? 45 : 85,
      );
    }
    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words, reduce]);

  if (reduce) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={className}>
      {sub}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle" aria-hidden>
        &nbsp;
      </span>
    </span>
  );
}
