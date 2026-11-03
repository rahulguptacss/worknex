import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/sections/Header';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import Breadcrumb from '../../components/sections/Breadcrumb';
import ServicesIntro from '../../components/sections/ServicesIntro';
import Services from '../../components/sections/Services';
import { common, pages, sections, type PageComponent } from '../../components/types';

export const dynamic = 'force-dynamic';

const pageData = pages.services!;

export const metadata: Metadata = {
  title: pageData?.metadata?.title || 'Our Services | Worknex Staffing & Consulting',
  description: pageData?.metadata?.description || 'Explore comprehensive HR and talent acquisition services: executive search, direct hire, compliance consulting, and workforce planning.',
};

export default function ServicesPage() {
  const sectionMap: Record<string, React.ReactNode> = {
    Breadcrumb: (
      <Breadcrumb
        data={sections.breadcrumb}
        currentPage={pageData.pageName}
      />
    ),
    ServicesIntro: <ServicesIntro data={sections.servicesIntro} />,
    Services: <Services data={sections.services} showCta={false} />,
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
