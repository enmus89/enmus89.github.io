import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Civil engineer, researcher, educator and photographer.",
};

/**
 * Sourced from Enea's CV (Sept. 2025), ORCID (0000-0002-1391-1626) and
 * Google Scholar, as of Aug. 2026. Citation figures are live and will
 * drift — see the linked profiles for current numbers.
 */
const record = [
  {
    heading: "Academic Position",
    body: "Associate Professor of Civil Engineering, American University of the Middle East (AUM), Kuwait — since October 2025. Previously Assistant Professor at AUM (Feb. 2022–Sept. 2025), and Lecturer at Epoka University, Tirana, Albania (Sept. 2012–Jan. 2022).",
  },
  {
    heading: "Education",
    body: "PhD in Civil Engineering, Epoka University (2013–2016) — dissertation: \"External Shear Strengthening of Unreinforced Damaged Masonry Walls.\" MSc in Civil Engineering (Structural Engineering), Epoka University (2011–2012). BSc in Civil Engineering, Epoka University (2007–2011).",
  },
  {
    heading: "Research Interests",
    body: "Structural analysis and assessment, retrofitting of damaged structures, finite element modelling, unreinforced masonry and historical structures, cultural heritage preservation, fibre-reinforced and sustainable construction materials.",
  },
  {
    heading: "Professional Activities",
    body: "Member of the Local Organizing Committee, 2nd–4th International Balkans Conference on Challenges of Civil Engineering (2013, 2016, 2020) and International Students' Conference of Civil Engineering (2012). Supervised more than 43 undergraduate and 13 graduate student research projects.",
  },
  {
    heading: "Peer Review",
    body: "Reviewer for Buildings, Construction and Building Materials, Journal of Materials in Civil Engineering, Journal of Engineering Sciences (King Saud University), Processes, and Structures (27 reviews recorded on ORCID as of Aug. 2026).",
  },
  {
    heading: "Citation Record",
    body: "670 citations, h-index 13, i10-index 18 (all-time, per Google Scholar as of Aug. 2026) — see the linked profile for current figures.",
  },
];

const profileLinks = [
  { label: "ORCID", href: "https://orcid.org/0000-0002-1391-1626" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=64plbuYAAAAJ&hl=en" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Enea-Mustafaraj" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eneamustafaraj/" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <PlaceholderImage
                seed="about-hero-portrait"
                tone="photograph"
                aspect="4/5"
                frame="AM.02"
                className="w-full"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="text-eyebrow text-muted">About</p>
              <h1 className="text-display-2 mt-4">
                An engineer who tests materials to failure, and a
                photographer who looks for the moment before it.
              </h1>
              <p className="text-charcoal mt-8 leading-relaxed max-w-lg">
                Enea Mustafaraj is an Associate Professor of Civil Engineering
                at the American University of the Middle East, Kuwait. His
                research centers on the structural assessment, retrofitting
                and material performance of masonry and concrete
                construction — from historic Ottoman mosques in Albania to
                fibre-reinforced and alkali-activated mortars tested today.
                Alongside the research record below, he photographs the
                structures and places that record intersects with.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mt-24 md:mt-32 mb-32 md:mb-44">
        <div className="container-editorial">
          <dl className="border-t border-line">
            {record.map((r) => (
              <div
                key={r.heading}
                className="grid grid-cols-1 sm:grid-cols-[16rem_1fr] gap-x-8 gap-y-2 py-7 border-b border-line"
              >
                <dt className="text-eyebrow text-muted">{r.heading}</dt>
                <dd className="text-charcoal max-w-2xl leading-relaxed">{r.body}</dd>
              </div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-[16rem_1fr] gap-x-8 gap-y-2 py-7 border-b border-line">
              <dt className="text-eyebrow text-muted">Profile Links</dt>
              <dd className="flex flex-wrap gap-x-6 gap-y-2">
                {profileLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-accent underline underline-offset-2 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
