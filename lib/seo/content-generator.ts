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
    "Say goodbye to laundromat trips in {city}. Our door-to-door pickup and delivery service handles your laundry from start to finish—sorting, washing, drying, and folding included.",
    "Laundry day doesn't have to exist in {city}. With {brand}'s pickup and delivery, you schedule online, we pick up at your door, and your clean clothes come back within 24-48 hours.",
    "{city} residents are switching to {brand} for hassle-free laundry service. No lugging bags, no waiting at machines—just fresh, folded laundry delivered to your door.",
  ],
  "wash-and-fold": [
    "Our {city} wash and fold service starts at just $2.25 per pound. We sort, wash, dry, and neatly fold all your everyday laundry with care.",
    "{city} residents love our wash and fold service for its convenience and quality. Drop off or schedule a pickup—we'll have your clothes fresh within 24-48 hours.",
    "Professional wash and fold in {city} means more time for what matters. We handle your everyday laundry with premium detergents, proper sorting, and neat folding—starting at $2.25/lb.",
    "Our wash and fold service takes the chore out of laundry for {city} families. We sort darks from lights, treat stains, and return everything perfectly folded.",
    "Why spend hours at the laundromat when {brand}'s wash and fold service in {city} does it better? Professional-grade cleaning, careful handling, and neatly folded results every time.",
  ],
  "dry-cleaning": [
    "Trust {brand} for professional dry cleaning in {city}. We handle suits, dresses, delicates, and specialty items with expert care and eco-friendly solvents.",
    "Looking for quality dry cleaning near {city}? Our professional service includes pickup, expert cleaning, pressing, and delivery—all at competitive prices.",
    "Professional dry cleaning in {city} doesn't mean expensive. {brand} offers competitive pricing on suits, dresses, coats, and delicates with free pickup and delivery on qualifying orders.",
    "{city} professionals trust {brand} for dry cleaning that makes them look their best. Expert pressing, stain treatment, and same-day rush service available.",
    "From wedding dresses to business suits, {brand} provides expert dry cleaning for {city} residents. Eco-friendly solvents protect your garments and the environment.",
  ],
  "commercial-laundry": [
    "{city} businesses trust {brand} for reliable commercial laundry services. We serve hotels, restaurants, gyms, spas, and property managers with volume-based pricing.",
    "Need commercial laundry service in {city}? We offer custom solutions for businesses of all sizes, with flexible scheduling and dedicated account management.",
    "Professional commercial laundry in {city} means one less thing to worry about for your business. Volume pricing, dedicated support, and consistent quality for every load.",
    "{brand} helps {city} businesses focus on what they do best by handling their laundry. Custom schedules, volume discounts, and reliable delivery—guaranteed.",
    "From small boutiques to large facilities, {brand} provides commercial laundry solutions throughout {city}. Get a custom quote based on your business needs.",
  ],
  "bedding-cleaning": [
    "Keep your {city} home fresh with our professional bedding and linen cleaning service. We clean comforters, duvets, sheets, pillows, and more.",
    "Our {city} bedding cleaning service ensures your linens are sanitized, fresh, and fluffy. Perfect for seasonal cleaning or regular maintenance.",
    "Arizona's dust and allergens make regular bedding cleaning essential. {brand} serves {city} with professional comforter, duvet, and linen cleaning with free pickup.",
    "Sleep better in {city} with professionally cleaned bedding from {brand}. We handle oversized comforters, specialty duvets, and delicate linens with expert care.",
    "Don't stuff your comforter into a home washer—let {brand} handle it properly. Our {city} bedding cleaning service uses commercial equipment designed for large items.",
  ],
  "airbnb-laundry": [
    "{city} Airbnb hosts trust {brand} for fast turnaround laundry service. We ensure your guests always arrive to fresh, hotel-quality linens.",
    "Running a vacation rental in {city}? Our Airbnb laundry service provides quick turnaround, pickup/delivery, and consistent quality for every guest.",
    "Keep your {city} vacation rental ratings high with professionally cleaned linens. {brand} offers same-day turnaround for Airbnb and short-term rental hosts.",
    "Managing multiple vacation rentals in {city}? {brand}'s Airbnb laundry service handles turnover linens for all your properties with reliable same-day service.",
    "{city} Superhosts know the secret to 5-star reviews: fresh linens. {brand} provides fast-turnaround laundry service designed for vacation rental operators.",
  ],
  "hotel-laundry": [
    "{city} hotels partner with {brand} for reliable, high-volume laundry service. We maintain the quality your guests expect with flexible scheduling.",
    "Professional hotel laundry service in {city} and {region}. We handle sheets, towels, robes, and restaurant linens with hospitality-grade care.",
    "Your {city} hotel guests deserve crisp sheets and fluffy towels. {brand} provides high-volume hotel laundry service with same-day turnaround available.",
    "From boutique inns to full-service hotels, {brand} serves {city}'s hospitality industry with reliable, professional laundry at competitive volume pricing.",
    "{city} hoteliers choose {brand} for consistent quality and reliable delivery. We process hundreds of pounds daily for hotels throughout {region}.",
  ],
  "restaurant-laundry": [
    "{city} restaurants choose {brand} for spotless tablecloths, napkins, and chef uniforms. We understand the demands of the hospitality industry.",
    "Keep your {city} restaurant looking its best with our commercial laundry service. Daily pickup available for high-volume needs.",
    "Professional restaurant laundry in {city} keeps your dining room pristine. {brand} handles tablecloths, napkins, chef coats, and more with expert stain removal.",
    "Your {city} restaurant's reputation depends on details—including clean linens. {brand} provides daily pickup and delivery so your tables are always set with fresh linens.",
    "From food stains to wine spills, {brand} handles the toughest restaurant laundry challenges in {city}. Professional stain treatment and pressing included.",
  ],
};

