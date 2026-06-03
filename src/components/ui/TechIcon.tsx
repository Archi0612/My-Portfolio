import type { ReactElement, SVGProps } from "react";

/**
 * Brand SVG icons for the tech badges shown across Skills, Projects, and Experience.
 * Paths and brand colors are adapted from svgl.app — the same set the user asked for —
 * inlined so the static GitHub Pages export has no runtime dependency.
 *
 * Lookup is case-insensitive on slug; pass `mono` to render in current text color.
 */

type IconProps = SVGProps<SVGSVGElement> & { mono?: boolean };

const make =
  (build: (p: IconProps) => ReactElement) =>
  ({ mono, ...rest }: IconProps) =>
    build({ ...rest, mono });

/* --- Frontend --- */
const React = make(({ mono, ...p }) => (
  <svg viewBox="-11.5 -10.232 23 20.463" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <circle r="2.05" fill={mono ? "currentColor" : "#61dafb"} />
    <g stroke={mono ? "currentColor" : "#61dafb"} strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
));
const NextJs = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <circle cx="12" cy="12" r="12" fill={mono ? "currentColor" : "#000"} />
    <path d="M9.6 7.2v9.6h.96v-7.68l7.32 9.13a8.4 8.4 0 0 0 .82-.66L10.55 7.2H9.6Zm5.04 0v4.7l.96 1.2V7.2h-.96Z" fill="#fff" />
  </svg>
));
const TypeScript = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <rect width="24" height="24" rx="3" fill={mono ? "currentColor" : "#3178C6"} />
    <path d="M9.04 13.78v-1.5h7.18v1.5h-2.74V21h-1.7v-7.22H9.04Zm10.94 5.34c.43.62 1.14 1.06 2.02 1.06.77 0 1.18-.32 1.18-.78 0-.55-.42-.74-1.36-1.13l-.55-.23c-1.43-.6-2.38-1.36-2.38-2.96 0-1.46 1.13-2.58 2.89-2.58 1.26 0 2.16.43 2.81 1.55l-1.54.99c-.34-.6-.7-.84-1.27-.84-.57 0-.93.36-.93.84 0 .59.36.83 1.24 1.21l.55.23c1.68.7 2.6 1.42 2.6 3.06 0 1.74-1.38 2.7-3.22 2.7-1.81 0-2.97-.84-3.55-1.95l1.51-.98v.81Z" fill="#fff" transform="translate(-5)" />
  </svg>
));
const JavaScript = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <rect width="24" height="24" rx="3" fill={mono ? "currentColor" : "#F7DF1E"} />
    <path d="M13 19.5c.4.7 1 1.2 2 1.2 1 0 1.5-.5 1.5-1.1 0-.8-.6-1-1.6-1.5l-.6-.2c-1.6-.7-2.6-1.5-2.6-3.3 0-1.6 1.2-2.9 3.2-2.9 1.4 0 2.4.5 3.1 1.8l-1.7 1.1c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4.9 1.4 1.4l.6.2c1.9.8 2.9 1.6 2.9 3.4 0 2-1.6 3-3.7 3-2.1 0-3.4-1-4.1-2.3l1.7-1ZM6 19.5c.3.5.6.9 1.2.9.6 0 1-.2 1-1.1V12H10v7.4c0 1.9-1.1 2.7-2.7 2.7-1.5 0-2.3-.7-2.8-1.6l1.7-1Z" fill="#000" />
  </svg>
));
const HTML = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M3 2h18l-1.65 18.6L12 22l-7.35-1.4L3 2Z" fill={mono ? "currentColor" : "#E34F26"} />
    <path d="M12 4.5v15.7l5.9-1.6 1.3-14.1H12Z" fill={mono ? "currentColor" : "#EF652A"} />
    <path d="M7.4 9.3 7.6 7H12V4.5H4.9l.6 7.3H12V9.3H7.4Zm.7 3.4h2.5l.2 2.2 1.2.3V19l-3.3-.9-.2-2.6H6l.4 4.3 5.6 1.6V19l-.7-.2-2.5-.7-.7-.4Z" fill="#fff" />
  </svg>
));
const CSS = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M3 2h18l-1.65 18.6L12 22l-7.35-1.4L3 2Z" fill={mono ? "currentColor" : "#1572B6"} />
    <path d="M12 4.5v15.7l5.9-1.6 1.3-14.1H12Z" fill={mono ? "currentColor" : "#33A9DC"} />
    <path d="M12 9.4v2.4h4l-.5 4-3.5 1V19l5.6-1.6.8-7.4H12V9.4Z" fill="#fff" />
    <path d="M12 13.4H7.5L7.2 11.8H12V9.4H4.8l.5 6h6.7v-2Z" fill="#fff" />
  </svg>
));
const Tailwind = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M6 0Q3 0 2.25 3 3.375 1.5 4.687 1.875c.75.214 1.286.758 1.88 1.36C7.534 4.21 8.654 5.328 11.25 5.328c3 0 4.5-1.5 5.25-4.5-1.125 1.5-2.437 2.063-3.937 1.688-.857-.214-1.47-.836-2.149-1.524C9.305 0 8.078 0 6 0ZM2.25 5.625c-3 0-4.5 1.5-5.25 4.5 1.125-1.5 2.437-2.063 3.937-1.688.857.214 1.47.836 2.149 1.524 1.108 1.12 2.39 2.414 5.164 2.414 3 0 4.5-1.5 5.25-4.5-1.125 1.5-2.437 2.063-3.937 1.688-.857-.214-1.47-.836-2.149-1.524C6.305 6.92 5.078 5.625 2.25 5.625Z" transform="translate(5 0.625)" fill={mono ? "currentColor" : "#38BDF8"} />
  </svg>
));

