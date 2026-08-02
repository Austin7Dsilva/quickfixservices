import React from 'react';
import { 
  FaPhoneVolume, 
  FaClipboardList, 
  FaCalculator, 
  FaTruck, 
  FaCheckCircle, 
  FaRegCreditCard 
} from 'react-icons/fa';

const steps = [
  {
    stepNum: '01',
    title: 'Contact Us',
    description: 'Reach out via WhatsApp or phone call and tell us what you need.',
    icon: FaPhoneVolume,
  },
  {
    stepNum: '02',
    title: 'Share Your Requirement',
    description: 'Describe the issue or service you need, with photos if possible.',
    icon: FaClipboardList,
  },
  {
    stepNum: '03',
    title: 'Receive Quick Estimate',
    description: 'Get a transparent, no-obligation cost estimate for the work.',
    icon: FaCalculator,
  },
  {
    stepNum: '04',
    title: 'Technician Visits',
    description: 'Our professional technician arrives at your doorstep on time.',
    icon: FaTruck,
  },
  {
    stepNum: '05',
    title: 'Work Completed',
    description: 'The job is done neatly, efficiently, and to your satisfaction.',
    icon: FaCheckCircle,
  },
  {
    stepNum: '06',
    title: 'Easy Payment',
    description: 'Pay easily via cash, UPI, or bank transfer after the work is done.',
    icon: FaRegCreditCard,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="how-it-works-badge">HOW IT WORKS</span>
          <h2 className="how-it-works-title">
            Simple Steps from <span className="text-blue">Booking to Done</span>
          </h2>
          <p className="how-it-works-description">
            Getting your home in Shivamogga fixed has never been easier. Follow these six simple steps to get your repairs completed.
          </p>
          <div className="how-it-works-header-line" aria-hidden="true" />
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {/* Horizontal connecting line for desktop */}
          <div className="timeline-line" aria-hidden="true" />
          
          <div className="timeline-grid" key="how-it-works-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.stepNum} 
                  className="timeline-item reveal"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="timeline-icon-wrapper">
                    <div className="timeline-icon-box">
                      <Icon className="timeline-icon" />
                    </div>
                    <span className="timeline-step-badge">{step.stepNum}</span>
                  </div>
                  <h3 className="timeline-step-title">{step.title}</h3>
                  <p className="timeline-step-description">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
