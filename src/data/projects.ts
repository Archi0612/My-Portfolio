import type { Project } from "@/types/content";

/** Featured personal projects (large cards). */
export const projects: Project[] = [
  {
    title: "Filmster",
    description:
      "A Netflix / Hotstar-style movie streaming platform built with the MERN stack and TypeScript — a card-based catalog, secure user authentication, and an admin dashboard to add and manage the titles served to users.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: [{ label: "View Code", href: "https://github.com/Archi0612/Movie-Streaming-Fronted" }],
    featured: true,
    accent: "linear-gradient(135deg, rgba(34,211,238,0.22), rgba(59,130,246,0.10))",
  },
  {
    title: "AI Artistry",
    description:
      "An AI image generator using the MERN stack and the Stability API — text-to-image workflows, a community showcase to share creations, and a modern dark UI.",
    tags: ["React", "Node.js", "MongoDB", "Stability API"],
    links: [{ label: "View Code", href: "https://github.com/Archi0612/AI_Artistry" }],
    featured: true,
    accent: "linear-gradient(135deg, rgba(124,92,255,0.22), rgba(217,70,239,0.10))",
  },
];
