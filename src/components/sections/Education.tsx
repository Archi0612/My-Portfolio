import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="05 — Education" title="My academic background" />
      <div className="relative space-y-8 border-l border-border pl-6 md:pl-10">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.05} className="relative">
            <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-base md:-left-[46px]" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <span className="font-mono text-xs text-muted">{e.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {e.institute}
              {e.detail ? ` · ${e.detail}` : ""}
            </p>
            {e.score ? <p className="mt-1 text-sm font-medium text-accent">{e.score}</p> : null}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
