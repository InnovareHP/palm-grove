# Components and styling

## Layout

```
app/components/<Name>/<Name>.tsx          section component
app/components/<Name>/<Name>.module.css   its styles
app/components/<Name>/<Name>.data.ts      static content arrays (optional)
app/components/ui/<Name>/                 reusable primitives
```

One component per folder, folder name = component name = file name.

## Reuse these, don't rebuild them

- `ui/Button` — every link-styled button. Variants: `solid`, `solidBordered`,
  `outline`, `ghostLight`, `glass`. Handles internal `Link` vs `<a>`, new-tab
  `rel` + sr-only "(opens in a new tab)", and `download`.
- `ui/PageHero`, `ui/MediaSplit`, `ui/CtaBand`, `ui/InfoCards`, `ui/CheckCards`,
  `ui/CheckList`, `ui/StepCards`, `ui/Faq`, `ui/EmailText`.
- Global classes in `app/globals.css`: `pgContainer`, `pgSection`
  (+ `pgSectionDark|Mist|Tinted`), `pgIntro`, `pgEyebrow` (+ `Light|Muted`),
  `pgTitle`/`pgTitleLight`, `pgLead`/`pgLeadLight`, `pgCard`, `pgCardTitle`,
  `pgPlainList`, `pgSrOnly`, `pgSkipLink`, `pgBody`.
- Combine global + module classes with template strings:
  `` className={`pgSection ${classes.section}`} ``. No clsx.

## Styling

- CSS Modules only, imported as `classes`. No Tailwind, no CSS-in-JS, no inline
  style objects except for one-off dynamic values.
- Colours, gradients, shadows, fonts, container width and gutter come from the
  `--pg-*` / `--font-*` tokens in `app/globals.css`. Never hard-code a hex that
  already exists as a token; add a token if a new colour is genuinely needed.
- Corners are square (`--pg-radius: 0`). Don't add border-radius to cards or
  containers.
- Fonts: Montserrat (`--font-sans`) for body, Castoro (`--font-serif`) for
  headings, loaded once in `app/layout.tsx` via `next/font/google`.

## Images

- Static imports from `@/public/figma/...` passed to `next/image` so width,
  height and blur are inferred. Always set a real `sizes` for `fill` images.
- Every image needs meaningful `alt`; decorative ones `alt=""`.
- Allowed `quality` values are `75` and `90` (`next.config.ts` `images.qualities`).

## Accessibility (non-negotiable)

- Each page renders `<Header />`, `<main id="main-content" tabIndex={-1}>`,
  `<Footer />` — the skip link in `layout.tsx` targets `#main-content`.
- One `<h1>` per page (from `PageHero` or `Hero`), headings in order.
- Don't put `aria-label` on links/buttons that have visible text — it overrides
  the text (see commit c948c71). Use `pgSrOnly` spans to add context instead.
- Icon-only content gets `aria-hidden="true"`; interactive icon buttons get a label.
- Menus/dialogs (`MobileDrawer`, `OpeningPopup`) must keep focus management and
  Escape handling.
- `mailto:` links use `mailto()` / `mailtoHint` from `app/lib/site.ts`.