/* --- Backend --- */
const NodeJs = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M12 1.5 2 7v10l10 5.5 10-5.5V7L12 1.5Z" fill={mono ? "currentColor" : "#539E43"} />
    <path d="M11 8.5h1.5c.7 0 1.1.5 1.1 1.2v.3h-.7v-.3c0-.3-.1-.5-.4-.5H11c-.3 0-.4.1-.4.4v.3c0 .3.1.4.5.5l1 .3c.7.2 1.1.6 1.1 1.3v.3c0 .8-.5 1.3-1.3 1.3H10.6c-.8 0-1.3-.5-1.3-1.3v-.4h.7v.4c0 .3.2.5.6.5h1.3c.3 0 .5-.2.5-.5v-.3c0-.3-.2-.4-.5-.5l-1-.3c-.7-.2-1.1-.6-1.1-1.3v-.2c0-.7.5-1.2 1.2-1.2Zm-4.5.7v3.6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-.3h-.7v.3c0 .7.5 1.2 1.2 1.2.6 0 1.2-.5 1.2-1.2V9.2H6.5Z" fill="#fff" />
  </svg>
));
const NestJs = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M8 3.5c-.8 0-1.5.3-2 .8 4.4-.6 8 3.4 7 7.7-.3 1.5-1.1 2.7-2.3 3.6.7.3 1.6.4 2.4.1 3.3-.9 4.8-4.9 2.7-7.7C14.5 5.8 11.4 3.5 8 3.5Z" fill={mono ? "currentColor" : "#E0234E"} />
    <path d="M5 6c-.5.8-.7 1.7-.5 2.7C5 11 7 12.6 9.5 12.5c2.3-.1 4-1.9 4-4.2 0-1.3-.5-2.4-1.4-3.1.1.5.1 1 0 1.5-.5 1.7-2.4 2.7-4.1 2.2C6.7 8.6 5.9 7.5 5 6Z" fill={mono ? "currentColor" : "#E0234E"} opacity=".85"/>
  </svg>
));
const Express = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M3 8h2.4l3.1 4.2L11.6 8H14L9.7 13.5 14.5 20h-2.4l-3.5-4.8L4.9 20H2.5l4.9-6.5L3 8Zm15 0c2.4 0 4 1.7 4 4.6v.7h-6.4c.1 1.6 1.1 2.6 2.6 2.6 1.1 0 1.9-.4 2.4-1.3l1.3.9c-.7 1.3-2 2.1-3.8 2.1-2.7 0-4.5-1.8-4.5-4.7s1.8-4.9 4.4-4.9Zm0 1.6c-1.3 0-2.3.9-2.5 2.4h4.7c-.1-1.5-1-2.4-2.2-2.4Z" fill={mono ? "currentColor" : "currentColor"} />
  </svg>
));

