import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { site } from "@/data/site";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="01 — About" title="A bit about me" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 leading-relaxed text-muted">
          {site.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-6">
            <ul className="divide-y divide-border">
              {site.facts.map((fact) => (
                <li
                  key={fact.label}
                  className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <span className="text-sm text-muted">{fact.label}</span>
                  <span className="text-right text-sm font-medium text-fg">{fact.value}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
