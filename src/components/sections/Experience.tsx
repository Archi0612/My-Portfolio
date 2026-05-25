import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="03 — Experience" title="Where I've worked" />
      <div className="relative space-y-12 border-l border-border pl-6 md:pl-10">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}`} delay={i * 0.05} className="relative">
            <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-base md:-left-[46px]" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {job.role} <span className="text-accent">· {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{job.summary}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {job.projects.map((p) => (
                <div key={p.name} className="glass rounded-xl p-5">
                  <h4 className="font-semibold text-fg">{p.name}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
