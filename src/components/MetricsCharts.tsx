import Reveal from "@/components/Reveal";
import { publicationsByYear, publicationsByArea, publicationsByType, type ChartDatum } from "@/data/chart-stats";

/**
 * Three single-series horizontal meter-charts built from the real
 * publication record (src/data/chart-stats.ts derives counts directly from
 * src/data/publications.ts, so they can't drift). One hue throughout —
 * the site's existing accent blue — never a multi-hue/rainbow palette,
 * since each chart plots one series. Direct value labels stand in for an
 * axis; native `title` attributes give a hover value on the bar itself.
 */

function Chart({ title, data, delay = 0 }: { title: string; data: ChartDatum[]; delay?: number }) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <Reveal delay={delay}>
      <div className="rounded-[var(--radius-md)] bg-blue-tint p-6 md:p-7">
        <p className="text-eyebrow text-muted mb-5">{title}</p>
        <div className="space-y-2.5">
          {data.map((d) => {
            const pct = Math.max((d.value / max) * 100, 6);
            return (
              <div key={d.label} className="flex items-center gap-3">
                <span className="text-caption w-[9.5rem] shrink-0 truncate" title={d.label}>
                  {d.label}
                </span>
                <span className="flex-1 h-2.5 rounded-full bg-blue-track overflow-hidden">
                  <span
                    className="block h-full rounded-full bg-accent"
                    style={{ width: `${pct}%` }}
                    title={`${d.label}: ${d.value}`}
                  />
                </span>
                <span className="text-caption w-6 text-right tabular-nums">{d.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

export default function MetricsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
      <Chart title="Publications by Year" data={publicationsByYear} delay={0} />
      <Chart title="Publications by Area" data={publicationsByArea} delay={0.05} />
      <Chart title="Publications by Type" data={publicationsByType} delay={0.1} />
    </div>
  );
}
