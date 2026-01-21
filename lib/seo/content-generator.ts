// SEO Content Generator for pSEO Pages
// Generates unique, location-specific content

import type { Location } from "@/lib/constants/locations";
import { SERVICES_FOR_SEO, getNearbyCities } from "@/lib/constants/locations";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";

// Content variations to avoid duplicate content issues
const INTRO_TEMPLATES = [
  "Looking for professional laundry service in {city}? {brand} provides premium pickup and delivery laundry services throughout {city} and the surrounding {region} area.",
  "{brand} is proud to serve {city} residents with convenient, high-quality laundry pickup and delivery. We handle everything from everyday wash & fold to specialized dry cleaning.",
  "Tired of spending your weekends doing laundry? {brand} brings professional laundry service right to your door in {city}. Schedule a pickup and get your time back.",
  "The {city} area deserves top-quality laundry service, and that's exactly what {brand} delivers. From {neighborhoods}, we provide reliable pickup and delivery throughout your community.",
  "Welcome to {brand}'s {city} laundry service! We're your local experts in wash & fold, dry cleaning, and commercial laundry solutions for {region} residents and businesses.",
];

const SERVICE_INTROS = {
  "laundry-pickup-delivery": [
    "Our {city} laundry pickup and delivery service makes clean clothes effortless. We come to you, collect your laundry, professionally clean everything, and deliver it back fresh and folded.",
    "Experience the convenience of doorstep laundry service in {city}. {brand} picks up your dirty laundry and returns it clean, folded, and ready to wear.",
  ],
  "wash-and-fold": [
    "Our {city} wash and fold service starts at just $2.25 per pound. We sort, wash, dry, and neatly fold all your everyday laundry with care.",
    "{city} residents love our wash and fold service for its convenience and quality. Drop off or schedule a pickup—we'll have your clothes fresh within 24-48 hours.",
  ],
  "dry-cleaning": [
    "Trust {brand} for professional dry cleaning in {city}. We handle suits, dresses, delicates, and specialty items with expert care and eco-friendly solvents.",
    "Looking for quality dry cleaning near {city}? Our professional service includes pickup, expert cleaning, pressing, and delivery—all at competitive prices.",
  ],
  "commercial-laundry": [
    "{city} businesses trust {brand} for reliable commercial laundry services. We serve hotels, restaurants, gyms, spas, and property managers with volume-based pricing.",
    "Need commercial laundry service in {city}? We offer custom solutions for businesses of all sizes, with flexible scheduling and dedicated account management.",
  ],
  "bedding-cleaning": [
    "Keep your {city} home fresh with our professional bedding and linen cleaning service. We clean comforters, duvets, sheets, pillows, and more.",
    "Our {city} bedding cleaning service ensures your linens are sanitized, fresh, and fluffy. Perfect for seasonal cleaning or regular maintenance.",
  ],
  "airbnb-laundry": [
    "{city} Airbnb hosts trust {brand} for fast turnaround laundry service. We ensure your guests always arrive to fresh, hotel-quality linens.",
    "Running a vacation rental in {city}? Our Airbnb laundry service provides quick turnaround, pickup/delivery, and consistent quality for every guest.",
  ],
  "hotel-laundry": [
    "{city} hotels partner with {brand} for reliable, high-volume laundry service. We maintain the quality your guests expect with flexible scheduling.",
    "Professional hotel laundry service in {city} and {region}. We handle sheets, towels, robes, and restaurant linens with hospitality-grade care.",
  ],
  "restaurant-laundry": [
    "{city} restaurants choose {brand} for spotless tablecloths, napkins, and chef uniforms. We understand the demands of the hospitality industry.",
    "Keep your {city} restaurant looking its best with our commercial laundry service. Daily pickup available for high-volume needs.",
  ],
};

const WHY_CHOOSE_TEMPLATES = [
  "Why {city} residents choose {brand}:",
  "Here's what makes {brand} the top choice for laundry in {city}:",
  "{city} families and businesses trust {brand} because:",
];

const BENEFITS = [
  "Free pickup and delivery on orders over $35",
  "24-48 hour standard turnaround",
  "Same-day rush service available",
  "Eco-friendly, premium detergents",
  "Expert stain treatment",
  "Satisfaction guaranteed",
  "No contracts or commitments",
  "Easy online scheduling",
  "Real-time order tracking",
  "Dedicated customer support",
];

const CTA_TEMPLATES = [
  "Ready to experience the best laundry service in {city}? Schedule your free pickup today!",
  "Join thousands of happy {city} customers. Book your first pickup and get 20% off with code FRESH20.",
  "Stop wasting weekends on laundry. {city} residents can schedule a pickup in under 2 minutes.",
  "Discover why {city} loves {brand}. Schedule your pickup now and see the difference.",
];

// Helper function to get random item from array
function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Seeded random for consistent content per location
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

