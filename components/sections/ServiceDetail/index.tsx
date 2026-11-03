'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Counter from '../../ui/Counter';
import type { ServiceDetailData } from '../../types';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceDetailProps {
  data: ServiceDetailData;
}

export default function ServiceDetail({ data }: ServiceDetailProps) {
  const heroRef = useRef<HTMLElement>(null);
  const overviewRef = useRef<HTMLElement>(null);

  const {
    hero_eyebrow = 'SOLUTION DETAILS',
    hero_title,
    hero_subtitle,
    hero_cta_text = 'Get in Touch',
    hero_cta_link = '/contact',
    hero_image = '/services/solutions_hero.jpg',
    hero_image_alt = 'Worknex solution presentation',

    overview_eyebrow = 'OVERVIEW',
    overview_title,
    overview_description,
    overview_image = '/services/service_interview.jpg',
    overview_image_alt = 'Executive interview and assessment',

    offer_eyebrow = 'WHAT WE OFFER',
    offer_image = '/services/service_review.jpg',
    offer_image_alt = 'Reviewing candidate qualifications and contract',
    offer_items = [],

    process_eyebrow = 'OUR PROCESS',
    process_title,
    process_description,
    process_steps = [],

    why_eyebrow = 'WHY CHOOSE US',
    why_title,
    why_description,
    why_image = '/testimonials/video1.webp',
    why_image_alt = 'Professionals collaborating together',
    stats = [],
  } = data;

  // Split hero title: Line 1 dark, Line 2 teal
  const [heroLine1, ...restHero] = hero_title.split('\n');
  const heroLine2 = restHero.join(' ');

  const overviewTitleLines = overview_title.split('\n');
  const processTitleLines = process_title.split('\n');
  const whyTitleLines = why_title.split('\n');

  // Pinned overscroll animation strictly between Section 1 (Hero) and Section 2 (Overview)
  useEffect(() => {
    const heroEl = heroRef.current;
    const overviewEl = overviewRef.current;
    if (!heroEl || !overviewEl) return;

    let mm: gsap.MatchMedia | null = null;

    const timer = setTimeout(() => {
      mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const headerOffset = 76;
        const availableHeight = window.innerHeight - headerOffset;
        const heroHeight = heroEl.offsetHeight;
        const overscroll = Math.max(0, heroHeight - availableHeight);
        const scrollDistance = overviewEl.offsetHeight + overscroll;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroEl,
            start: 'top 76px',
            end: () => `+=${scrollDistance}`,
            pin: true,
            pinSpacing: false,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Overscroll: if hero content is taller than viewport, scroll inner content first
        if (overscroll > 0) {
          const heroInner = heroEl.querySelector<HTMLElement>('.hero-content') || heroEl;
          tl.to(heroInner, {
            y: -overscroll,
            ease: 'none',
            duration: overscroll / scrollDistance,
          });
        }

        // 2. Scale down and subtle dimming as overview smoothly slides over hero
        tl.to(
          heroEl,
          {
            scale: 0.96,
            opacity: 0.65,
            transformOrigin: 'top center',
            ease: 'power1.out',
            duration: 0.8,
          },
          overscroll > 0 ? '>0.05' : 0
        );

        ScrollTrigger.refresh();
      });
    }, 120);

    return () => {
      clearTimeout(timer);
      if (mm) mm.revert();
    };
  }, [data]);

  return (
    <div className="relative w-full bg-white font-sans text-[#0F1E25] selection:bg-[#0C4E55] selection:text-white">
      
      {/* ======================================================== */}
      {/* SECTION 1: HERO / SOLUTION DETAILS (PINNED WITH OVERSCROLL)*/}
      {/* ======================================================== */}
      <section
        ref={heroRef}
        className="relative w-full pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-white z-10 overflow-hidden"
      >
        <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Eyebrow: — SOLUTION DETAILS */}
              <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
                <span className="w-8 sm:w-9 h-[2px] bg-[#0C4E55] shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0C4E55] uppercase">
                  {hero_eyebrow}
                </span>
              </div>

              {/* 2-Color Prominent Headline: Line 1 Black, Line 2 Teal */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.12] mb-4 sm:mb-5">
                <span className="block text-[#161D26]">{heroLine1}</span>
                {heroLine2 && (
                  <span className="block text-[#0C4E55] mt-1">{heroLine2}</span>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#556972] leading-relaxed max-w-md mb-6 sm:mb-7 font-normal">
                {hero_subtitle}
              </p>

              {/* CTA Button: Get in Touch → */}
              <div>
                <Link
                  href={hero_cta_link}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[3px] bg-[#0C4E55] text-white text-xs sm:text-[13px] font-semibold hover:bg-[#07353A] transition-colors shadow-xs group"
                >
                  <span>{hero_cta_text}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Photo with Rounded Corners & Shadow matching screenshot */}
            <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-xl">
                <div className="relative w-full aspect-[16/10.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                  <Image
                    src={hero_image}
                    alt={hero_image_alt}
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

      {/* ======================================================== */}
      {/* SECTION 2: OVERVIEW (SLIDES OVER HERO ON SCROLL)          */}
      {/* ======================================================== */}
      <section
        ref={overviewRef}
        className="relative w-full pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 bg-white z-20 rounded-t-[28px] sm:rounded-t-[36px] shadow-[0_-20px_45px_rgba(0,0,0,0.07)] border-t border-gray-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
                <span className="w-8 sm:w-9 h-[2px] bg-[#0C4E55] shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0C4E55] uppercase">
                  {overview_eyebrow}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-tight leading-[1.16] text-[#161D26] mb-4 sm:mb-5">
                {overviewTitleLines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <p className="text-sm sm:text-base text-[#556972] leading-relaxed max-w-lg font-normal">
                {overview_description}
              </p>
            </div>

            {/* Right Photo with Rounded Corners & Shadow */}
            <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-xl">
                <div className="relative w-full aspect-[16/10.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                  <Image
                    src={overview_image}
                    alt={overview_image_alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: WHAT WE OFFER (REGULAR NATURAL HEIGHT SECTION) */}
      {/* ======================================================== */}
      <section className="relative w-full py-12 sm:py-14 lg:py-18 bg-[#F8FBFC] border-y border-teal-50/80 overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Photo (Document / Resume Review) */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src={offer_image}
                  alt={offer_image_alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right List of Offerings */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <span className="w-8 sm:w-9 h-[2px] bg-[#0C4E55] shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0C4E55] uppercase">
                  {offer_eyebrow}
                </span>
              </div>

              {/* 3 Numbered Offer Items with Vertical Divider */}
              <div className="border-l border-gray-200/90 pl-5 sm:pl-7 divide-y divide-gray-200/70">
                {offer_items.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-4 sm:py-5 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-5 group"
                  >
                    <span className="text-sm sm:text-base font-semibold text-gray-400 group-hover:text-[#0C4E55] transition-colors min-w-[24px] shrink-0 pt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#161D26] group-hover:text-[#0C4E55] transition-colors mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13.5px] text-[#556972] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: OUR PROCESS (REGULAR NATURAL HEIGHT SECTION)   */}
      {/* ======================================================== */}
      <section className="relative w-full py-12 sm:py-14 lg:py-18 bg-white overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Header */}
          <div className="max-w-2xl mb-10 sm:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 sm:w-9 h-[2px] bg-[#0C4E55] shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0C4E55] uppercase">
                {process_eyebrow}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-tight leading-[1.15] text-[#161D26] mb-3">
              {processTitleLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="text-sm sm:text-base text-[#556972] leading-relaxed font-normal max-w-lg">
              {process_description}
            </p>
          </div>

          {/* 4 Process Steps Stepper Timeline Grid with Horizontal Line & Dots */}
          <div className="relative">
            {/* Continuous Horizontal Timeline Line across all columns */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute top-[44px] left-0 right-0 h-[1px] bg-gray-200 z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/80">
              {process_steps.map((st, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col pt-5 sm:pt-0 pb-5 sm:pb-0 ${
                    idx === 0
                      ? 'sm:pr-5 lg:pr-7'
                      : idx === process_steps.length - 1
                        ? 'sm:pl-5 lg:pl-7'
                        : 'sm:px-5 lg:px-7'
                  }`}
                >
                  {/* Step Number: 01, 02, 03, 04 */}
                  <span className="text-base sm:text-lg font-semibold text-[#8C9DA1] mb-2 block select-none">
                    {st.step}
                  </span>

                  {/* Solid Teal Dot sitting directly on the horizontal line */}
                  <div className="relative flex items-center mb-5 sm:mb-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0C4E55] ring-4 ring-white shrink-0" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#161D26] mb-1.5 leading-snug">
                    {st.title.split('\n').map((line, lIdx) => (
                      <span key={lIdx} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-[13.5px] text-[#556972] leading-relaxed font-normal">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: WHY CHOOSE US (REGULAR NATURAL HEIGHT SECTION) */}
      {/* ======================================================== */}
      <section className="relative w-full pb-12 sm:pb-16 lg:pb-20 bg-white overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="bg-[#101D24] text-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Col: Copy */}
            <div className="lg:col-span-5 p-7 sm:p-9 lg:p-11 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3.5">
                <span className="w-8 h-[2px] bg-[#00C2CB] shrink-0" />
                <span className="text-xs font-bold tracking-[0.22em] text-[#00C2CB] uppercase">
                  {why_eyebrow}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-tight text-white mb-3.5">
                {whyTitleLines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                {why_description}
              </p>
            </div>

            {/* Middle Col: Meeting Photo */}
            <div className="lg:col-span-4 relative min-h-[240px] sm:min-h-[280px] lg:min-h-full">
              <Image
                src={why_image}
                alt={why_image_alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Right Col: Deep Teal Stats Card with Animated Counters */}
            <div className="lg:col-span-3 bg-[#0C4E55] p-7 sm:p-9 flex flex-col justify-between divide-y divide-white/15">
              {stats.map((st, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    <Counter value={st.value} duration={2.2} delay={idx * 0.15} />
                  </div>
                  <div className="text-xs sm:text-[13px] text-white/80 font-medium mt-1">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
