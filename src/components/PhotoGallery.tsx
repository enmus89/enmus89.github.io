"use client";

import { useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import ImageViewer, { type ViewerImage } from "./ImageViewer";

const aspects = ["4/5", "3/4", "4/3", "1/1", "3/4", "4/5"];

export default function PhotoGallery({
  slug,
  title,
  count,
}: {
  slug: string;
  title: string;
  count: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images: ViewerImage[] = Array.from({ length: count }, (_, i) => ({
    seed: `${slug}-${i}`,
    frame: `${String(i + 1).padStart(2, "0")}`,
    caption: `${title} — frame ${i + 1} of ${count}`,
  }));

  return (
    <>
      {/* CSS multi-column masonry: varied aspect ratios create an
          asymmetric rhythm without the dead-space risk of spanning
          cells inside a fixed grid. */}
      <div className="columns-2 md:columns-3 gap-4 md:gap-6">
        {images.map((img, i) => (
          <button
            key={img.seed}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="block w-full text-left mb-4 md:mb-6 break-inside-avoid"
            aria-label={`Open ${img.caption} in full screen`}
          >
            <PlaceholderImage
              seed={img.seed}
              tone="photograph"
              aspect={aspects[i % aspects.length]}
              frame={img.frame}
              className="w-full transition-opacity hover:opacity-90"
            />
          </button>
        ))}
      </div>

      <ImageViewer
        images={images}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  );
}
