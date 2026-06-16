import type { MetadataRoute } from 'next';

import { servicePages } from '@/entities/service/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const staticPages = ['', '/services', '/prices', '/works', '/contacts', '/order'];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : 0.8,
    })),
    ...servicePages.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: service.slug === 'pokraska-diskov' ? 0.9 : 0.7,
    })),
  ];
}
