import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhotoGallery from "@/components/PhotoGallery";
import PlaceholderStamp from "@/components/PlaceholderStamp";
import { photographyProjects } from "@/data/photography";

export function generateStaticParams() {
  return photographyProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/photography/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = photographyProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function PhotographyProjectPage({
  params,
}: PageProps<"/photography/[slug]">) {
  const { slug } = await params;
  const project = photographyProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-editorial">
          <Reveal>
            <Link href="/photography" className="text-eyebrow text-muted">
              ← Photography
            </Link>
            <div className="flex items-baseline gap-3 mt-8">
              <span className="text-eyebrow text-muted">
                {project.category} · {project.location} · {project.year}
              </span>
            </div>
            <h1 className="text-display-1 mt-3" style={{ fontSize: "clamp(2.5rem, 1.8rem + 3.5vw, 5.5rem)" }}>
              {project.title}
            </h1>
            <p className="text-editorial-lead text-charcoal mt-6 max-w-2xl">{project.description}</p>
            <PlaceholderStamp className="mt-6" />
          </Reveal>
        </div>
      </section>

      <section className="mt-16 md:mt-20 mb-32 md:mb-44">
        <div className="container-editorial">
          <PhotoGallery slug={project.slug} title={project.title} count={project.imageCount} />
        </div>
      </section>
    </>
  );
}
