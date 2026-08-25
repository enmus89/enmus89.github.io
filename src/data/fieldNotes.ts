import type { FieldNote } from "./types";

/**
 * Field Notes — the signature feature bridging engineering and
 * photography. Short visual-editorial entries, not blog posts.
 * Placeholder text and observations throughout.
 */
export const fieldNotes: FieldNote[] = [
  {
    slug: "concrete-01",
    title: "Concrete",
    date: "20––",
    location: "Location — Placeholder",
    text: "Placeholder observation. Replace with a short first-person note on the photographed surface, texture or moment.",
    technicalObservation:
      "Placeholder technical observation connecting the image to a materials or structural concept.",
    tone: "technical",
    placeholder: true,
  },
  {
    slug: "masonry-01",
    title: "Masonry",
    date: "20––",
    location: "Location — Placeholder",
    text: "Placeholder observation on traditional masonry construction and its visual character.",
    technicalObservation: "Placeholder note on bonding pattern, mortar joint or wall behaviour.",
    tone: "technical",
    placeholder: true,
  },
  {
    slug: "infrastructure-01",
    title: "Infrastructure",
    date: "20––",
    location: "Location — Placeholder",
    text: "Placeholder observation photographing a bridge, road or tunnel as both structure and subject.",
    technicalObservation: "Placeholder engineering note on the structural system pictured.",
    relatedProject: "surface-tension",
    tone: "technical",
    placeholder: true,
  },
  {
    slug: "materials-01",
    title: "Materials",
    date: "20––",
    location: "Location — Placeholder",
    text: "Placeholder observation on texture, deterioration and surface detail in construction materials.",
    tone: "photograph",
    placeholder: true,
  },
  {
    slug: "places-01",
    title: "Places",
    date: "20––",
    location: "Location — Placeholder",
    text: "Placeholder — a pure visual observation, no technical note attached.",
    tone: "photograph",
    placeholder: true,
  },
];
