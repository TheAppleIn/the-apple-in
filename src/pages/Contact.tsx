import React from 'react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { contactDetails } from '../data/content';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
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
                      <div className="text-xs text-gray-500 font-medium">Lodge / General Contact</div>
                      <div className="text-base font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                        +91 {contactDetails.primaryPhone}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-orange bg-white px-3 py-1 rounded-full border border-gray-200">
                      Call
                    </span>
                  </a>

                  <a
                    href={`tel:${contactDetails.secondaryPhoneRaw}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-orange-50/50 border border-gray-100 transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Additional Contact Line</div>
                      <div className="text-base font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                        +91 {contactDetails.secondaryPhone}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-orange bg-white px-3 py-1 rounded-full border border-gray-200">
                      Call
                    </span>
                  </a>

                  {contactDetails.managerPhone && (
                    <a
                      href={`tel:${contactDetails.managerPhoneRaw}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-orange-50/50 border border-gray-100 transition-colors group"
                    >
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Management ({contactDetails.managerName})</div>
                        <div className="text-base font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                          +91 {contactDetails.managerPhone}
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-brand-orange bg-white px-3 py-1 rounded-full border border-gray-200">
                        Call
                      </span>
                    </a>
                  )}
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
                      Office & Location Details
                    </h3>
                    <p className="text-xs text-gray-500">Visakhapatnam, Andhra Pradesh</p>
                  </div>
                </div>

                <div className="space-y-3 pt-1 text-sm text-gray-700">
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                      Primary Location
                    </span>
                    <address className="not-italic leading-relaxed text-xs sm:text-sm">
                      <strong>{contactDetails.primaryAddress.line1}</strong>,<br />
                      {contactDetails.primaryAddress.area},<br />
                      {contactDetails.primaryAddress.cityStateZip}<br />
                      <span className="text-gray-500 text-xs mt-1 block">
                        Landmark: {contactDetails.primaryAddress.landmark}
                      </span>
                    </address>
                  </div>

                  {contactDetails.cardAddress && (
                    <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                        Additional Branch Reference
                      </span>
                      <address className="not-italic leading-relaxed text-xs">
                        {contactDetails.cardAddress.line1},<br />
                        {contactDetails.cardAddress.area},<br />
                        {contactDetails.cardAddress.cityStateZip}
                      </address>
                    </div>
                  )}
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
        </div>
      </section>
    </div>
  );
};
