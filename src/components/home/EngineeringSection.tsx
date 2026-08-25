import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { researchThemes } from "@/data/research";

export default function EngineeringSection() {
  const shown = researchThemes.slice(0, 6);

  return (
    <section className="mt-32 md:mt-44">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Engineering"
            title="Structures, materials & the evidence between them."
            lead="Research at the intersection of structural engineering, construction materials and sustainable construction — grounded in laboratory testing and statistical analysis."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal delay={0.05}>
              <ol className="border-t border-line">
                {shown.map((theme, i) => (
                  <li
                    key={theme.id}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 border-b border-line"
                  >
                    <span className="text-index pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-base font-medium">{theme.title}</p>
                      <p className="text-sm text-charcoal mt-1 max-w-md">{theme.descriptor}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-eyebrow mt-8 group"
              >
                All research themes
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal delay={0.1} y={26}>
              <PlaceholderImage
                seed="engineering-lab"
                tone="technical"
                aspect="16/11"
                frame="LAB.02"
                label="Experimental mechanics"
                className="w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
