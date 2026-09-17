import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import {
  Shield,
  Camera,
  Wrench,
  Sliders,
  ArrowRight,
  Eye,
  Store,
  Briefcase,
  Home,
  Building2,
  HardHat,
} from 'lucide-react';
import { cctvProcessSteps } from '../data/content';

export const CCTV: React.FC = () => {
  const cctvOfferings = [
    {
      icon: Camera,
      title: "CCTV Sales",
      description: "Direct retail and bulk supply of verified security cameras, including High-Definition Dome, Weatherproof Bullet, and PTZ optics.",
    },
    {
      icon: Wrench,
      title: "CCTV Installation",
      description: "Careful physical mounting, conduit line laying, weatherproof outdoor junction boxes, and clean cable routing without unsightly wall clutter.",
    },
    {
      icon: Sliders,
      title: "CCTV Configuration",
      description: "Programming DVR/NVR hard drives, continuous and motion-based recording schedules, multi-channel display layout, and network configuration.",
    },
    {
      icon: Eye,
      title: "CCTV Maintenance",
      description: "Routine scheduled inspections to check camera alignment, clean lens surfaces, audit storage recording health, and verify power backup lines.",
    },
    {
      icon: HardHat,
      title: "CCTV Service & Support",
      description: "Prompt on-call troubleshooting for video signal loss, camera power adapter replacements, hard disk errors, and smartphone app remote view resets.",
    },
  ];

  const sectorSolutions = [
    {
      icon: Home,
      title: "Residential",
      description: "Securing main gates, perimeters, driveways, and garden areas with discreet, high-resolution cameras for peace of mind.",
    },
    {
      icon: Store,
      title: "Shop & Retail",
      description: "Overhead cash counter monitoring, customer flow visibility, and inventory surveillance to reduce shrinkage and disputes.",
    },
    {
      icon: Briefcase,
      title: "Office",
      description: "Coverage for reception lobbies, entry doors, conference facilities, and IT equipment rooms with centralized monitoring.",
    },
    {
      icon: Building2,
      title: "Commercial",
      description: "Surveillance architecture for multi-floor commercial complexes, parking bays, stairwells, and shared building lobbies.",
    },
    {
      icon: Shield,
      title: "Property & Plot",
      description: "Perimeter monitoring for boundary walls, open construction sites, godowns, and warehouses located in the industrial belt.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <PageHero
        title="Smarter Surveillance. Better Protection."
        subtitle="Professional CCTV camera sales, precision installation, recording configuration, and ongoing service for homes and businesses across Visakhapatnam."
        badge="Surveillance & Protection"
        imageSrc="/images/cctv-installation.jpg"
        imageAlt="Professional CCTV technician installing security camera on commercial building"
        currentPage="CCTV Services"
      />

      {/* =========================================================================
          CCTV CORE OFFERINGS
      ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="End-to-End Surveillance"
            title="Comprehensive CCTV Sales & Service"
            subtitle="From initial equipment selection to precision wiring and ongoing system support, we handle every stage of your surveillance requirements."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cctvOfferings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F7F7F5] rounded-3xl p-8 border border-gray-100 hover:bg-orange-50/20 hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold font-display text-brand-dark">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-brand-orange">
                    <span>Expert Execution</span>
                    <Link to="/contact" className="hover:text-brand-dark flex items-center gap-1">
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Quick Consultation Card */}
            <div className="bg-brand-dark rounded-3xl p-8 text-white flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
                  Free Site Assessment
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  Need Help Choosing Cameras?
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Our technician will visit your site in Visakhapatnam to recommend the optimal camera models and placement angles for clear coverage.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold transition-colors"
              >
                <span>Request Site Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTOR SOLUTIONS (Residential, Commercial, Office, Shop, Property)
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F7F7F5] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                badge="Tailored Applications"
                title="Surveillance Solutions for Every Property"
                subtitle="Every building presents distinct viewing angles, lighting conditions, and mounting requirements. We customize our setups accordingly."
              />

              <p className="text-sm text-gray-600 leading-relaxed">
                Whether you are securing a private home, an active retail storefront, a corporate office, or a perimeter plot, our team ensures correct camera resolution, proper field-of-view, and reliable recording hardware.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-xs text-gray-600 space-y-2">
                <div className="font-bold text-brand-dark text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-orange" />
                  <span>Transparent Engineering</span>
                </div>
                <p>
                  We focus on high visual clarity and reliable recordings rather than making exaggerated claims. Our systems provide clear, verifiable visibility day and night.
                </p>
              </div>
            </div>

            {/* Right: Sector Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectorSolutions.map((sector, idx) => {
                const Icon = sector.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-gray-100 shadow-soft space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold font-display text-brand-dark">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SURVEILLANCE CONTROL & MONITORING SHOWCASE
      ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Security Camera Image */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200">
                <img
                  src="/images/cctv-security.jpg"
                  alt="Modern commercial CCTV surveillance dome camera monitoring property perimeter"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-dark/90 text-brand-orange text-xs font-bold px-3 py-1.5 rounded-full border border-neutral-700 backdrop-blur-sm">
                  Active Monitoring
                </div>
              </div>
            </div>

            {/* Right: Monitoring Environment Image & Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gray-200">
                <img
                  src="/images/cctv-monitoring.jpg"
                  alt="Modern CCTV monitoring control room with multi-screen surveillance displays"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-dark/95 backdrop-blur-md text-white p-4 rounded-2xl border border-neutral-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Centralized Control Setup
                  </div>
                  <div className="text-sm font-semibold">
                    Multi-Screen Viewing & Secure Remote Access
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          CCTV PROCESS WORKFLOW
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Methodical Execution"
            title="How Our CCTV Service Works"
            subtitle="Our structured 6-step deployment guarantees proper coverage, durable cabling, and dependable operation."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cctvProcessSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="text-3xl font-black font-display text-brand-orange mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold font-display text-brand-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Step {idx + 1} of 6</span>
                  <span className="font-semibold text-brand-orange">Surveillance Flow</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg hover:shadow-orange-500/25 transition-all duration-200 active:scale-95"
            >
              <span>Discuss Your CCTV Requirement</span>
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
