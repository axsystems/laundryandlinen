// Comprehensive Phoenix Metro Area Locations for pSEO
// 25-30 mile radius coverage

export interface Location {
  slug: string;
  name: string;
  county: string;
  region: string;
  zipCodes: string[];
  coordinates: { lat: number; lng: number };
  population?: number;
  neighborhoodsServed?: string[];
  landmarks?: string[];
  description: string;
  serviceDays?: string[]; // Limited service days (e.g., ["Monday", "Wednesday", "Friday"])
}

export interface ServiceLocation {
  citySlug: string;
  serviceSlug: string;
  title: string;
  description: string;
}

// All cities and major areas in Phoenix Metro (25-30 mile radius)
export const LOCATIONS: Location[] = [
  // === EAST VALLEY ===
  {
    slug: "tempe",
    name: "Tempe",
    county: "Maricopa",
    region: "East Valley",
    zipCodes: ["85281", "85282", "85283", "85284", "85285", "85287"],
    coordinates: { lat: 33.4255, lng: -111.9400 },
    population: 185000,
    neighborhoodsServed: ["Downtown Tempe", "ASU Campus", "Tempe Town Lake", "South Tempe", "Alameda", "University Heights", "Maple-Ash", "Holdeman"],
    landmarks: ["Arizona State University", "Tempe Town Lake", "Mill Avenue", "Tempe Marketplace"],
    description: "Home to Arizona State University, Tempe is a vibrant college town with a thriving downtown, beautiful lake, and diverse community.",
  },
  {
    slug: "scottsdale",
    name: "Scottsdale",
    county: "Maricopa",
    region: "East Valley",
    zipCodes: ["85250", "85251", "85252", "85253", "85254", "85255", "85256", "85257", "85258", "85259", "85260", "85261", "85262", "85266", "85267", "85268"],
    coordinates: { lat: 33.4942, lng: -111.9261 },
    population: 250000,
    neighborhoodsServed: ["Old Town Scottsdale", "North Scottsdale", "South Scottsdale", "McCormick Ranch", "Gainey Ranch", "DC Ranch", "Grayhawk", "Kierland", "Paradise Valley Village"],
    landmarks: ["Old Town Scottsdale", "Scottsdale Fashion Square", "TPC Scottsdale", "McDowell Sonoran Preserve"],
    description: "Known for its upscale resorts, world-class golf courses, vibrant nightlife, and thriving arts district.",
  },
  {
    slug: "mesa",
    name: "Mesa",
    county: "Maricopa",
    region: "East Valley",
    zipCodes: ["85201", "85202", "85203", "85204", "85205", "85206", "85207", "85208", "85209", "85210", "85211", "85212", "85213", "85214", "85215", "85216"],
    coordinates: { lat: 33.4152, lng: -111.8315 },
    population: 520000,
    neighborhoodsServed: ["Downtown Mesa", "East Mesa", "West Mesa", "Red Mountain", "Superstition Springs", "Las Sendas", "Alta Mesa", "Dobson Ranch"],
    landmarks: ["Mesa Arts Center", "Sloan Park", "Arizona Museum of Natural History", "Superstition Springs Center"],
    description: "Arizona's third-largest city offering suburban living, spring training baseball, and easy access to outdoor recreation.",
  },
  {
    slug: "chandler",
    name: "Chandler",
    county: "Maricopa",
    region: "East Valley",
    zipCodes: ["85224", "85225", "85226", "85244", "85246", "85248", "85249"],
    coordinates: { lat: 33.3062, lng: -111.8413 },
    population: 275000,
    neighborhoodsServed: ["Downtown Chandler", "Ocotillo", "Sun Groves", "Chandler Heights", "South Chandler", "West Chandler", "Andersen Springs"],
    landmarks: ["Chandler Fashion Center", "Downtown Chandler", "Intel Campus", "Tumbleweed Park"],
    description: "A thriving tech hub with excellent schools, beautiful parks, and a charming downtown district.",
  },
  {
    slug: "gilbert",
    name: "Gilbert",
    county: "Maricopa",
    region: "East Valley",
    zipCodes: ["85233", "85234", "85295", "85296", "85297", "85298", "85299"],
    coordinates: { lat: 33.3528, lng: -111.7890 },
    population: 275000,
    neighborhoodsServed: ["Gilbert Heritage District", "Agritopia", "Morrison Ranch", "Val Vista Lakes", "Seville", "Power Ranch", "Lyons Gate"],
    landmarks: ["Gilbert Heritage District", "Riparian Preserve", "SanTan Village", "Cosmo Park"],
    description: "One of America's fastest-growing towns, known for family-friendly neighborhoods and excellent quality of life.",
  },
  {
    slug: "queen-creek",
    name: "Queen Creek",
    county: "Maricopa",
    region: "East Valley",
    zipCodes: ["85142", "85242"],
    coordinates: { lat: 33.2487, lng: -111.6343 },
    population: 65000,
    neighborhoodsServed: ["Queen Creek Town Center", "Hastings Farms", "Encanterra", "Cortina", "Sossaman Estates"],
    landmarks: ["Queen Creek Olive Mill", "Schnepf Farms", "Queen Creek Marketplace"],
    description: "A charming rural community known for agritourism, olive groves, and family-oriented living.",
  },
  {
    slug: "apache-junction",
    name: "Apache Junction",
    county: "Pinal",
    region: "East Valley",
    zipCodes: ["85117", "85118", "85119", "85120"],
    coordinates: { lat: 33.4151, lng: -111.5496 },
    population: 42000,
    neighborhoodsServed: ["Downtown Apache Junction", "Gold Canyon", "Superstition Mountain"],
    landmarks: ["Superstition Mountains", "Lost Dutchman State Park", "Goldfield Ghost Town"],
    description: "Gateway to the Superstition Mountains, offering stunning desert scenery and outdoor adventure.",
  },
  {
    slug: "fountain-hills",
    name: "Fountain Hills",
    county: "Maricopa",
    region: "East Valley",
    zipCodes: ["85268", "85269"],
    coordinates: { lat: 33.6073, lng: -111.7174 },
    population: 25000,
    neighborhoodsServed: ["Town Center", "Firerock", "Eagle Mountain", "CopperWynd"],
    landmarks: ["Fountain Park", "World's Tallest Fountain", "McDowell Mountain Regional Park"],
    description: "An upscale community famous for its world-renowned fountain and stunning mountain views.",
  },

  // === WEST VALLEY ===
  {
    slug: "glendale",
    name: "Glendale",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85301", "85302", "85303", "85304", "85305", "85306", "85307", "85308", "85310", "85311", "85312", "85318"],
    coordinates: { lat: 33.5387, lng: -112.1860 },
    population: 250000,
    neighborhoodsServed: ["Downtown Glendale", "Arrowhead", "Westgate", "Historic Catlin Court", "Thunderbird", "North Glendale"],
    landmarks: ["State Farm Stadium", "Westgate Entertainment District", "Glendale Glitters", "Historic Downtown"],
    description: "Home to the Arizona Cardinals and Coyotes, with a charming antique district and year-round entertainment.",
  },
  {
    slug: "peoria",
    name: "Peoria",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85345", "85380", "85381", "85382", "85383", "85385"],
    coordinates: { lat: 33.5806, lng: -112.2374 },
    population: 175000,
    neighborhoodsServed: ["Old Town Peoria", "Vistancia", "Westwing", "Lake Pleasant", "Sunrise Mountain"],
    landmarks: ["Peoria Sports Complex", "Lake Pleasant", "Challenger Space Center"],
    description: "A family-friendly city with spring training baseball, beautiful lakes, and excellent schools.",
  },
  {
    slug: "surprise",
    name: "Surprise",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85374", "85378", "85379", "85387", "85388"],
    coordinates: { lat: 33.6292, lng: -112.3679 },
    population: 145000,
    neighborhoodsServed: ["Original Town Site", "Marley Park", "Rancho Gabriela", "Arizona Traditions", "Sun City Grand"],
    landmarks: ["Surprise Stadium", "Surprise Aquatic Center", "Wildlife World Zoo"],
    description: "One of the fastest-growing cities in Arizona, known for spring training and master-planned communities.",
  },
  {
    slug: "goodyear",
    name: "Goodyear",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85338", "85395"],
    coordinates: { lat: 33.4353, lng: -112.3581 },
    population: 95000,
    neighborhoodsServed: ["Estrella", "Palm Valley", "PebbleCreek", "Canyon Trails", "Estrella Mountain Ranch"],
    landmarks: ["Goodyear Ballpark", "Estrella Mountain Regional Park", "Palm Valley Golf Club"],
    description: "A rapidly growing city with world-class spring training facilities and stunning mountain views.",
  },
  {
    slug: "avondale",
    name: "Avondale",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85323", "85392"],
    coordinates: { lat: 33.4356, lng: -112.3496 },
    population: 90000,
    neighborhoodsServed: ["Garden Lakes", "Coldwater Springs", "Crystal Gardens", "Corte Sierra"],
    landmarks: ["Phoenix Raceway", "Friendship Park", "Avondale Civic Center"],
    description: "Home to Phoenix Raceway, offering affordable family living and convenient valley access.",
  },
  {
    slug: "buckeye",
    name: "Buckeye",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85326", "85396"],
    coordinates: { lat: 33.3703, lng: -112.5838 },
    population: 100000,
    neighborhoodsServed: ["Verrado", "Tartesso", "Festival Ranch", "Sundance", "Westpark"],
    landmarks: ["Skyline Regional Park", "Buckeye Hills Regional Park"],
    description: "Arizona's fastest-growing city, featuring master-planned communities and desert beauty.",
  },
  {
    slug: "litchfield-park",
    name: "Litchfield Park",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85340"],
    coordinates: { lat: 33.4934, lng: -112.3579 },
    population: 7000,
    neighborhoodsServed: ["Village at Litchfield Park", "Litchfield Greens", "Wigwam Resort Area"],
    landmarks: ["The Wigwam Resort", "Litchfield Park Downtown"],
    description: "A charming small town centered around the historic Wigwam Resort, known for tree-lined streets.",
  },
  {
    slug: "el-mirage",
    name: "El Mirage",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85335"],
    coordinates: { lat: 33.6131, lng: -112.3246 },
    population: 36000,
    neighborhoodsServed: ["El Mirage Town Center", "Dysart Ranch"],
    landmarks: ["El Mirage Community Center"],
    description: "A growing community offering affordable housing and easy access to valley amenities.",
  },
  {
    slug: "sun-city",
    name: "Sun City",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85351", "85372", "85373"],
    coordinates: { lat: 33.5978, lng: -112.2712 },
    population: 40000,
    neighborhoodsServed: ["Sun City", "Sun City West"],
    landmarks: ["Sun City Country Club", "Bell Recreation Center"],
    description: "America's first active adult retirement community, offering resort-style living for 55+.",
  },
  {
    slug: "sun-city-west",
    name: "Sun City West",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85375", "85376"],
    coordinates: { lat: 33.6617, lng: -112.3412 },
    population: 30000,
    neighborhoodsServed: ["Sun City West", "Corte Bella"],
    landmarks: ["Sun City West Recreation Centers", "Lizard Acres Golf Course"],
    description: "A premier active adult community with world-class amenities and golf courses.",
  },

  // === CENTRAL PHOENIX ===
  {
    slug: "phoenix",
    name: "Phoenix",
    county: "Maricopa",
    region: "Central Phoenix",
    zipCodes: ["85003", "85004", "85006", "85007", "85008", "85009", "85012", "85013", "85014", "85015", "85016", "85017", "85018", "85019", "85020", "85021", "85022", "85023", "85024", "85027", "85028", "85029", "85031", "85032", "85033", "85034", "85035", "85037", "85040", "85041", "85042", "85043", "85044", "85045", "85048", "85050", "85051", "85053", "85054", "85083", "85085", "85086", "85087"],
    coordinates: { lat: 33.4484, lng: -112.0740 },
    population: 1700000,
    neighborhoodsServed: ["Downtown Phoenix", "Midtown", "Uptown", "Arcadia", "Biltmore", "Camelback East", "Encanto", "Maryvale", "South Phoenix", "Ahwatukee", "Laveen", "North Phoenix", "Desert Ridge", "Deer Valley", "Paradise Valley Village"],
    landmarks: ["Chase Field", "Phoenix Art Museum", "Heard Museum", "Desert Botanical Garden", "South Mountain Park", "Camelback Mountain"],
    description: "The heart of the Valley of the Sun, offering urban living, world-class dining, and endless entertainment.",
  },
  {
    slug: "paradise-valley",
    name: "Paradise Valley",
    county: "Maricopa",
    region: "Central Phoenix",
    zipCodes: ["85253"],
    coordinates: { lat: 33.5311, lng: -111.9425 },
    population: 15000,
    neighborhoodsServed: ["Paradise Valley", "Mummy Mountain", "Camelback Mountain Estates"],
    landmarks: ["Camelback Mountain", "Sanctuary Resort", "Mountain Shadows Resort"],
    description: "Arizona's wealthiest municipality, known for luxury resorts and stunning mountain estates.",
  },

  // === NORTH VALLEY ===
  {
    slug: "cave-creek",
    name: "Cave Creek",
    county: "Maricopa",
    region: "North Valley",
    zipCodes: ["85327", "85331"],
    coordinates: { lat: 33.8314, lng: -111.9507 },
    population: 6000,
    neighborhoodsServed: ["Cave Creek Town Core", "Rancho Manana", "Spur Cross"],
    landmarks: ["Cave Creek Regional Park", "Spur Cross Ranch", "Frontier Town"],
    description: "A rustic Western town known for its cowboy culture, art galleries, and natural beauty.",
  },
  {
    slug: "carefree",
    name: "Carefree",
    county: "Maricopa",
    region: "North Valley",
    zipCodes: ["85377"],
    coordinates: { lat: 33.8222, lng: -111.9181 },
    population: 4000,
    neighborhoodsServed: ["Carefree Town Center", "Black Mountain", "Boulders"],
    landmarks: ["Carefree Sundial", "The Boulders Resort", "Carefree Desert Gardens"],
    description: "An upscale desert community known for its famous sundial and Southwestern charm.",
  },
  {
    slug: "anthem",
    name: "Anthem",
    county: "Maricopa",
    region: "North Valley",
    zipCodes: ["85086"],
    coordinates: { lat: 33.8669, lng: -112.1476 },
    population: 25000,
    neighborhoodsServed: ["Anthem Country Club", "Anthem Parkside", "Anthem Center"],
    landmarks: ["Anthem Community Center", "Anthem Outlets", "Daisy Mountain"],
    description: "A master-planned community offering family-friendly amenities and stunning desert views.",
  },

  // === SOUTH VALLEY ===
  {
    slug: "ahwatukee",
    name: "Ahwatukee",
    county: "Maricopa",
    region: "South Valley",
    zipCodes: ["85044", "85045", "85048"],
    coordinates: { lat: 33.3392, lng: -111.9847 },
    population: 80000,
    neighborhoodsServed: ["Ahwatukee Foothills", "Lakewood", "Mountain Park Ranch", "Club West", "Foothills Club West"],
    landmarks: ["South Mountain Park", "Ahwatukee Foothills Towne Center", "Desert Foothills Park"],
    description: "A suburban village of Phoenix nestled against South Mountain, known for excellent schools and family living.",
  },
  {
    slug: "laveen",
    name: "Laveen",
    county: "Maricopa",
    region: "South Valley",
    zipCodes: ["85339"],
    coordinates: { lat: 33.3631, lng: -112.1663 },
    population: 60000,
    neighborhoodsServed: ["Laveen Village", "Laveen Meadows", "Rogers Ranch", "Cheatham Farms"],
    landmarks: ["South Mountain Park", "Cesar Chavez Park"],
    description: "A growing Phoenix village offering affordable housing and easy downtown access.",
  },
  {
    slug: "tolleson",
    name: "Tolleson",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85353"],
    coordinates: { lat: 33.4501, lng: -112.2590 },
    population: 8000,
    neighborhoodsServed: ["Tolleson Town Center", "91st Avenue Corridor"],
    landmarks: ["Veterans Park", "Tolleson Union High School"],
    description: "A small city with rich agricultural heritage, offering affordable valley living.",
  },
  {
    slug: "youngtown",
    name: "Youngtown",
    county: "Maricopa",
    region: "West Valley",
    zipCodes: ["85363"],
    coordinates: { lat: 33.5942, lng: -112.3029 },
    population: 7000,
    neighborhoodsServed: ["Youngtown"],
    landmarks: ["Youngtown Park"],
    description: "Arizona's first retirement community, offering quiet living near Sun City.",
  },

  // === EXTENDED SERVICE AREAS ===
  {
    slug: "wickenburg",
    name: "Wickenburg",
    county: "Maricopa",
    region: "Northwest Valley",
    zipCodes: ["85390"],
    coordinates: { lat: 33.9687, lng: -112.7296 },
    population: 8000,
    neighborhoodsServed: ["Downtown Wickenburg", "Wickenburg Ranch", "Los Caballeros"],
    landmarks: ["Desert Caballeros Western Museum", "Vulture Mine", "Hassayampa River Preserve"],
    description: "A historic Old West town known for dude ranches, western heritage, and stunning desert scenery.",
    serviceDays: ["Monday", "Wednesday", "Friday"],
  },
];

