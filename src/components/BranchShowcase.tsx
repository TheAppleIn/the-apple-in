import React from 'react';
import { MapPin, Phone, MessageSquare, Sparkles, Building2, CheckCircle2, ExternalLink } from 'lucide-react';
import { branchLocations } from '../data/content';

interface BranchShowcaseProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const BranchShowcase: React.FC<BranchShowcaseProps> = ({
  title = "Our Strategic Locations in Visakhapatnam",
  subtitle = "Whether you need comfortable lodge rooms in Gajuwaka, smart hostel accommodations in Srinagar, or high-speed fiber internet and CCTV services from Aganampudi, The Apple IN is at your service.",
  className = "",
}) => {
  return (
    <div className={`space-y-8 ${className}`}>
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-orange bg-orange-50 border border-orange-200">
          <Building2 className="w-3.5 h-3.5" />
          <span>3 Prime Visakhapatnam Locations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-brand-dark tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {branchLocations.map((branch) => {
          const isSrinagar = branch.id === 'srinagar';
          const isAganampudi = branch.id === 'aganampudi';
          return (
            <div
              key={branch.id}
              className={`rounded-3xl bg-white border overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-soft hover:shadow-xl ${
                isSrinagar
                  ? 'border-orange-300/80 ring-1 ring-brand-orange/20'
                  : isAganampudi
                  ? 'border-blue-200/80 hover:border-blue-300'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div>
                {/* Branch Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 group">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-orange text-white shadow-md flex items-center gap-1.5">
                      {isSrinagar && <Sparkles className="w-3 h-3" />}
                      <span>{branch.badge}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-900/80 backdrop-blur-sm text-gray-200 border border-white/20">
                      {branch.type}
                    </span>
                  </div>

                  {/* Branch Name overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold font-display drop-shadow-md leading-snug">
                      {branch.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-orange-200 font-medium mt-0.5 drop-shadow-sm leading-tight">
                      {branch.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 sm:p-6 space-y-5">
                  {/* Address Card */}
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div className="text-xs space-y-0.5">
                      <div className="font-bold text-brand-dark text-sm">{branch.address.line1}</div>
                      <div className="text-gray-600">{branch.address.area}</div>
                      <div className="text-gray-600">{branch.address.cityStateZip}</div>
                      <div className="text-brand-orange font-semibold pt-1">
                        Landmark: {branch.address.landmark}
                      </div>
                    </div>
                  </div>

                  {/* Highlights / Features */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                      Branch Facilities & Services
                    </h4>
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      {branch.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-white p-2 rounded-xl border border-gray-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Strip */}
              <div className="p-5 sm:p-6 pt-0 border-t border-gray-100/80 bg-gray-50/50 flex flex-col gap-2.5">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-brand-dark bg-white hover:bg-orange-50 hover:text-brand-orange border border-gray-200 hover:border-brand-orange/40 shadow-xs transition-all group"
                >
                  <MapPin className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
                  <span>View Location on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-orange ml-auto" />
                </a>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`tel:${branch.phoneRaw}`}
                    className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {branch.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/91${branch.phoneRaw}?text=${encodeURIComponent(`Hello The Apple IN, I am inquiring about services at ${branch.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-bold text-brand-dark bg-white hover:bg-gray-100 border border-gray-200 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
