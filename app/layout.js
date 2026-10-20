import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home Care AC Service Center | Vijay Park, Maujpur Metro, Shahdara, Delhi",
  description: "Expert AC, Refrigerator, Washing Machine & Microwave Oven repair based at Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi. Doorstep service with free visiting charge.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/home-care-icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/home-care-logo.png', sizes: '868x673', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Home Care AC Service Center | Vijay Park, Maujpur Metro, Shahdara, Delhi",
    description: "Expert AC, Refrigerator, Washing Machine & Microwave Oven repair based at Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi. Doorstep service with free visiting charge.",
    images: [
      {
        url: '/home-care-logo.png',
        width: 868,
        height: 673,
        alt: 'Home Care AC Service Center Logo',
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
