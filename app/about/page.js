import Link from 'next/link';

export const metadata = {
  title: "About Us | 24x7 AC Repair & Service Center Hyderabad | All Brands",
  description: "24x7 AC Repair Support provides professional doorstep AC service, jet pump wash, gas charging & PCB repairs for Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star in Hyderabad, Telangana 500023. Free visiting charge.",
};

export default function About() {
  const brandList = [
    { name: 'Hitachi AC', slug: 'hitachi', logo: '/brand-logos/hitachi.svg' },
    { name: 'LG AC', slug: 'lg', logo: '/brand-logos/lg.svg' },
    { name: 'Daikin AC', slug: 'daikin', logo: '/brand-logos/daikin.svg' },
    { name: 'O General AC', slug: 'o-general', logo: '/brand-logos/ogeneral.svg' },
    { name: 'Voltas AC', slug: 'voltas', logo: '/brand-logos/voltas.svg' },
    { name: 'Samsung AC', slug: 'samsung', logo: '/brand-logos/samsung.svg' },
    { name: 'Blue Star AC', slug: 'blue-star', logo: '/brand-logos/bluestar.svg' },
    { name: 'Carrier AC', slug: 'other-brands', logo: '/brand-logos/carrier.svg' },
    { name: 'Lloyd AC', slug: 'other-brands', logo: '/brand-logos/lloyd.svg' },
    { name: 'Panasonic AC', slug: 'other-brands', logo: '/brand-logos/panasonic.svg' },
    { name: '+ All Other Brands', slug: 'other-brands', logo: '/brand-logos/multibrand.svg' },
  ];

  return (
    <>
      {/* Top Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>About 24x7 AC Repair Support</h1>
          <p>Certified Air Conditioner Repair &amp; Servicing Center based in Hyderabad, Telangana 500023</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-section-grid">
            
            <div className="about-content-text">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#F0F7FF', border: '1px solid #D0E4FF', borderRadius: '40px', padding: '6px 16px', marginBottom: '18px' }}>
                <img src="/logo-icon.png?v=5" alt="24x7 AC Repair Support" style={{ height: '26px', width: 'auto' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#023a6e', letterSpacing: '0.2px' }}>
                  24x7 AC REPAIR SUPPORT • HYDERABAD HUB
                </span>
              </div>
              <h2>Certified Air Conditioner (AC) Service &amp; Repair Specialists in Hyderabad</h2>
              
              <ul className="check-list">
                <li><i className="fa-solid fa-circle-check"></i> <div>Welcome to <strong>24x7 AC Repair Support</strong>, your dedicated specialist center for all Split, Window, Inverter, and Cassette Air Conditioners across Hyderabad, Telangana.</div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div><strong>In sabhi companies ki AC ki servicing hoti hai yahan:</strong> Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star, Carrier, Lloyd, Panasonic, and many more.</div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>Conveniently located in <strong>Hyderabad, Telangana 500023</strong>, our certified technicians reach Sanath Nagar, Ameerpet, Banjara Hills, Jubilee Hills, Hitec City, Gachibowli, Kukatpally, and surrounding areas in 30 to 60 minutes.</div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>Our commitment is clear: <strong>accurate electronic diagnosis, upfront pricing, genuine factory spares, and 100% satisfaction guarantee.</strong></div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>Whether your AC is not cooling, leaking water inside, having error codes, or needing urgent gas refilling, our emergency AC technicians are just a phone call away 24x7.</div></li>
              </ul>

              <h3 style={{ marginTop: '20px', marginBottom: '10px', color: 'var(--dark-blue)' }}>Expert Doorstep AC Service with FREE Visiting Charge</h3>
              <p>At 24x7 AC Repair Support, we believe cooling repairs should be transparent and fair. We provide free doorstep inspection across our service areas with zero hidden inspection fees.</p>
              
              <a href="tel:1234561232" className="btn btn-primary" style={{ padding: '12px 25px', fontSize: '15px', marginTop: '10px' }}>
                <i className="fa-solid fa-phone"></i> Call 1234561232
              </a>
            </div>

            {/* Images Grid */}
            <div className="about-images-grid">
              <div className="about-img-wrap">
                <img src="/ac-repair-clean.jpg" alt="24x7 AC Repair Support Service" />
              </div>
              <div className="about-img-wrap" style={{ marginTop: '30px' }}>
                <img src="/ac-jet-wash.jpg" alt="AC Jet Pump Foam Cleaning in Hyderabad" />
              </div>
              <div className="about-img-wrap" style={{ marginTop: '-30px' }}>
                <img src="/ac-gas-charging.jpg" alt="AC Gas Refill and Leak Repair" />
              </div>
              <div className="about-img-wrap">
                <img src="/ac-installation.jpg" alt="AC Installation & Mounting Service" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brands We Service Banner */}
      <section className="section-padding bg-light" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-title text-center">
            <span style={{ color: '#FF5E00', fontWeight: 800, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Authorized Quality Standards
            </span>
            <h2 style={{ marginTop: '8px' }}>
              All Top AC Brands Serviced Under One Roof
            </h2>
            <p>
              Hitachi • LG • Daikin • O General • Voltas • Samsung • Blue Star &amp; Many More
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '25px', maxWidth: '900px', margin: '25px auto 0' }}>
            {brandList.map((brand, idx) => (
              <Link
                key={idx}
                href={`/services/${brand.slug}`}
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: '#023a6e',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  padding: '8px 18px',
                  borderRadius: '30px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                className="about-brand-pill"
              >
                <img src={brand.logo} alt={brand.name} style={{ height: '18px', width: 'auto', display: 'block' }} />
                <span>{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2>Why Choose <span className="red-text">24x7 AC Repair Support?</span></h2>
            <p>Hyderabad&apos;s Most Trusted Air Conditioning Service Engineers</p>
          </div>

          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', color: 'var(--text-gray)' }}>
            Air conditioners are delicate, high-voltage refrigeration systems. You need skilled HVAC technicians who properly diagnose compressor compression, refrigerant pressure, and PCB micro-circuits with genuine parts.
          </p>

          <div className="about-process-grid">
            <div className="process-card">
              <h4>Certified AC Engineers</h4>
              <p>Our technicians are factory-trained in handling Inverter technology, Dual-Inverter systems, and multi-split cooling circuits.</p>
            </div>
            <div className="process-card">
              <h4>Transparent AC Charges</h4>
              <p>Competitive rates starting at ₹499 for full jet foam wash and ₹0 completely FREE visiting charge across Greater Hyderabad.</p>
            </div>
            <div className="process-card">
              <h4>Rapid Arrival in 30-60 Mins</h4>
              <p>Quick doorstep service dispatch from Hyderabad 500023. Our mobile vans carry essential gauges, brazing tools, and testing equipment.</p>
            </div>
            <div className="process-card">
              <h4>100% Genuine Spare Parts</h4>
              <p>Authentic brand compressors, fan motors, run capacitors, expansion valves, and copper pipes backed by replacement warranty.</p>
            </div>
            <div className="process-card">
              <h4>90-Day Service Warranty</h4>
              <p>We stand behind every repair and gas refill with warranty protection on labor and replaced components.</p>
            </div>
            <div className="process-card">
              <h4>24x7 Summer Emergency Care</h4>
              <p>Round-the-clock emergency support so you never have to sleep in the sweltering heat when your AC breaks down at night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific AC Service Categories */}
      <section className="section-padding bg-light">
        <div className="container">
          
          {/* Category 1: Jet Wash */}
          <div className="about-content-section">
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Power Jet Foam AC Deep Servicing</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>Air quality and cooling speed drop drastically when indoor cooling fins and outdoor condenser coils get packed with dust. Our pressurized jet cleaning restores factory airflow.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Indoor Evaporator Jet Wash</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Deep foam spraying on cooling coils, sanitized wash of rotary blower fan, clean drain pan to stop indoor dripping, and antimicrobial treatment.</p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Outdoor Unit High-Pressure Rinse</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Clearing mud, birds&apos; nests, and grime from condenser coils to drop compressor head pressure and reduce monthly electricity bills up to 25%.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              <a href="tel:1234561232" className="btn btn-primary" style={{ padding: '10px 25px' }}>
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/911234561232" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 25px', background: '#25D366', color: '#fff', border: 'none' }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> WhatsApp Us
              </a>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '40px 0' }} />

          {/* Category 2: Gas Refill */}
          <div className="about-content-section">
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Refrigerant Gas Charging &amp; Leakage Fixing</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>Low gas is the #1 reason an AC blows warm air or forms ice on the copper pipes. We locate leaks and restore full cooling capacity safely.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Nitrogen Leak Testing &amp; Copper Brazing</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>We pressurize the system with dry nitrogen up to 300 PSI, find tiny pinhole leaks using bubble testing, and braze high-grade silver copper alloys.</p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Pure R32, R410A &amp; R22 Gas Charging</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Deep vacuuming with two-stage vacuum pump before gas refilling to avoid moisture, ensuring chill sub-cooling and long compressor life.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              <a href="tel:1234561232" className="btn btn-primary" style={{ padding: '10px 25px' }}>
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/911234561232" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 25px', background: '#25D366', color: '#fff', border: 'none' }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> WhatsApp Us
              </a>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '40px 0' }} />

          {/* Category 3: Inverter PCB */}
          <div className="about-content-section">
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Inverter AC PCB Circuit Board &amp; Electrical Repairs</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>Modern 5-star inverter ACs use sophisticated electronic motherboards. Instead of recommending costly full replacements, our chip-level engineers repair existing boards.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Error Code Diagnostic</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Complete troubleshooting for Daikin, Hitachi, LG, Samsung, and Voltas error codes (E1, E2, E6, CH05, etc.), sensor faults, and communication errors.</p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>IPM &amp; Power Supply Repair</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Inverter Power Module (IPM) testing, relay replacement, rectifiers, capacitors, and outdoor motherboard protection fixes against voltage spikes.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              <a href="tel:1234561232" className="btn btn-primary" style={{ padding: '10px 25px' }}>
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/911234561232" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 25px', background: '#25D366', color: '#fff', border: 'none' }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing & Locations */}
      <section className="section-padding">
        <div className="container">
          <div className="about-section-grid">
            
            <div>
              <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Transparent AC Service Rates</h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>No hidden charges. We believe in 100% upfront pricing with zero inspection fees across Hyderabad.</p>
              
              <div className="pricing-table-container">
                <div className="pricing-row">
                  <span className="pricing-item">AC Jet Foam Deep Cleaning</span>
                  <span className="pricing-cost">₹499</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">AC Gas Refill &amp; Leak Repair</span>
                  <span className="pricing-cost">₹1499</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">Inverter AC PCB Circuit Repair</span>
                  <span className="pricing-cost">₹799</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">AC Installation / Relocation</span>
                  <span className="pricing-cost">₹699</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">Doorstep Visiting &amp; Inspection</span>
                  <span className="pricing-cost">FREE</span>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#888', marginTop: '10px' }}>*Note: Visiting &amp; inspection are completely FREE. All repair spares carry guaranteed warranty.</p>
            </div>

            <div>
              <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Doorstep AC Coverage in Hyderabad</h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>24x7 AC Repair Support is based in Hyderabad, Telangana 500023. Our rapid dispatch vans serve:</p>
              
              <ul className="check-list">
                <li><i className="fa-solid fa-location-dot"></i> <div>Sanath Nagar &amp; Erragadda (500023)</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Ameerpet, SR Nagar &amp; Punjagutta</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Banjara Hills &amp; Jubilee Hills</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Madhapur, Hitec City, Gachibowli &amp; Kondapur</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Kukatpally, Begumpet, Secunderabad &amp; Greater Hyderabad</div></li>
              </ul>
              <p style={{ color: 'var(--primary-red)', fontWeight: 600, fontSize: '14px' }}>Call us directly at 1234561232 for immediate 30-minute arrival in your area.</p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq section-padding bg-light">
        <div className="container faq-inner">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <h2>Frequently Asked <span className="red-text">Questions</span></h2>
            <p>Find answers to common questions about our AC repair &amp; maintenance</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Which AC brands do you service and repair?</summary>
              <div className="faq-content">
                <p>We service and repair all major brands including Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star, Carrier, Lloyd, Panasonic, Mitsubishi, and Godrej. In sabhi companies ki AC ki servicing hoti hai yahan!</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Why is my AC not blowing cool air?</summary>
              <div className="faq-content">
                <p>Common causes include low refrigerant gas due to coil leakage, a choked filter or condenser, failed compressor capacitor, or a faulty inverter PCB board. Our technician checks all 5 parameters on-site with zero visiting charge.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Is the visiting and inspection charge really free?</summary>
              <div className="faq-content">
                <p>Yes! Our visiting and basic inspection charge is 100% FREE across all areas of Hyderabad and Telangana. You only pay for repairs or services you approve.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>How fast can an AC technician reach my doorstep?</summary>
              <div className="faq-content">
                <p>Our average arrival time is 30 to 60 minutes across Greater Hyderabad, including Sanath Nagar, Ameerpet, Banjara Hills, Jubilee Hills, Madhapur, Hitec City, and Kukatpally.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Where is 24x7 AC Repair Support located?</summary>
              <div className="faq-content">
                <p>We are centrally located in Hyderabad, Telangana 500023, providing round-the-clock emergency AC repair across all Hyderabad neighborhoods.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="cta-icon"><i className="fa-solid fa-snowflake"></i></div>
            <div>
              <h3>Need Immediate AC Repair in Hyderabad?</h3>
              <h2>Book Your Certified AC Technician Today!</h2>
              <p>Fast doorstep service from Hyderabad, Telangana 500023. Visiting Charge is 100% FREE.</p>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="tel:1234561232" className="btn btn-white"><i className="fa-solid fa-phone"></i> Call 1234561232</a>
            <a href="https://wa.me/911234561232" target="_blank" rel="noopener noreferrer" className="btn btn-white"><i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '20px' }}></i> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
