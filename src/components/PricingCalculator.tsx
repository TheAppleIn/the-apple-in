import React, { useState } from 'react';
import { Wifi, Clock, Car, Shield, Phone, MessageSquare, Calculator, Plus, Minus } from 'lucide-react';
import { contactDetails } from '../data/content';

export interface RoomOptionItem {
  id: string;
  name: string;
  category: string;
  price: number;
  priceDisplay: string;
  unit: string;
  badge?: string;
  description: string;
  branch: string;
}

export const roomCategories: RoomOptionItem[] = [
  {
    id: 'ac',
    name: 'Low Price AC Room',
    category: 'Executive AC',
    price: 799,
    priceDisplay: '799',
    unit: 'room / 24 hrs',
    badge: 'Popular',
    description: 'Private bedroom with individual split AC, clean double bed & attached bathroom',
    branch: 'Gajuwaka & Srinagar',
  },
  {
    id: 'non-ac',
    name: 'Low Price Non-AC Room',
    category: 'Standard Non-AC',
    price: 449,
    priceDisplay: '449',
    unit: 'room / 24 hrs',
    badge: 'Special Offer',
    description: 'Well-ventilated bedroom with high-speed ceiling fan, fresh bedding & daily housekeeping',
    branch: 'Gajuwaka & Srinagar',
  },
  {
    id: 'dormitory',
    name: 'Dormitory & Hostel Beds',
    category: 'Shared Hostel',
    price: 200,
    priceDisplay: '200',
    unit: 'bed / 24 hrs',
    badge: 'Best Value',
    description: 'Shared cot bed accommodation with private luggage lockers and key amenities',
    branch: 'Gajuwaka & Srinagar',
  },
  {
    id: 'deluxe',
    name: 'Deluxe & Suite Rooms',
    category: 'Smart Look',
    price: 799,
    priceDisplay: '799',
    unit: 'room / 24 hrs',
    badge: 'Smart Look',
    description: 'Modern room with elegant decor, split AC, waiting lobby & robot massage access',
    branch: 'Srinagar Branch',
  },
];

