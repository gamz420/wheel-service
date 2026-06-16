import type { Metadata } from 'next';

import { ContactSection, PageHero, ServiceLinks, ServicesSection } from '@/widgets/Sections';

export const metadata: Metadata = {
  title: 'Услуги',
  description: 'Покраска и восстановление дисков, шиномонтаж, ремонт шин, алмазная проточка и подбор колёс в Wheel Service.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Услуги Wheel Service"
        title="Ремонт, покраска и обслуживание колёс в одном месте"
        description="Выберите направление и отправьте фото для предварительной оценки. Точную стоимость мастер согласует после осмотра."
      />
      <ServicesSection full />
      <ServiceLinks />
      <ContactSection />
    </>
  );
}
