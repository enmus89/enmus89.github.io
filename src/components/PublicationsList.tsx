"use client";

import { useMemo, useState } from "react";
import { publications, publicationCategories, publicationTypes } from "@/data/publications";
import PlaceholderStamp from "./PlaceholderStamp";
import { cx } from "@/lib/utils";

export default function PublicationsList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | "All">("All");
  const [type, setType] = useState<string | "All">("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (type !== "All" && p.type !== type) return false;
      if (q && !`${p.title} ${p.authors.join(" ")} ${p.journal ?? ""}`.toLowerCase().includes(q))
        return false;
      return true;
    });
  }, [query, category, type]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-line pb-8">
        <label className="block w-full md:max-w-sm">
          <span className="text-eyebrow text-muted">Search</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Title, author, journal…"
            className="mt-2 w-full border-b border-line-strong bg-transparent py-2 text-base focus:outline-none focus:border-ink"
          />
        </label>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <div>
            <span className="text-eyebrow text-muted block mb-2">Area</span>
            <div className="flex flex-wrap gap-2">
              {["All", ...publicationCategories].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={cx(
                    "text-xs px-2.5 py-1 border transition-colors",
                    category === c
                      ? "bg-ink text-paper border-ink"
                      : "border-line-strong text-charcoal hover:border-ink"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-eyebrow text-muted block mb-2">Type</span>
            <div className="flex flex-wrap gap-2">
              {["All", ...publicationTypes].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={cx(
                    "text-xs px-2.5 py-1 border transition-colors",
                    type === t
                      ? "bg-ink text-paper border-ink"
                      : "border-line-strong text-charcoal hover:border-ink"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-caption mt-6">
        {filtered.length} of {publications.length} publications
      </p>

      <ol className="mt-4">
        {filtered.map((p, i) => {
          const open = openId === p.id;
          return (
            <li key={p.id} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpenId(open ? null : p.id)}
                aria-expanded={open}
                className="w-full text-left grid grid-cols-1 sm:grid-cols-[3rem_1fr_auto] gap-x-4 gap-y-2 py-6 items-baseline"
              >
                <span className="text-index">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-base font-medium leading-snug">{p.title}</p>
                  <p className="text-sm text-muted mt-1">
                    {p.authors.join(", ")}
                    {p.journal ? ` — ${p.journal}` : ""}
                  </p>
                </div>
                <span className="text-caption whitespace-nowrap">
                  {p.year ?? "—"} · {open ? "Hide" : "Abstract"}
                </span>
              </button>

              {open && (
                <div className="pb-6 sm:pl-16 -mt-2">
                  {p.abstract && (
                    <p className="text-sm text-charcoal leading-relaxed max-w-2xl">{p.abstract}</p>
                  )}
                  <div className="flex items-center gap-4 mt-4">
                    <PlaceholderStamp />
                    <span className="text-caption">DOI — pending</span>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {filtered.length === 0 && (
        <p className="text-charcoal py-12">No publications match the current filters.</p>
      )}
    </div>
  );
}
