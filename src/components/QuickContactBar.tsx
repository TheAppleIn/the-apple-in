import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { contactDetails } from '../data/content';
import { Link } from 'react-router-dom';

export const QuickContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl py-2 px-3">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${contactDetails.primaryPhoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-brand-orange text-white text-xs font-semibold shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] leading-tight">Call Now</span>
        </a>

        <a
          href={`tel:${contactDetails.secondaryPhoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gray-100 text-gray-800 text-xs font-semibold hover:bg-gray-200 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-brand-orange mb-0.5" />
          <span className="text-[11px] leading-tight">Line 2</span>
        </a>

        <Link
          to="/contact"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-black active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-brand-orange mb-0.5" />
          <span className="text-[11px] leading-tight">Enquire</span>
        </Link>
      </div>
    </div>
  );
};
