import { seededRandom } from "@/lib/utils";

type Props = {
  seed: string;
  tone?: "photograph" | "technical";
  label?: string;
  frame?: string;
  aspect?: string;
  className?: string;
};

/**
 * Considered placeholder art standing in for real photography.
 *
 * "photograph" tone: a cool, borderless duotone field with a soft
 * vignette — reads as a product-style studio render.
 *
 * "technical" tone: a pale systemGray6 card with a faint grid — reads
 * as engineering documentation without borrowing photographic imagery.
 *
 * Both sit on a continuous-radius card with a soft floating shadow —
 * this is intentionally not a gray box with an icon.
 */
export default function PlaceholderImage({
  seed,
  tone = "photograph",
  label,
  frame,
  aspect = "4/5",
  className = "",
}: Props) {
  const rand = seededRandom(seed);
  const angle = Math.round(rand() * 360);
  const spread = 55 + Math.round(rand() * 25);
  const cool = rand() > 0.55;
  const isTechnical = tone === "technical";

  const stopA = isTechnical ? "#eef0f2" : cool ? "#1c2128" : "#2a2c30";
  const stopB = isTechnical ? "#fbfbfd" : cool ? "#5c6b7a" : "#6e6e73";

  const uid = `ph-${seed.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <div
      className={`relative overflow-hidden bg-paper-dim rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)] ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={uid} gradientTransform={`rotate(${angle} 0.5 0.5)`}>
            <stop offset="0%" stopColor={stopA} />
            <stop offset={`${spread}%`} stopColor={stopB} />
            <stop offset="100%" stopColor={stopA} />
          </linearGradient>
          {isTechnical && (
            <pattern id={`${uid}-grid`} width="25" height="25" patternUnits="userSpaceOnUse">
              <path
                d="M 25 0 L 0 0 0 25"
                fill="none"
                stroke="#1d1d1f"
                strokeOpacity={0.08}
                strokeWidth="1"
              />
            </pattern>
          )}
          {!isTechnical && (
            <radialGradient id={`${uid}-vignette`} cx="50%" cy="40%" r="78%">
              <stop offset="50%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.28" />
            </radialGradient>
          )}
        </defs>
        <rect width="400" height="500" fill={`url(#${uid})`} />
        {isTechnical && <rect width="400" height="500" fill={`url(#${uid}-grid)`} />}
        {!isTechnical && <rect width="400" height="500" fill={`url(#${uid}-vignette)`} />}
      </svg>

      {frame && (
        <span
          className={`absolute top-3 right-3 rounded-full px-2 py-0.5 text-[0.6875rem] font-medium tabular-nums ${
            isTechnical ? "bg-ink/[0.06] text-ink/70" : "glass-dark text-white/90"
          }`}
        >
          {frame}
        </span>
      )}

      {label && (
        <span
          className={`absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[0.6875rem] font-medium ${
            isTechnical ? "bg-ink/[0.06] text-ink/70" : "glass-dark text-white/90"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
