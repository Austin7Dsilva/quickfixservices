import React from 'react';
import { 
  FaClock, 
  FaRupeeSign, 
  FaShieldAlt, 
  FaUserCheck, 
  FaHeadphones, 
  FaReceipt, 
  FaAward, 
  FaBolt, 
  FaBroom, 
  FaThumbsUp 
} from 'react-icons/fa';

const values = [
  {
    title: 'Same-Day Service',
    description: 'Book in the morning, get the job completed before sunset. Fast and efficient schedules to suit your day.',
    icon: FaClock,
  },
  {
    title: 'Affordable Pricing',
    description: 'High-quality repairs that fit your budget. Competitive local rates in Shivamogga with no hidden charges.',
    icon: FaRupeeSign,
  },
  {
    title: '3-Month Guarantee',
    description: 'Complete peace of mind. We provide a 3-month workmanship guarantee on all repair jobs.',
    icon: FaShieldAlt,
  },
  {
    title: 'Experienced Pros',
    description: 'Background-verified, trained, and polite local technicians who know exactly how to handle complex repairs.',
    icon: FaUserCheck,
  },
  {
    title: 'Reliable Support',
    description: 'Have queries or need follow-ups? Our support is always a phone call or WhatsApp message away.',
    icon: FaHeadphones,
  },
  {
    title: 'Transparent Pricing',
    description: 'Detailed upfront pricing shared before work begins. No surprises, no unexplained charges.',
    icon: FaReceipt,
  },
  {
    title: 'Quality Materials',
    description: 'We source and install only top-rated, certified spare parts and fixtures from reliable brands.',
    icon: FaAward,
  },
  {
    title: 'Fast Response',
    description: 'Get a callback or WhatsApp estimate within 15 minutes of sharing your requirement.',
    icon: FaBolt,
  },
  {
    title: 'Clean Post-Work',
    description: 'No mess left behind. Our technicians clean up the service area fully before leaving your home.',
    icon: FaBroom,
  },
  {
    title: '100% Satisfaction',
    description: 'We measure our success by your happiness. Over 1,000+ local homes serviced in Shivamogga.',
    icon: FaThumbsUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-us-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">The Quick Fix Guarantee</h2>
          <p className="section-description">
            We are committed to delivering standard-setting home repair services. Here is why homeowners in Shivamogga trust us.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="why-choose-us-grid">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <div 
                key={val.title} 
                className="value-card glass-panel reveal"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="value-card-icon-container">
                  <Icon className="value-card-icon" />
                </div>
                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-description">{val.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
