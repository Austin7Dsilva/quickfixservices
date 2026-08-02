import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="hero section">
            <div className="container hero-inner">
                <motion.div
                    className="hero-copy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Professional Home Repair Services in Shivamogga</h1>
                    <p>
                        Electrical, Plumbing, Carpentry, Furniture Assembly, TV
                        Installation and Complete Home Maintenance Services.
                    </p>
                    <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
                        <a
                            className="btn btn--primary"
                            href="https://wa.me/919000000000"
                        >
                            Book on WhatsApp
                        </a>
                        <a className="btn btn--ghost" href="tel:+919000000000">
                            Call Now
                        </a>
                        <a className="btn" href="#services">
                            Explore Services
                        </a>
                    </div>

                    <div className="hero-badges">
                        <div className="badge">✓ Same-Day Service</div>
                        <div className="badge">✓ Affordable Pricing</div>
                        <div className="badge">
                            ✓ 3-Month Workmanship Guarantee
                        </div>
                        <div className="badge">
                            ✓ Trusted Local Professionals
                        </div>
                    </div>
                </motion.div>

                <motion.aside
                    className="hero-card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1598300053329-9b2bd6a3af66?w=900&q=60&auto=format&fit=crop"
                        alt="home maintenance"
                        style={{ width: "100%", borderRadius: 12 }}
                    />
                </motion.aside>
            </div>
        </section>
    );
}
