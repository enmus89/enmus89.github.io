"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";

const links = [
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/photography", label: "Photography" },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Sheet + scrim are rendered as SIBLINGS of <header>, not nested inside
  // it — a backdrop-filter/blur ancestor establishes a new containing
  // block for any fixed-position descendant, which would otherwise
  // silently collapse the sheet's height. Keeping them out of the glass
  // header sidesteps that entirely.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className="glass fixed top-0 inset-x-0 z-50 border-b border-line">
        <div className="container-editorial flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="text-[0.9375rem] font-semibold tracking-[-0.01em]">
            Enea Mustafaraj
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cx(
                  "px-3 py-1.5 rounded-full text-[0.875rem] font-medium tracking-[-0.005em] transition-colors",
                  isActive(l.href)
                    ? "bg-ink/[0.06] text-ink"
                    : "text-charcoal hover:text-ink"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-pill ml-3 !text-[0.875rem] !py-1.5">
              Contact
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden text-[0.875rem] font-medium text-accent"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Scrim */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={cx(
          "lg:hidden fixed inset-0 z-50 bg-black/40 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Bottom sheet */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cx(
          "lg:hidden fixed inset-x-0 bottom-0 z-50 glass rounded-t-[20px] shadow-[var(--shadow-lift)] transition-transform duration-500 ease-[var(--ease-spring)] max-h-[80vh] flex flex-col",
          open ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="mx-auto mt-2.5 h-1 w-9 rounded-full bg-line-strong shrink-0" />
        <div className="flex items-center justify-between px-5 pt-3 pb-1 shrink-0">
          <span className="text-[0.9375rem] font-semibold">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-[0.875rem] font-medium text-accent"
          >
            Close
          </button>
        </div>
        <nav className="overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))] px-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cx(
                "flex items-center justify-between px-4 py-3.5 mx-1 rounded-[12px] text-[1.0625rem] font-medium tracking-[-0.01em] active:bg-ink/[0.05] transition-colors",
                isActive(l.href) ? "text-accent" : "text-ink"
              )}
            >
              {l.label}
              <span className="text-muted text-[1rem]">›</span>
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-3.5 mx-1 rounded-[12px] text-[1.0625rem] font-medium tracking-[-0.01em] text-accent active:bg-ink/[0.05] transition-colors"
          >
            Contact
            <span className="text-muted text-[1rem]">›</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
