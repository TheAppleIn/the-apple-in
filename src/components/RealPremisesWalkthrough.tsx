import React, { useState } from 'react';
import { Camera, CheckCircle2, ChevronLeft, ChevronRight, Maximize2, X, Phone, MessageSquare } from 'lucide-react';
import { contactDetails } from '../data/content';

interface PhotoSpotlight {
  id: string;
  title: string;
  tag: string;
  rate?: string;
  image: string;
  caption: string;
  specs: string[];
}

const photoCollection: PhotoSpotlight[] = [
  {
    id: 'non-ac-room',
    title: 'Low Price Non-AC Room',
    tag: 'Hospitality • Non-AC Room',
    rate: '₹449',
    image: '/images/lodge-non-ac-room-real.jpg',
    caption: 'Verified real photograph of our low price Non-AC bedroom featuring wooden cot and headboard, comfortable mattress, study desk, wardrobe, curtains, and wall-mounted TV.',
    specs: ['Comfortable Double Bed', 'Wardrobe & Study Desk', 'Free High-Speed Wi-Fi', 'Daily Housekeeping'],
  },
  {
    id: 'ac-room',
    title: 'Low Price AC Executive Bedroom',
    tag: 'Hospitality • AC Room',
    rate: '₹799',
    image: '/images/lodge-ac-bedroom-real.jpg',
    caption: 'Verified real photograph of our AC executive double bedroom featuring clean linens, split AC cooling, marble-tiled floors, side drawer, and wall TV mounting.',
    specs: ['Individual Split AC', 'Double Bed & Clean Linens', 'Attached Bathroom', 'Free High-Speed Wi-Fi'],
  },
  {
    id: 'srinagar-deluxe',
    title: 'Srinagar Branch — Deluxe Executive Room',
    tag: 'Srinagar Branch • Deluxe AC',
    rate: '₹799',
    image: '/images/deluxe-suite-room.png',
    caption: 'Verified real photograph of Srinagar branch deluxe room with emerald styling, designer floral wall, split AC, and plush king bedding.',
    specs: ['Split Air Conditioner', 'Smart Look Design', '24x7 Room Service & Hot Water', 'Free Customer Parking'],
  },
  {
    id: 'robot-massage',
    title: 'Srinagar Branch — Robot Massage Chair Lounge',
    tag: 'Srinagar Branch • Wellness Facility',
    image: '/images/robot-massage.png',
    caption: 'Exclusive automated robotic massage facility providing intelligent full-body muscle rejuvenation and relaxation for guests and residents.',
    specs: ['Automated Full-Body Massage', 'Smart Multi-Program Settings', 'Guest Relaxation Lounge', 'Wellness Amenity'],
  },
  {
    id: 'srinagar-hostel',
    title: 'Srinagar Branch — Modern Hostel Dormitory Beds',
    tag: 'Srinagar Branch • Hostel & Cot Beds',
    rate: '₹200',
    image: '/images/dormitory-srinagar-hostel.jpg',
    caption: 'Clean, organized shared cot bed accommodations at Srinagar branch designed for budget travelers, students, and job aspirants.',
    specs: ['Individual Sturdy Cot Beds', 'Personal Luggage Lockers', 'Key Amenities Each Bed', '24 Hours Stay: ₹200'],
  },
  {
    id: 'reception',
    title: 'Front Office Reception & Waiting Lounge',
    tag: 'Premises • Guest Lounge',
    image: '/images/front-office.png',
    caption: 'Verified real photograph of The Apple IN reception lobby with crystal chandelier lighting, designer accent walls, and comfortable L-shaped cushioned seating.',
    specs: ['24 Hours Check-in Desk', 'Comfortable Guest Seating', 'CCTV Security Coverage', 'Luggage Assistance'],
  },
  {
    id: 'room-interior',
    title: 'Spacious Bedroom Interior with Ceiling Fan',
    tag: 'Hospitality • Interior Architecture',
    image: '/images/lodge-room-interior-real.jpg',
    caption: 'Verified real photograph showing modern false ceiling architecture with blue center accent, warm recessed spotlights, high-speed ceiling fan, and en-suite facilities.',
    specs: ['High-Speed Ceiling Fan', 'Recessed Warm Spotlights', 'Well-Ventilated', 'Sanitized Daily'],
  },
  {
    id: 'exterior',
    title: 'Building Facade & Street Location',
    tag: 'Location • Old Gajuwaka',
    image: '/images/lodge-exterior-real.jpg',
    caption: 'Verified real exterior street photograph showing the building premises on the first floor above retail shops, located right near 38 Bus Stop backside.',
    specs: ['Near 38 Bus Stop Backside', 'Muthoot Finance Landmark', '24h Travel Connectivity', 'Easy Transport Access'],
  },
  {
    id: 'signboard-on-site',
    title: 'On-Site Official Outdoor Signboard',
    tag: 'Branding • Identity',
    image: '/images/signin-board.png',
    caption: 'Verified on-site street photograph showing the official "The Apple IN Lodge & Dormitory" signboard installed at the Old Gajuwaka property.',
    specs: ['Physical Signboard', 'Phone: 90594 61033', 'Phone: 93465 61033', 'Verified Location'],
  },
  {
    id: 'signboard-banner',
    title: 'Official Outdoor Brand Billboard',
    tag: 'Branding • Identity',
    image: '/images/apple-inn-banner-wide.png',
    caption: 'Official outdoor branding billboard displaying "THE APPLE IN LODGE & DORMITORY", contact phone numbers 90594-61033 & 93465 61033, and official motto "Think Totally Different".',
    specs: ['The Apple IN Logo', 'Phone: 90594 61033', 'Phone: 93465 61033', 'Full Postal Address'],
  },
];