// Generate city page content
export function generateCityPageContent(location: Location) {
  const random = seededRandom(location.slug);

  // Use unique intro if available, otherwise fall back to template
  const intro = location.uniqueIntro || (() => {
    const neighborhoods = location.neighborhoodsServed?.slice(0, 4).join(", ") || location.name;
    return seededItem(INTRO_TEMPLATES, random)
      .replace(/{city}/g, location.name)
      .replace(/{brand}/g, BUSINESS_INFO.name)
      .replace(/{region}/g, location.region)
      .replace(/{neighborhoods}/g, neighborhoods);
  })();

  const whyChoose = location.whyLaundryService
    ? `Why ${location.name} Residents Need Laundry Service`
    : seededItem(WHY_CHOOSE_TEMPLATES, random)
        .replace(/{city}/g, location.name)
        .replace(/{brand}/g, BUSINESS_INFO.name);

  const cta = seededItem(CTA_TEMPLATES, random)
    .replace(/{city}/g, location.name)
    .replace(/{brand}/g, BUSINESS_INFO.name);

  // Use whyLaundryService as first benefit if available, then add standard benefits
  const shuffledBenefits = location.whyLaundryService
    ? [location.whyLaundryService, ...[...BENEFITS].sort(() => random() - 0.5).slice(0, 5)]
    : [...BENEFITS].sort(() => random() - 0.5).slice(0, 6);

  const nearbyCities = getNearbyCities(location.slug, 5);

  return {
    intro,
    whyChoose,
    benefits: shuffledBenefits,
    cta,
    nearbyCities,
    services: SERVICES_FOR_SEO,
    // New unique content fields
    demographics: location.demographics,
    localBusinesses: location.localBusinesses,
    funFact: location.funFact,
  };
}

// Generate city+service page content
export function generateCityServiceContent(location: Location, serviceSlug: string) {
  const random = seededRandom(`${location.slug}-${serviceSlug}`);
  const service = SERVICES_FOR_SEO.find((s) => s.slug === serviceSlug);

  if (!service) return null;

  const serviceIntros = SERVICE_INTROS[serviceSlug as keyof typeof SERVICE_INTROS] || SERVICE_INTROS["laundry-pickup-delivery"];

  const intro = seededItem(serviceIntros, random)
    .replace(/{city}/g, location.name)
    .replace(/{brand}/g, BUSINESS_INFO.name)
    .replace(/{region}/g, location.region);

  const cta = seededItem(CTA_TEMPLATES, random)
    .replace(/{city}/g, location.name)
    .replace(/{brand}/g, BUSINESS_INFO.name);

  const shuffledBenefits = [...BENEFITS].sort(() => random() - 0.5).slice(0, 6);

  const nearbyCities = getNearbyCities(location.slug, 4);
  const otherServices = SERVICES_FOR_SEO.filter((s) => s.slug !== serviceSlug).slice(0, 4);

  return {
    service,
    intro,
    benefits: shuffledBenefits,
    cta,
    nearbyCities,
    otherServices,
  };
}

// Generate meta description
export function generateMetaDescription(location: Location, serviceSlug?: string): string {
  if (serviceSlug) {
    const service = SERVICES_FOR_SEO.find((s) => s.slug === serviceSlug);
    return `Professional ${service?.shortName || "laundry"} service in ${location.name}, AZ. Free pickup & delivery, 24-48hr turnaround. Serving ${location.region}. Schedule online today!`;
  }

  return `Professional laundry pickup & delivery in ${location.name}, AZ. Wash & fold, dry cleaning, commercial service. Free delivery on $35+. Serving all of ${location.region}.`;
}

// Generate page title
export function generatePageTitle(location: Location, serviceSlug?: string): string {
  if (serviceSlug) {
    const service = SERVICES_FOR_SEO.find((s) => s.slug === serviceSlug);
    return `${service?.shortName || "Laundry Service"} in ${location.name}, AZ | Pickup & Delivery`;
  }

  return `Laundry Service in ${location.name}, AZ | Pickup & Delivery`;
}

// Generate FAQ content
export function generateFAQs(location: Location, serviceSlug?: string) {
  const service = serviceSlug ? SERVICES_FOR_SEO.find((s) => s.slug === serviceSlug) : null;

  return [
    {
      question: `Do you offer laundry pickup in ${location.name}?`,
      answer: `Yes! We provide free laundry pickup and delivery throughout ${location.name} and the ${location.region} area. Schedule online and we'll come to your door.`,
    },
    {
      question: `How much does laundry service cost in ${location.name}?`,
      answer: `Our wash & fold service starts at $2.25/lb with a 10lb minimum. Dry cleaning prices vary by item. Delivery is free on orders over $35.`,
    },
    {
      question: `What areas of ${location.name} do you serve?`,
      answer: `We serve all of ${location.name} including ${location.neighborhoodsServed?.slice(0, 3).join(", ") || "all neighborhoods"}. Check your ZIP code on our website to confirm service.`,
    },
    {
      question: `How fast is laundry turnaround in ${location.name}?`,
      answer: `Standard turnaround is 24-48 hours. Same-day rush service is available for an additional $10.`,
    },
    {
      question: service ? `Do you offer ${service.shortName.toLowerCase()} in ${location.name}?` : `What laundry services do you offer in ${location.name}?`,
      answer: service
        ? `Yes! We offer professional ${service.shortName.toLowerCase()} throughout ${location.name}. Schedule a pickup online or call us at ${BUSINESS_INFO.phone}.`
        : `We offer wash & fold, dry cleaning, bedding cleaning, and commercial laundry services in ${location.name}. All with free pickup and delivery on qualifying orders.`,
    },
  ];
}
