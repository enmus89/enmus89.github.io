import type { TeachingEntry } from "./types";

/**
 * Real teaching record, sourced from Enea's CV (Sept. 2025). Course lists
 * and date ranges are as stated there. Per-course descriptions below are
 * short editorial glosses on standard course content (based on the course
 * title alone) — not sourced from any syllabus, and not a claim about
 * specific content or pedagogy. The `placeholder: true` field on each
 * entry is a type-level artifact carried over from the original data
 * model; it is not read anywhere in the UI.
 */
export const teachingOverview =
  "Enea has taught civil engineering at both the American University of the Middle East and Epoka University since 2012, across statics, materials, structural analysis and design, at undergraduate and graduate level. He has supervised more than 43 undergraduate and 13 graduate student research projects.";

export const teachingEntries: TeachingEntry[] = [
  // ---- American University of the Middle East (AUM), Kuwait ----
  {
    id: "aum-engineering-materials-1",
    course: "Engineering Materials I",
    code: "BSc CE",
    year: "2022/2023–present",
    description: "Composition, properties and testing of core construction materials.",
    placeholder: true,
  },
  {
    id: "aum-engineering-materials-2",
    course: "Engineering Materials II",
    code: "BSc CE",
    year: "2022/2023–present",
    description: "Advanced material behaviour and testing, building on Engineering Materials I.",
    placeholder: true,
  },
  {
    id: "aum-statics",
    course: "Basic Mechanics: Statics",
    code: "BSc CE",
    year: "2022/2023–present",
    description: "Equilibrium of rigid bodies, forces and reactions — foundational statics for civil engineers.",
    placeholder: true,
  },
  {
    id: "aum-rc-structures",
    course: "Reinforced Concrete Structures",
    code: "BSc CE",
    year: "2022/2023–present",
    description: "Design of reinforced concrete members and structural systems to current codes.",
    placeholder: true,
  },
  {
    id: "aum-urban-hydraulics",
    course: "Urban Hydraulics",
    code: "BSc CE",
    year: "2022/2023–present",
    description: "Hydraulic principles applied to urban water conveyance and drainage systems.",
    placeholder: true,
  },
  // ---- Epoka University, Tirana ----
  {
    id: "epoka-structural-design",
    course: "Structural Design",
    code: "Dept. of Architecture",
    year: "2012/2013–present",
    description: "Structural principles and design fundamentals for architecture students.",
    placeholder: true,
  },
  {
    id: "epoka-rc-fundamentals",
    course: "Reinforced Concrete Fundamentals",
    code: "BSc CE",
    year: "2012/2013–present",
    description: "Introduction to reinforced concrete behaviour and member design.",
    placeholder: true,
  },
  {
    id: "epoka-engineering-mechanics-2",
    course: "Engineering Mechanics II",
    code: "BSc CE",
    year: "2012/2013–present",
    description: "Dynamics and continued mechanics of engineering systems.",
    placeholder: true,
  },
  {
    id: "epoka-rc-structures-msc",
    course: "Reinforced Concrete Structures",
    code: "MSc CE",
    year: "2012/2013–present",
    description: "Graduate-level reinforced concrete structural design.",
    placeholder: true,
  },
  {
    id: "epoka-computer-applications",
    course: "Computer Applications in Civil Engineering",
    code: "MSc CE",
    year: "2012/2013–present",
    description: "Structural analysis and design software applied to civil engineering problems.",
    placeholder: true,
  },
  {
    id: "epoka-structural-analysis",
    course: "Structural Analysis",
    code: "BSc CE",
    year: "2012/2013–2018/2019",
    description: "Analysis of statically determinate and indeterminate structures.",
    placeholder: true,
  },
  {
    id: "epoka-structural-mechanics",
    course: "Structural Mechanics",
    code: "BSc CE",
    year: "2012/2013–2018/2019",
    description: "Mechanics of materials and structural members under load.",
    placeholder: true,
  },
  {
    id: "epoka-steel-design",
    course: "Fundamentals of Steel Design",
    code: "MSc CE",
    year: "2012/2013–2018/2019",
    description: "Design principles for structural steel members and connections.",
    placeholder: true,
  },
];
