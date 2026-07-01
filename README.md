# Martinez AI Studios — Official Website

Static site for [Martinez AI Studios](https://martinezaistudios.com): creative label, Steam publisher, and transmedia hub for Kaela Inferna and CONTRABAND: Edge of the Fold.

## Stack

- [Astro 7](https://astro.build) — static generation, SEO-first
- Canvas VFX hero (The Fold particle field)
- Bilingual EN/ES with hreflang
- JSON-LD: Organization, WebSite, VideoGame, MusicGroup

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) — root redirects to `/en/`.

## Build

```bash
npm run build
npm run preview
```

Output: `dist/` — deploy to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.).

## Deploy (GitHub Pages + GoDaddy)

Push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml) — build Astro and publish to GitHub Pages.

**GitHub (one time):** Repo → Settings → Pages → Source: **GitHub Actions**.

**GoDaddy DNS** for `martinezaistudios.com`:

| Type | Name | Value |
|------|------|-------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `derolavigne.github.io` |

Then in GitHub Pages settings, set custom domain to `martinezaistudios.com` and enable **Enforce HTTPS** when available.

DNS can take 15 minutes to 48 hours. Verify `/sitemap-index.xml` and submit to Google Search Console.

## Project structure

```
src/
  components/   Header, Footer, HeroFold, GlitchIntro, WorkCard
  i18n/         translations (EN/ES content from brand dossier)
  layouts/      BaseLayout (meta, SEO, JSON-LD)
  pages/        /en/* and /es/* routes
  templates/    Page content shared per language
public/
  logo.png      Steam group logo
  og-image.jpg  Open Graph image
```

## Brand source of truth

Content follows `MARTINEZ_AI_STUDIOS.md` in the repo root. Do not contradict roles, figures, or official links defined there.

## Official links

| Resource | URL |
|----------|-----|
| Kaela Inferna | https://www.kaelainferna.com/ |
| CONTRABAND | https://edgeofthefold.com/ |
| Dero Lavigne | https://derolavigne.com/ |
| Steam (label) | https://steamcommunity.com/groups/MartinezAIStudios |
| Steam (author) | https://steamcommunity.com/groups/DeroLavigne |
| Steam App | https://store.steampowered.com/app/4901100/ |

---

© Martinez AI Studios
