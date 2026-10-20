'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <i className="fa-solid fa-location-dot"></i>
            <span>Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:7428194037"><i className="fa-solid fa-phone"></i> 7428194037</a>
            <span className="top-bar-divider">•</span>
            <span><i className="fa-regular fa-clock"></i> Mon - Sun: 8 AM - 9 PM</span>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src="/home-care-logo.png" alt="Home Care AC Service Center" style={{ maxHeight: '52px', width: 'auto', objectFit: 'contain', borderRadius: '8px' }} />
          <div>
            <h1>HOME CARE</h1>
            <p>AC &amp; Appliance Service Center</p>
          </div>
        </Link>
        <nav className={`nav-links${menuOpen ? ' active' : ''}`}>
          <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" className={pathname === "/services" ? "active" : ""} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <div className="mobile-nav-actions">
            <a href="tel:7428194037" className="btn btn-dark"><i className="fa-solid fa-phone"></i> Call Now</a>
            <a href="tel:7428194037" className="btn btn-primary">Book Now</a>
          </div>
        </nav>
        <div className="header-actions">
          <a href="tel:7428194037" className="btn btn-dark" style={{ padding: '8px 16px' }}><i className="fa-solid fa-phone"></i> Call Now</a>
          <a href="tel:7428194037" className="btn btn-primary" style={{ padding: '8px 16px' }}>Book Service</a>
        </div>
        <div
          className="mobile-menu-btn"
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
