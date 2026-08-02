import React, { useState } from 'react';

const faqs = [
  {
    question: 'Do you offer same-day home repair services in Shivamogga?',
    answer: 'Yes, we offer same-day service for most common repairs including electrical, plumbing, and general maintenance, subject to technician availability.',
  },
  {
    question: 'What areas do you serve in and around Shivamogga?',
    answer: 'We serve the entire Shivamogga city limits and surrounding close areas including Vinoba Nagar, Gopala, Jayanagar, Tilak Nagar, Gandhi Nagar, Savalanga Road, and nearby residential zones.',
  },
  {
    question: 'Do you provide a workmanship guarantee?',
    answer: 'Yes! All our services are backed by a comprehensive 3-month workmanship guarantee. If the issue reoccurs within this period, we will re-inspect and fix it for free.',
  },
  {
    question: 'How can I book a service?',
    answer: 'You can easily book a service by calling us directly or sending us a message on WhatsApp. Simply share your location, the service needed, and your preferred timing.',
  },
  {
    question: 'Are your prices transparent and fixed?',
    answer: 'Yes, we believe in upfront pricing. We provide clear, transparent estimates before starting any work so you know exactly what to expect with no hidden charges.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, UPI payments (GPay, PhonePe, Paytm), and bank transfers after the service is successfully completed to your satisfaction.',
  },
  {
    question: 'Do you bring materials and parts, or do I need to arrange them?',
    answer: 'Our technicians can source genuine, high-quality spare parts and materials on your behalf and present the purchase bill transparently, or you can purchase them yourself.',
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); // Start with first index open as in screenshot

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="faq-badge">FAQ</span>
          <h2 className="faq-title">
            Questions? <span className="text-blue">We've Got Answers</span>
          </h2>
          <p className="faq-description">
            Everything you need to know about our home repair services in Shivamogga. <br />Still curious? Just message us.
          </p>
          <div className="faq-header-line" aria-hidden="true" />
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className={`faq-toggle-icon ${isOpen ? 'open' : 'closed'}`}>
                    {isOpen ? '−' : '+'}
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
