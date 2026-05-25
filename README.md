# Archi Saksena — Portfolio

A modern, dark, animated portfolio for **Archi Saksena, Full-Stack Software Engineer**.
Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, animated with **Framer Motion** and **Lenis** smooth scroll, and deployed as a **static site to GitHub Pages**.

🔗 **Live:** https://archi0612.github.io/My-Portfolio/

## Tech stack

| Area        | Choice                                              |
| ----------- | --------------------------------------------------- |
| Framework   | Next.js 15 (App Router), static export (`output: 'export'`) |
| Language    | TypeScript                                          |
| Styling     | Tailwind CSS v4 (CSS-first `@theme` tokens)         |
| Animation   | Framer Motion + Lenis smooth scroll                 |
| Icons       | react-icons (Font Awesome 6)                        |
| Fonts       | Space Grotesk (display) + Inter (body) via `next/font` |
| Contact     | EmailJS (sends through Gmail, no backend)           |
| Hosting     | GitHub Pages via GitHub Actions                     |

## Getting started

```bash
npm install
cp .env.example .env.local   # PowerShell: Copy-Item .env.example .env.local
# fill in the EmailJS values in .env.local
npm run dev                  # http://localhost:3000
```

`npm run build` produces the static site in `out/`.

## Editing content

All content lives in **`src/data/`** — edit these files, not the components:

- `site.ts` — name, role, summary, tagline, quick facts
- `socials.ts` — social links
- `skills.ts` — skill categories
- `experience.ts` — jobs + key projects
- `projects.ts` — featured projects · `otherProjects.ts` — archive
- `education.ts` · `achievements.ts` · `navigation.ts`

Drop your photo at `public/images/profile.jpg` and your resume PDF at
`public/resume/Archi-Saksena-Resume.pdf`.

## Contact form (EmailJS)

Create a free account at https://dashboard.emailjs.com and obtain three values:

| Variable                          | Where                                            |
| --------------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | Email Services → Add New Service → **Gmail**      |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Email Templates → Create New Template             |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | Account → General → API Keys → **Public Key**     |

The template should use the variables `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`,
and (optionally) `{{time}}`. In **Account → Security**, add `https://archi0612.github.io`
and `http://localhost:3000` to the allowed origins.

- **Local:** put the three values in `.env.local`.
- **Production:** add the same three as GitHub **repo secrets** (Settings → Secrets and
  variables → Actions). They are injected into the build by `.github/workflows/deploy.yml`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export
and publishes it to GitHub Pages.

**One-time setup:** repo **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.

The copyright year in the footer updates automatically each year (computed in the browser),
so the site never shows a stale year — no rebuild required.
