import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Badge } from "./Badge";
import { withBasePath } from "@/lib/asset";
import type { Project } from "@/types/content";

const DEFAULT_GRADIENT =
  "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(124,92,255,0.10))";

export function ProjectCard({ project }: { project: Project }) {
  const primary = project.links[0];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="relative h-32 overflow-hidden" aria-hidden>
        {project.image ? (
          <img
            src={withBasePath(project.image)}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ backgroundImage: project.accent ?? DEFAULT_GRADIENT }}
          >
            <div className="absolute inset-0 bg-grid opacity-40" />
          </div>
        )}
        <FaArrowUpRightFromSquare className="absolute right-5 top-5 h-4 w-4 text-fg/80 drop-shadow transition group-hover:text-accent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">
          {primary ? (
            <a
              href={primary.href}
              target="_blank"
              rel="noreferrer"
              className="after:absolute after:inset-0"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
