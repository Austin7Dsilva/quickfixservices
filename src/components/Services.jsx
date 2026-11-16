import React, { useState } from "react";
import {
    FaBolt,
    FaTint,
    FaHammer,
    FaCouch,
    FaTv,
    FaFan,
    FaLightbulb,
    FaToggleOn,
    FaBath,
    FaSlidersH,
    FaWrench,
    FaTools,
    FaRegComment,
    FaArrowRight,
    FaWhatsapp,
    FaCalendarAlt,
    FaPaintRoller,
    FaIndustry,
    FaBorderAll,
    FaVideo,
} from "react-icons/fa";

const categories = [
    { id: "all", label: "All Services" },
    { id: "electrical", label: "Electrical" },
    { id: "plumbing", label: "Plumbing" },
    { id: "security", label: "CCTV Installation" },
    { id: "carpentry", label: "Carpentry & Assembly" },
    { id: "painting", label: "Painting" },
    { id: "fabrication", label: "Fabrication & Aluminium" },
    { id: "mounting", label: "Mounting & Drilling" },
    { id: "custom-services", label: "Custom Services" },
];

const services = [
    {
        id: "elec-gen",
        title: "Electrical Services",
        category: "electrical",
        icon: FaBolt,
        description:
            "Same-day electrical repairs, home wiring, safety checks, and emergency electrician services in Shivamogga by certified professionals.",
        message:
            "Hi, I want to book General Electrical Services / Electrician in Shivamogga.",
    },
    {
        id: "plumb-gen",
        title: "Plumbing Services",
        category: "plumbing",
        icon: FaTint,
        description:
            "Water leakage repair, pipe repair, tap fix, and complete bathroom plumbing solutions by experienced plumbers in Shivamogga.",
        message:
            "Hi, I want to book General Plumbing Services / Plumber in Shivamogga.",
    },
    {
        id: "cctv-installation",
        title: "CCTV Installation",
        category: "security",
        icon: FaVideo,
        description:
            "Professional CCTV camera installation for homes and businesses in Shivamogga, with careful camera placement and setup.",
        message: "Hi, I want to book CCTV Installation in Shivamogga.",
    },
    {
        id: "painting-services",
        title: "Painting Services",
        category: "painting",
        icon: FaPaintRoller,
        description:
            "Interior and exterior wall painting, wall putty finish, waterproof primer coatings, texture painting, and touch-up works in Shivamogga.",
        message:
            "Hi, I want to book Painting Services / Painter in Shivamogga.",
    },
    {
        id: "aluminium-work",
        title: "Aluminium Work",
        category: "fabrication",
        icon: FaBorderAll,
        description:
            "Custom aluminium partition fabrication, sliding windows, aluminium doors, section framing, and mosquito mesh installations in Shivamogga.",
        message:
            "Hi, I want to book Aluminium Work / Partition Services in Shivamogga.",
    },
    {
        id: "fabrication-work",
        title: "Fabrication & Welding Work",
        category: "fabrication",
        icon: FaIndustry,
        description:
            "Structural steel fabrication, safety grills, iron main gates, balcony railings, shed fabrication, and on-site welding repairs in Shivamogga.",
        message: "Hi, I want to book Fabrication & Welding Work in Shivamogga.",
    },
    {
        id: "carp-gen",
        title: "Carpentry",
        category: "carpentry",
        icon: FaHammer,
        description:
            "Affordable carpentry in Shivamogga including door repair, cabinet fix, lock repair, and custom woodwork solutions.",
        message:
            "Hi, I want to book Carpentry Services / Carpenter in Shivamogga.",
    },
    {
        id: "furn-assembly",
        title: "Furniture Assembly",
        category: "carpentry",
        icon: FaCouch,
        description:
            "Wardrobe assembly, bed assembly, dining table setup, and custom furniture installation services in Shivamogga.",
        message:
            "Hi, I want to book Furniture Assembly / Furniture Installation in Shivamogga.",
    },
    {
        id: "tv-mount",
        title: "TV Wall Mount Installation",
        category: "mounting",
        icon: FaTv,
        description:
            "Secure TV wall mount installation for all sizes and brands with clean wire concealment and precise level alignment.",
        message:
            "Hi, I want to book TV Wall Mount / TV Installation in Shivamogga.",
    },
    {
        id: "fan-install",
        title: "Fan Installation",
        category: "electrical",
        icon: FaFan,
        description:
            "Ceiling fan installation, wall fan fitting, regulator replacement, and balancing by local Shivamogga electricians.",
        message: "Hi, I want to book Fan Installation in Shivamogga.",
    },
    {
        id: "tube-light",
        title: "Tube Light Installation",
        category: "electrical",
        icon: FaLightbulb,
        description:
            "Tube light installation, bracket fitting, bulb replacement, and holder repair by professional technicians.",
        message: "Hi, I want to book Tube Light Installation in Shivamogga.",
    },
    {
        id: "led-light",
        title: "LED Light Installation",
        category: "electrical",
        icon: FaLightbulb,
        description:
            "Energy-efficient LED light installation, spotlight fitting, strip lights, and decorative lighting setups.",
        message: "Hi, I want to book LED Light Installation in Shivamogga.",
    },
    {
        id: "switch-repair",
        title: "Switch Board Repair",
        category: "electrical",
        icon: FaToggleOn,
        description:
            "Burnt switch board repair, loose wire tightening, new socket installation, and electrical safety diagnostics.",
        message:
            "Hi, I want to book Switch Board Repair / Socket Replacement in Shivamogga.",
    },
    {
        id: "bath-accessories",
        title: "Bathroom Fitting",
        category: "plumbing",
        icon: FaBath,
        description:
            "Mounting of bathroom mirrors, towel rods, cabinet shelves, soap stands, and health faucet replacements.",
        message:
            "Hi, I want to book Bathroom Accessories / Bathroom Fitting in Shivamogga.",
    },
    {
        id: "curtain-rod",
        title: "Curtain Rod Installation",
        category: "mounting",
        icon: FaSlidersH,
        description:
            "Curtain rod installation, window blinds mounting, curtain bracket fitting, and window screen setup.",
        message: "Hi, I want to book Curtain Rod Installation in Shivamogga.",
    },
    {
        id: "wall-drilling",
        title: "Wall Drilling Service",
        category: "mounting",
        icon: FaTools,
        description:
            "Quick wall drilling service for photo frames, wall clocks, keyholders, and heavy mirror decorations.",
        message:
            "Hi, I want to book Wall Drilling / Hanging Service in Shivamogga.",
    },
    {
        id: "home-maintenance",
        title: "Home Maintenance Services",
        category: "mounting",
        icon: FaWrench,
        description:
            "Affordable handyman services in Shivamogga, latch changes, door mesh fitting, and general quick repairs.",
        message:
            "Hi, I want to book Home Maintenance / Handyman Services in Shivamogga.",
    },
    {
        id: "custom-services",
        title: "Custom Services",
        category: "custom-services",
        icon: FaTools,
        description:
            "Need something not listed? Tell us what service you need and place a custom booking.",
        message:
            "Hi, I need a custom service in Shivamogga. Please let me describe what I need.",
    },
];

