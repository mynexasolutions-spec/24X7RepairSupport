import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://24-7-repair-support.vercel.app";
const SITE_TITLE = "24x7 AC Repair & Service in Hyderabad | Doorstep Cooling Care";
// kept under ~160 characters so Google and WhatsApp don't cut it off
const SITE_DESCRIPTION = "24x7 doorstep AC repair & service in Hyderabad. Gas charging, jet wash, PCB repair with genuine spare parts. Call 1234561232.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "24x7 Repair Support",
  category: "Home Services",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "AC repair Hyderabad",
    "AC service Hyderabad",
    "AC gas charging",
    "AC jet pump cleaning",
    "AC PCB repair",
    "split AC repair",
    "24x7 AC repair near me",
  ],
  icons: {
    icon: [
      { url: '/favicon.ico?v=5' },
      { url: '/logo-icon.png?v=5', sizes: '512x512', type: 'image/png' },
      { url: '/logo.png?v=5', sizes: '949x609', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=5', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "24x7 Repair Support",
    locale: "en_IN",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        // logo on a white 1200x630 background (~60KB) so WhatsApp shows it instead of a transparent PNG
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '24x7 Repair Support - AC Repair & Service Hyderabad',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "24x7 Repair Support",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+911234561232",
  email: "supportxrapair@gmail.com",
  openingHours: "Mo-Su 00:00-23:59",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500023",
    addressCountry: "IN",
  },
  areaServed: "Hyderabad",
  serviceType: ["AC repair", "AC service", "AC gas charging", "AC jet pump cleaning", "AC PCB repair"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
