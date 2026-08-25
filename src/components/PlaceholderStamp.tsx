/**
 * Borrows the visual language of a drawing-set stamp ("NOT FOR
 * CONSTRUCTION") to flag placeholder content honestly without
 * resorting to an apologetic gray box or a "TODO" comment.
 */
export default function PlaceholderStamp({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-line-strong px-2 py-1 text-index uppercase tracking-[0.1em] text-muted ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full border border-muted" />
      Placeholder content
    </span>
  );
}
