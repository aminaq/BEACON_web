# BEACON website

A minimal Astro + Tailwind CSS website for **BEACON — Bedside Emergency AI for Care Orchestration**.

BEACON = Bedside Emergency AI for Care Orchestration, an AI Moonshot project to transform trauma and stroke care and recovery. The website design is derived from the BEACON visual boards: warm orange/gold signal colors, pale clinical blue, soft cream, and a restrained dark navy. It intentionally keeps the public site focused on four things: the mission, project scale, people, and ways to become involved.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Astro (normally `http://localhost:4321`).

## Production build

```bash
npm run build
npm run preview
```

The static production site is written to `dist/` and can be deployed to Netlify, Vercel, Cloudflare Pages, GitHub Pages, an S3/static host, or any standard web server.

## Where to edit

- `src/pages/index.astro` — page structure, copy, sections, responsive styling, and modal behavior.
- `src/data/beacon.ts` — stats, goals, team bios, and the three involvement paths.
- `src/components/beacon/BeaconBrand.astro` — BEACON wordmark treatment.
- `src/components/beacon/TeamMember.astro` — portrait cards and person pop-up dialogs.
- `src/components/beacon/InvolvementCard.astro` — Give / Collaborate / Become a Participant cards and pop-ups.
- `src/assets/images/beacon/` — team portraits plus the supplied visual boards kept as source references.
- `src/config.yaml` — site title, SEO metadata, theme, and analytics.

## Notes

1. Local builds work without a production domain. Before launch, add your production domain to `site.site` in `src/config.yaml` (for example `https://your-domain.org`) so canonical URL metadata uses the correct host.
2. Replace the instructional **Next step** text in `src/data/beacon.ts` with approved giving, partnership, and research recruitment links or contacts.
3. Use only IRB/ethics-approved language for participant recruitment. Do not collect protected health information through a general marketing form.
4. Add analytics only if desired and approved.
5. Review team titles and project metrics immediately before launch.
