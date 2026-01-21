// JSON-LD Schema Markup for SEO

import type { Location } from "@/lib/constants/locations";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";
import { SERVICES_FOR_SEO } from "@/lib/constants/locations";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://laundryandlinen.com";

// LocalBusiness Schema
export function generateLocalBusinessSchema(location?: Location) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    description: "Professional laundry pickup and delivery service in Phoenix Metro. Wash & fold, dry cleaning, and commercial laundry solutions.",
    url: BASE_URL,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: location?.name || "Phoenix",
      addressRegion: "AZ",
      addressCountry: "US",
    },
    geo: location ? {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    } : {
      "@type": "GeoCoordinates",
      latitude: 33.4484,
      longitude: -112.0740,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 33.4484,
        longitude: -112.0740,
      },
      geoRadius: "50000", // 50km radius
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      // Add social media URLs when available
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Laundry Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wash & Fold",
            description: "Professional wash and fold laundry service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dry Cleaning",
            description: "Expert dry cleaning for delicate garments",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bedding Cleaning",
            description: "Professional bedding and linen cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Laundry",
            description: "Commercial laundry services for businesses",
          },
        },
      ],
    },
  };

  return schema;
}

// Service Schema
export function generateServiceSchema(location: Location, serviceSlug: string) {
  const service = SERVICES_FOR_SEO.find((s) => s.slug === serviceSlug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${location.name}`,
    description: `${service.description} in ${location.name}, Arizona. Free pickup and delivery available.`,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "State",
        name: "Arizona",
      },
    },
    serviceType: service.name,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
      },
    },
  };
}

// BreadcrumbList Schema
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

// FAQ Schema
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// WebPage Schema
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: `${BASE_URL}${url}`,
    isPartOf: {
      "@type": "WebSite",
      name: BUSINESS_INFO.name,
      url: BASE_URL,
    },
  };
}

// Combined schema for city pages
export function generateCityPageSchema(location: Location) {
  return [
    generateLocalBusinessSchema(location),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Service Areas", url: "/areas" },
      { name: location.name, url: `/${location.slug}` },
    ]),
  ];
}

// Combined schema for city+service pages
export function generateCityServicePageSchema(
  location: Location,
  serviceSlug: string,
  faqs: { question: string; answer: string }[]
) {
  const service = SERVICES_FOR_SEO.find((s) => s.slug === serviceSlug);

  return [
    generateLocalBusinessSchema(location),
    generateServiceSchema(location, serviceSlug),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: location.name, url: `/${location.slug}` },
      { name: service?.shortName || "Service", url: `/${location.slug}/${serviceSlug}` },
    ]),
    generateFAQSchema(faqs),
  ];
}
