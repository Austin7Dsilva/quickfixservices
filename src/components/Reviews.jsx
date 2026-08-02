import React from "react";

const TESTIMONIALS = [
    {
        name: "Ramesh K.",
        text: "Quick Fix did an excellent job installing our ceiling fan. Fast and clean.",
        rating: 5,
    },
    {
        name: "Sowmya P.",
        text: "Great pricing and friendly technician. Highly recommend.",
        rating: 5,
    },
    {
        name: "Vijay S.",
        text: "Repaired our leaking sink quickly. Very professional.",
        rating: 5,
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="section">
            <div className="container">
                <h2>Customer Reviews</h2>
                <div className="reviews-grid" style={{ marginTop: 18 }}>
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="review">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <strong>{t.name}</strong>
                                <div
                                    style={{
                                        color: "var(--color-accent)",
                                        fontWeight: 800,
                                    }}
                                >
                                    {"★".repeat(t.rating)}
                                </div>
                            </div>
                            <p style={{ color: "var(--color-muted)" }}>
                                {t.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
