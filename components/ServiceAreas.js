'use client';

export default function ServiceAreas() {
  const primaryHubs = [
    {
      title: 'Maujpur & Vijay Park (Base Hub)',
      badge: '15-30 Mins Arrival',
      icon: 'fa-solid fa-house-chimney',
      desc: 'Our central service center location. Instant dispatch for fast doorstep repairs.',
      areas: ['Vijay Park', 'Maujpur Metro', 'Maujpur Chowk', 'Babarpur (East & West)', 'Kabir Nagar', 'Gorakh Park'],
    },
    {
      title: 'Shahdara & Trans-Yamuna',
      badge: '20-35 Mins Arrival',
      icon: 'fa-solid fa-city',
      desc: 'Rapid technician visits across all residential colonies and market sectors.',
      areas: ['Shahdara Metro', 'Naveen Shahdara', 'Rohtas Nagar', 'Mansarovar Park', 'Jyoti Nagar (North & South)', 'Kanti Nagar', 'Jhilmil'],
    },
    {
      title: 'Yamuna Vihar & Bhajanpura Belt',
      badge: '20-40 Mins Arrival',
      icon: 'fa-solid fa-location-crosshairs',
      desc: 'Regular daily routes covering main roads, blocks, and housing complexes.',
      areas: ['Yamuna Vihar (All Blocks)', 'Bhajanpura Chowk', 'Gokalpuri', 'Khajuri Khas', 'Karawal Nagar', 'Gamri'],
    },
    {
      title: 'Dilshad Garden & East Delhi NCR',
      badge: '30-45 Mins Arrival',
      icon: 'fa-solid fa-map-location-dot',
      desc: 'Comprehensive appliance repair coverage with 100% FREE inspection.',
      areas: ['Dilshad Garden', 'Dilshad Colony', 'Vivek Vihar', 'Seelampur', 'Jaffrabad', 'Krishna Nagar', 'Geeta Colony', 'Anand Vihar'],
    },
  ];

  const allAreas = [
    'Vijay Park', 'Maujpur Metro', 'Shahdara', 'Babarpur', 'Yamuna Vihar',
    'Bhajanpura', 'Jaffrabad', 'Seelampur', 'Dilshad Garden', 'Rohtas Nagar',
    'Mansarovar Park', 'Jyoti Nagar', 'Kabir Nagar', 'Gokalpuri', 'Vivek Vihar',
    'Karawal Nagar', 'Krishna Nagar', 'Laxmi Nagar', 'Geeta Colony', 'Jhilmil',
    'Anand Vihar', 'Khajuri Khas', 'Dilshad Colony', 'Kanti Nagar', 'Surajmal Vihar',
    'Bihari Colony', 'Karkardooma', 'Preet Vihar'
  ];

  return (
    <section className="service-areas section-padding" id="service-areas">
      <div className="container">
        
        <div className="service-areas-header">
          <div className="service-area-pill">
            <i className="fa-solid fa-location-dot"></i> Rapid Doorstep Coverage &bull; 100% FREE Visiting
          </div>
          <h2>Our <span className="red-text">Service Areas</span> Around Shahdara &amp; Delhi NCR</h2>
          <p>
            Operating directly from <strong>Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara</strong>, our certified technicians reach your doorstep within 30 to 60 minutes across all nearby neighborhoods.
          </p>
        </div>

        {/* 4 Main Service Hub Cards */}
        <div className="area-hubs-grid">
          {primaryHubs.map((hub, idx) => (
            <div key={idx} className="area-hub-card">
              <div className="area-hub-top">
                <div className="area-hub-icon">
                  <i className={hub.icon}></i>
                </div>
                <span className="area-hub-badge">
                  <i className="fa-solid fa-bolt"></i> {hub.badge}
                </span>
              </div>
              <h3>{hub.title}</h3>
              <p className="area-hub-desc">{hub.desc}</p>
              
              <div className="area-hub-tags">
                {hub.areas.map((area, aIdx) => (
                  <span key={aIdx} className="hub-tag">
                    <i className="fa-solid fa-check"></i> {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complete Nearby Localities Cloud */}
        <div className="area-cloud-box">
          <div className="area-cloud-header">
            <div>
              <h3><i className="fa-solid fa-map-pin red-text"></i> Popular Localities We Serve Daily</h3>
              <p>Click any locality to instantly book a technician via WhatsApp or call us</p>
            </div>
            <a href="tel:7428194037" className="area-cloud-call-btn">
              <i className="fa-solid fa-phone"></i> 7428194037
            </a>
          </div>

          <div className="area-chips-grid">
            {allAreas.map((area, idx) => (
              <a
                key={idx}
                href={`https://wa.me/917428194037?text=${encodeURIComponent(`Hello Home Care AC Service Center, I need doorstep repair service in ${area}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="area-chip"
                title={`Book service in ${area}`}
              >
                <i className="fa-solid fa-location-dot"></i>
                <span>{area}</span>
              </a>
            ))}
          </div>

          <div className="area-features-strip">
            <div className="feature-item">
              <i className="fa-solid fa-clock red-text"></i>
              <span>30 - 60 Min Rapid Arrival</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-hand-holding-dollar red-text"></i>
              <span>₹0 Visiting &amp; Inspection Fee</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-shield-check red-text"></i>
              <span>Genuine Spares with Warranty</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-certificate red-text"></i>
              <span>Trained Local Experts</span>
            </div>
          </div>
        </div>

        {/* Not finding your area banner */}
        <div className="area-cta-banner">
          <div className="area-cta-text">
            <h4>Don&apos;t see your locality listed?</h4>
            <p>We cover almost all surrounding sectors across East Delhi &amp; Delhi NCR. Contact us directly to confirm instant technician availability!</p>
          </div>
          <div className="area-cta-actions">
            <a href="tel:7428194037" className="btn btn-primary">
              <i className="fa-solid fa-phone"></i> Call 7428194037
            </a>
            <a
              href="https://wa.me/917428194037?text=Hello%20Home%20Care%20AC%20Service%20Center,%20do%20you%20provide%20service%20in%20my%20area?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i> Check on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
