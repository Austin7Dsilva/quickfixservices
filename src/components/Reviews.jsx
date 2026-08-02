import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    name: 'Ramesh Kumar',
    location: 'Vinoba Nagar, Shivamogga',
    text: 'Highly professional! The electrician arrived within 2 hours of my WhatsApp booking to replace our switchboards and install ceiling lights. Very neat work, fair rates, and he cleaned up afterwards.',
    rating: 5,
    initials: 'RK',
  },
  {
    name: 'Shwetha S.',
    location: 'Gopala, Shivamogga',
    text: 'Called them for geyser leakage and new bathroom fixtures. The plumber was polite, diagnosed the issue quickly, and resolved it in no time. The 3-month guarantee gives total peace of mind!',
    rating: 5,
    initials: 'SS',
  },
  {
    name: 'Vikram Hegde',
    location: 'Durgigudi, Shivamogga',
    text: 'Outstanding furniture assembly service. He assembled our large 4-door wardrobe and study desk with ease. Very polite technician and highly recommended for complex home installations.',
    rating: 5,
    initials: 'VH',
  },
  {
    name: 'Anil Gowda',
    location: 'Rajendra Nagar, Shivamogga',
    text: 'Quick Fix mounted our new 65" TV. The technician used a proper bubble-level to ensure perfect alignment and concealed the wires nicely. Fast service and very affordable pricing.',
    rating: 5,
    initials: 'AG',
  },
  {
    name: 'Meenakshi Prasad',
    location: 'Jayanagar, Shivamogga',
    text: 'Excellent wall drilling service. The technician hung up multiple photo frames, wall clocks, and curtain rods. Extremely fast, clean work, and zero dust left behind. Excellent service!',
    rating: 5,
    initials: 'MP',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Client Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">
            We take pride in delivering professional, high-quality maintenance services that keep our clients happy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <figure 
              key={review.name} 
              className="review-card glass-panel reveal"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Quote Icon */}
              <div className="review-quote-icon" aria-hidden="true">
                <FaQuoteLeft />
              </div>

              {/* Rating stars */}
              <div className="review-rating" aria-label={`Rated ${review.rating} out of 5 stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="review-text">
                "{review.text}"
              </blockquote>

              {/* User details */}
              <figcaption className="review-author">
                <div className="review-avatar" aria-hidden="true">
                  {review.initials}
                </div>
                <div className="review-meta">
                  <h3 className="review-name">{review.name}</h3>
                  <cite className="review-location">{review.location}</cite>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
