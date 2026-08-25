import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";

export default function PhotographySection() {
  return (
    <section className="mt-32 md:mt-44">
      <div className="container-editorial flex items-baseline justify-between gap-6">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="text-index">04</span>
            <span className="text-eyebrow text-muted">Photography</span>
          </div>
          <h2 className="text-display-2 mt-3">
            Places, structures and people, observed through a different lens.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} y={30} className="mt-12">
        <div className="container-editorial">
          <PlaceholderImage
            seed="photo-cinematic"
            tone="photograph"
            aspect="21/10"
            frame="02A"
            label="Structures in Light"
            className="w-full"
          />
        </div>
      </Reveal>

      <div className="container-editorial grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-6 md:mt-8">
        <Reveal delay={0.05} className="md:col-span-7">
          <PlaceholderImage
            seed="photo-spread-a"
            tone="photograph"
            aspect="4/3"
            frame="02B"
            label="Infrastructure"
            className="w-full"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 self-end">
          <PlaceholderImage
            seed="photo-spread-b"
            tone="photograph"
            aspect="3/4"
            frame="02C"
            label="Street"
            className="w-full"
          />
        </Reveal>
      </div>

      <Reveal delay={0.05} className="container-editorial mt-10">
        <Link href="/photography" className="inline-flex items-center gap-2 text-eyebrow text-accent group">
          View the photography
          <span className="transition-transform group-hover:translate-x-1">›</span>
        </Link>
      </Reveal>
    </section>
  );
}