const SERVICE_PROCESS_STEPS = {
  "laundry-pickup-delivery": [
    { title: "Schedule Online", description: "Book your pickup in under 2 minutes through our website or by phone. Choose your preferred day and time window." },
    { title: "We Pick Up", description: "Our driver arrives at your door during your selected window. Leave your bag out or hand it off—either way works." },
    { title: "Professional Cleaning", description: "Your laundry is sorted, washed with premium detergents, dried, and carefully folded by our team." },
    { title: "Delivered Fresh", description: "Clean, neatly folded laundry returned to your door within 24-48 hours. Same-day rush available." },
  ],
  "wash-and-fold": [
    { title: "Bag It Up", description: "Place your everyday laundry in a bag. No need to sort—we handle all the separating for you." },
    { title: "We Weigh & Sort", description: "Your laundry is weighed for pricing, then sorted by color, fabric type, and care requirements." },
    { title: "Wash, Dry & Fold", description: "Items are washed at proper temperatures with premium detergents, dried, and neatly folded to our standards." },
    { title: "Ready for Pickup", description: "Your fresh, folded laundry is packaged and ready—delivered to your door or available for pickup." },
  ],
  "dry-cleaning": [
    { title: "Drop Off or Schedule Pickup", description: "Bring garments to us or schedule a free pickup. We'll note any specific concerns like stains." },
    { title: "Inspection & Tagging", description: "Each garment is inspected for stains, damage, and care requirements. Items are tagged for tracking." },
    { title: "Expert Cleaning & Pressing", description: "Garments are professionally dry cleaned with eco-friendly solvents, then pressed and finished." },
    { title: "Quality Check & Delivery", description: "Final quality inspection before packaging. Delivered on hangers, ready to hang in your closet." },
  ],
  "commercial-laundry": [
    { title: "Consultation", description: "We assess your business needs, volume, and schedule requirements to create a custom service plan." },
    { title: "Scheduled Pickup", description: "Regular pickups on your preferred schedule—daily, weekly, or anywhere in between." },
    { title: "Commercial Processing", description: "Items processed to commercial standards with high-temperature sanitization and quality control." },
    { title: "On-Time Delivery", description: "Clean linens delivered on schedule, organized by type, with detailed invoicing and reporting." },
  ],
  "bedding-cleaning": [
    { title: "Schedule Pickup", description: "Book online or call us. We'll come to your door to collect comforters, duvets, and other bedding items." },
    { title: "Inspection", description: "Each item is inspected for stains, damage, and fabric type to determine the proper cleaning method." },
    { title: "Deep Clean", description: "Bedding is cleaned in commercial-size machines with allergen-reducing detergents and proper temperature control." },
    { title: "Fluff & Return", description: "Items are thoroughly dried, fluffed to restore loft, and returned fresh and ready to use." },
  ],
  "airbnb-laundry": [
    { title: "Guest Checks Out", description: "Notify us by text or through our system. We coordinate with your cleaning crew for seamless pickup." },
    { title: "Quick Pickup", description: "We collect all linens from your property, often within 2 hours of notification." },
    { title: "Fast-Turn Cleaning", description: "Linens washed, dried, and folded to hotel standards. Same-day turnaround for back-to-back bookings." },
    { title: "Pre-Check-In Delivery", description: "Fresh linens delivered before your next guest arrives, ready for your cleaner to make up beds." },
  ],
  "hotel-laundry": [
    { title: "Setup Schedule", description: "We create a recurring pickup schedule based on your occupancy patterns and housekeeping workflow." },
    { title: "Daily Collection", description: "Our team collects soiled linens from your designated area, sorting and counting for accuracy." },
    { title: "Hospitality-Grade Cleaning", description: "Items washed at proper temperatures, stain-treated, and finished to hotel quality standards." },
    { title: "Delivery & Inventory", description: "Clean linens returned on schedule, organized by type. Monthly reporting tracks volume and costs." },
  ],
  "restaurant-laundry": [
    { title: "Set Your Schedule", description: "Choose daily, bi-weekly, or weekly pickup to match your restaurant's service schedule." },
    { title: "Post-Service Pickup", description: "We collect soiled linens after your service, counting and documenting everything." },
    { title: "Stain Treatment & Cleaning", description: "Professional food and wine stain treatment, high-temperature washing, and pressing as needed." },
    { title: "Pre-Service Delivery", description: "Clean, pressed linens delivered before your next service—ready to set tables." },
  ],
};

