"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaSeedling } from "react-icons/fa6";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { otherProjects } from "@/data/otherProjects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function OtherProjects() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-4">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-2">
            <FaSeedling className="h-3 w-3" />
            Where it all started
          </p>
          <h3 className="mt-1 text-2xl font-semibold">Beginner-era projects</h3>
        </div>
        <p className="max-w-md text-sm text-muted">
          The first sparks — tiny games, course exercises, and the project that taught me how the
          web actually fits together. Kept here on purpose, with affection.
        </p>
      </div>

      <motion.div
        variants={reduce ? undefined : container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {otherProjects.map((p) => (
          <motion.div key={p.title} variants={reduce ? undefined : item}>
            <ProjectCard project={p} compact />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
