import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import {
  Wifi,
  Radio,
  Server,
  Wrench,
  Headphones,
  Home,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { internetProcessSteps, contactDetails } from '../data/content';

export const Internet: React.FC = () => {
  const serviceCategories = [
    {
      icon: Home,
      title: "Home Internet",
      description: "Consistent connectivity engineered for home workspaces, video streaming, digital learning, and everyday family internet usage.",
    },
    {
      icon: Radio,
      title: "Broadband Connectivity",
      description: "Dedicated high-capacity broadband links tailored for businesses, commercial storefronts, and multi-tenant environments.",
    },
    {
      icon: Server,
      title: "Fiber Connectivity",
      description: "End-to-end optical fiber cabling deployed directly to your property to minimize transmission degradation and latency.",
    },
    {
      icon: Wifi,
      title: "Wi-Fi Setup",
      description: "Strategic dual-band wireless router installation, channel frequency optimization, and optimal placement to eliminate dead spots.",
    },
    {
      icon: Headphones,
      title: "Network Support",
      description: "Direct assistance from on-ground technical support staff based in Visakhapatnam for router reconfigurations and network queries.",
    },
    {
      icon: Wrench,
      title: "Internet Troubleshooting",
      description: "Fast-response on-site diagnostics for line faults, fiber damage repairs, connector terminations, and modem replacements.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <PageHero
        title="Reliable Internet. Professional Service."
        subtitle="High-performance optical fiber and broadband connectivity solutions delivered by experienced local networking professionals in Visakhapatnam."
        badge="ISP & Network Solutions"
        imageSrc="/images/internet-service.jpg"
        imageAlt="Professional internet technician setting up high-speed fiber-optic network"
        currentPage="Internet Services"
      />

      {/* Aganampudi Operations Hub Card (Directly After Main Hero Image) */}
      <section className="bg-[#F7F7F5] py-8 sm:py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-soft">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Internet Service Provider Operations Hub</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-dark">
                  Visit Our Aganampudi Service Center
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  <strong>{contactDetails.primaryAddress.line1}</strong>, {contactDetails.primaryAddress.area}, {contactDetails.primaryAddress.cityStateZip}<br />
                  <span className="text-brand-orange font-semibold">Landmark: {contactDetails.primaryAddress.landmark}</span>
                </p>
                <p className="text-xs text-gray-500 pt-1">
                  Customer Support & New Broadband Bookings: <strong className="text-brand-dark">+91 {contactDetails.secondaryPhone}</strong>
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-col gap-2.5 w-full sm:w-auto shrink-0">
                <a
                  href={contactDetails.aganampudiMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`tel:${contactDetails.secondaryPhoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-brand-dark bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call {contactDetails.secondaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ISP SERVICE OVERVIEW
      ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="High-Integrity Infrastructure"
                title="Connectivity Built for Today's Demands"
                subtitle="From work-from-home demands to enterprise commercial requirements, we deliver stable and dependable internet services."
              />

              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  At <strong>The Apple IN</strong>, our Internet Service division provides grounded, dependable network architecture tailored for residences, apartment complexes, commercial establishments, and institutions across the Visakhapatnam region.
                </p>
                <p>
                  Rather than relying on generic telephone-line infrastructure, our deployments prioritize robust optical fiber lines and high-grade termination equipment. Our service model emphasizes prompt local field response, ensuring that any line perturbation or device configuration request is attended to quickly.
                </p>
              </div>

              {/* Consultation Note */}
              <div className="p-4 rounded-2xl bg-[#FFF5EB] border border-orange-200/80 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div className="text-xs text-gray-700 leading-relaxed">
                  <strong>Customized Connection Assessment:</strong> Because every building layout and bandwidth requirement differs, our team conducts personalized requirement consultations to recommend the right installation setup for your location.
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm transition-colors"
                >
                  <span>Get Internet Assistance</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Fiber Infrastructure Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200">
                <img
                  src="/images/fiber-network.jpg"
                  alt="Close-up of modern fiber optic network cables and clean patch panel"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-dark/95 backdrop-blur-md text-white border border-neutral-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    High-Throughput Fiber
                  </div>
                  <div className="text-sm font-semibold">
                    Direct Optical Transmission • Low Latency
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SERVICE CATEGORIES
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F7F7F5] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Service Categories"
            title="Comprehensive Internet Solutions"
            subtitle="Explore our specialized connectivity offerings designed for both personal living spaces and business operations."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold font-display text-brand-dark">
                      {cat.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-brand-orange">
                      Service Category
                    </span>
                    <Link
                      to="/contact"
                      className="text-gray-500 hover:text-brand-dark font-medium flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =========================================================================
          MODERN HOME CONNECTIVITY SHOWCASE
      ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200">
                <img
                  src="/images/wifi-home.jpg"
                  alt="Modern home environment with high-speed Wi-Fi router and connected smart devices"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-dark/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-neutral-700 backdrop-blur-sm">
                  Full Home Coverage
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange-light border border-orange-200/60">
                <Wifi className="w-3.5 h-3.5" />
                <span>Wi-Fi Optimization</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark tracking-tight">
                Seamless Signals Throughout Your Property
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                Many network issues originate from poor wireless router location, wall interference, and channel congestion. The Apple IN technicians assess your physical space during setup to ensure your wireless access point delivers maximum reach and stable connections to all your phones, laptops, smart televisions, and desktop systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Dual-Band 2.4 / 5 GHz Tuning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Interference Mitigation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Secure WPA3 / WPA2 Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Device Multi-Pairing Assistance</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${contactDetails.secondaryPhoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call For Wi-Fi Assistance: {contactDetails.secondaryPhone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          INTERNET SERVICE PROCESS (Clean Visual Workflow)
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Step-by-Step Workflow"
            title="How Our Internet Service Works"
            subtitle="From your initial inquiry to final connection verification, our process ensures smooth and transparent onboarding."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {internetProcessSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-300 relative flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="text-3xl font-black font-display text-brand-orange mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold font-display text-brand-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center gap-1 text-[11px] font-semibold text-brand-orange">
                  <span>Phase {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-md hover:shadow-orange-500/20 transition-all active:scale-95"
            >
              <span>Get Internet Assistance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
};
