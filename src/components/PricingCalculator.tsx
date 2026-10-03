import React, { useState } from 'react';
import { Wifi, Clock, Car, Shield, Check, Phone, MessageSquare, Calculator } from 'lucide-react';
import { contactDetails } from '../data/content';

interface RoomTypeOption {
  id: 'ac' | 'non-ac' | 'dormitory';
  name: string;
  price: number;
  priceDisplay: string;
  unit: string;
  badge?: string;
  icon: string;
  description: string;
}

const roomOptions: RoomTypeOption[] = [
  {
    id: 'ac',
    name: 'Low Price AC Room',
    price: 799,
    priceDisplay: '799',
    unit: 'per 24 hrs',
    badge: 'Popular',
    icon: '❄️',
    description: 'Private bedroom with split AC, double bed & attached bathroom',
  },
  {
    id: 'non-ac',
    name: 'Low Price Non-AC Room',
    price: 549,
    priceDisplay: '549',
    unit: 'per 24 hrs',
    badge: 'Economy',
    icon: '🛏️',
    description: 'Clean ventilated bedroom with high-speed ceiling fan & daily housekeeping',
  },
  {
    id: 'dormitory',
    name: 'Dormitory Non/AC Beds',
    price: 200,
    priceDisplay: '200',
    unit: 'per bed / 24 hrs',
    badge: 'Best Value',
    icon: '🏨',
    description: 'Individual shared bunk bed accommodation with secure locker access',
  },
];

export const PricingCalculator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'ac' | 'non-ac' | 'dormitory'>('ac');
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [daysCount, setDaysCount] = useState<number>(1);

  const selectedRoom = roomOptions.find((r) => r.id === selectedType) || roomOptions[0];
  const totalAmount = selectedRoom.price * roomsCount * daysCount;

  // WhatsApp pre-filled message generator
  const getWhatsAppUrl = () => {
    const unitLabel = selectedType === 'dormitory' ? 'Bed(s)' : 'Room(s)';
    const text = encodeURIComponent(
      `Hello The Apple IN Lodge,\nI am interested in booking:\n• Accommodation: ${selectedRoom.name} (${selectedRoom.priceDisplay})\n• Quantity: ${roomsCount} ${unitLabel}\n• Duration: ${daysCount} Day(s)\n• Estimated Total: ₹${totalAmount}\n\nPlease confirm room availability and booking details.`
    );
    return `https://wa.me/91${contactDetails.primaryPhoneRaw}?text=${text}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-dark to-neutral-900 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Multi-Day Stay Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight">
              Calculate Your Stay
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Select room category, quantity, and stay duration for instant estimation.
            </p>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs text-gray-400 block">Starting from</span>
            <span className="text-3xl sm:text-4xl font-extrabold text-brand-orange font-display">₹200</span>
            <span className="text-xs text-gray-300 block">per bed (24 Hours)</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Step 1: Select Room Category */}
        <div className="space-y-3">
          <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-700 block">
            1. Select Room / Accommodation Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {roomOptions.map((opt) => {
              const isSelected = selectedType === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedType(opt.id)}
                  className={`text-left p-4 rounded-2xl border-2 transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? 'border-brand-orange bg-orange-50/50 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  {opt.badge && (
                    <span className={`absolute top-3 right-3 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      isSelected ? 'bg-brand-orange text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {opt.badge}
                    </span>
                  )}
                  <div>
                    <span className="text-2xl mb-1 block">{opt.icon}</span>
                    <h4 className="font-bold text-sm text-brand-dark">{opt.name}</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-snug">{opt.description}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-xl font-extrabold text-brand-dark font-display">₹{opt.priceDisplay}</span>
                      <span className="text-[11px] text-gray-500 ml-1">/{opt.unit}</span>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Counters for Rooms and Days */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-gray-100">
          {/* Rooms / Beds Counter */}
          <div className="space-y-3">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-700 block">
              2. Number of {selectedType === 'dormitory' ? 'Beds' : 'Rooms'}
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setRoomsCount(Math.max(1, roomsCount - 1))}
                className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-dark font-extrabold text-lg flex items-center justify-center transition-colors"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <div className="flex-1 text-center py-2.5 px-4 rounded-xl border border-gray-200 bg-gray-50 font-display font-extrabold text-xl text-brand-dark">
                {roomsCount} {selectedType === 'dormitory' ? (roomsCount > 1 ? 'Beds' : 'Bed') : (roomsCount > 1 ? 'Rooms' : 'Room')}
              </div>
              <button
                type="button"
                onClick={() => setRoomsCount(roomsCount + 1)}
                className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-dark font-extrabold text-lg flex items-center justify-center transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Days Counter */}
          <div className="space-y-3">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-700 block">
              3. Stay Duration (Days)
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDaysCount(Math.max(1, daysCount - 1))}
                className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-dark font-extrabold text-lg flex items-center justify-center transition-colors"
                aria-label="Decrease days"
              >
                −
              </button>
              <div className="flex-1 text-center py-2.5 px-4 rounded-xl border border-gray-200 bg-gray-50 font-display font-extrabold text-xl text-brand-dark">
                {daysCount} {daysCount > 1 ? 'Days' : 'Day'}
              </div>
              <button
                type="button"
                onClick={() => setDaysCount(daysCount + 1)}
                className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-dark font-extrabold text-lg flex items-center justify-center transition-colors"
                aria-label="Increase days"
              >
                +
              </button>
            </div>

            {/* Quick Duration Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[1, 2, 3, 5, 7, 15, 30].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDaysCount(d)}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-all ${
                    daysCount === d
                      ? 'bg-brand-dark text-white border-brand-dark'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {d}d
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step 3: Total Calculation & Amenities Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F6] border border-orange-100 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200/70">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-gray-500 block">
                Total Estimated Tariff
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-orange font-display">
                  ₹{totalAmount.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  ({roomsCount} {selectedType === 'dormitory' ? 'Bed' : 'Room'} × {daysCount} {daysCount > 1 ? 'Days' : 'Day'})
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Reserve on WhatsApp</span>
              </a>

              <a
                href={`tel:${contactDetails.primaryPhoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-brand-dark bg-white hover:bg-gray-100 border border-gray-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call to Book</span>
              </a>
            </div>
          </div>

          {/* Included Features & Amenities */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-700 pt-1">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Free High-Speed Wi-Fi</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-orange shrink-0" />
              <span>24h Room Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-brand-orange shrink-0" />
              <span>24h Available Travel</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-orange shrink-0" />
              <span>CCTV Security Coverage</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 leading-snug">
            Base indicative tariff as advertised on premises: AC ₹799, Non-AC ₹549, Dormitory ₹200 per 24 hours. Contact management for seasonal dates, government taxes (if applicable), or long-term contractor rates.
          </p>
        </div>
      </div>
    </div>
  );
};
