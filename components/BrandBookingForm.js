'use client';

import { useState } from 'react';
import { SERVICE_LOCALITIES } from '@/app/services/brandData';

export default function BrandBookingForm({ brand }) {
  const brandName = brand?.brand || 'AC';
  const brandFullName = brand?.brandName || `${brandName} AC`;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Jet Pump Foam Cleaning (₹499)',
    acType: 'Split AC (1.5 Ton)',
    locality: 'Sanath Nagar',
    customLocality: '',
    issue: '',
  });

  const [error, setError] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const serviceOptions = [
    'Jet Pump Foam Cleaning (₹499)',
    'AC Gas Refill & Leak Repair (₹1499)',
    'Inverter PCB Board & Sensor Repair (₹799)',
    'AC Installation & Relocation (₹699)',
    'AC Low Cooling / Not Cooling (Free Inspection)',
    'Water Dripping / Drainage Leak Fix',
    'Outdoor Unit Noise / Vibration Fix',
    'Complete AC Health Checkup (Free Inspection)',
  ];

  const acTypes = [
    'Split AC (1.5 Ton)',
    'Split AC (1 Ton)',
    'Split AC (2 Ton)',
    'Inverter Split AC',
    'Window AC (1.5 Ton)',
    'Window AC (1 Ton)',
    'Cassette / Commercial AC',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const cleanPhone = formData.phone.trim().replace(/\D/g, '');

    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }

    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    const selectedArea =
      formData.locality === 'Other Area' && formData.customLocality.trim()
        ? formData.customLocality.trim()
        : formData.locality;

    let message = `Hello 24x7 Repair Support! ❄️\n`;
    message += `I want to book doorstep service for my *${brandFullName}* in Hyderabad.\n\n`;
    message += `📋 *Customer Details:*\n`;
    message += `• *Name:* ${trimmedName}\n`;
    message += `• *Mobile:* ${formData.phone.trim()}\n`;
    message += `• *Brand:* ${brandFullName}\n`;
    message += `• *AC Type:* ${formData.acType}\n`;
    message += `• *Service Required:* ${formData.serviceType}\n`;
    message += `• *Hyderabad Locality:* ${selectedArea}\n`;

    if (formData.issue.trim()) {
      message += `• *Problem Description:* ${formData.issue.trim()}\n`;
    }

    message += `\nPlease assign a verified ${brandName} technician for a 60-minute doorstep visit. (Free visiting charge)`;

    const whatsappNumber = '911234561232';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setIsRedirecting(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsRedirecting(false);
    }, 400);
  };

  return (
    <section className="brand-booking-section section-padding" id="brand-booking-form">
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title text-center" style={{ marginBottom: '32px' }}>
          <div className="booking-pill-badge">
            <i className="fa-brands fa-whatsapp"></i> Instant WhatsApp Doorstep Booking
          </div>
          <h2 style={{ marginTop: '10px' }}>
            Book <span className="red-text">{brandName} AC</span> Service in Hyderabad
          </h2>
          <p>
            Fill this quick form to dispatch a certified {brandName} technician to your doorstep in 60 minutes. 
            100% FREE visiting charge across Hyderabad &amp; Telangana 500023.
          </p>
        </div>

        {/* Booking Card */}
        <div className="brand-form-card">
          <div className="brand-form-header">
            <div className="brand-form-header-left">
              {brand?.logo && (
                <div className="brand-form-logo-box">
                  <img src={brand.logo} alt={`${brandName} Logo`} />
                </div>
              )}
              <div>
                <h3>{brandFullName} Doorstep Service Request</h3>
                <p>Fast technician dispatch • Genuine {brandName} spares • 90-day warranty</p>
              </div>
            </div>
            <div className="brand-form-header-badge">
              <i className="fa-solid fa-bolt"></i> 60-Min Arrival
            </div>
          </div>

          <form onSubmit={handleSubmit} className="brand-booking-form-inner">
            {error && (
              <div className="brand-form-alert error">
                <i className="fa-solid fa-circle-exclamation"></i> {error}
              </div>
            )}

            {isRedirecting && (
              <div className="brand-form-alert success">
                <i className="fa-solid fa-circle-check"></i> Redirecting you to WhatsApp to connect with our {brandName} technician team...
              </div>
            )}

            <div className="form-fields-grid">
              
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="customerName">
                  <i className="fa-solid fa-user"></i> Your Full Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="name"
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="form-group">
                <label htmlFor="customerPhone">
                  <i className="fa-solid fa-phone"></i> Mobile Number (WhatsApp) <span className="req">*</span>
                </label>
                <input
                  type="tel"
                  id="customerPhone"
                  name="phone"
                  placeholder="e.g. 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Service Needed */}
              <div className="form-group">
                <label htmlFor="serviceType">
                  <i className="fa-solid fa-wrench"></i> Service Needed
                </label>
                <div className="select-wrapper">
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <i className="fa-solid fa-chevron-down select-caret"></i>
                </div>
              </div>

              {/* AC Type / Model */}
              <div className="form-group">
                <label htmlFor="acType">
                  <i className="fa-solid fa-snowflake"></i> {brandName} AC Type
                </label>
                <div className="select-wrapper">
                  <select
                    id="acType"
                    name="acType"
                    value={formData.acType}
                    onChange={handleChange}
                  >
                    {acTypes.map((typ, i) => (
                      <option key={i} value={typ}>
                        {typ}
                      </option>
                    ))}
                  </select>
                  <i className="fa-solid fa-chevron-down select-caret"></i>
                </div>
              </div>

              {/* Hyderabad Locality */}
              <div className="form-group">
                <label htmlFor="locality">
                  <i className="fa-solid fa-location-dot"></i> Hyderabad Locality / Area
                </label>
                <div className="select-wrapper">
                  <select
                    id="locality"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                  >
                    {SERVICE_LOCALITIES.map((loc, i) => (
                      <option key={i} value={loc}>
                        {loc} (Hyderabad)
                      </option>
                    ))}
                    <option value="Other Area">Other Area in Hyderabad</option>
                  </select>
                  <i className="fa-solid fa-chevron-down select-caret"></i>
                </div>
              </div>

              {/* Custom Locality (if Other selected) */}
              {formData.locality === 'Other Area' && (
                <div className="form-group">
                  <label htmlFor="customLocality">
                    <i className="fa-solid fa-map-pin"></i> Enter Your Locality / Landmark
                  </label>
                  <input
                    type="text"
                    id="customLocality"
                    name="customLocality"
                    placeholder="e.g. Nizampet / Pragathi Nagar"
                    value={formData.customLocality}
                    onChange={handleChange}
                  />
                </div>
              )}

              {/* Problem / Notes */}
              <div className="form-group full-width">
                <label htmlFor="issue">
                  <i className="fa-solid fa-comment-dots"></i> AC Issue / Notes (Optional)
                </label>
                <textarea
                  id="issue"
                  name="issue"
                  rows="3"
                  placeholder={`Tell us the issue with your ${brandName} AC (e.g., Not cooling, water leaking, error code blinking, noisy outdoor unit...)`}
                  value={formData.issue}
                  onChange={handleChange}
                ></textarea>
              </div>

            </div>

            {/* Submit Action */}
            <div className="brand-form-submit-row">
              <button
                type="submit"
                className="btn btn-brand-whatsapp-submit"
                disabled={isRedirecting}
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>Book {brandName} Service via WhatsApp</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>

              <div className="brand-form-guarantees">
                <span><i className="fa-solid fa-bolt" style={{ color: '#FF5E00' }}></i> 60-Min Arrival</span>
                <span><i className="fa-solid fa-shield-halved" style={{ color: '#10B981' }}></i> 90-Day Warranty</span>
                <span><i className="fa-solid fa-check-double" style={{ color: '#0284c7' }}></i> 100% Free Inspection</span>
                <span><i className="fa-solid fa-phone" style={{ color: '#023a6e' }}></i> Direct Call: <strong>1234561232</strong></span>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
