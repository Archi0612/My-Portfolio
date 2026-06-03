"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { OtherProjects } from "./OtherProjects";
import { projects, companyProjects } from "@/data/projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function FeaturedProjects() {
  const reduce = useReducedMotion();
  const variants = reduce ? undefined : container;
  const childVariants = reduce ? undefined : item;

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="04 — Projects"
        title="Things I've built"
        description="Production SaaS shipped at Cloudmate, the personal projects that taught me the stack, and the tiny apps where it all began."
      />

      {/* Production / Company work */}
      <div className="mb-16">
        <ProjectGroupHeading
          kicker="Built at scale"
          title="Production work · Cloudmate"
          note="Multi-tenant SaaS in active production — code is private, the architecture isn't."
        />
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {companyProjects.map((p) => (
            <motion.div key={p.title} variants={childVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Featured personal */}
      <div className="mb-16">
        <ProjectGroupHeading
          kicker="Side projects"
          title="Featured personal builds"
          note="Open-source — full repos linked on each card."
        />
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={childVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <OtherProjects />
    </Section>
  );
}

function ProjectGroupHeading({
  kicker,
  title,
  note,
}: {
  kicker: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">{kicker}</p>
        <h3 className="mt-1 text-2xl font-semibold">{title}</h3>
      </div>
      {note ? <p className="max-w-md text-sm text-muted">{note}</p> : null}
    </div>
  );
}
