import type { Metadata } from 'next';

import { BookingForm } from '@/widgets/BookingForm';
import { PageHero } from '@/widgets/Sections';

import styles from './order.module.scss';

export const metadata: Metadata = {
  title: 'Запись на услугу',
  description: 'Запись на покраску дисков, восстановление, шиномонтаж или ремонт шин в Wheel Service.',
  alternates: { canonical: '/order' },
};

export default function OrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Запись"
        title="Оставьте данные — продолжим в WhatsApp"
        description="Заполните короткую форму. Сайт сформирует сообщение, после чего вы сможете добавить фотографии и отправить его мастеру."
      />
      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.wrap}><BookingForm /></div>
        </div>
      </section>
    </>
  );
}
