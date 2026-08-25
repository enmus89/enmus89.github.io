export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Consistent "drawing plate" corner mark for technical-tone placeholders
 * (e.g. "P.03"), so the same corner slot that shows a photographic frame
 * number elsewhere never gets a project year in its place — those are
 * two different kinds of information and were getting conflated.
 */
export function plateCode(index: number) {
  return `P.${String(index + 1).padStart(2, "0")}`;
}

/** Deterministic pseudo-random generator seeded by a string.
 *  Used only for placeholder art so tones stay stable across renders. */
export function seededRandom(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}
