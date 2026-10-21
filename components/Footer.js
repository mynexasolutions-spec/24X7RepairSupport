import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col brand-col">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
            <div style={{ background: '#ffffff', padding: '6px 10px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              <img src="/home-care-logo.png" alt="Home Care AC Service Center Logo" style={{ height: '46px', width: 'auto', objectFit: 'contain', display: 'block' }} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 800, letterSpacing: '-0.3px', lineHeight: 1.1 }}>
                <span style={{ color: '#ffffff' }}>HOME</span> <span style={{ color: '#FF5E00' }}>CARE</span>
              </h3>
              <p style={{ margin: '2px 0 0', fontSize: '11px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                AC &amp; Appliance Service Center
              </p>
            </div>
          </div>
          <p className="brand-desc">Professional and reliable doorstep repair for Air Conditioners, Refrigerators, Washing Machines, and Microwave Ovens based at Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi.</p>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/#service-areas">Service Areas</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><Link href="/services">AC Service &amp; Repair</Link></li>
            <li><Link href="/services">Refrigerator Repair</Link></li>
            <li><Link href="/services">Washing Machine Repair</Link></li>
            <li><Link href="/services">Microwave Oven Repair</Link></li>
            <li><Link href="/services">AC Gas Charging &amp; Installation</Link></li>
          </ul>
        </div>
        
        <div className="footer-col contact-col">
          <h4>Contact Us</h4>
          <ul>
            <li><i className="fa-solid fa-location-dot"></i> Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi.</li>
            <li><i className="fa-solid fa-phone"></i> <a href="tel:7428194037" style={{ color: 'inherit' }}>7428194037</a></li>
            <li><i className="fa-solid fa-envelope"></i> <a href="mailto:bilalsheak7428@gmail.com" style={{ color: 'inherit' }}>bilalsheak7428@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Service Areas Quick Strip */}
      <div className="footer-service-areas">
        <div className="container">
          <div className="footer-areas-inner">
            <span className="footer-areas-title">
              <i className="fa-solid fa-map-pin" style={{ color: 'var(--primary-red)' }}></i> Service Areas:
            </span>
            <div className="footer-areas-list">
              <span>Vijay Park</span> &bull; <span>Maujpur</span> &bull; <span>Shahdara</span> &bull; <span>Babarpur</span> &bull; <span>Yamuna Vihar</span> &bull; <span>Bhajanpura</span> &bull; <span>Jaffrabad</span> &bull; <span>Seelampur</span> &bull; <span>Dilshad Garden</span> &bull; <span>Rohtas Nagar</span> &bull; <span>Mansarovar Park</span> &bull; <span>Jyoti Nagar</span> &bull; <span>Kabir Nagar</span> &bull; <span>Gokalpuri</span> &bull; <span>Vivek Vihar</span> &bull; <span>Karawal Nagar</span> &bull; <span>Krishna Nagar</span> &bull; <span>Laxmi Nagar</span> &bull; <span>Geeta Colony</span> &bull; <span>Jhilmil</span> &bull; <span>Anand Vihar</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>&copy; {new Date().getFullYear()} Home Care AC Service Center. All Rights Reserved.</p>
          <p>Designed with <i className="fa-solid fa-heart" style={{ color: '#d15700' }}></i> for trusted service</p>
        </div>
      </div>
    </footer>
  );
}
