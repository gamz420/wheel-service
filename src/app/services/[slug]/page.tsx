import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { servicePages } from '@/entities/service/data';
import { siteConfig, whatsappHref } from '@/shared/config/site';
import { ActionLink } from '@/shared/ui/ActionLink';
import { Icon } from '@/shared/ui/Icon';
import { ContactSection, PageHero } from '@/widgets/Sections';

import styles from './service.module.scss';

type Props = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = servicePages.find((item) => item.slug === params.slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = servicePages.find((item) => item.slug === params.slug);

  if (!service) notFound();

  const serviceUrl = `${siteUrl}/services/${service.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'AutomotiveBusiness',
          '@id': `${siteUrl}/#business`,
          name: siteConfig.name,
          telephone: siteConfig.phones.map((phone) => `+${phone.value}`),
          address: siteConfig.address,
        },
        areaServed: ['Махачкала', 'Хушет'],
        serviceType: service.title,
        url: serviceUrl,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'RUB',
          url: serviceUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Услуги',
            item: `${siteUrl}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: serviceUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero eyebrow={service.eyebrow} title={service.title} description={service.description} />
      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.grid}`}>
          <article>
            <h2>Что входит в услугу</h2>
            <p>{service.intro}</p>
            <ul>
              {service.includes.map((item) => (
                <li key={item}><Icon name="check" /><span>{item}</span></li>
              ))}
            </ul>
          </article>

          <aside>
            <span>Почему Wheel Service</span>
            <div className={styles.reasons}>
              {service.reasons.map((reason) => (
                <div key={reason}><Icon name="shield" /><strong>{reason}</strong></div>
              ))}
            </div>
            <ActionLink href={whatsappHref} size="lg" goal={`service_${service.slug}_whatsapp`}>
              <Icon name="whatsapp" /> Получить оценку по фото
            </ActionLink>
          </aside>
        </div>
      </section>
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
