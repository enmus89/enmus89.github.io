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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cx(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-500",
        // Note: backdrop-blur must never apply while `open` — a filter/
        // backdrop-filter on this fixed-position header creates a new
        // containing block for the fixed-position mobile menu panel
        // nested inside it, collapsing that panel's height to 0.
        open
          ? "bg-paper border-b border-line"
          : scrolled
            ? "bg-paper/90 backdrop-blur-sm border-b border-line"
            : "bg-transparent"
      )}
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="text-eyebrow tracking-[0.16em]"
          onClick={() => setOpen(false)}
        >
          Enea Mustafaraj
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cx(
                "text-eyebrow tracking-[0.1em] normal-case font-normal text-[0.8rem] transition-colors",
                pathname === l.href || pathname.startsWith(l.href + "/")
                  ? "text-ink"
                  : "text-charcoal hover:text-ink"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-eyebrow tracking-[0.1em] normal-case font-medium text-[0.8rem] text-ink border-b border-ink pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-eyebrow"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cx(
          "lg:hidden fixed top-16 right-0 bottom-0 left-0 bg-paper transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <nav className="container-editorial flex flex-col pt-8 pb-12 h-full overflow-y-auto">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-display-3 py-3 border-b border-line first:border-t"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="text-display-3 py-3 border-b border-line">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
