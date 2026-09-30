import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap"
});

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-condensed",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexbuild.ph"),
  title: {
    default: "Apex Build Philippines | PCAB General Contractor in Cebu",
    template: "%s | Apex Build Philippines"
  },
  description:
    "Apex Build Philippines is a PCAB-licensed general contractor in Cebu delivering residential, commercial, renovation, and project management services aligned with DPWH and National Building Code standards.",
  keywords: [
    "general contractor Cebu",
    "PCAB licensed contractor",
    "construction company Philippines",
    "residential construction Cebu",
    "commercial building Cebu"
  ],
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Apex Build Philippines",
    title: "Apex Build Philippines | PCAB General Contractor in Cebu",
    description:
      "PCAB-licensed construction and project management for homes, commercial buildings, and renovations across Cebu.",
    url: "https://apexbuild.ph"
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Apex Build Philippines",
  url: "https://apexbuild.ph",
  telephone: "+63-32-XXX-XXXX",
  email: "info@apexbuild.ph",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Street Address]",
    addressLocality: "Cebu City",
    addressRegion: "Cebu",
    addressCountry: "PH"
  },
  areaServed: { "@type": "AdministrativeArea", name: "Cebu" },
  openingHours: "Mo-Sa 08:00-17:00"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-PH" className={`${barlow.variable} ${condensed.variable}`} suppressHydrationWarning>
      <body className={barlow.className} suppressHydrationWarning>
        <a className="skip_link" href="#main_area">
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
