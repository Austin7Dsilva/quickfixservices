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
    description: 'Quick response and same-day visits for urgent electrical, plumbing, and carpentry requests in Shivamogga.',
    icon: FaClock,
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive, budget-friendly rates for premium home repair and handyman services with no hidden fees.',
    icon: FaRupeeSign,
  },
  {
    title: '3-Month Guarantee',
    description: 'Every job is backed by a comprehensive 3-month workmanship guarantee for your peace of mind.',
    icon: FaShieldAlt,
  },
  {
    title: 'Vetted Professionals',
    description: 'Skilled, vetted local electricians, plumbers, and carpenters with years of hands-on maintenance experience.',
    icon: FaAward,
  },
  {
    title: 'Reliable Support',
    description: 'Friendly support before, during, and after your service — we are always reachable via call or WhatsApp.',
    icon: FaHeadphones,
  },
  {
    title: 'Transparent Estimates',
    description: 'Clear pricing estimates upfront before any home repairs begin. You approve the costs first.',
    icon: FaReceipt,
  },
  {
    title: 'Quality Spare Parts',
    description: 'We source and use only durable, genuine, branded materials and spare parts for long-lasting fixes.',
    icon: FaCube,
  },
  {
    title: 'Fast Call Back',
    description: 'We answer your calls and WhatsApp bookings quickly, coordinating technician visits without delay.',
    icon: FaBolt,
  },
  {
    title: 'Clean Workmanship',
    description: 'We respect your property — performing clean, tidy repairs with complete site cleanup before we leave.',
    icon: FaBroom,
  },
  {
    title: 'Customer First',
    description: 'Your satisfaction is our primary goal. Our home maintenance experts do not leave until you are fully happy.',
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
