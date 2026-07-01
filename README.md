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

## Deploy checklist

1. Point DNS `martinezaistudios.com` to your host
2. Set `site` in `astro.config.mjs` if domain differs
3. Enable HTTPS
4. Verify `/sitemap-index.xml` and `/robots.txt` after deploy
5. Submit sitemap in Google Search Console (EN + ES)

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

© Martinez AI Studios / David J Martinez
