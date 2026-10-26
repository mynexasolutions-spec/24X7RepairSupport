import ServiceAreas from '@/components/ServiceAreas';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'AC Service Areas in Hyderabad | Banjara Hills, Madhapur, Kukatpally',
  description: '24x7 AC repair across Hyderabad - Banjara Hills, Hitec City, Gachibowli, Kukatpally, Ameerpet & more. Technician at your door in 30-60 minutes. Free visit.',
  path: '/service-areas',
});

export default function ServiceAreasPage() {
  return (
    <>
      {/* Top Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>Our Service Areas</h1>
          <p>Rapid Doorstep AC Service Across Greater Hyderabad • Pin 500023 &amp; Beyond</p>
        </div>
      </section>

      {/* Main Service Areas Component */}
      <ServiceAreas />

      {/* Multi-Brand AC Assurance */}
      <section className="section-padding bg-light" style={{ borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-title text-center">
            <span style={{ color: '#FF5E00', fontWeight: 800, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Every Neighborhood Covered
            </span>
            <h2 style={{ marginTop: '8px' }}>
              All Brands AC Servicing at Your Doorstep
            </h2>
            <p>
              In sabhi companies ki AC ki servicing hoti hai yahan: Hitachi, LG, Daikin, O General, Voltas, Samsung, Blue Star &amp; many more.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '30px auto 0', textAlign: 'center', background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div>
                <h3 style={{ color: '#023a6e', fontSize: '28px', margin: 0, fontWeight: 800 }}>30-60</h3>
                <p style={{ color: '#64748B', fontSize: '13px', margin: '4px 0 0' }}>Minutes Arrival Time</p>
              </div>
              <div style={{ borderRight: '1px solid #e2e8f0' }}></div>
              <div>
                <h3 style={{ color: '#FF5E00', fontSize: '28px', margin: 0, fontWeight: 800 }}>₹0</h3>
                <p style={{ color: '#64748B', fontSize: '13px', margin: '4px 0 0' }}>Visiting &amp; Inspection Fee</p>
              </div>
              <div style={{ borderRight: '1px solid #e2e8f0' }}></div>
              <div>
                <h3 style={{ color: '#023a6e', fontSize: '28px', margin: 0, fontWeight: 800 }}>24/7</h3>
                <p style={{ color: '#64748B', fontSize: '13px', margin: '4px 0 0' }}>Emergency Support</p>
              </div>
            </div>
            <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.6, margin: '0 0 24px' }}>
              Whether you are located in Central Hyderabad, the IT corridor of Hitec City &amp; Gachibowli, or Secunderabad suburbs, our certified AC engineers reach you on time with genuine tools and factory spares.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a href="tel:1234561232" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                <i className="fa-solid fa-phone"></i> Call 1234561232
              </a>
              <Link href="/contact" className="btn btn-dark" style={{ padding: '12px 28px' }}>
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="cta-icon"><i className="fa-solid fa-map-location-dot"></i></div>
            <div>
              <h3>Need Immediate Doorstep AC Repair?</h3>
              <h2>Technicians Available in Your Area Right Now!</h2>
              <p>Covering Sanath Nagar, Banjara Hills, Hitec City, Kukatpally &amp; all Greater Hyderabad. 100% FREE visiting charge.</p>
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