// Service types for pSEO pages
export const SERVICES_FOR_SEO = [
  {
    slug: "laundry-pickup-delivery",
    name: "Laundry Pickup & Delivery",
    shortName: "Laundry Service",
    description: "Professional laundry pickup and delivery service",
  },
  {
    slug: "wash-and-fold",
    name: "Wash and Fold",
    shortName: "Wash & Fold",
    description: "Expert wash and fold laundry service",
  },
  {
    slug: "dry-cleaning",
    name: "Dry Cleaning",
    shortName: "Dry Cleaning",
    description: "Professional dry cleaning service",
  },
  {
    slug: "commercial-laundry",
    name: "Commercial Laundry",
    shortName: "Commercial",
    description: "Commercial laundry service for businesses",
  },
  {
    slug: "bedding-cleaning",
    name: "Bedding & Linen Cleaning",
    shortName: "Bedding Cleaning",
    description: "Professional bedding and linen cleaning",
  },
  {
    slug: "airbnb-laundry",
    name: "Airbnb & Vacation Rental Laundry",
    shortName: "Airbnb Laundry",
    description: "Laundry service for Airbnb and vacation rentals",
  },
  {
    slug: "hotel-laundry",
    name: "Hotel Laundry Service",
    shortName: "Hotel Laundry",
    description: "Professional laundry service for hotels",
  },
  {
    slug: "restaurant-laundry",
    name: "Restaurant Laundry Service",
    shortName: "Restaurant Laundry",
    description: "Commercial laundry for restaurants",
  },
];

