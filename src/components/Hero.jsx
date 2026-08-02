import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaTools, FaCheck } from 'react-icons/fa';

export default function Hero() {
  const handleScrollToServices = (e) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi Quick Fix Services, I would like to book a home maintenance service in Shivamogga. Please let me know the availability."
  )}`;

  return (
    <section id="home" className="hero-section">
      {/* Background glow effects */}
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />
      
      <div className="container hero-container">
        <div className="hero-content fade-in">
          {/* Tagline */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">#1 Home Maintenance Service in Shivamogga</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title text-gradient">
            Professional Home Repair Services in Shivamogga
          </h1>

          {/* Subheading */}
          <p className="hero-subtitle">
            Reliable Electrical, Plumbing, Carpentry, Furniture Assembly, TV Wall Mount, Geyser installation, and general repairs. Done by trusted local professionals.
          </p>

          {/* Call to Actions */}
          <div className="hero-ctas">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary hero-btn"
            >
              <FaWhatsapp size={20} />
              Book on WhatsApp
            </a>
            <a 
              href="tel:+919876543210" 
              className="btn btn-primary hero-btn"
            >
              <FaPhoneAlt size={16} />
              Call Now
            </a>
            <a 
              href="#services" 
              onClick={handleScrollToServices}
              className="btn btn-outline hero-btn"
            >
              <FaTools size={16} />
              Explore Services
            </a>
          </div>

          {/* Trust Badges */}
          <div className="hero-trust-badges">
            <div className="trust-badge">
              <div className="trust-badge-icon">
                <FaCheck size={12} />
              </div>
              <span>Same-Day Service</span>
            </div>
            <div className="trust-badge">
              <div className="trust-badge-icon">
                <FaCheck size={12} />
              </div>
              <span>Affordable Pricing</span>
            </div>
            <div className="trust-badge">
              <div className="trust-badge-icon">
                <FaCheck size={12} />
              </div>
              <span>3-Month Workmanship Guarantee</span>
            </div>
            <div className="trust-badge">
              <div className="trust-badge-icon">
                <FaCheck size={12} />
              </div>
              <span>Trusted Local Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
