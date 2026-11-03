import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/sections/Header';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import Breadcrumb from '../../components/sections/Breadcrumb';
import EnquireNow from '../../components/sections/EnquireNow';
import { common, pages, sections, type PageComponent } from '../../components/types';

export const dynamic = 'force-dynamic';

const pageData = pages.enquireNow || {
  title: 'Enquire Now | Worknex Talent Advisors',
  pageName: 'Enquire Now',
  metadata: {
    title: 'Enquire Now | Worknex - Tell Us Your Requirement',
    description: 'Fill out the form and our team will get back to you shortly with the right solution for your hiring needs.',
  },
  components: [
    { key: 'BreadcrumbSection', component: 'Breadcrumb' },
    { key: 'EnquireNowSection', component: 'EnquireNow' },
  ],
};

export const metadata: Metadata = {
  title: pageData?.metadata?.title || 'Enquire Now | Worknex',
  description: pageData?.metadata?.description || 'Tell us your hiring and workforce requirements.',
};

export default function EnquireNowPage() {
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
    EnquireNow: <EnquireNow data={sections.enquireNow} />,
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

