import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { servicePages } from '@/entities/service/data';
import { whatsappHref } from '@/shared/config/site';
import { ActionLink } from '@/shared/ui/ActionLink';
import { Icon } from '@/shared/ui/Icon';
import { ContactSection, PageHero } from '@/widgets/Sections';

import styles from './service.module.scss';

type Props = {
  params: { slug: string };
};

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
    </>
  );
}
