import React from "react";

const FEATURES = [
    "Same-Day Service",
    "Affordable Pricing",
    "3-Month Workmanship Guarantee",
    "Experienced Professionals",
    "Reliable Support",
    "Transparent Pricing",
    "Quality Materials",
    "Fast Response",
    "Clean Work",
    "Customer Satisfaction",
];

export default function WhyChoose() {
    return (
        <section id="why" className="section">
            <div className="container">
                <h2>Why Choose Quick Fix Services</h2>
                <div className="features" style={{ marginTop: 18 }}>
                    {FEATURES.map((f) => (
                        <div key={f} className="feature">
                            <div
                                style={{
                                    fontSize: 20,
                                    color: "var(--color-accent)",
                                    fontWeight: 800,
                                }}
                            >
                                ✓
                            </div>
                            <div>
                                <strong>{f}</strong>
                                <div
                                    style={{
                                        color: "var(--color-muted)",
                                        fontSize: 13,
                                    }}
                                >
                                    Professional approach focused on fast,
                                    reliable results.
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
