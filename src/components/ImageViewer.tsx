"use client";

import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import PlaceholderImage from "./PlaceholderImage";

export type ViewerImage = {
  seed: string;
  frame: string;
  caption: string;
};

type Props = {
  images: ViewerImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function ImageViewer({ images, index, onClose, onNavigate }: Props) {
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (index !== null) {
      triggerRef.current = document.activeElement as HTMLElement;
    } else {
      triggerRef.current?.focus?.();
    }
  }, [index]);

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      const next = (index + delta + images.length) % images.length;
      onNavigate(next);
    },
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    if (index === null) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, go, onClose]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer — ${current.caption}`}
          className="fixed inset-0 z-[100] bg-ink text-paper flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between px-5 md:px-8 h-16 shrink-0">
            <span className="text-index text-paper/60">
              {String(index! + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="text-eyebrow text-paper/80 hover:text-paper"
              autoFocus
            >
              Close
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center px-4 pb-4 md:px-16 md:pb-10 min-h-0">
            <button
              type="button"
              onClick={() => go(-1)}
              className="hidden sm:flex absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-eyebrow text-paper/60 hover:text-paper px-3 py-2"
              aria-label="Previous image"
            >
              Prev
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.seed}
                className="h-full max-h-full w-auto max-w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <PlaceholderImage
                  seed={current.seed}
                  frame={current.frame}
                  aspect="4/5"
                  className="h-full max-h-[70vh] md:max-h-[75vh] w-auto"
                />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={() => go(1)}
              className="hidden sm:flex absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-eyebrow text-paper/60 hover:text-paper px-3 py-2"
              aria-label="Next image"
            >
              Next
            </button>
          </div>

          <div className="flex items-center justify-between px-5 md:px-8 py-5 border-t border-paper/15 sm:hidden">
            <button type="button" onClick={() => go(-1)} className="text-eyebrow text-paper/70">
              Prev
            </button>
            <p className="text-caption text-paper/70">{current.caption}</p>
            <button type="button" onClick={() => go(1)} className="text-eyebrow text-paper/70">
              Next
            </button>
          </div>

          <p className="hidden sm:block text-center text-caption text-paper/60 pb-6">
            {current.caption}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
