import React from 'react';
import { 
  FaPhoneVolume, 
  FaClipboardList, 
  FaCalculator, 
  FaUserShield, 
  FaCheckDouble, 
  FaRegCreditCard 
} from 'react-icons/fa';

const steps = [
  {
    stepNum: '01',
    title: 'Contact Us',
    description: 'Call us directly or tap the WhatsApp button to initiate contact.',
    icon: FaPhoneVolume,
  },
  {
    stepNum: '02',
    title: 'Share Requirement',
    description: 'Describe the issue (e.g., dripping tap, broken switch) and share pictures if needed.',
    icon: FaClipboardList,
  },
  {
    stepNum: '03',
    title: 'Quick Estimate',
    description: 'Receive a transparent, no-obligation cost estimate in a few minutes.',
    icon: FaCalculator,
  },
  {
    stepNum: '04',
    title: 'Technician Visits',
    description: 'A verified technician visits your home at your preferred slot.',
    icon: FaUserShield,
  },
  {
    stepNum: '05',
    title: 'Work Completed',
    description: 'The job is executed quickly and professionally with standard checks.',
    icon: FaCheckDouble,
  },
  {
    stepNum: '06',
    title: 'Easy Payment',
    description: 'Pay via cash, UPI, or card once you are fully satisfied with the job.',
    icon: FaRegCreditCard,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Process Flow</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Getting home maintenance done has never been this easy. Follow our simple six-step process.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {/* Vertical connecting line for mobile, horizontal styling for desktop */}
          <div className="timeline-line" aria-hidden="true" />
          
          <div className="timeline-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.stepNum} 
                  className="timeline-item reveal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step Card */}
                  <div className="timeline-card glass-panel">
                    <div className="timeline-badge-container">
                      <span className="timeline-step-number">{step.stepNum}</span>
                      <div className="timeline-icon-box">
                        <Icon className="timeline-icon" />
                      </div>
                    </div>
                    <h3 className="timeline-step-title">{step.title}</h3>
                    <p className="timeline-step-description">{step.description}</p>
                  </div>
                  
                  {/* Connector Arrow for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="timeline-connector-arrow" aria-hidden="true">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
