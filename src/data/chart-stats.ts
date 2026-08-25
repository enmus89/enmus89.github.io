import { publications } from "./publications";

/**
 * Chart-ready aggregates derived from the real publication record —
 * pure counts, computed here rather than hand-maintained, so they can
 * never drift out of sync with src/data/publications.ts.
 */

export type ChartDatum = { label: string; value: number };

function countBy(key: (p: (typeof publications)[number]) => string | number | null): ChartDatum[] {
  const counts = new Map<string, number>();
  for (const p of publications) {
    const k = key(p);
    if (k === null) continue;
    const label = String(k);
    counts.set(label, (counts.get(label) ?? 0) + 1);
  }
  return [...counts.entries()].map(([label, value]) => ({ label, value }));
}

export const publicationsByYear: ChartDatum[] = countBy((p) => p.year).sort(
  (a, b) => Number(a.label) - Number(b.label)
);

export const publicationsByArea: ChartDatum[] = countBy((p) => p.category).sort(
  (a, b) => b.value - a.value
);

export const publicationsByType: ChartDatum[] = countBy((p) => p.type).sort((a, b) => b.value - a.value);
