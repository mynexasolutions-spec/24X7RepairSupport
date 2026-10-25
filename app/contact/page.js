'use client';

export default function Contact() {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById('waName').value;
    const phone = document.getElementById('waPhone').value;
    const service = document.getElementById('waService').value;
    const message = document.getElementById('waMessage').value;

    let text = `Hello 24x7 AC Repair Support, I want to book an AC service.\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*AC Service / Brand:* ${service}\n`;

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
      {/* Top Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Located in Hyderabad, Telangana 500023 • 24x7 Doorstep AC Repair &amp; Servicing</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container">
          
          <div className="section-title text-center">
            <h2>Get In <span className="red-text">Touch</span></h2>
            <p>Book certified AC repair for Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star &amp; all brands</p>
          </div>

          <div className="contact-page-grid">
            
            {/* Form */}
            <div className="contact-banner-form" style={{ background: '#fff', border: '1px solid #eaeaea', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--dark-blue)', marginBottom: '10px', fontSize: '24px' }}>Book AC Service</h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '30px', fontSize: '15px' }}>Send us a message via WhatsApp and our AC technician will arrive within 60 minutes.</p>
              
              <form id="contactPageForm" onSubmit={handleWhatsAppSubmit}>
                <div className="form-group">
                  <label htmlFor="waName">Full Name</label>
                  <input type="text" id="waName" placeholder="Enter your full name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="waPhone">Phone Number</label>
                  <input type="tel" id="waPhone" placeholder="Enter your 10-digit mobile number" required />
                </div>

                <div className="form-group">
                  <label htmlFor="waService">AC Service / Brand Required</label>
                  <select id="waService" defaultValue="" style={{ width: '100%', padding: '12px 15px', border: '1px solid #e5e7eb', borderRadius: '6px', background: '#f9fafb', fontFamily: 'Inter', fontSize: '16px', color: 'var(--text-gray)' }} required>
                    <option value="" disabled>Select AC Service or Brand</option>
                    <option value="AC Jet Foam Deep Cleaning">AC Jet Foam Deep Cleaning</option>
                    <option value="AC Gas Refill & Leak Fix">AC Gas Refill &amp; Leak Repair</option>
                    <option value="AC Not Cooling / Breakdown">AC Not Cooling / Breakdown Repair</option>
                    <option value="AC Installation & Uninstallation">AC Installation / Relocation</option>
                    <option value="Inverter AC PCB & Sensor Repair">Inverter AC PCB &amp; Electrical Repair</option>
                    <option value="Hitachi AC Service">Hitachi AC Service &amp; Repair</option>
                    <option value="LG AC Service">LG AC Service &amp; Repair</option>
                    <option value="Daikin AC Service">Daikin AC Service &amp; Repair</option>
                    <option value="O General AC Service">O General AC Service &amp; Repair</option>
                    <option value="Voltas AC Service">Voltas AC Service &amp; Repair</option>
                    <option value="Samsung AC Service">Samsung AC Service &amp; Repair</option>
                    <option value="Blue Star AC Service">Blue Star AC Service &amp; Repair</option>
                    <option value="Other AC Brand / AMC">Other Brand AC / Multi-Unit AMC</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="waMessage">Issue Description (Optional)</label>
                  <textarea id="waMessage" placeholder="Briefly describe the problem you are facing..." rows="4"></textarea>
                </div>
                
                <button type="submit" className="btn btn-submit" style={{ width: '100%', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> Book via WhatsApp
                </button>
              </form>
            </div>

            {/* Details & Map */}
            <div className="contact-info-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '25px', background: 'rgba(255, 255, 255, 0.08)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                <div style={{ background: '#ffffff', padding: '6px 12px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center' }}>
                  <img src="/logo.png?v=5" alt="24x7 Repair Support" style={{ height: '40px', width: 'auto', display: 'block' }} />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#ffffff', fontSize: '17px', fontWeight: 800 }}>24x7 REPAIR SUPPORT</h4>
                  <p style={{ margin: '2px 0 0', color: '#FF7A00', fontSize: '11px', fontWeight: 600, letterSpacing: '0.4px', textTransform: 'uppercase' }}>Hyderabad, Telangana 500023</p>
                </div>
              </div>

              <h3 style={{ color: 'var(--white)', marginBottom: '25px', fontSize: '22px' }}>Contact Information</h3>
              
              <div className="contact-detail-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h4>Our Location</h4>
                  <p>Hyderabad, Telangana 500023</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fa-solid fa-phone-volume"></i>
                <div>
                  <h4>Phone Number</h4>
                  <p>
                    <a href="tel:1234561232" style={{ color: 'inherit' }}>1234561232</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h4>Email Address</h4>
                  <p>
                    <a href="mailto:supportxrapair@gmail.com" style={{ color: 'inherit' }}>supportxrapair@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fa-regular fa-clock"></i>
                <div>
                  <h4>Working Hours</h4>
                  <p>24x7 Emergency Service<br/>Monday - Sunday: Round the Clock</p>
                </div>
              </div>

              {/* Small Map Overlay */}
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60906.51648356942!2d78.414457!3d17.447545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a3c9b77527%3A0x8fc898cf98cb4d42!2sHyderabad%2C%20Telangana%20500023!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
