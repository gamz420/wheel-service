import Image from 'next/image';
import Link from 'next/link';

import { serviceCategories } from '@/entities/service/data';
import { formatPrice, radiusPrices } from '@/entities/service/prices';
import { galleryWorks } from '@/entities/service/works';
import { faqItems } from '@/shared/config/faq';
import {
  phoneHref,
  siteConfig,
  telegramHref,
  whatsappHref,
} from '@/shared/config/site';
import { ActionLink } from '@/shared/ui/ActionLink';
import { Icon } from '@/shared/ui/Icon';
import { SectionHeading } from '@/shared/ui/SectionHeading';

import { BeforeAfterSlider } from './BeforeAfterSlider';
import { BookingForm } from './BookingForm';
import styles from './Sections.module.scss';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroTexture} aria-hidden="true" />
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Махачкала • Хушет</span>
          <h1>
            Покраска и <span>восстановление дисков</span> полного цикла
          </h1>
          <p className={styles.heroLead}>
            Wheel Service — шиномонтаж, ремонт шин, правка, сварка, порошковая
            покраска и восстановление дисков любой сложности.
          </p>

          <div className={styles.heroActions}>
            <ActionLink href="/order" size="lg" goal="hero_order_click">
              <Icon name="calendar" /> Записаться
            </ActionLink>
            <ActionLink href={whatsappHref} variant="secondary" size="lg" goal="hero_whatsapp_click">
              <Icon name="whatsapp" /> WhatsApp
            </ActionLink>
            <ActionLink href={siteConfig.mapUrl} variant="secondary" size="lg" goal="hero_map_click">
              <Icon name="map" /> Маршрут
            </ActionLink>
          </div>

          <div className={styles.heroMeta}>
            <div>
              <Icon name="pin" />
              <span>{siteConfig.shortAddress}</span>
            </div>
            <div>
              <Icon name="clock" />
              <span>{siteConfig.workHours}</span>
            </div>
            <div>
              <Icon name="shield" />
              <span>Гарантия {siteConfig.guarantee}</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageCard}>
            <Image
              src="/images/work-color-collection.webp"
              alt="Разные цвета и покрытия"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
            <div className={styles.heroImageBadge}>
              <span>01</span>
              <strong>Ремонт + покраска</strong>
              <small>в одном месте</small>
            </div>
          </div>
          <div className={styles.heroAccent} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Услуги"
          title="Всё, что нужно колёсам — от прокола до полного восстановления"
          description="Основной акцент — на покраске и восстановлении дисков. Шиномонтаж, ремонт и подбор можно сделать в том же сервисе."
        />

        <div className={styles.servicesGrid}>
          {serviceCategories.map((category, index) => (
            <article
              key={category.title}
              className={`${styles.serviceCard} ${category.accent ? styles.serviceCardAccent : ''}`}
            >
              <div className={styles.serviceNumber}>0{index + 1}</div>
              <div className={styles.serviceIcon}>
                <Icon
                  name={
                    index === 0 ? 'palette' : index === 1 ? 'tool' : index === 2 ? 'shield' : 'check'
                  }
                />
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {!full && (
          <div className={styles.sectionAction}>
            <ActionLink href="/services" variant="ghost">
              Все услуги <Icon name="arrow" />
            </ActionLink>
          </div>
        )}
      </div>
    </section>
  );
}

export function AdvantagesSection() {
  const advantages = [
    {
      icon: 'tool' as const,
      title: 'Полный цикл',
      text: 'Правка, сварка, пескоструй, покраска, лак и контроль в одном месте.',
    },
    {
      icon: 'palette' as const,
      title: 'Любой цвет',
      text: 'Порошковая покраска дисков, суппортов и металлических деталей.',
    },
    {
      icon: 'camera' as const,
      title: 'Реальные работы',
      text: 'Показываем результат на фотографиях, без стоковых изображений и обещаний.',
    },
    {
      icon: 'shield' as const,
      title: 'Гарантия 1 год',
      text: 'Без предоплаты — расчёт после выполнения и приёмки работ.',
    },
  ];

  return (
    <section className={`${styles.advantages} section section--compact`}>
      <div className="container">
        <div className={styles.advantagesGrid}>
          {advantages.map((item) => (
            <article key={item.title}>
              <span><Icon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterSection() {
  return (
    <section className={`${styles.beforeAfter} section`} id="before-after">
      <div className={`container ${styles.beforeAfterGrid}`}>
        <BeforeAfterSlider />
        <div className={styles.beforeAfterContent}>
          <SectionHeading
            eyebrow="До / После"
            title="Внешний вид, который снова хочется рассматривать"
            description="Сравните состояние диска до и после восстановления. Точный перечень работ и стоимость мастер определяет после осмотра."
          />
          <div className={styles.workDetails}>
            <div>
              <span>Что сделано</span>
              <strong>Подготовка, покраска, проточка и лак</strong>
            </div>
            <div>
              <span>Гарантия</span>
              <strong>1 год</strong>
            </div>
            <div>
              <span>Стоимость</span>
              <strong>После осмотра</strong>
            </div>
          </div>
          <div className={styles.inlineActions}>
            <ActionLink href="/works">Смотреть все работы <Icon name="arrow" /></ActionLink>
            <ActionLink href={whatsappHref} variant="ghost" goal="before_after_whatsapp_click">
              Оценить по фото
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PriceSection({ full = false }: { full?: boolean }) {
  const rows = full ? radiusPrices : radiusPrices.slice(0, 6);

  return (
    <section className={`${styles.prices} section`} id="prices">
      <div className="container">
        <div className={styles.priceHeader}>
          <SectionHeading
            eyebrow="Цены"
            title="Честные ориентиры по радиусу"
            description="Стоимость может меняться в зависимости от состояния, сложности повреждения, типа автомобиля, цвета и дополнительных работ."
          />
          <div className={styles.priceHighlight}>
            <span>Покраска дисков</span>
            <strong>от 10 000 ₽</strong>
            <small>R13–14</small>
          </div>
        </div>

        <div className={styles.priceTableWrap}>
          <table className={styles.priceTable}>
            <thead>
              <tr>
                <th>Радиус</th>
                <th>Балансировка</th>
                <th>Шиномонтаж</th>
                <th className={styles.accentColumn}>Покраска дисков</th>
                <th>Правка дисков</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.radius}>
                  <th>{row.radius}</th>
                  <td>{formatPrice(row.balancing)}</td>
                  <td>{formatPrice(row.tireService)}</td>
                  <td className={styles.accentColumn}>{formatPrice(row.painting)}</td>
                  <td>{formatPrice(row.wheelRepair)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.priceNote}>
          <Icon name="shield" />
          <p>
            Цены указаны как ориентир. Точная стоимость согласовывается до начала работ.
            Предоплаты нет, оплата после оказания услуги.
          </p>
          {!full && (
            <ActionLink href="/prices" variant="ghost">
              Полный прайс <Icon name="arrow" />
            </ActionLink>
          )}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    'Осмотр',
    'Диагностика дефектов',
    'Правка и сварка',
    'Пескоструй',
    'Порошковая покраска',
    'Лак / проточка',
    'Контроль качества',
    'Выдача клиенту',
  ];

  return (
    <section className={`${styles.process} section`}>
      <div className="container">
        <SectionHeading
          eyebrow="Процесс"
          title="Понятный путь от повреждения до готового диска"
          description="Набор этапов зависит от состояния диска. Ненужные работы не добавляются — мастер сначала проводит осмотр."
        />
        <ol className={styles.processGrid}>
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function GallerySection({ full = false }: { full?: boolean }) {
  const works = full ? galleryWorks : galleryWorks.slice(0, 6);

  return (
    <section className={`${styles.gallery} section`} id="works">
      <div className="container">
        <SectionHeading
          eyebrow="Портфолио"
          title="Реальные диски, реальные цвета, реальные результаты"
          description="В галерее — работы Wheel Service. По фотографии можно выбрать направление цвета и обсудить похожий результат для вашего автомобиля."
        />
        <div className={styles.galleryGrid}>
          {works.map((work, index) => (
            <figure key={work.src} className={index === 0 || index === 5 ? styles.galleryLarge : undefined}>
              <Image src={work.src} alt={work.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
              <figcaption>
                <span>{work.title}</span>
                <small>Wheel Service</small>
              </figcaption>
            </figure>
          ))}
        </div>
        {!full && (
          <div className={styles.sectionAction}>
            <ActionLink href="/works" variant="ghost">
              Открыть галерею <Icon name="arrow" />
            </ActionLink>
          </div>
        )}
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className={`${styles.faq} section`}>
      <div className={`container ${styles.faqGrid}`}>
        <div>
          <SectionHeading
            eyebrow="Частые вопросы"
            title="Сначала отвечаем, потом начинаем работу"
            description="Не нашли ответ — отправьте фотографию диска в мессенджер и получите предварительную консультацию."
          />
          <ActionLink href={telegramHref} variant="ghost" goal="faq_telegram_click">
            Написать в Telegram <Icon name="telegram" />
          </ActionLink>
        </div>
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>{item.question}<span>+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ showForm = true }: { showForm?: boolean }) {
  return (
    <section className={`${styles.contacts} section`} id="contacts">
      <div className="container">
        <SectionHeading
          eyebrow="Контакты"
          title="Приезжайте на осмотр или отправьте фото"
          description="Мастер поможет оценить объём работ, сориентирует по цене и подберёт удобное время."
        />

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCards}>
              <article>
                <Icon name="phone" />
                <span>Телефоны</span>
                {siteConfig.phones.map((phone) => (
                  <a href={`tel:+${phone.value}`} key={phone.value}>{phone.label}</a>
                ))}
              </article>
              <article>
                <Icon name="pin" />
                <span>Адрес</span>
                <strong>{siteConfig.address}</strong>
              </article>
              <article>
                <Icon name="clock" />
                <span>График</span>
                <strong>{siteConfig.workHours}</strong>
              </article>
              <article>
                <Icon name="shield" />
                <span>Условия</span>
                <strong>Гарантия 1 год • без предоплаты</strong>
              </article>
            </div>

            <div className={styles.contactActions}>
              <ActionLink href={phoneHref} goal="contacts_phone_click"><Icon name="phone" /> Позвонить</ActionLink>
              <ActionLink href={whatsappHref} variant="ghost" goal="contacts_whatsapp_click"><Icon name="whatsapp" /> WhatsApp</ActionLink>
              <ActionLink href={telegramHref} variant="ghost" goal="contacts_telegram_click"><Icon name="telegram" /> Telegram</ActionLink>
            </div>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              src={siteConfig.mapEmbedUrl}
              title="Wheel Service на Яндекс Картах"
              loading="lazy"
              allowFullScreen
            />
            <div className={styles.mapOverlay}>
              <strong>Wheel Service</strong>
              <span>{siteConfig.shortAddress}</span>
              <ActionLink href={siteConfig.mapUrl} variant="dark" goal="map_route_click">
                Построить маршрут <Icon name="arrow" />
              </ActionLink>
            </div>
          </div>
        </div>

        {showForm && (
          <div className={styles.orderGrid}>
            <div className={styles.orderCopy}>
              <span>Быстрая запись</span>
              <h2>Опишите задачу — заявка сразу откроется в WhatsApp</h2>
              <p>
                Форма не отправляет данные на сервер. После нажатия откроется WhatsApp с готовым сообщением,
                которое останется только отправить мастеру.
              </p>
              <ul>
                <li><Icon name="check" /> 4 обязательных действия максимум</li>
                <li><Icon name="check" /> Можно добавить автомобиль и радиус</li>
                <li><Icon name="check" /> Фото прикрепляется уже в WhatsApp</li>
              </ul>
            </div>
            <BookingForm />
          </div>
        )}
      </div>
    </section>
  );
}

export function ExteriorSection() {
  return (
    <section className={`${styles.exterior} section`}>
      <div className={`container ${styles.exteriorGrid}`}>
        <div className={styles.exteriorImage}>
          <Image
            src="/images/service-exterior.webp"
            alt="Фасад Wheel Service в Махачкале"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Как нас найти"
            title="Сервис с заметной жёлтой вывеской"
            description="5-я Гражданская улица, 68, квартал Перестройка. На фасаде — вывески «Шиномонтаж» и «Покраска дисков»."
          />
          <ActionLink href={siteConfig.mapUrl} size="lg" goal="exterior_map_click">
            <Icon name="map" /> Открыть Яндекс.Карты
          </ActionLink>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className={styles.pageHero}>
      <div className="container">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.pageHeroActions}>
          <ActionLink href="/order"><Icon name="calendar" /> Записаться</ActionLink>
          <ActionLink href={whatsappHref} variant="secondary" goal="page_hero_whatsapp_click"><Icon name="whatsapp" /> Оценить по фото</ActionLink>
        </div>
      </div>
    </section>
  );
}

export function ServiceLinks() {
  const links = [
    ['pokraska-diskov', 'Порошковая покраска дисков'],
    ['remont-diskov', 'Ремонт и восстановление дисков'],
    ['shinomontazh', 'Шиномонтаж'],
    ['remont-shin', 'Ремонт шин'],
    ['peskostruy-diskov', 'Пескоструйная очистка'],
    ['almaznaya-protochka', 'Алмазная проточка'],
    ['pokraska-supportov', 'Покраска суппортов'],
    ['prodazha-shin', 'Продажа шин'],
    ['prodazha-diskov', 'Продажа дисков'],
  ];

  return (
    <section className={`${styles.serviceLinks} section section--compact`}>
      <div className="container">
        <SectionHeading eyebrow="SEO-разделы" title="Подробнее о каждой услуге" />
        <div className={styles.serviceLinkGrid}>
          {links.map(([slug, title]) => (
            <Link key={slug} href={`/services/${slug}`}>
              <span>{title}</span><Icon name="arrow" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
