import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa6";
import { socials } from "@/data/socials";
import { cn } from "@/lib/cn";

const iconMap: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  email: FaEnvelope,
};

export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socials.map((s) => {
        const Icon = iconMap[s.icon];
        const isMail = s.href.startsWith("mailto:");
        return (
          <li key={s.label}>
            <a
              href={s.href}
              aria-label={s.label}
              {...(isMail ? {} : { target: "_blank", rel: "noreferrer" })}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <Icon className={cn("h-[18px] w-[18px]", iconClassName)} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
