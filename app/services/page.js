import Link from 'next/link';
import ServiceAreas from '@/components/ServiceAreas';

export const metadata = {
  title: "Our Services | Home Care AC Service Center | Delhi",
  description: "Expert repair services for Air Conditioners (AC), Refrigerators, Washing Machines, and Microwave Ovens based at Gali No. 21A, Vijay Park, near Maujpur Metro, Shahdara, Delhi. Fast, reliable, and affordable.",
};

export default function Services() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Our Services</h1>
          <p>Expert AC &amp; Home Appliance Repair Solutions based in Vijay Park, Maujpur Metro, Shahdara</p>
        </div>
      </section>

      <section className="service-charges section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Our <span className="red-text">Service</span> Charges</h2>
            <p>Affordable rates with the best doorstep service in Vijay Park, Maujpur &amp; Shahdara</p>
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
                <div className="price">₹249</div>
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
                <div className="price">₹249</div>
                <p className="free-text">Visiting Charge <strong>FREE</strong></p>
              </div>
            </div>

            {/* Card 3: Washing Machine */}
            <div className="charge-card">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Washing Machine" />
                <div className="icon-circle"><i className="fa-solid fa-jug-detergent"></i></div>
              </div>
              <div className="card-content">
                <h3>Washing Machine<br />Service Charge</h3>
                <div className="price">₹249</div>
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
                <div className="price">₹249</div>
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

      {/* Important Appliances Detailed */}
      <section className="important-appliances section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Detailed <span className="red-text">Services</span> Overview</h2>
            <p>Comprehensive repairs for all major household brands</p>
          </div>

          <div className="appliances-grid">
            {/* Box 1: AC */}
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Air Conditioners (AC)</h3>
                <p style={{ textAlign: 'left', marginTop: '15px' }}>Complete repair, gas refilling, jet cleaning and maintenance for Split and Window ACs of all major brands.</p>
                <ul className="check-list" style={{ textAlign: 'left', marginTop: '15px' }}>
                  <li><i className="fa-solid fa-circle-check"></i> Not Cooling / Low Cooling</li>
                  <li><i className="fa-solid fa-circle-check"></i> AC Gas Refilling &amp; Leakage Fixing</li>
                  <li><i className="fa-solid fa-circle-check"></i> Compressor &amp; Fan Motor Repair</li>
                  <li><i className="fa-solid fa-circle-check"></i> PCB Circuit Board &amp; Sensor Replacement</li>
                </ul>
              </div>
              <div className="appliance-img">
                <img src="/ac-repair-clean.jpg" alt="Air Conditioner Service" />
              </div>
            </div>

            {/* Box 2: Refrigerators */}
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Refrigerators</h3>
                <p style={{ textAlign: 'left', marginTop: '15px' }}>We service all types of refrigerators including Single Door, Double Door, Side-by-Side, and Inverter models.</p>
                <ul className="check-list" style={{ textAlign: 'left', marginTop: '15px' }}>
                  <li><i className="fa-solid fa-circle-check"></i> Fridge Not Cooling / Freezer Overfreezing</li>
                  <li><i className="fa-solid fa-circle-check"></i> Refrigerant Gas Charging</li>
                  <li><i className="fa-solid fa-circle-check"></i> Compressor &amp; Relay Replacement</li>
                  <li><i className="fa-solid fa-circle-check"></i> Thermostat &amp; Defrost Sensor Repair</li>
                </ul>
              </div>
              <div className="appliance-img">
                <img src="/fridge-repair-clean.jpg" alt="Refrigerators Service" />
              </div>
            </div>

            {/* Box 3: Washing Machines */}
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Washing Machines</h3>
                <p style={{ textAlign: 'left', marginTop: '15px' }}>We repair all washing machines, from Front Load and Top Load to Semi-Automatic, ensuring peak wash performance.</p>
                <ul className="check-list" style={{ textAlign: 'left', marginTop: '15px' }}>
                  <li><i className="fa-solid fa-circle-check"></i> Drum Not Spinning / Motor Issues</li>
                  <li><i className="fa-solid fa-circle-check"></i> Water Drainage &amp; Inlet Valve Problems</li>
                  <li><i className="fa-solid fa-circle-check"></i> Digital Display &amp; Motherboard PCB Repairs</li>
                  <li><i className="fa-solid fa-circle-check"></i> LG, Samsung, IFB, Whirlpool, Bosch</li>
                </ul>
              </div>
              <div className="appliance-img">
                <img src="/washer-repair-clean.jpg" alt="Washing Machines Service" />
              </div>
            </div>

            {/* Box 4: Microwave Ovens */}
            <div className="appliance-box">
              <div className="appliance-info">
                <h3>Microwave Ovens</h3>
                <p style={{ textAlign: 'left', marginTop: '15px' }}>Fast doorstep repairs for Solo, Grill, and Convection microwave ovens using high-grade safety-tested spare parts.</p>
                <ul className="check-list" style={{ textAlign: 'left', marginTop: '15px' }}>
                  <li><i className="fa-solid fa-circle-check"></i> Not Heating / Sparking Inside</li>
                  <li><i className="fa-solid fa-circle-check"></i> Magnetron, Capacitor &amp; Diode Replacement</li>
                  <li><i className="fa-solid fa-circle-check"></i> Turntable Plate Not Rotating</li>
                  <li><i className="fa-solid fa-circle-check"></i> Keypad / Touch Membrane Not Responding</li>
                </ul>
              </div>
              <div className="appliance-img">
                <img src="/microwave-repair-clean.jpg" alt="Microwave Oven Service" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Service Areas Section */}
      <ServiceAreas />

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="cta-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
            <div>
              <h3>Ready to get your appliance fixed?</h3>
              <h2>Schedule a service visit today!</h2>
              <p>Quick doorstep service from Gali No. 21A, Vijay Park, near Maujpur Metro across Shahdara &amp; Delhi NCR with FREE visiting charge.</p>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="tel:7428194037" className="btn btn-white"><i className="fa-solid fa-phone"></i> Call 7428194037</a>
            <Link href="/contact" className="btn btn-dark" style={{ border: '2px solid white' }}>Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
