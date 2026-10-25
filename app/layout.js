import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "24x7 AC Repair & Service Hyderabad | Hitachi, LG, Daikin, Voltas, O General & More",
  description: "24x7 AC Repair & Service Center in Hyderabad. Expert doorstep servicing, jet pump cleaning, gas charging & PCB repair for Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star, and all brands. Call 1234561232. Free visiting charge.",
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
    title: "24x7 AC Repair & Service Hyderabad | Hitachi, LG, Daikin, Voltas, O General & More",
    description: "24x7 AC Repair & Service Center in Hyderabad. Expert doorstep servicing, jet pump cleaning, gas charging & PCB repair for Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star, and all brands. Call 1234561232. Free visiting charge.",
    images: [
      {
        url: '/logo.png?v=5',
        width: 949,
        height: 609,
        alt: '24x7 Repair Support Logo',
      },
    ],
  },
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
