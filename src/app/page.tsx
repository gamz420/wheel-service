import type { Metadata } from 'next';

import { faqItems } from '@/shared/config/faq';
import { siteConfig } from '@/shared/config/site';
import {
  AdvantagesSection,
  BeforeAfterSection,
  ContactSection,
  ExteriorSection,
  FAQSection,
  GallerySection,
  HeroSection,
  PriceSection,
  ProcessSection,
  ServicesSection,
} from '@/widgets/Sections';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    absolute: 'Wheel Service — покраска дисков, ремонт и шиномонтаж в Махачкале',
  },
  description:
    'Порошковая покраска, ремонт и восстановление дисков, шиномонтаж и ремонт шин в Махачкале и Хушете. Запись через WhatsApp и Telegram.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Wheel Service — покраска дисков, ремонт и шиномонтаж в Махачкале',
    description: siteConfig.description,
    url: '/',
  },
};

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteUrl}/#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <BeforeAfterSection />
      <PriceSection />
      <ProcessSection />
      <GallerySection />
      <FAQSection />
      <ExteriorSection />
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
