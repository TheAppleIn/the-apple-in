export interface ContactInfo {
  primaryPhone: string;
  primaryPhoneRaw: string;
  secondaryPhone: string;
  secondaryPhoneRaw: string;
  managerPhone?: string;
  managerPhoneRaw?: string;
  managerName?: string;
  primaryEmail: string;
  secondaryEmail: string;
  primaryAddress: {
    line1: string;
    area: string;
    cityStateZip: string;
    landmark: string;
  };
  cardAddress?: {
    line1: string;
    area: string;
    cityStateZip: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
  hoursNotice: string;
}

export const contactDetails: ContactInfo = {
  primaryPhone: "90594 61033",
  primaryPhoneRaw: "9059461033",
  secondaryPhone: "93912 15151",
  secondaryPhoneRaw: "9391215151",
  managerPhone: "93465 61033",
  managerPhoneRaw: "9346561033",
  managerName: "L Srinu",
  primaryEmail: "applenetworkscorp@gmail.com",
  secondaryEmail: "lakkarajusrinu@gmail.com",
  primaryAddress: {
    line1: "8-6, Kondyavalasa",
    area: "Aganampudi, Gajuwaka",
    cityStateZip: "Visakhapatnam – 530046",
    landmark: "Near Srinivasa Kalyanamandapam",
  },
  cardAddress: {
    line1: "#7-15-19, 38 Bus Stop Backside",
    area: "Muthoot Finance Old Gajuwaka",
    cityStateZip: "Visakhapatnam – 530026",
  },
  social: {
    instagram: "https://www.instagram.com/bujji_gadu_pichi?stkn=ajQ5bTQyeW1oMHU3&utm_source=ig_contact_invite",
    facebook: "https://www.facebook.com/share/1KCoMSg2HT/",
  },
  hoursNotice: "Please contact us for current availability and booking assistance.",
};

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
  {
    id: 1,
    title: "Executive Lodge Accommodation",
    category: "Lodge",
    image: "/images/lodge-room.jpg",
    description: "Comfortable bedding, air-conditioning, warm architectural lighting, and refined hospitality interiors.",
  },
  {
    id: 2,
    title: "Modern Lodge Dormitory",
    category: "Lodge",
    image: "/images/lodge-dormitory.jpg",
    description: "Neat, spacious dormitory arrangement with individual privacy, sturdy bunks, and secure lockers.",
  },
  {
    id: 3,
    title: "Lodge Reception & Lounge",
    category: "Lodge",
    image: "/images/lodge-reception.jpg",
    description: "Welcoming reception desk and comfortable lounge for seamless guest check-ins.",
  },
  {
    id: 4,
    title: "Contemporary Lodge Exterior",
    category: "Lodge",
    image: "/images/lodge-exterior.jpg",
    description: "Modern architectural facade located conveniently in the Visakhapatnam region.",
  },
  {
    id: 5,
    title: "Field Internet Splicing & Setup",
    category: "Internet",
    image: "/images/internet-service.jpg",
    description: "Dedicated networking technician executing optical fiber splicing and subscriber connection setup.",
  },
  {
    id: 6,
    title: "High-Speed Fiber Infrastructure",
    category: "Internet",
    image: "/images/fiber-network.jpg",
    description: "Modern optical network termination delivering low latency and uninterrupted broadband.",
  },
  {
    id: 7,
    title: "Residential Wi-Fi Connectivity",
    category: "Internet",
    image: "/images/wifi-home.jpg",
    description: "Optimized wireless router placement providing full-home high-throughput wireless coverage.",
  },
  {
    id: 8,
    title: "Surveillance Camera Installation",
    category: "CCTV",
    image: "/images/cctv-installation.jpg",
    description: "Professional camera mounting and alignment on commercial and residential structures.",
  },
  {
    id: 9,
    title: "Property Security Monitoring",
    category: "CCTV",
    image: "/images/cctv-security.jpg",
    description: "Discreet, high-definition security camera keeping continuous watch over building perimeters.",
  },
  {
    id: 10,
    title: "Multi-Screen CCTV Control Room",
    category: "CCTV",
    image: "/images/cctv-monitoring.jpg",
    description: "Centralized multi-feed surveillance console for real-time commercial monitoring.",
  },
  {
    id: 11,
    title: "Hospitality Suite Ambiance",
    category: "Lodge",
    image: "/images/gallery-lodge.jpg",
    description: "Thoughtful hospitality decor designed for peaceful relaxation and guest comfort.",
  },
  {
    id: 12,
    title: "Enterprise Rack & Cable Setup",
    category: "Internet",
    image: "/images/gallery-network.jpg",
    description: "Clean rack arrangement, cable management, and high-performance routing hardware.",
  },
  {
    id: 13,
    title: "Real AC Bedroom — Double Bed & Split AC",
    category: "Lodge",
    image: "/images/lodge-ac-bedroom-real.jpg",
    description: "Verified photo of our low-price AC executive room with comfortable bedding, split AC, clean tiled floors, and TV.",
    verified: true,
  },
  {
    id: 14,
    title: "Designer Reception & Waiting Lounge",
    category: "Lodge",
    image: "/images/lodge-reception-lounge-real.jpg",
    description: "Verified photo of The Apple IN front office lounge with crystal chandelier, accent styling, and comfortable sofa seating.",
    verified: true,
  },
  {
    id: 15,
    title: "Spacious Bedroom Interior with Ceiling Fan",
    category: "Lodge",
    image: "/images/lodge-room-interior-real.jpg",
    description: "Verified photo of our clean bedroom with modern false ceiling spotlights, high-speed ceiling fan, and en-suite facilities.",
    verified: true,
  },
  {
    id: 16,
    title: "The Apple IN Signboard & Building Exterior",
    category: "Lodge",
    image: "/images/lodge-exterior-real.jpg",
    description: "Verified exterior street view at Old Gajuwaka near 38 Bus Stop backside, showing the official 1st floor premises.",
    verified: true,
  },
  {
    id: 17,
    title: "Official The Apple IN Brand Signboard",
    category: "Lodge",
    image: "/images/apple-in-signboard.jpg",
    description: "Official outdoor brand signboard showcasing AC / Non-AC rooms, phone numbers 90594-61033 & 93465 61033, and location.",
    verified: true,
  },
  {
    id: 18,
    title: "Low Price Non-AC Room — Real Wooden Cot & Curtains",
    category: "Lodge",
    image: "/images/lodge-non-ac-room-real.jpg",
    description: "Verified photo of our low-price Non-AC room with comfortable bedding, red privacy curtains, ceiling fan, and seating table.",
    verified: true,
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
  features: string[];
}

export const accommodationRates: RoomRate[] = [
  {
    id: "ac-room",
    name: "Low Price AC Room",
    category: "Air Conditioned Executive",
    price: 799,
    priceDisplay: "799",
    unit: "per 24 Hours / Night",
    badge: "Most Popular",
    popular: true,
    image: "/images/lodge-ac-bedroom-real.jpg",
    description: "Climate-controlled private room featuring individual split AC, clean double bed, spotless linens, and attached bathroom.",
    features: [
      "Low Price AC Rooms: ₹799",
      "Individual Split AC Climate Control",
      "Free High-Speed Wi-Fi Internet",
      "Comfortable Clean Double Bed & Pillows",
      "24 Hours Room Availability",
      "CCTV Surveillance for Security",
      "24 Hours Available Travel Assistance",
    ],
  },
  {
    id: "non-ac-room",
    name: "Low Price Non-AC Room",
    category: "Non-AC Standard",
    price: 549,
    priceDisplay: "549",
    unit: "per 24 Hours / Night",
    badge: "Budget Friendly",
    popular: false,
    image: "/images/lodge-non-ac-room-real.jpg",
    description: "Spacious, well-ventilated private bedroom equipped with high-speed ceiling fan, clean bed, and sanitized washroom.",
    features: [
      "Low Price Non-AC Rooms: ₹549",
      "High-Speed Ceiling Fan & Ventilation",
      "Free High-Speed Wi-Fi Internet",
      "Spotless Bedding & Sanitized Daily",
      "24 Hours Room Availability",
      "CCTV Surveillance for Security",
      "24 Hours Available Travel Assistance",
    ],
  },
  {
    id: "dormitory-bed",
    name: "Dormitory Non/AC Beds",
    category: "Shared Dormitory",
    price: 200,
    priceDisplay: "200",
    unit: "per Bed (24 Hours)",
    badge: "Maximum Value",
    popular: false,
    image: "/images/lodge-reception-lounge-real.jpg",
    description: "Organized and neat shared dormitory accommodations offering budget-friendly 24-hour stays with locker access.",
    features: [
      "Dormitory Non/AC Beds (24 Hours): ₹200",
      "Full 24-Hour Stay Period",
      "Individual Luggage Lockers",
      "Free High-Speed Wi-Fi Internet",
      "CCTV Surveillance for Security",
      "24 Hours Check-in & Travel Assistance",
    ],
  },
];

export interface LodgeAmenity {
  title: string;
  description: string;
  tag: string;
}

export const lodgeAmenities: LodgeAmenity[] = [
  {
    title: "Free High-Speed Wi-Fi Internet",
    description: "Enjoy high-capacity optical fiber broadband throughout your stay for work, calls, and entertainment.",
    tag: "Connectivity",
  },
  {
    title: "24 Hours Room Availability",
    description: "Flexible round-the-clock check-in and room readiness so you can arrive and rest at any time of day or night.",
    tag: "Convenience",
  },
  {
    title: "24 Hours Available Travel",
    description: "Reliable transportation guidance, auto/cab hailing, and direct proximity to 38 Bus Stop Old Gajuwaka.",
    tag: "Mobility",
  },
  {
    title: "CCTV Surveillance for Security",
    description: "Continuous HD camera surveillance covering corridors, entrances, and common areas for your safety.",
    tag: "Safety",
  },
];
