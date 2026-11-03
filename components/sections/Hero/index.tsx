'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight, Plus, X } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Counter from '../../ui/Counter';
import type { HeroSectionData } from '../../types';

interface HeroProps {
  data: HeroSectionData;
}

// Fade & stagger container variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const headlineItemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const leftCardVariants: Variants = {
  hidden: { opacity: 0, x: -30, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const centerCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightCardVariants: Variants = {
  hidden: { opacity: 0, x: 30, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero({ data }: HeroProps) {
  const {
    headline,
    stat_card1,
    action_card,
    center_image,
    center_image_alt,
    stat_card2,
    right_image,
    right_image_alt,
  } = data;

  const [showVideo, setShowVideo] = useState(false);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowVideo(false);
      }
    };

    if (showVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showVideo]);

  return (
    <section className="relative w-full pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-12 lg:pb-10 bg-white overflow-hidden font-sans">
      {/* Ambient Animated Blurred Glow Orbs (Desktop/Tablet) */}
      <motion.div
        aria-hidden="true"
        className="hidden sm:block absolute -top-24 -left-20 w-80 h-80 lg:w-96 lg:h-96 bg-teal-100/50 rounded-full blur-3xl pointer-events-none -z-10"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        aria-hidden="true"
        className="hidden sm:block absolute top-1/3 -right-24 w-80 h-80 lg:w-[420px] lg:h-[420px] bg-[#D6EAEB]/60 rounded-full blur-3xl pointer-events-none -z-10"
        animate={{
          x: [0, -30, 0],
          y: [0, -25, 0],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 11,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= MAIN CREATIVE HEADLINE ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto mb-6 sm:mb-8 lg:mb-12"
        >
          {/* Line 1: Connecting [gem/badge] Creating [radiant rays] */}
          <motion.h1
            variants={headlineItemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F1E25] leading-[1.14] flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3.5 gap-y-2"
          >
            <span>{headline.line1_left || 'Connecting'}</span>
            
            {/* Faceted Gem / Diamond Badge Icon */}
            <motion.span
              whileHover={{ scale: 1.15, rotate: 45 }}
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center text-[#78C2C9] cursor-pointer"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" fill="#A9DBDF" stroke="#0C4E55" strokeWidth="1.5" strokeLinejoin="round" />
                <polygon points="12,2 17,9 12,16 7,9" fill="#D6EAEB" opacity="0.8" />
                <line x1="2" y1="8.5" x2="22" y2="8.5" stroke="#0C4E55" strokeWidth="1.2" />
                <line x1="12" y1="16" x2="12" y2="22" stroke="#0C4E55" strokeWidth="1.2" />
              </svg>
            </motion.span>

            {/* Creating with 3 Radiant Rays */}
            <span className="relative inline-flex items-center">
              <span>{headline.line1_right || 'Creating'}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0C4E55] absolute -top-1 sm:-top-2 -right-4 sm:-right-5 transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="19.07" y1="4.93" x2="16.24" y2="7.76" />
              </svg>
            </span>
          </motion.h1>

          {/* Line 2: Curved Arrow + Talent + Team Silhouette Capsule + Opportunities */}
          <motion.div
            variants={headlineItemVariants}
            className="mt-1 sm:mt-2.5 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.14] flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3.5 gap-y-2"
          >
            {/* Curved Arrow pointing to Talent */}
            <motion.span
              animate={{ rotate: [-10, -4, -10], y: [1, -2, 1] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center text-[#0C4E55] transform -translate-y-0.5 sm:-translate-y-1"
            >
              <svg className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18c0-8 6-12 16-12" />
                <path d="M16 2l6 4-6 4" />
              </svg>
            </motion.span>

            <span className="text-[#0F1E25]">{headline.line2_left || 'Talent'}</span>

            {/* Team Silhouette Capsule Badge */}
            <motion.span
              whileHover={{ scale: 1.08 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.2 }}
              className="inline-flex items-center rounded-full overflow-hidden border-2 border-teal-200/90 shadow-xs p-0.5 bg-[#D6EAEB] align-middle cursor-pointer"
            >
              <span className="relative w-12 h-6 xs:w-14 xs:h-7 sm:w-18 sm:h-8 md:w-20 md:h-9 rounded-full overflow-hidden">
                <Image
                  src={headline.line1_badge || '/hero/team.webp'}
                  alt="Team"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </span>
            </motion.span>

            <span className="text-[#0C4E55]">{headline.line2_right || 'Opportunities'}</span>
          </motion.div>
        </motion.div>

        {/* ======================================================== */}
        {/* MOBILE VIEW (< 1024px) - 100% MATCHING USER SCREENSHOT   */}
        {/* ======================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:hidden flex flex-col gap-4 max-w-xl mx-auto"
        >
          {/* 1. Large Team Photo Card (Top Full-Width) */}
          <motion.div
            variants={centerCardVariants}
            className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden shadow-sm group"
          >
            <Image
              src={center_image || '/hero/team.webp'}
              alt={center_image_alt || 'Worknex Team collaborating'}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* 2. Middle Row: 2 Cards Side-by-Side (50% - 50%) - Compact Height */}
          <div className="grid grid-cols-2 gap-3 sm:gap-3.5 items-stretch">
            
            {/* Card Left: 2.5k+ Professionals Placed */}
            <motion.div
              variants={leftCardVariants}
              className="bg-[#EAF5F5] rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between shadow-xs border border-teal-100/60 min-h-[135px] sm:min-h-[145px]"
            >
              <div>
                <div className="text-2xl sm:text-[28px] font-extrabold text-[#0C4E55] tracking-tight leading-none">
                  <Counter value={stat_card1.value} duration={2} />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#18484F] leading-tight mt-1">
                  <div>Professionals</div>
                  <div>Placed</div>
                </div>
              </div>

              {/* Avatars + Dark Teal Plus Button */}
              <div className="flex items-center -space-x-1.5 mt-2.5 pt-0.5">
                {stat_card1.avatars?.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-2 border-white shadow-xs shrink-0"
                  >
                    <Image
                      src={avatar}
                      alt="Placed candidate"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0C4E55] text-white flex items-center justify-center border-2 border-white shadow-xs shrink-0">
                  <Plus className="w-2.5 h-2.5 stroke-[2.5]" />
                </div>
              </div>
            </motion.div>

            {/* Card Right: 20+ Industries We Serve with White Pill & Wave Decoration */}
            <motion.div
              variants={rightCardVariants}
              className="relative bg-[#EAF5F5] rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between shadow-xs border border-teal-100/60 overflow-hidden min-h-[135px] sm:min-h-[145px]"
            >
              {/* Organic Soft Mint Wave in bottom right */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -bottom-4 w-20 h-20 rounded-full bg-[#D4ECEE]/70 pointer-events-none -z-0"
              />

              <div className="relative z-10">
                {/* White Pill Badge with 20+ */}
                <div className="inline-flex items-center px-2.5 py-0.5 bg-white rounded-full shadow-xs">
                  <span className="text-[11px] sm:text-xs font-extrabold text-[#0C4E55] tracking-tight">
                    <Counter value={stat_card2.value} duration={2} />
                  </span>
                </div>

                {/* Industries We Serve Text */}
                <div className="text-sm sm:text-base font-extrabold text-[#0F1E25] leading-snug mt-1.5">
                  <div>Industries</div>
                  <div>We Serve</div>
                </div>
              </div>

              {/* Horizontal Teal Underline */}
              <div className="relative z-10 w-8 sm:w-10 h-[2px] bg-[#0C4E55] rounded-full mt-1.5" />
            </motion.div>

          </div>

          {/* 3. Bottom Row: Wide Dark Teal Action Card without Image */}
          <motion.div
            variants={leftCardVariants}
            className="relative bg-[#0C4E55] rounded-2xl sm:rounded-3xl p-5 sm:p-6 overflow-hidden flex flex-col justify-between shadow-md"
          >
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight mb-4">
              {action_card.title}
            </h3>

            <div className="flex items-center gap-2.5">
              {/* White Play Button (Opens Video Modal) */}
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                aria-label="Play video in popup"
                className="w-9 h-9 rounded-full bg-white text-[#0C4E55] flex items-center justify-center shadow-md shrink-0 hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none"
              >
                <Play className="w-3.5 h-3.5 fill-[#0C4E55] text-[#0C4E55] translate-x-0.5" />
              </button>

              {/* Outline Pill Button */}
              <Link
                href={action_card.button_link || '/services'}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/70 text-white text-xs font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

        </motion.div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW (>= 1024px) - UNTOUCHED APPROVED 3-COL GRID */}
        {/* ======================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:grid lg:grid-cols-12 gap-6 items-stretch"
        >
          
          {/* ================= LEFT COLUMN ================= */}
          {/* 3 cols, vertical flex, cards 50%-50% equal height */}
          <div className="lg:col-span-3 flex flex-col gap-6 h-full">
            
            {/* Top Left: 2.5k+ Professionals Placed Card */}
            <motion.div
              variants={leftCardVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 18px 30px -10px rgba(12, 78, 85, 0.18)',
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="flex-1 min-h-0 bg-[#D6EAEB] rounded-[26px] p-7 flex flex-col justify-between shadow-sm border border-teal-100/50 transition-colors"
            >
              <div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-5xl font-extrabold text-[#0C4E55] tracking-tight leading-none"
                >
                  <Counter value={stat_card1.value} duration={2} />
                </motion.div>
                <div className="text-[15px] font-semibold text-[#18484F] mt-2">
                  {stat_card1.label}
                </div>
              </div>

              {/* Overlapping Avatars + Plus Button */}
              <div className="flex items-center -space-x-2 mt-6 pt-1">
                {stat_card1.avatars?.map((avatar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.25 + idx * 0.1,
                    }}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-black/5 cursor-pointer"
                  >
                    <Image
                      src={avatar}
                      alt="Placed candidate"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-full bg-[#0C4E55] text-white flex items-center justify-center border-2 border-white shadow-sm ring-1 ring-black/5 cursor-pointer shrink-0"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Left: Dark Teal Action Card (Equal 50% height to Top Card) */}
            <motion.div
              variants={leftCardVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 18px 30px -10px rgba(12, 78, 85, 0.4)',
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="flex-1 min-h-0 bg-[#0C4E55] text-white rounded-[26px] p-7 flex flex-col justify-between shadow-md transition-colors"
            >
              <h3 className="text-[22px] font-bold leading-snug tracking-tight text-white pr-1">
                {action_card.title}
              </h3>

              <div className="flex items-center justify-between pt-6 mt-auto">
                {/* Pulsing Play Button (Opens Video Modal) */}
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  aria-label="Play introduction video in popup"
                  className="focus:outline-none"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(255, 255, 255, 0.45)',
                        '0 0 0 8px rgba(255, 255, 255, 0)',
                        '0 0 0 0 rgba(255, 255, 255, 0)',
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2,
                      ease: 'easeInOut',
                    }}
                    className="w-11 h-11 rounded-full bg-white text-[#0C4E55] flex items-center justify-center shadow-md cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-[#0C4E55] text-[#0C4E55] translate-x-0.5" />
                  </motion.div>
                </button>

                <Link
                  href={action_card.button_link || '/services'}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white/95 hover:text-white group transition-colors"
                >
                  <span>{action_card.button_text}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>

          </div>

          {/* ================= CENTER COLUMN ================= */}
          {/* Main Feature Team Photo Card (Span 6 cols) */}
          <motion.div
            variants={centerCardVariants}
            whileHover={{
              y: -5,
              boxShadow: '0 22px 35px -12px rgba(12, 78, 85, 0.22)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="lg:col-span-6 relative rounded-[26px] overflow-hidden shadow-sm group min-h-[510px] xl:min-h-[530px]"
          >
            <Image
              src={center_image || '/hero/team.webp'}
              alt={center_image_alt || 'Worknex Team collaborating'}
              fill
              priority
              sizes="50vw"
              className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          {/* Span 3 cols, vertical flex */}
          <div className="lg:col-span-3 flex flex-col gap-6 h-full">
            
            {/* Top Right: 20+ Industries We Serve Card */}
            <motion.div
              variants={rightCardVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 18px 30px -10px rgba(12, 78, 85, 0.18)',
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="bg-[#D6EAEB] rounded-[26px] p-7 shadow-sm border border-teal-100/50 transition-colors shrink-0"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-5xl font-extrabold text-[#0C4E55] tracking-tight leading-none"
              >
                <Counter value={stat_card2.value} duration={2} />
              </motion.div>
              <div className="text-[15px] font-semibold text-[#18484F] mt-2">
                {stat_card2.label}
              </div>
            </motion.div>

            {/* Bottom Right: Executive Photo Card */}
            <motion.div
              variants={rightCardVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 22px 35px -12px rgba(12, 78, 85, 0.22)',
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="relative rounded-[26px] overflow-hidden shadow-sm group flex-1 min-h-0"
            >
              <Image
                src={right_image || '/hero/executive.webp'}
                alt={right_image_alt || 'Executive Consultant'}
                fill
                sizes="25vw"
                className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* Video Popup Modal */}
      {showVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video Player Popup"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md transition-opacity duration-200"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#00C2CB] flex items-center justify-center transition-all duration-200 backdrop-blur-sm cursor-pointer border border-white/20 hover:scale-105 active:scale-95"
              aria-label="Close video popup"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0"
              title="Worknex Introduction Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
