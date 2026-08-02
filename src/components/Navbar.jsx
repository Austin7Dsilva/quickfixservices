import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Gallery", id: "gallery" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
];

export default function Navbar({ activeSection }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // height of sticky navbar
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
        <header
            className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
            role="banner"
        >
            <div className="container navbar-container">
                {/* Logo */}
                <a
                    href="#home"
                    className="navbar-logo-link"
                    onClick={(e) => handleNavClick(e, "home")}
                >
                    <img
                        src={logo}
                        alt="Quick Fix Services Logo"
                        className="navbar-logo"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav
                    className="navbar-desktop-nav"
                    role="navigation"
                    aria-label="Desktop Navigation"
                >
                    <ul className="navbar-nav-list">
                        {navItems.map((item) => (
                            <li key={item.id} className="navbar-nav-item">
                                <a
                                    href={`#${item.id}`}
                                    className={`navbar-nav-link ${activeSection === item.id ? "active" : ""}`}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                    aria-current={
                                        activeSection === item.id
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Right Side CTAs */}
                <div className="navbar-ctas-desktop">
                    <a href="tel:+918095867649" className="navbar-call-link">
                        <FaPhoneAlt size={14} className="navbar-call-icon" />
                        <span>Call</span>
                    </a>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp-nav"
                    >
                        <FaWhatsapp size={14} />
                        <span>WhatsApp</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle Navigation Menu"
                    aria-controls="mobile-nav"
                >
                    {isMobileMenuOpen ? (
                        <FaTimes size={24} />
                    ) : (
                        <FaBars size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            <div
                id="mobile-nav"
                className={`navbar-mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="navbar-mobile-drawer-header">
                    <img
                        src={logo}
                        alt="Quick Fix Services Logo"
                        className="navbar-logo"
                    />
                    <button
                        className="navbar-mobile-close"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close Navigation Menu"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>
                <nav
                    className="navbar-mobile-nav"
                    role="navigation"
                    aria-label="Mobile Navigation"
                >
                    <ul className="navbar-mobile-list">
                        {navItems.map((item) => (
                            <li key={item.id} className="navbar-mobile-item">
                                <a
                                    href={`#${item.id}`}
                                    className={`navbar-mobile-link ${activeSection === item.id ? "active" : ""}`}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Drawer CTAs */}
                    <div className="navbar-mobile-ctas">
                        <a
                            href="tel:+918095867649"
                            className="navbar-mobile-call-btn"
                        >
                            <FaPhoneAlt size={14} />
                            <span>Call Now</span>
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar-mobile-whatsapp-btn"
                        >
                            <FaWhatsapp size={16} />
                            <span>WhatsApp Booking</span>
                        </a>
                    </div>
                </nav>
            </div>

            {/* Mobile Drawer Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="navbar-mobile-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </header>
    );
}
