import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  espresso,
  slow,
  beyond,
  curate,
  tea,
  kitchenDaily,
  fridayBreakfast,
} from "@/data/menu";

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

const SITE_URL = "https://tumbohcoffeebar.store";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tumboh Coffee Bar — Kuala Terengganu | Brewed to Grow",
  description:
    "A coffee bar and kitchen in Bukit Besar, Kuala Terengganu. Espresso, pour-over (tuang-lalu), curated mocktails and Dapor Tumboh mains from 1pm — plus Friday breakfast, 8am to noon. Brewed to grow, designed to flow.",
  keywords: [
    "Tumboh Coffee Bar",
    "coffee Kuala Terengganu",
    "cafe Bukit Besar",
    "specialty coffee Terengganu",
    "tuang-lalu pour over",
    "matcha Kuala Terengganu",
    "Dapor Tumboh",
    "brunch Kuala Terengganu",
    "Friday breakfast Terengganu",
    "mocktail Kuala Terengganu",
  ],
  openGraph: {
    title: "Tumboh Coffee Bar — Kuala Terengganu",
    description:
      "Espresso, pour-over, curated mocktails and a full kitchen in Bukit Besar, Kuala Terengganu. Brewed to grow, designed to flow.",
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

const menuSection = (name: string, items: { name: string; note: string; price: string }[]) => ({
  "@type": "MenuSection",
  name,
  hasMenuItem: items.map((it) => ({
    "@type": "MenuItem",
    name: it.name,
    description: it.note || undefined,
    offers: {
      "@type": "Offer",
      price: it.price.replace("–", "-"),
      priceCurrency: "MYR",
    },
  })),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Tumboh Coffee Bar",
  alternateName: "Dapor Tumboh",
  description:
    "Specialty coffee bar and kitchen in Kuala Terengganu serving espresso, pour-over, curated mocktails, tea and a full food menu from 1pm, with a Friday breakfast service.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/opengraph-image`,
  servesCuisine: ["Coffee", "Western", "Malaysian"],
  priceRange: "RM7–RM60",
  telephone: "+60 12-984 3228",
  email: "tumboh.cb@gmail.com",
  sameAs: ["https://www.facebook.com/p/Tumboh-Coffee-Joint-100083148581329/"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Ibrahim, Bukit Besar",
    addressLocality: "Kuala Terengganu",
    addressRegion: "Terengganu",
    addressCountry: "MY",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  hasMenu: {
    "@type": "Menu",
    name: "Tumboh Coffee Bar & Dapor Tumboh",
    hasMenuSection: [
      menuSection("Espresso", espresso),
      menuSection("Slow & Cold", slow),
      menuSection("Beyond Coffee", beyond),
      menuSection("Curate", curate),
      menuSection("Tea", tea),
      ...kitchenDaily.map((g) => menuSection(g.label, g.items)),
      {
        ...menuSection("Friday Breakfast", fridayBreakfast),
        description: "Served Fridays only, 08:00 – 12:00.",
      },
    ],
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
