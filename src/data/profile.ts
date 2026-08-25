/**
 * Structured academic-profile content for the About page, organized after
 * the section model of academic personal-page templates (profile snapshot →
 * updates → education → experience → service) — reorganized at the user's
 * request, Aug. 2026. Every entry below is sourced from Enea's CV (Sept.
 * 2025), ORCID (0000-0002-1391-1626) or Google Scholar; nothing here is
 * invented. Two categories common to such templates — "Talks" (invited
 * talks/seminars) and "Awards" (honors) — are deliberately omitted: no
 * sourced record of either exists in the CV, ORCID or Scholar profile.
 */

export type Metric = {
  value: string;
  label: string;
};

/** Citation snapshot — Google Scholar, as of Aug. 2026. Figures drift; see the linked profile for current numbers. */
export const metrics: Metric[] = [
  { value: "670", label: "Citations" },
  { value: "13", label: "h-index" },
  { value: "18", label: "i10-index" },
  { value: "42", label: "Publications" },
  { value: "14", label: "Years teaching" },
];

export type UpdateEntry = {
  date: string;
  body: string;
};

/** Dated, verifiable milestones only — from the CV's employment record and publication dates. Not editorialized commentary. */
export const updates: UpdateEntry[] = [
  {
    date: "Oct. 2025",
    body: "Promoted to Associate Professor of Civil Engineering, American University of the Middle East.",
  },
  {
    date: "2025",
    body: "Five journal articles published on fibre- and date-palm/coconut-fibre-reinforced mortars and alkali-activated binders, with M. Corradi, E. Luga and AUM undergraduate co-authors.",
  },
  {
    date: "Feb. 2022",
    body: "Joined the American University of the Middle East, Kuwait, as Assistant Professor of Civil Engineering.",
  },
];

export type EducationEntry = {
  period: string;
  degree: string;
  institution: string;
  detail?: string;
  gpa?: string;
};

export const education: EducationEntry[] = [
  {
    period: "May 2013 – Jul. 2016",
    degree: "PhD in Civil Engineering",
    institution: "Epoka University, Tirana, Albania",
    detail: "Dissertation: “External Shear Strengthening of Unreinforced Damaged Masonry Walls.”",
    gpa: "4.00 / 4.00",
  },
  {
    period: "Sept. 2011 – Jun. 2012",
    degree: "MSc in Civil Engineering — Structural Engineering",
    institution: "Epoka University, Tirana, Albania",
    gpa: "3.73 / 4.00",
  },
  {
    period: "Sept. 2007 – Sept. 2011",
    degree: "BSc in Civil Engineering",
    institution: "Epoka University, Tirana, Albania",
    gpa: "3.87 / 4.00",
  },
];

export type ExperienceEntry = {
  period: string;
  role: string;
  institution: string;
};

export const experience: ExperienceEntry[] = [
  {
    period: "Oct. 2025 – present",
    role: "Associate Professor, Department of Civil Engineering",
    institution: "American University of the Middle East (AUM), Kuwait",
  },
  {
    period: "Feb. 2022 – Sept. 2025",
    role: "Assistant Professor, Department of Civil Engineering",
    institution: "American University of the Middle East (AUM), Kuwait",
  },
  {
    period: "Sept. 2012 – Jan. 2022",
    role: "Lecturer, Department of Civil Engineering",
    institution: "Epoka University, Tirana, Albania",
  },
  {
    period: "Sept. 2011 – Aug. 2012",
    role: "Research Assistant, Department of Civil Engineering",
    institution: "Epoka University, Tirana, Albania",
  },
];

export type ServiceEntry = {
  role: string;
  detail: string;
};

export const serviceCommittees: ServiceEntry[] = [
  {
    role: "Local Organizing Committee",
    detail: "2nd, 3rd & 4th International Balkans Conference on Challenges of Civil Engineering — 2013, 2016, 2020.",
  },
  {
    role: "Local Organizing Committee",
    detail: "International Students’ Conference of Civil Engineering — 2012.",
  },
];

export const servicePeerReview: ServiceEntry = {
  role: "Peer Reviewer",
  detail:
    "27 reviews recorded on ORCID for Buildings, Construction and Building Materials, Journal of Materials in Civil Engineering, Journal of Engineering Sciences (King Saud University), Processes and Structures — as of Aug. 2026.",
};

export const supervision =
  "Supervised more than 43 undergraduate and 13 graduate student research projects, at AUM and Epoka University.";
