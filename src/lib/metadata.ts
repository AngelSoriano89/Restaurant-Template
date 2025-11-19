import { Metadata } from "next";
import { SITE_CONFIG, SEO_METADATA } from "./constants";

export function generateMetadata(): Metadata {
  return {
    title: {
      default: SEO_METADATA.title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SEO_METADATA.description,
    keywords: [...SEO_METADATA.keywords],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "es_EC",
      url: SITE_CONFIG.url,
      title: SEO_METADATA.title,
      description: SEO_METADATA.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO_METADATA.title,
      description: SEO_METADATA.description,
      images: ["/images/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  };
}

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/images/logo.png`,
    "@id": SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Charles Darwin",
      addressLocality: "Puerto Villamil",
      addressRegion: "Isla Isabela",
      postalCode: "200103",
      addressCountry: "EC",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.9574617,
      longitude: -90.9682749,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "17:00",
      closes: "21:30",
    },
    servesCuisine: ["Italian", "Seafood", "Pizza", "Latin American"],
    priceRange: "$$",
    acceptsReservations: true,
    menu: `${SITE_CONFIG.url}/#menu`,
  };
}
