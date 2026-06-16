import type { Metadata } from 'next';

import { ContactSection, ExteriorSection, PageHero } from '@/widgets/Sections';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Адрес, телефоны, WhatsApp, Telegram и маршрут до Wheel Service в Махачкале.',
  alternates: { canonical: '/contacts' },
};

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Связаться и построить маршрут"
        description="Позвоните, напишите в WhatsApp или Telegram, либо оставьте заявку. Работаем с 09:00 до 21:00."
      />
      <ExteriorSection />
      <ContactSection />
    </>
  );
}
