import React, { useState } from 'react';
import { Phone, MessageSquare, Calculator, Plus, Minus, Check } from 'lucide-react';
import { contactDetails } from '../data/content';

export interface RoomOptionItem {
  id: string;
  name: string;
  shortName: string;
  category: string;
  price: number;
  priceDisplay: string;
  unit: string;
  badge?: string;
  branch: string;
}

export const roomCategories: RoomOptionItem[] = [
  {
    id: 'non-ac',
    name: 'Non-AC Room',
    shortName: 'Non-AC Room',
    category: 'Non-AC Standard',
    price: 449,
    priceDisplay: '449',
    unit: 'room',
    badge: '₹449 Offer',
    branch: 'Gajuwaka & Srinagar',
  },
  {
    id: 'ac',
    name: 'AC Room',
    shortName: 'AC Room',
    category: 'Executive AC',
    price: 799,
    priceDisplay: '799',
    unit: 'room',
    badge: 'Popular',
    branch: 'Gajuwaka & Srinagar',
  },
  {
    id: 'dormitory',
    name: 'Dormitory & Hostel Bed',
    shortName: 'Hostel Bed',
    category: 'Shared Cot Bed',
    price: 200,
    priceDisplay: '200',
    unit: 'bed',
    badge: 'Best Value',
    branch: 'Gajuwaka & Srinagar',
  },
  {
    id: 'deluxe',
    name: 'Deluxe & Suite Rooms',
    shortName: 'Deluxe Room',
    category: 'Smart Look',
    price: 799,
    priceDisplay: '799',
    unit: 'room',
    badge: 'Smart Look',
    branch: 'Srinagar Branch',
  },
];

