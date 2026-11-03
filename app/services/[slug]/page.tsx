import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../../components/sections/Header';
import Footer from '../../../components/sections/Footer';
import BackToTop from '../../../components/ui/BackToTop';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import ServiceDetail from '../../../components/sections/ServiceDetail';
import { common, pages, sections, type ServiceDetailData, type PageComponent } from '../../../components/types';

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const pageData = pages.serviceDetail || {
  title: 'Service Details | Worknex',
  pageName: 'Service Details',
  metadata: {
    title: 'Service Details | Worknex HR Consulting',
    description: 'Comprehensive workforce, recruitment, and organizational HR consulting services.',
  },
  components: [
    { key: 'BreadcrumbSection', component: 'Breadcrumb' },
    { key: 'ServiceDetailSection', component: 'ServiceDetail' },
  ],
};

export async function generateStaticParams() {
  const serviceDetails = (sections as unknown as { serviceDetails?: Record<string, ServiceDetailData> }).serviceDetails || {};
  const slugs = Object.keys(serviceDetails);

  if (slugs.length === 0) {
    return sections.services.items.map((item) => ({
      slug: item.id,
    }));
  }

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const serviceDetails = (sections as unknown as { serviceDetails?: Record<string, ServiceDetailData> }).serviceDetails || {};
  const service = serviceDetails[slug];

  if (!service) {
    const fallbackItem = sections.services.items.find((it) => it.id === slug);
    return {
      title: `${fallbackItem?.title || 'Service Details'} | Worknex`,
      description: fallbackItem?.description || 'Worknex HR and workforce consulting solutions.',
    };
  }

  return {
    title: `${service.name} | Worknex HR Solutions`,
    description: service.hero_subtitle,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const serviceDetails = (sections as unknown as { serviceDetails?: Record<string, ServiceDetailData> }).serviceDetails || {};
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  const sectionMap: Record<string, React.ReactNode> = {
    Breadcrumb: (
      <Breadcrumb
        data={sections.breadcrumb}
        currentPage={service.name}
        items={[
          { name: 'Home', href: '/' },
          { name: 'Our Services', href: '/services' },
          { name: service.name, href: '#' },
        ]}
      />
    ),
    ServiceDetail: <ServiceDetail data={service} />,
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
