import React from 'react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { BranchShowcase } from '../components/BranchShowcase';
import { contactDetails } from '../data/content';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ExternalLink,
} from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <PageHero
        title="Let's Talk About What You Need."
        subtitle="Reach out to The Apple IN team for room reservations, high-speed broadband inquiries, or CCTV security consultations in Visakhapatnam."
        badge="Contact The Apple IN"
        imageSrc="/images/visakhapatnam-city.jpg"
        imageAlt="The Apple IN contact hub in Visakhapatnam"
        currentPage="Contact Us"
      />

      {/* =========================================================================
          MAIN CONTACT SECTION
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Info & Address Cards */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeading
                badge="Direct Communication"
                title="Get in Touch With Our Team"
                subtitle="We are available across direct phone lines, email, and on-site visits to assist your requirement."
              />

              {/* Phone Numbers Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-brand-dark">
                      Phone Contacts
                    </h3>
                    <p className="text-xs text-gray-500">Tap any number to call directly</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={`tel:${contactDetails.primaryPhoneRaw}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-orange-50/50 border border-gray-100 transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Branch 1: Old Gajuwaka Main Lodge</div>
                      <div className="text-base font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                        +91 {contactDetails.primaryPhone}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-orange bg-white px-3 py-1 rounded-full border border-gray-200">
                      Call
                    </span>
                  </a>

                  <a
                    href={`tel:${contactDetails.srinagarPhoneRaw}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-orange-50/40 hover:bg-orange-50 border border-orange-200/60 transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-brand-orange font-bold flex items-center gap-1">
                        <span>Branch 2: Srinagar Hostel & Rooms</span>
                      </div>
                      <div className="text-base font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                        +91 {contactDetails.srinagarPhone}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-white bg-brand-orange px-3 py-1 rounded-full shadow-xs">
                      Call
                    </span>
                  </a>

                  <a
                    href={`tel:${contactDetails.secondaryPhoneRaw}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-orange-50/50 border border-gray-100 transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Internet & CCTV Operations (Aganampudi)</div>
                      <div className="text-base font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                        +91 {contactDetails.secondaryPhone}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-orange bg-white px-3 py-1 rounded-full border border-gray-200">
                      Call
                    </span>
                  </a>

                  <a
                    href={`tel:${contactDetails.managerPhoneRaw}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-orange-50/50 border border-gray-100 transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Alternate / Manager Line ({contactDetails.managerName})</div>
                      <div className="text-base font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                        +91 {contactDetails.managerPhone}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-orange bg-white px-3 py-1 rounded-full border border-gray-200">
                      Call
                    </span>
                  </a>
                </div>
              </div>

              {/* Email Addresses Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-brand-dark">
                      Email Addresses
                    </h3>
                    <p className="text-xs text-gray-500">Send inquiries and service requests</p>
                  </div>
                </div>

                <div className="space-y-2 pt-1 text-sm">
                  <a
                    href={`mailto:${contactDetails.primaryEmail}`}
                    className="block p-3 rounded-xl bg-gray-50 hover:bg-orange-50/50 border border-gray-100 transition-colors text-brand-dark hover:text-brand-orange break-all font-medium"
                  >
                    <span className="text-xs text-gray-500 block mb-0.5 font-normal">Primary Business Email</span>
                    {contactDetails.primaryEmail}
                  </a>

                  <a
                    href={`mailto:${contactDetails.secondaryEmail}`}
                    className="block p-3 rounded-xl bg-gray-50 hover:bg-orange-50/50 border border-gray-100 transition-colors text-brand-dark hover:text-brand-orange break-all font-medium"
                  >
                    <span className="text-xs text-gray-500 block mb-0.5 font-normal">Direct Contact Email</span>
                    {contactDetails.secondaryEmail}
                  </a>
                </div>
              </div>

              {/* Address Details Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-brand-dark">
                      Locations & Map Directions
                    </h3>
                    <p className="text-xs text-gray-500">3 Verified Centers Across Visakhapatnam</p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-1 text-sm text-gray-700">
                  {/* Branch 1 */}
                  <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                        Branch 1: Old Gajuwaka (Apple Lodge)
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-orange text-white">
                        Flagship
                      </span>
                    </div>
                    <address className="not-italic leading-relaxed text-xs sm:text-sm text-gray-800">
                      <strong>{contactDetails.cardAddress.line1}</strong>,<br />
                      {contactDetails.cardAddress.area},<br />
                      {contactDetails.cardAddress.cityStateZip}
                    </address>
                    <div className="text-xs text-brand-orange font-semibold">
                      Landmark: {contactDetails.cardAddress.landmark}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      Phone: +91 {contactDetails.primaryPhone} / {contactDetails.managerPhone}
                    </div>
                    <a
                      href={contactDetails.gajuwakaMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-orange-100 text-xs font-bold text-brand-orange border border-orange-200 transition-colors shadow-xs mt-1"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </a>
                  </div>

                  {/* Branch 2 */}
                  <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                        Branch 2: Srinagar (Hostel & Rooms)
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-600 text-white">
                        New Smart Look
                      </span>
                    </div>
                    <address className="not-italic leading-relaxed text-xs sm:text-sm text-gray-800">
                      <strong>{contactDetails.srinagarAddress.line1}</strong>,<br />
                      {contactDetails.srinagarAddress.area},<br />
                      {contactDetails.srinagarAddress.cityStateZip}
                    </address>
                    <div className="text-xs text-brand-orange font-semibold">
                      Landmark: {contactDetails.srinagarAddress.landmark}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      Direct Srinagar Phone: +91 {contactDetails.srinagarPhone}
                    </div>
                    <a
                      href={contactDetails.srinagarMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-orange-100 text-xs font-bold text-brand-orange border border-orange-200 transition-colors shadow-xs mt-1"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </a>
                  </div>

                  {/* Tech Hub Aganampudi */}
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                        Internet & CCTV Hub: Aganampudi
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white">
                        ISP & CCTV
                      </span>
                    </div>
                    <address className="not-italic leading-relaxed text-xs sm:text-sm text-gray-800">
                      <strong>{contactDetails.primaryAddress.line1}</strong>,<br />
                      {contactDetails.primaryAddress.area},<br />
                      {contactDetails.primaryAddress.cityStateZip}
                    </address>
                    <div className="text-xs text-blue-700 font-semibold">
                      Landmark: {contactDetails.primaryAddress.landmark}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      ISP & CCTV Direct Line: +91 {contactDetails.secondaryPhone}
                    </div>
                    <a
                      href={contactDetails.aganampudiMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-blue-100 text-xs font-bold text-blue-700 border border-blue-200 transition-colors shadow-xs mt-1"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours Notice */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display text-brand-dark">
                    Business Hours & Availability
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {contactDetails.hoursNotice}
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft space-y-3">
                <h3 className="text-sm font-bold font-display text-brand-dark">
                  Official Social Profiles
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={contactDetails.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 hover:bg-orange-50 text-xs font-semibold text-gray-700 border border-gray-100 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-brand-orange" />
                    <span>Instagram Profile</span>
                  </a>

                  <a
                    href={contactDetails.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 hover:bg-orange-50 text-xs font-semibold text-gray-700 border border-gray-100 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-brand-orange" />
                    <span>Facebook Profile</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

          {/* Dedicated Two Branches Location Map / Showcase */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <BranchShowcase
              title="Visit Either of Our Visakhapatnam Locations"
              subtitle="The Apple IN operates two convenient branches with dedicated management, verified clean rooms, and 24x7 guest assistance."
            />
          </div>

        </div>
      </section>
    </div>
  );
};
