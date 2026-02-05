// JSON-LD Schema Markup for SEO

import type { Location } from "@/lib/constants/locations";
import type { Industry } from "@/lib/constants/industries";
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
      geoRadius: "50000",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
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
      "https://www.facebook.com/laundryandlinen",
      "https://www.instagram.com/laundryandlinen",
      "https://www.yelp.com/biz/laundry-and-linen-phoenix",
      "https://www.google.com/maps/place/Laundry+and+Linen",
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
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "2.25",
            priceCurrency: "USD",
            unitText: "lb",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: "1",
              unitCode: "LBR",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dry Cleaning",
            description: "Expert dry cleaning for delicate garments",
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "7.99",
            priceCurrency: "USD",
            unitText: "item",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bedding Cleaning",
            description: "Professional bedding and linen cleaning",
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "15.99",
            priceCurrency: "USD",
            unitText: "item",
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

// Commercial Service Schema
export function generateCommercialServiceSchema(industry: Industry, location?: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: location
      ? `${industry.name} Laundry Service in ${location.name}`
      : `${industry.name} Laundry Service`,
    description: industry.description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      url: BASE_URL,
    },
    areaServed: location
      ? {
          "@type": "City",
          name: location.name,
          containedInPlace: { "@type": "State", name: "Arizona" },
        }
      : {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 33.4484,
            longitude: -112.0740,
          },
          geoRadius: "50000",
        },
    serviceType: `Commercial Laundry - ${industry.name}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: industry.pricingInfo.startingAt
        ? {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            price: industry.pricingInfo.startingAt.replace(/[^0-9.]/g, ""),
            description: industry.pricingInfo.note,
          }
        : {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: industry.pricingInfo.note,
          },
    },
  };
}

// Combined schema for commercial industry pages
export function generateCommercialPageSchema(industry: Industry) {
  return [
    generateLocalBusinessSchema(),
    generateCommercialServiceSchema(industry),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Commercial", url: "/commercial" },
      { name: industry.name, url: `/commercial/${industry.slug}` },
    ]),
    generateFAQSchema(industry.faqs),
  ];
}

// Combined schema for commercial industry+city pages
export function generateCommercialCityPageSchema(
  industry: Industry,
  location: Location,
  faqs: { question: string; answer: string }[]
) {
  return [
    generateLocalBusinessSchema(location),
    generateCommercialServiceSchema(industry, location),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Commercial", url: "/commercial" },
      { name: industry.name, url: `/commercial/${industry.slug}` },
      { name: location.name, url: `/commercial/${industry.slug}/${location.slug}` },
    ]),
    generateFAQSchema(faqs),
  ];
}

// Article/BlogPosting Schema
export function generateArticleSchema(post: {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: { name: string };
  readingTime: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    timeRequired: `PT${post.readingTime}M`,
    inLanguage: "en-US",
  };
}
