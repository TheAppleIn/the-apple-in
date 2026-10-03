import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BedDouble, Wifi, Shield, CheckCircle2, ChevronRight, Phone, MapPin, Clock, Car } from 'lucide-react';
import { servicePillars, valueCards, contactDetails, accommodationRates } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { HeroPillarInteractive } from '../components/HeroPillarInteractive';
import { PricingCalculator } from '../components/PricingCalculator';
import { RealPremisesWalkthrough } from '../components/RealPremisesWalkthrough';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* =========================================================================
          HERO SECTION — Simple, Clean, Professional & Perfectly Aligned
      ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center bg-gradient-to-b from-[#FAFAF8] via-white to-[#F6F5F2] text-brand-dark overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20 border-b border-gray-200/60">
        {/* Subtle architectural ambient background glow */}
        <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
            
            {/* Left Column: Clean Brand Statement & Clear Hierarchy (lg:col-span-6 xl:col-span-6) */}
            <div className="lg:col-span-6 space-y-6 lg:space-y-7">
              
              {/* Brand Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 shadow-xs">
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
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold font-display tracking-tight text-neutral-900 leading-[1.12]">
                  Stay Connected.<br />
                  Stay Secure.<br />
                  <span className="text-brand-orange">
                    Stay Comfortable.
                  </span>
                </h1>
              </div>

              {/* Grounded & Authentic Supporting Copy */}
              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl">
                Quality accommodation, reliable optical fiber internet, and professional CCTV surveillance solutions — all under one trusted brand in Visakhapatnam.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#services-overview"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-md hover:shadow-lg shadow-orange-500/20 transition-all duration-200 active:scale-95 text-center"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-xs transition-all duration-200 text-center"
                >
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Three Value Highlights (Clean, Balanced, Cohesive) */}
              <div className="pt-3 border-t border-gray-200/80 grid grid-cols-3 gap-3 text-left">
                <div className="p-3 rounded-2xl bg-white border border-gray-200/70 shadow-xs">
                  <div className="flex items-center gap-1.5 text-brand-orange mb-1">
                    <BedDouble className="w-4 h-4 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-900">Lodge</span>
                  </div>
                  <div className="text-xs text-gray-500 leading-snug">AC / Non-AC & Dormitory</div>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-gray-200/70 shadow-xs">
                  <div className="flex items-center gap-1.5 text-brand-orange mb-1">
                    <Wifi className="w-4 h-4 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-900">Internet</span>
                  </div>
                  <div className="text-xs text-gray-500 leading-snug">Optical Fiber Broadband</div>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-gray-200/70 shadow-xs">
                  <div className="flex items-center gap-1.5 text-brand-orange mb-1">
                    <Shield className="w-4 h-4 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-900">CCTV</span>
                  </div>
                  <div className="text-xs text-gray-500 leading-snug">Sales, Setup & Support</div>
                </div>
              </div>

              {/* Address & Direct Phone Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500 pt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Gajuwaka & Aganampudi, Visakhapatnam</span>
                </div>
                <a 
                  href={`tel:${contactDetails.primaryPhoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-gray-700 hover:text-brand-orange transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Call: +91 {contactDetails.primaryPhone}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Clean Interactive 3-Pillar Visual Panel (lg:col-span-6 xl:col-span-6) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <HeroPillarInteractive />
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          BUSINESS OVERVIEW — Three Large Premium Service Blocks
      ========================================================================= */}
      <section id="services-overview" className="py-20 lg:py-28 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Three Pillars of Excellence"
            title="Integrated Solutions for Living, Working & Security"
            subtitle="The Apple IN combines modern hospitality, high-performance networking, and dependable surveillance into one cohesive service ecosystem."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePillars.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Service Number Tag */}
                  <div className="absolute top-4 left-4 bg-brand-dark/90 text-brand-orange text-xs font-extrabold px-3 py-1.5 rounded-full font-display border border-neutral-700 backdrop-blur-sm">
                    {service.number}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-dark tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.subtitle}
                    </p>

                    {/* Features checklist */}
                    <ul className="pt-2 space-y-2 text-xs text-gray-600">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark group-hover:text-brand-orange transition-colors"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-brand-orange transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          HOME — LODGE SECTION (Comfortable Stays. Thoughtfully Managed.)
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange-light border border-orange-200/60">
                <BedDouble className="w-3.5 h-3.5" />
                <span>Hospitality & Living</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-dark tracking-tight leading-[1.15]">
                Comfortable Stays.<br />
                <span className="text-brand-orange">Thoughtfully Managed.</span>
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                The Apple IN Lodge & Dormitory provides accommodation options designed for individuals looking for a clean, convenient and comfortable stay in Visakhapatnam.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
                  <div className="font-bold text-sm text-brand-dark flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    AC / Non-AC Rooms
                  </div>
                  <p className="text-xs text-gray-500">
                    Climate-controlled executive bedrooms tailored for relaxation after travel or work.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
                  <div className="font-bold text-sm text-brand-dark flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    Dormitory Accommodation
                  </div>
                  <p className="text-xs text-gray-500">
                    Neat, budget-friendly shared accommodations with personal lockers and privacy curtains.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
                  <div className="font-bold text-sm text-brand-dark flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    Comfortable Rooms
                  </div>
                  <p className="text-xs text-gray-500">
                    Clean linens, soft pillows, warm lighting, and sanitized spaces maintained daily.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
                  <div className="font-bold text-sm text-brand-dark flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    Professional Service
                  </div>
                  <p className="text-xs text-gray-500">
                    Attentive front desk assistance, welcoming atmosphere, and transparent guest support.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about#hospitality"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm transition-colors"
                >
                  <span>Explore Lodge & Rooms</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${contactDetails.primaryPhoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call {contactDetails.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Right: Large Editorial Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200/80">
                <img
                  src="/images/lodge-ac-bedroom-real.jpg"
                  alt="The Apple IN verified AC executive bedroom interior with clean double bedding and split AC"
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Floating Authentic Quote Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-soft border border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      The Apple IN Lodge & Dormitory
                    </div>
                    <div className="text-sm font-semibold text-brand-dark">
                      AC from ₹799 • Non-AC ₹549 • Dorm ₹200
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    Visakhapatnam
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          HOME — ACCOMMODATION RATES & AMENITIES SECTION
      ========================================================================= */}
      <section id="pricing" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-gray-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Heading */}
          <SectionHeading
            badge="Official Tariff & Amenities"
            title="Affordable, Clean Stays in Visakhapatnam"
            subtitle="Transparent accommodation rates featuring 24-hour room availability, free high-speed Wi-Fi, 24-hour travel assistance, and CCTV security."
            align="center"
          />

          {/* 3 Pricing Cards Grid with Real Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {accommodationRates.map((room) => (
              <div
                key={room.id}
                className={`relative rounded-3xl overflow-hidden bg-white border flex flex-col justify-between transition-all duration-300 ${
                  room.popular
                    ? 'border-brand-orange shadow-xl shadow-orange-500/10 scale-102 ring-2 ring-brand-orange/20'
                    : 'border-gray-200 hover:border-gray-300 shadow-soft hover:shadow-premium'
                }`}
              >
                {room.badge && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-sm">
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
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      {room.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-display text-brand-dark">
                        {room.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {room.description}
                      </p>
                    </div>

                    <div className="pt-2 pb-1 border-y border-gray-100 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-brand-orange font-display">
                        ₹{room.priceDisplay}
                      </span>
                      <span className="text-xs text-gray-500 font-medium ml-1">
                        /{room.unit}
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2 pt-1">
                      {room.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/91${contactDetails.primaryPhoneRaw}?text=${encodeURIComponent(`Hi The Apple IN, I want to book ${room.name} (₹${room.priceDisplay}). Please confirm availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 transition-all ${
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

          {/* 4 Official Amenities Strip */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-gray-200/90 shadow-sm">
            <h4 className="text-base sm:text-lg font-bold font-display text-brand-dark mb-4 text-center sm:text-left">
              Key Features & Amenities Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-brand-dark">Free High-Speed Wi-Fi</h5>
                  <p className="text-xs text-gray-600 mt-0.5">High-speed optical fiber internet across all rooms & dormitory.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-brand-dark">24 Hours Room Availability</h5>
                  <p className="text-xs text-gray-600 mt-0.5">Round-the-clock check-in and room readiness at any hour.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-brand-dark">24 Hours Available Travel</h5>
                  <p className="text-xs text-gray-600 mt-0.5">Assistance with transport and direct connectivity near 38 Bus Stop.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-brand-dark">CCTV Surveillance</h5>
                  <p className="text-xs text-gray-600 mt-0.5">HD security cameras safeguarding all corridors and entrances.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Multi-Day Pricing Calculator */}
          <PricingCalculator />

          {/* Verified On-Site Photos & Interactive Walkthrough */}
          <RealPremisesWalkthrough />

        </div>
      </section>


      {/* =========================================================================
          HOME — INTERNET SECTION (Reliable Connectivity for Everyday Life)
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Large Technology Image */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200/80">
                <img
                  src="/images/internet-service.jpg"
                  alt="Professional internet technician configuring high-speed fiber-optic network equipment"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 right-4 bg-brand-dark/90 text-brand-orange text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm border border-neutral-700">
                  Fiber & Broadband
                </div>
              </div>
            </div>

            {/* Right: Copy & Highlights */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange-light border border-orange-200/60">
                <Wifi className="w-3.5 h-3.5" />
                <span>Connectivity Solutions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-dark tracking-tight leading-[1.15]">
                Reliable Connectivity for Everyday Life
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                The Apple IN internet service provides dependable broadband and optical fiber networking solutions for residential properties, commercial establishments, and offices in Visakhapatnam.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { title: "Home & Business Broadband", desc: "Stable throughput for remote work, media streaming, and multi-device households." },
                  { title: "Fiber-Optic Infrastructure", desc: "Clean optical cabling and termination ensuring low latency and consistent signal." },
                  { title: "Wi-Fi Setup & Optimization", desc: "Proper router placement and secure channel configuration for dead-zone elimination." },
                  { title: "Dedicated Local Troubleshooting", desc: "Prompt technical assistance from field engineers based right in your locality." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-bold text-brand-dark">{item.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/internet"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm transition-colors"
                >
                  <span>Explore Internet Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          HOME — CCTV SECTION (Security You Can See.)
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange-light border border-orange-200/60">
                <Shield className="w-3.5 h-3.5" />
                <span>Security & Surveillance</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-dark tracking-tight leading-[1.15]">
                Security You Can See.
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                The Apple IN delivers professional CCTV sales, expert installation, and reliable maintenance services for residential homes, retail stores, commercial offices, and properties across Visakhapatnam.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "CCTV Camera Sales",
                  "Precision Wall & Ceiling Installation",
                  "NVR / DVR Storage Setup",
                  "Remote Mobile Monitoring",
                  "Preventative Maintenance",
                  "Repair & Hardware Replacement",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/cctv"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm transition-colors"
                >
                  <span>Explore CCTV Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span>Request Site Assessment</span>
                </Link>
              </div>
            </div>

            {/* Right: Security Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200/80">
                <img
                  src="/images/cctv-installation.jpg"
                  alt="Professional CCTV technician installing security camera on modern property"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-dark/95 backdrop-blur-md text-white rounded-2xl p-4 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      CCTV Sales & Service
                    </div>
                    <div className="text-sm font-semibold">
                      Residential • Commercial • Retail
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 bg-neutral-800 px-3 py-1 rounded-full">
                    Visakhapatnam
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          HOME — WHY CHOOSE US (4 Premium Value Cards)
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F7F7F5] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Apple IN Difference"
            title="Why Choose The Apple IN"
            subtitle="Grounding our operations in reliability, professional assistance, and practical everyday solutions."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-black font-display text-base">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold font-display text-brand-dark">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-orange">
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
