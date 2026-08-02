import React from 'react';
import { FaStar, FaQuoteLeft, FaInstagram, FaGoogle } from 'react-icons/fa';

const reviews = [];

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
        {reviews.length > 0 && (
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
        )}

        {/* Instagram & Google Reviews Redirect Link */}
        <div className="reviews-more-cta reveal" style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', margin: '0' }}>
            Want to see all our verified customer reviews and real work updates?
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            <a
              href="https://www.google.com/search?sca_esv=b5d99c790dad2661&rlz=1C5GCCM_en&sxsrf=APpeQnsBP76j-R1ZC7wbK0A4PPMoednj9A:1785689098056&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_5gDiMY-wCP7oIX_yIKpDU1G8OrEzevYzayP38kK24tNMX_e9rMInQiWkOQRsd3Vo0iXy47d8bY6n-qkAW5Ubc1-8q43b2mDPuMkMliwHMd5V3DuXnBSs7z3e_Mz6OaSVtwSnF0%3D&q=Quick+fix+services+%28Home+services%29+Reviews&sa=X&ved=2ahUKEwi5rvmisoKWAxVGrlYBHWNMOuMQ0bkNegQINhAD&biw=1440&bih=778&dpr=2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                borderColor: 'var(--primary-gold)',
                color: 'var(--primary-gold)',
                padding: '12px 28px',
                minWidth: '220px'
              }}
              aria-label="Read our customer reviews on Google Business Profile"
            >
              <FaGoogle size={16} />
              <span>Read Google Reviews</span>
            </a>
            <a
              href="https://www.instagram.com/ka14quickfixservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 15px rgba(204, 35, 102, 0.2)',
                padding: '12px 28px',
                minWidth: '220px'
              }}
              aria-label="View our portfolio and customer highlights on Instagram"
            >
              <FaInstagram size={18} />
              <span>See Instagram Feed</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
