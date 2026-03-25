# nerskogen.com — Portfolio

Personal portfolio for Kristoffer. Built with Next.js 14 App Router + Tailwind CSS. Zero UI libraries.

## Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS v3** — utility-first, no component libraries
- **Fonts** — Barlow Condensed (display), DM Sans (body), DM Mono (labels) via `next/font/google`
- **Animations** — CSS keyframes + IntersectionObserver scroll reveals, no animation library

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
  layout.tsx        # Root layout, font config, metadata
  page.tsx          # Assembles all sections
  globals.css       # Tailwind directives + shared component classes (.section-label, .tag, .btn-red, .reveal, .left-bar, .top-bar, .bottom-bar)

components/
  Cursor.tsx        # Custom red cursor + trailing ring (client)
  Nav.tsx           # Fixed nav, scroll-aware bg, mobile hamburger menu
  Hero.tsx          # Full-viewport hero with staggered headline animation
  TechBar.tsx       # Infinite CSS marquee
  About.tsx         # Two-column: bio + profile card + stat grid
  Experience.tsx    # Vertical timeline with pulsing dot on current role
  Skills.tsx        # Auto-fill grid with animated progress bars
  Projects.tsx      # Vertical list rows with left-bar slide reveal
  OpenSource.tsx    # Repo cards with lang colour dots + public/private badges
  Blog.tsx          # Post rows (placeholder — swap for MDX)
  Learning.tsx      # Currently learning grid with progress bars
  Contact.tsx       # Centered contact with email CTA
  Footer.tsx        # Simple footer

hooks/
  useReveal.ts      # IntersectionObserver scroll-reveal hook

tailwind.config.ts  # Custom colours, fonts, screens
```

## Customisation

- **Brand colours** — edit `tailwind.config.ts` → `colors.red`, `colors.bg`
- **Content** — all data is hardcoded inline in each component; easy to find and edit
- **GitHub URL** — search for `https://github.com` and replace with your real profile
- **Blog** — swap placeholder posts in `Blog.tsx` for real MDX-powered entries when ready

## Deployment

```bash
npm run build
```

Deploy to Vercel — just connect the repo and it works out of the box.
