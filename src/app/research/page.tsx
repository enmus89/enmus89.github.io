import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import { researchThemes } from "@/data/research";
import { researchProjects } from "@/data/projects";
import { plateCode } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research at the intersection of structural engineering, construction materials and sustainable construction.",
};

export default function ResearchPage() {
  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-eyebrow text-muted">Engineering</p>
              <h1 className="text-display-1 mt-4" style={{ fontSize: "clamp(2.75rem, 2rem + 4vw, 6.5rem)" }}>
                Research
              </h1>
              <p className="text-editorial-lead text-charcoal mt-8 max-w-2xl">
                Research at the intersection of structures, materials and
                sustainable construction — grounded in laboratory testing,
                experimental mechanics and statistical modelling.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <div className="container-editorial">
          <ol className="border-t border-line">
            {researchThemes.map((theme, i) => (
              <li key={theme.id}>
                <Reveal delay={Math.min(i * 0.03, 0.2)}>
                  <div className="grid grid-cols-1 sm:grid-cols-[4rem_1fr_minmax(0,26ch)] gap-x-6 gap-y-2 py-8 border-b border-line items-baseline">
                    <span className="text-index">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-display-3" style={{ fontSize: "1.5rem" }}>
                      {theme.title}
                    </p>
                    <p className="text-sm text-charcoal sm:text-right">{theme.descriptor}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-24 md:mt-32 mb-32 md:mb-44">
        <div className="container-editorial">
          <Reveal>
            <div className="flex items-baseline gap-3">
              <span className="text-index">—</span>
              <span className="text-eyebrow text-muted">Selected Research Projects</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {researchProjects.map((p, i) => (
              <Reveal key={p.slug} delay={0.05 * i}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <PlaceholderImage
                    seed={p.slug}
                    tone="technical"
                    aspect="4/5"
                    frame={plateCode(i)}
                    label={`${p.area} · ${p.year}`}
                    className="w-full"
                  />
                  <p className="text-base font-medium mt-4">{p.title}</p>
                  <p className="text-sm text-muted mt-1">{p.role}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Link href="/publications" className="inline-flex items-center gap-2 text-eyebrow mt-14 group">
              Related publications
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
