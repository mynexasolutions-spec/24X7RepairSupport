'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { getBrandData } from '@/app/services/brandData';

const SEVEN_BRANDS = ['hitachi', 'lg', 'daikin', 'o-general', 'voltas', 'samsung', 'blue-star', 'mitsubishi'];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const brandMatch = pathname ? pathname.match(/^\/services\/([^/]+)/) : null;
  const brandSlug = brandMatch ? brandMatch[1] : null;
  const currentBrand = brandSlug && brandSlug !== 'other-brands' ? getBrandData(brandSlug) : null;
  const footerThemeClass = currentBrand ? ` footer-theme-${currentBrand.slug}` : '';

  const handleBrandClick = (e, slug) => {
    if (slug === 'other-brands' || slug === 'other' || slug === 'other-brand' || slug === 'other-brand-ac') {
      e.preventDefault();
      const current = (pathname && pathname.startsWith('/services/')) ? pathname.split('/')[2] : null;
      const candidates = current && SEVEN_BRANDS.includes(current)
        ? SEVEN_BRANDS.filter((b) => b !== current)
        : SEVEN_BRANDS;
      const picked = candidates[Math.floor(Math.random() * candidates.length)] || SEVEN_BRANDS[0];
      router.push(`/services/${picked}`);
    }
  };

  return (
    <footer className={`footer${footerThemeClass}`}>
      <div className="container footer-inner">
        <div className="footer-col brand-col">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px 14px', marginBottom: '18px' }}>
            <div style={{ background: '#ffffff', padding: '6px 12px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              <img src="/navbarlogo-web.png?v=2" alt="24x7 Repair Support Logo" style={{ height: '58px', width: 'auto', objectFit: 'contain', display: 'block' }} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 800, letterSpacing: '-0.3px', lineHeight: 1.1 }}>
                <span style={{ color: '#ffffff' }}>24x7</span> <span style={{ color: '#FF5E00' }}>REPAIR SUPPORT</span>
              </h3>
              <p style={{ margin: '2px 0 0', fontSize: '11px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                Certified AC Service &amp; Repair • Hyderabad
              </p>
            </div>
          </div>
          
          {currentBrand ? (
            <p className="brand-desc footer-desc" style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '14px', lineHeight: '1.65', marginTop: '14px', maxWidth: '360px' }}>
              Professional and certified 24x7 doorstep repair and servicing for {currentBrand.brand} Split, Inverter &amp; Window Air Conditioners across Hyderabad, Telangana 500023. 100% genuine {currentBrand.brand} replacement parts.
            </p>
          ) : (
            <p className="brand-desc footer-desc" style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '14px', lineHeight: '1.65', marginTop: '14px', maxWidth: '360px' }}>
              Professional and reliable 24x7 doorstep service and repair for Split, Inverter &amp; Window Air Conditioners across Hyderabad, Telangana 500023.
            </p>
          )}
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">AC Services</Link></li>
            <li><Link href="/service-areas">Service Areas</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>{currentBrand ? `${currentBrand.brand} Services` : 'AC Services'}</h4>
          <ul>
            <li><Link href={currentBrand ? `/services/${currentBrand.slug}` : '/services'}>AC General Service</Link></li>
            <li><Link href={currentBrand ? `/services/${currentBrand.slug}` : '/services'}>AC Gas Refill &amp; Leak Repair</Link></li>
            <li><Link href={currentBrand ? `/services/${currentBrand.slug}` : '/services'}>Inverter PCB &amp; Cooling Repair</Link></li>
            <li><Link href={currentBrand ? `/services/${currentBrand.slug}` : '/services'}>AC Installation &amp; Relocation</Link></li>
            <li><Link href={currentBrand ? `/services/${currentBrand.slug}#brand-booking-form` : '/services'}>{currentBrand ? `Book ${currentBrand.brand} Visit` : 'Doorstep AC Inspection'}</Link></li>
          </ul>
        </div>
        
        <div className="footer-col contact-col">
          <h4>Contact Us</h4>
          <ul>
            <li><i className="fa-solid fa-location-dot"></i> Hyderabad, Telangana 500023</li>
            <li><i className="fa-solid fa-phone"></i> <a href="tel:9014998582" style={{ color: 'inherit' }}>9014998582</a></li>
            <li><i className="fa-solid fa-envelope"></i> <a href="mailto:supportxrapair@gmail.com" style={{ color: 'inherit' }}>supportxrapair@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Brands Strip - Brand Specific or Multi-Brand */}
      {currentBrand ? (
        <div className="footer-service-areas" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '16px 0', background: 'rgba(0, 20, 45, 0.35)' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                {currentBrand.logo && (
                  <div style={{ background: '#ffffff', padding: '4px 10px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center' }}>
                    <img src={currentBrand.logo} alt={currentBrand.brand} style={{ height: '20px', width: 'auto' }} />
                  </div>
                )}
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                  {currentBrand.brand} AC Doorstep Specialist &bull; Hyderabad 500023
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12.5px', color: '#38BDF8', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <i className="fa-solid fa-certificate"></i> 100% Genuine {currentBrand.brand} Spares
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer-service-areas" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '16px 0', background: 'rgba(0, 20, 45, 0.35)' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#FF5E00', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <i className="fa-solid fa-snowflake"></i> AC Brands We Service:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                {[
                  { name: 'LG AC', slug: 'lg', logo: '/brand-logos/lg.svg' },
                  { name: 'Voltas AC', slug: 'voltas', logo: '/brand-logos/voltas.svg' },
                  { name: 'Daikin AC', slug: 'daikin', logo: '/brand-logos/daikin.svg' },
                  { name: 'Hitachi AC', slug: 'hitachi', logo: '/brand-logos/hitachi.svg' },
                  { name: 'O General AC', slug: 'o-general', logo: '/brand-logos/ogeneral.svg' },
                  { name: 'Samsung AC', slug: 'samsung', logo: '/brand-logos/samsung.svg' },
                  { name: 'Blue Star AC', slug: 'blue-star', logo: '/brand-logos/bluestar.svg' },
                  { name: 'Mitsubishi Electric AC', slug: 'mitsubishi', logo: '/brand-logos/mitsubishi.svg' },
                  { name: 'Carrier AC', slug: 'other-brands', logo: '/brand-logos/carrier.svg' },
                  { name: 'Lloyd AC', slug: 'other-brands', logo: '/brand-logos/lloyd.svg' },
                  { name: 'Panasonic AC', slug: 'other-brands', logo: '/brand-logos/panasonic.svg' },
                  { name: '+ All Other Brands', slug: 'other-brands', logo: '/brand-logos/multibrand.svg' },
                ].map((b, i) => (
                  <Link
                    key={i}
                    href={`/services/${b.slug}`}
                    onClick={(e) => handleBrandClick(e, b.slug)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '9px',
                      background: '#ffffff',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      textDecoration: 'none',
                      color: '#023a6e',
                      fontSize: '12px',
                      fontWeight: 700,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                      transition: 'all 0.2s ease',
                    }}
                    className="footer-brand-chip"
                  >
                    <img src={b.logo} alt={b.name} style={{ height: '22px', width: 'auto', maxWidth: '84px', objectFit: 'contain', display: 'block' }} />
                    <span>{b.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Areas Quick Strip */}
      <div className="footer-service-areas">
        <div className="container">
          <div className="footer-areas-inner">
            <span className="footer-areas-title">
              <i className="fa-solid fa-map-pin" style={{ color: 'var(--primary-red)' }}></i> Hyderabad Service Areas:
            </span>
            <div className="footer-areas-list">
              <span>Sanath Nagar</span> &bull; <span>Erragadda</span> &bull; <span>Ameerpet</span> &bull; <span>SR Nagar</span> &bull; <span>Banjara Hills</span> &bull; <span>Jubilee Hills</span> &bull; <span>Madhapur</span> &bull; <span>Hitec City</span> &bull; <span>Gachibowli</span> &bull; <span>Kondapur</span> &bull; <span>Kukatpally</span> &bull; <span>KPHB Colony</span> &bull; <span>Miyapur</span> &bull; <span>Begumpet</span> &bull; <span>Secunderabad</span> &bull; <span>Punjagutta</span> &bull; <span>Somajiguda</span> &bull; <span>Bowenpally</span> &bull; <span>Nizampet</span> &bull; <span>Chandanagar</span> &bull; <span>Mehdipatnam</span> &bull; <span>Dilsukhnagar</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>&copy; {new Date().getFullYear()} 24x7_repair_support.com. All Rights Reserved.</p>
          <p>Designed with <i className="fa-solid fa-heart" style={{ color: '#d15700' }}></i> for trusted service in Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
