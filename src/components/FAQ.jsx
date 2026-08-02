import React, { useState } from "react";

const FAQS = [
    {
        q: "Do you offer same-day home repair services?",
        a: "Yes, for many common repairs depending on technician availability.",
    },
    {
        q: "Which areas in Shivamogga do you serve?",
        a: "We serve Shivamogga city and nearby localities.",
    },
    {
        q: "What payment methods do you accept?",
        a: "Cash, UPI and major mobile wallets accepted.",
    },
    {
        q: "Do you provide a guarantee on your work?",
        a: "Yes — a 3-month workmanship guarantee on repairs and installations.",
    },
    {
        q: "Are your prices transparent?",
        a: "Yes — we provide an estimate before starting work.",
    },
    {
        q: "Can I book via WhatsApp?",
        a: "Absolutely — use the WhatsApp button to send details and photos.",
    },
    {
        q: "Do you supply materials?",
        a: "We can supply materials or work with customer-provided items; we discuss options upfront.",
    },
    {
        q: "How long does a typical visit take?",
        a: "Most small repairs are completed within 1–3 hours depending on the job.",
    },
    {
        q: "Can you install geysers and heavy appliances?",
        a: "Yes — we have trained technicians for geysers and appliance installations.",
    },
    {
        q: "What should I prepare for the technician visit?",
        a: "Please clear the work area and have any access information ready.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);
    return (
        <section id="faq" className="section">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div style={{ marginTop: 18 }}>
                    {FAQS.map((f, i) => (
                        <div key={i} className="faq-item">
                            <button
                                aria-expanded={open === i}
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                    background: "transparent",
                                    border: "none",
                                    padding: 0,
                                    fontSize: 16,
                                    fontWeight: 700,
                                }}
                            >
                                {f.q}
                            </button>
                            {open === i && (
                                <div
                                    style={{
                                        marginTop: 8,
                                        color: "var(--color-muted)",
                                    }}
                                >
                                    {f.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
