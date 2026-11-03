import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/sections/Header';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Contact from '../../components/sections/Contact';
import { common, pages, sections, type PageComponent } from '../../components/types';

export const dynamic = 'force-dynamic';

const pageData = pages.contact!;

export const metadata: Metadata = {
  title: pageData?.metadata?.title || 'Contact Us | Worknex Talent Advisors',
  description: pageData?.metadata?.description || 'Get in touch with Worknex offices in Florida and New York for executive staffing, HR advisory, and workforce inquiries.',
};

export default function ContactPage() {
  const sectionMap: Record<string, React.ReactNode> = {
    Breadcrumb: (
      <Breadcrumb
        data={sections.breadcrumb}
        currentPage={pageData.pageName}
        items={[
          { name: 'Home', href: '/' },
          { name: pageData.pageName, href: '#' },
        ]}
      />
    ),
    Contact: <Contact data={sections.contact} />,
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