export default function Services({ authUser, onAuthClick }) {
    const [activeCategory, setActiveCategory] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBooking, setIsBooking] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerMobile, setCustomerMobile] = useState("");
    const [serviceDetails, setServiceDetails] = useState("");
    const [customerLocation, setCustomerLocation] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bookingError, setBookingError] = useState("");
    const [createdOrderId, setCreatedOrderId] = useState("");

    const orderApiUrl =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
            ? "/api/orders"
            : "https://quickfixservices.onrender.com/api/orders";

    const filteredServices =
        activeCategory === "all"
            ? services
            : services.filter((service) => service.category === activeCategory);

    const handleEnquiryClick = (e, serviceTitle, isCustomService = false) => {
        e.preventDefault();
        setIsBooking(false);
        setBookingError("");
        setCreatedOrderId("");
        setSelectedService(serviceTitle);
        setServiceDetails(isCustomService ? "" : serviceTitle);
        setIsModalOpen(true);
    };

    const handleBookClick = (serviceTitle, isCustomService = false) => {
        setIsBooking(true);
        setBookingError("");
        setCreatedOrderId("");
        setSelectedService(serviceTitle);
        setServiceDetails(isCustomService ? "" : serviceTitle);
        setCustomerName(
            [authUser.firstName, authUser.lastName].filter(Boolean).join(" "),
        );
        setCustomerMobile(authUser.phone || "");
        setIsModalOpen(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (isBooking) {
            setBookingError("");
            setIsSubmitting(true);

            try {
                const response = await fetch(orderApiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("quickfix_token") || ""}`,
                    },
                    body: JSON.stringify({
                        service: serviceDetails || selectedService,
                        customerName,
                        customerPhone: customerMobile,
                        location: customerLocation,
                    }),
                });
                const result = await response.json();

                if (!response.ok || !result.success || !result.order?.id) {
                    throw new Error(
                        result.message || "Unable to place your booking. Please try again.",
                    );
                }

                setCreatedOrderId(result.order.id);
            } catch (error) {
                setBookingError(
                    error instanceof TypeError
                        ? "Unable to connect to the server. Please try again."
                        : error.message,
                );
            } finally {
                setIsSubmitting(false);
            }

            return;
        }

        const messageText = `*New Service ${isBooking ? "Booking" : "Enquiry"}*
• *Customer Name:* ${customerName || "Not specified"}
• *Mobile Number:* ${customerMobile || "Not specified"}
• *Service Needed:* ${serviceDetails || selectedService}
• *Location:* ${customerLocation || "Not specified"}`;

        const waUrl = `https://wa.me/918095867649?text=${encodeURIComponent(messageText)}`;
        window.open(waUrl, "_blank", "noopener,noreferrer");
        setIsModalOpen(false);
        setCustomerName("");
        setCustomerMobile("");
        setCustomerLocation("");
    };

    return (
        <section id="services" className="services-section section-padding">
            {/* Light background grid effect is handled in Components.css */}
            <div className="container">
                {/* Section Header */}
                <div className="services-section-header reveal">
                    <span className="services-header-badge">
                        OUR SERVICES IN SHIVAMOGGA
                    </span>
                    <h2 className="services-header-title">
                        Home Maintenance & Repair Services,
                        <br />
                        <span className="services-header-title-accent">
                            Done Right in Shivamogga
                        </span>
                    </h2>
                    <p className="services-header-text">
                        From emergency electrical repairs to expert plumbing and
                        professional carpentry — our skilled local technicians
                        in Shivamogga handle every job with absolute care and
                        precision.
                    </p>
                    <div className="services-header-line" aria-hidden="true" />
                </div>

                {/* Filter Navigation */}
                <div className="services-filter reveal">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="services-grid" key={activeCategory}>
                    {filteredServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <article
                                key={service.id}
                                className="service-card"
                                style={{ animationDelay: `${index * 30}ms` }}
                            >
                                {/* Icon Badge */}
                                <div className="service-icon-badge">
                                    <Icon className="service-icon-svg" />
                                </div>

                                {/* Content */}
                                <h3 className="service-card-title">
                                    {service.title}
                                </h3>
                                <p className="service-card-description">
                                    {service.description}
                                </p>

                                {/* Footer Action Link */}
                                <div className="service-card-footer">
                                    <button
                                        onClick={(e) =>
                                            handleEnquiryClick(
                                                e,
                                                service.title,
                                                service.id === "custom-services",
                                            )
                                        }
                                        className="service-card-action-link"
                                        aria-label={`Enquire about ${service.title} in Shivamogga`}
                                    >
                                        <FaRegComment className="action-chat-icon" />
                                        <span>Enquire on WhatsApp</span>
                                        <FaArrowRight className="action-arrow-icon" />
                                    </button>
                                    {!authUser && (
                                        <p className="service-card-signin-prompt">
                                            Or{" "}
                                            <button
                                                type="button"
                                                onClick={onAuthClick}
                                            >
                                                sign in
                                            </button>{" "}
                                            to place an order in the application.
                                        </p>
                                    )}
                                    {authUser && (
                                        <button
                                            type="button"
                                            className="service-card-book-button"
                                            onClick={() =>
                                                handleBookClick(
                                                    service.title,
                                                    service.id === "custom-services",
                                                )
                                            }
                                            aria-label={`Book ${service.title} in Shivamogga`}
                                        >
                                            <FaCalendarAlt />
                                            <span>Book Services</span>
                                        </button>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            {/* Enquiry Form Modal */}
            {isModalOpen && (
                <div
                    className="enquiry-modal-overlay"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="enquiry-modal-content glass-panel"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="enquiry-modal-close"
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <div className="enquiry-modal-header">
                            <h3 className="enquiry-modal-title">
                                {isBooking
                                    ? "Book a Service"
                                    : "Service Enquiry"}
                            </h3>
                            <p className="enquiry-modal-subtitle">
                                Quick Fix Services Customer Care
                            </p>
                        </div>

                        {createdOrderId ? (
                            <div className="booking-confirmation" role="status">
                                <h4>Booking placed successfully</h4>
                                <p>
                                    Your booking reference is{" "}
                                    <strong>{createdOrderId}</strong>. We will
                                    contact you to confirm the service.
                                </p>
                                <button
                                    type="button"
                                    className="enquiry-submit-btn"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleFormSubmit}
                                className="enquiry-modal-form"
                            >
                                {bookingError && (
                                    <p className="booking-error" role="alert">
                                        {bookingError}
                                    </p>
                                )}
                                <div className="form-group">
                                    <label htmlFor="customer-name">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="customer-name"
                                        value={customerName}
                                        onChange={(e) =>
                                            setCustomerName(e.target.value)
                                        }
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="customer-mobile">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="customer-mobile"
                                        value={customerMobile}
                                        onChange={(e) =>
                                            setCustomerMobile(e.target.value)
                                        }
                                        placeholder="Enter 10-digit mobile number"
                                        pattern="[0-9]{10}"
                                        title="Please enter a valid 10-digit mobile number"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service-needed">
                                        Service Needed
                                    </label>
                                    <input
                                        type="text"
                                        id="service-needed"
                                        value={serviceDetails}
                                        onChange={(e) =>
                                            setServiceDetails(e.target.value)
                                        }
                                        placeholder="What service are you looking for?"
                                        maxLength={120}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="customer-location">
                                        Your Location / Address
                                    </label>
                                    <input
                                        type="text"
                                        id="customer-location"
                                        value={customerLocation}
                                        onChange={(e) =>
                                            setCustomerLocation(e.target.value)
                                        }
                                        placeholder="Enter your area in Shivamogga"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="enquiry-submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isBooking ? (
                                        <FaCalendarAlt size={18} />
                                    ) : (
                                        <FaWhatsapp size={18} />
                                    )}
                                    <span>
                                        {isBooking
                                            ? isSubmitting
                                                ? "Placing booking..."
                                                : "Book service"
                                            : "Send Enquiry via WhatsApp"}
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
