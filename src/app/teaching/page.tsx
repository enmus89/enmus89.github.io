import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import { teachingEntries, teachingOverview } from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Teaching, studio work and academic supervision.",
};

export default function TeachingPage() {
  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-eyebrow text-muted">Engineering</p>
              <h1 className="text-display-1 mt-4" style={{ fontSize: "clamp(2.75rem, 2rem + 4vw, 6.5rem)" }}>
                Teaching
              </h1>
              <p className="text-editorial-lead text-charcoal mt-8 max-w-xl">
                {teachingOverview}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <div className="container-editorial">
          <Reveal>
            <p className="text-eyebrow text-muted mb-8">Courses</p>
          </Reveal>
          <ol className="border-t border-line">
            {teachingEntries.map((c, i) => (
              <li key={c.id}>
                <Reveal delay={Math.min(i * 0.05, 0.2)}>
                  <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr_8rem] gap-x-6 gap-y-2 py-6 border-b border-line items-baseline">
                    <span className="text-caption">{c.code}</span>
                    <div>
                      <p className="text-base font-medium">{c.course}</p>
                      <p className="text-sm text-charcoal mt-1">{c.description}</p>
                    </div>
                    <span className="text-caption sm:text-right">{c.year}</span>
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
            <p className="text-eyebrow text-muted mb-8">Studio, Supervision &amp; Student Work</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {["teaching-studio-1", "teaching-studio-2", "teaching-studio-3"].map((seed, i) => (
              <Reveal key={seed} delay={0.05 * i}>
                <PlaceholderImage seed={seed} tone="technical" aspect="4/5" frame={String(i + 1).padStart(2, "0")} className="w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
