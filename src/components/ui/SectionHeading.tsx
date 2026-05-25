import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", className)}>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-muted">{description}</p> : null}
    </Reveal>
  );
}
