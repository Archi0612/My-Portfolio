import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { OtherProjects } from "./OtherProjects";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="04 — Projects"
        title="Things I've built"
        description="A selection of personal projects. My production work at Cloudmate is summarized in the experience above."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <OtherProjects />
    </Section>
  );
}
