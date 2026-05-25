"use client";

import { useEffect, useMemo, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import { withBasePath } from "@/lib/asset";
import { scrollToSection } from "@/providers/LenisProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => navItems.map((n) => n.href.slice(1)), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border/70 py-3" : "border-b border-transparent py-5",
      )}
    >
      <nav className="container-px flex items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("#home");
          }}
          className="font-display text-lg font-bold tracking-tight"
        >
          Archi<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.href);
                  }}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors",
                    isActive ? "text-accent" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={withBasePath(site.resume)}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-accent/40 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent hover:text-[#04141a] md:inline-block"
        >
          Resume
        </a>

        <button
          type="button"
          className="text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="container-px flex flex-col gap-1 pb-4 pt-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.href);
                }}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm",
                  active === item.href.slice(1) ? "bg-elevated text-accent" : "text-muted",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={withBasePath(site.resume)}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block rounded-lg bg-accent px-3 py-2 text-center text-sm font-semibold text-[#04141a]"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
