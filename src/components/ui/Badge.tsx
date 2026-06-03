import type { ReactNode } from "react";
import { TechIcon } from "./TechIcon";

/**
 * A pill-shaped tag. If `name` matches a known tech in the icon registry,
 * its brand SVG is rendered alongside the label.
 */
export function Badge({
  children,
  name,
  withIcon = true,
}: {
  children: ReactNode;
  /** override label used to look up the icon; defaults to children when a string */
  name?: string;
  withIcon?: boolean;
}) {
  const label = name ?? (typeof children === "string" ? children : undefined);

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated/60 px-3 py-1 text-xs font-medium text-muted transition hover:border-accent/40 hover:text-fg">
      {withIcon && label ? <TechIcon name={label} className="h-3.5 w-3.5" /> : null}
      {children}
    </span>
  );
}
