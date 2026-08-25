import type { ResearchProject } from "./types";

/**
 * Real research projects, sourced directly from Enea's CV (Sept. 2025).
 * Titles, dates, collaborators, budgets and descriptions are as stated
 * there — condensed and lightly re-worded for the page layout (objectives
 * pulled from each project's stated scope), not invented. No results are
 * asserted beyond what the CV itself states. The `placeholder: true` field
 * is a type-level artifact carried over from the original data model; it
 * is not read anywhere in the UI.
 */
export const researchProjects: ResearchProject[] = [
  {
    slug: "external-shear-strengthening-fibre-reinforced-plastering",
    title: "External Shear Strengthening of Damaged Masonry Walls by Fibre-Reinforced Plastering",
    year: "2014–2015",
    role: "Co-Investigator, with Assoc. Prof. Dr. Yavuz Yardim",
    area: "Retrofitting & Repair",
    overview:
      "A one-year project (budget €3,114) proposing methods to repair and strengthen damaged unreinforced masonry walls using fibre-reinforced plaster — ferrocement and polypropylene composite plaster — chosen for its ease of application by a general plasterer, with minimal disturbance to the residence. The experimental results formed the fundamental experimental part of Enea's PhD thesis.",
    objectives: [
      "Propose practical, low-disruption methods to repair and shear-strengthen damaged unreinforced masonry walls.",
      "Evaluate ferrocement and polypropylene composite fibre-reinforced plaster as strengthening plasters.",
      "Generate the experimental dataset underpinning the PhD dissertation on external shear strengthening of URM walls.",
    ],
    methods:
      "Laboratory strengthening and shear testing of masonry wall specimens plastered with ferrocement and polypropylene-fibre-reinforced composite renders.",
    results:
      "Findings were published across several peer-reviewed papers (2017–2023) on GFRP, ferrocement, carbon and polypropylene fibre strengthening of masonry shear walls — see Publications.",
    images: 4,
    publications: [
      "pub-2023-mustafaraj-ferrocement",
      "pub-2020-mustafaraj-polypropylene",
      "pub-2019-mustafaraj-retrofitting",
      "pub-2017-mustafaraj-gfrp",
      "thesis-2016-phd",
    ],
    placeholder: true,
  },
  {
    slug: "five-ottoman-mosques-conditional-assessment",
    title: "Conditional Assessment of Five Ottoman Mosques in Albania",
    year: "2011–2012",
    role: "Team Member, with Assoc. Prof. Dr. Yavuz Yardim and Assoc. Prof. Dr. Hüseyin Bilgin",
    area: "Historical Structures & Heritage",
    overview:
      "A structural condition assessment (budget €12,000) of five Ottoman mosques in Albania, covering damage and distress to both the outer façade and interior of each structure. The project produced conclusions and recommendations on the existing condition of structural defects, together with suggested solutions, aimed at improving capacity for both static and seismic loads.",
    objectives: [
      "Assess the existing structural condition of five Ottoman mosques across Albania.",
      "Document façade and interior damage and distress at each site.",
      "Recommend solutions accounting for soil, environmental conditions and distress severity, for both static and seismic capacity.",
    ],
    methods:
      "Site-based visual and structural condition surveys, combined with soil and environmental condition review, feeding into a written assessment report per mosque.",
    results:
      "Formed the basis of Enea's MSc thesis and several subsequent conference papers and a monograph on the structural assessment of historical masonry structures in Albania.",
    images: 4,
    publications: [
      "conf-2013-mustafaraj-ottoman-mosques",
      "pub-2014-mustafaraj-monograph",
      "pub-2012-yardim-leaden-mosque",
    ],
    placeholder: true,
  },
  {
    slug: "durres-port-quay-structural-assessment",
    title: "Structural Assessment of Durrës Port Quay 5 & 6 Under Crane Load",
    year: "2014",
    role: "Team Member, with Assoc. Prof. Dr. Yavuz Yardim and Assoc. Prof. Dr. Hüseyin Bilgin",
    area: "Structural Engineering",
    overview:
      "Commissioned by Durrës Container Terminal SH.A., this project assessed the existing quay 5 and 6 structures — originally designed, built and upgraded in stages for earlier equipment — against the loads of two new cranes (Gottwald GHMK 7408 and Terex 5150) proposed for operation. Existing structural data was drawn from the 2001 'Review of Design for Civil Works Definite Design Report' prepared for the Albanian Ministry of Public Works and Transport.",
    objectives: [
      "Assess compliance of the existing quay structure with the load demands of two new cranes.",
      "Review structural performance under several relevant loading combinations.",
      "Draw conclusions on the quay structure's suitability for the proposed equipment.",
    ],
    methods:
      "Structural assessment of the existing quay structure against multiple crane and forklift loading combinations, referencing prior design documentation.",
    results:
      "Conclusions on structural compliance were delivered to Durrës Container Terminal SH.A. as a technical assessment report.",
    images: 3,
    publications: [],
    placeholder: true,
  },
  {
    slug: "gjirokaster-heritage-houses-emergency-assessment",
    title: "Emergency Plan: Preservation of Gurgaj and Haderaj Houses, Gjirokastër",
    year: "2014",
    role: "Co-Investigator, with Assoc. Prof. Dr. Yavuz Yardim",
    area: "Historical Structures & Heritage",
    overview:
      "Commissioned by the NGO Cultural Heritage without Borders (CHwB) as part of an emergency preservation plan for two first-category heritage houses in Gjirokastër, Albania. The project assessed the current structural condition of both houses and delivered a set of preservation recommendations.",
    objectives: [
      "Assess the current structural condition of the Gurgaj and Haderaj houses.",
      "Identify structural risks threatening two first-category heritage monuments.",
      "Deliver actionable preservation recommendations to CHwB.",
    ],
    methods: "Site-based structural condition assessment of both heritage houses, reported to the commissioning NGO.",
    results: "A structural assessment report with preservation recommendations was delivered to CHwB.",
    images: 3,
    publications: [],
    placeholder: true,
  },
];
