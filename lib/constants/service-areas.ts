// Service Areas - Arizona (Phoenix Metro)

export const SERVICE_REGIONS = {
  WEST_VALLEY: {
    id: "west_valley",
    name: "West Valley",
    cities: [
      "Glendale",
      "Peoria",
      "Surprise",
      "Goodyear",
      "Avondale",
      "Buckeye",
      "Litchfield Park",
      "El Mirage",
      "Sun City",
      "Sun City West",
      "Youngtown",
    ],
    zipCodes: [
      "85301", "85302", "85303", "85304", "85305", "85306", "85307", "85308",
      "85310", "85311", "85312", "85318", "85340", "85345", "85351", "85355",
      "85361", "85363", "85373", "85374", "85375", "85378", "85379", "85381",
      "85382", "85383", "85385", "85387", "85388", "85392", "85395",
    ],
  },
  NORTH_PHOENIX: {
    id: "north_phoenix",
    name: "North Phoenix",
    cities: [
      "Paradise Valley",
      "Scottsdale (North)",
      "Cave Creek",
      "Carefree",
      "Anthem",
      "Deer Valley",
      "Desert Ridge",
      "North Phoenix",
    ],
    zipCodes: [
      "85020", "85021", "85022", "85023", "85024", "85027", "85028", "85029",
      "85032", "85050", "85054", "85083", "85085", "85086", "85087", "85253",
      "85254", "85255", "85259", "85260", "85262", "85266", "85331",
    ],
  },
  CENTRAL_PHOENIX: {
    id: "central_phoenix",
    name: "Central Phoenix",
    cities: [
      "Downtown Phoenix",
      "Arcadia",
      "Biltmore",
      "Midtown",
      "Uptown",
      "Encanto",
      "Alhambra",
      "Maryvale",
    ],
    zipCodes: [
      "85003", "85004", "85006", "85007", "85008", "85009", "85012", "85013",
      "85014", "85015", "85016", "85017", "85018", "85019", "85031", "85033",
      "85034", "85035", "85037", "85040", "85041", "85051",
    ],
  },
  EAST_VALLEY: {
    id: "east_valley",
    name: "East Valley",
    cities: [
      "Tempe",
      "Mesa",
      "Chandler",
      "Gilbert",
      "Scottsdale (South)",
      "Queen Creek",
      "Apache Junction",
      "Fountain Hills",
    ],
    zipCodes: [
      "85201", "85202", "85203", "85204", "85205", "85206", "85207", "85208",
      "85209", "85210", "85212", "85213", "85215", "85224", "85225", "85226",
      "85233", "85234", "85236", "85242", "85248", "85249", "85250", "85251",
      "85252", "85256", "85257", "85258", "85268", "85281", "85282", "85283",
      "85284", "85286", "85295", "85296", "85297", "85298",
    ],
  },
};

// All service ZIP codes
export const ALL_SERVICE_ZIP_CODES = Object.values(SERVICE_REGIONS).flatMap(
  (region) => region.zipCodes
);

// Check if ZIP code is serviceable
export function isZipCodeServiceable(zipCode: string): boolean {
  return ALL_SERVICE_ZIP_CODES.includes(zipCode);
}

// Get region by ZIP code
export function getRegionByZipCode(zipCode: string): string | null {
  for (const [, region] of Object.entries(SERVICE_REGIONS)) {
    if (region.zipCodes.includes(zipCode)) {
      return region.name;
    }
  }
  return null;
}

// Business info
export const BUSINESS_INFO = {
  name: "Laundry & Linen",
  phone: "(623) 401-7837",
  email: "hello@laundryandlinen.com",
  website: "https://laundryandlinen.com",
  timezone: "America/Phoenix",
  state: "AZ",
  country: "USA",
};
