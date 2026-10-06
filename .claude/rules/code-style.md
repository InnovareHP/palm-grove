# Code style

- Biome is the only formatter/linter (`biome.json`): 2-space indent, recommended
  rules plus the `next` and `react` domains. Import organizing is off — keep
  the existing order, don't reshuffle imports.
- TypeScript strict. Use `type`, not `interface`. Use `import type` for
  type-only imports. Prefer `as const` / `satisfies` for config objects
  (see `app/lib/site.ts`).
- Named exports for components (`export function Header()`); default export
  only where Next requires it (`page.tsx`, `layout.tsx`, `sitemap.ts`, `robots.ts`).
- Path alias `@/*` maps to the repo root: `@/app/lib/site`,
  `@/public/figma/home/hero.png`. Inside `app/components/` relative imports
  between sibling components (`../ui/Button/Button`) are also used.
- Server Components by default. Add `"use client"` only for state, effects or
  browser APIs — currently only `Header`, `MobileDrawer`, `OpeningPopup`.
- No comments unless the why is non-obvious. No JSDoc, no commented-out code.
- `scripts/*.mjs` are plain Node ESM using `node:` imports; `sharp` is a
  devDependency only.
