// Display pricing for marketing pages
// Actual pricing comes from CleanCloud

export const SERVICES = [
  {
    id: "wash-fold",
    name: "Wash & Fold",
    description: "We wash, dry, and fold your everyday laundry",
    pricePerLb: 2.25,
    minWeight: 10,
    turnaround: "24-48 hours",
    icon: "shirt",
    features: [
      "Sorted by color and fabric",
      "Premium detergents",
      "Neatly folded and packaged",
      "Includes socks and underwear",
    ],
  },
  {
    id: "dry-cleaning",
    name: "Dry Cleaning",
    description: "Professional cleaning for delicate garments",
    pricePerItem: 8.99,
    turnaround: "2-3 business days",
    icon: "sparkles",
    features: [
      "Eco-friendly solvents",
      "Minor repairs included",
      "Professional pressing",
      "Protective garment bags",
    ],
    itemPrices: [
      { item: "Suit (2-piece)", price: 18.99 },
      { item: "Dress", price: 14.99 },
      { item: "Shirt/Blouse", price: 7.99 },
      { item: "Pants/Skirt", price: 8.99 },
      { item: "Coat/Jacket", price: 16.99 },
      { item: "Sweater", price: 9.99 },
    ],
  },
  {
    id: "bedding",
    name: "Bedding & Linens",
    description: "Fresh, clean sheets and household linens",
    pricePerItem: 12.99,
    turnaround: "24-48 hours",
    icon: "bed",
    features: [
      "Comforters and duvets",
      "Sheet sets",
      "Blankets and throws",
      "Table linens",
    ],
    itemPrices: [
      { item: "Comforter (Queen/King)", price: 35.99 },
      { item: "Comforter (Twin/Full)", price: 29.99 },
      { item: "Duvet Cover", price: 18.99 },
      { item: "Sheet Set", price: 15.99 },
      { item: "Blanket", price: 19.99 },
      { item: "Pillow", price: 8.99 },
    ],
  },
  {
    id: "commercial",
    name: "Commercial Services",
    description: "Bulk laundry solutions for businesses",
    priceInfo: "Custom pricing",
    turnaround: "Same-day available",
    icon: "building",
    features: [
      "Apartment complexes",
      "Hotels & Airbnbs",
      "Restaurants & spas",
      "Gyms & fitness centers",
    ],
  },
];

export const ADDONS = [
  { id: "rush", name: "Rush Service", price: 10.0, description: "Same-day turnaround" },
  { id: "fabric-softener", name: "Fabric Softener", price: 2.0, description: "Extra soft results" },
  { id: "scent-free", name: "Scent-Free", price: 0, description: "Fragrance-free detergent" },
  { id: "hang-dry", name: "Hang Dry", price: 5.0, description: "Air dry delicate items" },
  { id: "stain-treatment", name: "Stain Treatment", price: 3.0, description: "Per item special treatment" },
];

export const MINIMUM_ORDER = 15.0;
export const FREE_PICKUP_MINIMUM = 35.0;
export const DELIVERY_FEE = 4.99;
