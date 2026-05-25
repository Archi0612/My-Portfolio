import type { SkillCategory } from "@/types/content";

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "Microservices" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [{ name: "MongoDB" }, { name: "PostgreSQL" }, { name: "MySQL" }, { name: "Prisma" }],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [{ name: "AWS" }, { name: "GCP" }, { name: "Docker" }, { name: "CI/CD" }],
  },
  {
    title: "Caching & Queues",
    icon: "bolt",
    skills: [{ name: "Redis" }, { name: "BullMQ" }, { name: "Kafka" }],
  },
  {
    title: "AI & Automation",
    icon: "robot",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "Vapi" },
      { name: "Retell" },
      { name: "n8n" },
    ],
  },
  {
    title: "Integrations",
    icon: "plug",
    skills: [
      { name: "Twilio" },
      { name: "Telnyx" },
      { name: "Meta APIs" },
      { name: "Stripe" },
      { name: "WebSockets" },
    ],
  },
  {
    title: "Languages",
    icon: "terminal",
    skills: [{ name: "JavaScript" }, { name: "Python" }, { name: "Java" }],
  },
  {
    title: "Soft Skills",
    icon: "users",
    skills: [
      { name: "Problem-Solving" },
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Adaptability" },
    ],
  },
];
