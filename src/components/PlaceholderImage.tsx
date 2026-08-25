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
 * "photograph" tone: a warm, borderless duotone field with a soft
 * vignette and a contact-sheet frame number — reads as an image that
 * bleeds off the edge, the way a photograph does.
 *
 * "technical" tone: a bold-lined blueprint grid inside a drawn ink
 * border with registration crosshairs — reads as a plate from a
 * drawing set, not a photograph.
 *
 * This is intentionally not a gray box with an icon — the placeholder
 * itself carries the site's visual register (and the engineering /
 * photography distinction) until real images land.
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
  const warmth = rand() > 0.55;
  const isTechnical = tone === "technical";

  const stopA = isTechnical ? "#e4e0d2" : warmth ? "#332d22" : "#211f1a";
  const stopB = isTechnical ? "#f4f2ea" : warmth ? "#a3854f" : "#4c493f";

  const uid = `ph-${seed.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <div
      className={`relative overflow-hidden bg-paper-dim ${
        isTechnical ? "border-[1.5px] border-ink/70" : ""
      } ${className}`}
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
                stroke="#16150f"
                strokeOpacity={0.28}
                strokeWidth="1"
              />
            </pattern>
          )}
          {!isTechnical && (
            <radialGradient id={`${uid}-vignette`} cx="50%" cy="42%" r="75%">
              <stop offset="55%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.32" />
            </radialGradient>
          )}
        </defs>
        <rect width="400" height="500" fill={`url(#${uid})`} />
        {isTechnical && <rect width="400" height="500" fill={`url(#${uid}-grid)`} />}
        {isTechnical && (
          <rect
            x="8"
            y="8"
            width="384"
            height="484"
            fill="none"
            stroke="#16150f"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        )}
        {!isTechnical && <rect width="400" height="500" fill={`url(#${uid}-vignette)`} />}
      </svg>

      {isTechnical && (
        <>
          <span className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-ink/55" />
          <span className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-ink/55" />
          <span className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-ink/55" />
          <span className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-ink/55" />
        </>
      )}

      {frame && (
        <span
          className={`absolute top-3 right-3 text-index ${
            isTechnical ? "text-ink/60" : "text-paper/75"
          }`}
        >
          {frame}
        </span>
      )}

      {label && (
        <span
          className={`absolute bottom-3 left-3 text-eyebrow ${
            isTechnical ? "text-ink/65" : "text-paper/85"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
