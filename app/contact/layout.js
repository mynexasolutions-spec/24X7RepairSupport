import { pageMetadata } from '@/lib/seo';

// contact/page.js is a client component, so its metadata has to live in this layout
export const metadata = pageMetadata({
  title: 'Contact 24x7 Repair Support | Book AC Service in Hyderabad',
  description: 'Book AC repair or service in Hyderabad. Call 9014998582 or WhatsApp us. Telangana 500023.',
  path: '/contact',
});

export default function ContactLayout({ children }) {
  return children;
}
