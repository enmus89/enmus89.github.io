import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import PlaceholderStamp from "@/components/PlaceholderStamp";
import Reveal from "@/components/Reveal";
import { researchProjects } from "@/data/projects";
import { plateCode } from "@/lib/utils";

export function generateStaticParams() {
  return researchProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = researchProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.overview };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const projectIndex = researchProjects.findIndex((p) => p.slug === slug);
  const project = researchProjects[projectIndex];
  if (!project) notFound();

  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <Link href="/projects" className="text-eyebrow text-muted">
                ← Projects
              </Link>
              <p className="text-eyebrow text-muted mt-8">{project.area}</p>
              <h1 className="text-display-1 mt-3" style={{ fontSize: "clamp(2.25rem, 1.6rem + 3vw, 4.75rem)" }}>
                {project.title}
              </h1>
              <p className="text-editorial-lead text-charcoal mt-6 max-w-2xl">{project.overview}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.08}>
              <dl className="border-t border-line text-sm">
                <div className="flex justify-between py-3 border-b border-line">
                  <dt className="text-muted">Year</dt>
                  <dd>{project.year}</dd>
                </div>
                <div className="flex justify-between py-3 border-b border-line">
                  <dt className="text-muted">Role</dt>
                  <dd className="text-right">{project.role}</dd>
                </div>
                <div className="flex justify-between py-3 border-b border-line">
                  <dt className="text-muted">Area</dt>
                  <dd className="text-right">{project.area}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal delay={0.1} y={26} className="mt-16 md:mt-24">
        <div className="container-editorial">
          <PlaceholderImage
            seed={`${project.slug}-hero`}
            tone="technical"
            aspect="21/9"
            frame={plateCode(projectIndex)}
            label={`${project.area} · ${project.year}`}
            className="w-full"
          />
        </div>
      </Reveal>

      <section className="mt-20 md:mt-28">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <Reveal>
            <p className="text-eyebrow text-muted">Objectives</p>
            <ul className="mt-4 space-y-2 text-sm text-charcoal">
              {project.objectives.map((o, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-index">{String(i + 1).padStart(2, "0")}</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-eyebrow text-muted">Methods</p>
            <p className="mt-4 text-sm text-charcoal leading-relaxed">{project.methods}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-eyebrow text-muted">Results</p>
            <p className="mt-4 text-sm text-charcoal leading-relaxed">{project.results}</p>
          </Reveal>
        </div>
      </section>

      <section className="mt-20 md:mt-28 mb-32 md:mb-44">
        <div className="container-editorial">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-eyebrow text-muted">Documentation</p>
              <PlaceholderStamp />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: project.images }, (_, i) => (
              <Reveal key={i} delay={0.04 * i}>
                <PlaceholderImage
                  seed={`${project.slug}-doc-${i}`}
                  tone="technical"
                  aspect="4/5"
                  frame={String(i + 1).padStart(2, "0")}
                  className="w-full"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
