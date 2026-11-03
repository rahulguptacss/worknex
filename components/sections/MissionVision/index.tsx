'use client';

import React from 'react';
import { Target, Compass, Award, CheckCircle2 } from 'lucide-react';
import type { MissionVisionData, MissionVisionItem } from '../../types';

interface MissionVisionProps {
  data?: MissionVisionData;
}

interface ExtendedItem extends Partial<MissionVisionItem> {
  iconKey?: string;
}

export default function MissionVision({ data }: MissionVisionProps) {
  const defaultItems: ExtendedItem[] = [
    {
      iconKey: 'target',
      title: 'Our Mission',
      description:
        'To bridge the gap between world-class talent and high-growth organizations by delivering transparent, ethical, and precision-driven recruitment and HR consulting solutions.',
      points: [
        'Strategic talent placement',
        'Transparent candidate advisory',
        'End-to-end recruitment lifecycle',
      ],
    },
    {
      iconKey: 'compass',
      title: 'Our Vision',
      description:
        'To be recognized globally as the premier talent advisory and workforce strategy partner, transforming the modern hiring ecosystem through empathy, innovation, and long-term value.',
      points: [
        'Global recruitment footprint',
        'Modern data-driven hiring metrics',
        'Sustainable organizational retention',
      ],
    },
    {
      iconKey: 'award',
      title: 'Core Values',
      description:
        'Our foundation is built upon uncompromising integrity, client obsession, and relentless dedication to matching candidate potential with enterprise excellence.',
      points: [
        'Integrity and discretion in every search',
        'People-first cultural alignment',
        'Agility in rapid market scaling',
      ],
    },
  ];

  const items = (data?.items && data.items.length > 0) ? (data.items as ExtendedItem[]) : defaultItems;

  const renderIcon = (item: ExtendedItem, idx: number) => {
    const iconClass = 'w-6 h-6 text-[#0C4E55] group-hover:text-white transition-colors duration-300';
    
    if (item.iconKey === 'target' || idx === 0) {
      return <Target className={iconClass} />;
    }
    if (item.iconKey === 'compass' || idx === 1) {
      return <Compass className={iconClass} />;
    }
    if (item.iconKey === 'award' || idx === 2) {
      return <Award className={iconClass} />;
    }
    if (React.isValidElement(item.icon)) {
      return React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
        className: iconClass,
      });
    }
    return <Target className={iconClass} />;
  };

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#F8FBFC] border-y border-teal-50/80 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#0C4E55]"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0C4E55] uppercase">
              {data?.eyebrow || 'OUR FOUNDATION & PURPOSE'}
            </span>
            <span className="w-6 h-[2px] bg-[#0C4E55]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F1E25] leading-tight">
            <span>{data?.title_black || 'Empowering Organizations,'} </span>
            <span className="text-[#0C4E55]">{data?.title_teal || 'Fulfilling Potential'}</span>
          </h2>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 cursor-default"
            >
              <div>
                {/* Icon Capsule */}
                <div className="w-14 h-14 rounded-2xl bg-[#EAF5F6] flex items-center justify-center mb-6 group-hover:bg-[#0C4E55] group-hover:scale-105 transition-all duration-300 shadow-xs">
                  {renderIcon(item, idx)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0F1E25] mb-3 group-hover:text-[#0C4E55] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#556871] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bullet Points */}
              {item.points && (
                <div className="pt-4 border-t border-gray-100 space-y-2.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2C3E50]">
                      <CheckCircle2 className="w-4 h-4 text-[#0C4E55] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
