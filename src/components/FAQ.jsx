import React, { useState } from 'react';

const faqs = [
  {
    question: 'Do you offer same-day electrician, plumber, or carpenter services in Shivamogga?',
    answer: 'Yes! We offer same-day visits for urgent electrical repairs, plumbing leaks, carpentry fixes, and home maintenance across Shivamogga, subject to technician availability.',
  },
  {
    question: 'Which local neighborhoods in Shivamogga do you serve?',
    answer: 'We serve all of Shivamogga city limits and surrounding areas, including residential zones such as Vinoba Nagar, Gopala, Jayanagar, Tilak Nagar, Gandhi Nagar, Savalanga Road, Durgigudi, Rajendra Nagar, and 100 Feet Road.',
  },
  {
    question: 'Do you provide a workmanship guarantee on home repairs?',
    answer: 'Absolutely! All our home maintenance services—including house wiring, switch board repair, tap repair, and furniture assembly—are backed by a comprehensive 3-month workmanship guarantee.',
  },
  {
    question: 'How do I book an emergency technician?',
    answer: 'You can easily book by calling us directly or messaging us on WhatsApp. Share your location in Shivamogga, describe the issue (with photos if possible), and we will coordinate a fast visit.',
  },
  {
    question: 'Are your prices transparent and fixed?',
    answer: 'Yes, we practice complete transparency. We provide a clear estimate upfront before starting any work. There are no hidden fees or surprise charges.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all convenient payment modes including cash, UPI transfers (such as Google Pay, PhonePe, and Paytm), and bank transfers upon successful completion of the job.',
  },
  {
    question: 'Do you provide spare parts, or should I purchase them?',
    answer: 'Our technicians can source genuine, branded spare parts and materials on your behalf and present the bill transparently, or you can choose to purchase them yourself.',
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
