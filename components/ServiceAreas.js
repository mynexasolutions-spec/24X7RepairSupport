'use client';

export default function ServiceAreas() {
  const primaryHubs = [
    {
      title: 'Hyderabad Central (Base Hub - 500023)',
      badge: '15-30 Mins Arrival',
      icon: 'fa-solid fa-house-chimney',
      desc: 'Our base service center in Hyderabad Telangana 500023. Instant technician dispatch for fast doorstep repairs.',
      areas: ['Sanath Nagar', 'Erragadda', 'Ameerpet', 'SR Nagar', 'Balkampet', 'Punjagutta'],
    },
    {
      title: 'Banjara & Jubilee Hills Belt',
      badge: '20-35 Mins Arrival',
      icon: 'fa-solid fa-city',
      desc: 'Rapid technician visits across all residential apartments, villas, and commercial properties.',
      areas: ['Banjara Hills', 'Jubilee Hills', 'Somajiguda', 'Film Nagar', 'Panjagutta', 'Khairatabad'],
    },
    {
      title: 'Hitec City & Madhapur IT Belt',
      badge: '20-40 Mins Arrival',
      icon: 'fa-solid fa-laptop-code',
      desc: 'Dedicated daily service routes for IT professionals and high-rise gated communities.',
      areas: ['Madhapur', 'Hitec City', 'Gachibowli', 'Kondapur', 'Kothaguda', 'Raidurg'],
    },
    {
      title: 'Secunderabad & Kukatpally Region',
      badge: '25-45 Mins Arrival',
      icon: 'fa-solid fa-map-location-dot',
      desc: 'Comprehensive AC repair and servicing coverage with 100% FREE inspection across Greater Hyderabad.',
      areas: ['Kukatpally', 'KPHB Colony', 'Miyapur', 'Begumpet', 'Secunderabad', 'Bowenpally'],
    },
  ];

  const allAreas = [
    'Sanath Nagar (500023)', 'Erragadda', 'Ameerpet', 'SR Nagar', 'Banjara Hills',
    'Jubilee Hills', 'Madhapur', 'Hitec City', 'Gachibowli', 'Kondapur',
    'Kukatpally', 'KPHB Colony', 'Miyapur', 'Begumpet', 'Secunderabad',
    'Punjagutta', 'Somajiguda', 'Bowenpally', 'Nizampet', 'Chandanagar',
    'Mehdipatnam', 'Tolichowki', 'Abids', 'Dilsukhnagar', 'Uppal',
    'LB Nagar', 'Himayatnagar', 'Manikonda'
  ];

  return (
    <section className="service-areas section-padding" id="service-areas">
      <div className="container">
        
        <div className="service-areas-header">
          <div className="service-area-pill">
            <i className="fa-solid fa-location-dot"></i> Rapid Doorstep Coverage &bull; 100% FREE Visiting
          </div>
          <h2>Our <span className="red-text">Service Areas</span> Across Hyderabad &amp; Telangana</h2>
          <p>
            Operating directly from <strong>Hyderabad, Telangana 500023</strong>, our certified technicians reach your doorstep across all nearby neighborhoods with 24x7 emergency support.
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
              <h3><i className="fa-solid fa-map-pin red-text"></i> Popular Localities We Serve Daily in Hyderabad</h3>
              <p>Click any locality to instantly book a technician via WhatsApp or call us</p>
            </div>
            <a href="tel:1234561232" className="area-cloud-call-btn">
              <i className="fa-solid fa-phone"></i> 1234561232
            </a>
          </div>

          <div className="area-chips-grid">
            {allAreas.map((area, idx) => (
              <a
                key={idx}
                href={`https://wa.me/911234561232?text=${encodeURIComponent(`Hello 24x7 AC Repair Support, I need doorstep AC service in ${area}, Hyderabad.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="area-chip"
                title={`Book AC service in ${area}`}
              >
                <i className="fa-solid fa-location-dot"></i>
                <span>{area}</span>
              </a>
            ))}
          </div>

          <div className="area-features-strip">
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
              <span>Trained Local Hyderabad Experts</span>
            </div>
          </div>
        </div>

        {/* Not finding your area banner */}
        <div className="area-cta-banner">
          <div className="area-cta-text">
            <h4>Don&apos;t see your locality listed?</h4>
            <p>We cover almost all localities across Hyderabad and Telangana (Pin 500023 &amp; surrounds). Contact us directly to confirm instant technician availability!</p>
          </div>
          <div className="area-cta-actions">
            <a href="tel:1234561232" className="btn btn-primary">
              <i className="fa-solid fa-phone"></i> Call 1234561232
            </a>
            <a
              href="https://wa.me/911234561232?text=Hello%2024x7%20AC%20Repair%20Support,%20do%20you%20provide%20AC%20service%20in%20my%20area%20in%20Hyderabad?"
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