// Helper functions
export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((loc) => loc.slug === slug);
}

export function getLocationsByRegion(region: string): Location[] {
  return LOCATIONS.filter((loc) => loc.region === region);
}

export function getAllCitySlugs(): string[] {
  return LOCATIONS.map((loc) => loc.slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_FOR_SEO.map((svc) => svc.slug);
}

export function getServiceBySlug(slug: string) {
  return SERVICES_FOR_SEO.find((svc) => svc.slug === slug);
}

// Get nearby cities for internal linking
export function getNearbyCities(slug: string, limit = 5): Location[] {
  const current = getLocationBySlug(slug);
  if (!current) return [];

  return LOCATIONS
    .filter((loc) => loc.slug !== slug)
    .map((loc) => ({
      ...loc,
      distance: Math.sqrt(
        Math.pow(loc.coordinates.lat - current.coordinates.lat, 2) +
        Math.pow(loc.coordinates.lng - current.coordinates.lng, 2)
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

// Generate all city+service combinations
export function getAllCityServiceCombinations(): { city: string; service: string }[] {
  const combinations: { city: string; service: string }[] = [];

  for (const location of LOCATIONS) {
    for (const service of SERVICES_FOR_SEO) {
      combinations.push({
        city: location.slug,
        service: service.slug,
      });
    }
  }

  return combinations;
}

// Get all unique ZIP codes
export function getAllZipCodes(): string[] {
  const zipSet = new Set<string>();
  for (const location of LOCATIONS) {
    for (const zip of location.zipCodes) {
      zipSet.add(zip);
    }
  }
  return Array.from(zipSet).sort();
}

// Get location(s) by ZIP code
export function getLocationsByZipCode(zipCode: string): Location[] {
  return LOCATIONS.filter((loc) => loc.zipCodes.includes(zipCode));
}

// Get primary location for a ZIP code (first match)
export function getPrimaryLocationByZipCode(zipCode: string): Location | undefined {
  return LOCATIONS.find((loc) => loc.zipCodes.includes(zipCode));
}
