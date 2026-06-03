export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "email";
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  /** slug resolved by <SkillIcon> (code | server | database | cloud | bolt | robot | plug | terminal | users) */
  icon: string;
  skills: Skill[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  summary: string;
  /** short bullet wins shown under the summary on each role */
  highlights?: string[];
  current?: boolean;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** empty array allowed — company projects intentionally have no public link */
  links: ProjectLink[];
  featured?: boolean;
  /** marks production / company work (no source link, "Private — proprietary" label) */
  proprietary?: boolean;
  /** optional Tailwind gradient stops for the card header, e.g. "from-accent/25 to-accent-2/10" */
  accent?: string;
  /** optional /public image path (next/image handles basePath) */
  image?: string;
}

export interface EducationItem {
  title: string;
  institute: string;
  detail?: string;
  period: string;
  score?: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  year: string;
  href?: string;
}
