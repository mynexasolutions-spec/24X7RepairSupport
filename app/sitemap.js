import { brandDetails, SITE_URL } from './services/brandData';

export default function sitemap() {
  const now = new Date();

  const pages = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/service-areas', priority: 0.7 },
    { path: '/about', priority: 0.6 },
    { path: '/contact', priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority,
  }));

  // one entry per real brand page (aliases such as /services/lg-ac are left out on purpose)
  const brandPages = Object.values(brandDetails).map((brand) => ({
    url: `${SITE_URL}/services/${brand.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...pages, ...brandPages];
}
