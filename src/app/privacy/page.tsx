import type { Metadata } from 'next';

import { siteConfig } from '@/shared/config/site';
import { PageHero } from '@/widgets/Sections';

import styles from './privacy.module.scss';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Информация об обработке данных при обращении через сайт Wheel Service.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Документы"
        title="Политика конфиденциальности"
        description=""
      />
      <section className={`section ${styles.section}`}>
        <article className={`container ${styles.article}`}>
          <h2>1. Какие данные используются</h2>
          <p>
            При заполнении формы пользователь может указать имя, телефон, сведения об автомобиле и комментарий.
            Сайт формирует текст обращения и открывает WhatsApp. На сервере Wheel Service эта форма не сохраняется.
          </p>

          <h2>2. Цель обработки</h2>
          <p>
            Данные используются только для обратной связи, предварительной оценки услуги, согласования времени и выполнения заказа.
          </p>

          <h2>3. Передача через мессенджеры</h2>
          <p>
            После перехода в WhatsApp или Telegram обработка данных также регулируется правилами соответствующего сервиса.
            Пользователь самостоятельно подтверждает отправку сообщения.
          </p>

          <h2>4. Аналитика и cookies</h2>
          <p>
            Сайт использует Яндекс Метрику, cookies, карту кликов и Вебвизор для анализа посещаемости,
            улучшения навигации и качества сервиса. Эти инструменты могут фиксировать технические данные
            о действиях пользователя на сайте, включая просмотренные страницы, клики и параметры устройства.
          </p>

          <h2>5. Контакты</h2>
          <p>
            По вопросам обработки данных: {siteConfig.phones[0].label}. Адрес: {siteConfig.address}.
          </p>
        </article>
      </section>
    </>
  );
}
