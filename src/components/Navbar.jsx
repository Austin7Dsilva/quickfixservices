import React, { useState, useEffect } from "react";
import {
    FaBars,
    FaTimes,
    FaWhatsapp,
    FaPhoneAlt,
    FaArrowLeft,
    FaChevronDown,
    FaClipboardList,
    FaKey,
    FaSignOutAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
];

function AccountMenu({
    authUser,
    onAuthClick,
    onOrdersClick,
    onChangePassword,
    onSignOut,
    mobile,
}) {
    const [isOpen, setIsOpen] = useState(false);

    if (!authUser) {
        return (
            <button
                type="button"
                className={mobile ? "navbar-mobile-auth-btn" : "navbar-auth-link"}
                onClick={onAuthClick}
            >
                Sign up / in
            </button>
        );
    }

    const closeMenu = () => setIsOpen(false);

    return (
        <div className={`navbar-account-menu ${mobile ? "mobile" : ""}`}>
            <button
                type="button"
                className={mobile ? "navbar-mobile-auth-btn" : "navbar-auth-link"}
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
                aria-haspopup="menu"
            >
                <span>{authUser.firstName}</span>
                <FaChevronDown size={11} />
            </button>
            {isOpen && (
                <div className="navbar-account-dropdown" role="menu">
                    <div className="navbar-account-welcome">
                        Welcome {authUser.firstName}
                    </div>
                    <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                            closeMenu();
                            onOrdersClick();
                        }}
                    >
                        <FaClipboardList />
                        <span>Orders</span>
                    </button>
                    <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                            closeMenu();
                            onChangePassword();
                        }}
                    >
                        <FaKey />
                        <span>Change password</span>
                    </button>
                    <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                            closeMenu();
                            onSignOut();
                        }}
                    >
                        <FaSignOutAlt />
                        <span>Sign out</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default function Navbar({
    activeSection,
    isBillingView,
    authUser,
    onAuthClick,
    onOrdersClick,
    onChangePassword,
    onSignOut,
}) {
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

    const handleLogoClick = (e) => {
        if (isBillingView) {
            e.preventDefault();
            window.location.hash = "";
        } else {
            handleNavClick(e, "home");
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
                    onClick={handleLogoClick}
                    aria-label="Quick Fix Services - Home Page"
                >
                    <img
                        src={logo}
                        alt="Quick Fix Services Logo"
                        className="navbar-logo"
                        width="300"
                        height="300"
                    />
                </a>

                {/* Desktop Navigation */}
                {!isBillingView ? (
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
                ) : (
                    <nav
                        className="navbar-desktop-nav"
                        role="navigation"
                        aria-label="Billing Desktop Navigation"
                    >
                        <ul className="navbar-nav-list">
                            <li className="navbar-nav-item">
                                <a
                                    href="/#"
                                    className="navbar-nav-link active"
                                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                                >
                                    <FaArrowLeft size={12} />
                                    <span>Back to Website</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Desktop Right Side CTAs */}
                {!isBillingView ? (
                    <div className="navbar-ctas-desktop">
                        <a 
                            href="tel:+918095867649" 
                            className="navbar-call-link"
                            aria-label="Call Quick Fix Services at +91 8095867649"
                        >
                            <FaPhoneAlt size={14} className="navbar-call-icon" />
                            <span>Call</span>
                        </a>
                        <AccountMenu
                            authUser={authUser}
                            onAuthClick={onAuthClick}
                            onOrdersClick={onOrdersClick}
                            onChangePassword={onChangePassword}
                            onSignOut={onSignOut}
                        />
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp-nav"
                            aria-label="Book Repair Services in Shivamogga via WhatsApp"
                        >
                            <FaWhatsapp size={14} />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                ) : null}

                {/* Mobile Menu Button / Exit Portal Button */}
                {isBillingView ? (
                    <a
                        href="/#"
                        className="navbar-mobile-toggle"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            color: isScrolled ? "#1e293b" : "var(--text-light)"
                        }}
                        aria-label="Back to Website"
                    >
                        <FaArrowLeft size={14} />
                        <span>Exit Portal</span>
                    </a>
                ) : (
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
                )}
            </div>

            {/* Mobile Drawer Menu */}
            {!isBillingView && (
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
                            width="300"
                            height="300"
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
                                aria-label="Call Quick Fix Services at +91 8095867649"
                            >
                                <FaPhoneAlt size={14} />
                                <span>Call Now</span>
                            </a>
                            <AccountMenu
                                authUser={authUser}
                                onAuthClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onAuthClick();
                                }}
                                onOrdersClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onOrdersClick();
                                }}
                                onChangePassword={() => {
                                    setIsMobileMenuOpen(false);
                                    onChangePassword();
                                }}
                                onSignOut={() => {
                                    setIsMobileMenuOpen(false);
                                    onSignOut();
                                }}
                                mobile
                            />
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="navbar-mobile-whatsapp-btn"
                                aria-label="Book Home Maintenance on WhatsApp"
                            >
                                <FaWhatsapp size={16} />
                                <span>WhatsApp Booking</span>
                            </a>
                        </div>
                    </nav>
                </div>
            )}

            {/* Mobile Drawer Overlay */}
            {!isBillingView && isMobileMenuOpen && (
                <div
                    className="navbar-mobile-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </header>
    );
}
