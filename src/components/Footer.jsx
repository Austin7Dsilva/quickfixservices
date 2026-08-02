import React, { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPhoneAlt,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
    const [modalType, setModalType] = useState(null); // 'privacy' or 'terms' or null

    const handleScrollClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
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

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section" role="contentinfo">
            <div className="container footer-container">
                {/* Top Branding Section */}
                <div className="footer-grid">
                    {/* Column 1: Brand Info */}
                    <div className="footer-col brand-col">
                        <img
                            src={logo}
                            alt="Quick Fix Services Logo"
                            className="footer-logo"
                            width="80"
                            height="52"
                        />
                        <p className="footer-brand-desc">
                            Your trusted local choice for home repair and
                            maintenance in Shivamogga. Guaranteed workmanship,
                            certified technicians, and transparent pricing.
                        </p>
                        <div className="footer-socials">
                            <a
                                href="https://facebook.com/quickfixshivamogga"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/ka14quickfixservices/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://twitter.com/quickfixshivamogga"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://youtube.com/quickfixshivamogga"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links-list">
                            <li>
                                <a
                                    href="#home"
                                    onClick={(e) =>
                                        handleScrollClick(e, "home")
                                    }
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) =>
                                        handleScrollClick(e, "services")
                                    }
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#why-choose-us"
                                    onClick={(e) =>
                                        handleScrollClick(e, "why-choose-us")
                                    }
                                >
                                    Why Choose Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#how-it-works"
                                    onClick={(e) =>
                                        handleScrollClick(e, "how-it-works")
                                    }
                                >
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    onClick={(e) =>
                                        handleScrollClick(e, "gallery")
                                    }
                                >
                                    Gallery Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#reviews"
                                    onClick={(e) =>
                                        handleScrollClick(e, "reviews")
                                    }
                                >
                                    Client Reviews
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    onClick={(e) => handleScrollClick(e, "faq")}
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={(e) =>
                                        handleScrollClick(e, "contact")
                                    }
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Core Services */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Our Services</h3>
                        <ul className="footer-links-list">
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) =>
                                        handleScrollClick(e, "services")
                                    }
                                >
                                    Electrical Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) =>
                                        handleScrollClick(e, "services")
                                    }
                                >
                                    Plumbing Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) =>
                                        handleScrollClick(e, "services")
                                    }
                                >
                                    Carpentry Woodwork
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) =>
                                        handleScrollClick(e, "services")
                                    }
                                >
                                    Furniture Assembly
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) =>
                                        handleScrollClick(e, "services")
                                    }
                                >
                                    TV Wall Mounting
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) =>
                                        handleScrollClick(e, "services")
                                    }
                                >
                                    Appliances Installation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) =>
                                        handleScrollClick(e, "services")
                                    }
                                >
                                    General Handyman Fixes
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Details */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Reach Us</h3>
                        <ul className="footer-contact-list">
                            <li>
                                <FaPhoneAlt className="footer-contact-icon" />
                                <a
                                    href="tel:+918095867649"
                                    aria-label="Call Quick Fix Services at +91 8095867649"
                                >
                                    +91 8095867649
                                </a>
                            </li>
                            <li>
                                <FaWhatsapp className="footer-contact-icon text-green" />
                                <a
                                    href="https://wa.me/918095867649"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Message Quick Fix Services on WhatsApp at +91 8095867649"
                                >
                                    +91 8095867649
                                </a>
                            </li>
                            <li>
                                <FaEnvelope className="footer-contact-icon" />
                                <a
                                    href="mailto:ka14quickfixservices@gmail.com"
                                    aria-label="Email Quick Fix Services at ka14quickfixservices@gmail.com"
                                >
                                    ka14quickfixservices@gmail.com
                                </a>
                            </li>
                            <li>
                                <FaMapMarkerAlt className="footer-contact-icon" />
                                <span>
                                    Chalukya nagar, Shivamogga, Karnataka -
                                    577201
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider line */}
                <hr className="footer-divider" />

                {/* Bottom Rights Section */}
                <div className="footer-bottom">
                    <p className="copyright-text">
                        &copy; {currentYear} Quick Fix Services. All Rights
                        Reserved. Designed in Shivamogga.
                    </p>
                    <div className="footer-policy-links">
                        <button
                            className="policy-btn"
                            onClick={() => setModalType("privacy")}
                        >
                            Privacy Policy
                        </button>
                        <span className="policy-divider">|</span>
                        <button
                            className="policy-btn"
                            onClick={() => setModalType("terms")}
                        >
                            Terms & Conditions
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal overlays for Policies */}
            {modalType && (
                <div
                    className="policy-modal-overlay"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="policy-modal glass-panel">
                        <div className="policy-modal-header">
                            <h3 className="policy-modal-title">
                                {modalType === "privacy"
                                    ? "Privacy Policy"
                                    : "Terms & Conditions"}
                            </h3>
                            <button
                                className="policy-modal-close"
                                onClick={() => setModalType(null)}
                                aria-label="Close dialog"
                            >
                                <FaTimes size={18} />
                            </button>
                        </div>

                        <div className="policy-modal-body">
                            {modalType === "privacy" ? (
                                <>
                                    <p>
                                        <strong>
                                            Effective Date: August 2026
                                        </strong>
                                    </p>
                                    <p>
                                        At Quick Fix Services, we value the
                                        privacy of our visitors in Shivamogga.
                                        This Privacy Policy documents the types
                                        of personal information that is
                                        collected and recorded by us and how we
                                        use it.
                                    </p>
                                    <h4>1. Information We Collect</h4>
                                    <p>
                                        When you contact us via Call or
                                        WhatsApp, we may collect your name,
                                        phone number, and physical address to
                                        coordinate repair bookings.
                                    </p>
                                    <h4>2. How We Use Your Information</h4>
                                    <p>
                                        We use your contact details solely to
                                        deliver home repair services, share
                                        estimates, and request customer
                                        feedback. We never sell, lease, or share
                                        your private information with third
                                        parties.
                                    </p>
                                    <h4>3. Contact Information</h4>
                                    <p>
                                        For any privacy-related queries, please
                                        write to us at:{" "}
                                        <em>ka14quickfixservices@gmail.com</em>.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p>
                                        <strong>
                                            Effective Date: August 2026
                                        </strong>
                                    </p>
                                    <p>
                                        Welcome to Quick Fix Services. By
                                        accessing our landing website or booking
                                        our services in Shivamogga, you agree to
                                        comply with the following terms:
                                    </p>
                                    <h4>1. Service Bookings & Estimates</h4>
                                    <p>
                                        All estimates provided over
                                        phone/WhatsApp are approximations. Final
                                        pricing will be confirmed on-site by our
                                        service technician before work begins.
                                    </p>
                                    <h4>2. 3-Month Workmanship Guarantee</h4>
                                    <p>
                                        We guarantee our repair workmanship for
                                        3 months. This guarantee covers
                                        rectifying the specific issue fixed by
                                        us. It does not cover parts damaged due
                                        to customer misuse, voltage surges, or
                                        wear and tear.
                                    </p>
                                    <h4>3. Payment Terms</h4>
                                    <p>
                                        Payments are due immediately upon
                                        completion of the service. We accept
                                        Cash and digital UPI payments.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}
