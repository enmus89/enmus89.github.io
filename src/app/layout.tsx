import type { Metadata } from "next";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/inter/wght.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://eneamustafaraj.com";
const siteTitle = "Enea Mustafaraj — Engineer, Researcher, Educator, Photographer";
const siteDescription =
  "Civil engineer and researcher working across structural engineering and construction materials, and a photographer working across architecture, travel, street and landscape.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Enea Mustafaraj",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Enea Mustafaraj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
