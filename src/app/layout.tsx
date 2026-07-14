import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { servicePages } from '@/entities/service/data';
import { siteConfig } from '@/shared/config/site';
import { Analytics } from '@/widgets/Analytics';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { MobileActionBar } from '@/widgets/MobileActionBar';

import './globals.scss';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Wheel Service — покраска и восстановление дисков в Махачкале',
    template: '%s | Wheel Service',
  },
  description: siteConfig.description,
  keywords: [
    'покраска дисков Махачкала',
    'восстановление дисков Махачкала',
    'шиномонтаж Махачкала',
    'шиномонтаж Хушет',
    'ремонт дисков Махачкала',
    'правка дисков Махачкала',
    'алмазная проточка дисков',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: 'Wheel Service',
    title: 'Wheel Service — покраска и восстановление дисков',
    description: siteConfig.description,
    images: [{ url: '/images/og-wheel-service.jpg', width: 1200, height: 630, alt: 'Wheel Service в Махачкале' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wheel Service — покраска и восстановление дисков',
    description: siteConfig.description,
    images: ['/images/og-wheel-service.jpg'],
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#101010',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': `${siteUrl}/#business`,
    url: siteUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteUrl}/images/og-wheel-service.jpg`,
    telephone: siteConfig.phones.map((phone) => `+${phone.value}`),
    priceRange: '₽₽',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5-я Гражданская улица, 68, квартал Перестройка',
      addressLocality: 'Махачкала',
      addressRegion: 'Республика Дагестан',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    contactPoint: siteConfig.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: `+${phone.value}`,
      contactType: 'customer service',
      areaServed: 'RU-DA',
      availableLanguage: 'ru',
    })),
    areaServed: [
      {
        '@type': 'City',
        name: 'Махачкала',
      },
      {
        '@type': 'Place',
        name: 'Хушет',
      },
    ],
    hasMap: siteConfig.mapUrl,
    sameAs: [`https://t.me/${siteConfig.telegram}`],
    makesOffer: servicePages.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        areaServed: 'Махачкала и Хушет',
        url: `${siteUrl}/services/${service.slug}`,
      },
    })),
  };

  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