export const PricingCalculator: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<'both' | 'gajuwaka' | 'srinagar'>('both');
  
  // Multi-room selections state: map of roomId -> quantity
  const [roomQuantities, setRoomQuantities] = useState<Record<string, number>>({
    'ac': 1,
    'non-ac': 0,
    'dormitory': 0,
    'deluxe': 0,
  });

  const [daysCount, setDaysCount] = useState<number>(1);

  // Update room quantity
  const updateQuantity = (id: string, delta: number) => {
    setRoomQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  // Filter rooms based on selected branch
  const filteredRooms = roomCategories.filter((r) => {
    if (selectedBranch === 'gajuwaka') {
      return r.id !== 'deluxe'; // Deluxe is primarily Srinagar exclusive
    }
    return true;
  });

  // Calculate totals across all selected room types
  const selectedSummary = Object.entries(roomQuantities)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const room = roomCategories.find((r) => r.id === id)!;
      return {
        ...room,
        quantity: qty,
        subtotal: room.price * qty * daysCount,
      };
    });

  const totalItemsCount = selectedSummary.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalAmount = selectedSummary.reduce((acc, curr) => acc + curr.subtotal, 0);

  // WhatsApp pre-filled message generator
  const getWhatsAppUrl = () => {
    const branchLabel = selectedBranch === 'srinagar'
      ? 'Srinagar Branch (Near Ramalayam Arch / Apollo Pharma)'
      : selectedBranch === 'gajuwaka'
      ? 'Old Gajuwaka Branch (Near 38 Bus Stop Backside)'
      : 'Any Available Branch in Visakhapatnam';
    
    const itemsLines = selectedSummary.length > 0
      ? selectedSummary.map((item) => `  • ${item.name}: ${item.quantity} × ₹${item.priceDisplay} = ₹${item.subtotal}`).join('\n')
      : '  • No rooms selected yet';

    const targetPhone = selectedBranch === 'srinagar' ? contactDetails.srinagarPhoneRaw : contactDetails.primaryPhoneRaw;
    const text = encodeURIComponent(
      `Hello The Apple IN,\nI want to enquire about booking rooms:\n• Branch: ${branchLabel}\n• Stay Duration: ${daysCount} Day(s)\n• Selected Accommodations:\n${itemsLines}\n• Total Estimated Tariff: ₹${totalAmount.toLocaleString('en-IN')}\n\nPlease confirm room availability and booking details.`
    );
    return `https://wa.me/91${targetPhone}?text=${text}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-dark to-neutral-900 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Multi-Room & Multi-Category Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight">
              Calculate Your Stay
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Select one or multiple AC, Non-AC, and dormitory rooms together for instant tariff estimation.
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
        {/* Step 1: Branch Location Selector */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-700 block">
            1. Select Branch Location
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={() => setSelectedBranch('both')}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedBranch === 'both'
                  ? 'border-brand-orange bg-orange-50/60 ring-1 ring-brand-orange shadow-xs'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-xs font-bold text-brand-dark">Both Branches</div>
              <div className="text-[11px] text-gray-500">Any available room in Vizag</div>
            </button>
            <button
              type="button"
              onClick={() => setSelectedBranch('gajuwaka')}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedBranch === 'gajuwaka'
                  ? 'border-brand-orange bg-orange-50/60 ring-1 ring-brand-orange shadow-xs'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-xs font-bold text-brand-dark">Old Gajuwaka Branch</div>
              <div className="text-[11px] text-gray-500">38 Bus Stop Backside • 90594 61033</div>
            </button>
            <button
              type="button"
              onClick={() => setSelectedBranch('srinagar')}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedBranch === 'srinagar'
                  ? 'border-brand-orange bg-orange-50/60 ring-1 ring-brand-orange shadow-xs'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-xs font-bold text-brand-dark">Srinagar Branch</div>
              <div className="text-[11px] text-gray-500">Ramalayam Arch / Apollo • 92486 96735</div>
            </button>
          </div>
        </div>

        {/* Step 2: Select Room Categories & Quantities (Allows picking 1 AC, 1 Non-AC, etc. simultaneously) */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-700 block">
              2. Select Rooms & Categories (Mix & Match AC, Non-AC & Beds)
            </label>
            <span className="text-[11px] text-gray-500 font-medium">
              You can choose multiple room types at the same time
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {filteredRooms.map((opt) => {
              const qty = roomQuantities[opt.id] || 0;
              const isSelected = qty > 0;

              return (
                <div
                  key={opt.id}
                  className={`p-4 rounded-2xl border-2 transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? 'border-brand-orange bg-orange-50/40 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  {/* Card Header & Badge */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                        {opt.category}
                      </span>
                      {opt.badge && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          isSelected ? 'bg-brand-orange text-white' : 'bg-orange-100 text-brand-orange'
                        }`}>
                          {opt.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-sm text-brand-dark pt-1 leading-snug">
                      {opt.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-snug">
                      {opt.description}
                    </p>
                  </div>

                  {/* Pricing & Interactive Quantity Counter */}
                  <div className="pt-3 mt-3 border-t border-gray-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-lg sm:text-xl font-extrabold text-brand-dark font-display">₹{opt.priceDisplay}</span>
                        <span className="text-[10px] text-gray-500 ml-1">/{opt.unit}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium">{opt.branch}</span>
                    </div>

                    {/* Counter Buttons */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(opt.id, -1)}
                        disabled={qty === 0}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          qty > 0
                            ? 'bg-gray-200 hover:bg-gray-300 text-brand-dark cursor-pointer'
                            : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                        }`}
                        aria-label={`Decrease ${opt.name}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className={`font-display font-bold text-sm px-3 py-1 rounded-lg border text-center flex-1 ${
                        qty > 0
                          ? 'bg-brand-orange text-white border-brand-orange'
                          : 'bg-gray-50 text-gray-500 border-gray-200'
                      }`}>
                        {qty} {opt.id === 'dormitory' ? (qty === 1 ? 'Bed' : 'Beds') : (qty === 1 ? 'Room' : 'Rooms')}
                      </span>

                      <button
                        type="button"
                        onClick={() => updateQuantity(opt.id, 1)}
                        className="w-8 h-8 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors shadow-xs"
                        aria-label={`Increase ${opt.name}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Stay Duration (Days) */}
        <div className="space-y-3 pt-2 border-t border-gray-100">
          <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-700 block">
            3. Stay Duration (Days)
          </label>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3 w-full sm:w-72">
              <button
                type="button"
                onClick={() => setDaysCount(Math.max(1, daysCount - 1))}
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-dark font-extrabold text-lg flex items-center justify-center transition-colors"
                aria-label="Decrease days"
              >
                −
              </button>
              <div className="flex-1 text-center py-2 px-4 rounded-xl border border-gray-200 bg-gray-50 font-display font-extrabold text-lg text-brand-dark">
                {daysCount} {daysCount > 1 ? 'Days' : 'Day'}
              </div>
              <button
                type="button"
                onClick={() => setDaysCount(daysCount + 1)}
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-dark font-extrabold text-lg flex items-center justify-center transition-colors"
                aria-label="Increase days"
              >
                +
              </button>
            </div>

            {/* Quick Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {[1, 2, 3, 5, 7, 15, 30].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDaysCount(d)}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all ${
                    daysCount === d
                      ? 'bg-brand-dark text-white border-brand-dark shadow-xs'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {d} {d === 1 ? 'Day' : 'Days'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Total Calculation & Action Summary */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F6] border border-orange-100 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-200/70">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-gray-500 block">
                Total Estimated Tariff
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-orange font-display">
                  ₹{totalAmount.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  ({totalItemsCount} {totalItemsCount === 1 ? 'Unit' : 'Units'} × {daysCount} {daysCount > 1 ? 'Days' : 'Day'})
                </span>
              </div>

              {/* Breakdown Pill Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {selectedSummary.length > 0 ? (
                  selectedSummary.map((item) => (
                    <span
                      key={item.id}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-gray-200 text-[11px] font-medium text-gray-700 shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      <span>{item.quantity}× {item.name}: ₹{item.subtotal}</span>
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-amber-600 font-semibold">
                    Please select at least 1 room or bed above to calculate
                  </span>
                )}
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
                href={`tel:${selectedBranch === 'srinagar' ? contactDetails.srinagarPhoneRaw : contactDetails.primaryPhoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-brand-dark bg-white hover:bg-gray-100 border border-gray-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call {selectedBranch === 'srinagar' ? 'Srinagar: 92486 96735' : 'Gajuwaka: 90594 61033'}</span>
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
              <span>24x7 Room Service & Hot Water</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Free Parking & Travels</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-orange shrink-0" />
              <span>CCTV Security Coverage</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 leading-snug">
            Base indicative tariff as advertised on premises: AC ₹799, Non-AC ₹449, Dormitory ₹200 per 24 hours. Valid across Old Gajuwaka Branch & Srinagar Branch (Hostel & Rooms). Contact management for seasonal dates, government taxes (if applicable), or long-term student/contractor rates.
          </p>
        </div>
      </div>
    </div>
  );
};
