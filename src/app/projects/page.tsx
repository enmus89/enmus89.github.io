import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import { researchProjects } from "@/data/projects";
import { plateCode } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "Research projects in structural engineering and construction materials.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-editorial">
          <Reveal>
            <p className="text-eyebrow text-muted">Engineering</p>
            <h1 className="text-display-1 mt-4" style={{ fontSize: "clamp(2.75rem, 2rem + 4vw, 6.5rem)" }}>
              Projects
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mt-20 md:mt-28 mb-32 md:mb-44">
        <div className="container-editorial">
          <ol className="border-t border-line">
            {researchProjects.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={Math.min(i * 0.04, 0.2)}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group grid grid-cols-1 sm:grid-cols-[4rem_1fr_10rem] gap-x-6 gap-y-4 py-8 border-b border-line items-center"
                  >
                    <span className="text-index">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-display-3" style={{ fontSize: "1.6rem" }}>{p.title}</p>
                      <p className="text-sm text-charcoal mt-1">{p.area} · {p.role}</p>
                    </div>
                    <div className="hidden sm:block">
                      <PlaceholderImage
                        seed={p.slug}
                        tone="technical"
                        aspect="4/3"
                        frame={plateCode(i)}
                        label={p.year}
                        className="w-full transition-opacity group-hover:opacity-80"
                      />
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
