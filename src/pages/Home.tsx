import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BedDouble, Wifi, Shield, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { servicePillars, valueCards, contactDetails, accommodationRates } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { HeroPillarInteractive } from '../components/HeroPillarInteractive';
import { PricingCalculator } from '../components/PricingCalculator';
import { RealPremisesWalkthrough } from '../components/RealPremisesWalkthrough';
import { BranchShowcase } from '../components/BranchShowcase';
import { OfficialFlyersShowcase } from '../components/OfficialFlyersShowcase';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* =========================================================================
          HERO SECTION — Simple, Clean, Professional & Perfectly Aligned
      ========================================================================= */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center bg-gradient-to-b from-[#FAFAF8] via-white to-[#F6F5F2] text-brand-dark overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-gray-200/60">
        {/* Subtle architectural ambient background glow */}
        <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-16 items-center">
            
            {/* Left Column: Clean Brand Statement & Clear Hierarchy */}
            <div className="lg:col-span-6 space-y-5 lg:space-y-7">
              
              {/* Brand Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange font-display">
                  THE APPLE IN
                </span>
                <span className="text-orange-300">•</span>
                <span className="text-[11px] font-semibold tracking-wider text-gray-700">
                  VISAKHAPATNAM
                </span>
              </div>

              {/* Confident, High-Impact Typography */}
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold font-display tracking-tight text-neutral-900 leading-[1.12]">
                  Stay Connected.<br />
                  Stay Secure.<br />
                  <span className="text-brand-orange">
                    Stay Comfortable.
                  </span>
                </h1>
              </div>

              {/* Grounded & Authentic Supporting Copy */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-normal leading-relaxed max-w-xl">
                Quality accommodation, reliable optical fiber internet, and professional CCTV surveillance solutions — all under one trusted brand in Visakhapatnam.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-md hover:shadow-lg shadow-orange-500/20 transition-all duration-200 active:scale-95 text-center"
                >
                  <span>Check Room Tariffs</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-xs transition-all duration-200 text-center"
                >
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Three Value Highlights (Clean, Balanced, Cohesive) */}
              <div className="pt-2 border-t border-gray-200/80 grid grid-cols-3 gap-2 sm:gap-3 text-left">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white border border-gray-200/70 shadow-xs">
                  <div className="flex items-center gap-1.5 text-brand-orange mb-0.5">
                    <BedDouble className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-900">Lodge</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 leading-snug">AC / Non-AC & Beds</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white border border-gray-200/70 shadow-xs">
                  <div className="flex items-center gap-1.5 text-brand-orange mb-0.5">
                    <Wifi className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-900">Internet</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 leading-snug">Fiber Broadband</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white border border-gray-200/70 shadow-xs">
                  <div className="flex items-center gap-1.5 text-brand-orange mb-0.5">
                    <Shield className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-900">CCTV</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 leading-snug">Sales & Setup</div>
                </div>
              </div>

              {/* Address & Direct Phone Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-500 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span className="truncate">Gajuwaka & Srinagar Branches, Visakhapatnam</span>
                </div>
                <a 
                  href={`tel:${contactDetails.primaryPhoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-gray-700 hover:text-brand-orange transition-colors font-medium self-start sm:self-auto"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Call: +91 {contactDetails.primaryPhone}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Clean Interactive 3-Pillar Visual Panel */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <HeroPillarInteractive />
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          BUSINESS OVERVIEW — Three Services Row
      ========================================================================= */}
      <section id="services-overview" className="py-12 sm:py-16 lg:py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Three Core Services"
            title="Hospitality, Internet & Surveillance"
            subtitle="Everything you need for comfortable living, high-speed fiber internet, and professional property security in Visakhapatnam."
            align="center"
          />

          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {servicePillars.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Service Number Tag */}
                  <div className="absolute top-3 left-3 bg-brand-dark/90 text-brand-orange text-xs font-extrabold px-2.5 py-1 rounded-full font-display border border-neutral-700 backdrop-blur-sm">
                    {service.number}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-brand-dark tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {service.subtitle}
                    </p>

                    {/* Features checklist */}
                    <ul className="pt-2 space-y-1.5 text-xs text-gray-600">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-3 border-t border-gray-100">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-dark group-hover:text-brand-orange transition-colors"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-orange transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          HOME — ACCOMMODATION RATES & AMENITIES SECTION
      ========================================================================= */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-24 bg-[#FAF9F6] border-y border-gray-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          
          {/* Section Heading */}
          <SectionHeading
            badge="Official Tariff & Amenities"
            title="Affordable, Clean Stays in Visakhapatnam"
            subtitle="Transparent accommodation rates featuring 24-hour room availability, free high-speed Wi-Fi, 24-hour travel assistance, and CCTV security."
            align="center"
          />

          {/* 4 Pricing Cards Grid with Real Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {accommodationRates.map((room) => (
              <div
                key={room.id}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border flex flex-col justify-between transition-all duration-300 ${
                  room.popular
                    ? 'border-brand-orange shadow-lg shadow-orange-500/10 ring-1 ring-brand-orange/30'
                    : 'border-gray-200 hover:border-gray-300 shadow-soft hover:shadow-premium'
                }`}
              >
                {room.badge && (
                  <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white shadow-md">
                    {room.badge}
                  </div>
                )}

                <div>
                  {/* Real Photo Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                      {room.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-orange bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100 mb-1">
                        {room.branchAvailability}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-brand-dark">
                        {room.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed line-clamp-2">
                        {room.description}
                      </p>
                    </div>

                    <div className="pt-2 pb-1 border-y border-gray-100 flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-brand-orange font-display">
                        ₹{room.priceDisplay}
                      </span>
                      <span className="text-xs text-gray-500 font-medium ml-1">
                        /{room.unit}
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-1 pt-1">
                      {room.features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-4 sm:p-5 pt-0">
                  <a
                    href={`https://wa.me/91${contactDetails.primaryPhoneRaw}?text=${encodeURIComponent(`Hi The Apple IN, I want to book ${room.name} (₹${room.priceDisplay}). Please confirm availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 transition-all ${
                      room.popular
                        ? 'bg-brand-orange hover:bg-brand-orange-hover text-white shadow-md'
                        : 'bg-brand-dark hover:bg-neutral-800 text-white'
                    }`}
                  >
                    <span>Book on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Multi-Day Pricing Calculator */}
          <PricingCalculator />

          {/* Official 14 Amenities Banner */}
          <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 border border-gray-200/90 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                  Included Amenities
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-display text-brand-dark mt-0.5">
                  Complete Comfort for Every Guest & Resident
                </h4>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-orange-50 text-brand-orange border border-orange-200 self-start sm:self-auto">
                14+ Certified Amenities
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center">
              {[
                { title: "Free Wi-Fi", tag: "Fiber Speed" },
                { title: "Free Parking", tag: "Safe Vehicle" },
                { title: "24x7 Room Service", tag: "Front Desk" },
                { title: "Air Conditioner", tag: "Split Cooling" },
                { title: "Locker Facility", tag: "Personal Key" },
                { title: "Key Amenities", tag: "Each Bed" },
                { title: "Air Cooled", tag: "Ventilation" },
                { title: "CCTV Security", tag: "24h Monitoring" },
                { title: "24x7 Hot Water", tag: "Geyser Ready" },
                { title: "Housekeeping", tag: "Daily Sanitize" },
                { title: "Hostel Facility", tag: "Long Stay" },
                { title: "Travels Service", tag: "Transit Help" },
                { title: "TV Entertainment", tag: "Cable Setup" },
                { title: "Robot Massage", tag: "Smart Lounge" },
              ].map((amenity, idx) => (
                <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-orange-200 transition-colors">
                  <span className="text-xs font-bold text-brand-dark block">{amenity.title}</span>
                  <span className="text-[10px] text-gray-500 block mt-0.5">{amenity.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Two Branches Location Showcase */}
          <BranchShowcase />

          {/* Verified On-Site Photos & Interactive Walkthrough */}
          <RealPremisesWalkthrough />

          {/* Official Promotional Flyers & Posters Showcase */}
          <OfficialFlyersShowcase />

        </div>
      </section>


      {/* =========================================================================
          HOME — INTERNET & CCTV QUICK HIGHLIGHTS
      ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Internet Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-soft space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange-light border border-orange-200/60">
                  <Wifi className="w-3.5 h-3.5" />
                  <span>Optical Fiber Internet</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-dark">
                  Reliable Broadband Connectivity
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Fast fiber-optic broadband for residential homes, corporate offices, and shops across Visakhapatnam, backed by dedicated local support.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-gray-700">
                  <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="font-bold block text-brand-dark">High-Speed Fiber</span>
                    <span className="text-[11px] text-gray-500">Smooth Streaming</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="font-bold block text-brand-dark">Local Field Support</span>
                    <span className="text-[11px] text-gray-500">Prompt Assistance</span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/internet"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm transition-colors"
                >
                  <span>Explore Internet Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* CCTV Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-soft space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange-light border border-orange-200/60">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Security & Surveillance</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-dark">
                  CCTV Sales & Installation
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  High-definition camera setups, DVR/NVR recorders, remote mobile viewing, and comprehensive hardware maintenance.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-gray-700">
                  <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="font-bold block text-brand-dark">HD Mobile View</span>
                    <span className="text-[11px] text-gray-500">Live Phone Stream</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="font-bold block text-brand-dark">Clean Concealed Wiring</span>
                    <span className="text-[11px] text-gray-500">Neat Finish</span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/cctv"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-dark hover:bg-neutral-800 shadow-sm transition-colors"
                >
                  <span>Explore CCTV Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          HOME — WHY CHOOSE US
      ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Apple IN Difference"
            title="Why Choose The Apple IN"
            subtitle="Grounding our operations in reliability, professional assistance, and practical everyday solutions."
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {valueCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F7F7F5] rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center font-black font-display text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold font-display text-brand-dark">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/60">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-orange">
                    Verified Quality
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          HOME — FINAL CTA (Dark Premium Section)
      ========================================================================= */}
      <CTASection />
    </div>
  );
};
