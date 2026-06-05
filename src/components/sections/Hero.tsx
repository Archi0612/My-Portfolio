import { FaArrowRightLong, FaDownload } from "react-icons/fa6";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Typewriter } from "@/components/ui/Typewriter";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CodeWindowHero } from "@/components/ui/CodeWindowHero";
import { withBasePath } from "@/lib/asset";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      <div className="container-px grid items-center gap-12 md:grid-cols-[1.25fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl">{site.name}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-xl font-semibold text-muted sm:text-3xl">
              <Typewriter words={site.roles} />
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{site.tagline}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#projects" variant="primary">
                View My Work <FaArrowRightLong className="h-4 w-4" />
              </Button>
              <Button href={withBasePath(site.resume)} variant="secondary" newTab>
                Resume <FaDownload className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="order-first md:order-last">
          <CodeWindowHero />
        </Reveal>
      </div>
    </section>
  );
}
