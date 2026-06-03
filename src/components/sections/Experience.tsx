"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="03 — Experience"
        title="Where I've worked"
        description="Roles I've held and the kinds of systems I've shipped. The named products themselves live in the Projects section below."
      />
      <div className="relative space-y-12 border-l border-border pl-6 md:pl-10">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}`} delay={i * 0.05} className="relative">
            <motion.span
              className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-base md:-left-[46px]"
              initial={reduce ? false : { scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 220, damping: 18 }}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {job.role} <span className="text-accent">· {job.company}</span>
                {job.current ? (
                  <span className="ml-2 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    Current
                  </span>
                ) : null}
              </h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{job.summary}</p>

            {job.highlights?.length ? (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {job.highlights.map((h, j) => (
                  <motion.li
                    key={h}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ delay: 0.12 + j * 0.05, duration: 0.45 }}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <FaCircleCheck className="mt-1 h-3.5 w-3.5 flex-none text-accent" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
