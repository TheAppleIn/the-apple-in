import React, { useState } from 'react';
import { Eye, CheckCircle2, Phone, MessageSquare, Maximize2, X } from 'lucide-react';

export interface OfficialFlyer {
  id: string;
  title: string;
  badge: string;
  category: string;
  image: string;
  summary: string;
  keyPoints: string[];
  branch: string;
  targetPhone: string;
  targetPhoneRaw: string;
}

export const officialFlyersList: OfficialFlyer[] = [
  {
    id: 'flyer-banner-wide',
    title: 'The Apple INN — Official Wide Identity Banner',
    badge: 'Official Brand Billboard',
    category: 'Brand Identity',
    image: '/images/apple-inn-banner-wide.png',
    summary: 'Official company signage banner: "The Apple INN LODGE & DORMITORY — Think Totally Different". Highlighting our hospitality credentials and primary Visakhapatnam contact lines.',
    keyPoints: [
      'Official Slogan: "Think Totally Different"',
      'Lodge & Dormitory Accommodations',
      'Direct Bookings: 90594 61033 & 93465 61033',
      'Old Gajuwaka & Srinagar Hubs',
    ],
    branch: 'Both Gajuwaka & Srinagar Branches',
    targetPhone: '90594 61033',
    targetPhoneRaw: '9059461033',
  },
  {
    id: 'flyer-room-types',
    title: 'Srinagar Branch: Smart Look Room Categories & Massage',
    badge: 'Srinagar Exclusive',
    category: 'Room Categories',
    image: '/images/apple-inn-room-types-flyer.png',
    summary: 'Complete architectural visual of our newest Srinagar branch featuring Basic, Deluxe, and Suite rooms, the executive Waiting Lobby, and the state-of-the-art Robot Massage chair.',
    keyPoints: [
      'Basic Rooms with Air Conditioning',
      'Deluxe Rooms with Emerald Accent & Headboard',
      'Suite Rooms with Double Bed Setup',
      'Waiting Lobby Lounge & Robot Massage Facility',
    ],
    branch: 'Srinagar Branch (Near Ramalayam Arch)',
    targetPhone: '92486 96735',
    targetPhoneRaw: '9248696735',
  },
  {
    id: 'flyer-449-nonac',
    title: 'Non-AC Rooms (₹449) & Hostel Dormitory Flyer',
    badge: '₹449 Special Offer',
    category: 'Budget Accommodations',
    image: '/images/apple-inn-449-nonac-flyer.png',
    summary: 'Official promotional poster for ₹449 Non-AC Rooms and budget-friendly 24-hour hostel cot beds with attached lockers, clean bedding, and round-the-clock check-in.',
    keyPoints: [
      'Low Price Non-AC Rooms: ₹449',
      'Hostel & Dormitory Cot Accommodations',
      'Full 24-Hour Check-in Flexibility',
      'High-Speed Wi-Fi & CCTV Security Included',
    ],
    branch: 'Available at Gajuwaka & Srinagar',
    targetPhone: '90594 61033',
    targetPhoneRaw: '9059461033',
  },
  {
    id: 'flyer-799-ac',
    title: 'AC Rooms (₹799) & Interior Architecture Flyer',
    badge: '₹799 Best Comfort',
    category: 'Climate Controlled',
    image: '/images/apple-inn-799-ac-flyer.png',
    summary: 'Official promotional poster showcasing Low Price AC Rooms at ₹799 with individual split climate control, deluxe king/queen mattresses, modern lighting, and sanitized bathrooms.',
    keyPoints: [
      'Low Price AC Rooms: ₹799',
      'Split Air-Conditioning & Ceiling Fan',
      '24x7 Room Service & 24x7 Hot Water Supply',
      'Smart TV Entertainment & High-Speed Wi-Fi',
    ],
    branch: 'Available at Gajuwaka & Srinagar',
    targetPhone: '90594 61033',
    targetPhoneRaw: '9059461033',
  },
  {
    id: 'flyer-amenities',
    title: 'Complete 14 Official Amenities & Facilities Chart',
    badge: '14+ Certified Amenities',
    category: 'Full Facilities',
    image: '/images/apple-inn-amenities-flyer.png',
    summary: 'Official amenity checklist flyer illustrating all 14 guest conveniences: Free Wi-Fi, Free Parking, 24x7 Room Service, Air Conditioner, Locker Facility, Key Amenities Each Bed, Hot Water, Travels, Laundry, and Robot Massage.',
    keyPoints: [
      'Free High-Speed Wi-Fi Internet & Customer Parking',
      '24x7 Room Service, Hot Water & Housekeeping',
      'CCTV Surveillance & Personal Storage Lockers',
      'Hostel Accommodations, Travels & Robot Massage',
    ],
    branch: 'Standard Across All Apple IN Facilities',
    targetPhone: '90594 61033',
    targetPhoneRaw: '9059461033',
  },
];

