import type { PhotographyProject } from "./types";

/**
 * Placeholder photography projects. No real images, locations, dates or
 * events are asserted — categories are provisional labels per the project
 * brief and easy to change once real work is supplied.
 */
export const photographyProjects: PhotographyProject[] = [
  {
    slug: "structures-in-light",
    title: "Structures in Light",
    year: "20––",
    category: "Architecture",
    location: "Location — Placeholder",
    description:
      "Placeholder description of an architectural photography series exploring structure, light and material.",
    imageCount: 10,
    placeholder: true,
  },
  {
    slug: "unnamed-roads",
    title: "Unnamed Roads",
    year: "20––",
    category: "Travel",
    location: "Location — Placeholder",
    description: "Placeholder description of a travel photography series.",
    imageCount: 8,
    placeholder: true,
  },
  {
    slug: "surface-tension",
    title: "Surface Tension",
    year: "20––",
    category: "Infrastructure",
    location: "Location — Placeholder",
    description:
      "Placeholder description documenting infrastructure — bridges, tunnels, roadworks — as visual subject.",
    imageCount: 9,
    placeholder: true,
  },
  {
    slug: "passersby",
    title: "Passersby",
    year: "20––",
    category: "Street",
    location: "Location — Placeholder",
    description: "Placeholder description of a street photography series.",
    imageCount: 12,
    placeholder: true,
  },
  {
    slug: "albania-field-notes",
    title: "Field Notes — Albania",
    year: "20––",
    category: "Albania",
    location: "Albania",
    description: "Placeholder description of a body of work photographed in Albania.",
    imageCount: 11,
    placeholder: true,
  },
  {
    slug: "kuwait-interval",
    title: "Interval",
    year: "20––",
    category: "Kuwait",
    location: "Kuwait",
    description: "Placeholder description of a body of work photographed in Kuwait.",
    imageCount: 7,
    placeholder: true,
  },
];

export const photographyCategories = Array.from(
  new Set(photographyProjects.map((p) => p.category))
).sort();
