"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { TechIcon } from "@/components/ui/TechIcon";
import { skills } from "@/data/skills";
import { cn } from "@/lib/cn";

// Frontend (0) and AI & Automation (5) span two columns for a bento rhythm.
const wide = new Set([0, 5]);

const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};
const chip = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
};

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="02 — Skills"
        title="Technologies I work with"
        description="A pragmatic full-stack toolkit spanning product UI, backend services, data, cloud, and AI automation."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat, i) => (
          <Reveal
            key={cat.title}
            delay={(i % 3) * 0.05}
            className={cn(wide.has(i) && "lg:col-span-2")}
          >
            <motion.div
              whileHover={reduce ? undefined : { y: -3 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="glass h-full rounded-2xl p-6 transition hover:border-accent/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <SkillIcon slug={cat.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{cat.title}</h3>
              </div>
              <motion.div
                variants={reduce ? undefined : chipContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map((s) => (
                  <motion.span
                    key={s.name}
                    variants={reduce ? undefined : chip}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated/60 px-3 py-1 text-xs font-medium text-muted transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-fg"
                  >
                    <TechIcon name={s.name} className="h-3.5 w-3.5" />
                    {s.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
