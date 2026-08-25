import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PublicationsList from "@/components/PublicationsList";

export const metadata: Metadata = {
  title: "Publications",
  description: "Journal articles, conference papers and academic publications.",
};

export default function PublicationsPage() {
  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-editorial">
          <Reveal>
            <p className="text-eyebrow text-muted">Engineering</p>
            <h1 className="text-display-1 mt-4" style={{ fontSize: "clamp(2.75rem, 2rem + 4vw, 6.5rem)" }}>
              Publications
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mt-20 md:mt-28 mb-32 md:mb-44">
        <div className="container-editorial">
          <Reveal delay={0.05}>
            <PublicationsList />
          </Reveal>
        </div>
      </section>
    </>
  );
}
