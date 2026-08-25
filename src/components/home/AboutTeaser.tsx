import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";

export default function AboutTeaser() {
  return (
    <section className="mt-32 md:mt-44 mb-32 md:mb-44">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4 lg:col-start-1">
          <Reveal>
            <PlaceholderImage
              seed="about-portrait"
              tone="photograph"
              aspect="4/5"
              frame="AM.01"
              className="w-full max-w-xs"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.08}>
            <div className="flex items-baseline gap-3">
              <span className="text-index">07</span>
              <span className="text-eyebrow text-muted">About</span>
            </div>
            <p className="text-display-3 mt-4 max-w-xl">
              An engineer who tests materials to failure, and a photographer
              who looks for the moment before it.
            </p>
            <p className="text-charcoal mt-6 max-w-lg leading-relaxed">
              Associate Professor of Civil Engineering at the American
              University of the Middle East, Kuwait, working on the
              structural assessment, retrofitting and material performance
              of masonry and concrete construction.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-eyebrow text-accent mt-8 group">
              More about Enea
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
