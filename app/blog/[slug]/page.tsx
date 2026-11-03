import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../../components/sections/Header';
import Footer from '../../../components/sections/Footer';
import BackToTop from '../../../components/ui/BackToTop';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import BlogDetail from '../../../components/sections/BlogDetail';
import { common, pages, sections, type BlogDetailData, type PageComponent } from '../../../components/types';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const pageData = pages.blogDetail || {
  title: 'Blog Details | Worknex',
  pageName: 'Blog Details',
  metadata: {
    title: 'Blog Details | Worknex Insights',
    description: 'Expert insights on talent acquisition, workplace culture, and modern HR strategies.',
  },
  components: [
    { key: 'BreadcrumbSection', component: 'Breadcrumb' },
    { key: 'BlogDetailSection', component: 'BlogDetail' },
  ],
};

export async function generateStaticParams() {
  const blogDetails = (sections as unknown as { blogDetails?: Record<string, BlogDetailData> }).blogDetails || {};
  const slugs = Object.keys(blogDetails);

  if (slugs.length === 0) {
    return sections.blog.posts.map((post) => ({
      slug: post.slug,
    }));
  }

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogDetails = (sections as unknown as { blogDetails?: Record<string, BlogDetailData> }).blogDetails || {};
  const post = blogDetails[slug];

  if (!post) {
    const fallback = sections.blog.posts.find((p) => p.slug === slug);
    if (!fallback) {
      return {
        title: 'Blog Article | Worknex',
        description: 'Worknex HR and workforce management insights.',
      };
    }
    return {
      title: `${fallback.title} | Worknex Blog`,
      description: fallback.excerpt,
    };
  }

  return {
    title: `${post.title} | Worknex Blog`,
    description: post.intro_paragraph,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blogDetails = (sections as unknown as { blogDetails?: Record<string, BlogDetailData> }).blogDetails || {};
  const post = blogDetails[slug] || sections.blog.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const sectionMap: Record<string, React.ReactNode> = {
    Breadcrumb: (
      <Breadcrumb
        data={sections.breadcrumb}
        currentPage={post.title}
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: '#' },
        ]}
      />
    ),
    BlogDetail: <BlogDetail post={post} />,
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
