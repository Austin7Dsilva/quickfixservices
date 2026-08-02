import React from "react";
import {
    FaWhatsapp,
    FaPhoneAlt,
    FaChevronDown,
    FaBolt,
    FaRupeeSign,
    FaShieldAlt,
    FaUsers,
    FaStar,
} from "react-icons/fa";

export default function Hero() {
    const handleScrollToServices = (e) => {
        e.preventDefault();
        const element = document.getElementById("services");
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const whatsappLink = `https://wa.me/918095867649?text=${encodeURIComponent(
        "Hi Quick Fix Services, I would like to book a home maintenance service in Shivamogga. Please let me know the availability.",
    )}`;

    return (
        <section id="home" className="hero-section">
            {/* Background glow effects */}
            <div className="hero-glow-1" aria-hidden="true" />
            <div className="hero-glow-2" aria-hidden="true" />

            <div className="container hero-container">
                <div className="hero-content fade-in">
                    {/* Tagline */}
                    <div className="hero-badge">
                        <FaStar className="badge-star-icon" size={12} />
                        <span className="hero-badge-text">
                            SHIVAMOGGA'S TRUSTED HOME REPAIR EXPERTS
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="hero-title">
                        Professional Home
                        <br />
                        Repair
                        <br />
                        Services in{" "}
                        <span className="text-gold">Shivamogga</span>
                    </h1>

                    {/* Subheading */}
                    <p className="hero-subtitle">
                        Electrical, Plumbing, Carpentry, Furniture Assembly, TV
                        Installation and Complete Home Maintenance Services —
                        delivered by skilled local professionals, right to your
                        doorstep.
                    </p>

                    {/* Call to Actions */}
                    <div className="hero-ctas">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp-hero"
                        >
                            <FaWhatsapp size={20} />
                            <span>Book on WhatsApp</span>
                        </a>
                        <a href="tel:+918095867649" className="btn-call-hero">
                            <FaPhoneAlt size={16} />
                            <span>Call Now</span>
                        </a>
                        <a
                            href="#services"
                            onClick={handleScrollToServices}
                            className="btn-explore-hero"
                        >
                            <span>Explore Services</span>
                            <FaChevronDown size={14} />
                        </a>
                    </div>

                    {/* 2x2 Trust Badges Grid */}
                    <div className="hero-trust-grid">
                        <div className="trust-card">
                            <div className="trust-card-icon-container">
                                <FaBolt size={14} />
                            </div>
                            <span className="trust-card-text">
                                Same-Day Service
                            </span>
                        </div>
                        <div className="trust-card">
                            <div className="trust-card-icon-container">
                                <FaRupeeSign size={14} />
                            </div>
                            <span className="trust-card-text">
                                Affordable Pricing
                            </span>
                        </div>
                        <div className="trust-card">
                            <div className="trust-card-icon-container">
                                <FaShieldAlt size={14} />
                            </div>
                            <span className="trust-card-text">
                                3-Month Workmanship Guarantee
                            </span>
                        </div>
                        <div className="trust-card">
                            <div className="trust-card-icon-container">
                                <FaUsers size={14} />
                            </div>
                            <span className="trust-card-text">
                                Trusted Local Professionals
                            </span>
                        </div>
                    </div>

                    {/* Bottom Metrics Grid */}
                    <div className="hero-metrics-grid">
                        <div className="metric-card">
                            <div className="metric-value">5,000+</div>
                            <div className="metric-label">
                                REPAIRS COMPLETED
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">
                                4.9
                                <FaStar
                                    size={18}
                                    className="metric-star-icon"
                                />
                            </div>
                            <div className="metric-label">CUSTOMER RATING</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">3 Months</div>
                            <div className="metric-label">
                                WORKMANSHIP GUARANTEE
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">Same Day</div>
                            <div className="metric-label">
                                SERVICE AVAILABLE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
