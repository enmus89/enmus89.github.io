import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { fieldNotes } from "@/data/fieldNotes";

// Curated for tone variety — the homepage preview should show both the
// technical and photographic registers, not just whichever notes happen
// to sit first in the data file.
const featuredSlugs = ["concrete-01", "materials-01", "infrastructure-01"];

export default function FieldNotesSection() {
  const shown = featuredSlugs
    .map((slug) => fieldNotes.find((n) => n.slug === slug))
    .filter((n): n is (typeof fieldNotes)[number] => Boolean(n));

  return (
    <section className="mt-32 md:mt-44">
      <div className="container-editorial">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <Reveal>
            <SectionHeading
              index="05"
              eyebrow="Field Notes"
              title="Where the two practices meet."
              lead="Short visual notes taken on site — a material, a structure, a place — read as an engineer and framed as a photographer."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/field-notes" className="inline-flex items-center gap-2 text-eyebrow text-accent group shrink-0">
              All field notes
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-10 mt-14">
          {shown.map((note, i) => (
            <Reveal key={note.slug} delay={0.05 * i}>
              <Link href={`/field-notes#${note.slug}`} className="group block">
                <PlaceholderImage
                  seed={note.slug}
                  tone={note.tone}
                  aspect="3/4"
                  frame={String(i + 1).padStart(2, "0")}
                  className="w-full"
                />
                <p className="text-eyebrow text-muted mt-4">{note.date} · {note.location}</p>
                <p className="text-display-3 mt-1" style={{ fontSize: "1.3rem" }}>
                  {note.title}
                </p>
                <p className="text-sm text-charcoal mt-2 line-clamp-2">{note.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
