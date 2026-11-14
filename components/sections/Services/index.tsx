'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import type { ServicesSectionData } from '../../types';

interface ServicesProps {
  data: ServicesSectionData;
  showCta?: boolean;
}

const serviceItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i < 4 ? i * 0.06 : 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Services({ data, showCta = true }: ServicesProps) {
  const {
    eyebrow,
    title_line1,
    title_line2,
    title_black,
    title_teal,
    description,
    cta_text,
    cta_link,
    image,
    image_alt,
    items = [],
  } = data;

  const line1 = title_line1 || title_black || 'Get the Most';
  const line2 = title_line2 || title_teal || 'Valuable HR Services';

  return (
    <section
      id="services"
      className="relative w-full pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 bg-white font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Main Grid: Left Column is Sticky, Right Column Scrolls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start relative gap-10 lg:gap-0">
          
          {/* ================= LEFT COLUMN: STICKY ON DESKTOP ================= */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 lg:self-start flex flex-col justify-between lg:pr-8 xl:pr-12">
            
            {/* Top Image: Rounded photo */}
            <div className="relative w-full aspect-[16/9.5] max-h-[300px] xl:max-h-[330px] rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src={image || '/services/consultation.webp'}
                alt={image_alt || 'HR recruitment consultation meeting'}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                priority
              />
            </div>

            {/* Bottom Content: Eyebrow + Headline + Description */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-end">
              
              {/* Sub-column 1: Eyebrow + 2-line Headline */}
              <div className="sm:col-span-7">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-8 sm:w-9 h-[2px] bg-[#0C4E55] shrink-0" />
                  <span className="text-xs sm:text-[13px] font-semibold tracking-widest text-[#475569] uppercase">
                    {eyebrow || 'OUR SERVICES'}
                  </span>
                </div>

                {/* 2-Line Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold tracking-tight leading-[1.15]">
                  <span className="block text-[#161D26]">{line1}</span>
                  <span className="block text-[#0C4E55]">{line2}</span>
                </h2>
              </div>

              {/* Sub-column 2: Paragraph + Optional Underlined CTA Link */}
              <div className="sm:col-span-5 flex flex-col justify-between sm:pl-2">
                <p className="text-xs sm:text-[13px] lg:text-[13.5px] text-[#556972] leading-relaxed mb-4 font-normal">
                  {description}
                </p>

                {showCta && (
                  <div>
                    <Link
                      href={cta_link || '/services'}
                      className="inline-flex items-center gap-2 group text-xs sm:text-[13px] font-bold text-[#0C4E55] uppercase tracking-wider"
                    >
                      <span className="border-b-2 border-[#0C4E55] pb-0.5 group-hover:border-[#07353A] group-hover:text-[#07353A] transition-colors">
                        {cta_text || 'VIEW ALL SERVICES'}
                      </span>
                      <svg
                        className="w-4 h-4 text-[#0C4E55] group-hover:text-[#07353A] group-hover:translate-x-1.5 transition-all duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN: SCROLLING LIST OF 8 SERVICES ================= */}
          <div className="lg:col-span-5 max-lg:mt-4 max-lg:pt-6 max-lg:border-t max-lg:border-gray-200 lg:border-l lg:border-gray-200 flex flex-col lg:pl-8 xl:pl-12 divide-y divide-gray-100">
            {items?.map((item, idx) => (
              <motion.div
                key={item.id}
                custom={idx}
                variants={serviceItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="group py-5 sm:py-6 px-3 sm:px-4 rounded-xl hover:bg-[#F4F9FA] transition-colors duration-200"
              >
                <Link
                  href={item.href || '/services'}
                  className="w-full flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4 sm:gap-6 flex-1 pr-3">
                    {/* Number: 01, 02, ... 08 */}
                    <span className="text-sm sm:text-base font-bold min-w-[28px] shrink-0 pt-0.5 text-gray-400 group-hover:text-[#0C4E55] transition-colors duration-200">
                      {item.number}
                    </span>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-lg sm:text-[20px] font-bold mb-1.5 leading-snug text-[#161D26] group-hover:text-[#0C4E55] transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13.5px] text-[#556972] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Clean SVG Right Arrow */}
                  <div className="shrink-0 text-gray-400 group-hover:text-[#0C4E55] group-hover:translate-x-1.5 transition-all duration-200">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
