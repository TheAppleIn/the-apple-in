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
];
