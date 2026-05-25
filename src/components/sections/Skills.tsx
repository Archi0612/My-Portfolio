import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/data/skills";
import { cn } from "@/lib/cn";

// Frontend (0) and AI & Automation (5) span two columns for a bento rhythm.
const wide = new Set([0, 5]);

export function Skills() {
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
            <div className="glass h-full rounded-2xl p-6 transition hover:border-accent/30">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <SkillIcon slug={cat.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <Badge key={s.name}>{s.name}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
