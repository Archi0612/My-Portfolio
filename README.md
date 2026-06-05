# Archi Saksena — Portfolio

A modern, dark, animated portfolio for **Archi Saksena, Full-Stack Software Engineer**.
Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, animated with **Framer Motion** and **Lenis** smooth scroll, and deployed on **Vercel**.

🔗 **Live:** _your Vercel URL — update after the first deploy (also set it in `src/data/site.ts` → `url`)_

## Tech stack

| Area        | Choice                                              |
| ----------- | --------------------------------------------------- |
| Framework   | Next.js 15 (App Router)                             |
| Language    | TypeScript                                          |
| Styling     | Tailwind CSS v4 (CSS-first `@theme` tokens)         |
| Animation   | Framer Motion + Lenis smooth scroll                 |
| Icons       | react-icons (Font Awesome 6)                        |
| Fonts       | Space Grotesk (display) + Inter (body) via `next/font` |
| Contact     | `/api/contact` route + Nodemailer over Gmail SMTP   |
| Hosting     | Vercel (auto-deploys on push)                       |

## Getting started

```bash
npm install
cp .env.example .env.local   # PowerShell: Copy-Item .env.example .env.local
# fill in the SMTP values in .env.local (see "Contact form" below)
npm run dev                  # http://localhost:3000
```

`npm run build` + `npm run start` runs the production build locally.

## Editing content

All content lives in **`src/data/`** — edit these files, not the components:

- `site.ts` — name, role, summary, tagline, quick facts
- `socials.ts` — social links
- `skills.ts` — skill categories
- `experience.ts` — jobs + key projects
- `projects.ts` — featured projects · `otherProjects.ts` — archive
- `education.ts` · `achievements.ts` · `navigation.ts`

Drop your photo at `public/images/profile.jpg`. The resume buttons (navbar + hero) open
the Google Drive PDF set in `site.ts` → `resume` — keep that file shared as
**"Anyone with the link → Viewer"** so visitors can view and download it.

## Contact form (Gmail SMTP)

The form posts to `src/app/api/contact/route.ts`, which sends mail with Nodemailer over
Gmail SMTP. Credentials are **server-only** runtime env vars (no `NEXT_PUBLIC_` prefix —
they never reach the browser):

| Variable     | Value                                  | Notes                                         |
| ------------ | -------------------------------------- | --------------------------------------------- |
| `SMTP_HOST`  | `smtp.gmail.com`                       |                                               |
| `SMTP_PORT`  | `465`                                  | SSL/TLS (`secure` is derived from the port)   |
| `SMTP_USER`  | your Gmail address                     | SMTP login                                    |
| `SMTP_PASS`  | 16-char **app password**, no spaces    | Google Account → Security → 2-Step Verification → App passwords |
| `CONTACT_TO` | delivery address (optional)            | defaults to `SMTP_USER`                       |

- **Local:** put the values in `.env.local` (or `.env`) — both are gitignored.
- **Production:** add the same variables in the Vercel dashboard:
  **Project → Settings → Environment Variables** (All Environments), then redeploy.

## Deployment (Vercel)

Vercel auto-deploys every push to `main` once the repo is connected:

1. [vercel.com](https://vercel.com) → sign in with GitHub → **Add New → Project** →
   import `Archi0612/My-Portfolio`. The project name becomes your URL (`<name>.vercel.app`).
2. Add the SMTP env vars above before the first deploy.
3. After deploying, update the live URL in `src/data/site.ts` → `url` (feeds SEO/OG metadata).

**One-time cleanup:** in the GitHub repo, **Settings → Pages → Source = "None"** to
unpublish the old GitHub Pages site so it stops serving a stale copy.

The copyright year in the footer updates automatically each year (computed in the browser),
so the site never shows a stale year — no rebuild required.
