import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const items = [
  { seed: "teaching-1", frame: "T.01", label: "Studio" },
  { seed: "teaching-2", frame: "T.02", label: "Laboratory" },
  { seed: "teaching-3", frame: "T.03", label: "Supervision" },
];

export default function TeachingSection() {
  return (
    <section className="mt-32 md:mt-44 bg-paper-dim border-y border-line">
      <div className="container-editorial py-20 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="Teaching"
              title="Teaching as part of the same practice."
              lead="Courses, studio work and graduate supervision, carried with the same attention as the research they draw from."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/teaching" className="inline-flex items-center gap-2 text-eyebrow text-accent group shrink-0">
              Teaching &amp; supervision
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-14">
          {items.map((it, i) => (
            <Reveal key={it.seed} delay={0.05 * i}>
              <PlaceholderImage
                seed={it.seed}
                tone="technical"
                aspect="4/5"
                frame={it.frame}
                label={it.label}
                className="w-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
