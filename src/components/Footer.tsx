import Link from "next/link";

const columns = [
  {
    heading: "Engineering",
    links: [
      { href: "/research", label: "Research" },
      { href: "/projects", label: "Projects" },
      { href: "/publications", label: "Publications" },
      { href: "/teaching", label: "Teaching" },
    ],
  },
  {
    heading: "Photography",
    links: [
      { href: "/photography", label: "Photography" },
      { href: "/field-notes", label: "Field Notes" },
    ],
  },
  {
    heading: "Profile",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="container-editorial py-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        <div className="col-span-2 md:col-span-1">
          <p className="text-display-3" style={{ fontSize: "1.4rem" }}>
            Enea Mustafaraj
          </p>
          <p className="text-caption mt-3 max-w-[24ch]">
            Civil Engineer · Researcher · Educator · Photographer
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-eyebrow text-muted mb-4">{col.heading}</p>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-charcoal hover:text-ink transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-editorial py-6 border-t border-line flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between text-caption">
        <span>&copy; {new Date().getFullYear()} Enea Mustafaraj. All rights reserved.</span>
        <span>Designed with restraint.</span>
      </div>
    </footer>
  );
}
