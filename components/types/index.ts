import data from '../data/data.json';

export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export type LinkType = NavItem;

export interface HeaderData {
  logo: string;
  logo_text: string;
  logo_subtext?: string;
  phone?: string;
  phone_href?: string;
  links: LinkType[];
  button_text?: string;
  button_link?: string;
  menu_aria_label?: string;
  close_aria_label?: string;
}

export interface FooterAddress {
  state: string;
  company: string;
  lines: string[];
}

export interface FooterContact {
  title: string;
  email: string;
  email_href?: string;
  phone?: string;
  hours?: string;
  note_lines?: string[];
}

export interface FooterSocialItem {
  name: string;
  href: string;
  icon: string;
}

export interface FooterData {
  logo: string;
  logo_text: string;
  tagline?: string;
  follow_us_title?: string;
  addresses: FooterAddress[];
  quick_links_title?: string;
  quick_links: LinkType[];
  contact: FooterContact;
  socials: FooterSocialItem[];
  copyright: string;
  bottom_tagline?: string;
}

export interface BackToTopData {
  aria_label: string;
}

export interface HeroStatCard {
  value: string;
  label: string;
  avatars?: string[];
  plus_count?: string;
}

export interface HeroActionCard {
  title: string;
  button_text: string;
  button_link: string;
  video_label?: string;
}

export interface HeroSectionData {
  badge_text?: string;
  headline: {
    line1_left: string;
    line1_badge: string;
    line1_right: string;
    line2_left: string;
    line2_right: string;
  };
  stat_card1: HeroStatCard;
  action_card: HeroActionCard;
  center_image: string;
  center_image_alt: string;
  stat_card2: HeroStatCard;
  right_image: string;
  right_image_alt: string;
}

export interface AboutSectionData {
  eyebrow: string;
  title_line1?: string;
  title_line2?: string;
  title_line3?: string;
  title_black?: string;
  title_teal?: string;
  description_1: string;
  description_2: string;
  vertical_badge: string;
  image: string;
  image_alt: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface ServicesSectionData {
  eyebrow: string;
  title_line1?: string;
  title_line2?: string;
  title_black: string;
  title_teal: string;
  description: string;
  cta_text: string;
  cta_link: string;
  image: string;
  image_alt: string;
  items: ServiceItem[];
}

export interface TestimonialReview {
  id: string;
  type: 'review';
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface TestimonialVideo {
  id: string;
  type: 'video';
  image: string;
  image_alt: string;
  video_url?: string;
}

export type TestimonialItem = TestimonialReview | TestimonialVideo;

export interface TestimonialsSectionData {
  eyebrow: string;
  title_black: string;
  title_teal: string;
  items: TestimonialItem[];
}

export interface BlogSubSection {
  title: string;
  image: string;
  image_alt?: string;
  paragraphs: string[];
}

export interface BlogStrategies {
  title: string;
  intro: string;
  points: string[];
}

export interface BlogDetailData {
  id: string;
  slug: string;
  eyebrow?: string;
  title: string;
  author: string;
  date: string;
  comments: string;
  category?: string;
  read_time?: string;
  image: string;
  image_alt?: string;
  intro_paragraph: string;
  quote: string;
  paragraph_after_quote: string;
  sub_section: BlogSubSection;
  strategies: BlogStrategies;
  conclusion: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  eyebrow?: string;
  author?: string;
  comments?: string;
  date?: string;
  read_time?: string;
  excerpt: string;
  image: string;
  image_alt?: string;
  href: string;
  intro_paragraph?: string;
  quote?: string;
  paragraph_after_quote?: string;
  sub_section?: BlogSubSection;
  strategies?: BlogStrategies;
  conclusion?: string;
}

export interface BlogSectionData {
  badge: string;
  title_black: string;
  title_teal: string;
  posts: BlogPostItem[];
  button_text: string;
  button_link: string;
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface PageMeta {
  title: string;
  pageName: string;
  metadata: {
    title: string;
    description: string;
  };
  components: PageComponent[];
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface BreadcrumbData {
  title?: string;
  background_image: string;
  background_alt: string;
  items: BreadcrumbItem[];
}

export interface MissionVisionItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
  points?: string[];
}

export interface MissionVisionData {
  eyebrow?: string;
  title_black?: string;
  title_teal?: string;
  items?: MissionVisionItem[];
}

export interface ContactOfficeInfo {
  logo?: string;
  title: string;
  address_lines: string[];
  phone_label: string;
  phone: string;
  phone_href: string;
  email_label: string;
  email: string;
  email_href: string;
  working_hours_label: string;
  working_hours_lines: string[];
}

export interface ContactSectionData {
  eyebrow?: string;
  top_eyebrow?: string;
  top_heading_black1?: string;
  top_heading_black2?: string;
  top_heading_teal1?: string;
  top_heading_teal2?: string;
  office_info?: ContactOfficeInfo;
  map_embed_url?: string;
  form_eyebrow?: string;
  form_heading_black1?: string;
  form_heading_black2?: string;
  form_heading_teal1?: string;
  form_heading_teal2?: string;
  form_description?: string;
  form_button_text?: string;
  form_options?: string[];
  title_black?: string;
  title_teal?: string;
  description?: string;
}

export interface EnquireHighlightItem {
  icon: string;
  title_line1: string;
  title_line2: string;
}

export interface EnquireFormData {
  eyebrow?: string;
  heading_black?: string;
  heading_teal?: string;
  button_text?: string;
  options?: string[];
}

export interface EnquireNowSectionData {
  eyebrow: string;
  heading_black: string;
  heading_teal: string;
  description: string;
  highlights: EnquireHighlightItem[];
  form: EnquireFormData;
}

export interface ServicesIntroData {
  eyebrow?: string;
  title_line1?: string;
  title_line2?: string;
  title_teal?: string;
  description?: string;
  image?: string;
  image_alt?: string;
}

export interface ServiceOfferItem {
  number: string;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceStatItem {
  value: string;
  label: string;
}

export interface ServiceDetailData {
  slug: string;
  number: string;
  name: string;
  hero_eyebrow?: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta_text: string;
  hero_cta_link: string;
  hero_image: string;
  hero_image_alt?: string;
  
