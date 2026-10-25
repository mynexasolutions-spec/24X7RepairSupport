'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const cleanPath = pathname ? pathname.replace(/\/$/, '') || '/' : '/';

  const isHome = cleanPath === '/';
  const isServices = cleanPath === '/services' || cleanPath.startsWith('/services/');
  const isAbout = cleanPath === '/about' || cleanPath.startsWith('/about/');
  const isContact = cleanPath === '/contact' || cleanPath.startsWith('/contact/');

  return (
    <header className="header">
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
            <a href="tel:1234561232" className="top-bar-phone-link"><i className="fa-solid fa-phone"></i> 1234561232</a>
            <span className="top-bar-divider top-bar-hide-mobile">•</span>
            <span className="top-bar-hide-mobile"><i className="fa-regular fa-clock"></i> 24x7 Doorstep AC Service &amp; Repair</span>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <img
            src="/logo.png?v=5"
            alt="24x7 Repair Support - AC Repair & Service"
            className="logo-img"
          />
        </Link>
        <nav className={`nav-links${menuOpen ? ' active' : ''}`}>
          <div className="mobile-nav-logo" style={{ display: 'none', textAlign: 'center', paddingBottom: '14px', borderBottom: '1px solid #f0f0f0', marginBottom: '10px' }}>
            <img src="/logo.png?v=5" alt="24x7 Repair Support" style={{ height: '50px', width: 'auto', margin: '0 auto', display: 'block' }} />
          </div>
          <Link href="/" className={isHome ? "active" : ""} onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link href="/services" className={isServices ? "active" : ""} onClick={() => setMenuOpen(false)}>SERVICES</Link>
          <Link href="/about" className={isAbout ? "active" : ""} onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          <Link href="/contact" className={isContact ? "active" : ""} onClick={() => setMenuOpen(false)}>CONTACT US</Link>
          <div className="mobile-nav-actions">
            <a href="tel:1234561232" className="btn btn-dark"><i className="fa-solid fa-phone"></i> Call 1234561232</a>
            <a href="https://wa.me/911234561232?text=Hello%2024x7%20AC%20Repair%20Support,%20I%20want%20to%20send%20an%20enquiry" target="_blank" rel="noopener noreferrer" className="btn btn-enquiry">Send Enquiry</a>
          </div>
        </nav>
        <div className="header-actions">
          <a href="tel:1234561232" className="header-phone-link">
            <i className="fa-solid fa-phone"></i> 1234561232
          </a>
          <a href="https://wa.me/911234561232?text=Hello%2024x7%20AC%20Repair%20Support,%20I%20want%20to%20send%20an%20enquiry" target="_blank" rel="noopener noreferrer" className="btn-enquiry header-enquiry-btn">
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
