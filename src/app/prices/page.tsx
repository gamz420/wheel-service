import type { Metadata } from 'next';

import { extraPrices } from '@/entities/service/prices';
import { ContactSection, PageHero, PriceSection } from '@/widgets/Sections';

import styles from './prices.module.scss';

export const metadata: Metadata = {
  title: 'Цены',
  description: 'Цены на шиномонтаж, балансировку, покраску и правку дисков R13–R23 в Wheel Service.',
  alternates: { canonical: '/prices' },
};

export default function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="Прайс"
        title="Ориентиры без скрытой предоплаты"
        description="Цены зависят от радиуса и сложности. До начала работ мастер осматривает колёса и согласовывает итоговую сумму."
      />
      <PriceSection full />
      <section className={`section ${styles.extras}`}>
        <div className="container">
          <h2>Дополнительные работы</h2>
          <div className={styles.grid}>
            {extraPrices.map((item) => (
              <div key={item.title}>
                <span>{item.title}</span>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
          <p>Цены могут меняться в зависимости от сложности работ, на усмотрение мастера.</p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
