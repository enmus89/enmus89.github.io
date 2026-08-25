/**
 * Shared content types.
 *
 * Content lives entirely in this /data layer, separated from presentation,
 * so a future CMS (e.g. Sanity) can replace these modules without any
 * redesign of the components that consume them.
 */

export type PlaceholderTone = "photograph" | "technical";

export type ResearchTheme = {
  id: string;
  title: string;
  descriptor: string;
};

export type ResearchProject = {
  slug: string;
  title: string;
  year: string;
  role: string;
  area: string;
  overview: string;
  objectives: string[];
  methods: string;
  results: string;
  images: number;
  publications: string[];
  placeholder: true;
};

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  journal?: string;
  year: number | null;
  doi?: string;
  abstract?: string;
  category: string;
  type: "Journal Article" | "Conference Paper" | "Book Chapter" | "Thesis";
  url?: string;
  placeholder: true;
};

export type PhotographyCategory =
  | "Architecture"
  | "Travel"
  | "Street"
  | "People"
  | "Landscape"
  | "Infrastructure"
  | "Albania"
  | "Kuwait"
  | "Italy";

export type PhotographyProject = {
  slug: string;
  title: string;
  year: string;
  category: PhotographyCategory;
  location: string;
  description: string;
  imageCount: number;
  placeholder: true;
};

export type FieldNote = {
  slug: string;
  title: string;
  date: string;
  location: string;
  text: string;
  technicalObservation?: string;
  relatedProject?: string;
  tone: PlaceholderTone;
  placeholder: true;
};

export type TeachingEntry = {
  id: string;
  course: string;
  code?: string;
  year: string;
  description: string;
  relatedProjects?: string[];
  placeholder: true;
};
