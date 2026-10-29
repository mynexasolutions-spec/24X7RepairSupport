'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const SEVEN_BRANDS = ['hitachi', 'lg', 'daikin', 'o-general', 'voltas', 'samsung', 'blue-star', 'mitsubishi'];

const NAV_BRANDS = [
  { name: 'Hitachi', slug: 'hitachi', logo: '/brand-logos/hitachi.svg' },
  { name: 'LG', slug: 'lg', logo: '/brand-logos/lg.svg' },
  { name: 'Daikin', slug: 'daikin', logo: '/brand-logos/daikin.svg' },
  { name: 'O General', slug: 'o-general', logo: '/brand-logos/ogeneral.svg' },
  { name: 'Voltas', slug: 'voltas', logo: '/brand-logos/voltas.svg' },
  { name: 'Samsung', slug: 'samsung', logo: '/brand-logos/samsung.svg' },
  { name: 'Blue Star', slug: 'blue-star', logo: '/brand-logos/bluestar.svg' },
  { name: 'Mitsubishi Electric', slug: 'mitsubishi', logo: '/brand-logos/mitsubishi.svg' },
  { name: 'Other Brands', slug: 'other-brands', logo: '/brand-logos/multibrand.svg' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleBrandClick = (e, slug) => {
    setMenuOpen(false);
    setBrandsOpen(false);
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

  // while the sidebar is open: stop the page behind it from scrolling, and let Escape close it
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const cleanPath = pathname ? pathname.replace(/\/$/, '') || '/' : '/';

  const isHome = cleanPath === '/';
  const isServices = cleanPath === '/services' || cleanPath.startsWith('/services/');
  const isAbout = cleanPath === '/about' || cleanPath.startsWith('/about/');
  const isContact = cleanPath === '/contact' || cleanPath.startsWith('/contact/');

  const brandMatch = pathname ? pathname.match(/^\/services\/([^/]+)/) : null;
  const brandSlug = brandMatch ? brandMatch[1] : null;
  const currentBrand = (brandSlug && brandSlug !== 'other-brands') ? NAV_BRANDS.find((b) => b.slug === brandSlug) : null;

  const brandThemeClass = currentBrand ? ` header-theme-${currentBrand.slug}` : '';

  return (
    <header className={`header${brandThemeClass}`}>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-location-desktop"><i className="fa-solid fa-location-dot"></i> Hyderabad, Telangana 500023</span>
            <span className="top-bar-location-mobile"><i className="fa-solid fa-location-dot"></i> Hyderabad 500023</span>
            <span className="top-bar-divider top-bar-hide-mobile" style={{ margin: '0 4px' }}>•</span>
            <a href="mailto:supportxrapair@gmail.com" className="top-bar-hide-mobile" style={{ color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <i className="fa-solid fa-envelope"></i> supportxrapair@gmail.com
            </a>
          </div>
          <div className="top-bar-right">
            <a href="tel:9014998582" className="top-bar-phone-link"><i className="fa-solid fa-phone"></i> 9014998582</a>
            <span className="top-bar-divider top-bar-hide-mobile">•</span>
            <span className="top-bar-hide-mobile"><i className="fa-regular fa-clock"></i> 24x7 Doorstep AC Service &amp; Repair</span>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <img
            src="/navbarlogo-web.png?v=2"
            alt="24x7 Repair Support - AC Repair & Service"
            className="logo-img"
          />
        </Link>
        <div className={`nav-backdrop${menuOpen ? ' show' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true"></div>
        <nav className={`nav-links${menuOpen ? ' active' : ''}`}>
          <div className="mobile-nav-logo" style={{ display: 'none' }}>
            <img src="/navbarlogo-web.png?v=2" alt="24x7 Repair Support" style={{ height: '40px', width: 'auto', display: 'block' }} />
            <button type="button" className="nav-close" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <Link href="/" className={isHome ? "active" : ""} onClick={() => setMenuOpen(false)}><i className="fa-solid fa-house nav-ico"></i>HOME</Link>
          {currentBrand ? (
            <div className={`nav-dropdown${brandsOpen ? ' open' : ''}`}>
              <div className="nav-dropdown-head">
                <Link href={`/services/${currentBrand.slug}`} className="active" onClick={() => { setMenuOpen(false); setBrandsOpen(false); }}>
                  <i className="fa-solid fa-screwdriver-wrench nav-ico"></i>{currentBrand.name.toUpperCase()}
                </Link>
                <button
                  type="button"
                  className="nav-dropdown-toggle"
                  aria-label={`Show ${currentBrand.name} options`}
                  aria-haspopup="true"
                  aria-expanded={brandsOpen}
                  onClick={() => setBrandsOpen(!brandsOpen)}
                >
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              <div className="nav-dropdown-menu">
                <Link
                  href={`/services/${currentBrand.slug}#brand-booking-form`}
                  onClick={() => { setMenuOpen(false); setBrandsOpen(false); }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
                  <span>Book {currentBrand.name} via WhatsApp</span>
                </Link>
                <Link
                  href={`/services/${currentBrand.slug}`}
                  onClick={() => { setMenuOpen(false); setBrandsOpen(false); }}
                >
                  <i className="fa-solid fa-tag" style={{ color: '#FF5E00' }}></i>
                  <span>{currentBrand.name} Service Charges</span>
                </Link>
                <a
                  href="tel:9014998582"
                  onClick={() => { setMenuOpen(false); setBrandsOpen(false); }}
                >
                  <i className="fa-solid fa-phone" style={{ color: '#023a6e' }}></i>
                  <span>Call {currentBrand.name} Tech (9014998582)</span>
                </a>
              </div>
            </div>
          ) : (
            <div className={`nav-dropdown${brandsOpen ? ' open' : ''}`}>
              <div className="nav-dropdown-head">
                <Link href="/services" className={isServices ? "active" : ""} onClick={() => { setMenuOpen(false); setBrandsOpen(false); }}><i className="fa-solid fa-screwdriver-wrench nav-ico"></i>SERVICES</Link>
                <button
                  type="button"
                  className="nav-dropdown-toggle"
                  aria-label="Show services by brand"
                  aria-haspopup="true"
                  aria-expanded={brandsOpen}
                  onClick={() => setBrandsOpen(!brandsOpen)}
                >
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              <div className="nav-dropdown-menu">
                {NAV_BRANDS.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/services/${b.slug}`}
                    onClick={(e) => handleBrandClick(e, b.slug)}
                  >
                    <img src={b.logo} alt="" />
                    <span>{b.name}</span>
                  </Link>
                ))}
                <Link href="/services" className="nav-dropdown-all" onClick={() => { setMenuOpen(false); setBrandsOpen(false); }}>
                  View all services <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          )}
          <Link href="/about" className={isAbout ? "active" : ""} onClick={() => setMenuOpen(false)}><i className="fa-solid fa-circle-info nav-ico"></i>ABOUT US</Link>
          <Link href="/contact" className={isContact ? "active" : ""} onClick={() => setMenuOpen(false)}><i className="fa-solid fa-headset nav-ico"></i>CONTACT US</Link>
          <div className="mobile-nav-actions">
            <a href="tel:9014998582" className="btn btn-dark"><i className="fa-solid fa-phone"></i> Call 9014998582</a>
            <a href="https://wa.me/919014998582?text=Hello%2024x7%20AC%20Repair%20Support,%20I%20want%20to%20send%20an%20enquiry" target="_blank" rel="noopener noreferrer" className="btn btn-enquiry">Send Enquiry</a>
          </div>
        </nav>
        <div className="header-actions">
          <a href="tel:9014998582" className="header-phone-link">
            <i className="fa-solid fa-phone"></i> 9014998582
          </a>
          <a href="https://wa.me/919014998582?text=Hello%2024x7%20AC%20Repair%20Support,%20I%20want%20to%20send%20an%20enquiry" target="_blank" rel="noopener noreferrer" className="btn-enquiry header-enquiry-btn">
            Send Enquiry
          </a>
        </div>
        <button
          type="button"
          className={`mobile-menu-btn${menuOpen ? ' open' : ''}`}
          id="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>
    </header>
  );
}
