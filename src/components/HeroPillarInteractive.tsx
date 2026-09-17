import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Wifi, Shield, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { contactDetails } from '../data/content';

interface PillarData {
  id: 'lodge' | 'internet' | 'cctv';
  title: string;
  category: string;
  badge: string;
  image: string;
  description: string;
  highlights: string[];
  link: string;
  ctaText: string;
  phone: string;
  phoneRaw: string;
}

const pillars: PillarData[] = [
  {
    id: 'lodge',
    title: 'The Apple IN Lodge & Dormitory',
    category: 'Hospitality',
    badge: 'AC / Non-AC & Dormitory',
    image: '/images/lodge-room.jpg',
    description: 'Clean, well-maintained executive bedrooms and organized dormitory accommodation in Gajuwaka, Visakhapatnam.',
    highlights: [
      'AC & Non-AC Private Rooms',
      'Dormitory with Lockers',
      'Daily Sanitized Housekeeping',
      'Prime Gajuwaka Location'
    ],
    link: '/about#hospitality',
    ctaText: 'View Rooms & Stays',
    phone: contactDetails.primaryPhone,
    phoneRaw: contactDetails.primaryPhoneRaw,
  },
  {
    id: 'internet',
    title: 'High-Speed Internet & Fiber',
    category: 'Connectivity',
    badge: 'Optical Fiber Broadband',
    image: '/images/internet-service.jpg',
    description: 'Reliable fiber-optic infrastructure and broadband connectivity engineered for homes, stores, and offices.',
    highlights: [
      'Direct Optical Fiber Cabling',
      'High Speed & Low Latency',
      'Wi-Fi Setup & Optimization',
      'Prompt Local Technician Support'
    ],
    link: '/internet',
    ctaText: 'View Internet Solutions',
    phone: contactDetails.secondaryPhone,
    phoneRaw: contactDetails.secondaryPhoneRaw,
  },
  {
    id: 'cctv',
    title: 'CCTV Sales, Setup & Support',
    category: 'Surveillance',
    badge: 'HD Security Surveillance',
    image: '/images/cctv-security.jpg',
    description: 'Professional surveillance camera sales, structured conduit installation, and maintenance for properties.',
    highlights: [
      'HD Dome, Bullet & PTZ Cameras',
      'Concealed Wiring & Clean Mounting',
      'DVR/NVR Recording Setup',
      'Mobile Phone Remote Viewing'
    ],
    link: '/cctv',
    ctaText: 'Explore CCTV Services',
    phone: contactDetails.primaryPhone,
    phoneRaw: contactDetails.primaryPhoneRaw,
  },
];

export const HeroPillarInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lodge' | 'internet' | 'cctv'>('lodge');

  const current = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Clean, Premium Showcase Card */}
      <div className="rounded-3xl bg-white border border-gray-200/90 p-4 sm:p-5 shadow-xl shadow-gray-200/60 transition-all duration-300 flex flex-col justify-between">
        
        {/* Interactive Pillar Switcher Segmented Control */}
        <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-gray-100/90 border border-gray-200/80 mb-4">
          <button
            type="button"
            onClick={() => setActiveTab('lodge')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'lodge'
                ? 'bg-white text-brand-orange shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
            }`}
          >
            <BedDouble className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Lodge</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('internet')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'internet'
                ? 'bg-white text-brand-orange shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
            }`}
          >
            <Wifi className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Internet</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cctv')}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'cctv'
                ? 'bg-white text-brand-orange shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
            }`}
          >
            <Shield className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">CCTV</span>
          </button>
        </div>

        {/* Featured Card Image with Clean Badge */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/60 shadow-inner">
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Top Category Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/20">
              {current.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-white bg-brand-orange/90 backdrop-blur-md">
              {current.badge}
            </span>
          </div>

          {/* Title on Image Bottom */}
          <div className="absolute bottom-3 left-3 right-3 text-left">
            <h3 className="text-base sm:text-lg font-bold font-display text-white drop-shadow-sm">
              {current.title}
            </h3>
          </div>
        </div>

        {/* Clean Content Area */}
        <div className="pt-4 text-left space-y-3.5">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {current.description}
          </p>

          {/* Clean 2-column Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
            {current.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-gray-50 px-2.5 py-2 rounded-xl border border-gray-200/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span className="truncate font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-gray-100">
            <Link
              to={current.link}
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <span>{current.ctaText}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${current.phoneRaw}`}
              className="inline-flex items-center justify-center gap-1.5 text-xs text-gray-600 hover:text-brand-orange bg-gray-50 hover:bg-gray-100 px-3.5 py-2.5 rounded-xl border border-gray-200/80 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>Call +91 {current.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
