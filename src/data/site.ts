export const site = {
  name: "Archi Saksena",
  role: "Full-Stack Software Engineer",
  /** rotated in the hero typewriter */
  roles: [
    "Full-Stack Software Engineer",
    "SaaS Platform Builder",
    "AI Automation Engineer",
    "Next.js & NestJS Developer",
  ],
  location: "Ahmedabad, India",
  email: "archi061234@gmail.com",
  phone: "+91 7383800612",
  /** local PDF in /public (drop the compiled resume here) */
  resume: "/resume/Archi-Saksena-Resume.pdf",
  url: "https://archi0612.github.io/My-Portfolio/",

  tagline:
    "I build scalable, multi-tenant SaaS and omnichannel platforms — from AI voice & chat agents to Stripe-billed subscription products.",

  summary:
    "Full-Stack Software Engineer with hands-on experience building scalable, multi-tenant SaaS and omnichannel platforms using MERN, Next.js, NestJS, PostgreSQL, and microservices. I work across AI-driven automation, voice and chat agents (Vapi, Retell), real-time omnichannel communication (Twilio, Telnyx, Email), and Stripe-billed subscription products — with a strong focus on clean architecture and performance.",

  about: [
    "I'm a Full-Stack Software Engineer at Cloudmate Technologies, where I ship production SaaS across AI automation, food-tech, and communication. My day-to-day spans Node.js, NestJS, React, and Next.js — designing microservices, optimizing APIs, and building multi-tenant platforms that real businesses depend on.",
    "I'm especially drawn to the intersection of AI and real-time communication: voice and chat agents (Vapi, Retell), omnichannel messaging over Twilio and Telnyx, and Stripe-billed subscription products. I care deeply about clean architecture, performance, and building things that scale gracefully.",
    "I hold a B.E. in Information Technology (2025) and I'm based in Ahmedabad, India. When I'm not shipping features, I'm sharpening my fundamentals and turning side-project ideas into working products.",
  ],

  /** quick facts shown in the About section */
  facts: [
    { label: "Role", value: "Software Engineer @ Cloudmate" },
    { label: "Focus", value: "SaaS · AI Agents · Omnichannel" },
    { label: "Education", value: "B.E. IT, 2025 · GPA 9.03" },
    { label: "Location", value: "Ahmedabad, India" },
  ],
};

export type Site = typeof site;
