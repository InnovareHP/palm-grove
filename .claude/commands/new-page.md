---
description: Scaffold a new route on the Palm Grove site with metadata, sitemap and nav wiring
---

Create the page described in $ARGUMENTS (route path, title, purpose, sections).

1. Read `.claude/rules/content-and-seo.md` and `app/about/page.tsx` as the template.
2. Create `app/<route>/page.tsx`: `pageMetadata({ title, description, path })`, `Header`, `<main id="main-content" tabIndex={-1}>`, `PageHero`, sections, `CtaBand`, `Footer`.
3. Build sections from `app/components/ui/*` primitives first. New section components go in `app/components/<Name>/` with a `.module.css` and optional `.data.ts`.
4. Add the route to `app/sitemap.ts`. Ask whether it belongs in `navLinks` or the footer arrays in `app/lib/site.ts` before adding it.
5. Do not invent copy. Use what the user supplied; mark gaps with `TODO` and list them at the end.
6. Run `pnpm lint` and `pnpm build`; report the output.
