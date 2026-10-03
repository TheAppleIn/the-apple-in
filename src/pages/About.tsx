import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { BedDouble, Wifi, Shield, CheckCircle, MapPin, Building, UserCheck, Phone } from 'lucide-react';
import { contactDetails } from '../data/content';
import { PricingCalculator } from '../components/PricingCalculator';

export const About: React.FC = () => {
  const brandValues = [
    {
      title: "Reliable Service",
      description: "Delivering consistent cleanliness in accommodations, stable network uptime, and reliable camera hardware performance.",
    },
    {
      title: "Professional Assistance",
      description: "Knowledgeable technicians and front-desk personnel who approach every customer request with courtesy and competence.",
    },
    {
      title: "Practical Solutions",
      description: "Tailoring accommodation choices, internet setups, and CCTV layouts to the real-world operational needs of the customer.",
    },
    {
      title: "Customer Support",
      description: "Direct local communication with dedicated phone numbers and prompt responses for troubleshooting and reservations.",
    },
    {
      title: "Convenient Experience",
      description: "A centralized, single-brand hub in Visakhapatnam that solves living, internet connectivity, and surveillance needs together.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <PageHero
        title="One Name. Multiple Solutions."
        subtitle="The Apple IN is an integrated service business based in Visakhapatnam, bringing together modern lodging, high-speed internet connectivity, and professional CCTV surveillance."
        badge="About The Apple IN"
        imageSrc="/images/visakhapatnam-city.jpg"
        imageAlt="Visakhapatnam modern coastal urban landscape"
        currentPage="About Us"
      />

      {/* =========================================================================
          COMPANY INTRODUCTION
      ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Unified Service Ecosystem"
                title="Built to Serve the Modern Needs of Visakhapatnam"
                subtitle="A forward-thinking business structured across three essential lifestyle and enterprise domains."
              />

              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  <strong>The Apple IN</strong> was conceived to address three critical everyday requirements under a unified brand identity: providing welcoming, well-maintained accommodation for travelers and working professionals; ensuring fast, uninterrupted internet access for residences and workplaces; and deploying robust CCTV surveillance systems to protect assets and peace of mind.
                </p>
                <p>
                  Operating in the vibrant commercial hub of Gajuwaka and Aganampudi, Visakhapatnam, our focus is anchored in direct accountability, professional workmanship, and attentive service. Rather than operating as disconnected vendors, we align hospitality, technology, and security into a seamless, trusted local presence.
                </p>
              </div>

              {/* Quick Info Points */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#F7F7F5] border border-gray-100">
                  <div className="font-bold text-sm text-brand-dark flex items-center gap-1.5 mb-1">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                    <span>Location</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Gajuwaka, Visakhapatnam – 530046
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F7F5] border border-gray-100">
                  <div className="font-bold text-sm text-brand-dark flex items-center gap-1.5 mb-1">
                    <Building className="w-4 h-4 text-brand-orange" />
                    <span>3 Pillars</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Lodge, ISP & CCTV Surveillance
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F7F5] border border-gray-100">
                  <div className="font-bold text-sm text-brand-dark flex items-center gap-1.5 mb-1">
                    <UserCheck className="w-4 h-4 text-brand-orange" />
                    <span>Management</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Professional Field Team & Front Desk
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Team / Technology Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200">
                <img
                  src="/images/technology-team.jpg"
                  alt="The Apple IN professional operations and technical team working collaboratively"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-dark/95 backdrop-blur-md text-white border border-neutral-800">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                    Brand Ethos
                  </span>
                  <span className="text-sm font-semibold">
                    Think Totally Different
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          THREE PILLARS IN DETAIL
      ========================================================================= */}
      
      {/* 1. OUR HOSPITALITY */}
      <section id="hospitality" className="py-20 bg-[#F7F7F5] border-b border-gray-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200">
                <img
                  src="/images/lodge-reception-lounge-real.jpg"
                  alt="The Apple IN lodge verified reception and comfortable waiting lounge"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-dark/90 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-neutral-700 backdrop-blur-sm">
                  Verified Real Premises
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-brand-dark block">Reception & Waiting Lounge</span>
                    <span className="text-gray-500">38 Bus Stop Backside, Old Gajuwaka</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-[11px]">
                    24/7 Front Desk
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange-light border border-orange-200/60">
                <BedDouble className="w-3.5 h-3.5" />
                <span>Chapter 01</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark tracking-tight">
                Our Hospitality
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                <strong>The Apple IN Lodge & Dormitory</strong> provides budget-friendly, sanitized, and modern accommodations in the heart of Old Gajuwaka, Visakhapatnam. Centrally situated near 38 Bus Stop, we cater to travelers, corporate visitors, industrial professionals, and families.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">Low Price AC Rooms — ₹799</h3>
                    <p className="text-xs text-gray-600 mt-0.5">Private bedrooms with individual split AC, clean double bed, spotless linens, and attached bath.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">Low Price Non-AC Rooms — ₹549</h3>
                    <p className="text-xs text-gray-600 mt-0.5">Well-ventilated comfortable rooms with high-speed ceiling fan, clean bedding, and daily maintenance.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">Dormitory Non/AC Beds (24 Hours) — ₹200</h3>
                    <p className="text-xs text-gray-600 mt-0.5">Organized shared bunk accommodation with individual luggage lockers and full 24-hour stay allowance.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${contactDetails.primaryPhoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Reserve: +91 {contactDetails.primaryPhone}</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-brand-dark bg-white hover:bg-gray-100 border border-gray-300 transition-colors"
                >
                  <span>Contact Management</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Real Photo Gallery of the Premises */}
          <div className="space-y-6 pt-6 border-t border-gray-200/80">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
                  On-Site Photography
                </span>
                <h3 className="text-2xl font-bold font-display text-brand-dark">
                  Real Premises & Facilities
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md">
                100% genuine photographs taken directly on-site at # 7-15-19, 38 Bus Stop Backside, Old Gajuwaka.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/lodge-ac-bedroom-real.jpg"
                    alt="Verified AC Executive Bedroom"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3.5">
                  <h4 className="text-xs font-bold text-brand-dark">AC Executive Bedroom</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Low Price: ₹799 with Split AC</p>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/lodge-non-ac-room-real.jpg"
                    alt="Verified Low Price Non-AC Bedroom"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3.5">
                  <h4 className="text-xs font-bold text-brand-dark">Low Price Non-AC Room</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Low Price Non-AC: ₹549</p>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/lodge-reception-lounge-real.jpg"
                    alt="Designer Reception & Waiting Lounge"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3.5">
                  <h4 className="text-xs font-bold text-brand-dark">Reception & Lounge Area</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Chandelier & Sofa Seating</p>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/apple-in-signboard.jpg"
                    alt="The Apple IN Official Signboard"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3.5">
                  <h4 className="text-xs font-bold text-brand-dark">Official Signboard</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Old Gajuwaka Bus Stop Backside</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodation Rates & Pricing Calculator */}
          <div id="rates" className="scroll-mt-24 space-y-8 pt-6 border-t border-gray-200/80">
            <PricingCalculator />
          </div>

        </div>
      </section>

      {/* 2. OUR CONNECTIVITY */}
      <section id="connectivity" className="py-20 bg-white border-b border-gray-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange-light border border-orange-200/60">
                <Wifi className="w-3.5 h-3.5" />
                <span>Chapter 02</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark tracking-tight">
                Our Connectivity
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                As a dedicated internet service provider, The Apple IN delivers fiber-optic and broadband solutions designed for continuous uptime, high throughput, and seamless connectivity across households and commercial enterprises.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#F7F7F5] border border-gray-100 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">Fiber-Optic Deployment</h3>
                    <p className="text-xs text-gray-600 mt-0.5">High-integrity optical cabling that withstands environmental factors and provides low latency.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F7F5] border border-gray-100 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">Full Home & Office Wi-Fi Setup</h3>
                    <p className="text-xs text-gray-600 mt-0.5">Professional positioning of dual-band and multi-point wireless routers for complete area coverage.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F7F5] border border-gray-100 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">Rapid Technical Assistance</h3>
                    <p className="text-xs text-gray-600 mt-0.5">On-ground technicians ready to assist with router resets, fiber splicing repairs, and configuration tuning.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/internet"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm transition-colors"
                >
                  <span>Explore Internet Services</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200">
                <img
                  src="/images/fiber-network.jpg"
                  alt="High-speed optical fiber infrastructure in modern network center"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 right-4 bg-brand-dark/90 text-brand-orange text-xs font-bold px-3 py-1.5 rounded-full border border-neutral-700 backdrop-blur-sm">
                  ISP & Network Engineering
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR SECURITY */}
      <section id="security" className="py-20 bg-[#F7F7F5] border-b border-gray-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200">
                <img
                  src="/images/cctv-security.jpg"
                  alt="Modern commercial CCTV surveillance camera installed on building exterior"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-brand-dark/90 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-neutral-700 backdrop-blur-sm">
                  CCTV Sales & Service
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange-light border border-orange-200/60">
                <Shield className="w-3.5 h-3.5" />
                <span>Chapter 03</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark tracking-tight">
                Our Security
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                Security is about proactive visibility and reliable hardware. The Apple IN CCTV division brings professional equipment, precision alignment, and long-term service support to residential and commercial customers.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">Certified Camera Sales</h3>
                    <p className="text-xs text-gray-600 mt-0.5">High-definition dome, bullet, and PTZ cameras suited for outdoor weather and indoor monitoring.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">Concealed Structured Wiring</h3>
                    <p className="text-xs text-gray-600 mt-0.5">Discreet conduit routing and durable connections that protect cables from tampering and weather wear.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">Storage & Monitoring Integration</h3>
                    <p className="text-xs text-gray-600 mt-0.5">Configuration of DVR/NVR hard drives and secure remote access setup on authorized smartphones.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/cctv"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-brand-dark hover:bg-neutral-800 transition-colors"
                >
                  <span>Explore CCTV Solutions</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          WHY PEOPLE CHOOSE THE APPLE IN
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Commitments"
            title="Why People Choose The Apple IN"
            subtitle="The operational values that define every interaction with our hospitality, internet, and security teams."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F7F7F5] border border-gray-100 hover:bg-orange-50/30 transition-colors space-y-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-brand-orange text-white flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold font-display text-brand-dark">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}

            {/* Contact quick prompt box */}
            <div className="p-8 rounded-3xl bg-brand-dark text-white flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Ready to connect?
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  Speak Directly With Our Management
                </h3>
                <p className="text-xs text-gray-400">
                  Call us today to inquire about lodge bookings, broadband availability, or CCTV site visits.
                </p>
              </div>

              <a
                href={`tel:${contactDetails.primaryPhoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold transition-colors"
              >
                <span>Call {contactDetails.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
};
