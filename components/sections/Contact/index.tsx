'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ContactSectionData } from '../../types';

interface ContactProps {
  data?: ContactSectionData;
}

export default function Contact({ data }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    interestedIn: '',
    message: '',
  });

  const {
    top_eyebrow = 'CONTACT US',
    top_heading_black1 = 'Would you like more',
    top_heading_black2 = 'information?',
    top_heading_teal1 = 'We are happy to',
    top_heading_teal2 = 'help you!',
    office_info = {
      title: 'Our Office',
      address_lines: [
        '123 Education Lane,',
        'New York, NY 10001',
      ],
      phone_label: 'Call Us',
      phone: '+100000000000',
      phone_href: 'tel:+100000000000',
      email_label: 'Email Us',
      email: 'info@xyz.com',
      email_href: 'mailto:info@xyz.com',
      working_hours_label: 'Working Hours',
      working_hours_lines: [
        'Mon - Sat: 9:00 AM - 6:00 PM',
        'Sunday: Closed',
      ],
    },
    map_embed_url = 'https://maps.google.com/maps?q=123%20Education%20Lane%2C%20New%20York%2C%20NY%2010001&t=&z=13&ie=UTF8&iwloc=&output=embed',
    form_eyebrow = 'GET IN TOUCH',
    form_heading_black1 = "Let's",
    form_heading_black2 = 'connect for',
    form_heading_teal1 = 'better',
    form_heading_teal2 = 'opportunities',
    form_description = 'Fill out the form and our team will get back to you shortly.',
    form_button_text = 'Submit Now',
    form_options = [
      'Select an Option',
      'Talent Acquisition',
      'HR Consulting',
      'Workforce Planning',
      'Staffing Solutions',
      'Executive Search & Leadership',
      'General Inquiry',
    ],
  } = data || {};

  // Filter out the "Select an Option" placeholder from selectable menu items
  const selectableOptions = form_options.filter((opt) => opt !== 'Select an Option');

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectOption = (opt: string) => {
    setFormData((prev) => ({ ...prev, interestedIn: opt }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          interestedIn: '',
          message: '',
        });
      }, 4500);
    }, 700);
  };

  return (
    <div className="w-full bg-white font-sans text-[#0F1E25] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 selection:bg-[#0C4E55] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* 1. TOP HEADER SECTION (EXACT 1:1 MATCH TO SCREENSHOT)    */}
        {/* ======================================================== */}
        <section className="mb-10 sm:mb-12">
          {/* Eyebrow: — CONTACT US */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="w-8 sm:w-9 h-[2px] bg-[#0C4E55] shrink-0" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0C4E55] uppercase">
              {top_eyebrow}
            </span>
          </div>

          {/* Large Multi-line Headline */}
          <h1 className="text-[26px] xs:text-[30px] sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.18] sm:leading-[1.15]">
            <span className="block text-[#161D26]">{top_heading_black1}</span>
            <span className="sm:block">
              <span className="block sm:inline text-[#161D26]">{top_heading_black2}{' '}</span>
              <span className="block sm:inline text-[#0C4E55] mt-1 sm:mt-0">{top_heading_teal1}</span>
            </span>
            <span className="block text-[#0C4E55]">{top_heading_teal2}</span>
          </h1>
        </section>

        {/* ======================================================== */}
        {/* 2. OFFICE INFO CARD + GOOGLE MAP (COMBINED CONTAINER)    */}
        {/* ======================================================== */}
        <section className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100/90 shadow-sm bg-[#00383D] grid grid-cols-1 lg:grid-cols-12 mb-16 sm:mb-20">
          
          {/* LEFT: Deep Petrol Teal Office Info Panel (col-span-4) */}
          <div className="lg:col-span-4 bg-[#00383D] text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
            <div>
              {/* White Worknex Logo at top */}
              <div className="mb-8">
                <div className="relative h-11 w-48 sm:h-12 sm:w-52">
                  <Image
                    src={office_info.logo || '/logo/logo-w.webp'}
                    alt="Worknex HR Consultancy & Recruitment"
                    fill
                    sizes="220px"
                    priority
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Our Office */}
              <div className="mb-6">
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 tracking-tight">
                  {office_info.title}
                </h3>
                <div className="text-xs sm:text-[13px] text-gray-200/90 leading-relaxed font-normal">
                  {office_info.address_lines?.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Call Us */}
              <div className="mb-6">
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 tracking-tight">
                  {office_info.phone_label}
                </h3>
                <a
                  href={office_info.phone_href}
                  className="text-xs sm:text-[13px] text-gray-200/90 hover:text-white transition-colors block font-normal"
                >
                  {office_info.phone}
                </a>
              </div>

              {/* Email Us */}
              <div className="mb-6">
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 tracking-tight">
                  {office_info.email_label}
                </h3>
                <a
                  href={office_info.email_href}
                  className="text-xs sm:text-[13px] text-gray-200/90 hover:text-white transition-colors block font-normal"
                >
                  {office_info.email}
                </a>
              </div>

              {/* Subtle Teal Accent Divider */}
              <div className="w-8 h-[2px] bg-teal-400/50 my-6" />

              {/* Working Hours */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 tracking-tight">
                  {office_info.working_hours_label}
                </h3>
                <div className="text-xs sm:text-[13px] text-gray-200/90 leading-relaxed font-normal">
                  {office_info.working_hours_lines?.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Interactive Google Map (col-span-8) */}
          <div className="lg:col-span-8 relative w-full h-[360px] sm:h-[440px] lg:h-auto min-h-[380px] bg-gray-100">
            <iframe
              src={map_embed_url}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Worknex Noida Office Location Map"
              className="w-full h-full border-0"
            />
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. GET IN TOUCH & INTERACTIVE CONTACT FORM               */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Headline & Intro */}
          <div className="lg:col-span-5">
            {/* Eyebrow: — GET IN TOUCH */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 sm:w-9 h-[2px] bg-[#0C4E55] shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0C4E55] uppercase">
                {form_eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.18] mb-4 sm:mb-5">
              <span className="block text-[#161D26]">
                {[form_heading_black1, form_heading_black2].filter(Boolean).join(' ')}
              </span>
              <span className="block text-[#0C4E55] mt-1 sm:mt-1.5">
                {[form_heading_teal1, form_heading_teal2].filter(Boolean).join(' ')}
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#556972] leading-relaxed max-w-sm font-normal">
              {form_description}
            </p>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F0FAF9] border border-[#0C4E55]/30 rounded-2xl p-8 sm:p-10 text-center shadow-xs"
              >
                <CheckCircle2 className="w-12 h-12 text-[#0C4E55] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#161D26] mb-2">Thank You!</h3>
                <p className="text-sm text-[#556972] max-w-md mx-auto leading-relaxed">
                  Your message has been successfully received. Our specialist advisory team will reach out to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* 1. Name * (Full width) */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full h-11 sm:h-12 px-4 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all shadow-2xs"
                  />
                </div>

                {/* 2. Email * & Phone * (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email"
                      className="w-full h-11 sm:h-12 px-4 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your Phone"
                      className="w-full h-11 sm:h-12 px-4 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* 3. Company & Website (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full h-11 sm:h-12 px-4 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                      Website
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="Your Website"
                      className="w-full h-11 sm:h-12 px-4 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* 4. Interested In (Custom Sleek Dropdown) */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                    Interested In
                  </label>
                  
                  {/* Dropdown Trigger Box */}
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') setIsDropdownOpen(false);
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsDropdownOpen(!isDropdownOpen);
                      }
                    }}
                    aria-haspopup="listbox"
                    aria-expanded={isDropdownOpen}
                    className={`w-full h-11 sm:h-12 px-4 bg-white border rounded-[4px] text-sm text-left flex items-center justify-between cursor-pointer transition-all shadow-2xs ${
                      isDropdownOpen
                        ? 'border-[#0C4E55] ring-1 ring-[#0C4E55]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className={formData.interestedIn ? 'text-[#161D26] font-medium' : 'text-gray-400'}>
                      {formData.interestedIn || 'Select an Option'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-[#0C4E55]' : 'text-gray-400'
                      }`}
                    />
                  </button>

                  {/* Animated Dropdown Menu List */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.99 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        role="listbox"
                        className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200/90 rounded-xl shadow-xl z-50 py-1.5 max-h-64 overflow-y-auto"
                      >
                        {selectableOptions.map((opt, idx) => {
                          const isSelected = formData.interestedIn === opt;
                          return (
                            <div
                              key={idx}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => handleSelectOption(opt)}
                              className={`px-4 py-2.5 text-xs sm:text-sm flex items-center justify-between cursor-pointer transition-colors ${
                                isSelected
                                  ? 'bg-[#F0FAF9] text-[#0C4E55] font-semibold'
                                  : 'text-[#3A4D54] hover:bg-[#F8FBFC] hover:text-[#0C4E55]'
                              }`}
                            >
                              <span>{opt}</span>
                              {isSelected && <Check className="w-4 h-4 text-[#0C4E55]" />}
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 5. Message * (Full width) */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full p-4 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all resize-y shadow-2xs"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0C4E55] hover:bg-[#07353A] active:scale-[0.99] text-white text-xs sm:text-[13px] font-semibold tracking-wider rounded-[3px] transition-all group shadow-sm cursor-pointer disabled:opacity-70"
                  >
                    <span>{isSubmitting ? 'Sending...' : form_button_text}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
