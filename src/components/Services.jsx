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
            "Complete electrical repairs, wiring, and safety checks by licensed professionals.",
        message:
            "Hi, I want to book General Electrical Services in Shivamogga.",
    },
    {
        id: "plumb-gen",
        title: "Plumbing Services",
        category: "plumbing",
        icon: FaTint,
        description:
            "Leak fixes, pipe fitting, tap repair, and full bathroom plumbing solutions.",
        message: "Hi, I want to book General Plumbing Services in Shivamogga.",
    },
    {
        id: "carp-gen",
        title: "Carpentry",
        category: "carpentry",
        icon: FaHammer,
        description:
            "Door repairs, woodwork, cabinet fixes, and custom carpentry for your home.",
        message: "Hi, I want to book Carpentry Services in Shivamogga.",
    },
    {
        id: "furn-assembly",
        title: "Furniture Assembly",
        category: "carpentry",
        icon: FaCouch,
        description:
            "Quick and sturdy assembly of beds, wardrobes, tables, and all furniture.",
        message:
            "Hi, I want to inquire about Furniture Assembly in Shivamogga.",
    },
    {
        id: "tv-mount",
        title: "TV Wall Mount Installation",
        category: "mounting",
        icon: FaTv,
        description:
            "Secure wall mounting for all TV sizes with concealed wiring and perfect leveling.",
        message: "Hi, I want to book TV Wall Mount Installation in Shivamogga.",
    },
    {
        id: "fan-install",
        title: "Fan Installation",
        category: "electrical",
        icon: FaFan,
        description:
            "Ceiling fan installation, regulator fitting, and balancing for smooth operation.",
        message: "Hi, I want to book Fan Installation in Shivamogga.",
    },
    {
        id: "tube-light",
        title: "Tube Light Installation",
        category: "electrical",
        icon: FaLightbulb,
        description:
            "Tube light fitting, holder replacement, and fixture repairs done right.",
        message: "Hi, I want to book Tube Light Installation in Shivamogga.",
    },
    {
        id: "led-light",
        title: "LED Light Installation",
        category: "electrical",
        icon: FaLightbulb,
        description:
            "LED bulb, strip, and panel installation for bright and energy-efficient lighting.",
        message: "Hi, I want to book LED Light Installation in Shivamogga.",
    },
    {
        id: "switch-repair",
        title: "Switch & Socket Repairs",
        category: "electrical",
        icon: FaToggleOn,
        description:
            "Burnt switch replacement, loose wire tightening, and new socket fittings.",
        message: "Hi, I want to book Switch & Socket Repairs in Shivamogga.",
    },
    {
        id: "geyser-install",
        title: "Geyser Installation & Service",
        category: "plumbing",
        icon: FaHotTub,
        description:
            "Safe geyser installation, piping, and element servicing for hot water.",
        message:
            "Hi, I want to book Geyser Installation & Service in Shivamogga.",
    },
    {
        id: "bath-accessories",
        title: "Bathroom Accessories Fitting",
        category: "plumbing",
        icon: FaBath,
        description:
            "Hassle-free mounting of mirrors, towel rods, soap stands, and cabinet shelves.",
        message:
            "Hi, I want to book Bathroom Accessories Installation in Shivamogga.",
    },
    {
        id: "curtain-rod",
        title: "Curtain Rod Installation",
        category: "mounting",
        icon: FaSlidersH,
        description:
            "Precise drilling and mounting of curtain rods, blinds, and window brackets.",
        message: "Hi, I want to book Curtain Rod Installation in Shivamogga.",
    },
    {
        id: "wall-drilling",
        title: "Wall Drilling Services",
        category: "mounting",
        icon: FaTools,
        description:
            "Quick drilling for photo frames, clocks, shelves, and heavy wall decorations.",
        message: "Hi, I want to book Wall Drilling Services in Shivamogga.",
    },
    {
        id: "home-maintenance",
        title: "General Home Maintenance",
        category: "mounting",
        icon: FaWrench,
        description:
            "Minor repairs, lock changes, window mesh fittings, and handyman jobs.",
        message: "Hi, I want to book General Home Maintenance in Shivamogga.",
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
                    <span className="services-header-badge">OUR SERVICES</span>
                    <h2 className="services-header-title">
                        Everything Your Home Needs,<br />
                        <span className="services-header-title-accent">Under One Roof</span>
                    </h2>
                    <p className="services-header-text">
                        From a flickering light to a full home maintenance check
                        — our skilled technicians handle it all with care and
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