/* --- Databases --- */
const MongoDB = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M12.18 2c.3 1.5 2.7 5.8 4.4 9.7 1.7 4 .7 8.3-4.4 10.3-5-2-6.1-6.3-4.4-10.3 1.7-4 4.1-8.2 4.4-9.7Z" fill={mono ? "currentColor" : "#13AA52"} />
    <path d="M12 21V2c.3 1.5 2.7 5.8 4.4 9.7C18 15.7 17 20 12 22Z" fill={mono ? "currentColor" : "#13AA52"} opacity=".7" />
    <path d="M12 22v-3l-.5-1L12 16Z" fill={mono ? "currentColor" : "#13AA52"} />
  </svg>
));
const PostgreSQL = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <ellipse cx="12" cy="6" rx="9" ry="3" fill={mono ? "currentColor" : "#336791"} />
    <path d="M3 6v6c0 1.7 4 3 9 3s9-1.3 9-3V6c0 1.7-4 3-9 3S3 7.7 3 6Z" fill={mono ? "currentColor" : "#336791"} opacity=".85" />
    <path d="M3 12v6c0 1.7 4 3 9 3s9-1.3 9-3v-6c0 1.7-4 3-9 3s-9-1.3-9-3Z" fill={mono ? "currentColor" : "#336791"} opacity=".75" />
  </svg>
));
const MySQL = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M3 7c4 0 8 3 9 7-3-2-5-2-7-2 .8 1.6 2 3.4 4 5l-.7 1.7C5.5 17 3 13 3 7Zm13 2c1.7 0 3 1 4 2 .5.4 1 .4 1.5.4-.5 1.7-1.5 2.7-3 4-.5.4-1 1-1 1.8 1.5-.7 2.7-1.4 3.7-2.3 1.4-1.3 2.3-3 2.3-5.6 0-.6-.4-1-.9-1.2-.6-.3-1.3-.4-2-.4-.8 0-1.6.2-2.1.6-.6.4-1 1-1.5 1.7-.4-.4-.7-.7-1-1Z" fill={mono ? "currentColor" : "#00758F"} />
  </svg>
));
const Prisma = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M13.2 1.6c-.7-.4-1.6 0-1.9.8L4 19.7c-.3.8.4 1.6 1.2 1.5l11-1.5c.8-.1 1.3-1 .9-1.7L13.7 1.9c-.1-.1-.3-.2-.5-.3Zm-1 2.7 3.9 13.2-9.4 1.3 5.5-14.5Z" fill={mono ? "currentColor" : "#2D3748"} />
  </svg>
));

