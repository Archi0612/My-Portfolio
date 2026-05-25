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
        name: "Speaknova",
        description:
          "Multi-tenant SaaS that assigns AI voice (Vapi) and chat (Retell) agents to 50+ business tenants, with a super-admin dashboard, role-based access control, and Stripe subscription billing.",
        tags: ["NestJS", "Next.js", "Vapi", "Retell", "Stripe", "PostgreSQL"],
      },
      {
        name: "VoiceNova 360",
        description:
          "AI voice agent for real-time appointment booking, calendar sync, and automated follow-up workflows.",
        tags: ["AI Voice", "Node.js", "Calendar API", "Webhooks"],
      },
      {
        name: "EchoPlate",
        description:
          "Multi-channel AI food-ordering platform with WhatsApp/SMS automation and end-to-end delivery workflows.",
        tags: ["WhatsApp Cloud", "Twilio", "Node.js", "Automation"],
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
