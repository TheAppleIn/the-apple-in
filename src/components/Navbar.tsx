import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight, Shield, Wifi, BedDouble } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { contactDetails } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Internet Services', path: '/internet' },
    { name: 'CCTV Services', path: '/cctv' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <BrandLogo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-orange bg-brand-orange-light font-semibold'
                        : 'text-gray-700 hover:text-brand-dark hover:bg-gray-100/80'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Items */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              {/* Click to Call */}
              <a
                href={`tel:${contactDetails.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-brand-orange px-3 py-1.5 rounded-full border border-gray-200 hover:border-brand-orange/40 transition-colors"
                title={`Call ${contactDetails.primaryPhone}`}
              >
                <div className="w-6 h-6 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{contactDetails.primaryPhone}</span>
              </a>

              {/* Primary Contact CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-xs xl:text-sm font-semibold rounded-full text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm hover:shadow transition-all duration-200 active:scale-95"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${contactDetails.primaryPhoneRaw}`}
                aria-label="Call The Apple IN"
                className="p-2 rounded-full bg-brand-orange-light text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-gray-700 hover:text-brand-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-gray-100">
            <BrandLogo size="sm" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Service Pillar Highlights in Mobile Drawer */}
          <div className="grid grid-cols-3 gap-2 py-4 my-2 border-b border-gray-100 text-center">
            <Link
              to="/about"
              className="flex flex-col items-center p-2 rounded-lg bg-orange-50/50 hover:bg-orange-50 text-xs text-gray-700"
            >
              <BedDouble className="w-4 h-4 text-brand-orange mb-1" />
              <span className="font-semibold text-[11px]">Lodge</span>
            </Link>
            <Link
              to="/internet"
              className="flex flex-col items-center p-2 rounded-lg bg-orange-50/50 hover:bg-orange-50 text-xs text-gray-700"
            >
              <Wifi className="w-4 h-4 text-brand-orange mb-1" />
              <span className="font-semibold text-[11px]">Internet</span>
            </Link>
            <Link
              to="/cctv"
              className="flex flex-col items-center p-2 rounded-lg bg-orange-50/50 hover:bg-orange-50 text-xs text-gray-700"
            >
              <Shield className="w-4 h-4 text-brand-orange mb-1" />
              <span className="font-semibold text-[11px]">CCTV</span>
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="py-2 space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-brand-orange-light text-brand-orange font-bold'
                      : 'text-gray-800 hover:bg-gray-50'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </NavLink>
            ))}
          </nav>

          {/* Quick Call Details */}
          <div className="mt-6 pt-5 border-t border-gray-100 space-y-2">
            <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 px-4">
              Direct Contact
            </p>
            <a
              href={`tel:${contactDetails.primaryPhoneRaw}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 font-medium"
            >
              <div className="w-7 h-7 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Gajuwaka Branch</div>
                <div>{contactDetails.primaryPhone}</div>
              </div>
            </a>
            <a
              href={`tel:${contactDetails.srinagarPhoneRaw}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 font-medium"
            >
              <div className="w-7 h-7 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Srinagar Branch (Hostel & Rooms)</div>
                <div>{contactDetails.srinagarPhone}</div>
              </div>
            </a>
          </div>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center py-3 px-6 rounded-xl text-white font-semibold bg-brand-orange hover:bg-brand-orange-hover shadow-sm transition-colors text-center"
          >
            Send An Enquiry
          </Link>
          <p className="text-[11px] text-center text-gray-500 mt-2">
            Visakhapatnam, Andhra Pradesh
          </p>
        </div>
      </div>
    </>
  );
};