const SERVICE_WHAT_TO_EXPECT = {
  "laundry-pickup-delivery": "When you schedule your first pickup with {brand} in {city}, here's what happens: we arrive at your door during your chosen time window, collect your laundry bag, and take it to our professional facility. Your clothes are sorted by color and fabric type, washed with premium hypoallergenic detergents, dried at the proper temperature, and carefully folded. Within 24-48 hours, your fresh laundry is delivered back to your door, neatly organized and ready to put away. It's that simple—no trips to the laundromat, no sorting, no folding.",
  "wash-and-fold": "Our wash and fold service in {city} is designed for your everyday laundry—the t-shirts, jeans, towels, and sheets that pile up throughout the week. We sort everything by color and fabric, wash with premium detergents (hypoallergenic options available), dry at proper temperatures to prevent shrinking, and fold everything neatly. Most orders are ready within 24-48 hours. At $2.25/lb with a 10lb minimum, it's more affordable than you might think.",
  "dry-cleaning": "When you trust {brand} with your dry cleaning in {city}, each garment receives individual attention. We inspect for stains and note care labels, clean using eco-friendly solvents that are gentle on fabrics but tough on dirt, and press each item to a crisp finish. Suits come back looking boardroom-ready, dresses are handled with care, and delicates are treated as exactly that—delicate. We use hangers and garment bags to protect your items during delivery.",
  "commercial-laundry": "Commercial laundry with {brand} in {city} starts with understanding your business. We visit your facility, assess your volume and needs, and design a custom service plan. You'll have a dedicated account manager, flexible scheduling, and transparent pricing based on your volume. Whether you need daily pickup for a busy hotel or weekly service for a small office, we scale to fit your operation.",
  "bedding-cleaning": "Bedding items like comforters, duvets, and heavy blankets require commercial-size equipment that most home washers can't match. {brand}'s bedding service in {city} uses large-capacity machines that allow proper water circulation, allergen-reducing detergents, and careful drying that restores the original loft and softness. We recommend cleaning bedding seasonally at minimum—and after any illness in the household.",
  "airbnb-laundry": "As an Airbnb host in {city}, your linen quality directly impacts your reviews and bookings. {brand}'s vacation rental laundry service is designed for fast turnarounds: notify us at checkout, we pick up within hours, and fresh hotel-quality linens are back before your next guest arrives. We fold sheets and towels to hotel standards, treat stains from guest stays, and can even manage your linen inventory to flag items needing replacement.",
  "hotel-laundry": "Hotel laundry service with {brand} in {city} operates like clockwork. We integrate with your housekeeping schedule for seamless pickup and delivery, process sheets, towels, robes, and restaurant linens to hospitality standards, and provide monthly reporting on volume, costs, and any damage claims. Our goal is to be invisible to your guests—they just notice how fresh and perfect everything feels.",
  "restaurant-laundry": "Restaurant laundry from {brand} in {city} goes beyond basic cleaning. We apply professional stain treatment for food, wine, and grease—the inevitable marks of a busy kitchen. Tablecloths are pressed to a crisp finish, napkins are folded to your specification, and chef coats come back bright and professional. Many of our restaurant partners rely on daily service, with pickup after close and delivery before the next day's prep.",
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

// ZIP code page templates
const ZIP_INTRO_TEMPLATES = [
  "Yes, we deliver to ZIP code {zip}! {brand} provides professional laundry pickup and delivery service throughout {city} and the {region} area. Schedule your free pickup today.",
  "Looking for laundry service in {zip}? {brand} serves your neighborhood in {city} with convenient pickup and delivery. From wash & fold to dry cleaning, we've got you covered.",
  "Great news for {zip} residents—{brand} picks up and delivers right to your door in {city}. Professional laundry service is just a click away, with free delivery on orders over $35.",
  "{brand} proudly serves ZIP code {zip} in {city}, AZ. Our drivers know your neighborhood and deliver fresh, folded laundry right to your doorstep within 24-48 hours.",
  "Residents of {zip} in {city} can enjoy the convenience of professional laundry service from {brand}. Schedule online, we pick up, clean, and deliver—it's that easy.",
];

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
    // Unique content fields
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

  const shuffledBenefits = [...BENEFITS].sort(() => random() - 0.5).slice(0, 8);

  const processSteps = SERVICE_PROCESS_STEPS[serviceSlug as keyof typeof SERVICE_PROCESS_STEPS] || SERVICE_PROCESS_STEPS["laundry-pickup-delivery"];

  const whatToExpect = (SERVICE_WHAT_TO_EXPECT[serviceSlug as keyof typeof SERVICE_WHAT_TO_EXPECT] || "")
    .replace(/{city}/g, location.name)
    .replace(/{brand}/g, BUSINESS_INFO.name);

  const nearbyCities = getNearbyCities(location.slug, 4);
  const otherServices = SERVICES_FOR_SEO.filter((s) => s.slug !== serviceSlug).slice(0, 4);

  // Determine if this service has commercial crossover
  const commercialServices = ["commercial-laundry", "hotel-laundry", "restaurant-laundry", "airbnb-laundry"];
  const hasCommercialCrossLink = commercialServices.includes(serviceSlug);

  return {
    service,
    intro,
    benefits: shuffledBenefits,
    processSteps,
    whatToExpect,
    cta,
    nearbyCities,
    otherServices,
    hasCommercialCrossLink,
  };
}

