import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/sections/Header';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Testimonials from '../../components/sections/Testimonials';
import { common, pages, sections, type PageComponent } from '../../components/types';

export const dynamic = 'force-dynamic';

const pageData = pages.testimonials!;

export const metadata: Metadata = {
  title: pageData?.metadata?.title || 'Client Testimonials | Worknex',
  description: pageData?.metadata?.description || 'Read verified executive reviews and watch video testimonials from business leaders who scaled with Worknex.',
};

export default function TestimonialsPage() {
  const sectionMap: Record<string, React.ReactNode> = {
    Breadcrumb: (
      <Breadcrumb
        data={sections.breadcrumb}
        currentPage={pageData.pageName}
      />
    ),
    Testimonials: <Testimonials data={sections.testimonials} />,
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-[#0C4E55] selection:text-white">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        {pageData.components.map((block: PageComponent) => (
          <React.Fragment key={block.key}>
            {sectionMap[block.component] ?? null}
          </React.Fragment>
        ))}
      </main>
      <Footer data={common.Footer} />
      <BackToTop data={common.BackToTop} />
    </div>
  );
}

