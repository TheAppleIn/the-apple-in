import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { galleryItems } from '../data/content';
import { BedDouble, Wifi, Shield, X, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { RealPremisesWalkthrough } from '../components/RealPremisesWalkthrough';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Real Premises' | 'Lodge' | 'Internet' | 'CCTV'>('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : activeFilter === 'Real Premises'
    ? galleryItems.filter((item) => (item as any).verified)
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <PageHero
        title="Explore The Apple IN Experience"
        subtitle="A visual showcase of our accommodation interiors, optical networking projects, and professional surveillance installations in Visakhapatnam."
        badge="Visual Portfolio"
        imageSrc="/images/lodge-reception-lounge-real.jpg"
        imageAlt="The Apple IN lodge reception and hospitality atmosphere"
        currentPage="Gallery & Experience"
      />

      {/* =========================================================================
          GALLERY SECTION WITH FILTER TABS
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Real Premises Photo Walkthrough Component */}
          <RealPremisesWalkthrough />
          
          {/* Section Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-200">
            <SectionHeading
              badge="Real Spaces & Installations"
              title="Project & Facility Gallery"
              subtitle="Filter through our verified lodge premises, broadband networking infrastructure, and surveillance deployments."
            />

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white border border-gray-200 shadow-sm self-start md:self-auto">
              {(['All', 'Real Premises', 'Lodge', 'Internet', 'CCTV'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === cat
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'text-gray-600 hover:text-brand-dark hover:bg-gray-50'
                  }`}
                >
                  {cat === 'All' ? 'All Works' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Grid Gallery */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-soft hover:shadow-premium cursor-pointer transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content Overlay / Banner */}
                <div className="p-5 flex flex-col justify-between space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange px-2.5 py-0.5 rounded-full bg-brand-orange-light">
                        {item.category}
                      </span>
                      {(item as any).verified && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                          <CheckCircle2 className="w-3 h-3 text-green-600" />
                          <span>Verified Premises</span>
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      aria-label="Enlarge image"
                      className="text-gray-400 group-hover:text-brand-dark transition-colors p-1"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-base font-bold font-display text-brand-dark group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          CUSTOMER EXPERIENCE SECTION (Neutral & Grounded — No Fake Reviews)
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <SectionHeading
            badge="Our Standard"
            title="Customer Experience"
            subtitle="Our operational standard is guided by four fundamental principles that ensure consistent value for every guest, subscriber, and client."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-left">
            <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-gray-100 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center">
                <BedDouble className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-brand-dark">Comfortable Stays</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Prioritizing clean rooms, sanitized washrooms, and peaceful resting spaces for individuals and groups in Visakhapatnam.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-gray-100 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center">
                <Wifi className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-brand-dark">Reliable Connectivity</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Delivering stable broadband lines and minimal downtime so you can stream, work, and communicate without disruption.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-gray-100 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-brand-dark">Professional Service</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Courteous communication, transparent interactions, and field technicians who take pride in neat, structured workmanship.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-gray-100 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-brand-dark">Security Solutions</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                High-definition cameras, robust storage systems, and reliable remote viewing to safeguard properties and workplaces.
              </p>
            </div>
          </div>

          <div className="pt-4 p-6 rounded-2xl bg-[#FFF5EB] border border-orange-200/80 text-xs text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              <strong>Commitment to Authentic Service:</strong> We believe in building lasting goodwill through verifiable day-to-day service rather than manufactured marketing claims. We invite you to experience The Apple IN firsthand.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================================
          LIGHTBOX MODAL
      ========================================================================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-white space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-2.5 py-0.5 rounded-full bg-brand-orange-light">
                  {selectedImage.category}
                </span>
                <span className="text-xs text-gray-400">• The Apple IN</span>
              </div>
              <h3 className="text-xl font-bold font-display text-brand-dark">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <CTASection />
    </div>
  );
};
