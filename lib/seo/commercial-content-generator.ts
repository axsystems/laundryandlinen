// Commercial SEO Content Generator for Industry pSEO Pages
// Generates unique, industry- and city-specific content

import type { Industry } from "@/lib/constants/industries";
import type { Location } from "@/lib/constants/locations";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";

// Seeded random for consistent content per combination
function seededRandom(seed: string): () => number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return () => {
    hash = (hash * 1103515245 + 12345) & 0x7fffffff;
    return hash / 0x7fffffff;
  };
}

function seededItem<T>(arr: T[], random: () => number): T {
  return arr[Math.floor(random() * arr.length)];
}

// Generate industry page title
export function generateCommercialPageTitle(industry: Industry, location?: Location): string {
  if (location) {
    return `${industry.name} Laundry Service in ${location.name}, AZ | ${BUSINESS_INFO.name}`;
  }
  return `${industry.name} Laundry Service in Arizona | ${BUSINESS_INFO.name}`;
}

// Generate industry page meta description
export function generateCommercialMetaDescription(industry: Industry, location?: Location): string {
  if (location) {
    const starting = industry.pricingInfo.startingAt
      ? `Starting at ${industry.pricingInfo.startingAt}. `
      : "";
    return `Professional ${industry.shortName.toLowerCase()} laundry service in ${location.name}, AZ. ${starting}Free pickup & delivery, fast turnaround. Call ${BUSINESS_INFO.phone}.`;
  }
  return industry.metaDescription;
}

// Generate city-specific intro content for industry+city pages
export function generateIndustryCityContent(industry: Industry, location: Location) {
  const random = seededRandom(`${industry.slug}-${location.slug}`);

  // Pick a city intro template
  const introTemplate = seededItem(industry.cityIntroTemplates, random);
  const intro = introTemplate.replace(/{city}/g, location.name);

  // Generate city-specific "why need service" text
  const whyNeedTemplates = [
    `${location.name} businesses in the ${industry.shortName.toLowerCase()} industry face unique laundry challenges. ${industry.whyNeedService}`,
    `For ${industry.shortName.toLowerCase()} businesses in ${location.name}, professional laundry service isn\u2019t a luxury\u2014it\u2019s a necessity. ${industry.whyNeedService}`,
    `Operating a ${industry.shortName.toLowerCase()} business in ${location.name} means high standards for cleanliness and presentation. ${industry.whyNeedService}`,
    `${location.name}\u2019s competitive ${industry.shortName.toLowerCase()} market demands impeccable standards. ${industry.whyNeedService}`,
  ];
  const whyNeedText = seededItem(whyNeedTemplates, random);

  // Generate CTA text
  const ctaTemplates = [
    `Ready to streamline laundry for your ${location.name} ${industry.shortName.toLowerCase()} business? Get a custom quote today.`,
    `Join ${location.name}\u2019s top ${industry.shortName.toLowerCase()} businesses that trust ${BUSINESS_INFO.name} for their laundry needs.`,
    `Discover why ${location.name} ${industry.shortName.toLowerCase()} businesses choose ${BUSINESS_INFO.name}. Request your free consultation now.`,
    `Stop worrying about laundry and focus on your ${location.name} business. Get started with ${BUSINESS_INFO.name} today.`,
  ];
  const cta = seededItem(ctaTemplates, random);

  return {
    intro,
    whyNeedText,
    cta,
  };
}

// Generate commercial FAQs (industry-specific, optionally city-customized)
export function generateCommercialFAQs(
  industry: Industry,
  location?: Location
): { question: string; answer: string }[] {
  if (location) {
    const neighborhoodText = location.neighborhoodsServed
      ? location.neighborhoodsServed.slice(0, 4).join(", ")
      : "all areas";
    const zipText = location.zipCodes.slice(0, 3).join(", ");
    const pricingModel = industry.pricingInfo.model.toLowerCase();
    const startingText = industry.pricingInfo.startingAt
      ? `, starting at ${industry.pricingInfo.startingAt}`
      : "";

    const cityFaqs: { question: string; answer: string }[] = [
      {
        question: `Do you offer ${industry.shortName.toLowerCase()} laundry service in ${location.name}?`,
        answer: `Yes! ${BUSINESS_INFO.name} provides professional ${industry.shortName.toLowerCase()} laundry service throughout ${location.name} and the ${location.region} area. We offer free pickup and delivery on a schedule that works for your business.`,
      },
      {
        question: `What is the turnaround time for ${industry.shortName.toLowerCase()} laundry in ${location.name}?`,
        answer: `Standard turnaround for ${industry.shortName.toLowerCase()} laundry in ${location.name} is 24-48 hours. Same-day rush service is available for urgent needs. We work around your business schedule.`,
      },
      {
        question: `How much does ${industry.shortName.toLowerCase()} laundry cost in ${location.name}?`,
        answer: `Our ${industry.shortName.toLowerCase()} laundry service uses ${pricingModel}${startingText}. ${industry.pricingInfo.note} Contact us for a custom quote for your ${location.name} business.`,
      },
      ...industry.faqs.slice(0, 3),
      {
        question: `What areas of ${location.name} do you serve for ${industry.shortName.toLowerCase()} laundry?`,
        answer: `We serve all of ${location.name} including ${neighborhoodText}. Our service covers ZIP codes ${zipText} and more. Call ${BUSINESS_INFO.phone} to confirm service in your area.`,
      },
      {
        question: `Do you offer contracts for ${industry.shortName.toLowerCase()} laundry in ${location.name}?`,
        answer: `We offer flexible arrangements with no long-term contracts required. Many ${location.name} ${industry.shortName.toLowerCase()} businesses choose recurring service for the best rates, but you can also use us on-demand. Volume commitments earn additional discounts.`,
      },
    ];
    return cityFaqs.slice(0, 8);
  }

  return industry.faqs.slice(0, 8);
}
