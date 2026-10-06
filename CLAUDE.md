@AGENTS.md

# Palm Grove Health Center — palmghc.com

Static marketing site for a geriatric psychiatric hospital in St. Augustine, FL.
Next.js 16 App Router, React 19, TypeScript strict, CSS Modules, Biome, pnpm.
No API routes, no forms, no env vars, no database, no test suite.

## Commands

- `pnpm dev` — local server on :3000
- `pnpm lint` — `biome check` (lint + format check)
- `pnpm format` — `biome format --write`
- `pnpm build` — production build; also the type check
- `pnpm brochure` — rebuild `public/palm-grove-brochure.pdf` + webp pages from `public/figma/brochure/page-*.png`

Verify every change with `pnpm lint` and `pnpm build`. Report the real output.

## Principles

- Read `node_modules/next/dist/docs/` before using any Next.js API you have not
  seen in this repo. Do not trust training-data Next.js.
- Reuse before writing: `app/components/ui/*` primitives, `pg*` global classes,
  `siteConfig` and `pageMetadata`. See the rules below.
- Contact details, addresses, phone numbers and clinical claims are facts about
  a real hospital. Never invent or "improve" them; change only what you are told.
- Accessibility is a shipped requirement (patients are older adults). Every
  change must keep keyboard, screen-reader and contrast behaviour intact.
- Minimal comments. The codebase was deliberately stripped of them.

## Version control

- Conventional commits with a scope: `feat(home): …`, `fix(a11y): …`,
  `chore(contact): …`, `style(site): …`.
- Never push, force-push, or merge. The user opens PRs to `main`.
- Do not commit unless asked.

## Rules

@.claude/rules/code-style.md
@.claude/rules/components.md
@.claude/rules/content-and-seo.md
