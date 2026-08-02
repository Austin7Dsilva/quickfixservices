import React from "react";
import {
    FaPhoneAlt,
    FaWhatsapp,
    FaEnvelope,
    FaClock,
    FaMapMarkerAlt,
    FaCompass,
    FaExternalLinkAlt,
} from "react-icons/fa";

export default function Contact() {
    const whatsappMessage =
        "Hi Quick Fix Services, I would like to book a technician in Shivamogga. Please coordinate.";
    const whatsappUrl = `https://wa.me/918095867649?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                {/* Section Header */}
                <div className="section-header reveal">
                    <span className="section-subtitle">Get in Touch</span>
                    <h2 className="section-title">Schedule Your Fix Today</h2>
                    <p className="section-description">
                        Need home maintenance? Contact us via Call or WhatsApp,
                        or check our operating details below.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Details Card */}
                    <div className="contact-info-card glass-panel reveal">
                        <h3 className="contact-card-heading">
                            Contact Details
                        </h3>

                        <address className="contact-info-list" style={{ fontStyle: "normal" }}>
                            <ul>
                                <li>
                                    <div className="contact-icon-box">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <span className="contact-label">
                                            Call Now
                                        </span>
                                        <a
                                            href="tel:+918095867649"
                                            className="contact-value link-gold"
                                            aria-label="Call Quick Fix Services at +91 8095867649"
                                        >
                                            +91 8095867649
                                        </a>
                                    </div>
                                </li>

                                <li>
                                    <div className="contact-icon-box whatsapp-box">
                                        <FaWhatsapp />
                                    </div>
                                    <div>
                                        <span className="contact-label">
                                            WhatsApp Us
                                        </span>
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-value link-green"
                                            aria-label="Message Quick Fix Services on WhatsApp at +91 8095867649"
                                        >
                                            +91 8095867649
                                        </a>
                                    </div>
                                </li>

                                <li>
                                    <div className="contact-icon-box">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <span className="contact-label">
                                            Email Support
                                        </span>
                                        <a
                                            href="mailto:ka14quickfixservices@gmail.com"
                                            className="contact-value link-white"
                                            aria-label="Email Quick Fix Services at ka14quickfixservices@gmail.com"
                                        >
                                            ka14quickfixservices@gmail.com
                                        </a>
                                    </div>
                                </li>

                                <li>
                                    <div className="contact-icon-box">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <span className="contact-label">
                                            Business Hours
                                        </span>
                                        <span className="contact-value">
                                            8:00 AM – 8:00 PM, Daily
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <div className="contact-icon-box">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <span className="contact-label">
                                            Business Address
                                        </span>
                                        <span className="contact-value">
                                            Gandhi Nagar, 100 Feet Road, Shivamogga, Karnataka 577201
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </address>

                        <div className="contact-card-actions">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary contact-action-btn"
                                aria-label="Book electrician, plumber, or carpenter in Shivamogga on WhatsApp"
                            >
                                <FaWhatsapp size={18} />
                                Book on WhatsApp
                            </a>
                            <a
                                href="tel:+918095867649"
                                className="btn btn-primary contact-action-btn"
                                aria-label="Call Quick Fix Services at +91 8095867649"
                            >
                                <FaPhoneAlt size={14} />
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* Interactive Google Map Mockup */}
                    <div
                        className="contact-map-card glass-panel reveal"
                        style={{ animationDelay: "100ms" }}
                    >
                        <div className="map-mockup-container">
                            {/* Custom CSS Map Styling Elements */}
                            <div className="map-grid-layer" />
                            <div className="map-road-1" />
                            <div className="map-road-2" />
                            <div className="map-river" />

                            {/* Map Center Marker */}
                            <div className="map-marker-pin">
                                <div className="map-marker-dot" />
                                <div className="map-marker-pulse" />
                                <div className="map-marker-label">
                                    <h4>Quick Fix Services</h4>
                                    <p>Shivamogga Central Office</p>
                                </div>
                            </div>

                            {/* Map HUD Controls */}
                            <div className="map-controls">
                                <button
                                    aria-label="Zoom In"
                                    className="map-zoom-btn"
                                >
                                    +
                                </button>
                                <button
                                    aria-label="Zoom Out"
                                    className="map-zoom-btn"
                                >
                                    -
                                </button>
                            </div>

                            <div className="map-footer-banner">
                                <div className="map-footer-text">
                                    <FaCompass className="map-compass-icon" />
                                    <span>
                                        Serving Vinoba Nagar, Gopala, Jayanagar
                                        & surrounding areas in Shivamogga.
                                    </span>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Gandhi+Nagar,+100+Feet+Road,+Shivamogga,+Karnataka+577201"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-external-link"
                                    aria-label="View Quick Fix Services location on Google Maps"
                                >
                                    View Large Map
                                    <FaExternalLinkAlt
                                        size={10}
                                        style={{ marginLeft: "4px" }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
