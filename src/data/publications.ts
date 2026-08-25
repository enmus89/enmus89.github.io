import type { Publication } from "./types";

/**
 * No real publications are recorded yet. These are structural placeholders
 * demonstrating the bibliography layout, filtering and search — titles,
 * journals and DOIs are NOT real and must not be cited. Replace with
 * verified publication data.
 */
export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Publication Title — Placeholder",
    authors: ["E. Mustafaraj", "et al."],
    journal: "Journal — Placeholder",
    year: null,
    category: "Construction Materials",
    type: "Journal Article",
    abstract:
      "Placeholder abstract. Replace with the verified abstract once the publication record is confirmed.",
    placeholder: true,
  },
  {
    id: "pub-2",
    title: "Publication Title — Placeholder",
    authors: ["E. Mustafaraj", "et al."],
    journal: "Journal — Placeholder",
    year: null,
    category: "Structural Engineering",
    type: "Journal Article",
    abstract: "Placeholder abstract pending verified content.",
    placeholder: true,
  },
  {
    id: "pub-3",
    title: "Conference Paper Title — Placeholder",
    authors: ["E. Mustafaraj", "et al."],
    journal: "Conference Proceedings — Placeholder",
    year: null,
    category: "Masonry Structures",
    type: "Conference Paper",
    abstract: "Placeholder abstract pending verified content.",
    placeholder: true,
  },
  {
    id: "pub-4",
    title: "Publication Title — Placeholder",
    authors: ["E. Mustafaraj", "et al."],
    journal: "Journal — Placeholder",
    year: null,
    category: "Sustainable Construction Materials",
    type: "Journal Article",
    abstract: "Placeholder abstract pending verified content.",
    placeholder: true,
  },
  {
    id: "pub-5",
    title: "Doctoral Thesis Title — Placeholder",
    authors: ["E. Mustafaraj"],
    year: null,
    category: "Structural Engineering",
    type: "Thesis",
    abstract: "Placeholder abstract pending verified content.",
    placeholder: true,
  },
];

export const publicationCategories = Array.from(
  new Set(publications.map((p) => p.category))
).sort();

export const publicationTypes = Array.from(
  new Set(publications.map((p) => p.type))
).sort();
