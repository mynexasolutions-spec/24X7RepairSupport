'use client';

export default function Contact() {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById('waName').value;
    const phone = document.getElementById('waPhone').value;
    const service = document.getElementById('waService').value;
    const message = document.getElementById('waMessage').value;

    let text = `Hello Home Care AC Service Center, I want to book a service.\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*Service Required:* ${service}\n`;

    if (message) {
      text += `*Message:* ${message}`;
    }

    const whatsappNumber = '917428194037';
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
          <p>Visit us at Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi or call for fast doorstep service</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container">
          
          <div className="section-title text-center">
            <h2>Get In <span className="red-text">Touch</span></h2>
            <p>Fill out the form below or reach us directly via phone or WhatsApp</p>
          </div>

          <div className="contact-page-grid">
            
            {/* Left Side - Details & Map */}
            <div className="contact-info-card">
              <h3 style={{ color: 'var(--white)', marginBottom: '30px', fontSize: '24px' }}>Contact Information</h3>
              
              <div className="contact-detail-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h4>Our Location</h4>
                  <p>Gali No. 21A, Vijay Park, near Maujpur Metro,<br/>Shahdara, Delhi</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fa-solid fa-phone-volume"></i>
                <div>
                  <h4>Phone Number</h4>
                  <p>
                    <a href="tel:7428194037" style={{ color: 'inherit' }}>7428194037</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h4>Email Address</h4>
                  <p>
                    <a href="mailto:bilalsheak7428@gmail.com" style={{ color: 'inherit' }}>bilalsheak7428@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fa-regular fa-clock"></i>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday - Sunday<br/>8:00 AM to 9:00 PM</p>
                </div>
              </div>

              {/* Small Map Overlay */}
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.34891465223!2d77.2655385!3d28.6720239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5e1c8d5045%3A0xd60e5917415bf796!2sMaujpur%20-%20Babarpur%20Metro%20Station!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

            </div>

            {/* Right Side - Form */}
            <div className="contact-banner-form" style={{ background: '#fff', border: '1px solid #eaeaea', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--dark-blue)', marginBottom: '10px', fontSize: '24px' }}>Book an Appointment</h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '30px', fontSize: '15px' }}>Send us a message via WhatsApp and we will confirm your booking instantly.</p>
              
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
                  <label htmlFor="waService">Appliance / Service Required</label>
                  <select id="waService" defaultValue="" style={{ width: '100%', padding: '12px 15px', border: '1px solid #e5e7eb', borderRadius: '6px', background: '#f9fafb', fontFamily: 'Inter', fontSize: '16px', color: 'var(--text-gray)' }} required>
                    <option value="" disabled>Select an appliance</option>
                    <option value="Air Conditioner (AC)">Air Conditioner (AC) Repair &amp; Service</option>
                    <option value="Refrigerator">Refrigerator / Fridge Repair</option>
                    <option value="Washing Machine">Washing Machine Repair</option>
                    <option value="Microwave Oven">Microwave Oven Repair</option>
                    <option value="Other">Other Service</option>
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

          </div>
        </div>
      </section>
    </>
  );
}
