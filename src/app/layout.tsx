import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted for zero external requests, faster loads, and reliable builds.
const fraunces = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./fonts/fraunces-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/fraunces-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/fraunces-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/fraunces-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/fraunces-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/fraunces-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/fraunces-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
});

const inter = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

const SITE_URL = "https://tumboh-coffee-bar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tumboh Coffee Bar — Kuala Terengganu | Brewed to Grow",
  description:
    "A coffee bar in Bukit Besar, Kuala Terengganu. Espresso, pour-over (tuang-lalu), matcha, chocolate and soda — served slow with outdoor seating. Brewed to grow, designed to flow.",
  keywords: [
    "Tumboh Coffee Bar",
    "coffee Kuala Terengganu",
    "cafe Bukit Besar",
    "specialty coffee Terengganu",
    "tuang-lalu pour over",
    "matcha Kuala Terengganu",
  ],
  openGraph: {
    title: "Tumboh Coffee Bar — Kuala Terengganu",
    description:
      "Espresso, pour-over, matcha and soda in Bukit Besar, Kuala Terengganu. Brewed to grow, designed to flow.",
    url: SITE_URL,
    siteName: "Tumboh Coffee Bar",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tumboh Coffee Bar — Kuala Terengganu",
    description:
      "Espresso, pour-over, matcha and soda in Bukit Besar, Kuala Terengganu.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Tumboh Coffee Bar",
  description:
    "Specialty coffee bar in Kuala Terengganu serving espresso, pour-over, matcha, chocolate and soda.",
  servesCuisine: "Coffee",
  priceRange: "$$",
  telephone: "+60 12-984 3228",
  email: "tumboh.cb@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Ibrahim, Bukit Besar",
    addressLocality: "Kuala Terengganu",
    addressRegion: "Terengganu",
    addressCountry: "MY",
  },
  amenityFeature: {
    "@type": "LocationFeatureSpecification",
    name: "Outdoor seating",
    value: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
