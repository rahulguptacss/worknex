'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Quote, X } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import type { TestimonialsSectionData, TestimonialReview, TestimonialVideo } from '../../types';

interface TestimonialsProps {
  data: TestimonialsSectionData;
}

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function getEmbedUrl(rawUrl?: string): string {
  if (!rawUrl || rawUrl === '#' || rawUrl.trim() === '') {
    return 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0';
  }

  // If already a YouTube embed URL
  if (rawUrl.includes('youtube.com/embed/') || rawUrl.includes('youtube-nocookie.com/embed/')) {
    return rawUrl.includes('?') ? `${rawUrl}&autoplay=1` : `${rawUrl}?autoplay=1`;
  }

  // Standard YouTube watch URL or short link
  const ytMatch = rawUrl.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
  );
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  }

  // Vimeo URL
  const vimeoMatch = rawUrl.match(
    /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)/i
  );
  if (vimeoMatch && vimeoMatch[3]) {
    return `https://player.vimeo.com/video/${vimeoMatch[3]}?autoplay=1`;
  }

  return rawUrl;
}

export default function Testimonials({ data }: TestimonialsProps) {
  const { eyebrow, title_black, title_teal, items } = data;
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };

    if (activeVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <section id="testimonials" className="relative w-full pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="w-6 h-[2px] bg-[#0C4E55] origin-right"
            />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-bold tracking-widest text-[#0C4E55] uppercase"
            >
              {eyebrow || 'CLIENT TESTIMONIALS'}
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="w-6 h-[2px] bg-[#0C4E55] origin-left"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F1E25] leading-tight"
          >
            <span>{title_black} </span>
            <span className="text-[#0C4E55]">{title_teal}</span>
          </motion.h2>
        </div>

        {/* 6-Card Mosaic Grid (3 columns on desktop, 2 on tablet, 1 on mobile) with Stagger Animation */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
        >
          {items?.map((item) => {
            if (item.type === 'review') {
              const review = item as TestimonialReview;
              return (
                <motion.div
                  key={review.id}
                  variants={cardItemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className="bg-[#F8FBFC] border border-teal-50/80 hover:border-teal-200/90 rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Subtle top decorative quote watermark */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-100/70 group-hover:text-teal-200/80 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 pointer-events-none" />

                  {/* Quote Body */}
                  <p className="text-sm sm:text-[15px] text-[#3A4D54] leading-relaxed font-normal mb-6 relative z-10">
                    &ldquo;{review.quote}&rdquo;
                  </p>

                  {/* Author Meta */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 relative z-10">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-black/5 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={review.avatar || '/hero/avatar1.webp'}
                        alt={review.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F1E25] group-hover:text-[#0C4E55] transition-colors">
                        {review.author}
                      </h4>
                      <p className="text-xs text-[#6B7D86] font-medium">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (item.type === 'video') {
              const video = item as TestimonialVideo;
              const embedUrl = getEmbedUrl(video.video_url);

              return (
                <motion.div
                  key={video.id}
                  variants={cardItemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                  role="button"
                  tabIndex={0}
                  aria-label="Play testimonial video in popup"
                  onClick={() => setActiveVideo(embedUrl)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveVideo(embedUrl);
                    }
                  }}
                  className="relative rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl group aspect-[4/3] bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0C4E55] transition-all duration-300"
                >
                  <Image
                    src={video.image}
                    alt={video.image_alt || 'Client testimonial video thumbnail'}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {/* Central Play Button Overlay with Pulse Wave */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative">
                      {/* Pulse Halo */}
                      <motion.span
                        animate={{ scale: [1, 1.45, 1], opacity: [0.65, 0, 0.65] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -inset-2.5 rounded-full bg-white/40 pointer-events-none"
                      />
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 text-[#0C4E55] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white group-active:scale-95 transition-all duration-300">
                        <Play className="w-6 h-6 fill-[#0C4E55] text-[#0C4E55] translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return null;
          })}
        </motion.div>

      </div>

      {/* Video Popup Modal with Animated Entrance */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Video Player Popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button Top-Right */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#00C2CB] flex items-center justify-center transition-all duration-200 backdrop-blur-sm cursor-pointer border border-white/20 hover:scale-105 active:scale-95"
                aria-label="Close video popup"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Video Iframe / Player */}
              <iframe
                src={activeVideo}
                title="Worknex Video Testimonial"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
