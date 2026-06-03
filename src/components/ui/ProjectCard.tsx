"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import type { MouseEvent } from "react";
import { FaArrowUpRightFromSquare, FaLock, FaCode } from "react-icons/fa6";
import { Badge } from "./Badge";
import { withBasePath } from "@/lib/asset";
import type { Project } from "@/types/content";

const DEFAULT_GRADIENT =
  "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(124,92,255,0.10))";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const reduce = useReducedMotion();
  const primary = project.links[0];
  const proprietary = project.proprietary || project.links.length === 0;

  // Subtle 3D tilt on hover (desktop only).
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const rotX = useTransform(srx, (v) => `${v}deg`);
  const rotY = useTransform(sry, (v) => `${v}deg`);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(-py * 6);
    ry.set(px * 8);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass transition-colors hover:border-accent/40"
    >
      <div className={`relative ${compact ? "h-28" : "h-40"} overflow-hidden`} aria-hidden>
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
        <div className="absolute inset-0 bg-gradient-to-t from-base/85 via-base/10 to-transparent" />

        {proprietary ? (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-base/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur">
            <FaLock className="h-2.5 w-2.5" /> Proprietary
          </span>
        ) : (
          <FaArrowUpRightFromSquare className="absolute right-4 top-4 h-4 w-4 text-fg/80 drop-shadow transition group-hover:text-accent" />
        )}
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
        {proprietary ? (
          <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] text-muted/80">
            <FaCode className="h-3 w-3" />
            Private codebase — multi-tenant SaaS in production
          </p>
        ) : null}
      </div>
    </motion.article>
  );
}
