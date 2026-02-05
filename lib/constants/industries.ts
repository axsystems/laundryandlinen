// Commercial Industry Data for pSEO Pages
// 8 industries × 28 cities = 224 industry+city pages

import { LOCATIONS } from "./locations";

export interface Industry {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string; // lucide icon name
  heroTagline: string;
  heroDescription: string;
  whyNeedService: string;
  benefits: string[];
  features: string[];
  processSteps: { title: string; description: string }[];
  commonItems: string[];
  pricingInfo: {
    model: string;
    startingAt?: string;
    note: string;
  };
  faqs: { question: string; answer: string }[];
  testimonial: {
    quote: string;
    name: string;
    title: string;
    location: string;
  };
  stats: { value: string; label: string }[];
  caseStudy: {
    title: string;
    challenge: string;
    solution: string;
    result: string;
  };
  metaDescription: string;
  cityIntroTemplates: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "hotels",
    name: "Hotels & Resorts",
    shortName: "Hotels",
    description: "Professional commercial laundry service for hotels, resorts, and hospitality businesses throughout Arizona.",
    icon: "Bed",
    heroTagline: "Hotel-Grade Laundry Service for Arizona Hospitality",
    heroDescription: "Keep your guests impressed with crisp sheets, fluffy towels, and spotless linens. Laundry & Linen provides reliable, high-volume laundry service for hotels and resorts across the Phoenix Metro area.",
    whyNeedService: "Guest satisfaction starts with fresh linens. Stained sheets, rough towels, or delayed laundry can tank your reviews and occupancy rates. Professional laundry service ensures consistency across every room, every day—without the overhead of on-site facilities or staff.",
    benefits: [
      "Same-day and next-day turnaround for high-volume needs",
      "Consistent quality across hundreds of rooms",
      "Eco-friendly, hypoallergenic detergents safe for sensitive guests",
      "Dedicated account manager for your property",
      "Flexible pickup schedules—daily, weekly, or on-demand",
      "Volume-based pricing that scales with occupancy",
      "Damage protection guarantee on all items",
      "Real-time order tracking and reporting",
      "Emergency rush service for unexpected surges",
      "Specialized stain treatment for common hotel stains",
    ],
    features: [
      "Sheets, pillowcases, and duvet covers",
      "Bath towels, hand towels, and washcloths",
      "Pool and spa towels",
      "Bathrobes and slippers",
      "Table linens for on-site restaurants",
      "Staff uniforms and aprons",
      "Banquet and event linens",
      "Specialty items (curtains, decorative pillows)",
    ],
    processSteps: [
      { title: "Schedule Pickup", description: "Set up a recurring pickup schedule or request on-demand service. We work around your housekeeping operations." },
      { title: "We Collect", description: "Our team arrives at your loading dock or designated area, sorts and counts items, and transports them to our facility." },
      { title: "Professional Cleaning", description: "Items are washed at proper temperatures, treated for stains, pressed or folded to hotel standards, and quality-checked." },
      { title: "Delivery & Inventory", description: "Clean linens returned on schedule, organized by type. Monthly reporting tracks volume, costs, and any damage claims." },
    ],
    commonItems: ["Sheets", "Pillowcases", "Duvet covers", "Bath towels", "Hand towels", "Washcloths", "Pool towels", "Bathrobes", "Table linens", "Napkins"],
    pricingInfo: {
      model: "Per-pound pricing with volume discounts",
      startingAt: "$1.50/lb",
      note: "Custom quotes for 500+ lbs/week. Pricing decreases with volume commitments.",
    },
    faqs: [
      { question: "What's the minimum order for hotel laundry service?", answer: "We typically work with hotels generating at least 200 lbs/week. For smaller boutique properties, we offer flexible plans starting at 100 lbs/week." },
      { question: "Can you handle seasonal spikes in occupancy?", answer: "Absolutely. We maintain surge capacity for peak seasons, events, and holidays. Just give us 48 hours notice for significant volume increases." },
      { question: "Do you provide linens or just launder ours?", answer: "We primarily launder your existing linens, but we can help source quality hotel-grade linens through our supplier network if needed." },
      { question: "What's your turnaround time for hotel laundry?", answer: "Standard turnaround is 24 hours. Same-day rush service is available for an additional fee. We can accommodate daily pickup/delivery schedules." },
      { question: "How do you handle damaged or lost items?", answer: "We carry full insurance and maintain a damage protection guarantee. Any items damaged during our care are replaced or reimbursed at fair market value." },
      { question: "Do you service hotels outside Phoenix?", answer: "We serve the entire Phoenix Metro area including Scottsdale, Tempe, Mesa, Chandler, and 24 other cities. Contact us for locations beyond our standard service area." },
      { question: "Can you match our current linen standards?", answer: "Yes. During onboarding, we review your brand standards and create a custom care profile for your property. We can match any fold style, pressing standard, or packaging preference." },
      { question: "What detergents do you use?", answer: "We use commercial-grade, hypoallergenic detergents that are tough on stains but gentle on fabrics. We can accommodate specific detergent requests or fragrance preferences." },
    ],
    testimonial: {
      quote: "Switching to Laundry & Linen saved us $3,000/month compared to our previous service. The quality is consistently excellent—our guest satisfaction scores for room cleanliness went up 12%.",
      name: "James W.",
      title: "General Manager",
      location: "Scottsdale Resort, 200 Rooms",
    },
    stats: [
      { value: "50+", label: "Hotel Partners" },
      { value: "500K+", label: "Lbs Processed Monthly" },
      { value: "99.5%", label: "On-Time Delivery" },
      { value: "24hr", label: "Standard Turnaround" },
    ],
    caseStudy: {
      title: "Scottsdale Boutique Hotel Saves 40% on Linen Costs",
      challenge: "A 75-room Scottsdale boutique hotel was spending $8,000/month on in-house laundry with inconsistent quality and frequent equipment breakdowns.",
      solution: "We implemented a daily pickup schedule with same-day turnaround, eliminated their need for on-site equipment and laundry staff.",
      result: "The hotel reduced laundry costs to $4,800/month, freed up 200 sq ft of former laundry space for a guest amenity, and improved guest satisfaction scores by 15%.",
    },
    metaDescription: "Professional hotel laundry service in Arizona. Same-day turnaround, volume pricing, dedicated support. Sheets, towels, linens for hotels and resorts. Free consultation.",
    cityIntroTemplates: [
      "Hotels and resorts in {city} trust Laundry & Linen for reliable, high-volume laundry service. We keep your guests impressed with crisp linens and fluffy towels—delivered on your schedule.",
      "{city}'s hospitality industry demands excellence, and that starts with fresh linens. Laundry & Linen provides professional hotel laundry service throughout {city} with same-day turnaround available.",
      "Running a hotel in {city} means your linens need to be perfect every single day. Laundry & Linen handles the heavy lifting—literally—so your housekeeping team can focus on guest experience.",
      "From boutique inns to full-service resorts, {city} hotels choose Laundry & Linen for consistent quality and reliable delivery. Volume pricing makes professional laundry more affordable than in-house operations.",
      "Guest reviews in {city} consistently mention clean rooms and fresh linens. Laundry & Linen helps {city} hotels maintain that reputation with professional-grade laundry service at competitive rates.",
    ],
  },
  {
    slug: "airbnb",
    name: "Airbnb & Vacation Rentals",
    shortName: "Airbnb",
    description: "Fast-turnaround laundry service for Airbnb hosts, vacation rentals, and short-term rental operators in Arizona.",
    icon: "Home",
    heroTagline: "Airbnb Laundry That Keeps Your Ratings at 5 Stars",
    heroDescription: "Quick turnaround between guests, hotel-quality linens, and reliable pickup/delivery. Laundry & Linen helps Arizona Airbnb hosts maintain Superhost status without the hassle.",
    whyNeedService: "Back-to-back bookings leave no room for laundry delays. One set of stained sheets or musty towels can cost you a 5-star review—and Superhost status. Professional laundry service ensures every guest arrives to fresh, hotel-quality linens, even with same-day turnovers.",
    benefits: [
      "Same-day turnaround for tight booking windows",
      "Hotel-quality folding and presentation",
      "Pickup within 2 hours of checkout",
      "Consistent quality that protects your ratings",
      "No need to stock excessive linen sets",
      "Flexible scheduling—book per turnover or weekly",
      "Stain treatment for wine, makeup, and food spills",
      "White linen brightening service",
      "Inventory tracking and replacement alerts",
      "Multi-property discounts available",
    ],
    features: [
      "Complete bed linen sets (sheets, pillowcases, duvets)",
      "Bath towels, hand towels, and washcloths",
      "Kitchen towels and dish cloths",
      "Blankets and throws",
      "Mattress protectors and pillow protectors",
      "Shower curtains and bath mats",
      "Decorative pillowcases",
      "Robes (for luxury listings)",
    ],
    processSteps: [
      { title: "Guest Checks Out", description: "Notify us via text, app, or scheduled pickup. We can coordinate with your cleaning team for seamless turnovers." },
      { title: "We Pick Up", description: "Our driver collects all dirty linens from your property within our pickup window—often within 2 hours of notification." },
      { title: "Quick-Turn Cleaning", description: "Linens are washed, dried, folded to hotel standards, and inspected for stains or damage. Rush service available for same-day turnovers." },
      { title: "Delivery Before Check-In", description: "Fresh linens delivered back to your property before your next guest arrives, ready for your cleaning team to make up beds." },
    ],
    commonItems: ["Bed sheets", "Pillowcases", "Duvet covers", "Bath towels", "Hand towels", "Kitchen towels", "Blankets", "Mattress protectors", "Bath mats"],
    pricingInfo: {
      model: "Per-turnover or per-pound pricing",
      startingAt: "$35/turnover",
      note: "Pricing varies by property size and linen count. Multi-property hosts receive volume discounts.",
    },
    faqs: [
      { question: "How fast can you turn around laundry between guests?", answer: "We offer same-day turnaround for bookings received by 10am. For back-to-back bookings, we can deliver within 4-6 hours of pickup." },
      { question: "Do you coordinate with my cleaning crew?", answer: "Yes! We can sync with your cleaning team or property manager. We'll pick up dirty linens and deliver fresh ones on a schedule that works with your turnover process." },
      { question: "What if a guest stains the linens badly?", answer: "We apply professional stain treatment at no extra charge. If a stain can't be removed, we'll let you know so you can file a damage claim with the booking platform." },
      { question: "Can you handle multiple properties?", answer: "Absolutely. Many of our clients manage 5-50+ properties. We offer multi-property discounts and can coordinate pickups across all your listings." },
      { question: "Do I need to provide multiple linen sets?", answer: "With our fast turnaround, most hosts need only 2 sets per property. We can advise on optimal linen inventory based on your booking frequency." },
      { question: "What areas do you serve for Airbnb laundry?", answer: "We cover the entire Phoenix Metro area including popular vacation rental markets like Scottsdale, Tempe, and Paradise Valley." },
    ],
    testimonial: {
      quote: "I manage 12 Airbnbs in Scottsdale and Laundry & Linen is the backbone of my operation. Same-day turnaround, perfect quality every time. My reviews consistently mention how fresh everything feels.",
      name: "Rachel T.",
      title: "Superhost, 12 Properties",
      location: "Scottsdale",
    },
    stats: [
      { value: "200+", label: "Airbnb Hosts Served" },
      { value: "5,000+", label: "Turnovers/Month" },
      { value: "4hr", label: "Avg Rush Turnaround" },
      { value: "99%", label: "On-Time Rate" },
    ],
    caseStudy: {
      title: "Scottsdale Superhost Scales from 3 to 15 Properties",
      challenge: "An Airbnb host managing 3 Scottsdale properties was doing laundry themselves, spending 20+ hours/week on linen turnovers.",
      solution: "We set up a per-turnover pickup/delivery schedule synced with their booking calendar, handling all linens for all properties.",
      result: "The host freed up 20+ hours/week, scaled to 15 properties, and maintained a 4.97 average rating with consistent linen quality.",
    },
    metaDescription: "Fast-turnaround Airbnb laundry service in Arizona. Same-day delivery, hotel-quality folding, multi-property discounts. Keep your 5-star ratings with fresh linens.",
    cityIntroTemplates: [
      "Airbnb hosts in {city} trust Laundry & Linen for fast-turnaround laundry that keeps guests happy and ratings high. Same-day service available for tight booking windows.",
      "{city}'s vacation rental market is booming, and guests expect hotel-quality linens. Laundry & Linen helps {city} Airbnb hosts deliver that experience with reliable pickup and delivery.",
      "Managing vacation rentals in {city}? Stop spending hours on laundry between guests. Laundry & Linen handles your linens with fast turnaround and consistent hotel-quality results.",
      "From cozy casitas to luxury estates, {city} Airbnb properties need fresh linens for every guest. Laundry & Linen provides the fast, reliable service that Superhosts depend on.",
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants & Catering",
    shortName: "Restaurants",
    description: "Commercial laundry service for restaurants, catering companies, and food service businesses in Arizona.",
    icon: "UtensilsCrossed",
    heroTagline: "Spotless Linens for Arizona's Restaurant Industry",
    heroDescription: "Keep your dining room looking its best with professionally cleaned tablecloths, napkins, chef coats, and aprons. Reliable daily or weekly service for restaurants of every size.",
    whyNeedService: "First impressions matter in the restaurant business. Stained tablecloths, dingy napkins, or worn chef coats undermine even the best cuisine. Professional laundry service ensures your front-of-house and back-of-house linens are always pristine—without dedicating staff time to laundry.",
    benefits: [
      "Daily pickup available for high-volume restaurants",
      "Professional stain removal for food, wine, and grease",
      "Consistent bright whites and vivid colors",
      "Pressed tablecloths and napkins available",
      "Chef coat and uniform service",
      "Emergency same-day service for events",
      "Volume pricing that beats in-house costs",
      "Dedicated restaurant account manager",
      "Eco-friendly cleaning that meets health standards",
      "Inventory management and replacement tracking",
    ],
    features: [
      "Tablecloths (all sizes and colors)",
      "Cloth napkins",
      "Chef coats and pants",
      "Aprons and server uniforms",
      "Bar towels and cleaning rags",
      "Kitchen towels",
      "Banquet and event linens",
      "Decorative table runners",
    ],
    processSteps: [
      { title: "Set Your Schedule", description: "Choose daily, bi-weekly, or weekly pickup. We'll coordinate with your kitchen hours for minimal disruption." },
      { title: "Pickup & Count", description: "We collect soiled linens, count items, and note any special treatment needs. Everything is documented for billing accuracy." },
      { title: "Expert Cleaning", description: "Restaurant linens receive specialized treatment: food and wine stain pre-treatment, high-temperature sanitization, and professional pressing." },
      { title: "Timely Delivery", description: "Clean, pressed linens delivered before your next service—ready to set tables and outfit staff." },
    ],
    commonItems: ["Tablecloths", "Napkins", "Chef coats", "Aprons", "Bar towels", "Kitchen towels", "Server uniforms", "Table runners"],
    pricingInfo: {
      model: "Per-piece or per-pound pricing",
      startingAt: "$1.75/tablecloth",
      note: "Volume discounts for restaurants with daily service. Custom quotes for catering companies.",
    },
    faqs: [
      { question: "Can you remove tough food and wine stains?", answer: "Yes. We use professional-grade stain treatment specifically designed for food service stains including red wine, grease, tomato sauce, and coffee. We have a 95%+ stain removal success rate." },
      { question: "Do you offer daily pickup for busy restaurants?", answer: "Absolutely. Many of our restaurant clients receive daily service, with pickup after close and delivery before the next day's service begins." },
      { question: "Can you press tablecloths and napkins?", answer: "Yes. Professional pressing is included for tablecloths and available for napkins at a small additional charge. We can also do custom folds." },
      { question: "What about health department requirements?", answer: "Our cleaning processes meet all Maricopa County health department requirements for food service textiles. We use high-temperature sanitization and approved detergents." },
      { question: "Do you supply linens or just clean them?", answer: "We primarily clean your existing linens, but we can help you source quality restaurant linens through our supplier partners." },
      { question: "How do you handle seasonal volume changes?", answer: "We flex with your business. Patio season, holiday events, and catering jobs can all be accommodated with advance notice." },
    ],
    testimonial: {
      quote: "Our tablecloths and napkins look brand new every single day. The stain removal is incredible—even red wine comes out perfectly. It's one less thing I have to worry about running a busy kitchen.",
      name: "Sofia L.",
      title: "Restaurant Owner",
      location: "Scottsdale",
    },
    stats: [
      { value: "75+", label: "Restaurant Partners" },
      { value: "95%", label: "Stain Removal Rate" },
      { value: "6am", label: "Earliest Delivery" },
      { value: "Daily", label: "Service Available" },
    ],
    caseStudy: {
      title: "Scottsdale Fine Dining Restaurant Elevates Linen Quality",
      challenge: "An upscale Scottsdale restaurant was unhappy with their national linen service—inconsistent quality, wrong counts, and late deliveries disrupted nightly service.",
      solution: "We provided dedicated daily service with a single account manager, professional pressing, and guaranteed delivery by 3pm daily.",
      result: "The restaurant reported zero linen-related service disruptions in 6 months, saved 15% compared to their previous provider, and received compliments from guests on tablecloth quality.",
    },
    metaDescription: "Commercial restaurant laundry in Arizona. Daily service, professional stain removal, pressed tablecloths. Serving Phoenix Metro restaurants, caterers, and food service businesses.",
    cityIntroTemplates: [
      "Restaurants in {city} choose Laundry & Linen for spotless tablecloths, napkins, and chef uniforms. Daily pickup available for high-volume kitchens throughout {city}.",
      "{city}'s dining scene deserves pristine linens. Laundry & Linen provides professional restaurant laundry service with expert stain removal and on-time delivery.",
      "From fine dining to casual eateries, {city} restaurants trust Laundry & Linen for consistent, high-quality linen service. Professional pressing and same-day options available.",
      "Keep your {city} restaurant looking its best with professionally cleaned linens from Laundry & Linen. We handle tablecloths, napkins, uniforms, and more with daily service available.",
    ],
  },
  {
    slug: "apartments",
    name: "Apartments & Property Management",
    shortName: "Apartments",
    description: "Turnover laundry and resident laundry services for apartment complexes and property management companies in Arizona.",
    icon: "Building2",
    heroTagline: "Laundry Solutions for Arizona Property Managers",
    heroDescription: "Simplify unit turnovers, offer resident laundry perks, and keep common area linens fresh. Laundry & Linen partners with property managers across Phoenix Metro.",
    whyNeedService: "Unit turnovers are your biggest operational challenge. Between move-outs and move-ins, window curtains, blinds, and any provided linens need professional cleaning. Our service streamlines turnovers, reduces vacancy time, and can even be offered as a resident amenity to boost retention.",
    benefits: [
      "Fast turnover cleaning to reduce vacancy days",
      "Bulk curtain and blind cleaning",
      "Resident laundry service as a building amenity",
      "Common area linen maintenance (gym towels, pool towels)",
      "Model unit staging linen service",
      "Flexible scheduling for multiple properties",
      "Volume discounts for property management companies",
      "Detailed invoicing per property for accounting",
      "Move-in welcome packages available",
    ],
    features: [
      "Curtains and window treatments",
      "Provided linens for furnished units",
      "Common area towels (gym, pool, spa)",
      "Lobby and lounge linens",
      "Staff uniforms",
      "Model unit staging linens",
      "Move-out deep cleaning linens",
      "Seasonal decor textiles",
    ],
    processSteps: [
      { title: "Turnover Notification", description: "Let us know when a unit is turning over. We can sync with your maintenance schedule and cleaning crew." },
      { title: "Pickup & Assessment", description: "We collect all textiles from the unit, assess condition, and note any items needing replacement." },
      { title: "Professional Cleaning", description: "Curtains, linens, and textiles are cleaned, pressed, and prepared for the next resident or showing." },
      { title: "Delivery & Setup", description: "Clean items returned ready to install. For model units, we can handle full staging." },
    ],
    commonItems: ["Curtains", "Blinds", "Bed linens", "Towels", "Gym towels", "Pool towels", "Staff uniforms", "Model unit linens"],
    pricingInfo: {
      model: "Per-unit turnover or monthly retainer",
      startingAt: "$75/unit turnover",
      note: "Monthly retainer pricing available for properties with regular turnover volume. Multi-property discounts.",
    },
    faqs: [
      { question: "How quickly can you turn around a unit's linens?", answer: "Standard turnaround is 24-48 hours. Rush service (same-day) is available for urgent turnovers at an additional charge." },
      { question: "Do you handle curtains and window treatments?", answer: "Yes. We clean all types of curtains, drapes, and soft window treatments. We can also coordinate with blind cleaning services." },
      { question: "Can you offer laundry service as a resident amenity?", answer: "Absolutely. Many of our apartment partners offer resident laundry pickup/delivery as a building perk, either subsidized by the property or at resident cost." },
      { question: "How do you handle multiple properties?", answer: "We provide separate invoicing per property, dedicated account management, and can coordinate pickups across your entire portfolio." },
      { question: "Do you clean gym and pool towels for apartment amenities?", answer: "Yes. We offer recurring service for common area towels including gym, pool, and spa areas with flexible frequency." },
      { question: "What's the process for furnished apartment turnovers?", answer: "We clean all provided linens, assess condition, flag items needing replacement, and return everything folded and ready for the next tenant." },
    ],
    testimonial: {
      quote: "Managing 50+ apartment turnovers a month used to be a nightmare. Laundry & Linen handles everything with same-day service. Our guest reviews have never been better.",
      name: "Michael R.",
      title: "Property Manager, 52 Units",
      location: "Tempe",
    },
    stats: [
      { value: "30+", label: "Properties Served" },
      { value: "500+", label: "Units Managed" },
      { value: "48hr", label: "Standard Turnover" },
      { value: "Same Day", label: "Rush Available" },
    ],
    caseStudy: {
      title: "Tempe Apartment Complex Reduces Vacancy Time by 3 Days",
      challenge: "A 200-unit Tempe apartment complex near ASU was losing rental income due to slow turnovers, partly caused by laundry delays for curtains and provided linens.",
      solution: "We implemented a turnover notification system where maintenance staff text us at move-out, triggering immediate pickup and 24-hour turnaround.",
      result: "Average vacancy between tenants dropped from 7 days to 4 days, saving the property an estimated $60,000/year in recovered rent.",
    },
    metaDescription: "Apartment turnover laundry and property management laundry service in Arizona. Fast turnovers, common area linens, resident amenity programs. Serving Phoenix Metro.",
    cityIntroTemplates: [
      "Property managers in {city} partner with Laundry & Linen for fast unit turnovers and reliable linen service. Reduce vacancy time and boost tenant satisfaction.",
      "{city} apartment complexes trust Laundry & Linen for turnover laundry, common area linens, and resident amenity programs. Serving properties of all sizes.",
      "Managing apartments in {city}? Laundry & Linen streamlines your turnover process with professional linen service, curtain cleaning, and flexible scheduling.",
      "From student housing to luxury apartments, {city} property managers choose Laundry & Linen for reliable, fast turnover laundry that minimizes vacancy days.",
    ],
  },
  {
    slug: "gyms",
    name: "Gyms & Fitness Centers",
    shortName: "Gyms",
    description: "Towel service and laundry solutions for gyms, fitness centers, yoga studios, and athletic facilities in Arizona.",
    icon: "Dumbbell",
    heroTagline: "Fresh Towels, Happy Members—Gym Laundry Service",
    heroDescription: "Keep your gym smelling fresh and your members happy with reliable towel service. Laundry & Linen handles the sweat so your staff can focus on fitness.",
    whyNeedService: "Nothing drives gym members away faster than dirty towels or a musty locker room. In Arizona's heat, gym laundry volume is massive—and doing it in-house means expensive equipment, water bills, and staff time. Professional towel service keeps your facility fresh and your costs predictable.",
    benefits: [
      "Unlimited fresh towels for members",
      "Eliminates musty odor problems",
      "No equipment maintenance or water costs",
      "Consistent quality and cleanliness",
      "Flexible delivery schedules",
      "Antimicrobial treatment available",
      "Reduces in-house labor costs",
      "Scalable with membership growth",
      "Eco-friendly cleaning options",
    ],
    features: [
      "Workout towels (hand and full-size)",
      "Shower towels",
      "Locker room towels",
      "Yoga mats and towels",
      "Spa and sauna towels",
      "Staff uniforms and polo shirts",
      "Cleaning rags and cloths",
      "Branded towels available",
    ],
    processSteps: [
      { title: "Choose Your Plan", description: "Select from daily, 3x/week, or weekly service based on your membership volume and towel usage." },
      { title: "Scheduled Pickup", description: "We arrive at your facility during off-peak hours to collect used towels, minimizing disruption to members." },
      { title: "Deep Clean & Sanitize", description: "Towels are washed at high temperatures with antimicrobial treatment, eliminating bacteria and odor completely." },
      { title: "Restocked & Ready", description: "Fresh, folded towels delivered and stocked in your designated areas—locker rooms, workout floor, front desk." },
    ],
    commonItems: ["Hand towels", "Full-size towels", "Shower towels", "Yoga towels", "Cleaning cloths", "Staff uniforms"],
    pricingInfo: {
      model: "Per-pound or monthly flat-rate",
      startingAt: "$1.75/lb",
      note: "Flat-rate monthly plans available based on estimated volume. Ideal for predictable budgeting.",
    },
    faqs: [
      { question: "How often can you pick up and deliver?", answer: "We offer daily, 3x/week, or weekly service. Most gyms with 500+ members prefer daily or 3x/week service." },
      { question: "Can you eliminate the gym towel smell?", answer: "Yes. Our high-temperature wash process and antimicrobial treatment eliminate bacteria and odor completely. Many gyms report a noticeable improvement in facility freshness." },
      { question: "Do you provide towels or just wash ours?", answer: "Both! We can launder your existing towels or provide towels on a rental basis. Many gyms prefer the rental model for hassle-free management." },
      { question: "What if we run out of towels mid-day?", answer: "We'll work with you to determine the right inventory level. Emergency deliveries are available same-day if needed." },
      { question: "Can you handle yoga studio towels?", answer: "Absolutely. We clean yoga towels, mat towels, and hot yoga towels with extra care to remove oils and sweat buildup." },
      { question: "How does pricing compare to doing it ourselves?", answer: "Most gyms save 20-40% by outsourcing when you factor in equipment, water, electricity, detergent, and labor costs. We're happy to do a cost comparison for your facility." },
    ],
    testimonial: {
      quote: "Since switching to Laundry & Linen, our members constantly comment on how fresh our towels are. No more complaints about musty smells. It's been a game-changer for member satisfaction.",
      name: "Alex P.",
      title: "Gym Owner",
      location: "Tempe",
    },
    stats: [
      { value: "40+", label: "Gym Partners" },
      { value: "100K+", label: "Towels/Month" },
      { value: "100%", label: "Odor Elimination" },
      { value: "Daily", label: "Service Available" },
    ],
    caseStudy: {
      title: "Tempe Gym Saves $2,000/Month by Outsourcing Towel Service",
      challenge: "A Tempe fitness center with 1,200 members was spending $4,500/month on in-house laundry (equipment lease, water, staff time, detergent).",
      solution: "We replaced their in-house operation with 5x/week pickup and delivery service, and they repurposed their laundry room into additional workout space.",
      result: "Monthly laundry costs dropped to $2,500, they gained 150 sq ft of workout space, and member satisfaction scores for cleanliness increased by 25%.",
    },
    metaDescription: "Gym towel service and fitness center laundry in Arizona. Daily pickup, antimicrobial treatment, odor elimination. Serving gyms, yoga studios, and athletic facilities in Phoenix Metro.",
    cityIntroTemplates: [
      "Gyms and fitness centers in {city} trust Laundry & Linen for fresh, antimicrobial-treated towels delivered on schedule. Keep your members happy and your facility fresh.",
      "{city} fitness facilities choose Laundry & Linen for reliable towel service that eliminates odor and keeps members coming back. Daily service available.",
      "Running a gym in {city}? Stop wasting time and money on in-house laundry. Laundry & Linen provides professional towel service at prices that beat doing it yourself.",
      "From CrossFit boxes to yoga studios, {city} fitness businesses rely on Laundry & Linen for consistent, high-quality towel and uniform service.",
    ],
  },
  {
    slug: "salons-spas",
    name: "Salons & Spas",
    shortName: "Salons & Spas",
    description: "Luxury linen and towel service for salons, spas, barbershops, and beauty businesses in Arizona.",
    icon: "Scissors",
    heroTagline: "Luxury Linen Service for Arizona Salons & Spas",
    heroDescription: "Your clients expect perfection from chair to towel. Laundry & Linen provides salon and spa-grade towel and linen service that matches your high standards.",
    whyNeedService: "In the beauty and wellness industry, every detail matters. Chemical-stained towels, rough linens, or inconsistent quality can diminish the client experience you've worked hard to build. Professional laundry service ensures your towels are soft, your capes are spotless, and your linens feel luxurious—every time.",
    benefits: [
      "Chemical stain removal (hair dye, bleach, oils)",
      "Ultra-soft finish for client comfort",
      "Consistent white brilliance for towels",
      "Color-safe cleaning for colored linens",
      "Hypoallergenic detergents for sensitive skin",
      "Flexible pickup schedules",
      "Same-day rush for busy weekends",
      "Separate handling for different linen types",
      "Eco-friendly options available",
    ],
    features: [
      "Salon towels and hand towels",
      "Spa robes and wraps",
      "Massage sheets and blankets",
      "Capes and smocks",
      "Hot towel service linens",
      "Barber towels",
      "Facial towels and headbands",
      "Staff uniforms and aprons",
    ],
    processSteps: [
      { title: "Schedule Service", description: "Choose from daily, 3x/week, or weekly pickup to match your salon's volume and busiest days." },
      { title: "Pickup & Sort", description: "We collect soiled linens, sorting by type and color to ensure proper treatment for each item." },
      { title: "Specialized Cleaning", description: "Salon linens receive targeted stain treatment for hair dye, oils, and chemicals, plus softening agents for client comfort." },
      { title: "Fresh Delivery", description: "Fluffy, perfectly folded linens returned to your salon ready for clients. Stacked by type for easy access." },
    ],
    commonItems: ["Salon towels", "Hand towels", "Capes", "Spa robes", "Massage sheets", "Barber towels", "Facial towels", "Staff aprons"],
    pricingInfo: {
      model: "Per-pound or monthly plan",
      startingAt: "$1.85/lb",
      note: "Salon-specific pricing includes stain treatment at no extra charge. Volume discounts for multi-location businesses.",
    },
    faqs: [
      { question: "Can you remove hair dye stains from towels?", answer: "We have a very high success rate with hair dye removal using professional-grade treatments. For towels with persistent staining, we offer color-coded towel options to minimize visible staining." },
      { question: "How do you keep white towels bright?", answer: "We use commercial-grade whitening agents and high-temperature sanitization to keep white towels brilliantly white without harsh bleach that deteriorates fabric." },
      { question: "Do you use fragrance-free detergents?", answer: "We offer hypoallergenic, fragrance-free options ideal for spas and salons where clients may have sensitivities. Just let us know your preference." },
      { question: "Can you handle spa robes and massage sheets?", answer: "Absolutely. We handle all spa textiles including robes, massage sheets, blankets, and facial towels with appropriate care for each fabric type." },
      { question: "What's the turnaround time?", answer: "Standard turnaround is 24 hours. Same-day rush service is available for busy weekends and holidays." },
      { question: "Do you serve barbershops too?", answer: "Yes! We serve barbershops, barber colleges, and grooming lounges with towel, cape, and uniform service." },
    ],
    testimonial: {
      quote: "Our clients notice the difference immediately—the towels are softer, brighter, and smell amazing. Laundry & Linen handles our dye-stained towels like magic. Best business decision we've made.",
      name: "Lisa M.",
      title: "Salon Owner",
      location: "Paradise Valley",
    },
    stats: [
      { value: "60+", label: "Salons & Spas Served" },
      { value: "95%", label: "Dye Stain Removal" },
      { value: "24hr", label: "Standard Turnaround" },
      { value: "0", label: "Chemical Residue" },
    ],
    caseStudy: {
      title: "Paradise Valley Spa Upgrades Client Experience with Professional Linens",
      challenge: "A high-end Paradise Valley spa was washing linens in-house but couldn't achieve the softness and consistency their luxury clientele expected.",
      solution: "We implemented a 3x/week service with spa-grade softening treatment, separate handling for robes vs. towels, and quality inspection for every delivery.",
      result: "Client satisfaction scores for ambiance and comfort increased by 20%. The spa repurposed their laundry staff to client-facing roles, improving service capacity.",
    },
    metaDescription: "Salon and spa laundry service in Arizona. Dye stain removal, ultra-soft towels, hypoallergenic cleaning. Serving salons, spas, and barbershops in Phoenix Metro.",
    cityIntroTemplates: [
      "Salons and spas in {city} trust Laundry & Linen for ultra-soft, brilliantly clean towels and linens. Expert dye stain removal and hypoallergenic options available.",
      "{city}'s beauty professionals choose Laundry & Linen for reliable linen service that matches their high standards. Spa robes, salon towels, and more.",
      "Running a salon or spa in {city}? Elevate your client experience with professionally cleaned, ultra-soft linens from Laundry & Linen.",
      "From upscale spas to neighborhood barbershops, {city} beauty businesses rely on Laundry & Linen for consistent, high-quality towel and linen service.",
    ],
  },
  {
    slug: "healthcare",
    name: "Medical & Healthcare",
    shortName: "Healthcare",
    description: "Healthcare-compliant laundry service for medical offices, dental practices, urgent care, and wellness clinics in Arizona.",
    icon: "HeartPulse",
    heroTagline: "Healthcare Laundry That Meets Your Compliance Standards",
    heroDescription: "OSHA-compliant processing, infection control protocols, and reliable delivery. Laundry & Linen serves medical offices, dental practices, and healthcare facilities across Arizona.",
    whyNeedService: "Healthcare laundry isn't just about cleanliness—it's about compliance and patient safety. Improperly cleaned scrubs, lab coats, or patient gowns can pose infection risks. Professional healthcare laundry service ensures your textiles meet regulatory standards while reducing liability.",
    benefits: [
      "OSHA-compliant handling and processing",
      "High-temperature sanitization for infection control",
      "Color-coded bagging for contaminated items",
      "HIPAA-aware staff and procedures",
      "Consistent inventory management",
      "Reliable delivery schedules for clinical operations",
      "Documented chain of custody",
      "Antimicrobial treatment available",
      "Separate processing from general laundry",
    ],
    features: [
      "Scrubs and lab coats",
      "Patient gowns and drapes",
      "Exam table paper alternatives (cloth)",
      "Blankets and pillows",
      "Towels and washcloths",
      "Dental bibs and patient napkins",
      "Staff uniforms",
      "Waiting room throws and pillows",
    ],
    processSteps: [
      { title: "Compliance Setup", description: "We review your facility's requirements, set up color-coded collection bags, and establish handling protocols for your specific needs." },
      { title: "Secure Pickup", description: "Trained drivers collect soiled items in sealed, color-coded bags. Chain of custody documented at every step." },
      { title: "Sanitized Processing", description: "Items processed separately from general laundry using high-temperature sanitization, antimicrobial agents, and compliance-grade detergents." },
      { title: "Verified Delivery", description: "Clean, sanitized items delivered in sealed packaging with temperature and process verification documentation." },
    ],
    commonItems: ["Scrubs", "Lab coats", "Patient gowns", "Exam drapes", "Towels", "Blankets", "Staff uniforms", "Dental bibs"],
    pricingInfo: {
      model: "Per-pound with compliance surcharge",
      startingAt: "$2.25/lb",
      note: "Healthcare-grade processing includes compliance documentation and separate handling. Volume discounts available for multi-location practices.",
    },
    faqs: [
      { question: "Is your processing OSHA-compliant?", answer: "Yes. We follow all OSHA bloodborne pathogen standards for handling and processing healthcare textiles, including proper bagging, transport, and sanitization procedures." },
      { question: "Do you handle contaminated linens?", answer: "Yes. We have protocols for handling and processing contaminated items with appropriate PPE, sealed transport, and high-temperature sanitization." },
      { question: "Can you provide documentation for audits?", answer: "Absolutely. We provide processing documentation including wash temperatures, chemical concentrations, and chain of custody records for compliance audits." },
      { question: "Do you serve dental offices?", answer: "Yes. We serve dental practices, oral surgery offices, and orthodontic clinics with scrubs, patient bibs, and towel service." },
      { question: "How do you prevent cross-contamination?", answer: "Healthcare items are processed separately from all other laundry, using dedicated equipment and following strict contamination prevention protocols." },
      { question: "What's the turnaround for healthcare laundry?", answer: "Standard turnaround is 24-48 hours with scheduled delivery. Rush service is available for urgent needs." },
    ],
    testimonial: {
      quote: "Finding a laundry service that understands healthcare compliance was a challenge until we found Laundry & Linen. Their documentation and consistent quality give us peace of mind.",
      name: "Dr. Sarah K.",
      title: "Practice Owner",
      location: "Chandler",
    },
    stats: [
      { value: "25+", label: "Medical Practices Served" },
      { value: "100%", label: "Compliance Rate" },
      { value: "160°F+", label: "Sanitization Temp" },
      { value: "0", label: "Compliance Issues" },
    ],
    caseStudy: {
      title: "Chandler Medical Practice Streamlines Linen Management",
      challenge: "A multi-provider Chandler medical practice was spending excessive staff time sorting, transporting, and managing their laundry, diverting from patient care.",
      solution: "We installed color-coded collection stations, set up 3x/week pickup, and provided compliance documentation for their accreditation records.",
      result: "The practice saved 15 staff-hours per week previously spent on laundry management, maintained perfect compliance scores, and reduced annual linen costs by 25%.",
    },
    metaDescription: "Healthcare laundry service in Arizona. OSHA-compliant processing, infection control, scrubs and lab coats. Serving medical offices, dental practices, and clinics in Phoenix Metro.",
    cityIntroTemplates: [
      "Medical practices in {city} trust Laundry & Linen for OSHA-compliant laundry service. Scrubs, lab coats, and patient linens processed with healthcare-grade sanitization.",
      "{city} healthcare providers choose Laundry & Linen for reliable, compliant laundry service that meets regulatory standards. Documentation provided for audits.",
      "Running a medical or dental practice in {city}? Laundry & Linen handles your scrubs, gowns, and linens with healthcare-compliant processing and reliable delivery.",
      "From busy urgent care centers to specialty clinics, {city} healthcare facilities rely on Laundry & Linen for safe, sanitized linen service.",
    ],
  },
  {
    slug: "event-venues",
    name: "Event Venues & Convention Centers",
    shortName: "Event Venues",
    description: "Event linen and decor laundry service for venues, convention centers, wedding locations, and banquet halls in Arizona.",
    icon: "PartyPopper",
    heroTagline: "Flawless Linens for Every Arizona Event",
    heroDescription: "From weddings to conventions, your events deserve perfect linens. Laundry & Linen provides professional linen service for Arizona's event venues with same-day turnaround available.",
    whyNeedService: "Events live and die by the details. Wrinkled tablecloths, stained napkins, or missing chair covers can undermine months of planning. Professional event linen service ensures every table setting is flawless, every napkin is crisp, and every detail is perfect—no matter how many guests you're hosting.",
    benefits: [
      "Same-day turnaround for back-to-back events",
      "Professional pressing and folding",
      "Large volume capacity for conventions",
      "Color-matching for themed events",
      "Emergency rush service available",
      "Pickup and delivery to venue",
      "Pre-event quality inspection",
      "Post-event stain treatment",
      "Seasonal storage options",
      "Custom fold and presentation options",
    ],
    features: [
      "Tablecloths (all sizes, rounds, rectangles)",
      "Cloth napkins (multiple colors)",
      "Chair covers and sashes",
      "Table runners and overlays",
      "Banquet linens",
      "Buffet skirting",
      "Stage curtains and draping",
      "Decorative textiles",
    ],
    processSteps: [
      { title: "Event Planning", description: "Share your event schedule with us. We'll plan linen logistics around your setup/teardown timeline." },
      { title: "Pre-Event Delivery", description: "Freshly pressed linens delivered to your venue before setup, organized by type and table assignment." },
      { title: "Post-Event Pickup", description: "After the event, we collect all linens. No need for your staff to sort—we handle everything." },
      { title: "Cleaning & Storage", description: "Linens are professionally cleaned, pressed, and either returned or stored for your next event." },
    ],
    commonItems: ["Tablecloths", "Napkins", "Chair covers", "Sashes", "Table runners", "Overlays", "Banquet linens", "Skirting"],
    pricingInfo: {
      model: "Per-piece event pricing",
      startingAt: "$2.50/tablecloth",
      note: "Volume pricing for large events and recurring venue contracts. Custom quotes for conventions and multi-day events.",
    },
    faqs: [
      { question: "Can you handle large convention-sized events?", answer: "Yes. We've serviced events with 1,000+ place settings. We maintain surge capacity for large events and can scale up with advance notice." },
      { question: "Do you offer linen rental or just cleaning?", answer: "We primarily provide cleaning services for venue-owned linens. For linen rental needs, we can connect you with our partner suppliers." },
      { question: "What about same-day turnaround for weekend events?", answer: "Yes, we offer same-day service for Friday/Saturday events with pickup after teardown and delivery before the next day's setup." },
      { question: "Can you match specific colors for themed events?", answer: "We maintain color integrity through careful sorting and cleaning. For specific color requests, we can coordinate with linen suppliers." },
      { question: "How do you handle post-event stains?", answer: "Red wine, food spills, candle wax—we've seen it all. Professional stain treatment is included in our event linen service." },
      { question: "Do you offer seasonal storage for event linens?", answer: "Yes. We offer climate-controlled storage for off-season linens, with easy retrieval when you need them for your next event." },
    ],
    testimonial: {
      quote: "We host 200+ events per year and Laundry & Linen never misses a beat. Same-day turnaround for back-to-back weddings, perfect pressing, and always on time. They're essential to our operation.",
      name: "Patricia H.",
      title: "Venue Director",
      location: "Mesa",
    },
    stats: [
      { value: "200+", label: "Events/Year" },
      { value: "1,000+", label: "Max Place Settings" },
      { value: "Same Day", label: "Turnaround Available" },
      { value: "100%", label: "On-Time Events" },
    ],
    caseStudy: {
      title: "Mesa Event Venue Handles Back-to-Back Wedding Season",
      challenge: "A popular Mesa wedding venue was struggling with linen turnaround during peak season (October-March), when they hosted weddings Thursday-Sunday.",
      solution: "We implemented daily pickup/delivery during peak season with same-day turnaround capability, plus a dedicated inventory of backup linens.",
      result: "The venue was able to book back-to-back events without linen concerns, increasing revenue by 30% during peak season.",
    },
    metaDescription: "Event venue laundry service in Arizona. Same-day turnaround, professional pressing, large-volume capacity. Serving wedding venues, convention centers, and banquet halls in Phoenix Metro.",
    cityIntroTemplates: [
      "Event venues in {city} partner with Laundry & Linen for flawless linens at every event. Same-day turnaround, professional pressing, and large-volume capacity.",
      "{city}'s event industry trusts Laundry & Linen for reliable linen service from intimate gatherings to large conventions. Perfect pressing guaranteed.",
      "Hosting events in {city}? Laundry & Linen ensures your tablecloths, napkins, and linens are pristine for every occasion. Same-day service available for back-to-back events.",
      "From wedding venues to corporate event spaces, {city} businesses rely on Laundry & Linen for professional event linen service with guaranteed quality.",
    ],
  },
];

// Helper functions
export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((ind) => ind.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return INDUSTRIES.map((ind) => ind.slug);
}

export function getAllIndustryCityCombinations(): { industry: string; city: string }[] {
  const combinations: { industry: string; city: string }[] = [];

  for (const industry of INDUSTRIES) {
    for (const location of LOCATIONS) {
      combinations.push({
        industry: industry.slug,
        city: location.slug,
      });
    }
  }

  return combinations;
}
