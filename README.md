# Enea Mustafaraj — Personal Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + Motion for React.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's built (v1 core + expansion)

All pages exist and share one design system (type scale, color tokens,
spacing in `src/app/globals.css`):

- `/` — homepage (hero, engineering, teaching, photography, field notes,
  selected work, about teaser)
- `/research`, `/projects`, `/projects/[slug]`
- `/photography`, `/photography/[slug]` (fullscreen image viewer with
  keyboard nav)
- `/publications` (search + area/type filtering, expandable abstracts)
- `/teaching`, `/field-notes`, `/about`, `/contact`

## Content — all placeholder, clearly labeled

Per the project brief, nothing here is fabricated. Every publication,
project, photograph, biography detail and achievement is a structural
placeholder — most are marked in the UI with a small "Placeholder content"
stamp. Replace content in `src/data/*.ts`:

- `research.ts` — research theme labels (these are field/domain names,
  safe to keep or edit)
- `projects.ts` — research projects
- `publications.ts` — bibliography (titles/journals/DOIs are NOT real)
- `photography.ts` — photography project series
- `fieldNotes.ts` — the engineering/photography "bridge" entries
- `teaching.ts` — courses and philosophy statement

Each type is documented in `src/data/types.ts`.

## Images

There are no real photographs yet, so `PlaceholderImage` (in
`src/components/PlaceholderImage.tsx`) generates considered stand-in art —
a warm duotone field for photography, a blueprint grid for engineering —
instead of gray boxes. When real images are ready:

1. Drop files into `public/images/{research,projects,photography,portraits}/`
2. Swap `<PlaceholderImage seed=... tone=... />` for `next/image` with the
   real `src`, keeping the same `aspect`/layout props.

The data layer is already shaped for this (`image`/`images` fields exist
on each content type) so this is a swap, not a redesign.

## Design system

- Fonts: Fraunces (display/editorial) + Inter (UI/body), self-hosted via
  `@fontsource-variable` — no external requests at runtime.
- Palette: warm off-white / charcoal / muted gray only. No accent color —
  photography is meant to supply the color once real images are in.
- Motion: `src/components/Reveal.tsx` wraps Motion's `whileInView` for
  subtle fade/rise on scroll, respects `prefers-reduced-motion`.

## Known placeholders / next steps before launch

- Swap placeholder images for real photography and lab/research imagery.
- Replace all `src/data/*.ts` content with verified information.
- Update `metadataBase` URL and Open Graph details in `src/app/layout.tsx`
  once the real domain is set.
- Wire the contact links in `src/app/contact/page.tsx` to real addresses.
- Consider adding analytics (Plausible or similar) once deployed.

## Deploying

Built for Vercel (zero-config). `npm run build` also works anywhere that
supports Next.js.
