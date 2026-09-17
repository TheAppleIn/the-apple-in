import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { contactDetails } from '../data/content';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 bg-brand-dark overflow-hidden text-white border-t border-neutral-800">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block text-xs uppercase tracking-widest font-bold text-brand-orange px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full">
          The Apple IN • Gajuwaka, Visakhapatnam
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Need a Stay, a Better Connection or Better Security?
        </h2>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Talk to The Apple IN team about your requirement. Whether you need clean rooms, high-capacity internet, or complete CCTV installation, we are here to assist.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg hover:shadow-orange-500/20 transition-all duration-200 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${contactDetails.primaryPhoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-gray-200 bg-neutral-900 border border-neutral-700 hover:border-brand-orange hover:text-white transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Call +91 {contactDetails.primaryPhone}</span>
          </a>
        </div>

        <p className="text-xs text-gray-500 pt-2">
          {contactDetails.hoursNotice}
        </p>
      </div>
    </section>
  );
};