// Generate ZIP page content
export function generateZipPageContent(zip: string, location: Location) {
  const random = seededRandom(`zip-${zip}`);

  const intro = seededItem(ZIP_INTRO_TEMPLATES, random)
    .replace(/{zip}/g, zip)
    .replace(/{city}/g, location.name)
    .replace(/{brand}/g, BUSINESS_INFO.name)
    .replace(/{region}/g, location.region);

  const shuffledBenefits = [...BENEFITS].sort(() => random() - 0.5).slice(0, 6);

  const zipFaqs = [
    {
      question: `Do you offer laundry pickup in ZIP code ${zip}?`,
      answer: `Yes! We provide free laundry pickup and delivery to all addresses in ZIP code ${zip} (${location.name}, AZ). Schedule online and we'll come to your door.`,
    },
    {
      question: `How much does laundry service cost in ${zip}?`,
      answer: `Our wash & fold service starts at $2.25/lb with a 10lb minimum. Dry cleaning prices vary by item. Delivery is free on orders over $35 to ${zip}.`,
    },
    {
      question: `What's the turnaround time for laundry in ${zip}?`,
      answer: `Standard turnaround for ${zip} addresses is 24-48 hours. Same-day rush service is available for an additional $10.`,
    },
    {
      question: `Do you offer commercial laundry service in ${zip}?`,
      answer: `Yes! We serve businesses in ${zip} (${location.name}) with commercial laundry services including hotel linens, restaurant laundry, and more. Contact us for volume pricing.`,
    },
  ];

  return {
    intro,
    benefits: shuffledBenefits,
    faqs: zipFaqs,
    neighborhoods: location.neighborhoodsServed || [],
    landmarks: location.landmarks || [],
    localBusinesses: location.localBusinesses || [],
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

  const baseFaqs = [
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
    {
      question: `Is there a minimum order for laundry service in ${location.name}?`,
      answer: `Our wash & fold service has a 10lb minimum ($22.50). Free delivery requires a $35 minimum order. There's no minimum for dry cleaning items.`,
    },
    {
      question: `Do you use eco-friendly detergents?`,
      answer: `Yes! We use premium, eco-friendly detergents that are tough on stains but gentle on fabrics and skin. Hypoallergenic options are available upon request.`,
    },
    {
      question: `Can I schedule recurring laundry pickups in ${location.name}?`,
      answer: `Absolutely! Many ${location.name} customers set up weekly or bi-weekly recurring pickups. You can manage your schedule online anytime.`,
    },
  ];

  return baseFaqs;
}
