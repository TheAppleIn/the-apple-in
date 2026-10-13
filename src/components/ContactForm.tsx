import React, { useState } from 'react';
import { MessageSquare, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { contactDetails } from '../data/content';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export const ContactForm: React.FC<{ defaultService?: string }> = ({ defaultService }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    service: defaultService || '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact number.';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Phone number should be at least 10 digits.';
    }

    if (!formData.service) {
      errs.service = 'Please select the service required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please describe your requirement or message.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Build clean WhatsApp message
    const emailLine = formData.email.trim() ? `• Email: ${formData.email.trim()}\n` : '';
    const text = encodeURIComponent(
      `Hello The Apple IN,\n\nI want to make an enquiry:\n• Name: ${formData.fullName.trim()}\n• Contact Phone: ${formData.phone.trim()}\n${emailLine}• Service Needed: ${formData.service}\n\n• Requirement / Message:\n${formData.message.trim()}\n\nPlease reply with availability and details. Thank you!`
    );

    // Determine target recipient based on service type
    const targetPhone = formData.service === 'Internet Service'
      ? contactDetails.secondaryPhoneRaw
      : contactDetails.primaryPhoneRaw;

    const whatsappUrl = `https://wa.me/91${targetPhone}?text=${text}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: defaultService || '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-premium border border-gray-100 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-2xl font-bold font-display text-brand-dark">
            Enquiry Sent via WhatsApp!
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your enquiry details have been prepared and opened on WhatsApp. If WhatsApp didn't open automatically, you can send it again below.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open WhatsApp Again</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Send New Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl p-6 sm:p-10 shadow-premium border border-gray-100 space-y-5"
    >
      <div className="border-b border-gray-100 pb-4 mb-2">
        <h3 className="text-xl font-bold font-display text-brand-dark">
          Send Your Requirement
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Fill in your details below and our service team will get back to you promptly.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
          Full Name <span className="text-brand-orange">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
          }}
          placeholder="e.g. Kasi Visweswara Rao"
          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
            errors.fullName
              ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
              : 'border-gray-200 focus:border-brand-orange focus:ring-brand-orange/20'
          }`}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
          </p>
        )}
      </div>

      {/* Grid: Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
            Phone Number <span className="text-brand-orange">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder="e.g. 90594 61033"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
                : 'border-gray-200 focus:border-brand-orange focus:ring-brand-orange/20'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
            Email Address <span className="text-brand-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="e.g. you@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
                : 'border-gray-200 focus:border-brand-orange focus:ring-brand-orange/20'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Service Dropdown */}
      <div>
        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
          Service Required <span className="text-brand-orange">*</span>
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => {
            setFormData({ ...formData, service: e.target.value });
            if (errors.service) setErrors({ ...errors, service: undefined });
          }}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 transition-all ${
            errors.service
              ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
              : 'border-gray-200 focus:border-brand-orange focus:ring-brand-orange/20'
          }`}
        >
          <option value="">Select a service...</option>
          <option value="Lodge / Accommodation">Lodge / Accommodation</option>
          <option value="Internet Service">Internet Service</option>
          <option value="CCTV Sales">CCTV Sales</option>
          <option value="CCTV Installation">CCTV Installation</option>
          <option value="CCTV Service">CCTV Service</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
          Your Message <span className="text-brand-orange">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder="Please describe your dates for stay, internet connection requirements, or CCTV installation needs..."
          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message
              ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
              : 'border-gray-200 focus:border-brand-orange focus:ring-brand-orange/20'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-white font-bold bg-green-600 hover:bg-green-700 shadow-md hover:shadow-green-600/20 transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Opening WhatsApp...</span>
          </>
        ) : (
          <>
            <MessageSquare className="w-4 h-4" />
            <span>Send Enquiry via WhatsApp</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-gray-500">
        Your enquiry details will open directly in WhatsApp for instant assistance.
      </p>
    </form>
  );
};
