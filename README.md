# Tumboh Coffee Bar

Marketing website for **Tumboh Coffee Bar**, Bukit Besar, Kuala Terengganu.
Built with Next.js 15 (App Router), TypeScript, self-hosted fonts, and CSS Modules — no runtime dependencies beyond React, so it ships fast and deploys cleanly to Vercel.

_Brewed to grow. Designed to flow._

## Stack

- **Next.js 15** App Router, fully static (SSG) — every route prerendered
- **TypeScript** throughout
- **CSS Modules** + design tokens in `globals.css` (no CSS framework)
- **next/font/local** — self-hosted Fraunces + Inter (zero external font requests)
- Built-in **SEO**: metadata, Open Graph, JSON-LD (`CafeOrCoffeeShop`), sitemap, robots
- Accessible: keyboard focus states, reduced-motion support, semantic landmarks

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

**Option A — Git (recommended)**

1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js. Leave the defaults:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output: (managed by Vercel)
4. Click **Deploy**. Done — you get a `*.vercel.app` URL.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

## Custom domain

In the Vercel dashboard → Project → **Settings → Domains**, add e.g.
`tumbohcoffee.com` and follow the DNS instructions. After that, update the
`SITE_URL` constant in `src/app/layout.tsx` and the URLs in `sitemap.ts` /
`robots.ts` so canonical tags and the sitemap point at the real domain.

## Editing content

- **Menu items & prices** — `menu` object at the top of `src/app/page.tsx`
- **Opening hours** — `hoursList` in the Visit section of `page.tsx`
- **Contact details** — Visit section of `page.tsx` and the JSON-LD in `layout.tsx`
- **Colors & type** — CSS variables in `src/app/globals.css`

## Project structure

```
src/
  app/
    layout.tsx        # fonts, SEO metadata, JSON-LD
    page.tsx          # all page sections + content
    page.module.css   # page styles
    globals.css       # design tokens + base styles
    sitemap.ts        # /sitemap.xml
    robots.ts         # /robots.txt
    icon.svg          # favicon
    fonts/            # self-hosted woff2 files
  components/
    Sprout.tsx        # animated seedling (the signature element)
    Reveal.tsx        # scroll-reveal wrapper
```

> Note: hours and prices are reasonable placeholders — confirm and adjust to the
> café's actual figures before going live.