/* --- Cloud / DevOps --- */
const AWS = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M6.8 7.7c0 .3 0 .6.1.8l.3.6c0 .1 0 .2-.1.2l-.5.3h-.1c-.1 0-.1 0-.2-.1l-.3-.3-.3-.4c-.5.6-1.2.9-2 .9-.6 0-1-.2-1.4-.5-.3-.3-.5-.8-.5-1.3 0-.6.2-1 .6-1.4.4-.4 1-.5 1.7-.5h.7l.5.1v-.5c0-.5-.1-.8-.3-1-.2-.2-.5-.3-1-.3-.2 0-.5 0-.7.1-.3 0-.5.2-.7.3h-.2c-.1 0-.1-.1-.1-.2v-.4c0-.1 0-.2.1-.2 0 0 .1-.1.2-.1.3-.2.5-.3.8-.4.3-.1.6-.1 1-.1.8 0 1.4.2 1.7.5.4.4.6.9.6 1.7v2.2Z" fill={mono ? "currentColor" : "#252F3E"} />
    <path d="M22 13.7c-2.5 1.8-6 2.8-9.1 2.8C8.6 16.5 4.7 15 1.8 12.5c-.2-.2 0-.4.2-.3 3.2 1.9 7.2 3 11.3 3 2.8 0 5.9-.6 8.7-1.8.4-.2.7.3.3.5l-.3-.2Zm1-1c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.1-.1-.3.5-.4 2.5-.2 3.1.1.7.4-.3 2.2-1 2.9-.2.2-.4.1-.3-.1.2-.7.7-2.1.5-2.5h.4Z" fill={mono ? "currentColor" : "#FF9900"} />
  </svg>
));
const GCP = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M14.5 8h-1.4l-.8-2.4a4.8 4.8 0 0 0-9.1 1.5 5.4 5.4 0 0 0 .3 8.7l1.6-1.6c-1.2-.7-1.9-2-1.9-3.4 0-2.2 1.8-4 4-4l.6-.1.7-1.4a3 3 0 0 1 5.6.8L14.5 8Z" fill={mono ? "currentColor" : "#4285F4"} />
    <path d="M19.6 9.4 14.5 8H7.7l-1.4 5.3-1.4 1.4a4.4 4.4 0 0 0 3 1.3h11.7a3.8 3.8 0 0 0 0-6.6Z" fill={mono ? "currentColor" : "#34A853"} />
    <path d="m4.9 14.7 1.4-1.4L7.7 8H4l-.4 3.2 1.3 3.5Z" fill={mono ? "currentColor" : "#FBBC05"} />
    <path d="M14.5 8h-1.4l-.5-1.6.8-1.7 1.1 3.3Z" fill={mono ? "currentColor" : "#EA4335"} />
  </svg>
));
const Docker = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M22 10.4h-2.3c-.2-1.4-1-2.1-1-2.1l-.5-.4-.4.5c-.4.4-.7 1.2-.8 1.8 0 .3 0 .9.3 1.3-.4.2-1 .3-2 .3H2c-.1 1-.1 4.6 2.6 6.2 2 1.2 4.5 1.8 7.4 1.8 6.5 0 11.3-3 13.6-8.4-.1 0-1.4.1-2.6-1Z" fill={mono ? "currentColor" : "#1D63ED"} />
    <g fill={mono ? "currentColor" : "#1D63ED"}>
      <path d="M3 9.5h2.4v2.4H3zm3 0h2.4v2.4H6zm3 0h2.4v2.4H9zm3 0h2.4v2.4H12zm-6-3h2.4v2.4H6zm3 0h2.4v2.4H9zm3 0h2.4v2.4H12zm0-3h2.4v2.4H12z" />
    </g>
  </svg>
));