  overview_eyebrow?: string;
  overview_title: string;
  overview_description: string;
  overview_image: string;
  overview_image_alt?: string;

  offer_eyebrow?: string;
  offer_image: string;
  offer_image_alt?: string;
  offer_items: ServiceOfferItem[];

  process_eyebrow?: string;
  process_title: string;
  process_description: string;
  process_steps: ServiceProcessStep[];

  why_eyebrow?: string;
  why_title: string;
  why_description: string;
  why_image: string;
  why_image_alt?: string;
  stats: ServiceStatItem[];
}

export interface SiteSections {
  hero: HeroSectionData;
  about: AboutSectionData;
  services: ServicesSectionData;
  testimonials: TestimonialsSectionData;
  blog: BlogSectionData;
  breadcrumb: BreadcrumbData;
  contact?: ContactSectionData;
  missionVision?: MissionVisionData;
  servicesIntro?: ServicesIntroData;
  serviceDetails?: Record<string, ServiceDetailData>;
  blogDetails?: Record<string, BlogDetailData>;
  enquireNow?: EnquireNowSectionData;
}

export interface SitePages {
  home: PageMeta;
  about?: PageMeta;
  services?: PageMeta;
  testimonials?: PageMeta;
  blog?: PageMeta;
  contact?: PageMeta;
  enquireNow?: PageMeta;
  serviceDetail?: PageMeta;
  blogDetail?: PageMeta;
}

export interface TemplateComponents {
  pages: SitePages;
  sections: SiteSections;
}

export interface SiteData {
  common: {
    Header: HeaderData;
    Footer: FooterData;
    BackToTop: BackToTopData;
  };
  categories: {
    HRConsulting: {
      templateComponents: {
        'template-1': TemplateComponents;
      };
    };
  };
}

export const siteJson: SiteData = data as unknown as SiteData;
export const common = siteJson.common;
export const template = siteJson.categories.HRConsulting.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;

export function toSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

