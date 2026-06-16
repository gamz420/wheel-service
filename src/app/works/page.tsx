import type { Metadata } from 'next';

import { BeforeAfterSection, ContactSection, GallerySection, PageHero } from '@/widgets/Sections';

export const metadata: Metadata = {
  title: 'Примеры работ',
  description: 'Фото покраски, восстановления и алмазной проточки дисков в Wheel Service.',
  alternates: { canonical: '/works' },
};

export default function WorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Портфолио"
        title="Результат видно до первого слова"
        description="Реальные фотографии покрашенных и восстановленных дисков. Отправьте понравившийся пример мастеру — обсудим похожий цвет и покрытие."
      />
      <BeforeAfterSection />
      <GallerySection full />
      <ContactSection />
    </>
  );
}
