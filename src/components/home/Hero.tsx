import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";

const entries = [
  {
    href: "/research",
    index: "01",
    title: "Engineering",
    descriptor: "Research · Structures · Materials · Education",
  },
  {
    href: "/photography",
    index: "02",
    title: "Photography",
    descriptor: "Architecture · Travel · People · Places",
  },
];

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14 items-start">
        <div className="lg:col-span-7 xl:col-span-6">
          <Reveal>
            <p className="text-eyebrow text-muted">
              Civil Engineer · Researcher · Educator · Photographer
            </p>
            <h1 className="text-display-1 mt-5">
              Enea
              <br />
              Mustafaraj
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-editorial-lead text-charcoal mt-8 max-w-md">
              Working between structural engineering and photography — one
              practice built on evidence, the other on observation.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-14 border-t border-line">
              {entries.map((e) => (
                <Link
                  key={e.href}
                  href={e.href}
                  className="group flex items-baseline justify-between gap-6 py-5 border-b border-line"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-index">{e.index}</span>
                    <span className="text-display-3" style={{ fontSize: "1.6rem" }}>
                      {e.title}
                    </span>
                  </span>
                  <span className="text-caption hidden sm:inline text-right">
                    {e.descriptor}
                  </span>
                  <span className="text-eyebrow shrink-0 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 xl:col-span-6 lg:-mr-[clamp(1.25rem,3vw,4rem)]">
          <Reveal delay={0.18} y={26}>
            <PlaceholderImage
              seed="hero-portrait"
              tone="photograph"
              aspect="4/5"
              frame="01A"
              label="Selected work"
              className="w-full lg:rounded-none"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
