'use client';

import React from 'react';
import Image from 'next/image';
import type { BlogPostItem, BlogDetailData } from '../../types';

interface BlogDetailProps {
  post: BlogPostItem | BlogDetailData;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  const {
    eyebrow = 'BLOG DETAILS',
    title,
    author = 'Admin',
    date = 'Oct 15, 2026',
    comments = 'No Comments',
    image = '/blog/team_hero.jpg',
    image_alt = 'Worknex corporate blog post hero image',
    intro_paragraph,
    quote,
    paragraph_after_quote,
    sub_section,
    strategies,
    conclusion,
  } = post;

  return (
    <article className="w-full bg-white font-sans text-[#0F1E25] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 selection:bg-[#0C4E55] selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* ======================================================== */}
        {/* 1. HEADER / META BLOCK (EXACT MATCH TO SCREENSHOT)       */}
        {/* ======================================================== */}
        <header className="mb-8 sm:mb-10">
          {/* Eyebrow: — BLOG DETAILS */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="w-8 sm:w-9 h-[2px] bg-[#0C4E55] shrink-0" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#0C4E55] uppercase">
              {eyebrow}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#161D26] tracking-tight leading-[1.16] mb-6 sm:mb-8">
            {title}
          </h1>

          {/* Meta Details with Vertical Hairline Dividers */}
          <div className="flex items-center gap-6 sm:gap-10">
            {/* Written By */}
            <div>
              <span className="block text-xs sm:text-[13px] text-[#8C9DA1] font-medium mb-1">
                Written By
              </span>
              <span className="block text-sm sm:text-base font-bold text-[#161D26]">
                {author}
              </span>
            </div>

            {/* Hairline Divider */}
            <div className="h-8 w-[1px] bg-gray-200 shrink-0" />

            {/* Post Date */}
            <div>
              <span className="block text-xs sm:text-[13px] text-[#8C9DA1] font-medium mb-1">
                Post Date
              </span>
              <span className="block text-sm sm:text-base font-bold text-[#161D26]">
                {date}
              </span>
            </div>

            {/* Hairline Divider */}
            <div className="h-8 w-[1px] bg-gray-200 shrink-0" />

            {/* Comments */}
            <div>
              <span className="block text-xs sm:text-[13px] text-[#8C9DA1] font-medium mb-1">
                Comments
              </span>
              <span className="block text-sm sm:text-base font-bold text-[#161D26]">
                {comments}
              </span>
            </div>
          </div>
        </header>

        {/* ======================================================== */}
        {/* 2. FEATURED HERO IMAGE                                   */}
        {/* ======================================================== */}
        <div className="relative w-full aspect-[16/8.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm mb-8 sm:mb-10 bg-gray-100">
          <Image
            src={image}
            alt={image_alt || title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
        </div>

        {/* ======================================================== */}
        {/* 3. INTRO PARAGRAPH                                       */}
        {/* ======================================================== */}
        {intro_paragraph && (
          <p className="text-sm sm:text-base text-[#556972] leading-[1.8] font-normal mb-8 sm:mb-10">
            {intro_paragraph}
          </p>
        )}

        {/* ======================================================== */}
        {/* 4. QUOTE BLOCK WITH LARGE QUOTE ICON                     */}
        {/* ======================================================== */}
        {quote && (
          <div className="flex items-center gap-5 sm:gap-7 py-2 mb-8 sm:mb-10">
            {/* Soft Teal Double Quotes Icon */}
            <div className="shrink-0 text-[#CBE7EA]">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Vertical Divider */}
            <div className="w-[1.5px] h-12 sm:h-14 bg-gray-200 shrink-0" />

            {/* Bold Quote Text */}
            <blockquote className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#161D26] leading-snug tracking-tight">
              {quote}
            </blockquote>
          </div>
        )}

        {/* ======================================================== */}
        {/* 5. PARAGRAPH AFTER QUOTE                                 */}
        {/* ======================================================== */}
        {paragraph_after_quote && (
          <p className="text-sm sm:text-base text-[#556972] leading-[1.8] font-normal mb-10 sm:mb-12">
            {paragraph_after_quote}
          </p>
        )}

        {/* ======================================================== */}
        {/* 6. SIDE-BY-SIDE (IMAGE LEFT, CONTENT RIGHT)              */}
        {/* ======================================================== */}
        {sub_section && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-14">
            {/* Left Photo */}
            <div className="md:col-span-6">
              <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <Image
                  src={sub_section.image || '/blog/team_culture.jpg'}
                  alt={sub_section.image_alt || sub_section.title || ''}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="md:col-span-6 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-[26px] font-bold text-[#161D26] tracking-tight leading-snug mb-3.5">
                {sub_section.title}
              </h3>
              {sub_section.paragraphs?.map((p, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-[15px] text-[#556972] leading-[1.75] font-normal mb-3 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 7. KEY STRATEGIES FOR SUCCESS (BULLETED LIST)            */}
        {/* ======================================================== */}
        {strategies && (
          <div className="mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-[26px] font-bold text-[#161D26] tracking-tight leading-snug mb-3">
              {strategies.title}
            </h3>
            <p className="text-sm sm:text-base text-[#556972] leading-[1.75] font-normal mb-4">
              {strategies.intro}
            </p>

            {/* Bullet Points with solid dots */}
            <ul className="space-y-2.5 sm:space-y-3 pl-2 sm:pl-3">
              {strategies.points?.map((pt, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#556972] font-normal leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#161D26] mt-2.5 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ======================================================== */}
        {/* 8. CONCLUSION PARAGRAPH                                  */}
        {/* ======================================================== */}
        {conclusion && (
          <p className="text-sm sm:text-base text-[#556972] leading-[1.8] font-normal">
            {conclusion}
          </p>
        )}

      </div>
    </article>
  );
}