export const OfficialFlyersShowcase: React.FC = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<OfficialFlyer | null>(null);

  return (
    <section id="official-flyers" className="py-16 sm:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-brand-dark tracking-tight">
            Original Posters & Tariffs from The Apple IN
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Browse all our authentic promotional flyers and room category posters exactly as published. Click any flyer to view it in high resolution.
          </p>
        </div>

        {/* 5 Flyers Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officialFlyersList.map((flyer) => (
            <div
              key={flyer.id}
              className="group bg-[#FAF9F6] rounded-3xl overflow-hidden border border-gray-200/90 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Poster Container — Entire Image Fully Visible (contain) */}
                <div
                  onClick={() => setSelectedFlyer(flyer)}
                  className="relative aspect-[4/3] bg-neutral-900 cursor-pointer overflow-hidden p-2 flex items-center justify-center group-hover:bg-neutral-950 transition-colors"
                >
                  <img
                    src={flyer.image}
                    alt={flyer.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-orange text-white shadow-md">
                      {flyer.badge}
                    </span>
                  </div>

                  {/* Click to Enlarge Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold pointer-events-none">
                    <Maximize2 className="w-4 h-4 text-brand-orange" />
                    <span>Click to View Full Poster</span>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange px-2.5 py-0.5 rounded-full bg-orange-100/80">
                      {flyer.category}
                    </span>
                    <span className="text-gray-500 font-medium text-[11px]">
                      {flyer.branch.split('(')[0]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-brand-dark leading-snug">
                    {flyer.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {flyer.summary}
                  </p>

                  <ul className="space-y-1.5 pt-1 border-t border-gray-200/70">
                    {flyer.keyPoints.slice(0, 3).map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedFlyer(flyer)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white border border-gray-300 hover:border-gray-400 text-brand-dark text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Enlarge Poster</span>
                </button>

                <a
                  href={`tel:${flyer.targetPhoneRaw}`}
                  className="py-2.5 px-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-sm"
                  title={`Call ${flyer.targetPhone}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full Image View */}
      {selectedFlyer && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedFlyer(null)}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] w-full bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-700 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                  {selectedFlyer.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  {selectedFlyer.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFlyer(null)}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image — Uncropped Full Display */}
            <div className="flex-1 overflow-auto bg-black flex items-center justify-center p-3 sm:p-6">
              <img
                src={selectedFlyer.image}
                alt={selectedFlyer.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-neutral-300">
                <span className="font-semibold text-white">Branch:</span> {selectedFlyer.branch}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/91${selectedFlyer.targetPhoneRaw}?text=${encodeURIComponent(`Hi The Apple IN, I am enquiring about ${selectedFlyer.title}. Please provide details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
                <a
                  href={`tel:${selectedFlyer.targetPhoneRaw}`}
                  className="px-4 py-2 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {selectedFlyer.targetPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
