'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import type { AboutSectionData } from '../../types';

interface AboutProps {
  data: AboutSectionData;
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

const textFadeUp: Variants = {
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

const graphicEntrance: Variants = {
  hidden: { opacity: 0, scale: 0.94, x: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const paragraphFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About({ data }: AboutProps) {
  const {
    eyebrow,
    title_line1,
    title_line2,
    title_line3,
    title_teal,
    description_1,
    description_2,
    vertical_badge,
    image,
    image_alt,
  } = data;

  return (
    <section id="about" className="relative w-full pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: Heading Left & Graphic Composition Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: Headline ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow: Animated Teal Accent Bar + ABOUT US */}
            <motion.div variants={textFadeUp} className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
                style={{ originX: 0 }}
                className="w-8 sm:w-10 h-[2px] bg-[#0C4E55] inline-block shrink-0"
              />
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] sm:tracking-[0.25em] text-[#0C4E55] uppercase">
                {eyebrow || 'ABOUT US'}
              </span>
            </motion.div>

            {/* 3-Line Fluid Headline: Bold and prominent across all viewports */}
            <h2 className="text-[34px] xs:text-[40px] sm:text-6xl md:text-7xl lg:text-[72px] font-extrabold tracking-tight leading-[1.12] text-[#161D26]">
              <motion.span variants={textFadeUp} className="block">
                {title_line1 || 'Connecting'}
              </motion.span>
              <motion.span variants={textFadeUp} className="block mt-1 sm:mt-1.5">
                {title_line2 || 'Talent With'}
              </motion.span>
              <motion.span variants={textFadeUp} className="block mt-1 sm:mt-1.5 text-[#0C4E55]">
                {title_line3 || title_teal || 'Opportunity.'}
              </motion.span>
            </h2>
          </motion.div>

          {/* ================= RIGHT COLUMN: Exact Responsive Graphic Composition ================= */}
          <motion.div
            variants={graphicEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0"
          >
            <div className="relative flex items-center max-w-full">
              
              {/* 1. Large Pale Mint Leaf/Pebble Shape (Background Element) */}
              {/* Scaled proportionally across mobile, tablet, and desktop */}
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  y: [0, -4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6.5,
                  ease: 'easeInOut',
                }}
                style={{
                  borderRadius: '50% 50% 6% 50%',
                }}
                className="absolute -top-4 -left-4 sm:-top-10 sm:-left-10 -right-2 sm:-right-6 -bottom-2 sm:-bottom-4 bg-[#E8F4F5] -z-10 pointer-events-none"
              />

              {/* 2. Dot Grid Matrix on Right (Hidden on ultra-narrow screens < 360px, visible on xs+) */}
              <motion.div
                animate={{ opacity: [0.25, 0.45, 0.25] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="hidden xs:grid grid-cols-4 gap-2 sm:gap-3 absolute -right-2 xs:-right-4 sm:-right-6 top-1/2 -translate-y-6 sm:-translate-y-8 z-0 pointer-events-none"
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#0C4E55]/35" />
                ))}
              </motion.div>

              {/* 3. Dark Teal D-Shape (Semicircle) */}
              {/* Responsive width/height: w-20 on mobile, w-24 on xs, w-36 on sm, w-48 on lg */}
              <motion.div
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 w-20 xs:w-24 sm:w-36 md:w-44 lg:w-48 h-48 xs:h-56 sm:h-80 md:h-[360px] lg:h-[390px] bg-[#0C4E55] rounded-r-full rounded-l-none flex items-center justify-start pl-3 xs:pl-4 sm:pl-7 md:pl-8 shadow-md shrink-0"
              >
                {/* Vertical "WHO WE ARE" text reading bottom-to-top (-rotate-90) */}
                <span className="transform -rotate-90 whitespace-nowrap text-white text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.28em] uppercase select-none">
                  {vertical_badge || 'WHO WE ARE'}
                </span>
              </motion.div>

              {/* 4. Circular HD Meeting Image overlapping the D-Shape */}
              {/* Responsive diameter: 192px on 320px screen, 224px on xs, 320px on sm, 390px on lg */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5.5,
                  ease: 'easeInOut',
                }}
                whileHover={{
                  scale: 1.025,
                }}
                className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[390px] lg:h-[390px] rounded-full overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.22)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.25)] z-20 group shrink-0 -ml-12 xs:-ml-14 sm:-ml-24 md:-ml-28 lg:-ml-32 cursor-pointer transition-shadow duration-300"
              >
                <Image
                  src={image || '/about/meeting.webp'}
                  alt={image_alt || 'Worknex executive boardroom meeting presentation'}
                  fill
                  sizes="(max-width: 480px) 220px, (max-width: 640px) 260px, (max-width: 1024px) 350px, 400px"
                  priority
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* BOTTOM ROW: Responsive Two-Column Paragraphs */}
        {/* On Mobile: Stacked | On Tablet (md): 2 Columns with Divider | On Desktop (lg): 2 Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-10 lg:mt-8 items-start"
        >
          
          {/* Left Paragraph */}
          <motion.div variants={paragraphFade} className="lg:col-span-6">
            <p className="text-sm sm:text-[14.5px] lg:text-[15px] text-[#475569] leading-relaxed font-normal max-w-lg">
              {description_1}
            </p>
          </motion.div>

          {/* Right Paragraph with Vertical Hairline Divider on Tablet (md) & Desktop (lg) */}
          <motion.div
            variants={paragraphFade}
            className="lg:col-span-6 md:border-l md:border-gray-200/90 md:pl-6 lg:pl-10"
          >
            <p className="text-sm sm:text-[14.5px] lg:text-[15px] text-[#475569] leading-relaxed font-normal max-w-lg">
              {description_2}
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
