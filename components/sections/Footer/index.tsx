'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { FooterData } from '../../types';

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  const {
    logo,
    logo_text,
    follow_us_title,
    socials,
    addresses,
    quick_links_title,
    quick_links,
    contact,
    copyright,
    bottom_tagline,
  } = data;

  const renderSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'facebook':
        return (
          <span className="text-sm font-bold font-sans lowercase leading-none">
            f
          </span>
        );
      case 'twitter':
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case 'linkedin':
        return (
          <span className="text-xs font-bold font-sans lowercase tracking-tight leading-none">
            in
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <footer id="contact" className="relative w-full bg-[#10171F] text-white pt-8 sm:pt-10 lg:pt-12 pb-7 sm:pb-8 overflow-hidden border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* MOBILE & TABLET VIEW (< 1024px) - CLEAN BALANCED LAYOUT */}
        {/* ======================================================== */}
        <div className="lg:hidden flex flex-col gap-6">
          
          {/* 1. Logo & Social Links */}
          <div className="border-b border-white/10 pb-5">
            <Link href="/" className="inline-block relative h-11 w-48 sm:h-13 sm:w-56 focus:outline-none">
              <Image
                src={logo || '/logo/logo-w.webp'}
                alt={logo_text || 'WORKNEX'}
                fill
                sizes="(max-width: 640px) 200px, 240px"
                priority
                className="object-contain object-left origin-left"
              />
            </Link>

            <div className="mt-4">
              <p className="text-xs font-semibold text-white/90 mb-2 tracking-wide">
                {follow_us_title || 'Follow Us'}
              </p>
              <div className="flex items-center gap-2 sm:gap-2.5">
                {socials?.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-[#00C2CB] hover:bg-[#00C2CB]/10 text-white/80 hover:text-[#00C2CB] flex items-center justify-center transition-all duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Office Addresses: EXACTLY 1 ROW (grid-cols-2) WITH DIVIDER */}
          <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-6 items-start">
            {addresses?.map((address, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2.5 ${idx === 1 ? 'border-l border-white/10 pl-3.5 sm:pl-4' : ''}`}
              >
                {/* Cyan Map Pin Icon */}
                <svg
                  className="w-4 h-4 text-[#00C2CB] shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>

                {/* Location Details */}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {address.state}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-300 font-medium mt-0.5 leading-tight">
                    {address.company}
                  </p>
                  <div className="mt-1 space-y-0.5">
                    {address.lines?.map((line, lIdx) => (
                      <p key={lIdx} className="text-[10.5px] sm:text-[11.5px] text-gray-400 leading-snug">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Quick Links in Clean 2-Column Grid */}
          <div className="border-b border-white/10 pb-6">
            <h4 className="text-xs sm:text-sm font-bold text-white mb-2.5 tracking-wide">
              {quick_links_title || 'Quick Links'}
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quick_links?.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-[#00C2CB] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Work Inquiries Section */}
          <div className="border-b border-white/10 pb-6 flex flex-col justify-start">
            <h4 className="text-xs sm:text-sm font-bold text-white mb-2 tracking-wide">
              {contact?.title || 'Work Inquiries'}
            </h4>

            {/* Cyan Email Link with Mail Icon */}
            {contact?.email && (
              <div className="mb-2">
                <a
                  href={contact.email_href || `mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-[#00C2CB] hover:text-[#2DD4BF] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-[#00C2CB] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>{contact.email}</span>
                </a>
              </div>
            )}

            {/* Note Lines */}
            {contact?.note_lines && (
              <div className="space-y-0.5">
                {contact.note_lines.map((line, idx) => (
                  <p key={idx} className="text-xs text-gray-400 leading-snug">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* 5. Mobile Bottom Copyright & Tagline */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left text-xs text-gray-400 pt-1">
            <p>{copyright}</p>
            {bottom_tagline && (
              <div className="flex items-center gap-2 text-[#00C2CB] font-medium justify-center sm:justify-end">
                <span className="w-5 h-[2px] bg-[#00C2CB] inline-block shrink-0" />
                <span>{bottom_tagline}</span>
              </div>
            )}
          </div>

        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW (>= 1024px) - EXACT UNTOUCHED 4-COL LAYOUT */}
        {/* ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 items-start">
          
          {/* COLUMN 1: Logo & Follow Us (Span 4 cols) */}
          <div className="lg:col-span-4 lg:pr-8 xl:pr-10 lg:border-r lg:border-white/10 flex flex-col justify-between">
            {/* White Logo */}
            <div>
              <Link href="/" className="inline-block relative h-14 w-60 sm:h-16 sm:w-72 md:h-[76px] md:w-[320px] max-w-full focus:outline-none">
                <Image
                  src={logo || '/logo/logo-w.webp'}
                  alt={logo_text || 'WORKNEX'}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                  priority
                  className="object-contain object-left"
                />
              </Link>
            </div>

            {/* Follow Us & Social Icons */}
            <div className="mt-5 sm:mt-6">
              <p className="text-xs sm:text-sm font-semibold text-white/90 mb-2.5 tracking-wide">
                {follow_us_title || 'Follow Us'}
              </p>
              <div className="flex items-center gap-2.5">
                {socials?.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full border border-white/20 hover:border-[#00C2CB] hover:bg-[#00C2CB]/10 text-white/80 hover:text-[#00C2CB] flex items-center justify-center transition-all duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Office Addresses (Span 3.5 cols) */}
          <div className="lg:col-span-3 lg:px-8 xl:px-10 lg:border-r lg:border-white/10 space-y-5">
            {addresses?.map((address, idx) => (
              <div key={idx} className="flex items-start gap-3">
                {/* Cyan Map Pin Icon */}
                <svg
                  className="w-5 h-5 text-[#00C2CB] shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>

                {/* Location Details */}
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {address.state}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium mt-0.5">
                    {address.company}
                  </p>
                  <div className="mt-0.5 space-y-0.5">
                    {address.lines?.map((line, lIdx) => (
                      <p key={lIdx} className="text-xs sm:text-[13px] text-gray-400 leading-snug">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* COLUMN 3: Quick Links (Span 2 cols) */}
          <div className="lg:col-span-2 lg:px-6 xl:px-8 lg:border-r lg:border-white/10">
            <h4 className="text-sm sm:text-base font-bold text-white mb-3 tracking-wide">
              {quick_links_title || 'Quick Links'}
            </h4>
            <ul className="space-y-1.5">
              {quick_links?.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-[13px] text-gray-400 hover:text-white hover:text-[#00C2CB] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Work Inquiries (Span 3 cols) */}
          <div className="lg:col-span-3 lg:pl-8 xl:pl-10 flex flex-col justify-start">
            <h4 className="text-sm sm:text-base font-bold text-white mb-3 tracking-wide">
              {contact?.title || 'Work Inquiries'}
            </h4>

            {/* Cyan Email Link with Mail Icon */}
            {contact?.email && (
              <div>
                <a
                  href={contact.email_href || `mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 text-[#00C2CB] hover:text-[#2DD4BF] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-[#00C2CB] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="break-all">{contact.email}</span>
                </a>
              </div>
            )}

            {/* Note Lines */}
            {contact?.note_lines && (
              <div className="mt-3.5 space-y-0.5">
                {contact.note_lines.map((line, idx) => (
                  <p key={idx} className="text-xs sm:text-[13px] text-gray-400 leading-snug">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Desktop Bottom Horizontal Bar */}
        <div className="hidden lg:flex border-t border-white/10 mt-8 sm:mt-10 pt-5 sm:pt-6 items-center justify-between gap-3 text-xs sm:text-[13px]">
          {/* Copyright text */}
          <p className="text-gray-400">
            {copyright}
          </p>

          {/* Cyan Connecting Line & Tagline */}
          {bottom_tagline && (
            <div className="flex items-center gap-2.5 text-[#00C2CB] font-medium">
              <span className="w-6 h-[2px] bg-[#00C2CB] inline-block"></span>
              <span>{bottom_tagline}</span>
            </div>
          )}
        </div>

      </div>
    </footer>
  );
}
