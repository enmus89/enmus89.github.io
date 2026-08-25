import type { ResearchTheme } from "./types";

/**
 * Research themes. These are field/domain labels, not claims of specific
 * findings, awards, or affiliations — safe as structural placeholders
 * pending final copy from Enea.
 */
export const researchThemes: ResearchTheme[] = [
  {
    id: "structural-engineering",
    title: "Structural Engineering",
    descriptor: "Behaviour, analysis and design of structural systems under static and dynamic loading.",
  },
  {
    id: "construction-materials",
    title: "Construction Materials",
    descriptor: "Composition, performance and durability of cementitious and alternative building materials.",
  },
  {
    id: "fiber-reinforced-mortars",
    title: "Fiber-Reinforced Mortars",
    descriptor: "Mechanical reinforcement of cementitious matrices with natural and synthetic fibers.",
  },
  {
    id: "sustainable-materials",
    title: "Sustainable Construction Materials",
    descriptor: "Low-carbon binders and recycled constituents as replacements for conventional materials.",
  },
  {
    id: "geopolymer",
    title: "Geopolymer & Alkali-Activated Materials",
    descriptor: "Alternative binder systems activated without conventional Portland cement.",
  },
  {
    id: "masonry",
    title: "Masonry Structures",
    descriptor: "Mechanical behaviour and seismic performance of historic and contemporary masonry.",
  },
  {
    id: "retrofitting",
    title: "Retrofitting & Repair",
    descriptor: "Strengthening strategies for existing structures under evolving code demands.",
  },
  {
    id: "experimental-mechanics",
    title: "Experimental Mechanics",
    descriptor: "Laboratory characterization of material and structural response under controlled testing.",
  },
  {
    id: "statistical-modelling",
    title: "Statistical Modelling & Optimization",
    descriptor: "Design of experiments, RSM and ANOVA applied to materials and structural performance data.",
  },
];