export const PricingCalculator: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<'both' | 'gajuwaka' | 'srinagar'>('both');
  
  // Multi-room quantities state
  const [roomQuantities, setRoomQuantities] = useState<Record<string, number>>({
    'non-ac': 1,
    'ac': 0,
    'dormitory': 0,
    'deluxe': 0,
  });

  const [daysCount, setDaysCount] = useState<number>(1);

  const updateQuantity = (id: string, delta: number) => {
    setRoomQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const filteredRooms = roomCategories.filter((r) => {
    if (selectedBranch === 'gajuwaka') {
      return r.id !== 'deluxe';
    }
    return true;
  });

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

  const getWhatsAppUrl = () => {
    const branchLabel = selectedBranch === 'srinagar'
      ? 'Srinagar Branch (Hostel & Rooms)'
      : selectedBranch === 'gajuwaka'
      ? 'Old Gajuwaka Branch'
      : 'Visakhapatnam';
    
    const dayLabel = daysCount === 1 ? '1 day' : `${daysCount} days`;

    const itemsLines = selectedSummary.length > 0
      ? selectedSummary.map((item) => {
          const unitWord = item.unit === 'bed' ? (item.quantity === 1 ? 'bed' : 'beds') : (item.quantity === 1 ? 'room' : 'rooms');
          if (daysCount > 1) {
            return `• ${item.name}: ${item.quantity} ${unitWord} × ₹${item.priceDisplay}/day × ${daysCount} days = ₹${item.subtotal.toLocaleString('en-IN')}`;
          }
          return `• ${item.name}: ${item.quantity} ${unitWord} × ₹${item.priceDisplay} = ₹${item.subtotal.toLocaleString('en-IN')}`;
        }).join('\n')
      : '• Room enquiry';

    const targetPhone = selectedBranch === 'srinagar' ? contactDetails.srinagarPhoneRaw : contactDetails.primaryPhoneRaw;
    const text = encodeURIComponent(
      `Hello The Apple IN,\n\nI want to check room availability and book:\nBranch: ${branchLabel}\nDuration: ${dayLabel}\n\nSelected Rooms:\n${itemsLines}\n\nTotal Estimated Amount: ₹${totalAmount.toLocaleString('en-IN')}\n\nPlease confirm availability and booking details. Thank you!`
    );
    return `https://wa.me/91${targetPhone}?text=${text}`;
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-md sm:shadow-xl overflow-hidden">
      {/* Header - Simple & Clean */}
      <div className="bg-gradient-to-r from-brand-dark to-neutral-900 text-white p-4 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <Calculator className="w-3 h-3" />
              <span>Easy Stay Calculator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-white">
              Calculate Your Stay
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
              Select your rooms & days for instant price estimation.
            </p>
          </div>

          <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
            <span className="text-xs text-gray-400">Starting from</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-brand-orange font-display">₹200</span>
              <span className="text-[11px] text-gray-300">/ 24 hrs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-7">
        {/* Step 1: Branch Location */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
            1. Select Branch
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'both', title: 'Any Branch', sub: 'Vizag' },
              { id: 'gajuwaka', title: 'Old Gajuwaka', sub: 'Bus Stop Back' },
              { id: 'srinagar', title: 'Srinagar', sub: 'Ramalayam' },
            ].map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setSelectedBranch(b.id as any)}
                className={`py-2 px-1.5 sm:py-2.5 sm:px-3 rounded-xl border text-center transition-all ${
                  selectedBranch === b.id
                    ? 'border-brand-orange bg-orange-50/80 text-brand-orange ring-1 ring-brand-orange font-bold shadow-xs'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 font-medium'
                }`}
              >
                <div className="text-xs leading-tight font-bold truncate">{b.title}</div>
                <div className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">{b.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Select Rooms & Quantities - Mobile Simplified Card Rows */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
              2. Choose Rooms / Beds
            </label>
            <span className="text-[11px] text-gray-500">Tap + or - to select</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
            {filteredRooms.map((opt) => {
              const qty = roomQuantities[opt.id] || 0;
              const isSelected = qty > 0;

              return (
                <div
                  key={opt.id}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all flex sm:flex-col justify-between items-center sm:items-stretch gap-3 ${
                    isSelected
                      ? 'border-brand-orange bg-orange-50/40 shadow-xs'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  {/* Left: Info */}
                  <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-gray-100 text-gray-600">
                        {opt.category}
                      </span>
                      {opt.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-orange-100 text-brand-orange">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-brand-dark truncate sm:whitespace-normal">
                      {opt.name}
                    </h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm sm:text-base font-extrabold text-brand-dark font-display">
                        ₹{opt.priceDisplay}
                      </span>
                      <span className="text-[10px] text-gray-500">/{opt.unit}</span>
                    </div>
                  </div>

                  {/* Right: Quantity Stepper */}
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 sm:pt-2 sm:border-t sm:border-gray-100 sm:justify-between">
                    <button
                      type="button"
                      onClick={() => updateQuantity(opt.id, -1)}
                      disabled={qty === 0}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                        qty > 0
                          ? 'bg-gray-100 active:bg-gray-200 text-brand-dark cursor-pointer'
                          : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                      }`}
                      aria-label={`Decrease ${opt.name}`}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>

                    <span className={`w-7 sm:flex-1 text-center font-bold text-xs sm:text-sm py-1 rounded-md ${
                      qty > 0 ? 'text-brand-orange font-extrabold' : 'text-gray-400'
                    }`}>
                      {qty}
                    </span>

                    <button
                      type="button"
                      onClick={() => updateQuantity(opt.id, 1)}
                      className="w-8 h-8 rounded-lg bg-brand-orange active:bg-brand-orange-hover text-white flex items-center justify-center font-bold text-sm transition-colors shadow-xs"
                      aria-label={`Increase ${opt.name}`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Stay Duration */}
        <div className="space-y-2 pt-1 border-t border-gray-100">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
            3. Stay Duration
          </label>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 w-full sm:w-64">
              <button
                type="button"
                onClick={() => setDaysCount(Math.max(1, daysCount - 1))}
                className="w-9 h-9 rounded-xl bg-gray-100 active:bg-gray-200 text-brand-dark font-extrabold text-base flex items-center justify-center"
                aria-label="Decrease days"
              >
                −
              </button>
              <div className="flex-1 text-center py-1.5 px-3 rounded-xl border border-gray-200 bg-gray-50 font-display font-extrabold text-sm sm:text-base text-brand-dark">
                {daysCount} {daysCount > 1 ? 'Days' : 'Day'}
              </div>
              <button
                type="button"
                onClick={() => setDaysCount(daysCount + 1)}
                className="w-9 h-9 rounded-xl bg-gray-100 active:bg-gray-200 text-brand-dark font-extrabold text-base flex items-center justify-center"
                aria-label="Increase days"
              >
                +
              </button>
            </div>

            {/* Quick Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[1, 2, 3, 5, 7, 15, 30].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDaysCount(d)}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-all ${
                    daysCount === d
                      ? 'bg-brand-dark text-white border-brand-dark'
                      : 'bg-white text-gray-600 border-gray-200 active:bg-gray-100'
                  }`}
                >
                  {d}d
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Estimated Total & Action Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-orange-200/80 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-gray-500 block">
                Total Estimated Tariff
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-orange font-display">
                  ₹{totalAmount.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  ({totalItemsCount} {totalItemsCount === 1 ? 'Unit' : 'Units'} × {daysCount} {daysCount > 1 ? 'Days' : 'Day'})
                </span>
              </div>
            </div>

            {/* Booking Action Buttons */}
            <div className="flex items-center gap-2 pt-1 sm:pt-0">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-green-600 hover:bg-green-700 shadow-sm active:scale-98 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <a
                href={`tel:${contactDetails.primaryPhoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 active:scale-98 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span className="hidden sm:inline">Call</span>
              </a>
            </div>
          </div>

          {/* Quick Summary Pill Row */}
          {selectedSummary.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-gray-200/60 text-[11px] text-gray-600">
              {selectedSummary.map((item) => (
                <span key={item.id} className="bg-white px-2 py-0.5 rounded border border-gray-200">
                  {item.quantity}× {item.shortName} (₹{item.subtotal})
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 4 Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] text-gray-600">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
            <span>24h Full Stay Period</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
            <span>Free Fiber Wi-Fi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
            <span>24/7 Room Service</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
            <span>CCTV Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
};
