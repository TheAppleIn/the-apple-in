import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight, Shield, Wifi, BedDouble } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { contactDetails } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-neutral-800">
      {/* Top Banner with Brand Identity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="lg" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Quality accommodation, dependable internet infrastructure, and professional CCTV surveillance solutions — built under one trusted brand in Visakhapatnam.
            </p>
            
            {/* Tagline from official card */}
            <div className="pt-2">
              <span className="inline-block text-xs font-medium text-brand-orange uppercase tracking-widest px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full">
                Think Totally Different
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href={contactDetails.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white hover:border-brand-orange hover:bg-brand-orange transition-all flex items-center justify-center group"
                aria-label="Follow The Apple IN on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={contactDetails.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white hover:border-brand-orange hover:bg-brand-orange transition-all flex items-center justify-center group"
                aria-label="Connect with The Apple IN on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services / Divisions */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white font-display">
              Our Divisions
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link
                  to="/about#hospitality"
                  className="inline-flex items-center gap-2 hover:text-brand-orange transition-colors group"
                >
                  <BedDouble className="w-3.5 h-3.5 text-brand-orange group-hover:translate-x-0.5 transition-transform" />
                  <span>Lodge & Dormitory</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/internet"
                  className="inline-flex items-center gap-2 hover:text-brand-orange transition-colors group"
                >
                  <Wifi className="w-3.5 h-3.5 text-brand-orange group-hover:translate-x-0.5 transition-transform" />
                  <span>Internet Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cctv"
                  className="inline-flex items-center gap-2 hover:text-brand-orange transition-colors group"
                >
                  <Shield className="w-3.5 h-3.5 text-brand-orange group-hover:translate-x-0.5 transition-transform" />
                  <span>CCTV Sales & Service</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 hover:text-brand-orange transition-colors group"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-orange transition-colors" />
                  <span>Project Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white font-display">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/internet" className="hover:text-white transition-colors">
                  Internet Services
                </Link>
              </li>
              <li>
                <Link to="/cctv" className="hover:text-white transition-colors">
                  CCTV Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Gallery & Experience
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white font-display">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              {/* Phone 1 */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${contactDetails.primaryPhoneRaw}`}
                    className="hover:text-white text-gray-200 block font-medium"
                  >
                    +91 {contactDetails.primaryPhone}
                  </a>
                  <span className="text-[11px] text-gray-500">General / Lodge</span>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${contactDetails.secondaryPhoneRaw}`}
                    className="hover:text-white text-gray-200 block font-medium"
                  >
                    +91 {contactDetails.secondaryPhone}
                  </a>
                  <span className="text-[11px] text-gray-500">Service Assistance</span>
                </div>
              </div>

              {/* Email 1 */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactDetails.primaryEmail}`}
                  className="hover:text-white break-all transition-colors text-xs text-gray-300"
                >
                  {contactDetails.primaryEmail}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <address className="not-italic text-xs text-gray-400 leading-relaxed">
                  {contactDetails.primaryAddress.line1}, {contactDetails.primaryAddress.area},<br />
                  {contactDetails.primaryAddress.cityStateZip}<br />
                  <span className="text-gray-500 text-[11px]">({contactDetails.primaryAddress.landmark})</span>
                </address>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} THE APPLE IN. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-gray-500">
            <span>Visakhapatnam, Andhra Pradesh</span>
            <span>•</span>
            <span>Lodge • Internet • CCTV</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
