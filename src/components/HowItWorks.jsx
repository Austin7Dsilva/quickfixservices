import React from "react";

const STEPS = [
    "Contact Us",
    "Share Your Requirement",
    "Receive Quick Estimate",
    "Technician Visits",
    "Work Completed",
    "Easy Payment",
];

export default function HowItWorks() {
    return (
        <section id="how" className="section">
            <div className="container">
                <h2>How It Works</h2>
                <div className="timeline" style={{ marginTop: 18 }}>
                    {STEPS.map((s, i) => (
                        <div key={s} className="step">
                            <div className="num">{i + 1}</div>
                            <div>
                                <strong>{s}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
