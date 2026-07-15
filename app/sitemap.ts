import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { insights } from '@/data/insights';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/work',
    '/services',
    '/about',
    '/insights',
    '/contact',
    '/privacy',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : route === '/work' ? 0.9 : 0.7,
  }));

  const workRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified: new Date(`${project.year}-01-01`),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const insightRoutes = insights.map((insight) => ({
    url: `${siteConfig.url}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: 'yearly' as const,
    priority: 0.65,
  }));

  return [...routes, ...workRoutes, ...insightRoutes];
}