/* --- Cache / queues --- */
const Redis = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M21.8 16c-.6.3-3.6 1.5-4.3 1.9-.7.3-1 .3-1.6 0-.6-.3-3.9-1.6-4.4-1.9-.3-.1-.4-.2-.4-.4v-1.7c0 .1.2.3.4.4.6.3 3.8 1.6 4.4 1.9.6.3.9.3 1.6 0 .6-.3 3.7-1.5 4.3-1.8.2-.1.3-.2.3-.3v1.5c0 .1-.2.3-.3.4Zm0-2.7c-.6.3-3.6 1.5-4.3 1.8-.7.3-1 .3-1.6 0-.6-.3-3.9-1.6-4.4-1.8-.3-.1-.4-.2-.4-.4v-1.6c0 .1.2.3.4.3.6.3 3.8 1.6 4.4 1.9.6.3.9.3 1.6 0 .6-.3 3.7-1.5 4.3-1.8.2-.1.3-.2.3-.3v1.5c0 .1-.2.3-.3.4Zm0-2.6c-.6.3-3.6 1.4-4.3 1.7-.7.3-1 .3-1.6 0-.6-.3-3.9-1.5-4.4-1.7-.3-.1-.4-.2-.4-.4v-1c0-.5.4-.7.9-1l3.8-1.4c.9-.3 1.7-.3 2.4 0 .7.3 3.1 1.2 4 1.5.4.1.7.4.7.7v1.3c0 .1-.2.3-.3.4ZM12.4 7.4 8.5 8.7l3 1.2 1-.4 3.7-1.4Z" fill={mono ? "currentColor" : "#DC382D"} />
  </svg>
));
const Kafka = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <circle cx="12" cy="4" r="2" fill={mono ? "currentColor" : "#231F20"} />
    <circle cx="6" cy="10" r="2" fill={mono ? "currentColor" : "#231F20"} />
    <circle cx="18" cy="10" r="2" fill={mono ? "currentColor" : "#231F20"} />
    <circle cx="12" cy="14" r="2.5" fill={mono ? "currentColor" : "#231F20"} />
    <circle cx="6" cy="20" r="2" fill={mono ? "currentColor" : "#231F20"} />
    <circle cx="18" cy="20" r="2" fill={mono ? "currentColor" : "#231F20"} />
    <path d="M12 6v6m-6 2v4m12-4v4" stroke={mono ? "currentColor" : "#231F20"} strokeWidth="1.5" />
  </svg>
));
const BullMQ = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M12 2c5 0 9 4 9 9 0 4-3 8-7 9l1-3c-1 0-2-.4-2-1V12c0-1.5-2-1.5-2 0v4c0 .6-1 1-2 1l1 3c-4-1-7-5-7-9 0-5 4-9 9-9Z" fill={mono ? "currentColor" : "#FF4F00"} />
  </svg>
));

/* --- AI / Automation --- */
const LangChain = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M9 7a3 3 0 0 1 3-3h2v2h-2a1 1 0 0 0 0 2h2v2h-2a3 3 0 0 1-3-3Zm6 10a3 3 0 0 1-3 3h-2v-2h2a1 1 0 0 0 0-2h-2v-2h2a3 3 0 0 1 3 3Zm-3-4H8a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Zm4 0h-1V11h1a1 1 0 0 1 0 2Z" fill={mono ? "currentColor" : "#1C3C3C"} />
  </svg>
));
const LangGraph = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <circle cx="6" cy="6" r="2.5" fill={mono ? "currentColor" : "#1C3C3C"} />
    <circle cx="18" cy="6" r="2.5" fill={mono ? "currentColor" : "#1C3C3C"} />
    <circle cx="12" cy="12" r="2.5" fill={mono ? "currentColor" : "#1C3C3C"} />
    <circle cx="6" cy="18" r="2.5" fill={mono ? "currentColor" : "#1C3C3C"} />
    <circle cx="18" cy="18" r="2.5" fill={mono ? "currentColor" : "#1C3C3C"} />
    <path d="M6 8v2m12-2v2m-7 4 5 4M11 14l-5 4m1-12 4 4m6-4-4 4" stroke={mono ? "currentColor" : "#1C3C3C"} strokeWidth="1.4" fill="none" />
  </svg>
));
const Vapi = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <g stroke={mono ? "currentColor" : "#5DFEC4"} strokeWidth="2" strokeLinecap="round" fill="none">
      <path d="M4 12v0"/><path d="M8 9v6"/><path d="M12 6v12"/><path d="M16 9v6"/><path d="M20 12v0"/>
    </g>
  </svg>
));
const Retell = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <rect x="3" y="6" width="18" height="12" rx="3" fill={mono ? "currentColor" : "#7c5cff"} />
    <circle cx="9" cy="12" r="1.4" fill="#fff"/>
    <circle cx="15" cy="12" r="1.4" fill="#fff"/>
  </svg>
));
const N8N = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <circle cx="5" cy="12" r="2.2" fill={mono ? "currentColor" : "#EA4B71"} />
    <circle cx="12" cy="6" r="2.2" fill={mono ? "currentColor" : "#EA4B71"} />
    <circle cx="12" cy="18" r="2.2" fill={mono ? "currentColor" : "#EA4B71"} />
    <circle cx="19" cy="12" r="2.2" fill={mono ? "currentColor" : "#EA4B71"} />
    <path d="M7 12h3m4 0h3M11 8l1-2m0 12 1-2" stroke={mono ? "currentColor" : "#EA4B71"} strokeWidth="1.4" fill="none"/>
  </svg>
));