export const RealPremisesWalkthrough: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activePhoto = photoCollection[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? photoCollection.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === photoCollection.length - 1 ? 0 : prev + 1));
  };

  const getWhatsAppBookingUrl = (photo: PhotoSpotlight) => {
    const text = encodeURIComponent(
      `Hello The Apple IN Lodge,\nI saw the photo of ${photo.title}${photo.rate ? ` (${photo.rate})` : ''} on your website.\nPlease let me know about current room availability.`
    );
    return `https://wa.me/91${contactDetails.primaryPhoneRaw}?text=${text}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden">
      <div className="p-6 sm:p-8 lg:p-10 space-y-6">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Premises Photo Showcase</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-dark tracking-tight">
              Verified On-Site Photographs
            </h3>
            <p className="text-sm text-gray-600 mt-1 max-w-xl">
              Genuine commercial photos captured on location at # 7-15-19, 38 Bus Stop Backside, Old Gajuwaka.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
              <span>100% Real Photographs • No 3D Renders</span>
            </span>
          </div>
        </div>

        {/* Main Featured Photo Viewer */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-gray-200 shadow-inner group flex items-center justify-center">
          <img
            key={activePhoto.id}
            src={activePhoto.image}
            alt={activePhoto.title}
            className="w-full h-full object-cover transition-all duration-500 animate-in fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25 pointer-events-none" />

          {/* Top Overlays */}
          <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 z-10">
            <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/20">
              {activePhoto.tag}
            </span>

            <div className="flex items-center gap-2">
              {activePhoto.rate && (
                <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-extrabold text-white bg-brand-orange shadow-sm">
                  {activePhoto.rate}
                </span>
              )}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-colors"
                title="View full resolution photo"
                aria-label="Enlarge image"
              >
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Prev / Next Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/55 hover:bg-brand-orange text-white flex items-center justify-center backdrop-blur-md transition-all opacity-85 hover:opacity-100 hover:scale-105 z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/55 hover:bg-brand-orange text-white flex items-center justify-center backdrop-blur-md transition-all opacity-85 hover:opacity-100 hover:scale-105 z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Bottom Caption & Action Strip */}
          <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 text-white z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 bg-black/55 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-3 sm:p-0 rounded-xl">
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl font-bold font-display drop-shadow">
                  {activePhoto.title}
                </h4>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-200 mt-0.5 max-w-2xl line-clamp-1 sm:line-clamp-2 drop-shadow">
                  {activePhoto.caption}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                <a
                  href={getWhatsAppBookingUrl(activePhoto)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-sm transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${contactDetails.primaryPhoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold text-brand-dark bg-white hover:bg-gray-100 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Call to Book</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip — Clear vibrant previews */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 pt-2">
          {photoCollection.map((photo, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`p-1.5 sm:p-2 rounded-2xl border text-left transition-all relative ${
                  isSelected
                    ? 'border-brand-orange bg-orange-50/70 shadow-sm ring-2 ring-brand-orange/40'
                    : 'border-gray-200 hover:border-gray-300 bg-gray-50/60'
                }`}
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-1.5 bg-gray-200 flex items-center justify-center">
                  <img src={photo.image} alt={photo.title} className="w-full h-full object-cover" />
                  {photo.rate && (
                    <span className="absolute bottom-1 right-1 text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-orange text-white shadow-sm">
                      {photo.rate}
                    </span>
                  )}
                </div>
                <h5 className="text-[11px] sm:text-xs font-bold text-brand-dark line-clamp-1">{photo.title}</h5>
                <span className="text-[9px] sm:text-[10px] text-gray-500 block truncate">Photo 0{idx + 1}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800 text-white">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span className="font-bold text-sm">{activePhoto.title}</span>
                {activePhoto.rate && (
                  <span className="text-xs text-brand-orange font-bold">({activePhoto.rate})</span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-full hover:bg-neutral-800 text-gray-400 hover:text-white transition-colors"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-neutral-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <p className="text-gray-300 max-w-xl">{activePhoto.caption}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-3 py-1.5 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white font-bold"
                >
                  Next Photo →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
