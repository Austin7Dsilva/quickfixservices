import React from "react";

export default function FloatingButtons() {
    return (
        <>
            <a
                className="floating-whatsapp"
                href="https://wa.me/919000000000"
                aria-label="Chat on WhatsApp"
            >
                📲 WhatsApp
            </a>
            <a
                className="floating-call"
                href="tel:+919000000000"
                aria-label="Call us"
            >
                📞 Call
            </a>
        </>
    );
}
