import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappMessage = "Hi Quick Fix Services, I would like to book a service in Shivamogga.";
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  if (!isVisible) return null;

  return (
    <div className="floating-ctas" role="complementary" aria-label="Quick Contacts">
      {/* Floating Call Button (Bottom Left) */}
      <a 
        href="tel:+919876543210" 
        className="floating-btn floating-call pulse-animation-blue"
        aria-label="Call Quick Fix Services"
      >
        <FaPhoneAlt size={20} />
        <span className="floating-tooltip">Call Now</span>
      </a>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn floating-whatsapp pulse-animation"
        aria-label="Chat with Quick Fix Services on WhatsApp"
      >
        <FaWhatsapp size={22} />
        <span className="floating-tooltip">WhatsApp Booking</span>
      </a>
    </div>
  );
}
