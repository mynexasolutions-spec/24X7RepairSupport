'use client';

import ReviewsSwiper from '@/components/ReviewsSwiper';

export default function Home() {

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById('waName').value;
    const phone = document.getElementById('waPhone').value;
    const message = document.getElementById('waMessage').value;

    let text = `Hello Home Care AC Service Center, I want to book a service.\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;

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
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('/banner.png')" }}>
        <div className="container hero-inner">

          <div className="hero-mobile-image">
            <img src="/phone-banner.webp?v=2" alt="Home Care AC & Appliance Repair Service" />
          </div>


          <div className="hero-content">
            <div className="hero-pill">
              <i className="fa-solid fa-location-dot"></i> Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi
            </div>

            <h1 className="hero-title">
              Fast &amp; Reliable Repair For<br />
              <span className="gradient-text">Your AC &amp; Appliances</span>
            </h1>

            <p>
              Certified repair technicians for Air Conditioners, Refrigerators, Washing Machines &amp; Microwave Ovens based in Vijay Park, near Maujpur Metro, Shahdara. Doorstep service with genuine spare parts and 100% free inspection.
            </p>

            <div className="hero-features-grid">
              <div className="feature-pill">
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span>60 Mins Arrival</span>
              </div>
              <div className="feature-pill">
                <i className="fa-solid fa-shield-halved"></i>
                <span>Genuine Spares</span>
              </div>
              <div className="feature-pill">
                <i className="fa-solid fa-user-check"></i>
                <span>Expert Technicians</span>
              </div>
              <div className="feature-pill">
                <i className="fa-solid fa-tag"></i>
                <span>Free Visiting Fee</span>
              </div>
            </div>

            <div className="hero-cta">
              <a href="tel:7428194037" className="hero-btn hero-btn-dark">
                <i className="fa-solid fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/917428194037" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-primary">
                <i className="fa-brands fa-whatsapp"></i> Book Service
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Service Charges */}
      <section className="service-charges section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Our <span className="red-text">Service</span> Charges</h2>
            <p>Affordable rates with the best doorstep service in Shahdara &amp; Delhi NCR</p>
          </div>

          <div className="charges-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
            {/* Card 1: AC */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/ac-repair-clean.jpg" alt="Air Conditioner Service" />
                <div className="icon-circle"><i className="fa-solid fa-snowflake"></i></div>
              </div>
              <div className="card-content">
                <h3>Air Conditioner<br />Service Charge</h3>
                <div className="price">₹299</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 2: Refrigerator */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/fridge-service.webp" alt="Refrigerator Service" />
                <div className="icon-circle"><i className="fa-solid fa-temperature-arrow-down"></i></div>
              </div>
              <div className="card-content">
                <h3>Refrigerator<br />Service Charge</h3>
                <div className="price">₹299</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 3: Washing Machine */}
            <div className="charge-card">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Washing Machine Service" />
                <div className="icon-circle"><i className="fa-solid fa-jug-detergent"></i></div>
              </div>
              <div className="card-content">
                <h3>Washing Machine<br />Service Charge</h3>
                <div className="price">₹299</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 4: Microwave Oven */}
            <div className="charge-card">
              <div className="card-img">
                <img src="/microwave-repair-clean.jpg" alt="Microwave Oven Service" />
                <div className="icon-circle"><i className="fa-solid fa-fire-burner"></i></div>
              </div>
              <div className="card-content">
                <h3>Microwave Oven<br />Service Charge</h3>
                <div className="price">₹299</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 5: Free Visiting */}
            <div className="charge-card visiting-card">
              <div className="card-img">
                <img src="/free-services.webp" alt="Free Visiting Charge" />
                <div className="icon-circle"><i className="fa-solid fa-user-tie"></i></div>
              </div>
              <div className="card-content">
                <h3>Visiting<br />Charge</h3>
                <div className="price">FREE</div>
                <p className="free-text">For All Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Appliances */}
      <section className="important-appliances section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Important <span className="red-text">Appliances</span> We Service</h2>
            <p>Specialized repair for all major brands and models in Delhi</p>
          </div>

          <div className="appliances-grid">
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Air Conditioners (AC)</h3>
                <p>We service and repair all Split ACs and Window ACs including cooling issues, gas refilling, PCB repair, and deep chemical cleaning.</p>
              </div>
              <div className="appliance-img">
                <img src="/ac-repair-clean.jpg" alt="Air Conditioner Service" />
              </div>
            </div>

            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Refrigerators</h3>
                <p>We service all types of refrigerators including Double Door, Single Door, Side-by-Side, and Inverter models with genuine parts.</p>
              </div>
              <div className="appliance-img">
                <img src="/fridge-repair-clean.jpg" alt="Refrigerators Service" />
              </div>
            </div>

            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Washing Machines</h3>
                <p>Complete repair for Front Load, Top Load, and Semi-Automatic washing machines with drum, motor, and PCB board solutions.</p>
              </div>
              <div className="appliance-img">
                <img src="/washer-repair-clean.jpg" alt="Washing Machines Service" />
              </div>
            </div>

            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Microwave Ovens</h3>
                <p>Expert fixing of Solo, Grill, and Convection microwave ovens, resolving heating problems, magnetron issues, and touchpad errors.</p>
              </div>
              <div className="appliance-img">
                <img src="/microwave-repair-clean.jpg" alt="Microwave Oven Service" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works section-padding">
        <div className="container">
          <div className="section-title">
            <h2>How It <span className="red-text">Works</span></h2>
            <p>Getting your appliance repaired is quick, simple, and hassle-free in just 4 straightforward steps.</p>
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
                <p>Your appliance is diagnosed and repaired with genuine spares.</p>
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
            <img src="/why-choose.png" alt="Why Choose Home Care AC Service Center" />
          </div>
          <div className="why-content">
            <h2>Why Choose<br /><span className="red-text">Home Care AC Service Center?</span></h2>

            <div className="why-list">
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-user-check"></i></div>
                <div>
                  <h4>Experienced Technicians</h4>
                  <p>Certified experts specialized in AC, Fridge, Washer &amp; Microwave repairs.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-truck-fast"></i></div>
                <div>
                  <h4>Doorstep Service in 60 Mins</h4>
                  <p>Fast local response from Gali No. 21A Vijay Park across Maujpur, Shahdara &amp; East Delhi.</p>
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
                  <h4>Affordable Pricing &amp; FREE Visiting</h4>
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
            <p>What our clients in Delhi say about our service</p>
          </div>

          <ReviewsSwiper />
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section-padding">
        <div className="container faq-inner">
          <div className="section-title text-center" style={{ textAlign: 'center' }}>
            <h2>Frequently Asked <span className="red-text">Questions</span></h2>
            <p>Find answers to common questions about our services</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Is there a visiting charge?</summary>
              <div className="faq-content">
                <p>No, we offer a completely FREE visiting charge for all our service areas. You only pay for the actual repair and parts.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Which appliances do you repair?</summary>
              <div className="faq-content">
                <p>We specialize in Air Conditioners (Split &amp; Window AC), Refrigerators (Single/Double Door, Side-by-Side), Washing Machines (Front &amp; Top Load), and Microwave Ovens.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Do you provide a warranty on repairs?</summary>
              <div className="faq-content">
                <p>Yes! We provide warranty on replaced spare parts and repair services for your peace of mind.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Where is Home Care AC Service Center located?</summary>
              <div className="faq-content">
                <p>We are located at <strong>Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi</strong>. We offer rapid doorstep service across Maujpur, Shahdara, and all nearby areas.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Which areas do you service?</summary>
              <div className="faq-content">
                <p>Based at Gali No. 21A, Vijay Park, near Maujpur Metro, we service Shahdara, Maujpur, Vijay Park, Babarpur, Yamuna Vihar, Bhajanpura, Seelampur, Dilshad Garden, and surrounding Delhi NCR neighborhoods.</p>
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
              <h2>Need AC or Appliance Repair?</h2>
              <p>Book your technician visit now and get quick doorstep repair with FREE inspection.</p>
              <a href="tel:7428194037" className="btn btn-white call-btn"><i className="fa-solid fa-phone"></i> Call Now: 7428194037</a>
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
                  <textarea id="waMessage" placeholder="Appliance issue (AC, Fridge, Washing Machine, Oven...)" rows="4"></textarea>
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
              <p>Fast doorstep service from Gali No. 21A Vijay Park, Maujpur Metro across Shahdara &amp; Delhi NCR.</p>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="tel:7428194037" className="btn btn-white"><i className="fa-solid fa-phone"></i> Call Now</a>
            <a href="https://wa.me/917428194037" target="_blank" rel="noopener noreferrer" className="btn btn-white"><i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '20px' }}></i> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
