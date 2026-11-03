import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import Blog from '../components/sections/Blog';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';
import { common, pages, sections, type PageComponent } from '../components/types';

export const dynamic = 'force-dynamic';

const pageData = pages.home;

export const metadata: Metadata = {
  title: pageData?.metadata?.title || 'Worknex | Connecting Talent & Creating Opportunities',
  description: pageData?.metadata?.description || 'Worknex connects exceptional professionals with forward-thinking organizations through strategic talent acquisition, workforce planning, and HR advisory.',
};

export default function Home() {
  const sectionMap: Record<string, React.ReactNode> = {
    Hero: <Hero data={sections.hero} />,
    About: <About data={sections.about} />,
    Services: <Services data={sections.services} />,
    Testimonials: <Testimonials data={sections.testimonials} />,
    Blog: <Blog data={sections.blog} limit={2} showViewAll={true} />,
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
