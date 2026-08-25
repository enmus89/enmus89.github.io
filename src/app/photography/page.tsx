import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import { photographyProjects } from "@/data/photography";

export const metadata: Metadata = {
  title: "Photography",
  description: "Places, structures, people and moments observed through a different lens.",
};

function ProjectCaption({
  title,
  category,
  location,
  slug,
}: {
  title: string;
  category: string;
  location: string;
  slug: string;
}) {
  return (
    <Link href={`/photography/${slug}`} className="group inline-flex flex-col mt-4">
      <span className="text-eyebrow text-muted">
        {category} · {location}
      </span>
      <span className="text-display-3 mt-1 inline-flex items-center gap-3" style={{ fontSize: "1.5rem" }}>
        {title}
        <span className="text-base text-accent transition-transform group-hover:translate-x-1">›</span>
      </span>
    </Link>
  );
}

export default function PhotographyPage() {
  const [p1, p2, p3, p4, p5, p6] = photographyProjects;

  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-editorial">
          <Reveal>
            <p className="text-eyebrow text-muted">Photography</p>
            <h1 className="text-display-1 mt-4" style={{ fontSize: "clamp(2.75rem, 2rem + 4vw, 6.5rem)" }}>
              Photography
            </h1>
            <p className="text-editorial-lead text-charcoal mt-8 max-w-2xl">
              Places, structures, people and moments observed through a
              different lens.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 01 — full-width cinematic */}
      <Reveal y={30} className="mt-20 md:mt-28">
        <div className="container-editorial">
          <PlaceholderImage seed={p1.slug} tone="photograph" aspect="21/9" frame={p1.year} className="w-full" />
          <ProjectCaption title={p1.title} category={p1.category} location={p1.location} slug={p1.slug} />
        </div>
      </Reveal>

      {/* 02 — asymmetric two-image spread */}
      <section className="mt-24 md:mt-32">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <Reveal className="md:col-span-7">
            <PlaceholderImage seed={p2.slug} tone="photograph" aspect="4/3" frame={p2.year} className="w-full" />
            <ProjectCaption title={p2.title} category={p2.category} location={p2.location} slug={p2.slug} />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:mt-16">
            <PlaceholderImage seed={p3.slug} tone="photograph" aspect="3/4" frame={p3.year} className="w-full" />
            <ProjectCaption title={p3.title} category={p3.category} location={p3.location} slug={p3.slug} />
          </Reveal>
        </div>
      </section>

      {/* 03 — vertical, generous whitespace */}
      <section className="mt-24 md:mt-32">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-12 gap-8">
          <Reveal className="md:col-span-5 md:col-start-2">
            <PlaceholderImage seed={p4.slug} tone="photograph" aspect="3/4" frame={p4.year} className="w-full" />
            <ProjectCaption title={p4.title} category={p4.category} location={p4.location} slug={p4.slug} />
          </Reveal>
        </div>
      </section>

      {/* 04 — image + short text */}
      <section className="mt-24 md:mt-32">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <Reveal className="md:col-span-6">
            <PlaceholderImage seed={p5.slug} tone="photograph" aspect="4/5" frame={p5.year} className="w-full" />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
            <span className="text-eyebrow text-muted">{p5.category} · {p5.location}</span>
            <p className="text-display-3 mt-2" style={{ fontSize: "1.75rem" }}>{p5.title}</p>
            <p className="text-charcoal mt-4 leading-relaxed max-w-sm">{p5.description}</p>
            <Link href={`/photography/${p5.slug}`} className="inline-flex items-center gap-2 text-eyebrow text-accent mt-6 group">
              View the series
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 05 — full-width cinematic */}
      <Reveal y={30} className="mt-24 md:mt-32 mb-32 md:mb-44">
        <div className="container-editorial">
          <PlaceholderImage seed={p6.slug} tone="photograph" aspect="21/9" frame={p6.year} className="w-full" />
          <ProjectCaption title={p6.title} category={p6.category} location={p6.location} slug={p6.slug} />
        </div>
      </Reveal>
    </>
  );
}
