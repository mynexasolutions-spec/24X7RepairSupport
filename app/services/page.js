import Link from 'next/link';
import ServiceAreas from '@/components/ServiceAreas';

import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { brandDetails, SITE_URL } from './brandData';

export const metadata = pageMetadata({
  title: 'AC Repair & Service Rates in Hyderabad | LG, Daikin, Hitachi, Voltas',
  description: 'AC repair, jet wash, gas refilling & installation in Hyderabad for LG, Daikin, Hitachi, Voltas, O General, Samsung & Blue Star. Free visit. Call 1234561232.',
  path: '/services',
});

const servicesSchema = [
  breadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Services', path: '/services' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AC brands we service in Hyderabad',
    itemListElement: Object.values(brandDetails).map((brand, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${brand.brand} AC Service & Repair`,
      url: `${SITE_URL}/services/${brand.slug}`,
    })),
  },
];

export default function Services() {
  const brandList = [
    { name: 'Hitachi AC', slug: 'hitachi', logo: '/brand-logos/hitachi.svg', desc: 'Inverter & Split AC cooling specialists' },
    { name: 'LG AC', slug: 'lg', logo: '/brand-logos/lg.svg', desc: 'Dual Inverter & Smart AC expert repair' },
    { name: 'Daikin AC', slug: 'daikin', logo: '/brand-logos/daikin.svg', desc: 'Streamer & Inverter PCB & Gas refill' },
    { name: 'O General AC', slug: 'o-general', logo: '/brand-logos/ogeneral.svg', desc: 'Heavy-duty cooling & compressor repair' },
    { name: 'Voltas AC', slug: 'voltas', logo: '/brand-logos/voltas.svg', desc: 'All-weather & Inverter AC doorstep service' },
    { name: 'Samsung AC', slug: 'samsung', logo: '/brand-logos/samsung.svg', desc: 'WindFree & Digital Inverter solutions' },
    { name: 'Blue Star AC', slug: 'blue-star', logo: '/brand-logos/bluestar.svg', desc: 'Precision cooling & commercial cassette repair' },
    { name: 'Carrier & Lloyd AC', slug: 'other-brands', logo: '/brand-logos/carrier.svg', desc: 'Complete multi-brand service across Hyderabad' },
  ];

  const brandShowcase = [
    {
      id: 'lg',
      slug: 'lg',
      brand: 'LG',
      logo: '/brand-logos/lg.svg',
      badge: 'LG Dual Inverter Specialist',
      tagline: 'AI Dual Inverter & Smart Diagnosis Repair',
      title: 'LG Air Conditioner Repair & Jet Servicing',
      desc: 'Expert doorstep diagnostics and rapid repairs for all LG Split, Window, and Dual Inverter ACs across Hyderabad. Our certified technicians specialize in PCB repair, gas leakage detection, error codes (CH05, CH10, CH21), compressor maintenance, and ultra-clean jet pump foam washing.',
      features: [
        'Free Doorstep Visiting & Diagnosis',
        '100% Genuine LG Compressor & PCB Parts',
        '60-Minute Fast Arrival in Hyderabad',
        '90-Day Post-Repair Service Guarantee',
      ],
      image: '/brands/lg-ac.jpg',
      imageAlt: 'LG Dual Inverter Split AC Servicing',
      highlightBadge: '90-Day Service Warranty',
      whatsappMsg: 'Hi, I need service/repair for my LG AC in Hyderabad. Please book a technician.',
    },
    {
      id: 'voltas',
      slug: 'voltas',
      brand: 'Voltas',
      logo: '/brand-logos/voltas.svg',
      badge: 'Voltas All-Weather Expert',
      tagline: 'Maha-Adjustable & Inverter AC Doorstep Care',
      title: 'Voltas Air Conditioner Doorstep Service & Repair',
      desc: 'Quick and reliable service for all Voltas Inverter, Split, and Window AC models. We resolve low cooling problems, noisy outdoor units, capacitor replacements, copper tube welding, and precision R32/R410A refrigerant charging with high cooling performance guaranteed.',
      features: [
        'Zero Visiting Fee at Your Location',
        'Original Voltas Spare Parts with Warranty',
        'Same-Day Doorstep Technician Dispatch',
        'Jet Foam Wash for 2x Cooling Efficiency',
      ],
      image: '/brands/voltas-ac.jpg',
      imageAlt: 'Voltas Inverter AC Repair and Maintenance',
      highlightBadge: 'Fast Doorstep Service',
      whatsappMsg: 'Hi, I need service/repair for my Voltas AC in Hyderabad. Please book a technician.',
    },
    {
      id: 'daikin',
      slug: 'daikin',
      brand: 'Daikin',
      logo: '/brand-logos/daikin.svg',
      badge: 'Daikin Japanese Precision',
      tagline: 'Streamer Inverter & Heavy Duty Cooling Care',
      title: 'Daikin AC Inverter PCB & Gas Refilling Service',
      desc: 'Authorized-grade servicing for Daikin Streamer and Inverter series split AC units. Our specialists diagnose Daikin blink codes, electronic expansion valve issues, indoor coil ice buildup, and execute high-pressure jet pump wash without water spill.',
      features: [
        'Zero Inspection Charge Across Hyderabad',
        'Daikin Certified Technicians with 10+ Yrs Exp',
        'Original Japanese Specification Spare Parts',
        '3-Month Assurance on Repaired Components',
      ],
      image: '/brands/daikin-ac.jpg',
      imageAlt: 'Daikin Inverter AC Service and Gas Refill',
      highlightBadge: 'Certified Inverter Experts',
      whatsappMsg: 'Hi, I need service/repair for my Daikin AC in Hyderabad. Please book a technician.',
    },
    {
      id: 'hitachi',
      slug: 'hitachi',
      brand: 'Hitachi',
      logo: '/brand-logos/hitachi.svg',
      badge: 'Hitachi Rapid Chill Specialist',
      tagline: 'Quadricool & Smart Inverter AC Solutions',
      title: 'Hitachi Air Conditioner Repair & Maintenance',
      desc: 'Specialized maintenance for Hitachi Yoshi, Quadricool, and Toushi inverter air conditioners. From thermistor sensor faults and inverter PCB failures to fan motor replacement and complete coil descaling, we restore icy cooling fast.',
      features: [
        'Free Visiting & Complete Health Checkup',
        'Genuine Hitachi Relays, Motors & Sensors',
        'Express 60-Minute Service Response',
        'Anti-Bacterial Foam Cleaning Included',
      ],
      image: '/brands/hitachi-ac.jpg',
      imageAlt: 'Hitachi Split AC Servicing and Repair',
      highlightBadge: 'Rapid Chill Guarantee',
      whatsappMsg: 'Hi, I need service/repair for my Hitachi AC in Hyderabad. Please book a technician.',
    },
    {
      id: 'ogeneral',
      slug: 'o-general',
      brand: 'O General',
      logo: '/brand-logos/ogeneral.svg',
      badge: 'O General Heavy Duty Cooling',
      tagline: 'Tropical Split & Heavy Duty Compressor Care',
      title: 'O General AC Tropical Repair & Overhaul',
      desc: 'Dedicated heavy-duty repair solutions for O General tropical split and window AC systems. We handle tough compressor overhauls, vibration damping, copper pipe flaring, flare nut leak sealing, and heavy dust deep jet pump cleaning.',
      features: [
        '100% Free Doorstep Visiting Charge',
        'Heavy Duty Compressor Diagnostics',
        'Pure Gas Refill with Leak Pressure Testing',
        'Long-Lasting 90-Day Repair Guarantee',
      ],
      image: '/brands/ogeneral-ac.jpg',
      imageAlt: 'O General Heavy Duty Air Conditioner Repair',
      highlightBadge: 'Tropical Cooling Specialist',
      whatsappMsg: 'Hi, I need service/repair for my O General AC in Hyderabad. Please book a technician.',
    },
    {
      id: 'samsung',
      slug: 'samsung',
      brand: 'Samsung',
      logo: '/brand-logos/samsung.svg',
      badge: 'Samsung WindFree Specialist',
      tagline: 'WindFree & Convertible 5-in-1 AC Repair',
      title: 'Samsung Air Conditioner Service & Smart Care',
      desc: 'Comprehensive repair service for Samsung WindFree, Convertible, and Digital Inverter models. Certified repair for clogged micro-holes, error codes (E1, E2, E4, C1), indoor blower servicing, motherboard replacement, and whisper-quiet cooling restoration.',
      features: [
        'Free Doorstep Visiting in 50+ Hyderabad Localities',
        'Original Samsung Electronic Parts & Sensors',
        'Specialized WindFree Micro-Hole Jet Wash',
        'Verified Technicians with Transparent Pricing',
      ],
      image: '/brands/samsung-ac.jpg',
      imageAlt: 'Samsung WindFree AC Repair and Servicing',
      highlightBadge: 'Smart WindFree Care',
      whatsappMsg: 'Hi, I need service/repair for my Samsung AC in Hyderabad. Please book a technician.',
    },
    {
      id: 'bluestar',
      slug: 'blue-star',
      brand: 'Blue Star',
      logo: '/brand-logos/bluestar.svg',
      badge: 'Blue Star Precision Air',
      tagline: 'Precision Cooling & Commercial Split AC Care',
      title: 'Blue Star Air Conditioner Repair & Jet Wash',
      desc: 'Expert maintenance for Blue Star residential split and commercial air conditioning units. We offer nitrogen pressure testing, copper coil brazing, capacitor replacement, PCB soldering, and jet cleaning for maximum energy efficiency.',
      features: [
        'Free Visiting & Complete Leak Inspection',
        'Original Blue Star Spares & Filter Elements',
        '60-Minute Prompt Technician Arrival',
        'Full 90-Day Warranty on All Work',
      ],
      image: '/brands/bluestar-ac.jpg',
      imageAlt: 'Blue Star Inverter Split AC Service',
      highlightBadge: 'Precision Air Experts',
      whatsappMsg: 'Hi, I need service/repair for my Blue Star AC in Hyderabad. Please book a technician.',
    },
    {
      id: 'other-brand',
      slug: 'other-brands',
      brand: 'Other Brand AC',
      logo: '/brand-logos/multibrand.svg',
      badge: 'Multi-Brand AC Specialist',
      tagline: 'Carrier, Panasonic, Lloyd, Godrej, Mitsubishi & More',
      title: 'All Other Brand AC Repair & Servicing',
      desc: 'Don’t see your AC brand? We provide certified multi-brand doorstep repair, high-pressure jet cleaning, gas charging, and PCB circuit repair for Carrier, Panasonic, Lloyd, Godrej, Mitsubishi, Whirlpool, IFB, Onida, and all other air conditioner brands across Hyderabad.',
      features: [
        'Free Doorstep Visiting & Full Diagnostics',
        'Genuine OEM-Grade Spare Parts',
        '60-Minute Rapid Response in Hyderabad',
        '90-Day Comprehensive Service Warranty',
      ],
      image: '/brands/other-ac.jpg',
      imageAlt: 'All Other Brand AC Servicing and Repair',
      highlightBadge: 'Multi-Brand Specialists',
      whatsappMsg: 'Hi, I need service/repair for my AC in Hyderabad. Please book a technician.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <section className="page-banner">
        <div className="container">
          <h1>Our AC Services</h1>
          <p>Complete Air Conditioner Repair, Jet Cleaning &amp; Gas Refill in Hyderabad, Telangana 500023</p>
        </div>
      </section>

      {/* Brand Specific AC Showcase Section (Alternating Left/Right) */}
      <section className="brand-showcase-section">
        <div className="container">
          <div className="brand-showcase-header">
            <div className="brand-section-pill">
              <i className="fa-solid fa-snowflake"></i> AUTHORIZED-GRADE BRAND AC SERVICING
            </div>
            <h2>Specialized AC Care for <span className="red-text">Top Brands</span></h2>
            <p>
              Doorstep diagnostics, 100% original spare parts, and expert jet pump foam cleaning for all major air conditioner brands in Hyderabad.
            </p>
          </div>

          <div className="brand-showcase-container">
            {brandShowcase.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={item.id}
                  className={`brand-showcase-card ${isEven ? 'row-reverse' : 'row-normal'}`}
                >
                  {/* Text + Service Button Side */}
                  <div className="brand-content-side">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
                      {item.logo && (
                        <div style={{ background: '#ffffff', border: '1.5px solid #E2E8F0', padding: '6px 14px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(2, 58, 110, 0.06)' }}>
                          <img src={item.logo} alt={`${item.brand} Logo`} style={{ height: '26px', width: 'auto', display: 'block' }} />
                        </div>
                      )}
                      <div className="brand-badge" style={{ margin: 0 }}>
                        <i className="fa-solid fa-certificate" style={{ color: '#FF5E00' }}></i> {item.badge}
                      </div>
                    </div>

                    {/* Mobile Brand AC Image (Placed directly between badge and title) */}
                    <div className="brand-image-side brand-image-mobile" style={{ position: 'relative' }}>
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                      />
                      {item.logo && (
                        <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#ffffff', padding: '4px 10px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', zIndex: 2 }}>
                          <img src={item.logo} alt={item.brand} style={{ height: '18px', width: 'auto', display: 'block' }} />
                        </div>
                      )}
                      <div className="brand-image-floating-badge">
                        <i className="fa-solid fa-shield-check"></i> {item.highlightBadge}
                      </div>
                    </div>

                    <h3>{item.title}</h3>
                    <div className="brand-tagline">{item.tagline}</div>
                    <p className="brand-desc">{item.desc}</p>

                    <ul className="brand-features-list">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <i className="fa-solid fa-circle-check"></i>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="brand-btn-group">
                      <Link
                        href={`/services/${item.slug || item.id}`}
                        className="btn-brand-service"
                      >
                        Book {item.brand} Service
                      </Link>
                    </div>
                  </div>

                  {/* Desktop Brand AC Image Side */}
                  <div className="brand-image-side brand-image-desktop" style={{ position: 'relative' }}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                    />
                    {item.logo && (
                      <div style={{ position: 'absolute', top: '14px', left: '14px', background: '#ffffff', padding: '5px 12px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', zIndex: 2 }}>
                        <img src={item.logo} alt={item.brand} style={{ height: '20px', width: 'auto', display: 'block' }} />
                      </div>
                    )}
                    <div className="brand-image-floating-badge">
                      <i className="fa-solid fa-shield-check"></i> {item.highlightBadge}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing / Charges Cards */}
      <section className="service-charges section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#F0F7FF', border: '1px solid #D0E4FF', borderRadius: '30px', padding: '6px 16px' }}>
              <img src="/logo-icon.png?v=5" alt="24x7 AC Repair Support" style={{ height: '24px', width: 'auto' }} />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#023a6e' }}>24x7 AC REPAIR SUPPORT • ALL BRANDS SERVICING</span>
            </div>
          </div>
          <div className="section-title">
            <h2>AC <span className="red-text">Service</span> Charges</h2>
            <p>Transparent rates for Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star &amp; all AC brands</p>
          </div>

          <div className="charges-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
            {/* Card 1: AC Jet Foam Wash */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-jet-wash.jpg" alt="AC Jet Pump Foam Wash" />
                <div className="icon-circle"><i className="fa-solid fa-soap"></i></div>
              </div>
              <div className="card-content">
                <h3>AC Jet Pump<br />Foam Cleaning</h3>
                <div className="price">₹499</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 2: AC Gas Refill */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-gas-charging.jpg" alt="AC Gas Refilling & Leak Repair" />
                <div className="icon-circle"><i className="fa-solid fa-gauge-high"></i></div>
              </div>
              <div className="card-content">
                <h3>AC Gas Refilling<br />&amp; Leak Repair</h3>
                <div className="price">₹1499</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 3: Inverter PCB & Repair */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-repair-clean.jpg" alt="Inverter AC PCB & Electrical Repair" />
                <div className="icon-circle"><i className="fa-solid fa-microchip"></i></div>
              </div>
              <div className="card-content">
                <h3>AC PCB Board<br />&amp; Sensor Repair</h3>
                <div className="price">₹799</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 4: Installation / Relocation */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-installation.jpg" alt="AC Installation & Uninstallation" />
                <div className="icon-circle"><i className="fa-solid fa-screwdriver-wrench"></i></div>
              </div>
              <div className="card-content">
                <h3>AC Installation<br />&amp; Relocation</h3>
                <div className="price">₹699</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 5: Free Visiting */}
            <div className="charge-card visiting-card">
              <div className="card-img">
                <img src="/free-services.webp" alt="Free AC Inspection Visit" />
                <div className="icon-circle"><i className="fa-solid fa-user-tie"></i></div>
              </div>
              <div className="card-content">
                <h3>Doorstep Visiting<br />&amp; Inspection</h3>
                <div className="price">FREE</div>
                <p className="free-text">Across All Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service Section */}
      <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-title text-center">
            <span style={{ color: '#FF5E00', fontWeight: 800, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Multi-Brand AC Specialist Center
            </span>
            <h2 style={{ marginTop: '8px' }}>
              In Sabhi Companies Ki <span className="red-text">AC Ki Servicing</span> Hoti Hai Yahan
            </h2>
            <p>
              We provide factory-grade servicing &amp; genuine spare parts for Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star, Carrier &amp; more.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '30px' }}>
            {brandList.map((brand, idx) => (
              <Link
                key={idx}
                href={`/services/${brand.slug || 'other-brands'}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '22px 18px',
                    boxShadow: '0 4px 15px rgba(2, 58, 110, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '46px',
                      borderRadius: '10px',
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px 8px',
                      flexShrink: 0,
                    }}
                  >
                    <img src={brand.logo} alt={brand.name} style={{ maxHeight: '28px', maxWidth: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '16px', color: '#023a6e', fontWeight: 700 }}>
                      {brand.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '12.5px', color: '#64748B', lineHeight: '1.4' }}>
                      {brand.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ padding: '12px 28px', fontSize: '15px' }}
            >
              <i className="fa-solid fa-calendar-check"></i> Book AC Service for Your Brand
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed AC Services Breakdown */}
      <section className="important-appliances section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Detailed <span className="red-text">AC Services</span> Overview</h2>
            <p>Comprehensive diagnostic and repair solutions for Split, Window, Inverter &amp; Cassette ACs</p>
          </div>

          <div className="appliances-grid">
            {/* Box 1: AC Jet Foam Wash */}
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>AC Jet Foam Deep Cleaning &amp; Wash</h3>
                <p style={{ textAlign: 'left', marginTop: '15px' }}>
                  Professional high-pressure power jet wash with antibacterial foam that removes stubborn dust, mold, and sludge from indoor and outdoor coils.
                </p>
                <ul className="check-list" style={{ textAlign: 'left', marginTop: '15px' }}>
                  <li><i className="fa-solid fa-circle-check"></i> 2X Cooling enhancement &amp; low power consumption</li>
                  <li><i className="fa-solid fa-circle-check"></i> Indoor evaporator coil, blower &amp; filter jet wash</li>
                  <li><i className="fa-solid fa-circle-check"></i> Outdoor condenser coil deep pressure rinse</li>
                  <li><i className="fa-solid fa-circle-check"></i> Drain tray flush to eliminate water leakage &amp; bad odor</li>
                </ul>
              </div>
              <div className="appliance-img">
                <img src="/ac-jet-wash.jpg" alt="AC Jet Foam Deep Cleaning" />
              </div>
            </div>

            {/* Box 2: AC Gas Refilling */}
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>AC Gas Refill &amp; Leakage Fixing</h3>
                <p style={{ textAlign: 'left', marginTop: '15px' }}>
                  Complete nitrogen pressure leak test, precision copper brazing, system evacuation with vacuum pump, and accurate refrigerant gas charging.
                </p>
                <ul className="check-list" style={{ textAlign: 'left', marginTop: '15px' }}>
                  <li><i className="fa-solid fa-circle-check"></i> R32, R410A &amp; R22 refrigerant gases in stock</li>
                  <li><i className="fa-solid fa-circle-check"></i> Nitrogen pressure leak testing of condenser &amp; evaporator</li>
                  <li><i className="fa-solid fa-circle-check"></i> High-temp copper pipe brazing &amp; flare nut sealing</li>
                  <li><i className="fa-solid fa-circle-check"></i> Operating pressure &amp; amp draw testing for chill cooling</li>
                </ul>
              </div>
              <div className="appliance-img">
                <img src="/ac-gas-charging.jpg" alt="AC Gas Refill & Leakage Fixing" />
              </div>
            </div>

            {/* Box 3: Inverter AC PCB & Sensor Repair */}
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Inverter AC PCB &amp; Electrical Repair</h3>
                <p style={{ textAlign: 'left', marginTop: '15px' }}>
                  Specialized micro-circuit repair for modern inverter ACs. We fix error codes, sensor issues, and power supply malfunctions at component level.
                </p>
                <ul className="check-list" style={{ textAlign: 'left', marginTop: '15px' }}>
                  <li><i className="fa-solid fa-circle-check"></i> Inverter motherboard &amp; IPM module diagnosis</li>
                  <li><i className="fa-solid fa-circle-check"></i> Ambient, coil &amp; discharge sensor replacements</li>
                  <li><i className="fa-solid fa-circle-check"></i> BLDC indoor/outdoor fan motor &amp; capacitor fixes</li>
                  <li><i className="fa-solid fa-circle-check"></i> Display board, remote receiver &amp; wiring troubleshooting</li>
                </ul>
              </div>
              <div className="appliance-img">
                <img src="/ac-repair-clean.jpg" alt="Inverter AC PCB & Electrical Repair" />
              </div>
            </div>

            {/* Box 4: AC Installation & Relocation */}
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>AC Installation, Uninstallation &amp; Relocation</h3>
                <p style={{ textAlign: 'left', marginTop: '15px' }}>
                  Certified installation with zero vibration mounting, precision levelling, vacuumization, and safety-tested electrical fittings for long unit life.
                </p>
                <ul className="check-list" style={{ textAlign: 'left', marginTop: '15px' }}>
                  <li><i className="fa-solid fa-circle-check"></i> Split AC &amp; Window AC standard installation</li>
                  <li><i className="fa-solid fa-circle-check"></i> Heavy-duty outdoor stand &amp; anti-vibration rubber pads</li>
                  <li><i className="fa-solid fa-circle-check"></i> Safe uninstallation with 100% gas pump-down locking</li>
                  <li><i className="fa-solid fa-circle-check"></i> Heavy gauge insulated copper piping &amp; drain hose extension</li>
                </ul>
              </div>
              <div className="appliance-img">
                <img src="/ac-installation.jpg" alt="AC Installation & Relocation" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Service Areas Section */}
      <ServiceAreas />

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="cta-icon"><i className="fa-solid fa-snowflake"></i></div>
            <div>
              <h3>Is Your AC Not Cooling Properly?</h3>
              <h2>Schedule a Doorstep AC Visit in Hyderabad!</h2>
              <p>Experienced technicians for Hitachi, LG, Daikin, O General, Voltas, Samsung &amp; Blue Star with 100% FREE visiting charge.</p>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="tel:1234561232" className="btn btn-white"><i className="fa-solid fa-phone"></i> Call 1234561232</a>
            <Link href="/contact" className="btn btn-dark" style={{ border: '2px solid white' }}>Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