/* --- Integrations --- */
const Twilio = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <circle cx="12" cy="12" r="10" fill={mono ? "currentColor" : "#F22F46"} />
    <circle cx="9" cy="9" r="1.6" fill="#fff"/>
    <circle cx="15" cy="9" r="1.6" fill="#fff"/>
    <circle cx="9" cy="15" r="1.6" fill="#fff"/>
    <circle cx="15" cy="15" r="1.6" fill="#fff"/>
  </svg>
));
const Telnyx = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <rect width="24" height="24" rx="5" fill={mono ? "currentColor" : "#00A350"} />
    <path d="M5 8h14v2.4h-5.8V18h-2.4v-7.6H5V8Z" fill="#fff"/>
  </svg>
));
const Meta = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M2 9c0-3 1.6-5 4-5 2 0 3 1 5 4l3 5c2 3 3 4 5 4 2 0 3-1 3-3 0-2-1-3-2.5-5.5C18 7 17 6 15.5 6c-1.4 0-2 .8-3 2.3L11 11l-1.5 2.5C8.6 15 8 16 6 16c-2 0-4-2-4-7Z" fill="none" stroke={mono ? "currentColor" : "#0866FF"} strokeWidth="2"/>
  </svg>
));
const Stripe = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <rect width="24" height="24" rx="4" fill={mono ? "currentColor" : "#635BFF"} />
    <path d="M13.5 9.5c0-.6.6-.8 1.4-.8 1.2 0 2.7.4 3.9 1V6c-1.3-.5-2.6-.7-3.9-.7-3.2 0-5.3 1.7-5.3 4.5 0 4.4 6.1 3.7 6.1 5.6 0 .7-.7 1-1.6 1-1.3 0-3-.5-4.3-1.3v3.7c1.5.6 3 .9 4.3.9 3.3 0 5.5-1.6 5.5-4.5 0-4.8-6.1-3.9-6.1-5.7Z" fill="#fff"/>
  </svg>
));
const WebSockets = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M4 4l8 8-8 8M12 4l8 8-8 8" stroke={mono ? "currentColor" : "#FFD600"} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

/* --- Languages --- */
const Python = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M11.9 2c-1.4 0-3 .1-4 .5-1 .4-1.4 1.2-1.4 2v2.4h5.5v.7h-7.5C3.1 7.6 2 9.4 2 12s1 4.4 2.5 4.4h1.3v-2.8c0-1.5 1.3-2.8 2.8-2.8h5.4c1.4 0 2.5-1 2.5-2.6V4.5c0-1.4-1.1-2.3-2.5-2.4l-2-.1ZM9 3.3c.5 0 1 .4 1 1s-.5 1-1 1-1-.4-1-1 .5-1 1-1Z" fill={mono ? "currentColor" : "#3776AB"} />
    <path d="M17 22c1.4 0 3-.1 4-.5 1-.4 1.4-1.2 1.4-2v-2.4h-5.5v-.7h7.5C20.9 16.4 22 14.6 22 12s-1-4.4-2.5-4.4h-1.3v2.8c0 1.5-1.3 2.8-2.8 2.8H10c-1.4 0-2.5 1-2.5 2.6v3.7c0 1.4 1.1 2.3 2.5 2.4l2 .1Zm-2-1.3c-.5 0-1-.4-1-1s.5-1 1-1 1 .4 1 1-.5 1-1 1Z" fill={mono ? "currentColor" : "#FFD43B"} />
  </svg>
));
const Java = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <path d="M9 13s-1 1 .5 1.3c2 .5 3.7.4 5.4-.1l.7.7c-3.7 1.6-7.6-.1-6.6-1.9Zm-1-2.8s-1 .8.6 1c2.4.3 4.3.3 6.5-.2l.7.6c-4.4 1.3-8.7.1-7.8-1.4Zm6-7.7c2 2 1.5 4.4-1.7 6.4-.4-2.4 2.3-3.6 1.6-6.4Zm-2 4.2c.5 1.3-1.5 2.4-2.5 3.5-.8.9 0 1.4 1 1 2-1 4-1.7 3-3.4-.3-.4-1.6-.7-1.6-1.1ZM10 16c5-.3 6.7-2.2 6.7-2.2-.2.2-.2.4-.3.5-1 1.8-5 2.6-7.4 2.4-1.3-.1.5-.5 1-.7Zm8.3.5c2.6-1.4 1.3-2.7.5-2.5l-.6.4c.3-.1.8 0 .8.4 0 .5-.3.9-.6 1.1l-.1.6Zm-7.7 5c4 .2 7.7-.3 8.5-.6l.7.7c-2 .8-4.6 1-7 1-2.4 0-4-.3-4-.3l1.8-.8Z" fill={mono ? "currentColor" : "#5382A1"} />
  </svg>
));

