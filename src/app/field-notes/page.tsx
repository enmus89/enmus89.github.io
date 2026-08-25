import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import { fieldNotes } from "@/data/fieldNotes";

export const metadata: Metadata = {
  title: "Field Notes",
  description: "Visual notes taken on site, connecting engineering and photography.",
};

export default function FieldNotesPage() {
  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-editorial">
          <Reveal>
            <p className="text-eyebrow text-muted">Field Notes</p>
            <h1 className="text-display-1 mt-4" style={{ fontSize: "clamp(2.75rem, 2rem + 4vw, 6.5rem)" }}>
              Field Notes
            </h1>
            <p className="text-editorial-lead text-charcoal mt-8 max-w-2xl">
              Short visual notes taken on site — a material, a structure, a
              place — read as an engineer and framed as a photographer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-24 md:mt-32 mb-32 md:mb-44 space-y-24 md:space-y-32">
        {fieldNotes.map((note, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <div key={note.slug} id={note.slug} className="container-editorial scroll-mt-24">
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center ${
                  imageFirst ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <Reveal className="md:col-span-6">
                  <PlaceholderImage
                    seed={note.slug}
                    tone={note.tone}
                    aspect="4/5"
                    frame={String(i + 1).padStart(2, "0")}
                    className="w-full"
                  />
                </Reveal>
                <Reveal delay={0.1} className="md:col-span-5">
                  <p className="text-eyebrow text-muted">
                    {note.date} · {note.location}
                  </p>
                  <p className="text-display-2 mt-3">{note.title}</p>
                  <p className="text-charcoal mt-5 leading-relaxed max-w-md">{note.text}</p>
                  {note.technicalObservation && (
                    <p className="text-sm text-muted mt-4 border-t border-line pt-4 max-w-md">
                      {note.technicalObservation}
                    </p>
                  )}
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
