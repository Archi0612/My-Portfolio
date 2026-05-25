import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { otherProjects } from "@/data/otherProjects";

export function OtherProjects() {
  return (
    <div className="mt-16">
      <Reveal>
        <h3 className="mb-6 text-lg font-semibold text-muted">Other projects</h3>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.05}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
