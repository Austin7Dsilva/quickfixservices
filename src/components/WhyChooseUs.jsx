import React from 'react';
import { 
  FaClock, 
  FaRupeeSign, 
  FaShieldAlt, 
  FaAward, 
  FaHeadphones, 
  FaReceipt, 
  FaCube, 
  FaBolt, 
  FaBroom, 
  FaSmile 
} from 'react-icons/fa';

const values = [
  {
    title: 'Same-Day Service',
    description: 'Quick response and same-day visits for most repair requests across Shivamogga.',
    icon: FaClock,
  },
  {
    title: 'Affordable Pricing',
    description: 'Honest, competitive rates that fit your budget without compromising on quality.',
    icon: FaRupeeSign,
  },
  {
    title: '3-Month Workmanship Guarantee',
    description: 'Every job is backed by a 3-month guarantee on workmanship for complete peace of mind.',
    icon: FaShieldAlt,
  },
  {
    title: 'Experienced Professionals',
    description: 'Skilled, vetted technicians with years of hands-on experience in home repairs.',
    icon: FaAward,
  },
  {
    title: 'Reliable Support',
    description: 'Friendly support before, during, and after your service — we are always reachable.',
    icon: FaHeadphones,
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear estimates upfront with no hidden charges. You approve before we start.',
    icon: FaReceipt,
  },
  {
    title: 'Quality Materials',
    description: 'We use only durable, branded materials and parts that stand the test of time.',
    icon: FaCube,
  },
  {
    title: 'Fast Response',
    description: 'We answer your WhatsApp and calls quickly and schedule visits without delay.',
    icon: FaBolt,
  },
  {
    title: 'Clean Work',
    description: 'We respect your home — clean, tidy work with proper cleanup before we leave.',
    icon: FaBroom,
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your happiness is our priority. We do not leave until you are fully satisfied.',
    icon: FaSmile,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-us-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="why-choose-badge">WHY CHOOSE US</span>
          <h2 className="why-choose-title">
            The <span className="text-gold">Quick Fix</span> Difference
          </h2>
          <p className="why-choose-description">
            We do not just fix things — we deliver a reliable, clean, and guaranteed service experience that keeps Shivamogga homes running smoothly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="why-choose-us-grid">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <div 
                key={val.title} 
                className="value-card reveal"
                style={{ animationDelay: `${index * 30}ms` }}
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
