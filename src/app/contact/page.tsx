import type { Metadata } from "next";
import PlaceholderStamp from "@/components/PlaceholderStamp";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

const links = [
  { label: "Email", value: "Placeholder — professional email address" },
  { label: "ORCID", value: "Placeholder" },
  { label: "Google Scholar", value: "Placeholder" },
  { label: "LinkedIn", value: "Placeholder" },
];

export default function ContactPage() {
  return (
    <section className="pt-28 md:pt-36 pb-32 md:pb-44">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-eyebrow text-muted">Contact</p>
            <h1 className="text-display-1 mt-4" style={{ fontSize: "clamp(2.75rem, 2rem + 4vw, 6.5rem)" }}>
              Get in touch
            </h1>
            <p className="text-editorial-lead text-charcoal mt-8 max-w-lg">
              For research collaboration, teaching enquiries or photography
              commissions.
            </p>
            <PlaceholderStamp className="mt-6" />
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1}>
            <dl className="border-t border-line">
              {links.map((l) => (
                <div key={l.label} className="flex justify-between py-4 border-b border-line">
                  <dt className="text-eyebrow text-muted">{l.label}</dt>
                  <dd className="text-sm text-charcoal">{l.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
