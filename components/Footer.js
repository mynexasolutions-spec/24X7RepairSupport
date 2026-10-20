import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col brand-col">
          <div className="logo">
            <img src="/home-care-logo.png" alt="Home Care AC Service Center Logo" style={{ maxHeight: '52px', width: 'auto', objectFit: 'contain', borderRadius: '8px' }} />
            <div>
              <h3>HOME CARE</h3>
              <p>AC &amp; Appliance Service Center</p>
            </div>
          </div>
          <p className="brand-desc">Professional and reliable doorstep repair for Air Conditioners, Refrigerators, Washing Machines, and Microwave Ovens based at Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi.</p>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
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
      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>&copy; {new Date().getFullYear()} Home Care AC Service Center. All Rights Reserved.</p>
          <p>Designed with <i className="fa-solid fa-heart" style={{ color: '#d15700' }}></i> for trusted service</p>
        </div>
      </div>
    </footer>
  );
}
