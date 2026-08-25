import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import PlaceholderStamp from "@/components/PlaceholderStamp";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Civil engineer, researcher, educator and photographer.",
};

const record = [
  {
    heading: "Academic Position",
    body: "Placeholder — current academic position, department and institution.",
  },
  {
    heading: "Education",
    body: "Placeholder — degrees, institutions and years.",
  },
  {
    heading: "Research Interests",
    body: "Structural engineering, construction materials, sustainable and alternative binders, experimental mechanics, statistical modelling and optimization.",
  },
  {
    heading: "Professional Activities",
    body: "Placeholder — memberships, committees and professional engagements.",
  },
  {
    heading: "Editorial & Reviewer Activities",
    body: "Placeholder — journal editorial boards and peer-review activity.",
  },
  {
    heading: "Selected Achievements",
    body: "Placeholder — awards, grants and distinctions, to be confirmed.",
  },
  {
    heading: "Profile Links",
    body: "Placeholder — ORCID, Google Scholar, ResearchGate, LinkedIn.",
  },
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
                Placeholder biography. Replace with a short, first-person
                introduction — how the two practices, engineering and
                photography, came to sit side by side, and what connects
                them. The structured professional record follows below.
              </p>
              <PlaceholderStamp className="mt-6" />
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
          </dl>
        </div>
      </section>
    </>
  );
}
