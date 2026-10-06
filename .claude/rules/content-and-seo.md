# Content, contact data, SEO

## Single source of truth

- `app/lib/site.ts` `siteConfig` holds name, URL, address, phones (main,
  intake, fax), crisis numbers (988/911), emails, brochure paths. Never
  hard-code any of these in a component — import `siteConfig`.
- Nav and footer links: `navLinks`, `homeLink`, `footerExploreLinks`,
  `footerResourceLinks` in the same file. Active state via `isNavLinkActive`.
- All site emails are `contact@palmghc.com` (commit 664a9b1).
- Repeated content lists live in `<Name>.data.ts` next to the component.

## Clinical and contact copy

This is a real psychiatric hospital. Do not invent programs, staff, statistics,
insurance, accreditation, outcomes or hours. Copy changes come from the user or
the Figma source; if text is missing, leave a clear TODO and say so.
Crisis messaging (`CrisisBanner`, `ResourcesAlert`) must keep 988 and 911.

## Adding or renaming a page

1. `app/<route>/page.tsx` with
   `export const metadata = pageMetadata({ title, description, path })`
   from `app/lib/seo.ts`. `title` is the short name; the layout template
   appends the site name.
2. Add the route to the `routes` array in `app/sitemap.ts`.
3. Add it to `navLinks` / footer link arrays in `app/lib/site.ts` if it should
   be navigable.
4. Page shell: `Header`, `main#main-content`, `PageHero`, sections, `CtaBand`,
   `Footer` (copy `app/about/page.tsx`).

## Structured data

`organizationJsonLd` in `app/lib/seo.ts` is injected once by `app/layout.tsx`.
Keep it in sync with `siteConfig`; never duplicate JSON-LD per page.

## Brochure

Source art: `public/figma/brochure/page-1.png`, `page-2.png`. Run
`pnpm brochure` to regenerate the PDF and webp pages; commit the outputs.
`next.config.ts` sets cache headers for both paths.
