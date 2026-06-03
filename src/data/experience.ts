import type { Job } from "@/types/content";

export const experience: Job[] = [
  {
    company: "Cloudmate Technologies",
    role: "Software Engineer",
    period: "Jul 2025 — Present",
    current: true,
    summary:
      "Building scalable SaaS platforms across AI automation, food-tech, and communication with Node.js, NestJS, Redis, React, and Next.js — delivering microservices, optimized APIs, and integrations with Twilio, Telnyx, WhatsApp Cloud, Messenger, and Stripe billing.",
    highlights: [
      "Designed Kafka-driven microservices powering multi-tenant CRM and campaign workflows.",
      "Built role-based dashboards on a Next.js monorepo with RBAC, custom fields, and dynamic segments.",
      "Integrated AI voice (Vapi) and chat (Retell, LangGraph) agents into production SaaS for 50+ tenants.",
      "Shipped Stripe-billed subscription products with usage metering and webhook-driven provisioning.",
    ],
  },
  {
    company: "Cloudmate Technologies",
    role: "Software Engineer Intern",
    period: "Jan 2025 — Jun 2025",
    summary:
      "Contributed across frontend and backend for multiple SaaS apps — improving UI/UX consistency, optimizing backend workflows, and integrating third-party APIs.",
    highlights: [
      "Built bulk omnichannel campaign flows over Twilio and Telnyx for 10K+ leads.",
      "Implemented self-onboarding via lead-capture join links and interactive polls.",
      "Owned PostgreSQL + Prisma data modeling for contacts, leads, and campaign analytics.",
    ],
  },
];
