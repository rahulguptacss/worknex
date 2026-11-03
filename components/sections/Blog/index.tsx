'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, User, MessageSquare } from 'lucide-react';
import type { BlogSectionData } from '../../types';

interface BlogProps {
  data: BlogSectionData;
  limit?: number;
  showViewAll?: boolean;
}

export default function Blog({ data, limit, showViewAll = true }: BlogProps) {
  const { badge, title_black, title_teal, posts, button_text, button_link } = data;
  const displayedPosts = limit ? posts?.slice(0, limit) : posts;

  return (
    <section id="blog" className="relative w-full pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          {/* Outline Pill Badge */}
          <div className="inline-flex items-center justify-center px-6 sm:px-7 py-2 rounded-full border border-[#4A7C89]/85 text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#0C4E55] uppercase mb-5 sm:mb-6 bg-transparent">
            {badge || 'LATEST BLOG & INSIGHTS'}
          </div>

          {/* 2-Line Bold Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[58px] font-extrabold tracking-tight leading-[1.14]">
            <span className="block text-[#161D26]">
              {title_black || 'Insights & Updates'}
            </span>
            <span className="block text-[#0C4E55] mt-1 sm:mt-2">
              {title_teal || 'from the World of HR'}
            </span>
          </h2>
        </div>

        {/* 2 Wide Blog Post Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayedPosts?.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row group"
            >
              {/* Post Thumbnail Image Container with Floating Category Badge */}
              <div className="relative w-full sm:w-[48%] min-h-[220px] sm:min-h-[280px] overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Dark Teal Category Pill Badge */}
                <span className="absolute top-4 left-4 z-10 px-4 py-1.5 rounded-full bg-[#0C4E55] text-white text-xs font-semibold shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Post Content */}
              <div className="p-6 sm:p-7 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Meta: BY ADMIN | NO COMMENTS */}
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gray-500" />
                      <span>{post.author || 'BY ADMIN'}</span>
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-gray-500" />
                      <span>{post.comments || 'NO COMMENTS'}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F1E25] group-hover:text-[#0C4E55] transition-colors leading-snug mb-3">
                    <Link href={post.href || '#blog'}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-500 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>

                {/* READ MORE Link with Underline and Arrow */}
                <div className="pt-6 mt-2">
                  <Link
                    href={post.href || '#blog'}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0C4E55] uppercase tracking-wider group/link"
                  >
                    <span className="border-b-2 border-[#0C4E55] pb-0.5 group-hover/link:border-[#07353A] group-hover/link:text-[#07353A] transition-colors">
                      READ MORE
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0C4E55] group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Centered "VIEW ALL BLOGS ->" Link */}
        {showViewAll && (
          <div className="text-center pt-2">
            <Link
              href={button_link || '/blog'}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0C4E55] uppercase tracking-wider group"
            >
              <span className="border-b-2 border-[#0C4E55] pb-0.5 group-hover:border-[#07353A] group-hover:text-[#07353A] transition-colors">
                {button_text || 'VIEW ALL BLOGS'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0C4E55] group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
