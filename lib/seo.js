import { SITE_URL } from '@/app/services/brandData';

// Metadata for a plain page: own title/description, a canonical URL, and share-card tags
// that carry the logo image. (Next replaces openGraph/twitter wholesale per page, so each
// page has to repeat them or it loses the image set in the root layout.)
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
      siteName: '24x7 Repair Support',
      locale: 'en_IN',
      title,
      description,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: '24x7 Repair Support - AC Repair & Service Hyderabad' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
