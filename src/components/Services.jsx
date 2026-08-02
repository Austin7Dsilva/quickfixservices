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
    FaHotTub,
    FaBath,
    FaSlidersH,
    FaWrench,
    FaTools,
    FaRegComment,
    FaArrowRight,
} from "react-icons/fa";

const categories = [
    { id: "all", label: "All Services" },
    { id: "electrical", label: "Electrical" },
    { id: "plumbing", label: "Plumbing" },
    { id: "carpentry", label: "Carpentry & Assembly" },
    { id: "mounting", label: "Mounting & Drilling" },
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
        id: "geyser-install",
        title: "Geyser Installation",
        category: "plumbing",
        icon: FaHotTub,
        description:
            "Water heater/geyser installation or replacement in Shivamogga by expert technicians.",
        message: "Hi, I want to book Geyser Installation in Shivamogga.",
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
];

export default function Services() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredServices =
        activeCategory === "all"
            ? services
            : services.filter((service) => service.category === activeCategory);

    const getWhatsAppLink = (message) => {
        return `https://wa.me/918095867649?text=${encodeURIComponent(message)}`;
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
                                    <a
                                        href={getWhatsAppLink(service.message)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="service-card-action-link"
                                        aria-label={`Enquire about ${service.title} in Shivamogga on WhatsApp`}
                                    >
                                        <FaRegComment className="action-chat-icon" />
                                        <span>Enquire on WhatsApp</span>
                                        <FaArrowRight className="action-arrow-icon" />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
