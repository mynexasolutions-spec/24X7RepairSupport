'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ReviewsSwiper from '@/components/ReviewsSwiper';
import ServiceAreas from '@/components/ServiceAreas';

const SEVEN_BRANDS = ['hitachi', 'lg', 'daikin', 'o-general', 'voltas', 'samsung', 'blue-star', 'mitsubishi'];

export default function Home() {
  const router = useRouter();

  const handleOtherBrandClick = (e) => {
    e.preventDefault();
    const picked = SEVEN_BRANDS[Math.floor(Math.random() * SEVEN_BRANDS.length)];
    router.push(`/services/${picked}`);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById('waName').value;
    const phone = document.getElementById('waPhone').value;
    const message = document.getElementById('waMessage').value;

    let text = `Hello 24x7 Repair Support, I want to book a service.\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;

    if (message) {
      text += `*Message:* ${message}`;
    }

    const whatsappNumber = '911234561232';
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Modern Curved Hero Section matching Reference */}
      <section className="hero-modern">
        {/* Hero Visual on Right with Organic Curve & Technician Photo */}
        <div className="hero-curved-wrapper">
          <img
            src="/hero-technician.jpg?v=2"
            alt="Professional AC Technician Repairing Split Air Conditioner"
            className="hero-curved-img"
          />
          {/* Smooth Organic SVG Curve Overlay */}
          <svg
            className="hero-curve-svg"
            viewBox="0 0 1200 700"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="heroCurveShadow" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="12" dy="2" stdDeviation="14" floodColor="#021c38" floodOpacity="0.16" />
                <feDropShadow dx="24" dy="6" stdDeviation="28" floodColor="#021c38" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* Shaded solid mask covering left side and curving around the photo with rich drop shadow */}
            <path
              d="M 0 0 L 530 0 C 475 120, 395 230, 395 350 C 395 460, 455 540, 535 590 C 625 645, 785 660, 935 635 C 1075 610, 1165 645, 1200 680 L 1200 700 L 0 700 Z"
              fill="#EEF3F8"
              filter="url(#heroCurveShadow)"
            />
            {/* Elegant faint curve border stroke matching reference */}
            <path
              d="M 530 0 C 475 120, 395 230, 395 350 C 395 460, 455 540, 535 590 C 625 645, 785 660, 935 635 C 1075 610, 1165 645, 1200 680"
              fill="none"
              stroke="rgba(2, 58, 110, 0.08)"
              strokeWidth="2.5"
            />
          </svg>

          {/* Floating Live Trust Badge with Motion */}
          <div className="hero-floating-stat-badge">
            <div className="stat-badge-icon">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <div className="stat-badge-title">4.9 ★ Rating</div>
              <div className="stat-badge-sub">2,400+ ACs Serviced</div>
            </div>
          </div>
        </div>

        {/* Content Container (Left Side) */}
        <div className="container hero-modern-inner">
          <div className="hero-modern-content">
            {/* Background subtle watermark text */}
            <div className="hero-bg-watermark" aria-hidden="true">
              AIR CONDITIONER
            </div>

            <div className="hero-modern-pill">
              <span className="pill-dot"></span>
              <span>HYDERABAD 500023 • 24X7 DOORSTEP AC SERVICE</span>
            </div>

            <h1 className="hero-modern-title">
              Quality AC Repair Services in Hyderabad
            </h1>

            <p className="hero-modern-desc">
              Certified doorstep technicians for Split, Inverter &amp; Window ACs in Hyderabad. Genuine spare parts and expert doorstep service.
            </p>

            {/* CTAs matching reference button style */}
            <div className="hero-modern-cta">
              <a
                href="https://wa.me/911234561232?text=Hello%2024x7%20Repair%20Support,%20I%20want%20to%20send%20an%20enquiry%20for%20AC%20Service%20in%20Hyderabad."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enquiry"
              >
                Send Enquiry
              </a>

              <a href="tel:1234561232" className="btn-call-modern">
                <i className="fa-solid fa-phone"></i> Call 1234561232
              </a>
            </div>

            {/* Trust feature pills */}
            <div className="hero-modern-features">
              <div className="modern-feature-item">
                <i className="fa-solid fa-snowflake"></i>
                <span>100% Cooling Fixed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AC Brands Supported */}
      <div className="brands-strip">
        <div className="container">
          <div className="brands-inner">
            <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary-blue)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <i className="fa-solid fa-circle-check" style={{ color: 'var(--primary-red)' }}></i> Expert Servicing For All AC Brands:
            </span>
            <Link href="/services/hitachi" className="brand-pill">
              <img src="/brand-logos/hitachi.svg" alt="Hitachi AC" className="brand-pill-logo" />
              <span>Hitachi</span>
            </Link>
            <Link href="/services/lg" className="brand-pill">
              <img src="/brand-logos/lg.svg" alt="LG AC" className="brand-pill-logo" />
              <span>LG</span>
            </Link>
            <Link href="/services/daikin" className="brand-pill">
              <img src="/brand-logos/daikin.svg" alt="Daikin AC" className="brand-pill-logo" />
              <span>Daikin</span>
            </Link>
            <Link href="/services/o-general" className="brand-pill">
              <img src="/brand-logos/ogeneral.svg" alt="O General AC" className="brand-pill-logo" />
              <span>O General</span>
            </Link>
            <Link href="/services/voltas" className="brand-pill">
              <img src="/brand-logos/voltas.svg" alt="Voltas AC" className="brand-pill-logo" />
              <span>Voltas</span>
            </Link>
            <Link href="/services/samsung" className="brand-pill">
              <img src="/brand-logos/samsung.svg" alt="Samsung AC" className="brand-pill-logo" />
              <span>Samsung</span>
            </Link>
            <Link href="/services/blue-star" className="brand-pill">
              <img src="/brand-logos/bluestar.svg" alt="Blue Star AC" className="brand-pill-logo" />
              <span>Blue Star</span>
            </Link>
            <Link href="/services/mitsubishi" className="brand-pill">
              <img src="/brand-logos/mitsubishi.svg" alt="Mitsubishi Electric AC" className="brand-pill-logo" />
              <span>Mitsubishi Electric</span>
            </Link>
            <Link href="/services/other-brands" onClick={handleOtherBrandClick} className="brand-pill">
              <img src="/brand-logos/carrier.svg" alt="Carrier AC" className="brand-pill-logo" />
              <span>Carrier</span>
            </Link>
            <Link href="/services/other-brands" onClick={handleOtherBrandClick} className="brand-pill">
              <img src="/brand-logos/lloyd.svg" alt="Lloyd AC" className="brand-pill-logo" />
              <span>Lloyd</span>
            </Link>
            <Link href="/services/other-brands" onClick={handleOtherBrandClick} className="brand-pill">
              <img src="/brand-logos/panasonic.svg" alt="Panasonic AC" className="brand-pill-logo" />
              <span>Panasonic</span>
            </Link>
            <Link href="/services" className="brand-pill" style={{ background: '#FFF7ED', borderColor: '#FDBA74', color: '#C2410C' }}>
              <img src="/brand-logos/multibrand.svg" alt="All AC Brands" className="brand-pill-logo" />
              <span>+ All Brands</span>
            </Link>
          </div>
        </div>
      </div>

      {/* AC Service Packages */}
      <section className="service-charges section-padding">
        <div className="container">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F0F7FF', border: '1px solid #D0E4FF', borderRadius: '30px', padding: '6px 16px', marginBottom: '14px' }}>
              <img src="/logo-icon.png?v=5" alt="24x7 Repair Support" style={{ height: '22px', width: 'auto' }} />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#023a6e', letterSpacing: '0.3px' }}>OUR SPECIALIZED AC SERVICES</span>
            </div>
            <h2>Professional <span className="red-text">AC Services</span> &amp; Charges</h2>
            <p>Upfront transparent rates across Hyderabad, Telangana 500023</p>
          </div>

          <div className="charges-grid">
            {/* Card 1: AC Jet Wash */}
            <div className="charge-card">
              <span className="ac-package-badge">Most Popular</span>
              <div className="card-img">
                <img src="/ac-jet-wash.jpg" alt="AC Jet Pump Foam Cleaning Service" />
                <div className="icon-circle"><i className="fa-solid fa-spray-can-sparkles"></i></div>
              </div>
              <div className="card-content">
                <h3>AC Jet Pump<br />Foam Wash</h3>
                <a href="https://wa.me/911234561232?text=Hello,%20I%20want%20to%20book%20AC%20Jet%20Pump%20Foam%20Wash%20for%20Rs%20249" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fa-brands fa-whatsapp"></i> Book Jet Wash
                </a>
              </div>
            </div>

            {/* Card 2: Gas Charging */}
            <div className="charge-card">
              <span className="ac-package-badge" style={{ background: '#023a6e' }}>100% Cooling</span>
              <div className="card-img">
                <img src="/ac-gas-charging.jpg" alt="AC Gas Charging and Leak Fixing" />
                <div className="icon-circle"><i className="fa-solid fa-gauge-high"></i></div>
              </div>
              <div className="card-content">
                <h3>AC Gas Refill<br />&amp; Leak Repair</h3>
                <a href="https://wa.me/911234561232?text=Hello,%20I%20want%20to%20book%20AC%20Gas%20Charging%20Service" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fa-brands fa-whatsapp"></i> Book Gas Refill
                </a>
              </div>
            </div>

            {/* Card 3: AC Cooling & Breakdown */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-repair-clean.jpg" alt="AC Breakdown and Cooling Repair" />
                <div className="icon-circle"><i className="fa-solid fa-screwdriver-wrench"></i></div>
              </div>
              <div className="card-content">
                <h3>AC Breakdown<br />&amp; Diagnosis</h3>
                <a href="https://wa.me/911234561232?text=Hello,%20my%20AC%20is%20not%20cooling,%20need%20diagnosis" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fa-brands fa-whatsapp"></i> Book Diagnosis
                </a>
              </div>
            </div>

            {/* Card 4: AC Installation */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-installation.jpg" alt="AC Installation and Uninstallation" />
                <div className="icon-circle"><i className="fa-solid fa-wrench"></i></div>
              </div>
              <div className="card-content">
                <h3>AC Installation<br />&amp; Relocation</h3>
                <a href="https://wa.me/911234561232?text=Hello,%20I%20need%20AC%20Installation%20or%20Uninstallation" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fa-brands fa-whatsapp"></i> Book Install
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common AC Problems Solved */}
      <section className="ac-problems-section section-padding bg-light">
        <div className="container">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <h2>Common <span className="red-text">AC Problems</span> We Fix</h2>
            <p>Select your issue for instant technician dispatch across Hyderabad</p>
          </div>

          <div className="ac-problems-grid">
            <div className="ac-problem-card">
              <div className="problem-card-top">
                <div className="problem-card-icon"><i className="fa-solid fa-snowflake"></i></div>
                <div className="problem-card-info">
                  <h4>AC Not Cooling At All</h4>
                  <p>Blowing normal warm air due to low gas, faulty run capacitor, or choked filter.</p>
                </div>
              </div>
              <a href="https://wa.me/911234561232?text=My%20AC%20is%20not%20cooling%20at%20all,%20please%20send%20technician" target="_blank" rel="noopener noreferrer" className="problem-card-btn">
                <span>Fix Cooling Issue</span> <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="ac-problem-card">
              <div className="problem-card-top">
                <div className="problem-card-icon"><i className="fa-solid fa-droplet"></i></div>
                <div className="problem-card-info">
                  <h4>Water Leaking Inside Room</h4>
                  <p>Drain line blocked with dust sludge, cracked drain pan, or icy evaporator coil.</p>
                </div>
              </div>
              <a href="https://wa.me/911234561232?text=My%20indoor%20AC%20unit%20is%20leaking%20water,%20need%20repair" target="_blank" rel="noopener noreferrer" className="problem-card-btn">
                <span>Fix Water Leak</span> <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="ac-problem-card">
              <div className="problem-card-top">
                <div className="problem-card-icon"><i className="fa-solid fa-volume-high"></i></div>
                <div className="problem-card-info">
                  <h4>Loud Noise &amp; Vibration</h4>
                  <p>Blower motor bearing worn out, loose outdoor unit mounting, or fan blade imbalance.</p>
                </div>
              </div>
              <a href="https://wa.me/911234561232?text=My%20AC%20is%20making%20loud%20noise,%20need%20technician" target="_blank" rel="noopener noreferrer" className="problem-card-btn">
                <span>Fix Noise Issue</span> <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="ac-problem-card">
              <div className="problem-card-top">
                <div className="problem-card-icon"><i className="fa-solid fa-bolt"></i></div>
                <div className="problem-card-info">
                  <h4>AC Tripping Power / MCB</h4>
                  <p>Compressor grounding, shorted wiring, capacitor overload, or high power surge.</p>
                </div>
              </div>
              <a href="https://wa.me/911234561232?text=My%20AC%20is%20tripping%20the%20MCB/power,%20need%20urgent%20fix" target="_blank" rel="noopener noreferrer" className="problem-card-btn">
                <span>Fix Power Trip</span> <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="ac-problem-card">
              <div className="problem-card-top">
                <div className="problem-card-icon"><i className="fa-solid fa-wind"></i></div>
                <div className="problem-card-info">
                  <h4>Bad Odor / Stale Airflow</h4>
                  <p>Mold and mildew build-up inside the blower wheel requiring chemical jet cleaning.</p>
                </div>
              </div>
              <a href="https://wa.me/911234561232?text=My%20AC%20has%20bad%20odor/smell,%20need%20deep%20cleaning" target="_blank" rel="noopener noreferrer" className="problem-card-btn">
                <span>Book Jet Wash</span> <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="ac-problem-card">
              <div className="problem-card-top">
                <div className="problem-card-icon"><i className="fa-solid fa-microchip"></i></div>
                <div className="problem-card-info">
                  <h4>Error Code on Display</h4>
                  <p>E1, E2, E6 or blinking timer light indicating inverter PCB communication fault.</p>
                </div>
              </div>
              <a href="https://wa.me/911234561232?text=My%20AC%20is%20showing%20an%20error%20code,%20need%20PCB%20repair" target="_blank" rel="noopener noreferrer" className="problem-card-btn">
                <span>Fix Error Code</span> <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Top AC Brands We Service */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F0F7FF', border: '1px solid #D0E4FF', borderRadius: '30px', padding: '6px 16px', marginBottom: '14px' }}>
              <img src="/logo-icon.png?v=5" alt="24x7 Repair Support" style={{ height: '22px', width: 'auto' }} />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#023a6e', letterSpacing: '0.3px' }}>MULTI-BRAND AC SPECIALISTS</span>
            </div>
            <h2>Specialized Doorstep Care For <span className="red-text">Top AC Brands</span></h2>
            <p>Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star, Mitsubishi Electric &amp; more — select your brand for factory-grade service in Hyderabad!</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px' }}>
            {[
              { brand: 'LG', slug: 'lg', logo: '/brand-logos/lg.svg', image: '/brands/lg-ac.jpg', badge: 'Dual Inverter Specialist', desc: 'AI DUALCOOL & Smart Inverter AC diagnostic care.' },
              { brand: 'Voltas', slug: 'voltas', logo: '/brand-logos/voltas.svg', image: '/brands/voltas-ac.jpg', badge: 'All-Weather Expert', desc: 'Maha-Adjustable & Inverter Split AC doorstep service.' },
              { brand: 'Daikin', slug: 'daikin', logo: '/brand-logos/daikin.svg', image: '/brands/daikin-ac.jpg', badge: 'Japanese Precision', desc: 'Streamer Inverter PCB repair & precision gas charging.' },
              { brand: 'Hitachi', slug: 'hitachi', logo: '/brand-logos/hitachi.svg', image: '/brands/hitachi-ac.jpg', badge: 'Rapid Chill Guarantee', desc: 'Quadricool & Yoshi Inverter AC repair & deep wash.' },
              { brand: 'O General', slug: 'o-general', logo: '/brand-logos/ogeneral.svg', image: '/brands/ogeneral-ac.jpg', badge: 'Tropical Cooling Care', desc: 'Heavy-duty compressor diagnostics & coil overhaul.' },
              { brand: 'Samsung', slug: 'samsung', logo: '/brand-logos/samsung.svg', image: '/brands/samsung-ac.jpg', badge: 'WindFree Specialist', desc: 'WindFree micro-hole jet wash & 5-in-1 PCB repair.' },
              { brand: 'Blue Star', slug: 'blue-star', logo: '/brand-logos/bluestar.svg', image: '/brands/bluestar-ac.jpg', badge: 'Precision Air Experts', desc: 'Precision residential & commercial cassette AC care.' },
              { brand: 'Mitsubishi Electric', slug: 'mitsubishi', logo: '/brand-logos/mitsubishi.svg', image: '/brands/mitsubishi-ac.jpg', badge: 'Japanese Precision Specialist', desc: 'Kirigamine & Hyper Inverter AC repair, PCB care & deep wash.' },
              { brand: 'Other Brands', slug: 'other-brands', logo: '/brand-logos/multibrand.svg', image: '/brands/other-ac.jpg', badge: 'Multi-Brand Specialist', desc: 'Carrier, Lloyd, Panasonic & all other AC brands.' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(2, 58, 110, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                className="home-brand-card"
              >
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={`${item.brand} AC Servicing`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#ffffff', padding: '4px 10px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center' }}>
                    <img src={item.logo} alt={item.brand} style={{ height: '18px', width: 'auto', display: 'block' }} />
                  </div>
                  <span style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(2, 58, 110, 0.88)', color: '#ffffff', fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '20px', backdropFilter: 'blur(4px)' }}>
                    {item.badge}
                  </span>
                </div>
                <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '2px 6px', display: 'inline-flex', alignItems: 'center' }}>
                      <img src={item.logo} alt={item.brand} style={{ height: '16px', width: 'auto', display: 'block' }} />
                    </div>
                    <h3 style={{ margin: 0, fontSize: '17px', color: '#023a6e', fontWeight: 800 }}>{item.brand} AC</h3>
                  </div>
                  <p style={{ margin: '0 0 14px', fontSize: '13px', color: '#64748B', lineHeight: '1.45', flexGrow: 1 }}>
                    {item.desc}
                  </p>
                  <Link
                    href={`/services/${item.slug}`}
                    onClick={(e) => {
                      if (item.slug === 'other-brands') {
                        handleOtherBrandClick(e);
                      }
                    }}
                    className="btn btn-primary"
                    style={{ width: '100%', textAlign: 'center', justifyContent: 'center', padding: '10px', fontSize: '13.5px', borderRadius: '8px' }}
                  >
                    View {item.brand} Service <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* All Brands Ribbon */}
          <div style={{ marginTop: '35px', background: '#FFFFFF', borderRadius: '14px', padding: '20px 24px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#023a6e' }}>
                <i className="fa-solid fa-screwdriver-wrench" style={{ color: 'var(--primary-red)', marginRight: '8px' }}></i>
                Carrier, Lloyd, Panasonic, Mitsubishi, Godrej, Whirlpool &amp; More
              </h4>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748B' }}>
                Split, Window, Multi-Split, Inverter &amp; Cassette ACs of any brand serviced across Hyderabad.
              </p>
            </div>
            <Link href="/services/other-brands" onClick={handleOtherBrandClick} className="btn btn-dark" style={{ whiteSpace: 'nowrap' }}>
              <i className="fa-solid fa-certificate"></i> All Other Brands AC
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works section-padding">
        <div className="container">
          <div className="section-title">
            <h2>How It <span className="red-text">Works</span></h2>
            <p>Getting your Air Conditioner repaired is quick, simple, and hassle-free in just 4 straightforward steps.</p>
          </div>

          <div className="process-wrapper">
            <div className="process-line"></div>
            <div className="process-steps">
              <div className="step-item">
                <div className="step-icon"><i className="fa-regular fa-calendar-check"></i></div>
                <h4>1. Book Appointment</h4>
                <p>Call or WhatsApp us to schedule a convenient visit time.</p>
              </div>
              <div className="step-item">
                <div className="step-icon"><i className="fa-solid fa-user-check"></i></div>
                <h4>2. Technician Visit</h4>
                <p>Our expert technician reaches your doorstep on time.</p>
              </div>
              <div className="step-item">
                <div className="step-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
                <h4>3. Expert Repair</h4>
                <p>Your AC is diagnosed and repaired with genuine brand spares.</p>
              </div>
              <div className="step-item">
                <div className="step-icon"><i className="fa-solid fa-clipboard-check"></i></div>
                <h4>4. Testing</h4>
                <p>We thoroughly inspect and verify flawless operation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us section-padding">
        <div className="container why-inner">
          <div className="why-image">
            <img src="/why-choose.png?v=3" alt="Why Choose 24x7 AC Repair Support" />
          </div>
          <div className="why-content">
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F0F7FF', border: '1px solid #D0E4FF', borderRadius: '30px', padding: '5px 14px', marginBottom: '10px' }}>
                <img src="/logo-icon.png?v=5" alt="24x7 Repair Support" style={{ height: '18px', width: 'auto' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#023a6e', letterSpacing: '0.3px' }}>TRUSTED SERVICE GUARANTEE</span>
              </div>
              <h2 style={{ textAlign: 'center', margin: 0 }}>Why Choose <span className="red-text">24x7 Repair Support?</span></h2>
            </div>

            <div className="why-list">
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-user-check"></i></div>
                <div>
                  <h4>Certified AC Specialists</h4>
                  <p>In-depth technical expertise in Split, Inverter, Window &amp; Cassette AC cooling systems.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-truck-fast"></i></div>
                <div>
                  <h4>Doorstep Service</h4>
                  <p>Fast local response from Hyderabad, Telangana 500023 across all central and suburban localities.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-gears"></i></div>
                <div>
                  <h4>Genuine Spare Parts</h4>
                  <p>100% original brand components with warranty support.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-heart"></i></div>
                <div>
                  <h4>Affordable Pricing</h4>
                  <p>Transparent pricing with zero hidden charges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container stats-inner">
          <div className="stat-item">
            <div className="stat-icon"><i className="fa-solid fa-calendar-alt"></i></div>
            <div>
              <h3>10+</h3>
              <p>Years of Service</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><i className="fa-solid fa-users"></i></div>
            <div>
              <h3>8K+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><i className="fa-solid fa-wrench"></i></div>
            <div>
              <h3>12K+</h3>
              <p>Repairs Completed</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><i className="fa-solid fa-thumbs-up"></i></div>
            <div>
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews section-padding bg-light">
        <div className="container">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <h2>Customer <span className="red-text">Reviews</span></h2>
            <p>What our clients in Hyderabad say about our service</p>
          </div>

          <ReviewsSwiper />
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* FAQ */}
      <section className="faq section-padding">
        <div className="container faq-inner">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <h2>Frequently Asked <span className="red-text">Questions</span></h2>
            <p>Find answers to common questions about our services</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>How often should I get my AC serviced?</summary>
              <div className="faq-content">
                <p>In Hyderabad's climate and dust conditions, we recommend a deep foam jet cleaning every 3 to 4 months or at least before the peak summer season to ensure maximum cooling, low electricity bills, and clean indoor air.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>How much does AC gas charging cost and which gas do you use?</summary>
              <div className="faq-content">
                <p>Our complete AC gas charging package starts at ₹1,499. We use 100% genuine, pure refrigerant gases (R32, R410A, and R22) with a full nitrogen pressure test to ensure zero leakage.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Which AC brands do you service &amp; repair?</summary>
              <div className="faq-content">
                <p>We provide authorized-grade repair and servicing for all top AC brands in India, including <strong>Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star, Carrier, Lloyd, Panasonic, Mitsubishi Electric, Godrej, Whirlpool</strong>, and many more. In sabhi companiyon ke Split AC, Inverter AC, Window AC aur Cassette AC ki expert servicing hoti hai yahan with genuine spare parts.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Do you provide a warranty on repairs?</summary>
              <div className="faq-content">
                <p>Yes! We provide warranty on replaced spare parts and repair services for your peace of mind.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Where is 24x7 Repair Support located?</summary>
              <div className="faq-content">
                <p>We are located at <strong>Hyderabad, Telangana 500023</strong>. We offer rapid doorstep service across Hyderabad and surrounding Telangana areas.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Which areas do you service?</summary>
              <div className="faq-content">
                <p>Based in Hyderabad, Telangana 500023, we service Sanath Nagar, Erragadda, Ameerpet, SR Nagar, Banjara Hills, Jubilee Hills, Madhapur, Hitec City, Gachibowli, Kondapur, Kukatpally, Begumpet, Secunderabad, and surrounding neighborhoods.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-banner">
            <div className="contact-banner-text">
              <h2>Need Fast Doorstep AC Repair?</h2>
              <p>Book your certified AC technician visit now and get quick doorstep cooling repair.</p>
              <a href="tel:1234561232" className="btn btn-white call-btn"><i className="fa-solid fa-phone"></i> Call Now: 1234561232</a>
            </div>
            <div className="contact-banner-form">
              <form id="whatsappForm" className="contact-form" onSubmit={handleWhatsAppSubmit}>
                <div className="form-group">
                  <label htmlFor="waName">Name</label>
                  <input type="text" id="waName" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="waPhone">Phone Number</label>
                  <input type="tel" id="waPhone" placeholder="Your phone number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="waMessage">Message</label>
                  <textarea id="waMessage" placeholder="AC issue (Not cooling, gas charging, water leak, jet wash...)" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-submit" style={{ width: '100%', border: 'none' }}><i className="fa-brands fa-whatsapp"></i> Book via WhatsApp</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="cta-icon"><i className="fa-solid fa-headset"></i> 24/7</div>
            <div>
              <h3>Need a Quick Repair?</h3>
              <h2>We&apos;re Just a Call Away!</h2>
              <p>Fast doorstep service from Hyderabad, Telangana 500023 across Greater Hyderabad.</p>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="tel:1234561232" className="btn btn-white"><i className="fa-solid fa-phone"></i> Call Now</a>
            <a href="https://wa.me/911234561232" target="_blank" rel="noopener noreferrer" className="btn btn-white"><i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '20px' }}></i> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
