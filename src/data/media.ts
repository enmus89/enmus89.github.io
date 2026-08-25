/**
 * Real-photo overrides for <PlaceholderImage>.
 *
 * Every image slot on the site currently renders generated placeholder
 * art (a seeded gradient card — see PlaceholderImage.tsx), because no
 * real photo has been supplied for that slot yet. This file is the one
 * place that changes that, slot by slot, with no other code edits.
 *
 * HOW TO REPLACE A PLACEHOLDER
 *   1. Drop the photo into public/images/<subfolder>/ — the four
 *      subfolders below already exist (portraits/, projects/,
 *      photography/, research/); use whichever fits, or add a new one.
 *   2. Add one line to the map at the bottom: the seed (left) → the
 *      public path (right, starting with "/images/…").
 *   3. Rebuild/redeploy as usual. That's it — PlaceholderImage checks
 *      this map first and falls back to the generated art only when a
 *      seed has no entry here.
 *   Any web-friendly format works (jpg/png/webp); there's no required
 *   size, but matching the slot's aspect ratio (noted below) avoids
 *   heavy cropping, since the image is displayed with object-fit: cover.
 *
 * SEEDS IN USE, BY PAGE
 *
 *   Homepage (/)
 *     hero-portrait                 — Hero.tsx, main portrait — 4/5
 *     about-portrait                — AboutTeaser.tsx — 4/5
 *     photo-cinematic                — PhotographySection.tsx — 21/9 (wide)
 *     photo-spread-a / photo-spread-b — PhotographySection.tsx — 4/5 each
 *     teaching-studio-1/2/3          — TeachingSection.tsx — 4/5 each
 *     <project-slug>                 — SelectedWorkSection.tsx, one per featured project
 *     <photography-slug>             — SelectedWorkSection.tsx, one per featured photography series
 *
 *   About (/about)
 *     about-hero-portrait            — 4/5
 *
 *   Research (/research)
 *     <project-slug>                 — one per project card
 *
 *   Projects (/projects, /projects/[slug])
 *     <project-slug>                 — projects/page.tsx card
 *     <project-slug>-hero            — project detail hero — 21/9
 *     <project-slug>-doc-0 … -doc-N  — documentation grid (N = project.images − 1, see projects.ts)
 *     Slugs & doc counts: external-shear-strengthening-fibre-reinforced-plastering (4),
 *       five-ottoman-mosques-conditional-assessment (4),
 *       durres-port-quay-structural-assessment (3),
 *       gjirokaster-heritage-houses-emergency-assessment (3)
 *
 *   Photography (/photography, /photography/[slug])
 *     <photography-slug>             — cover image on /photography (mixed aspects)
 *     <photography-slug>-0 … -N      — full gallery, opened via the lightbox
 *       (N = imageCount − 1, see photography.ts)
 *     Slugs & image counts: structures-in-light (10), unnamed-roads (8),
 *       surface-tension (9), passersby (12), albania-field-notes (11),
 *       kuwait-interval (7)
 *
 *   Field Notes (/field-notes)
 *     <field-note-slug>              — see fieldNotes.ts for slugs
 */
export const mediaOverrides: Record<string, string> = {
  // "hero-portrait": "/images/portraits/enea-hero.jpg",
};
