'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import type { HeaderData } from '../../types';

interface HeaderProps {
  data: HeaderData;
}

export default function Header({ data }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2 sm:py-2.5'
          : 'bg-white border-b border-gray-100 py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[52px] sm:min-h-[56px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group focus:outline-none shrink-0 py-0.5">
            <div className="relative h-11 w-48 sm:h-13 sm:w-56 md:h-14 md:w-60 transition-transform">
              <Image
                src={data.logo || '/logo/logo.webp'}
                alt={data.logo_text || 'WORKNEX'}
                fill
                priority
                sizes="(max-width: 640px) 192px, 240px"
                className="object-contain object-left scale-105 origin-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {data.links?.map((link, idx) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`text-[15px] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0C4E55] after:transition-all after:duration-200 ${
                    active
                      ? 'text-[#0C4E55] font-bold after:w-full'
                      : 'text-[#2C3E50] font-medium hover:text-[#0C4E55] after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Phone & CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            {data.phone && (
              <a
                href={data.phone_href || `tel:${data.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-sm font-semibold text-[#1A2E35] hover:text-[#0C4E55] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#EBF5F6] flex items-center justify-center text-[#0C4E55]">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{data.phone}</span>
              </a>
            )}

            {data.button_text && (
              <Link
                href={data.button_link || '#contact'}
                className="inline-flex items-center gap-2 bg-[#0C4E55] hover:bg-[#07353A] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>{data.button_text}</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {data.button_text && (
              <Link
                href={data.button_link || '#contact'}
                className="bg-[#0C4E55] text-white text-xs font-semibold px-4 py-2 rounded-full"
              >
                {data.button_text}
              </Link>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#0C4E55] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? data.close_aria_label || 'Close menu' : data.menu_aria_label || 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {data.links?.map((link, idx) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-base rounded-lg transition-colors ${
                      active
                        ? 'bg-teal-50 text-[#0C4E55] font-bold'
                        : 'text-gray-800 font-medium hover:text-[#0C4E55] hover:bg-teal-50/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              {data.phone && (
                <a
                  href={data.phone_href || `tel:${data.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#0C4E55]"
                >
                  <Phone className="w-4 h-4" />
                  <span>{data.phone}</span>
                </a>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

