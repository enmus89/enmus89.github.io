import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

const links = [
  { label: "Email", value: "enea.mustafaraj@aum.edu.kw", href: "mailto:enea.mustafaraj@aum.edu.kw" },
  { label: "ORCID", value: "orcid.org/0000-0002-1391-1626", href: "https://orcid.org/0000-0002-1391-1626" },
  {
    label: "Google Scholar",
    value: "scholar.google.com",
    href: "https://scholar.google.com/citations?user=64plbuYAAAAJ&hl=en",
  },
  { label: "ResearchGate", value: "researchgate.net", href: "https://www.researchgate.net/profile/Enea-Mustafaraj" },
  { label: "LinkedIn", value: "linkedin.com/in/eneamustafaraj", href: "https://www.linkedin.com/in/eneamustafaraj/" },
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
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1}>
            <dl className="border-t border-line">
              {links.map((l) => (
                <div key={l.label} className="flex justify-between items-baseline gap-4 py-4 border-b border-line">
                  <dt className="text-eyebrow text-muted shrink-0">{l.label}</dt>
                  <dd className="text-sm text-right">
                    <a
                      href={l.href}
                      target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={l.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="text-charcoal hover:text-accent underline underline-offset-2 transition-colors break-all"
                    >
                      {l.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
