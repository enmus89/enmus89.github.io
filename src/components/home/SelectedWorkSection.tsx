import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { researchProjects } from "@/data/projects";
import { photographyProjects } from "@/data/photography";
import { plateCode } from "@/lib/utils";

export default function SelectedWorkSection() {
  const project = researchProjects[0];
  const photo = photographyProjects[0];

  return (
    <section className="mt-32 md:mt-44">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading index="06" eyebrow="Selected Work" title="Two ways of looking closely." />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-14">
          <Reveal delay={0.05}>
            <Link href={`/projects/${project.slug}`} className="group block">
              <PlaceholderImage
                seed={project.slug}
                tone="technical"
                aspect="4/3"
                frame={plateCode(0)}
                label={`${project.area} · ${project.year}`}
                className="w-full"
              />
              <p className="text-eyebrow text-muted mt-5">Research Project</p>
              <p className="text-display-3 mt-1" style={{ fontSize: "1.6rem" }}>
                {project.title}
              </p>
              <span className="inline-flex items-center gap-2 text-eyebrow text-accent mt-4 group-hover:gap-3 transition-all">
                Read the project ›
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <Link href={`/photography/${photo.slug}`} className="group block">
              <PlaceholderImage
                seed={photo.slug}
                tone="photograph"
                aspect="4/3"
                frame={photo.year}
                label={photo.category}
                className="w-full"
              />
              <p className="text-eyebrow text-muted mt-5">Photography Project</p>
              <p className="text-display-3 mt-1" style={{ fontSize: "1.6rem" }}>
                {photo.title}
              </p>
              <span className="inline-flex items-center gap-2 text-eyebrow text-accent mt-4 group-hover:gap-3 transition-all">
                View the series ›
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
