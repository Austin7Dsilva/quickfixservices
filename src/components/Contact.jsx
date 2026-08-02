import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container contact-grid">
                <div className="contact-card">
                    <h2>Contact Us</h2>
                    <p style={{ color: "var(--color-muted)" }}>
                        Ready to get your home fixed? Contact us by WhatsApp or
                        phone for a quick response.
                    </p>
                    <div style={{ marginTop: 16 }}>
                        <div>
                            <strong>Phone:</strong>{" "}
                            <a href="tel:+919000000000">+91 90000 00000</a>
                        </div>
                        <div>
                            <strong>WhatsApp:</strong>{" "}
                            <a href="https://wa.me/919000000000">
                                Chat on WhatsApp
                            </a>
                        </div>
                        <div>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:info@quickfixservices.in">
                                info@quickfixservices.in
                            </a>
                        </div>
                        <div>
                            <strong>Business Hours:</strong> Mon-Sat 08:00 -
                            20:00
                        </div>
                        <div>
                            <strong>Service Area:</strong> Shivamogga and
                            surrounding localities
                        </div>
                    </div>
                </div>
                <div>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.000!2d75.57!3d13.93"
                        width="100%"
                        height="320"
                        style={{ border: 0, borderRadius: 12 }}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
