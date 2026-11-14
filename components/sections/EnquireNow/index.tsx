'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Users, Settings, Clock, ArrowRight, CheckCircle2, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EnquireNowSectionData } from '../../types';

interface EnquireNowProps {
  data?: EnquireNowSectionData;
}

export default function EnquireNow({ data }: EnquireNowProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interestedIn: '',
    message: '',
  });

  const {
    eyebrow = 'ENQUIRE NOW',
    heading_black = 'Tell us your',
    heading_teal = 'requirement',
    description = 'Fill out the form and our team will get back to you shortly with the right solution for your hiring needs.',
    highlights = [
      { icon: 'users', title_line1: 'Expert', title_line2: 'Support' },
      { icon: 'settings', title_line1: 'Tailored', title_line2: 'Solutions' },
      { icon: 'clock', title_line1: 'Quick', title_line2: 'Response' },
    ],
    form = {
      eyebrow: 'GET IN TOUCH',
      heading_black: 'Enquiry',
      heading_teal: 'Form',
      button_text: 'Submit Enquiry',
      options: [
        'Select an Option',
        'Talent Acquisition',
        'HR Consulting',
        'Workforce Planning',
        'Staffing Solutions',
        'Executive Search & Leadership',
        'General Inquiry',
      ],
    },
  } = data || {};

  const selectableOptions = (form.options || []).filter((opt) => opt !== 'Select an Option');

  // Close dropdown on click outside
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
          interestedIn: '',
          message: '',
        });
      }, 4500);
    }, 700);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'users':
        return <Users className="w-6 h-6 stroke-[2]" />;
      case 'settings':
      case 'cog':
        return <Settings className="w-6 h-6 stroke-[2]" />;
      case 'clock':
        return <Clock className="w-6 h-6 stroke-[2]" />;
      default:
        return <Users className="w-6 h-6 stroke-[2]" />;
    }
  };

  return (
    <section className="relative w-full bg-white font-sans text-[#0F1E25] py-16 sm:py-20 lg:py-24 overflow-hidden selection:bg-[#0C4E55] selection:text-white">
      {/* Background Layered Decorative Waves & Soft Auras (Full-Bleed & Seamless) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* Top-Right Soft Ambient Aura */}
        <div className="absolute -top-32 -right-32 w-[520px] sm:w-[680px] lg:w-[840px] h-[520px] sm:h-[680px] lg:h-[840px] rounded-full bg-gradient-to-br from-[#A6E1E6]/40 via-[#D5EFF1]/50 to-transparent blur-[90px]" />

        {/* Bottom-Left Soft Ambient Aura */}
        <div className="absolute -bottom-32 -left-32 w-[520px] sm:w-[680px] lg:w-[840px] h-[520px] sm:h-[680px] lg:h-[840px] rounded-full bg-gradient-to-tr from-[#A6E1E6]/40 via-[#D5EFF1]/50 to-transparent blur-[90px]" />

        {/* Top-Right Full-Bleed Organic Flow Waves */}
        <svg
          viewBox="0 0 1000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute top-0 right-0 w-full sm:w-3/4 lg:w-2/3 h-2/3 sm:h-3/4 opacity-75"
        >
          <path
            d="M1000 0 C700 80 420 280 320 540 C280 640 320 740 400 800 L1000 800 Z"
            fill="#EAF6F7"
            fillOpacity="0.8"
          />
          <path
            d="M1000 0 C780 110 540 300 460 520 C400 630 450 730 540 800 L1000 800 Z"
            fill="#D5EFF1"
            fillOpacity="0.75"
          />
          <path
            d="M1000 0 C840 140 640 320 580 500 C540 610 600 710 680 800 L1000 800 Z"
            fill="#BFECF0"
            fillOpacity="0.65"
          />
          <path
            d="M1000 0 C890 170 730 350 680 490 C650 580 700 690 790 800 L1000 800 Z"
            fill="#A6E1E6"
            fillOpacity="0.45"
          />
        </svg>

        {/* Bottom-Left Full-Bleed Organic Flow Waves */}
        <svg
          viewBox="0 0 1000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full sm:w-3/4 lg:w-2/3 h-2/3 sm:h-3/4 opacity-75"
        >
          <path
            d="M0 800 C300 720 580 520 680 260 C720 160 680 60 600 0 L0 0 Z"
            fill="#EAF6F7"
            fillOpacity="0.8"
          />
          <path
            d="M0 800 C220 690 460 500 540 280 C600 170 550 70 460 0 L0 0 Z"
            fill="#D5EFF1"
            fillOpacity="0.75"
          />
          <path
            d="M0 800 C160 660 360 480 420 300 C460 190 400 90 320 0 L0 0 Z"
            fill="#BFECF0"
            fillOpacity="0.65"
          />
          <path
            d="M0 800 C110 630 270 450 320 310 C350 220 300 110 210 0 L0 0 Z"
            fill="#A6E1E6"
            fillOpacity="0.45"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Headings, Paragraph & 3 Highlight Pillars   */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow: — ENQUIRE NOW */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 sm:w-9 h-[2px] bg-[#0C4E55] shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0C4E55] uppercase">
                {eyebrow}
              </span>
            </div>

            {/* Prominent Headline: Tell us your requirement */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.12] mb-5">
              <span className="block text-[#161D26]">{heading_black}</span>
              <span className="block text-[#0C4E55]">{heading_teal}</span>
            </h1>

            {/* Description Subtitle */}
            <p className="text-sm sm:text-base text-[#556871] leading-relaxed max-w-md mb-10 sm:mb-12 font-normal">
              {description}
            </p>

            {/* 3 Highlight Circles with Hairline Dividers (1:1 screenshot match) */}
            <div className="flex items-center justify-start max-w-lg gap-2 sm:gap-6 pt-2">
              {highlights?.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <div className="w-[1px] h-12 bg-gray-200/90 shrink-0 self-center" />
                  )}
                  <div className="flex-1 flex flex-col items-center text-center px-1">
                    {/* Circle Icon Badge */}
                    <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#E5F3F4] text-[#0C4E55] flex items-center justify-center mb-3 shadow-2xs">
                      {renderIcon(item.icon)}
                    </div>
                    {/* 2-Line Bold Label */}
                    <h4 className="text-xs sm:text-sm font-bold text-[#161D26] leading-tight">
                      <span className="block">{item.title_line1}</span>
                      <span className="block">{item.title_line2}</span>
                    </h4>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: White Floating Enquiry Form Card           */}
          {/* ======================================================== */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/60 p-6 sm:p-8 lg:p-10 relative">
              
              {/* Eyebrow: — GET IN TOUCH */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-7 h-[2px] bg-[#0C4E55] shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#0C4E55] uppercase">
                  {form.eyebrow || 'GET IN TOUCH'}
                </span>
              </div>

              {/* Form Title: Enquiry Form */}
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
                <span className="text-[#161D26]">{form.heading_black || 'Enquiry'} </span>
                <span className="text-[#0C4E55]">{form.heading_teal || 'Form'}</span>
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F0FAF9] border border-[#0C4E55]/30 rounded-2xl p-8 text-center my-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#0C4E55] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-[#161D26] mb-1.5">Enquiry Received!</h3>
                  <p className="text-xs sm:text-sm text-[#556972] leading-relaxed">
                    Thank you for reaching out. Our specialist team is reviewing your requirements and will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* 1. Name * (Full width) */}
                  <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                      Name <span className="text-[#0C4E55]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full h-11 sm:h-11.5 px-3.5 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all shadow-2xs"
                    />
                  </div>

                  {/* 2. Email * & Phone * (2 columns side by side) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                        Email <span className="text-[#0C4E55]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full h-11 sm:h-11.5 px-3.5 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                        Phone <span className="text-[#0C4E55]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your Phone"
                        className="w-full h-11 sm:h-11.5 px-3.5 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* 3. Company & Interested In (2 columns side by side matching screenshot) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Name"
                        className="w-full h-11 sm:h-11.5 px-3.5 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all shadow-2xs"
                      />
                    </div>

                    {/* Interested In Custom Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                      <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                        Interested In
                      </label>
                      
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
                        className={`w-full h-11 sm:h-11.5 px-3.5 bg-white border rounded-[4px] text-sm text-left flex items-center justify-between cursor-pointer transition-all shadow-2xs ${
                          isDropdownOpen
                            ? 'border-[#0C4E55] ring-1 ring-[#0C4E55]'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className={formData.interestedIn ? 'text-[#161D26] font-medium truncate' : 'text-gray-400 truncate'}>
                          {formData.interestedIn || 'Select an Option'}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180 text-[#0C4E55]' : 'text-gray-400'
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.99 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.99 }}
                            transition={{ duration: 0.16, ease: 'easeOut' }}
                            role="listbox"
                            className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200/90 rounded-xl shadow-xl z-50 py-1.5 max-h-56 overflow-y-auto"
                          >
                            {selectableOptions.map((opt, idx) => {
                              const isSelected = formData.interestedIn === opt;
                              return (
                                <div
                                  key={idx}
                                  role="option"
                                  aria-selected={isSelected}
                                  onClick={() => handleSelectOption(opt)}
                                  className={`px-3.5 py-2.5 text-xs sm:text-sm flex items-center justify-between cursor-pointer transition-colors ${
                                    isSelected
                                      ? 'bg-[#F0FAF9] text-[#0C4E55] font-semibold'
                                      : 'text-[#3A4D54] hover:bg-[#F8FBFC] hover:text-[#0C4E55]'
                                  }`}
                                >
                                  <span className="truncate">{opt}</span>
                                  {isSelected && <Check className="w-4 h-4 text-[#0C4E55] shrink-0" />}
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* 4. Message * (Full width) */}
                  <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-[#161D26] mb-1.5">
                      Message <span className="text-[#0C4E55]">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full p-3.5 bg-white border border-gray-200 rounded-[4px] text-sm text-[#161D26] placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:border-[#0C4E55] focus:ring-1 focus:ring-[#0C4E55] transition-all resize-y shadow-2xs"
                    />
                  </div>

                  {/* 5. Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#0C4E55] hover:bg-[#07353A] active:scale-[0.99] text-white text-xs sm:text-[13px] font-semibold tracking-wider rounded-[4px] transition-all group shadow-sm cursor-pointer disabled:opacity-70"
                    >
                      <span>{isSubmitting ? 'Sending...' : form.button_text || 'Submit Enquiry'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

