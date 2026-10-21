import Link from 'next/link';

export const metadata = {
  title: "About Home Care AC Service Center | AC & Appliance Repair in Delhi",
  description: "Home Care AC Service Center provides professional AC, Refrigerator, Washing Machine and Microwave Oven repair based at Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi. Free visiting charge.",
};

export default function About() {
  return (
    <>
      {/* Top Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>About Home Care AC Service Center</h1>
          <p>Reliable AC &amp; Home Appliance Repair Service based in Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-section-grid">
            
            <div className="about-content-text">
              <h2>Reliable AC, Refrigerator &amp; Appliance Service in Delhi</h2>
              
              <ul className="check-list">
                <li><i className="fa-solid fa-circle-check"></i> <div>Welcome to <strong>Home Care AC Service Center</strong>, your trusted local destination for reliable, fast, and affordable home appliance repairs in Delhi NCR.</div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>We specialize in doorstep service for <strong>Air Conditioners (AC), Refrigerators, Washing Machines, and Microwave Ovens</strong> with experienced technicians.</div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>Conveniently located at <strong>Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi</strong>, we serve homes across Maujpur, Shahdara, and surrounding areas.</div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>Our commitment is clear: <strong>accurate diagnosis, upfront pricing, genuine spare parts, and dependable doorstep service.</strong></div></li>
                <li><i className="fa-solid fa-circle-check"></i> <div>Whether your AC is not cooling, your fridge is leaking, your washing machine drum is stuck, or your microwave is not heating, our team is just a phone call away.</div></li>
              </ul>

              <h3 style={{ marginTop: '20px', marginBottom: '10px', color: 'var(--dark-blue)' }}>Affordable Doorstep Service with FREE Visiting Charge</h3>
              <p>At Home Care AC Service Center, we believe repair costs should be transparent and fair. We provide free doorstep inspection across our service areas with zero hidden fees.</p>
              
              <a href="tel:7428194037" className="btn btn-primary" style={{ padding: '12px 25px', fontSize: '15px', marginTop: '10px' }}>
                <i className="fa-solid fa-phone"></i> Call 7428194037
              </a>
            </div>

            {/* Images Grid */}
            <div className="about-images-grid">
              <div className="about-img-wrap">
                <img src="/ac-repair-clean.jpg" alt="Home Care AC Repair Service" />
              </div>
              <div className="about-img-wrap" style={{ marginTop: '30px' }}>
                <img src="/microwave-repair-clean.jpg" alt="Microwave Oven Service in Delhi" />
              </div>
              <div className="about-img-wrap" style={{ marginTop: '-30px' }}>
                <img src="/fridge-repair-clean.jpg" alt="Refrigerator Repair Service" />
              </div>
              <div className="about-img-wrap">
                <img src="/washer-repair-clean.jpg" alt="Washing Machine Repair Service" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title text-center">
            <h2>Why Choose <span className="red-text">Home Care AC Service Center?</span></h2>
            <p>Trusted Doorstep Appliance Repair in Delhi</p>
          </div>

          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', color: 'var(--text-gray)' }}>
            Choosing the right technician matters. You want skilled technicians who diagnose the root problem, provide lasting fixes with original parts, and charge fair prices. Home Care AC Service Center is dedicated to keeping your home running smoothly.
          </p>

          <div className="about-process-grid">
            <div className="process-card">
              <h4>Experienced Technicians</h4>
              <p>Our technicians have in-depth expertise in servicing Split &amp; Window ACs, Inverter Refrigerators, Automatic Washers, and Convection Microwave Ovens.</p>
            </div>
            <div className="process-card">
              <h4>Affordable Service Charges</h4>
              <p>Simple and transparent pricing starting at ₹249 with a 100% FREE visiting charge across Shahdara and nearby neighborhoods.</p>
            </div>
            <div className="process-card">
              <h4>Doorstep Service in 60 Mins</h4>
              <p>No need to haul bulky appliances anywhere. We bring tools and original parts right to your door within 60 to 90 minutes.</p>
            </div>
            <div className="process-card">
              <h4>Genuine Spare Parts</h4>
              <p>We use only authentic, safety-tested components for all repairs, backed by comprehensive service warranties.</p>
            </div>
            <div className="process-card">
              <h4>Comprehensive Warranty</h4>
              <p>We stand behind our work with warranty protection on all replaced spare parts and repair services for your peace of mind.</p>
            </div>
            <div className="process-card">
              <h4>7 Days Same-Day Service</h4>
              <p>Available every day from 8:00 AM to 9:00 PM with fast same-day technician dispatch for urgent appliance repairs and emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Services */}
      <section className="section-padding">
        <div className="container">
          
          {/* AC Service */}
          <div className="about-content-section">
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Air Conditioner (AC) Service in Delhi</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>During Delhi&apos;s extreme summers, an efficient AC is a necessity. Home Care AC Service Center provides comprehensive AC repair, installation, and chemical cleaning for both Split and Window ACs of all major brands.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Split AC &amp; Window AC Repair</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Diagnosis and fast resolution of common cooling issues, noisy operation, water leakage, sensor errors, and outdoor unit faults.</p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>AC Gas Charging &amp; Leakage Repair</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Nitrogen testing, brazing for refrigerant leak detection, vacuuming, and authentic R32 / R410A / R22 gas refilling with precision pressure gauges.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              <a href="tel:7428194037" className="btn btn-primary" style={{ padding: '10px 25px' }}>
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/917428194037" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 25px', background: '#25D366', color: '#fff', border: 'none' }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> WhatsApp Us
              </a>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '40px 0' }} />

          {/* Refrigerator Service */}
          <div className="about-content-section">
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Refrigerator Service in Delhi</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>A non-cooling refrigerator leads to food spoilage quickly. We provide doorstep inspection and repair for Single Door, Double Door, and Side-by-Side refrigerators across Shahdara and Delhi NCR.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Double Door &amp; Frost-Free Fridge</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Expert fixes for defrost timer failure, bi-metal thermostat defects, heater issues, fan motor noise, and uneven cooling between sections.</p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Compressor &amp; Gas Refilling</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Genuine inverter and reciprocating compressor replacements, relay/overload replacement, and standard refrigerant top-ups.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              <a href="tel:7428194037" className="btn btn-primary" style={{ padding: '10px 25px' }}>
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/917428194037" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 25px', background: '#25D366', color: '#fff', border: 'none' }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> WhatsApp Us
              </a>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '40px 0' }} />

          {/* Washing Machine & Microwave Oven */}
          <div className="about-content-section">
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Washing Machine &amp; Microwave Oven Repair</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>From heavy laundry machines to daily microwave ovens, we offer complete electrical, mechanical, and electronic board repairs for all models.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Washing Machine Repair</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Front Load, Top Load, and Semi-Automatic repair for drum spinning, inlet water valve, drain pump, belt, bearing, and motherboard PCB.</p>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--primary-red)' }}>Microwave Oven Repair</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Convection, Grill, and Solo microwave repair for magnetron burnout, capacitor fault, high-voltage diode, turntable motor, and keypad touch panels.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              <a href="tel:7428194037" className="btn btn-primary" style={{ padding: '10px 25px' }}>
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/917428194037" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '10px 25px', background: '#25D366', color: '#fff', border: 'none' }}>
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
              <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Transparent &amp; Affordable Service</h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>We understand that appliance repairs can be unexpected. That&apos;s why Home Care AC Service Center keeps basic inspection and visiting completely FREE.</p>
              
              <div className="pricing-table-container">
                <div className="pricing-row">
                  <span className="pricing-item">Air Conditioner (AC)</span>
                  <span className="pricing-cost">₹249</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">Refrigerator</span>
                  <span className="pricing-cost">₹249</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">Washing Machine</span>
                  <span className="pricing-cost">₹249</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">Microwave Oven</span>
                  <span className="pricing-cost">₹249</span>
                </div>
                <div className="pricing-row">
                  <span className="pricing-item">Visiting Charge</span>
                  <span className="pricing-cost">FREE</span>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#888', marginTop: '10px' }}>*Note: ₹249 is the basic service charge. Any spare parts or major component replacements have upfront quoted charges.</p>
            </div>

            <div>
              <h2 style={{ color: 'var(--dark-blue)', marginBottom: '15px' }}>Serving Homes Across Delhi NCR</h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>Home Care AC Service Center is based at Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi. We provide rapid doorstep visits across:</p>
              
              <ul className="check-list">
                <li><i className="fa-solid fa-location-dot"></i> <div>Vijay Park &amp; Maujpur</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Shahdara &amp; Babarpur</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Yamuna Vihar &amp; Bhajanpura</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Seelampur, Jaffrabad &amp; Dilshad Garden</div></li>
                <li><i className="fa-solid fa-location-dot"></i> <div>Surrounding East Delhi &amp; Delhi NCR regions</div></li>
              </ul>
              <p style={{ color: 'var(--primary-red)', fontWeight: 600, fontSize: '14px' }}>Call us directly at 7428194037 to confirm instant technician availability for your location.</p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq section-padding">
        <div className="container faq-inner">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <h2>Frequently Asked <span className="red-text">Questions</span></h2>
            <p>Find answers to common questions about our services</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Why is my AC not blowing cool air?</summary>
              <div className="faq-content">
                <p>Common reasons include low refrigerant gas, a clogged air filter or condenser coil, compressor capacitor failure, or PCB issues. Our technician can check gas pressure and airflow on-site.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Why is my refrigerator not cooling properly?</summary>
              <div className="faq-content">
                <p>Cooling problems may stem from compressor faults, gas leaks, defective thermostat/defrost sensors, or dirty coils. A technician should inspect the appliance to pinpoint the issue.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>What is the service charge?</summary>
              <div className="faq-content">
                <p>Our basic service charge for AC, Refrigerator, Washing Machine, and Microwave Oven is ₹249, with a 100% FREE visiting charge.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Is the visiting charge really free?</summary>
              <div className="faq-content">
                <p>Yes! Visiting and inspection charges are completely FREE across our service areas.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Where is Home Care AC Service Center located?</summary>
              <div className="faq-content">
                <p>We are located at Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="cta-icon"><i className="fa-solid fa-headset"></i></div>
            <div>
              <h3>Need AC or Home Appliance Repair?</h3>
              <h2>Book Your Technician Today!</h2>
              <p>Fast doorstep service from Gali No. 21A Vijay Park, near Maujpur Metro, Shahdara &amp; Delhi NCR. Visiting Charge is FREE.</p>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="tel:7428194037" className="btn btn-white"><i className="fa-solid fa-phone"></i> Call 7428194037</a>
            <a href="https://wa.me/917428194037" target="_blank" rel="noopener noreferrer" className="btn btn-white"><i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '20px' }}></i> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
