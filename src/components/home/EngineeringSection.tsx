import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { publications } from "@/data/publications";
import { metrics } from "@/data/profile";
import { cx } from "@/lib/utils";

/**
 * Publication-record teaser for the homepage, restructured after the
 * "featured card + compact row list, grouped by area" pattern from the
 * Athena academic-page template's Publications section — same grouping and
 * featured/compact distinction, rebuilt with this site's own type system,
 * spacing and single-accent-color palette rather than Athena's own styling.
 * "Featured" here is simply the most recent paper in each area — an
 * objective pick, not an editorial one.
 */

const TOP_AREAS = 3;
const COMPACT_PER_AREA = 2;

function buildGroups() {
  const byCategory = new Map<string, typeof publications>();
  for (const p of publications) {
    const list = byCategory.get(p.category) ?? [];
    list.push(p);
    byCategory.set(p.category, list);
  }

  const areas = [...byCategory.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, TOP_AREAS);

  return areas.map(([category, papers]) => {
    const sorted = [...papers].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
    return {
      category,
      count: papers.length,
      featured: sorted[0],
      compact: sorted.slice(1, 1 + COMPACT_PER_AREA),
    };
  });
}

export default function EngineeringSection() {
  const groups = buildGroups();
  const citationLine = metrics.map((m) => `${m.value} ${m.label.toLowerCase()}`).join(" · ");

  return (
    <section className="mt-32 md:mt-44">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Research"
            title="Structures, materials & the evidence between them."
            lead="Research at the intersection of structural engineering, construction materials and sustainable construction — grounded in laboratory testing and statistical analysis."
          />
          <p className="text-caption mt-4">{citationLine}</p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {groups.map((group, gi) => (
            <Reveal key={group.category} delay={Math.min(gi * 0.06, 0.2)}>
              <div className="flex items-baseline justify-between gap-4 border-t border-line pt-5">
                <p className="text-eyebrow">{group.category}</p>
                <p className="text-caption">{group.count} publications</p>
              </div>

              {/* Featured paper */}
              <article className="grid grid-cols-1 md:grid-cols-[6rem_1fr] gap-x-6 gap-y-2 mt-6">
                <span className="inline-flex h-fit items-center rounded-full bg-blue-tint text-blue-strong text-xs font-medium px-2.5 py-1 w-fit">
                  Featured
                </span>
                <div>
                  <p className="text-caption">
                    {group.featured.journal ?? "—"}
                    {group.featured.year ? ` · ${group.featured.year}` : ""} · {group.featured.type}
                  </p>
                  <p className="text-base font-medium leading-snug mt-1 max-w-2xl">{group.featured.title}</p>
                  <p className="text-sm text-muted mt-1">{group.featured.authors.join(", ")}</p>
                  {group.featured.url && (
                    <a
                      href={group.featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-caption text-accent underline underline-offset-2 mt-2"
                    >
                      {group.featured.doi ? `doi.org/${group.featured.doi}` : "View source"}
                    </a>
                  )}
                </div>
              </article>

              {/* Compact rows */}
              {group.compact.length > 0 && (
                <ul className="mt-6 divide-y divide-line">
                  {group.compact.map((p) => (
                    <li key={p.id} className="grid grid-cols-1 md:grid-cols-[6rem_1fr] gap-x-6 gap-y-1 py-3">
                      <span className={cx("text-caption pt-0.5")}>{p.year ?? "—"}</span>
                      <div>
                        <p className="text-sm text-charcoal leading-snug">{p.title}</p>
                        <p className="text-caption mt-0.5">{p.journal ?? "—"}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-x-10 gap-y-3 mt-14 border-t border-line pt-8">
            <Link href="/publications" className="inline-flex items-center gap-2 text-eyebrow text-accent group">
              All 42 publications
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </Link>
            <Link href="/research" className="inline-flex items-center gap-2 text-eyebrow text-accent group">
              Research themes
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
