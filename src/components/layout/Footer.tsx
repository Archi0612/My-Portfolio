"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/data/site";
import { scrollToSection } from "@/providers/LenisProvider";

export function Footer() {
  // Build prerenders the build-time year; the browser overwrites it on mount,
  // so the copyright stays current every year WITHOUT a rebuild.
  const [year, setYear] = useState<number>(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="border-t border-border/70 py-10">
      <div className="container-px flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="font-display text-lg font-bold"
          >
            Archi<span className="text-accent">.</span>
          </a>
          <p className="mt-1 text-sm text-muted">
            © <span suppressHydrationWarning>{year}</span> {site.name}. All rights reserved.
          </p>
        </div>

        {/* <SocialLinks /> */}

        <button
          type="button"
          onClick={() => scrollToSection("#home")}
          aria-label="Back to top"
          suppressHydrationWarning
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
        >
          <FaArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}
