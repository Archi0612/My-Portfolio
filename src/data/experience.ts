import type { Job } from "@/types/content";

export const experience: Job[] = [
  {
    company: "Cloudmate Technologies",
    role: "Software Engineer",
    period: "Jul 2025 — Present",
    current: true,
    summary:
      "Building scalable SaaS platforms across AI automation, food-tech, and communication with Node.js, NestJS, Redis, React, and Next.js — delivering microservices, optimized APIs, and integrations with Twilio, Telnyx, WhatsApp Cloud, Messenger, and Stripe billing.",
    projects: [
      {
        name: "Omnichannel CRM",
        description:
          "Role-based omnichannel CRM on a Next.js monorepo with a Kafka-driven microservices backend, running SMS, email (Microsoft & Google), and WhatsApp campaigns at scale. Supports static and dynamic segments, custom roles, custom fields and modules, and lead management across Deals, Company, Contact, and Campaign modules.",
        tags: ["Next.js", "Microservices", "Kafka", "Redis", "Monorepo", "WhatsApp", "RBAC"],
      },
      {
        name: "Real Estate AI Automation",
        description:
          "n8n automation layer for a real-estate CRM with AI agents that recommend properties matched to each lead's interests, plus two workflows that auto-generate AI lead summaries and AI insight notes for hands-off lead nurturing.",
        tags: ["n8n", "AI Agents", "Workflow Automation", "Real Estate", "LLM"],
      },
      {
        name: "Speaknova",
        description:
          "Multi-tenant SaaS that assigns AI voice (Vapi) and chat (Retell) agents to 50+ business tenants, with a super-admin dashboard, role-based access control, and Stripe subscription billing.",
        tags: ["NestJS", "Next.js", "Vapi", "Retell", "Stripe", "MongoDB"],
      },
      {
        name: "VoiceNova 360",
        description:
          "AI voice agent for real-time appointment booking, calendar sync, and automated follow-up workflows.",
        tags: ["Next.js", "TypeScript", "Supabase", "AI Voice", "Calendar API", "Webhooks"],
      },
      {
        name: "EchoPlate",
        description:
          "AI food-ordering platform for restaurants where customers order by voice (Vapi agent) or chat (LangGraph + LangChain agent) across SMS (Twilio), WhatsApp (Meta), and web. Orders stream live to a real-time dashboard with order timing via Socket.IO, and Stripe handles online payments.",
        tags: ["Next.js", "TypeScript", "MongoDB", "LangGraph", "Vapi", "Socket.IO", "Stripe", "Twilio", "WhatsApp"],
      },
    ],
  },
  {
    company: "Cloudmate Technologies",
    role: "Software Engineer Intern",
    period: "Jan 2025 — Jun 2025",
    summary:
      "Contributed across frontend and backend for multiple SaaS apps — improving UI/UX consistency, optimizing backend workflows, and integrating third-party APIs.",
    projects: [
      {
        name: "AutoCampaign",
        description:
          "Omnichannel sales & marketing platform that sends bulk text (Twilio, Telnyx) and email campaigns to 10K+ leads, with interactive polls, lead-capture join links for self-onboarding, and centralized contact/lead management.",
        tags: ["React", "NestJS", "PostgreSQL", "Prisma", "TypeScript", "Twilio", "Telnyx"],
      },
    ],
  },
];
