import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import {
  metrics,
  updates,
  education,
  experience,
  serviceCommittees,
  servicePeerReview,
  supervision,
} from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "Civil engineer, researcher, educator and photographer.",
};

const researchInterests =
  "Structural analysis and assessment, retrofitting of damaged structures, finite element modelling, unreinforced masonry and historical structures, cultural heritage preservation, fibre-reinforced and sustainable construction materials.";

const profileLinks = [
  { label: "ORCID", href: "https://orcid.org/0000-0002-1391-1626" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=64plbuYAAAAJ&hl=en" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Enea-Mustafaraj" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eneamustafaraj/" },
];

export default function AboutPage() {
  return (
    <>
      {/* ---------- Hero / bio ---------- */}
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
              <p className="text-charcoal mt-5 leading-relaxed max-w-lg">{researchInterests}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Metrics snapshot ---------- */}
      <section className="mt-20 md:mt-28">
        <div className="container-editorial">
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-line">
              {metrics.map((m) => (
                <div key={m.label} className="py-6 pr-4 border-b border-line sm:border-r sm:last:border-r-0">
                  <p className="text-display-2" style={{ fontSize: "clamp(1.75rem, 1.4rem + 1.5vw, 2.75rem)" }}>
                    {m.value}
                  </p>
                  <p className="text-caption mt-1">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="text-caption mt-3">
              Google Scholar, as of Aug. 2026 — figures drift; see the linked profile for current numbers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Updates ---------- */}
      <section className="mt-20 md:mt-28">
        <div className="container-editorial">
          <Reveal>
            <p className="text-eyebrow text-muted mb-6">Updates</p>
          </Reveal>
          <ol className="border-t border-line">
            {updates.map((u, i) => (
              <li key={i}>
                <Reveal delay={Math.min(i * 0.04, 0.2)}>
                  <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-1 py-6 border-b border-line">
                    <p className="text-caption">{u.date}</p>
                    <p className="text-charcoal max-w-2xl leading-relaxed">{u.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <section className="mt-20 md:mt-28">
        <div className="container-editorial">
          <Reveal>
            <p className="text-eyebrow text-muted mb-6">Education</p>
          </Reveal>
          <ol className="border-t border-line">
            {education.map((e, i) => (
              <li key={i}>
                <Reveal delay={Math.min(i * 0.04, 0.2)}>
                  <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_8rem] gap-x-8 gap-y-1 py-6 border-b border-line items-baseline">
                    <p className="text-caption">{e.period}</p>
                    <div>
                      <p className="text-charcoal font-medium">{e.degree}</p>
                      <p className="text-sm text-muted mt-0.5">{e.institution}</p>
                      {e.detail && <p className="text-sm text-charcoal mt-2 max-w-lg leading-relaxed">{e.detail}</p>}
                    </div>
                    {e.gpa && <p className="text-sm text-muted sm:text-right">{e.gpa}</p>}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section className="mt-20 md:mt-28">
        <div className="container-editorial">
          <Reveal>
            <p className="text-eyebrow text-muted mb-6">Experience</p>
          </Reveal>
          <ol className="border-t border-line">
            {experience.map((e, i) => (
              <li key={i}>
                <Reveal delay={Math.min(i * 0.04, 0.2)}>
                  <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-1 py-6 border-b border-line">
                    <p className="text-caption">{e.period}</p>
                    <div>
                      <p className="text-charcoal font-medium">{e.role}</p>
                      <p className="text-sm text-muted mt-0.5">{e.institution}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Service ---------- */}
      <section className="mt-20 md:mt-28 mb-32 md:mb-44">
        <div className="container-editorial">
          <Reveal>
            <p className="text-eyebrow text-muted mb-6">Academic Service</p>
          </Reveal>
          <dl className="border-t border-line">
            <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-2 py-6 border-b border-line">
              <dt className="text-charcoal font-medium">{servicePeerReview.role}</dt>
              <dd className="text-sm text-charcoal max-w-2xl leading-relaxed">{servicePeerReview.detail}</dd>
            </div>
            {serviceCommittees.map((s, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-2 py-6 border-b border-line">
                <dt className="text-charcoal font-medium">{s.role}</dt>
                <dd className="text-sm text-charcoal max-w-2xl leading-relaxed">{s.detail}</dd>
              </div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-2 py-6 border-b border-line">
              <dt className="text-charcoal font-medium">Supervision</dt>
              <dd className="text-sm text-charcoal max-w-2xl leading-relaxed">{supervision}</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-2 py-7 border-b border-line">
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
