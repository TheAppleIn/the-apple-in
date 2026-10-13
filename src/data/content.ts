export interface ContactInfo {
  primaryPhone: string;
  primaryPhoneRaw: string;
  secondaryPhone: string;
  secondaryPhoneRaw: string;
  managerPhone?: string;
  managerPhoneRaw?: string;
  managerName?: string;
  srinagarPhone: string;
  srinagarPhoneRaw: string;
  primaryEmail: string;
  secondaryEmail: string;
  gajuwakaMapUrl: string;
  srinagarMapUrl: string;
  aganampudiMapUrl: string;
  primaryAddress: {
    line1: string;
    area: string;
    cityStateZip: string;
    landmark: string;
    mapUrl: string;
  };
  cardAddress: {
    line1: string;
    area: string;
    cityStateZip: string;
    landmark: string;
    mapUrl: string;
  };
  srinagarAddress: {
    line1: string;
    area: string;
    cityStateZip: string;
    landmark: string;
    mapUrl: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
  hoursNotice: string;
}

export interface BranchInfo {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  type: string;
  phone: string;
  phoneRaw: string;
  alternatePhone?: string;
  alternatePhoneRaw?: string;
  address: {
    line1: string;
    area: string;
    cityStateZip: string;
    landmark: string;
  };
  mapUrl: string;
  features: string[];
  image: string;
  badge?: string;
}

export const contactDetails: ContactInfo = {
  primaryPhone: "90594 61033",
  primaryPhoneRaw: "9059461033",
  secondaryPhone: "93912 15151",
  secondaryPhoneRaw: "9391215151",
  managerPhone: "93465 61033",
  managerPhoneRaw: "9346561033",
  managerName: "L Srinu",
  srinagarPhone: "92486 96735",
  srinagarPhoneRaw: "9248696735",
  primaryEmail: "applenetworkscorp@gmail.com",
  secondaryEmail: "lakkarajusrinu@gmail.com",
  gajuwakaMapUrl: "https://www.google.com/maps?q=17.6863466,83.203841&z=17&hl=en",
  srinagarMapUrl: "https://www.google.com/maps?q=17.6892968,83.1642795&z=17&hl=en",
  aganampudiMapUrl: "https://www.google.com/maps?q=17.6903153,83.1358723&z=17&hl=en",
  primaryAddress: {
    line1: "8-6, Aganampudi",
    area: "Near Srinivasa Kalyanamandapam",
    cityStateZip: "Visakhapatnam – 530046",
    landmark: "Near Srinivasa Kalyanamandapam",
    mapUrl: "https://www.google.com/maps?q=17.6903153,83.1358723&z=17&hl=en",
  },
  cardAddress: {
    line1: "#7-15-19, 38 Bus Stop Backside",
    area: "Muthoot Finance, Old Gajuwaka",
    cityStateZip: "Visakhapatnam – 530026",
    landmark: "Backside of 38 Bus Stop & Muthoot Finance",
    mapUrl: "https://www.google.com/maps?q=17.6863466,83.203841&z=17&hl=en",
  },
  srinagarAddress: {
    line1: "27-7-43/1, Srinagar",
    area: "Near Ramalayam Arch",
    cityStateZip: "Visakhapatnam – 530026",
    landmark: "Near Apollo Pharmacy & Ramalayam Arch",
    mapUrl: "https://www.google.com/maps?q=17.6892968,83.1642795&z=17&hl=en",
  },
  social: {
    instagram: "https://www.instagram.com/bujji_gadu_pichi?stkn=ajQ5bTQyeW1oMHU3&utm_source=ig_contact_invite",
    facebook: "https://www.facebook.com/share/1KCoMSg2HT/",
  },
  hoursNotice: "Please contact us for current availability and booking assistance across all our branches and service centers.",
};

export const branchLocations: BranchInfo[] = [
  {
    id: "gajuwaka",
    name: "Old Gajuwaka Branch (Apple Lodge)",
    shortName: "Gajuwaka Main Lodge",
    tagline: "Flagship Lodge, AC & Non-AC Rooms & 24H Dormitory",
    type: "Lodge & Dormitory",
    phone: "90594 61033",
    phoneRaw: "9059461033",
    alternatePhone: "93465 61033",
    alternatePhoneRaw: "9346561033",
    address: {
      line1: "#7-15-19, 38 Bus Stop Backside",
      area: "Muthoot Finance, Old Gajuwaka",
      cityStateZip: "Visakhapatnam – 530026",
      landmark: "Near 38 Bus Stop Backside & Muthoot Finance",
    },
    mapUrl: "https://www.google.com/maps?q=17.6863466,83.203841&z=17&hl=en",
    features: [
      "AC Executive Rooms & Budget Non-AC Rooms",
      "24-Hour Dormitory Accommodations",
      "Prime Industrial Belt & Transit Location",
      "24 Hours Check-in & Travel Guidance",
      "Free High-Speed Wi-Fi & Clean Purified Water",
    ],
    image: "/images/lodge-exterior-real.jpg",
    badge: "Flagship Lodge",
  },
  {
    id: "srinagar",
    name: "Srinagar Branch (Hostel & Rooms)",
    shortName: "Srinagar Hostel & Rooms",
    tagline: "New Rooms — Smart Look, Hostel & Robot Massage",
    type: "Hostel & Smart Rooms",
    phone: "92486 96735",
    phoneRaw: "9248696735",
    alternatePhone: "90594 61033",
    alternatePhoneRaw: "9059461033",
    address: {
      line1: "27-7-43/1, Srinagar",
      area: "Near Ramalayam Arch",
      cityStateZip: "Visakhapatnam – 530026",
      landmark: "Near Apollo Pharmacy & Ramalayam Arch",
    },
    mapUrl: "https://www.google.com/maps?q=17.6892968,83.1642795&z=17&hl=en",
    features: [
      "Hostel Accommodations & Key Amenities Each Bed",
      "New Rooms — Smart Look: Basic, Deluxe & Suite",
      "Low Price Non-AC Rooms: ₹449",
      "Low Price AC Rooms: ₹799",
      "High-Tech Robot Massage Chair Lounge",
      "Free Parking, 24x7 Hot Water & Room Service",
    ],
    image: "/images/srinagar-branch-banner.jpg",
    badge: "Hostel & Rooms",
  },
  {
    id: "aganampudi",
    name: "Aganampudi Operations Hub (ISP & CCTV)",
    shortName: "Internet & CCTV Tech Hub",
    tagline: "High-Speed Internet Service Provider & CCTV Sales & Service",
    type: "Internet ISP & CCTV Center",
    phone: "93912 15151",
    phoneRaw: "9391215151",
    alternatePhone: "90594 61033",
    alternatePhoneRaw: "9059461033",
    address: {
      line1: "8-6, Aganampudi",
      area: "Near Srinivasa Kalyanamandapam",
      cityStateZip: "Visakhapatnam – 530046",
      landmark: "Near Srinivasa Kalyanamandapam",
    },
    mapUrl: "https://www.google.com/maps?q=17.6903153,83.1358723&z=17&hl=en",
    features: [
      "High-Speed Fiber Broadband Internet Provider",
      "Genuine CCTV Camera Sales & Surveillance Hardware",
      "Professional Installation, Wiring & Configuration",
      "DVR/NVR Recording Setup & Mobile App Access",
      "Prompt Local Maintenance & Technical Support",
    ],
    image: "/images/cctv-van.jpg",
    badge: "Tech Operations Hub",
  },
];

export const servicePillars = [
  {
    id: "lodge",
    number: "01",
    title: "LODGE & DORMITORY",
    subtitle: "Comfortable accommodation designed for a convenient and pleasant stay.",
    image: "/images/lodge-room.jpg",
    link: "/about#hospitality",
    features: [
      "AC & Non-AC Executive Rooms",
      "Spacious Modern Dormitory Accommodation",
      "Comfortable Clean Bedding & Linens",
      "Secure Individual Lockers",
      "Professional Hospitality & Attentive Service",
    ],
    ctaText: "Explore Lodge",
  },
  {
    id: "internet",
    number: "02",
    title: "INTERNET SERVICES",
    subtitle: "Reliable connectivity and professional internet service solutions.",
    image: "/images/internet-service.jpg",
    link: "/internet",
    features: [
      "Home & Residential Internet",
      "High-Capacity Broadband Connectivity",
      "Fiber-Optic Network Infrastructure",
      "Professional Wi-Fi Setup & Coverage",
      "Technical Support & Rapid Troubleshooting",
    ],
    ctaText: "View Internet Services",
  },
  {
    id: "cctv",
    number: "03",
    title: "CCTV SALES & SERVICE",
    subtitle: "Professional surveillance solutions for homes, businesses and properties.",
    image: "/images/cctv-installation.jpg",
    link: "/cctv",
    features: [
      "Surveillance Camera Sales & Equipment",
      "Commercial & Residential Installation",
      "System Configuration & Multi-Screen Setup",
      "Preventative Maintenance & Health Checks",
      "Dedicated Service & Technical Support",
    ],
    ctaText: "Explore CCTV",
  },
];

export const valueCards = [
  {
    title: "Reliable Service",
    description: "Consistent quality in lodging, prompt network uptime, and precision security installations.",
  },
  {
    title: "Professional Support",
    description: "Experienced on-ground technicians and responsive staff ready to assist your requirements.",
  },
  {
    title: "Multiple Solutions",
    description: "Convenient single-brand access to comfortable stays, fast connectivity, and physical security.",
  },
  {
    title: "Customer-Focused Approach",
    description: "Straightforward communication, attentive hospitality, and dependable service tailored to you.",
  },
];

export const internetProcessSteps = [
  {
    step: "01",
    title: "Requirement",
    description: "We understand your property layout, connected devices, and bandwidth requirements.",
  },
  {
    step: "02",
    title: "Consultation",
    description: "Our networking team recommends the most suitable connection architecture and cabling path.",
  },
  {
    step: "03",
    title: "Connection Setup",
    description: "Physical fiber termination, router mounting, and clean structured cabling installation.",
  },
  {
    step: "04",
    title: "Configuration",
    description: "Router setup, Wi-Fi channel optimization, security encryption, and device connectivity verification.",
  },
  {
    step: "05",
    title: "Support",
    description: "Ongoing assistance, connection diagnostics, and responsive on-call support whenever needed.",
  },
];

export const cctvProcessSteps = [
  {
    step: "01",
    title: "Requirement",
    description: "Initial discussion to outline coverage zones, blind spots, and security priorities.",
  },
  {
    step: "02",
    title: "Site Assessment",
    description: "On-site physical inspection of your premises to map camera angles, lighting, and cable paths.",
  },
  {
    step: "03",
    title: "Camera Selection",
    description: "Selecting optimal camera models (dome, bullet, night-vision, high-resolution) for each zone.",
  },
  {
    step: "04",
    title: "Installation",
    description: "Rigid professional mounting, weatherproof outdoor fittings, and discreet conduit wiring.",
  },
  {
    step: "05",
    title: "Configuration",
    description: "DVR/NVR storage configuration, network linking, monitor routing, and mobile viewing setup.",
  },
  {
    step: "06",
    title: "Support",
    description: "Routine maintenance checks, camera lens cleaning, storage audits, and technical service.",
  },
];

export const galleryItems = [
  // 12 Authentic Premises & Real Photographs
  {
    id: 1,
    title: "Low Price Non-AC Room — Comfortable Bed & Wardrobe",
    category: "Lodge",
    image: "/images/lodge-non-ac-room-real.jpg",
    description: "Verified photo of our low-price Non-AC room with comfortable double bed, study table, full wardrobe, wall-mounted TV, curtains, and clean tiled flooring.",
    verified: true,
  },
  {
    id: 2,
    title: "Low Price AC Executive Bedroom",
    category: "Lodge",
    image: "/images/lodge-ac-bedroom-real.jpg",
    description: "Verified photo of our low-price AC executive bedroom with split AC cooling, clean double bed, fresh linens, and tiled floors.",
    verified: true,
  },
  {
    id: 3,
    title: "Front Office Reception & Waiting Lounge",
    category: "Lodge",
    image: "/images/front-office.png",
    description: "Verified photo of The Apple IN front office lobby with crystal chandelier lighting, accent walls, and comfortable guest seating.",
    verified: true,
  },
  {
    id: 4,
    title: "Srinagar Branch — Deluxe Executive Room",
    category: "Lodge",
    image: "/images/deluxe-suite-room.png",
    description: "Verified photo of Srinagar branch deluxe room featuring emerald styling, designer floral wall, split AC, and plush king bedding.",
    verified: true,
  },
  {
    id: 5,
    title: "Srinagar Branch — Basic Room with Split AC",
    category: "Lodge",
    image: "/images/room-basic-ac.jpg",
    description: "Smart look basic room with wall-mounted split AC unit, high-speed ceiling fan, double bed, and attached washroom.",
    verified: true,
  },
  {
    id: 6,
    title: "Srinagar Branch — Premium Suite Room",
    category: "Lodge",
    image: "/images/room-suite-ac.jpg",
    description: "Spacious suite room equipped with dual beds, wooden wall paneling, split air-conditioning, and contemporary lighting.",
    verified: true,
  },
  {
    id: 7,
    title: "Srinagar Branch — Robot Massage Chair Lounge",
    category: "Lodge",
    image: "/images/robot-massage.png",
    description: "Exclusive automated robotic massage facility providing intelligent full-body muscle rejuvenation and relaxation for guests and residents.",
    verified: true,
  },
  {
    id: 8,
    title: "Srinagar Branch — Modern Hostel Dormitory Beds",
    category: "Lodge",
    image: "/images/dormitory-srinagar-hostel.jpg",
    description: "Clean shared cot accommodation designed for students, job aspirants, and budget travelers with individual mattress beds.",
    verified: true,
  },
  {
    id: 9,
    title: "Spacious Bedroom Interior with Ceiling Fan",
    category: "Lodge",
    image: "/images/lodge-room-interior-real.jpg",
    description: "Verified photo showing modern false ceiling architecture, warm recessed spotlights, high-speed ceiling fan, and en-suite facilities.",
    verified: true,
  },
  {
    id: 10,
    title: "The Apple IN Signboard & Building Exterior",
    category: "Lodge",
    image: "/images/lodge-exterior-real.jpg",
    description: "Verified exterior street photograph showing the building premises on the first floor above retail shops at 38 Bus Stop backside, Old Gajuwaka.",
    verified: true,
  },
  {
    id: 11,
    title: "Official The Apple IN Property Signboard",
    category: "Lodge",
    image: "/images/signin-board.png",
    description: "Verified on-site street photograph showing the official The Apple IN Lodge & Dormitory signboard installed at the Old Gajuwaka property.",
    verified: true,
  },
  {
    id: 12,
    title: "Srinagar Branch — Property Entrance & Banner",
    category: "Lodge",
    image: "/images/srinagar-branch-banner.jpg",
    description: "On-site entrance banner photograph of Srinagar Branch (Ramalayam Arch near Apollo Pharmacy) showing AC, Non-AC & Hostel rooms.",
    verified: true,
  },

  // 5 Official Promotional Flyers & Billboards
  {
    id: 13,
    title: "Official The Apple IN Brand Billboard",
    category: "Official Flyers",
    image: "/images/apple-inn-banner-wide.png",
    description: "Official outdoor branding billboard displaying 'THE APPLE IN LODGE & DORMITORY — Think Totally Different' with contact phone numbers.",
  },
  {
    id: 14,
    title: "Srinagar Branch: Smart Look Room Categories Flyer",
    category: "Official Flyers",
    image: "/images/apple-inn-room-types-flyer.png",
    description: "Official Srinagar Branch poster highlighting Basic Rooms, Deluxe Rooms, Suite Rooms, Waiting Lobby, and Robot Massage chair.",
  },
  {
    id: 15,
    title: "Non-AC Rooms (₹449) & Hostel Dormitory Flyer",
    category: "Official Flyers",
    image: "/images/apple-inn-449-nonac-flyer.png",
    description: "Official flyer showcasing low price Non-AC Rooms at ₹449 and clean dormitory/hostel cot bed accommodations.",
  },
  {
    id: 16,
    title: "AC Rooms (₹799) & Smart Look Interior Poster",
    category: "Official Flyers",
    image: "/images/apple-inn-799-ac-flyer.png",
    description: "Official flyer displaying AC Rooms at ₹799 across Basic, Deluxe, Suite rooms, Waiting Lobby, and Robot Massage.",
  },
  {
    id: 17,
    title: "Complete Official 14 Amenities & Facilities Chart",
    category: "Official Flyers",
    image: "/images/apple-inn-amenities-flyer.png",
    description: "Comprehensive flyer outlining Free Wi-Fi, Parking, 24x7 Room Service, AC, Lockers, Hot Water, CCTV, Laundry, Travels, and more.",
  },

  // 4 Internet & Broadband Operational Photographs
  {
    id: 18,
    title: "Field Internet Splicing & Setup",
    category: "Internet",
    image: "/images/internet-service.jpg",
    description: "Dedicated networking technician executing optical fiber splicing and subscriber connection setup.",
  },
  {
    id: 19,
    title: "High-Speed Fiber Infrastructure",
    category: "Internet",
    image: "/images/fiber-network.jpg",
    description: "Modern optical network termination delivering low latency and uninterrupted broadband.",
  },
  {
    id: 20,
    title: "Residential Wi-Fi Connectivity",
    category: "Internet",
    image: "/images/wifi-home.jpg",
    description: "Optimized wireless router placement providing full-home high-throughput wireless coverage.",
  },
  {
    id: 21,
    title: "Enterprise Rack & Cable Setup",
    category: "Internet",
    image: "/images/gallery-network.jpg",
    description: "Clean rack arrangement, cable management, and high-performance routing hardware.",
  },

  // 3 CCTV & Security Deployment Photographs
  {
    id: 22,
    title: "Surveillance Camera Installation",
    category: "CCTV",
    image: "/images/cctv-installation.jpg",
    description: "Professional camera mounting and alignment on commercial and residential structures.",
  },
  {
    id: 23,
    title: "Property Security Monitoring",
    category: "CCTV",
    image: "/images/cctv-security.jpg",
    description: "Discreet, high-definition security camera keeping continuous watch over building perimeters.",
  },
  {
    id: 24,
    title: "Multi-Screen CCTV Control Room",
    category: "CCTV",
    image: "/images/cctv-monitoring.jpg",
    description: "Centralized multi-feed surveillance console for real-time commercial monitoring.",
  },
];

export interface RoomRate {
  id: string;
  name: string;
  category: string;
  price: number;
  priceDisplay: string;
  unit: string;
  badge?: string;
  popular?: boolean;
  image: string;
  description: string;
  branchAvailability: string;
  features: string[];
}

export const accommodationRates: RoomRate[] = [
  {
    id: "non-ac-room",
    name: "Low Price Non-AC Room",
    category: "Non-AC Standard / Smart Look",
    price: 449,
    priceDisplay: "449",
    unit: "per 24 Hours / Night",
    badge: "Budget Friendly",
    popular: true,
    image: "/images/lodge-non-ac-room-real.jpg",
    description: "Spacious, well-ventilated private bedroom equipped with comfortable double bed, study table, full wardrobe, curtains, and high-speed ceiling fan.",
    branchAvailability: "Gajuwaka & Srinagar Branches",
    features: [
      "Low Price Non-AC Rooms: ₹449",
      "High-Speed Ceiling Fan & Ventilation",
      "Free High-Speed Wi-Fi Internet",
      "Spotless Bedding & Sanitized Daily",
      "Key Amenities Each Bed",
      "CCTV Surveillance for Security",
      "24 Hours Check-in Availability",
    ],
  },
  {
    id: "ac-room",
    name: "Low Price AC Room",
    category: "Air Conditioned Executive (Basic / Deluxe)",
    price: 799,
    priceDisplay: "799",
    unit: "per 24 Hours / Night",
    badge: "Executive Choice",
    popular: false,
    image: "/images/lodge-ac-bedroom-real.jpg",
    description: "Climate-controlled private room featuring individual split AC, clean double bed, spotless linens, and attached bathroom. Available at both Gajuwaka and Srinagar branches.",
    branchAvailability: "Gajuwaka & Srinagar Branches",
    features: [
      "Low Price AC Rooms: ₹799",
      "Individual Split AC Climate Control",
      "Free High-Speed Wi-Fi Internet",
      "Comfortable Clean Double Bed & Pillows",
      "24x7 Hot Water & 24x7 Room Service",
      "CCTV Surveillance for Security",
      "24 Hours Available Travel Assistance",
    ],
  },
  {
    id: "dormitory-bed",
    name: "Dormitory & Hostel Beds",
    category: "Shared Dormitory / Student & Traveler Hostel",
    price: 200,
    priceDisplay: "200",
    unit: "per Bed (24 Hours)",
    badge: "Maximum Value",
    popular: false,
    image: "/images/dormitory-srinagar-hostel.jpg",
    description: "Organized, neat shared dormitory and hostel accommodations offering budget-friendly 24-hour stays with individual locker access.",
    branchAvailability: "Gajuwaka Lodge & Srinagar Hostel",
    features: [
      "Dormitory Non/AC Beds (24 Hours): ₹200",
      "Full 24-Hour Stay Period",
      "Individual Luggage Lockers",
      "Free High-Speed Wi-Fi Internet",
      "Air Cooled Ventilation",
      "CCTV Surveillance for Security",
      "24 Hours Check-in & Travel Guidance",
    ],
  },
  {
    id: "deluxe-suite",
    name: "Deluxe & Suite Rooms",
    category: "Premium Smart Look Accommodation",
    price: 799,
    priceDisplay: "799",
    unit: "starting from",
    badge: "Smart Look",
    popular: false,
    image: "/images/room-deluxe-ac.jpg",
    description: "Modern styled rooms featuring elegant interior decor, waiting lobby access, split air-conditioning, and optional robot massage lounge access.",
    branchAvailability: "Srinagar Branch",
    features: [
      "New Rooms — Smart Look Architecture",
      "Deluxe Bedding & Designer Lighting",
      "Robot Massage Chair Facility Access",
      "24x7 Room Service & Hot Water",
      "Free High-Speed Wi-Fi & Smart TV",
      "Free Customer Vehicle Parking",
    ],
  },
];

export interface LodgeAmenity {
  title: string;
  description: string;
  tag: string;
  iconName?: string;
}

export const lodgeAmenities: LodgeAmenity[] = [
  {
    title: "Free High-Speed Wi-Fi",
    description: "High-capacity optical fiber broadband accessible across all rooms, dormitories, and lounges.",
    tag: "Connectivity",
    iconName: "Wifi",
  },
  {
    title: "Free Customer Parking",
    description: "Dedicated safe parking space available for guest two-wheelers and four-wheelers.",
    tag: "Convenience",
    iconName: "Car",
  },
  {
    title: "24x7 Room Service",
    description: "Round-the-clock front desk and room assistance for guest requirements at any hour.",
    tag: "Hospitality",
    iconName: "Bell",
  },
  {
    title: "Air Conditioner & Air Cooled",
    description: "Individual split air conditioning units and high-capacity air-cooled ventilation systems.",
    tag: "Climate",
    iconName: "Snowflake",
  },
  {
    title: "Locker Facility",
    description: "Secure individual lockable storage cabinets for personal luggage, laptops, and valuables.",
    tag: "Security",
    iconName: "Lock",
  },
  {
    title: "Key Amenities Each Bed",
    description: "Individual power charging points, clean linen sets, and personal reading conveniences.",
    tag: "Comfort",
    iconName: "Key",
  },
  {
    title: "CCTV Security Surveillance",
    description: "Continuous high-definition surveillance coverage over all entrances, corridors, and common spaces.",
    tag: "Safety",
    iconName: "Shield",
  },
  {
    title: "24x7 Hot Water Supply",
    description: "Round-the-clock geyser and hot water availability in bathrooms for comfortable bathing.",
    tag: "Hygiene",
    iconName: "Droplets",
  },
  {
    title: "Daily Housekeeping",
    description: "Rigorous daily room sanitation, fresh linen changes, and spotless floor maintenance.",
    tag: "Cleanliness",
    iconName: "Sparkles",
  },
  {
    title: "Hostel & Long-Stay Facility",
    description: "Special monthly and multi-week boarding plans tailored for job aspirants and students.",
    tag: "Hostel",
    iconName: "Home",
  },
  {
    title: "24 Hours Available Travels",
    description: "On-call transport assistance, auto/cab booking, and proximity to major bus stops and transit hubs.",
    tag: "Mobility",
    iconName: "Compass",
  },
  {
    title: "Entertainment Television",
    description: "Cable and digital TV entertainment available in rooms and common lounges.",
    tag: "Entertainment",
    iconName: "Tv",
  },
  {
    title: "Laundry Facility",
    description: "Convenient on-demand clothes washing and laundry assistance for guests and hostel residents.",
    tag: "Service",
    iconName: "Shirt",
  },
  {
    title: "Robot Massage Chair Lounge",
    description: "State-of-the-art robotic massage chair for automated full-body muscle rejuvenation and relaxation.",
    tag: "Wellness",
    iconName: "Zap",
  },
];