/* --- Generic fallback --- */
const Generic = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke={mono ? "currentColor" : "currentColor"} strokeWidth="1.5"/>
    <path d="M9 10l-2 2 2 2m6-4 2 2-2 2" fill="none" stroke={mono ? "currentColor" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

/* Microservices / REST APIs / Monorepo / Calendar API / etc. (text-only fallbacks). */
const NetworkIcon = make(({ mono, ...p }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...p}>
    <circle cx="6" cy="6" r="2" fill={mono ? "currentColor" : "#22d3ee"}/>
    <circle cx="18" cy="6" r="2" fill={mono ? "currentColor" : "#22d3ee"}/>
    <circle cx="12" cy="12" r="2" fill={mono ? "currentColor" : "#7c5cff"}/>
    <circle cx="6" cy="18" r="2" fill={mono ? "currentColor" : "#22d3ee"}/>
    <circle cx="18" cy="18" r="2" fill={mono ? "currentColor" : "#22d3ee"}/>
    <path d="M7 7l4 4m6-4-4 4M7 17l4-4m6 4-4-4" stroke={mono ? "currentColor" : "#3a4a66"} strokeWidth="1.2"/>
  </svg>
));

type IconComponent = (p: IconProps) => ReactElement;

const registry: Record<string, IconComponent> = {
  react: React,
  "next.js": NextJs,
  nextjs: NextJs,
  typescript: TypeScript,
  javascript: JavaScript,
  html: HTML,
  css: CSS,
  tailwind: Tailwind,
  "node.js": NodeJs,
  nodejs: NodeJs,
  nestjs: NestJs,
  express: Express,
  mongodb: MongoDB,
  postgresql: PostgreSQL,
  mysql: MySQL,
  prisma: Prisma,
  aws: AWS,
  gcp: GCP,
  docker: Docker,
  redis: Redis,
  kafka: Kafka,
  bullmq: BullMQ,
  langchain: LangChain,
  langgraph: LangGraph,
  vapi: Vapi,
  retell: Retell,
  n8n: N8N,
  twilio: Twilio,
  telnyx: Telnyx,
  "meta apis": Meta,
  whatsapp: Meta,
  meta: Meta,
  stripe: Stripe,
  websockets: WebSockets,
  "socket.io": WebSockets,
  python: Python,
  java: Java,
  microservices: NetworkIcon,
  monorepo: NetworkIcon,
  "rest apis": NetworkIcon,
  webhooks: NetworkIcon,
  rbac: NetworkIcon,
  "ai voice": Vapi,
  "ai agents": LangGraph,
  llm: LangGraph,
  "workflow automation": N8N,
  supabase: PostgreSQL,
  "stability api": LangGraph,
  "real estate": Generic,
  "calendar api": Generic,
  "ci/cd": Generic,
};

export function TechIcon({
  name,
  className,
  mono,
}: {
  name: string;
  className?: string;
  mono?: boolean;
}) {
  const key = name.toLowerCase().trim();
  const Cmp = registry[key] ?? Generic;
  return <Cmp className={className} mono={mono} />;
}

export const techIconRegistry = registry;
