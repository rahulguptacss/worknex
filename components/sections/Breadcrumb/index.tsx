'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbData, BreadcrumbItem } from '../../types';

interface BreadcrumbProps {
  data?: BreadcrumbData;
  currentPage?: string;
  items?: BreadcrumbItem[];
}

export default function Breadcrumb({ data, currentPage, items: customItems }: BreadcrumbProps) {
  const rootItem = data?.items?.[0] ?? { name: 'Home', href: '/' };
  const breadcrumbItems: BreadcrumbItem[] =
    customItems ??
    (currentPage
      ? [rootItem, { name: currentPage, href: '#' }]
      : data?.items?.length
      ? data.items
      : [rootItem, { name: 'Page', href: '#' }]);

  const pageTitle = currentPage || data?.title || 'Worknex';

  return (
    <section className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden flex items-center justify-center bg-[#072428]">
      {/* Background Banner Image with Gradient */}
      <div className="absolute inset-0">
        <Image
          src={data?.background_image || '/breadcrumb/banner.webp'}
          alt={data?.background_alt || 'Worknex corporate office'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic Brand Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072428]/95 via-[#0C4E55]/85 to-[#0A141A]/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-sm max-w-4xl px-2">
          {pageTitle}
        </h1>

        {/* Trail Capsule */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/15 text-xs sm:text-sm font-medium text-white/90 max-w-full overflow-hidden"
        >
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <React.Fragment key={item.name + index}>
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-teal-300/80 shrink-0" />
                )}
                {isLast ? (
                  <span className="text-[#65D6DF] font-semibold truncate max-w-[180px] sm:max-w-[300px] md:max-w-none">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

