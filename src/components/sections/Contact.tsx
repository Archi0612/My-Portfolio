"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaLocationDot, FaArrowRightLong } from "react-icons/fa6";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/data/site";
import { emailjsConfig, emailjsConfigured } from "@/lib/emailjs";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border bg-base/60 px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/60 focus:border-accent/60";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot — bots fill hidden fields; humans don't
    if ((data.get("company") as string)?.trim()) return;

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const subject = (data.get("subject") as string)?.trim();
    const body = (data.get("message") as string)?.trim();

    if (!name || !email || !subject || !body) {
      setStatus("error");
      setMessage("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!emailjsConfigured) {
      setStatus("error");
      setMessage(`Email isn't configured yet — please reach me directly at ${site.email}.`);
      return;
    }

    try {
      setStatus("loading");
      setMessage("");
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { name, email, subject, message: body, time: new Date().toLocaleString() },
        { publicKey: emailjsConfig.publicKey },
      );
      setStatus("success");
      setMessage("Thanks! Your message has been sent — I'll get back to you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong while sending. Please try again or email me directly.");
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="07 — Contact"
        title="Let's build something"
        description="Have a role, a project, or just want to say hi? My inbox is always open."
      />
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-6">
          <p className="max-w-md leading-relaxed text-muted">
            I&apos;m open to full-time roles and interesting freelance work. Drop a message and
            I&apos;ll reply as soon as I can.
          </p>
          <ul className="space-y-4">
            <li>
              <a href={`mailto:${site.email}`} className="group flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <FaEnvelope className="h-4 w-4" />
                </span>
                <span className="text-sm text-muted transition group-hover:text-fg">
                  {site.email}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <FaPhone className="h-4 w-4" />
                </span>
                <span className="text-sm text-muted transition group-hover:text-fg">
                  {site.phone}
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <FaLocationDot className="h-4 w-4" />
              </span>
              <span className="text-sm text-muted">{site.location}</span>
            </li>
          </ul>
          <SocialLinks />
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6" noValidate>
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Your name"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                  placeholder="you@example.com"
                  suppressHydrationWarning
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className={inputClass}
                placeholder="What's this about?"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={cn(inputClass, "resize-none")}
                placeholder="Tell me a little about it…"
                suppressHydrationWarning
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              suppressHydrationWarning
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#04141a] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send message"}
              {status !== "loading" ? <FaArrowRightLong className="h-4 w-4" /> : null}
            </button>

            {message ? (
              <p
                role="status"
                aria-live="polite"
                className={cn(
                  "text-sm",
                  status === "success"
                    ? "text-accent"
                    : status === "error"
                      ? "text-red-400"
                      : "text-muted",
                )}
              >
                {message}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
