import React from "react";
import { FiZap } from "react-icons/fi";
import { GiWaterPump, GiHammerNails } from "react-icons/gi";
import { MdOutlineTv, MdOutlineChair } from "react-icons/md";

const SERVICES = [
    {
        title: "Electrical Services",
        icon: <FiZap />,
        desc: "Wiring, repairs, fan & tube light installation.",
    },
    {
        title: "Plumbing Services",
        icon: <GiWaterPump />,
        desc: "Leak repairs, geyser installation, bathroom fittings.",
    },
    {
        title: "Carpentry",
        icon: <GiHammerNails />,
        desc: "Cabinet repair, door/frame adjustments, carpentry work.",
    },
    {
        title: "Furniture Assembly",
        icon: <MdOutlineChair />,
        desc: "Flatpack assembly and on-site furniture setup.",
    },
    {
        title: "TV Wall Mount Installation",
        icon: <MdOutlineTv />,
        desc: "Safe TV mounting with cable concealment.",
    },
    {
        title: "General Home Maintenance",
        icon: <GiHammerNails />,
        desc: "Small repairs, drilling, curtain rods and more.",
    },
];

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="container">
                <h2>Our Services</h2>
                <p style={{ color: "var(--color-muted)" }}>
                    Premium home repair and installation services across
                    Shivamogga.
                </p>
                <div className="services-grid" style={{ marginTop: 18 }}>
                    {SERVICES.map((s, i) => (
                        <article
                            key={s.title}
                            className="service-card"
                            aria-labelledby={`svc-${i}`}
                        >
                            <div
                                style={{
                                    fontSize: 28,
                                    color: "var(--color-accent)",
                                }}
                            >
                                {s.icon}
                            </div>
                            <h4 id={`svc-${i}`}>{s.title}</h4>
                            <p>{s.desc}</p>
                            <div style={{ marginTop: "auto" }}>
                                <a
                                    className="btn btn--ghost"
                                    href="https://wa.me/919000000000"
                                >
                                    Contact
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
