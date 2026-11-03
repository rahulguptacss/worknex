import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/sections/Header';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Blog from '../../components/sections/Blog';
import { common, pages, sections, type PageComponent } from '../../components/types';

export const dynamic = 'force-dynamic';

const pageData = pages.blog!;

export const metadata: Metadata = {
  title: pageData?.metadata?.title || 'Blog & HR Insights | Worknex',
  description: pageData?.metadata?.description || 'Stay ahead of talent trends with expert articles on recruitment pipelines, employee wellbeing, and organizational agility.',
};

export default function BlogPage() {
  const sectionMap: Record<string, React.ReactNode> = {
    Breadcrumb: (
      <Breadcrumb
        data={sections.breadcrumb}
        currentPage={pageData.pageName}
      />
    ),
    Blog: <Blog data={sections.blog} showViewAll={false} />,
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

