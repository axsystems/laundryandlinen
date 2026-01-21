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
  // Unique content fields for SEO
  uniqueIntro: string; // City-specific intro paragraph
  demographics: string; // Who lives here
  localBusinesses: string[]; // Types of businesses needing laundry
  whyLaundryService: string; // Why residents need laundry service
  funFact?: string; // Interesting fact about the city
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
    uniqueIntro: "Between classes at ASU and nights on Mill Avenue, Tempe residents live busy lives. Whether you're a student cramming for finals, a young professional working at one of the many tech startups near Tempe Town Lake, or a family enjoying the trails at Papago Park, laundry is the last thing you want on your to-do list. That's where Laundry & Linen comes in—we pick up your dirty clothes and return them fresh, folded, and ready to wear.",
    demographics: "Tempe is home to over 70,000 ASU students, young professionals, tech workers, and families. The median age is just 29, making it one of the youngest cities in Arizona.",
    localBusinesses: ["ASU dormitories", "student housing complexes", "Mill Avenue restaurants", "Tempe Marketplace retailers", "tech startups", "fitness studios", "Airbnb rentals near the stadium"],
    whyLaundryService: "With ASU's demanding academic schedule and Tempe's active lifestyle culture, residents value time-saving services. Students in dorms and apartments often lack adequate laundry facilities, while young professionals prefer to spend weekends at Tempe Town Lake rather than at the laundromat.",
    funFact: "Tempe Town Lake was created by inflatable dams across the Salt River and hosts over 2 million visitors annually.",
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
    uniqueIntro: "Scottsdale residents expect excellence in everything—from the boutiques at Scottsdale Fashion Square to the greens at TPC Scottsdale. Your wardrobe deserves the same premium treatment. Laundry & Linen serves North Scottsdale's luxury estates, the condos of Old Town, and everywhere in between with white-glove laundry service that matches Scottsdale's high standards.",
    demographics: "Scottsdale attracts affluent professionals, retirees, resort visitors, and executives. The median household income exceeds $90,000, with many residents working in healthcare, finance, and tourism.",
    localBusinesses: ["luxury resorts and spas", "golf courses and country clubs", "high-end restaurants", "art galleries", "medical offices", "corporate headquarters", "vacation rentals"],
    whyLaundryService: "Scottsdale's busy professionals and retirees value convenience and quality. With so many golf outings, spa days, and social events, residents need pristine clothing without the hassle. The city's thriving short-term rental market also creates demand for fast-turnaround linen service.",
    funFact: "Scottsdale has more than 200 golf courses within 30 minutes, earning it the nickname 'The West's Most Western Town' for its blend of luxury and cowboy heritage.",
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
    uniqueIntro: "As Arizona's third-largest city, Mesa offers the best of suburban living with big-city amenities. From the spring training crowds at Sloan Park to the hiking trails of Usery Mountain, Mesa families are always on the move. Laundry & Linen helps Mesa residents keep up with their active lifestyles by handling the laundry so you can focus on what matters—family, work, and weekend adventures.",
    demographics: "Mesa is incredibly diverse, home to young families, retirees in active adult communities, and a significant LDS population. The city spans from affordable starter homes in West Mesa to luxury estates in Las Sendas.",
    localBusinesses: ["spring training facilities", "Banner medical centers", "aerospace companies like Boeing", "Mesa Community College", "retail centers", "restaurants", "senior living facilities"],
    whyLaundryService: "With over 500,000 residents spread across a massive geographic area, Mesa families are always driving kids to activities, commuting to work, or enjoying the outdoors. Time is precious, and professional laundry service gives it back.",
    funFact: "Mesa hosts spring training for the Chicago Cubs and Oakland Athletics, bringing hundreds of thousands of visitors each February and March.",
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
    uniqueIntro: "Chandler has transformed from agricultural roots into Arizona's Silicon Desert, home to Intel's massive semiconductor campus and countless tech companies. The engineers, executives, and families who call Chandler home work hard and expect premium services that match their professional standards. Laundry & Linen delivers exactly that—meticulous care for your garments with the convenience busy tech professionals demand.",
    demographics: "Chandler attracts highly educated tech workers, engineers, and their families. The city consistently ranks among the best places to live in America, with top-rated schools and low crime rates.",
    localBusinesses: ["Intel and semiconductor companies", "data centers", "tech startups", "Downtown Chandler restaurants", "Chandler Fashion Center retailers", "medical facilities", "corporate offices"],
    whyLaundryService: "Tech professionals in Chandler work demanding schedules, often with long hours and travel. They'd rather spend their free time at Downtown Chandler's restaurants or Tumbleweed Park with family than doing laundry. Our service fits perfectly into their optimized lifestyles.",
    funFact: "Intel's Chandler campus is one of the most advanced semiconductor manufacturing facilities in the world, producing chips that power millions of devices globally.",
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
    uniqueIntro: "Gilbert went from 5,000 residents in 1980 to over 275,000 today—and for good reason. Families flock here for award-winning schools, safe neighborhoods, and that small-town feel with big-city amenities. But between soccer practice, swim meets, and school activities, Gilbert parents are stretched thin. Laundry & Linen gives Gilbert families their weekends back with reliable pickup and delivery service.",
    demographics: "Gilbert is quintessentially family-oriented, with a median age of 33 and an average household size above the national average. Parents here prioritize education and activities for their children.",
    localBusinesses: ["Heritage District restaurants and shops", "SanTan Village retailers", "medical offices", "schools and sports facilities", "Agritopia farm-to-table businesses", "family entertainment centers"],
    whyLaundryService: "Gilbert families have more laundry than most—kids' sports uniforms, school clothes, and endless towels from swim teams. Parents juggling careers and children's activities need services that save time without sacrificing quality.",
    funFact: "Gilbert's Agritopia is one of America's most successful agrihoods, featuring a working farm, farm-to-table restaurant, and community where residents grow food together.",
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
    uniqueIntro: "Queen Creek offers something rare in the Phoenix metro—space to breathe, starlit skies, and a genuine small-town community. Families here chose Queen Creek for the horse properties, the peach picking at Schnepf Farms, and schools where teachers know every student's name. Life moves a little slower here, and that's the point. Let Laundry & Linen handle the chores so you can enjoy the Queen Creek lifestyle you came here for.",
    demographics: "Queen Creek attracts families seeking rural living with modern amenities. Many residents work in Gilbert or Chandler but prefer the open spaces and tight-knit community of Queen Creek.",
    localBusinesses: ["Queen Creek Olive Mill", "Schnepf Farms", "local restaurants", "equestrian facilities", "new retail developments", "schools"],
    whyLaundryService: "Queen Creek residents often have larger homes, more outdoor activities, and horse properties—meaning more laundry than typical suburban families. The drive to distant laundromats makes pickup service especially valuable.",
    funFact: "Queen Creek Olive Mill produces award-winning olive oil from trees planted in the Arizona desert, proving olives can thrive in unexpected places.",
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
    uniqueIntro: "Apache Junction sits in the shadow of the legendary Superstition Mountains, where tales of the Lost Dutchman's gold mine still capture imaginations. This is a community of adventurers, retirees, and those who appreciate the rugged beauty of the Sonoran Desert. Whether you're hiking the Superstitions, exploring Goldfield Ghost Town, or simply enjoying the stunning sunsets, Laundry & Linen keeps your gear and garments fresh.",
    demographics: "Apache Junction has a significant retiree population, many of whom are winter visitors escaping colder climates. The community also includes outdoor enthusiasts and those seeking affordable desert living.",
    localBusinesses: ["Lost Dutchman State Park services", "Goldfield Ghost Town", "RV parks and resorts", "local restaurants", "outdoor recreation outfitters", "healthcare facilities"],
    whyLaundryService: "Many Apache Junction residents are snowbirds without permanent laundry facilities, or active retirees who'd rather spend time hiking than doing chores. Our service is perfect for those embracing the laid-back desert lifestyle.",
    funFact: "The Lost Dutchman Mine is America's most famous lost gold mine, with treasure hunters still searching the Superstition Mountains for Jacob Waltz's legendary stash.",
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
    uniqueIntro: "Fountain Hills is defined by its namesake—the world's tallest fountain shooting 560 feet into the Arizona sky. This exclusive community attracts those who appreciate the finer things: championship golf, mountain views from every window, and a pace of life that feels like permanent vacation. Laundry & Linen serves Fountain Hills with the premium service this discerning community expects.",
    demographics: "Fountain Hills residents tend to be affluent retirees, executives, and professionals who chose this community for its beauty, safety, and exclusivity. Many are golfers who appreciate the area's world-class courses.",
    localBusinesses: ["golf courses and country clubs", "spas and wellness centers", "upscale restaurants", "art galleries", "CopperWynd Resort", "professional offices"],
    whyLaundryService: "Fountain Hills residents value their leisure time and expect premium services. Many have vacation homes or travel frequently, making reliable laundry pickup service essential for maintaining their lifestyle.",
    funFact: "The Fountain Hills fountain operates hourly and can be seen from miles away, using 7,000 gallons of water per minute when running at full height.",
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
    uniqueIntro: "Glendale is where Arizona comes to play. From Super Bowls at State Farm Stadium to the famous Glendale Glitters holiday display, this city knows how to host a crowd. But Glendale isn't just about big events—Historic Downtown's antique shops and Catlin Court's bungalows reveal a charming small-town heart. Laundry & Linen serves all of Glendale, from the Arrowhead families to the Westgate party-goers.",
    demographics: "Glendale is diverse and multigenerational, with established neighborhoods in the south and newer master-planned communities like Arrowhead in the north. The city attracts families, young professionals, and sports fans.",
    localBusinesses: ["State Farm Stadium events", "Westgate Entertainment District venues", "antique shops in Historic Downtown", "Arrowhead Towne Center retailers", "healthcare facilities", "restaurants and bars"],
    whyLaundryService: "Glendale residents juggle work, family, and an active social calendar filled with Cardinals games, concerts, and events. Our pickup and delivery service keeps wardrobes game-day ready without the time commitment.",
    funFact: "Glendale has hosted multiple Super Bowls and is one of only a handful of cities to host both the Super Bowl and the NCAA Final Four.",
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
    uniqueIntro: "Peoria perfectly blends outdoor adventure with suburban comfort. Spend mornings boating on Lake Pleasant, catch spring training at the Peoria Sports Complex, and return home to one of Arizona's best school districts. Peoria families live active lives—between Little League, swim lessons, and camping trips, there's always laundry piling up. That's where Laundry & Linen comes in.",
    demographics: "Peoria attracts families seeking excellent schools and outdoor recreation. The city spans from established neighborhoods in Old Town to new master-planned communities like Vistancia in the north.",
    localBusinesses: ["Peoria Sports Complex", "Lake Pleasant marinas", "Challenger Space Center", "P83 entertainment district", "schools", "medical offices", "retail centers"],
    whyLaundryService: "Peoria's outdoor lifestyle means extra laundry—lake towels, camping gear, sports uniforms, and more. Families here need a service that can keep up with their active schedules.",
    funFact: "Lake Pleasant is the Valley's largest lake, offering over 10,000 acres of water and 148 miles of shoreline for boating, fishing, and camping.",
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
    uniqueIntro: "Surprise lives up to its name—what was once a small farming community has exploded into one of Arizona's most desirable destinations. Young families are drawn to master-planned communities like Marley Park with its tree-lined streets and community pools, while active adults enjoy Sun City Grand's resort lifestyle. Wherever you live in Surprise, Laundry & Linen delivers convenient service to your door.",
    demographics: "Surprise is split between young families in newer developments and active adults in 55+ communities. The city has grown from 30,000 to over 145,000 in just two decades.",
    localBusinesses: ["Surprise Stadium (Texas Rangers and Kansas City Royals spring training)", "Wildlife World Zoo", "Surprise Recreation Campus", "retail centers", "restaurants", "active adult community amenities"],
    whyLaundryService: "Surprise's rapid growth means many residents are new to the area and establishing routines. Our service helps busy families and active retirees simplify their lives from day one.",
    funFact: "Surprise was named when the original founder, Flora Mae Statler, expressed 'surprise' at how her small community grew beyond expectations.",
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
    uniqueIntro: "Named after the tire company that once farmed cotton here, Goodyear has reinvented itself as a premier West Valley destination. Estrella Mountain Ranch offers hiking trails with valley-wide views, PebbleCreek draws active adults to its championship golf, and young families fill the parks of Canyon Trails. Laundry & Linen serves every corner of Goodyear with reliable pickup and delivery.",
    demographics: "Goodyear attracts a mix of young families, professionals, and active adults. Master-planned communities like Estrella have created instant neighborhoods with built-in amenities.",
    localBusinesses: ["Goodyear Ballpark (Cleveland Guardians and Cincinnati Reds)", "Estrella Mountain Regional Park", "golf courses", "retail developments", "aerospace companies", "healthcare facilities"],
    whyLaundryService: "Goodyear residents chose their city for quality of life, not chores. Whether hiking Estrella Mountain or enjoying a round of golf, they'd rather be outdoors than doing laundry.",
    funFact: "Goodyear was founded in 1917 when the Goodyear Tire and Rubber Company established cotton farms to grow material for tires and blimps.",
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
    uniqueIntro: "Avondale offers something increasingly rare in the Phoenix metro—affordable homes in established neighborhoods with easy freeway access to anywhere in the valley. The roar of engines at Phoenix Raceway brings NASCAR excitement twice a year, while parks like Friendship Park provide everyday family fun. Laundry & Linen helps Avondale families stretch their budgets further by offering professional laundry service at reasonable prices.",
    demographics: "Avondale is a working-class and middle-class community with diverse families, many of whom commute throughout the valley. The city offers some of the most affordable housing in Maricopa County.",
    localBusinesses: ["Phoenix Raceway", "distribution centers", "retail shops", "restaurants", "schools", "small businesses"],
    whyLaundryService: "Avondale families often have both parents working and commuting, leaving little time for household chores. Affordable, reliable laundry service fits perfectly into busy working family budgets.",
    funFact: "Phoenix Raceway hosts two NASCAR Cup Series races annually, bringing hundreds of thousands of racing fans and significant economic impact to the city.",
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
    uniqueIntro: "Buckeye isn't just growing—it's the fastest-growing city in America. What draws people here? Communities like Verrado with its Main Street charm, affordable new homes, and desert beauty stretching to the White Tank Mountains. As Buckeye's population doubles and triples, Laundry & Linen is growing too, bringing convenient pickup and delivery to the new families making Buckeye home.",
    demographics: "Buckeye is attracting young families priced out of closer-in valley cities. Many residents work in Phoenix or other valley cities but prefer Buckeye's new homes and community feel.",
    localBusinesses: ["Verrado Main Street shops", "new retail developments", "schools", "parks and recreation", "healthcare facilities opening to serve growth"],
    whyLaundryService: "Many Buckeye residents moved from out of state and are used to convenient services. As the city grows faster than infrastructure, laundry pickup fills a real need for busy new residents.",
    funFact: "Buckeye is projected to grow from 100,000 today to over 500,000 residents, making it potentially the second-largest city in Arizona within decades.",
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
    uniqueIntro: "Litchfield Park is the West Valley's hidden gem—a tiny town of tree-lined streets, historic character, and the iconic Wigwam Resort. While the surrounding cities boom, Litchfield Park maintains its small-town charm through careful planning and devoted residents. Laundry & Linen is honored to serve this special community with the personalized attention its residents appreciate.",
    demographics: "Litchfield Park attracts affluent professionals and families who appreciate its small-town character, excellent schools, and proximity to Luke Air Force Base.",
    localBusinesses: ["The Wigwam Resort", "local boutiques", "restaurants", "professional offices", "golf courses"],
    whyLaundryService: "Litchfield Park residents chose their town for quality of life. They appreciate local, personalized services that understand their community's unique character.",
    funFact: "Litchfield Park was founded in 1916 as a company town for Goodyear Tire, with The Wigwam originally built as a guest house for company executives.",
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
    uniqueIntro: "El Mirage proves that affordability and quality of life can coexist. This small city offers working families the chance to own homes and build community without the price tags of neighboring cities. As El Mirage grows and develops, Laundry & Linen is here to provide the convenient services that make life easier for hardworking families.",
    demographics: "El Mirage is a working-class community with young families and longtime residents. Many work in nearby cities but appreciate El Mirage's affordable housing and close-knit neighborhoods.",
    localBusinesses: ["local shops", "restaurants", "schools", "community center", "small businesses"],
    whyLaundryService: "El Mirage families are often juggling multiple jobs and responsibilities. Affordable laundry service gives them back precious time to spend with family.",
    funFact: "El Mirage was originally a farming community, and its name reflects the mirages that appear over the desert landscape on hot summer days.",
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
    uniqueIntro: "Sun City revolutionized retirement when Del Webb opened it in 1960—instead of rocking chairs, he offered golf courses, recreation centers, and an active lifestyle. Sixty years later, Sun City residents are still redefining what it means to be 55+, filling their days with golf, clubs, and activities. Laundry & Linen helps Sun City residents spend more time living and less time on chores.",
    demographics: "Sun City is exclusively for adults 55 and older, with most residents being retirees. The community attracts active seniors who want amenities, social activities, and maintenance-free living.",
    localBusinesses: ["recreation centers", "golf courses", "restaurants", "medical facilities", "clubs and activity spaces", "retail shops"],
    whyLaundryService: "Many Sun City residents have physical limitations that make laundry difficult, or simply prefer to spend their retirement years on hobbies rather than housework. Our pickup service is perfect for independent seniors.",
    funFact: "When Sun City opened in 1960, it sold out its first weekend with over 100,000 visitors coming to see Del Webb's revolutionary retirement concept.",
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
    uniqueIntro: "Sun City West took everything great about Sun City and made it bigger—more golf courses, more recreation centers, and more ways to enjoy retirement. This 55+ community offers an embarrassment of riches: seven golf courses, four recreation centers, and hundreds of clubs and activities. With so much to do, who has time for laundry? Laundry & Linen handles it so you can get back to living.",
    demographics: "Sun City West residents are active retirees, many of whom moved from other states specifically for this community's amenities and Arizona's climate.",
    localBusinesses: ["seven golf courses", "recreation centers", "pools", "restaurants", "medical facilities", "clubs"],
    whyLaundryService: "Sun City West residents moved here to enjoy retirement, not to do chores. Many travel frequently or have seasonal visitors, making reliable laundry service essential.",
    funFact: "Sun City West has over 100 chartered clubs, from woodworking to pickleball to theater, ensuring residents never run out of ways to stay active and social.",
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
    uniqueIntro: "Phoenix is the fifth-largest city in America and the heart of the Valley of the Sun. From the urban energy of Downtown to the million-dollar estates of Arcadia, from the trails of South Mountain to the shopping at Desert Ridge, Phoenix offers everything. With 1.7 million residents spread across 517 square miles, Phoenix is a city of neighborhoods—each with its own character. Laundry & Linen serves them all.",
    demographics: "Phoenix is incredibly diverse, from young professionals in Roosevelt Row condos to families in North Phoenix to retirees in Ahwatukee. The city's neighborhoods range from historic to brand new, affordable to ultra-luxury.",
    localBusinesses: ["downtown offices and hotels", "hospitals and medical centers", "Arizona State University Downtown", "Sky Harbor Airport hotels", "restaurants and bars", "retail centers", "tech companies", "Airbnb rentals"],
    whyLaundryService: "Phoenix residents are busy—the city's spread-out nature means lots of driving, and the summer heat makes any outdoor chore miserable. Professional laundry pickup is a no-brainer for time-strapped Phoenicians.",
    funFact: "Phoenix is the hottest city in America, with an average of 299 sunny days per year and summer temperatures regularly exceeding 110°F.",
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
    uniqueIntro: "Paradise Valley is Arizona's Beverly Hills—a town of gated estates, world-class resorts, and views of Camelback and Mummy Mountains from every angle. Residents here include CEOs, celebrities, and athletes who chose this exclusive enclave for privacy and prestige. Laundry & Linen provides the discreet, premium service that Paradise Valley residents expect.",
    demographics: "Paradise Valley has the highest per-capita income in Arizona. Residents are executives, entrepreneurs, and retirees who demand the finest in everything, from their cars to their dry cleaning.",
    localBusinesses: ["luxury resorts like Sanctuary and Mountain Shadows", "private clubs", "high-end restaurants", "professional services", "estate management companies"],
    whyLaundryService: "Paradise Valley residents hire professionals for everything from landscaping to personal shopping. Premium laundry service fits seamlessly into their lifestyle of delegated tasks and high standards.",
    funFact: "Paradise Valley prohibits commercial development by design—there are no shops, restaurants, or businesses, making it a purely residential retreat.",
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
    uniqueIntro: "Cave Creek is where the Wild West still lives. This quirky desert town maintains its cowboy character with honky-tonk bars, art galleries, and horse trails running through neighborhoods. Residents here chose Cave Creek to escape the suburban sameness—they want space, character, and a community where everyone knows your name. Laundry & Linen serves Cave Creek with the personal touch this unique town deserves.",
    demographics: "Cave Creek attracts artists, outdoor enthusiasts, horse lovers, and those seeking an alternative to typical suburban living. Many residents have acreage and livestock.",
    localBusinesses: ["western-themed restaurants and bars", "art galleries", "horseback riding outfits", "local boutiques", "Frontier Town shops"],
    whyLaundryService: "Cave Creek's dusty desert environment and outdoor lifestyle mean extra laundry. Horse owners especially appreciate not having to deal with barn-dirty clothes themselves.",
    funFact: "Cave Creek hosts the annual 'Cave Creek Fiesta Days' rodeo, carrying on the town's cowboy traditions for over 70 years.",
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
    uniqueIntro: "Carefree lives up to its name—a serene desert community where the biggest landmark is a giant sundial in the town center. The Boulders Resort draws visitors from around the world, while permanent residents enjoy world-class golf, stunning boulder-strewn landscapes, and a pace of life that feels like permanent vacation. Laundry & Linen helps Carefree residents stay carefree.",
    demographics: "Carefree is home to affluent retirees, executives, and seasonal residents who maintain vacation homes here. The population swells significantly during the pleasant winter months.",
    localBusinesses: ["The Boulders Resort", "galleries and boutiques", "upscale restaurants", "golf courses", "spas"],
    whyLaundryService: "Many Carefree residents are seasonal or travel frequently, making reliable laundry service essential. Others simply prefer to spend their retirement golfing rather than doing household chores.",
    funFact: "The Carefree Sundial is one of the largest sundials in the Western Hemisphere, accurately telling time using the Arizona sun.",
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
    uniqueIntro: "Anthem set the standard for Arizona master-planned communities when it opened in the late 1990s. Del Webb created a community with everything: parks, pools, a water park, community center, and miles of trails—all with stunning views of Daisy Mountain. Anthem families are active, involved, and busy. Laundry & Linen gives them back their weekends.",
    demographics: "Anthem attracts families and active adults seeking a planned community lifestyle. Anthem Country Club serves the 55+ population, while Parkside and Anthem Center cater to families with children.",
    localBusinesses: ["Anthem Outlets shopping", "community center", "golf courses", "restaurants", "schools", "fitness centers"],
    whyLaundryService: "Anthem families are involved in every sport, club, and activity the community offers. Between swim meets, Little League, and hiking Daisy Mountain, there's no time for laundry.",
    funFact: "Anthem's water park-style community center includes a lazy river, water slides, and pools—all free for residents.",
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
    uniqueIntro: "Ahwatukee feels like its own city, though technically it's a Phoenix village. Tucked between South Mountain and I-10, this community of 80,000 has developed its own identity: top-rated schools, endless hiking trails, and neighborhoods where kids still play in the streets. Ahwatukee families are proud of their community—and too busy enjoying it to worry about laundry.",
    demographics: "Ahwatukee is predominantly families with school-age children, drawn by the excellent Kyrene School District and safe neighborhoods. Many parents work in the I-10 corridor tech companies.",
    localBusinesses: ["Ahwatukee Foothills Towne Center", "restaurants and shops", "medical offices", "gyms", "schools", "small businesses"],
    whyLaundryService: "Ahwatukee parents juggle demanding careers with their kids' school and sports activities. With access to South Mountain trails and community pools, weekends should be for family fun—not folding clothes.",
    funFact: "Ahwatukee's name comes from the Crow word meaning 'House of Dreams,' chosen by a developer in the 1970s.",
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
    uniqueIntro: "Laveen offers what many Valley residents dream of—affordable homes with actual yards, close enough to downtown Phoenix for easy commutes. This Phoenix village has exploded with new development while maintaining pockets of its agricultural past. Laveen families are building their futures here, and Laundry & Linen is proud to serve this growing community.",
    demographics: "Laveen attracts first-time homebuyers, young families, and working-class households seeking value. The community is diverse and growing rapidly.",
    localBusinesses: ["local shops", "restaurants", "schools", "community centers", "small farms", "new retail developments"],
    whyLaundryService: "Laveen families often have both parents commuting to jobs across the valley. With long work days and growing children, professional laundry service is a practical help, not a luxury.",
    funFact: "Laveen was once primarily agricultural, and you can still find horse properties and small farms alongside the new housing developments.",
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
    uniqueIntro: "Tolleson may be small, but this West Valley city has deep roots—founded in 1912, it's one of the valley's oldest communities. Today, Tolleson offers affordable housing and a tight-knit community feel while major employers like Food City have their headquarters here. Laundry & Linen serves Tolleson families with the same community spirit they value.",
    demographics: "Tolleson is a working-class community with a large Hispanic population and strong family values. Many families have lived here for generations.",
    localBusinesses: ["Food City headquarters", "local shops", "restaurants", "schools", "distribution centers"],
    whyLaundryService: "Tolleson families work hard, often in physically demanding jobs. Coming home to fresh, clean laundry without the extra work is a simple pleasure they deserve.",
    funFact: "Tolleson was named after W.G. Tolleson, who established a hay delivery station here in 1912 to serve passing travelers.",
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
    uniqueIntro: "Youngtown holds a special place in Arizona history—it was the state's first retirement community, opening in 1954 before even Sun City. While smaller and more modest than its famous neighbor, Youngtown offers the same active senior lifestyle at more affordable prices. Laundry & Linen helps Youngtown seniors maintain their independence with convenient pickup and delivery.",
    demographics: "Youngtown is exclusively for adults 55 and older. Residents tend to be retirees on fixed incomes who appreciate the community's affordability and quiet character.",
    localBusinesses: ["local shops", "restaurants", "medical services", "community center"],
    whyLaundryService: "Many Youngtown seniors have mobility challenges or simply prefer not to deal with laundry. Our pickup service helps them live independently longer.",
    funFact: "Youngtown was founded by Ben Schleifer, who believed retirees deserved affordable communities—six years before Del Webb opened Sun City.",
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
    uniqueIntro: "Wickenburg is where the real West still lives. This historic town was founded during the gold rush and has never lost its frontier spirit. Dude ranches like Kay El Bar and Rancho de los Caballeros have hosted guests for generations, while the Desert Caballeros museum preserves Western art and artifacts. Laundry & Linen brings modern convenience to Wickenburg with Monday, Wednesday, and Friday pickup service.",
    demographics: "Wickenburg attracts retirees seeking small-town living, ranch owners, winter visitors to the dude ranches, and those who want space and western character.",
    localBusinesses: ["dude ranches", "art galleries", "western shops", "restaurants", "Vulture Mine tours", "healthcare facilities"],
    whyLaundryService: "Wickenburg's distance from major cities makes services harder to access. Reliable laundry pickup is especially valuable for ranch guests, seasonal visitors, and seniors.",
    funFact: "Wickenburg was once the third-largest city in Arizona Territory, booming after Henry Wickenburg discovered gold at the Vulture Mine in 1863.",
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
