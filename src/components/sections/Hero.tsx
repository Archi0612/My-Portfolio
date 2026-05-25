import { FaArrowRightLong, FaDownload } from "react-icons/fa6";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Typewriter } from "@/components/ui/Typewriter";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { withBasePath } from "@/lib/asset";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[420px] rounded-full bg-accent-2/10 blur-[120px]" />
      </div>

      <div className="container-px grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
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
              <Button href={withBasePath(site.resume)} variant="secondary" download newTab>
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
          <div className="relative mx-auto w-56 sm:w-72 md:w-full md:max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/15 blur-2xl" aria-hidden />
            <div className="animate-float glass relative aspect-square overflow-hidden rounded-[2rem] border border-border">
              {/* Plain <img> + withBasePath: next/image does not prefix basePath for
                  static /public images under output:'export', which 404s on GitHub Pages. */}
              <img
                src={withBasePath("/images/profile.jpg")}
                alt={`${site.name}, ${site.role}`}
                width={640}
                height={640}
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
