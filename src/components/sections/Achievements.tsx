import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading eyebrow="06 — Achievements" title="Honors & certifications" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={(i % 3) * 0.05}>
            <article className="group glass relative h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold leading-snug">
                  {a.href ? (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noreferrer"
                      className="after:absolute after:inset-0"
                    >
                      {a.title}
                    </a>
                  ) : (
                    a.title
                  )}
                </h3>
                <span className="font-mono text-xs text-muted">{a.year}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{a.issuer}</p>
              {a.href ? (
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                  View certificate <FaArrowUpRightFromSquare className="h-3 w-3" />
                </span>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
