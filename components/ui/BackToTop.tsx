'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import type { BackToTopData } from '../types';

export default function BackToTop({ data }: { data?: BackToTopData }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={data?.aria_label || 'Back to top'}
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#0C4E55] text-white shadow-lg transition-all duration-300 hover:bg-[#07353A] hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0C4E55]/30 cursor-pointer"
    >
      <ArrowUp className="h-5 w-5 stroke-[2.5]" />
    </button>
  );
}

