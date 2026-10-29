import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import ServiceAreas from '@/components/ServiceAreas';
import BrandBookingForm from '@/components/BrandBookingForm';
import { brandDetails, getBrandData, getBrandSeo, SERVICE_LOCALITIES, SITE_URL } from '../brandData';

const SEVEN_BRANDS = ['hitachi', 'lg', 'daikin', 'o-general', 'voltas', 'samsung', 'blue-star', 'mitsubishi'];

const isOtherBrand = (slug) =>
  !slug ||
  slug === 'other-brands' ||
  slug === 'other' ||
  slug === 'other-brand' ||
  slug === 'other-brand-ac' ||
  slug === 'carrier' ||
  slug === 'lloyd' ||
  slug === 'panasonic' ||
  slug === 'all-brands';

export async function generateStaticParams() {
  const slugs = [];
  for (const key of Object.keys(brandDetails)) {
    if (key === 'other-brands' || isOtherBrand(key)) continue;
    slugs.push({ brand: key });
    if (brandDetails[key].aliases) {
      for (const alias of brandDetails[key].aliases) {
        if (alias !== key && !isOtherBrand(alias)) {
          slugs.push({ brand: alias });
        }
      }
    }
  }
  return slugs;
}

export async function generateMetadata({ params }) {
  const { brand: brandSlug } = await params;
  if (isOtherBrand(brandSlug)) {
    return {};
  }
  const brand = getBrandData(brandSlug);

  if (!brand) {
    return {
      title: 'AC Service & Repair Center in Hyderabad | 24x7 Repair Support',
      description: 'Expert air conditioner servicing, repair, jet cleaning and gas refilling across Hyderabad.',
    };
  }

  const seo = getBrandSeo(brand);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    // aliases like /services/lg-ac all point search engines at the one real page
    alternates: { canonical: seo.path },
    openGraph: {
      type: 'website',
      url: seo.path,
      siteName: '24x7 Repair Support',
      locale: 'en_IN',
      title: seo.title,
      description: seo.description,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${seo.name} AC Service in Hyderabad - 24x7 Repair Support` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function BrandServicePage({ params }) {
  const { brand: brandSlug } = await params;

  if (isOtherBrand(brandSlug)) {
    const randomBrand = SEVEN_BRANDS[Math.floor(Math.random() * SEVEN_BRANDS.length)];
    redirect(`/services/${randomBrand}`);
  }

  const brand = getBrandData(brandSlug);

  if (!brand) {
    notFound();
  }

  const seo = getBrandSeo(brand);
  const pageUrl = `${SITE_URL}${seo.path}`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${seo.name} AC Service & Repair in Hyderabad`,
      serviceType: `${seo.name} AC repair and service`,
      brand: { '@type': 'Brand', name: brand.brand },
      description: seo.description,
      url: pageUrl,
      image: `${SITE_URL}${brand.image}`,
      areaServed: SERVICE_LOCALITIES.map((place) => ({ '@type': 'Place', name: `${place}, Hyderabad` })),
      // the same starting prices shown in the "Service Charges" section of this page
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${seo.name} AC service prices`,
        itemListElement: [
          ['Jet Pump Foam Cleaning', '499'],
          ['Gas Refill & Leak Repair', '1499'],
          ['PCB Board & Sensor Repair', '799'],
          ['Installation & Relocation', '699'],
        ].map(([service, price]) => ({
          '@type': 'Offer',
          priceCurrency: 'INR',
          price,
          itemOffered: { '@type': 'Service', name: `${seo.name} ${service}` },
        })),
      },
      provider: {
        '@type': 'HomeAndConstructionBusiness',
        name: '24x7 Repair Support',
        url: SITE_URL,
        image: `${SITE_URL}/og-image.jpg`,
        logo: `${SITE_URL}/logo.png`,
        priceRange: '₹₹',
        openingHours: 'Mo-Su 00:00-23:59',
        telephone: '+911234561232',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500023',
          addressCountry: 'IN',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: `${brand.brand} AC Service`, item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: brand.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ];

  return (
    <div className={`brand-service-page brand-page-${brand.slug}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Breadcrumb Strip */}
      <div className="brand-breadcrumb-strip">
        <div className="container">
          <ul className="breadcrumb-nav">
            <li><Link href="/">Home</Link></li>
            <li><i className="fa-solid fa-chevron-right"></i></li>
            <li><Link href="/services">Services</Link></li>
            <li><i className="fa-solid fa-chevron-right"></i></li>
            <li className="active">{brand.brand} AC Service</li>
          </ul>
        </div>
      </div>

      {/* Brand Hero Banner */}
      <section className="brand-hero-section">
        <div className="container">
          <div className="brand-hero-grid">
            <div className="brand-hero-text">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {brand.logo && (
                  <div style={{ background: '#ffffff', padding: '6px 14px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.12)' }}>
                    <img src={brand.logo} alt={`${brand.brand} Logo`} style={{ height: '30px', width: 'auto', display: 'block' }} />
                  </div>
                )}
                <div className="brand-hero-badge" style={{ margin: 0 }}>
                  <i className="fa-solid fa-snowflake"></i> {brand.badge}
                </div>
              </div>

              {/* Mobile Brand Hero Image Card (Placed directly under badge / above title as requested) */}
              <div className="brand-hero-media brand-hero-media-mobile">
                <div className="brand-hero-image-wrapper">
                  <img
                    src={brand.image}
                    alt={brand.imageAlt}
                    className="brand-hero-img"
                  />
                  <div className="brand-hero-floating-badge">
                    <i className="fa-solid fa-award"></i> {brand.highlightBadge}
                  </div>
                </div>
              </div>

              <h1>{seo.name} AC Service &amp; Repair in Hyderabad</h1>
              <p className="brand-hero-tagline">{brand.tagline}</p>
              <p className="brand-hero-description">{brand.heroDesc}</p>

              {/* Quick Trust Highlights */}
              <div className="brand-trust-badges">
                <div className="trust-badge-item">
                  <i className="fa-solid fa-certificate" style={{ color: '#023a6e' }}></i>
                  <span>100% Genuine Spares</span>
                </div>
                <div className="trust-badge-item">
                  <i className="fa-solid fa-star" style={{ color: '#F59E0B' }}></i>
                  <span>4.9 / 5 Rating</span>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="brand-hero-actions">
                <a
                  href={`https://wa.me/911234561232?text=${encodeURIComponent(brand.whatsappMsg)}`}
                  className="btn btn-hero-book"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i> Book {brand.brand} Service
                </a>
                <a href="tel:1234561232" className="btn btn-hero-call">
                  <i className="fa-solid fa-phone"></i> Call 1234561232
                </a>
              </div>
            </div>

            {/* Desktop Brand Hero Image Card */}
            <div className="brand-hero-media brand-hero-media-desktop">
              <div className="brand-hero-image-wrapper">
                <img
                  src={brand.image}
                  alt={brand.imageAlt}
                  className="brand-hero-img"
                />
                <div className="brand-hero-floating-badge">
                  <i className="fa-solid fa-award"></i> {brand.highlightBadge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Covered Strip */}
      <section className="brand-models-section">
        <div className="container">
          <div className="brand-models-inner">
            <span className="brand-models-title">
              <i className="fa-solid fa-wrench" style={{ color: '#FF5E00' }}></i> {brand.brand} Models Serviced:
            </span>
            <div className="brand-models-tags">
              {brand.models.map((model, idx) => (
                <span key={idx} className="brand-model-tag">
                  <i className="fa-solid fa-check"></i> {model}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems We Fix */}
      <section className="brand-problems-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span style={{ color: '#FF5E00', fontWeight: 800, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Specialized Troubleshooting
            </span>
            <h2 style={{ marginTop: '8px' }}>
              Common {brand.brand} Problems <span className="red-text">We Resolve</span>
            </h2>
            <p>
              Same-day doorstep troubleshooting with advanced diagnostic testing and 100% original {brand.brand} spare parts.
            </p>
          </div>

          <div className="brand-problems-grid">
            {brand.commonProblems.map((prob, idx) => (
              <div key={idx} className="brand-problem-card">
                <div className="problem-icon">
                  <i className={prob.icon}></i>
                </div>
                <div className="problem-content">
                  <h3>{prob.title}</h3>
                  <p>{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Service Pricing */}
      <section className="service-charges section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-title text-center">
            <span style={{ color: '#FF5E00', fontWeight: 800, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Transparent Rates
            </span>
            <h2 style={{ marginTop: '8px' }}>
              {brand.brand} AC <span className="red-text">Service Charges</span>
            </h2>
            <p>
              Standardized, transparent rates across all 50+ areas in Hyderabad.
            </p>
          </div>

          <div className="charges-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
            {/* Card 1: AC Jet Foam Wash */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-jet-wash.jpg" alt={`${brand.brand} Jet Pump Foam Wash`} />
                <div className="icon-circle"><i className="fa-solid fa-soap"></i></div>
              </div>
              <div className="card-content">
                <h3>{brand.brand} Jet Pump<br />Foam Cleaning</h3>
              </div>
            </div>

            {/* Card 2: AC Gas Refill */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-gas-charging.jpg" alt={`${brand.brand} Gas Refilling & Leak Repair`} />
                <div className="icon-circle"><i className="fa-solid fa-gauge-high"></i></div>
              </div>
              <div className="card-content">
                <h3>{brand.brand} Gas Refill<br />&amp; Leak Repair</h3>
              </div>
            </div>

            {/* Card 3: Inverter PCB & Repair */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-repair-clean.jpg" alt={`${brand.brand} PCB Board & Sensor Repair`} />
                <div className="icon-circle"><i className="fa-solid fa-microchip"></i></div>
              </div>
              <div className="card-content">
                <h3>{brand.brand} PCB Board<br />&amp; Sensor Repair</h3>
              </div>
            </div>

            {/* Card 4: Installation / Relocation */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-installation.jpg" alt={`${brand.brand} Installation & Relocation`} />
                <div className="icon-circle"><i className="fa-solid fa-screwdriver-wrench"></i></div>
              </div>
              <div className="card-content">
                <h3>{brand.brand} Installation<br />&amp; Relocation</h3>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a
              href={`https://wa.me/911234561232?text=${encodeURIComponent(brand.whatsappMsg)}`}
              className="btn btn-primary"
              style={{ padding: '14px 34px', fontSize: '15px' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i> Book {brand.brand} Service at These Rates
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Brand */}
      <section className="brand-why-choose section-padding">
        <div className="container">
          <div className="brand-why-grid">
            <div className="brand-why-text">
              <div className="section-title text-left" style={{ textAlign: 'left', marginBottom: '24px' }}>
                <span style={{ color: '#FF5E00', fontWeight: 800, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Certified Expertise
                </span>
                <h2 style={{ marginTop: '8px' }}>
                  Why Hyderabad Chooses Us for <span className="red-text">{brand.brand} AC</span> Servicing
                </h2>
              </div>
              <p style={{ color: '#4A5568', fontSize: '15.5px', lineHeight: 1.7, marginBottom: '20px' }}>
                Our technicians carry specialized diagnostic equipment and genuine factory spare parts in mobile service vans stationed across Hyderabad, delivering unmatched service excellence.
              </p>

              <div className="brand-feature-checklist">
                <div className="feature-check-row">
                  <div className="check-icon-circle"><i className="fa-solid fa-check"></i></div>
                  <div>
                    <h4>100% Genuine {brand.brand} Replacement Parts</h4>
                    <p>Only authentic factory components with barcode verification and replacement warranty.</p>
                  </div>
                </div>

                <div className="feature-check-row">
                  <div className="check-icon-circle"><i className="fa-solid fa-check"></i></div>
                  <div>
                    <h4>Zero Visiting &amp; Inspection Fee</h4>
                    <p>Pay only for authorized services and parts after inspecting our upfront quote.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="brand-why-card">
              <div className="quick-booking-box">
                <div className="booking-box-header">
                  <i className="fa-solid fa-calendar-check" style={{ fontSize: '28px', color: '#FF5E00' }}></i>
                  <h3>Book {brand.brand} Service Now</h3>
                  <p>Certified technicians across Hyderabad</p>
                </div>
                <div className="booking-box-body">
                  <div className="booking-feature-pill">
                    <i className="fa-solid fa-star" style={{ color: '#F59E0B' }}></i> Verified AC Engineers
                  </div>
                </div>
                <div className="booking-box-actions">
                  <a
                    href={`https://wa.me/911234561232?text=${encodeURIComponent(brand.whatsappMsg)}`}
                    className="btn btn-booking-wa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Instant WhatsApp Booking
                  </a>
                  <a href="tel:1234561232" className="btn btn-booking-call">
                    <i className="fa-solid fa-phone"></i> Call 1234561232
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive WhatsApp Booking Form */}
      <BrandBookingForm brand={brand} />

      {/* Brand FAQs */}
      <section className="brand-faqs-section section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-title text-center">
            <span style={{ color: '#FF5E00', fontWeight: 800, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Frequently Asked Questions
            </span>
            <h2 style={{ marginTop: '8px' }}>
              {brand.brand} AC Service <span className="red-text">FAQs</span>
            </h2>
            <p>Everything you need to know about our specialized {brand.brand} air conditioner doorstep care.</p>
          </div>

          <div className="brand-faqs-container">
            {brand.faqs.map((faq, idx) => (
              <div key={idx} className="brand-faq-item">
                <h3>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FF5E00' }}></i> {faq.q}
                </h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locality coverage - the text people search for ("<brand> AC service in <area>") */}
      <section className="brand-local-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span style={{ color: '#FF5E00', fontWeight: 800, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Near You
            </span>
            <h2 style={{ marginTop: '8px' }}>
              {seo.name} AC Service Near You in <span className="red-text">Hyderabad</span>
            </h2>
            <p>
              Looking for {seo.name} AC service near you? Our certified technicians provide {seo.name} AC repair,
              gas charging, jet foam wash and installation in {SERVICE_LOCALITIES.slice(0, 8).join(', ')} and
              across Hyderabad, Telangana 500023.
            </p>
          </div>
          <div className="brand-models-tags brand-local-tags">
            {SERVICE_LOCALITIES.map((place) => (
              <span key={place} className="brand-model-tag">
                <i className="fa-solid fa-location-dot"></i> {seo.name} AC service in {place}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <ServiceAreas />

      {/* Bottom CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="cta-icon"><i className="fa-solid fa-snowflake"></i></div>
            <div>
              <h3>Need Immediate {brand.brand} AC Servicing?</h3>
              <h2>Get Doorstep AC Service in Hyderabad!</h2>
              <p>Specialized engineers for {brand.brand} AC repair &amp; servicing.</p>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="tel:1234561232" className="btn btn-white"><i className="fa-solid fa-phone"></i> Call 1234561232</a>
            <Link href="/contact" className="btn btn-dark" style={{ border: '2px solid white' }}>Book Appointment</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
