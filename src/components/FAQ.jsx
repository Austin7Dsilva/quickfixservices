import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What areas in Shivamogga do you cover?',
    answer: 'We serve the entire Shivamogga (Shimoga) city area, including Vinoba Nagar, Gopala, Durgigudi, Rajendra Nagar, Jayanagar, Tilak Nagar, Savalanga Road, Gandhi Nagar, and nearby suburbs.',
  },
  {
    question: 'How do I book a repair or installation service?',
    answer: 'You can book a service by calling us directly at +91 98765 43210 or by clicking the "Book on WhatsApp" button. Describe your requirement, send photos if needed, and choose your preferred slot.',
  },
  {
    question: 'Do you offer same-day services?',
    answer: 'Yes! For bookings made before 12:00 PM, we offer same-day repair services across Shivamogga, depending on the availability of our technicians.',
  },
  {
    question: 'Is there a warranty or guarantee on the work done?',
    answer: 'Absolutely. We stand behind our quality. We offer a 3-month workmanship guarantee on all our home repair and installation services. If the issue reoccurs, we will fix it for free.',
  },
  {
    question: 'Are your technicians background-verified and safe?',
    answer: 'Safety is our highest priority. All our local electricians, plumbers, carpenters, and handymen are background-checked, personally vetted, and highly trained professionals.',
  },
  {
    question: 'How do you calculate the repair costs?',
    answer: 'We believe in transparent pricing. We provide a quick free estimate over the phone or WhatsApp based on your details. For complex tasks, the technician will inspect the issue on-site and provide a final estimate before starting work.',
  },
  {
    question: 'What are your operational hours?',
    answer: 'We are open from 8:00 AM to 8:00 PM, Monday through Sunday. We work on weekends as well to fit your busy schedule.',
  },
  {
    question: 'Do I need to buy the materials/spare parts myself?',
    answer: 'You can choose to purchase the materials yourself. Alternatively, our technician can source genuine, branded materials on your behalf and present the bill transparently without any markup.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept easy digital payment options including UPI (Google Pay, PhonePe, Paytm, BHIM), Cash, and Net Banking payments after work completion.',
  },
  {
    question: 'Do you take up commercial property maintenance?',
    answer: 'Yes, we handle electrical, plumbing, mounting, and carpentry maintenance contracts for retail shops, offices, clinics, and residential apartments in Shivamogga.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about our home maintenance booking process, guarantees, and pricing.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item glass-panel ${isOpen ? 'active' : ''} reveal`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-icon-box">
                    <FaChevronDown className="faq-arrow-icon" />
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer-container"
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                  aria-hidden={!isOpen}
                >
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
