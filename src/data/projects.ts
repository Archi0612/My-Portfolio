import type { Project } from "@/types/content";

/**
 * Featured personal projects — the showcase pair.
 * These are open-source and link to public GitHub repos.
 */
export const projects: Project[] = [
  {
    title: "Filmster",
    description:
      "A Netflix / Hotstar-style movie streaming platform built with the MERN stack and TypeScript — a card-based catalog, secure user authentication, and an admin dashboard to add and manage the titles served to users.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: [{ label: "View Code", href: "https://github.com/Archi0612/Movie-Streaming-Fronted" }],
    featured: true,
    image: "/images/projects/filmster.svg",
    accent: "linear-gradient(135deg, rgba(34,211,238,0.22), rgba(59,130,246,0.10))",
  },
  {
    title: "AI Artistry",
    description:
      "An AI image generator using the MERN stack and the Stability API — text-to-image workflows, a community showcase to share creations, and a modern dark UI.",
    tags: ["React", "Node.js", "MongoDB", "Stability API"],
    links: [{ label: "View Code", href: "https://github.com/Archi0612/AI_Artistry" }],
    featured: true,
    image: "/images/projects/ai-artistry.svg",
    accent: "linear-gradient(135deg, rgba(124,92,255,0.22), rgba(217,70,239,0.10))",
  },
];

/**
 * Production / company projects shipped at Cloudmate Technologies.
 * Intentionally no live URLs — these are proprietary, multi-tenant SaaS systems.
 */
export const companyProjects: Project[] = [
  {
    title: "Omnichannel CRM",
    description:
      "Role-based omnichannel CRM on a Next.js monorepo with a Kafka-driven microservices backend, running SMS, email (Microsoft & Google), and WhatsApp campaigns at scale. Supports static and dynamic segments, custom roles, custom fields and modules, and lead management across Deals, Company, Contact, and Campaign modules.",
    tags: ["Next.js", "Microservices", "Kafka", "Redis", "Monorepo", "WhatsApp", "RBAC"],
    links: [],
    featured: true,
    proprietary: true,
    image: "/images/projects/omnichannel-crm.svg",
    accent: "linear-gradient(135deg, rgba(34,211,238,0.22), rgba(16,185,129,0.10))",
  },
  {
    title: "Real Estate AI Automation",
    description:
      "n8n automation layer for a real-estate CRM with AI agents that recommend properties matched to each lead's interests, plus two workflows that auto-generate AI lead summaries and AI insight notes for hands-off lead nurturing.",
    tags: ["n8n", "AI Agents", "Workflow Automation", "LLM", "Real Estate"],
    links: [],
    featured: true,
    proprietary: true,
    image: "/images/projects/real-estate-ai.svg",
    accent: "linear-gradient(135deg, rgba(245,158,11,0.22), rgba(124,92,255,0.10))",
  },
  {
    title: "Speaknova",
    description:
      "Multi-tenant SaaS that assigns AI voice (Vapi) and chat (Retell) agents to 50+ business tenants, with a super-admin dashboard, role-based access control, and Stripe subscription billing.",
    tags: ["NestJS", "Next.js", "Vapi", "Retell", "Stripe", "MongoDB"],
    links: [],
    featured: true,
    proprietary: true,
    image: "/images/projects/speaknova.svg",
    accent: "linear-gradient(135deg, rgba(124,92,255,0.22), rgba(34,211,238,0.10))",
  },
  {
    title: "VoiceNova 360",
    description:
      "AI voice agent for real-time appointment booking, calendar sync, and automated follow-up workflows — built on Next.js + Supabase with webhook-driven integrations to calendar providers.",
    tags: ["Next.js", "TypeScript", "Supabase", "AI Voice", "Calendar API", "Webhooks"],
    links: [],
    featured: true,
    proprietary: true,
    image: "/images/projects/voicenova-360.svg",
    accent: "linear-gradient(135deg, rgba(16,185,129,0.22), rgba(34,211,238,0.10))",
  },
  {
    title: "EchoPlate",
    description:
      "AI food-ordering platform for restaurants where customers order by voice (Vapi agent) or chat (LangGraph + LangChain agent) across SMS (Twilio), WhatsApp (Meta), and web. Orders stream live to a real-time dashboard with order timing via Socket.IO, and Stripe handles online payments.",
    tags: ["Next.js", "TypeScript", "MongoDB", "LangGraph", "Vapi", "Socket.IO", "Stripe", "Twilio", "WhatsApp"],
    links: [],
    featured: true,
    proprietary: true,
    image: "/images/projects/echoplate.svg",
    accent: "linear-gradient(135deg, rgba(217,70,239,0.22), rgba(245,158,11,0.10))",
  },
  {
    title: "AutoCampaign",
    description:
      "Omnichannel sales & marketing platform that sends bulk text (Twilio, Telnyx) and email campaigns to 10K+ leads, with interactive polls, lead-capture join links for self-onboarding, and centralized contact/lead management.",
    tags: ["React", "NestJS", "PostgreSQL", "Prisma", "TypeScript", "Twilio", "Telnyx"],
    links: [],
    featured: true,
    proprietary: true,
    image: "/images/projects/autocampaign.svg",
    accent: "linear-gradient(135deg, rgba(59,130,246,0.22), rgba(124,92,255,0.10))",
  },
];
