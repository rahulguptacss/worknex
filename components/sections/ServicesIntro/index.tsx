'use client';

import React from 'react';
import Image from 'next/image';
import type { ServicesIntroData } from '../../types';

interface ServicesIntroProps {
  data?: ServicesIntroData;
}

export default function ServicesIntro({ data }: ServicesIntroProps) {
  const eyebrow = data?.eyebrow || 'OUR SOLUTIONS';
  const line1 = data?.title_line1 || 'HR Solutions';
  const line2 = data?.title_line2 || 'for a Stronger';
  const line3 = data?.title_teal || 'Workforce';
  const description =
    data?.description ||
    'Simple, effective solutions to help you attract, develop and retain the right talent.';
  const image = data?.image || '/services/solutions_hero.jpg';
  const imageAlt = data?.image_alt || 'HR solutions executive team collaboration';

  return (
    <section className="relative w-full pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: Headline & Value Proposition ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-9 sm:w-11 h-[2px] bg-[#0C4E55] shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0C4E55] uppercase">
                {eyebrow}
              </span>
            </div>

            {/* 3-Line Prominent Headline */}
            <h1 className="text-[34px] xs:text-[42px] sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[68px] font-extrabold tracking-tight leading-[1.12] text-[#161D26] mb-6 sm:mb-8">
              <span className="block">{line1}</span>
              <span className="block mt-1 sm:mt-1.5">{line2}</span>
              <span className="block mt-1 sm:mt-1.5 text-[#0C4E55]">{line3}</span>
            </h1>

            {/* Description Row with Horizontal Accent Dash */}
            <div className="flex items-start gap-3.5 sm:gap-4 max-w-lg">
              <span className="w-8 sm:w-10 h-[2px] bg-[#161D26]/70 mt-3 shrink-0" />
              <p className="text-sm sm:text-base lg:text-[16.5px] text-[#556972] leading-relaxed font-normal">
                {description}
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Hero Photo with Mint Backdrop ================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-xl">
              
              {/* Soft Pale Mint-Teal Decorative Backdrop Shape */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 sm:-top-7 sm:-right-7 w-3/4 h-3/4 bg-[#D4E8EA] rounded-2xl sm:rounded-3xl -z-10 pointer-events-none"
              />

              {/* Main Photo Card */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-center"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

