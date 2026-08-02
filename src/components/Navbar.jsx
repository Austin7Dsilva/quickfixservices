import React, { useEffect, useState } from "react";

const SECTIONS = [
    "home",
    "services",
    "why",
    "how",
    "gallery",
    "reviews",
    "faq",
    "contact",
];

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShrink(window.scrollY > 40);
            const offsets = SECTIONS.map((id) => {
                const el = document.getElementById(id);
                if (!el) return { id, top: Infinity };
                return {
                    id,
                    top: Math.abs(el.getBoundingClientRect().top - 80),
                };
            });
            offsets.sort((a, b) => a.top - b.top);
            setActive(offsets[0].id);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`navbar ${shrink ? "shrink" : ""}`}>
            <div className="brand">
                <img src="/logo.svg" alt="Quick Fix Services" />
                <div>
                    <div style={{ fontWeight: 800 }}>Quick Fix Services</div>
                    <div style={{ fontSize: 12, color: "var(--color-muted)" }}>
                        Shivamogga • Home Repair
                    </div>
                </div>
            </div>
            <nav className="nav-links" aria-label="Primary Navigation">
                {SECTIONS.map((s) => (
                    <a
                        key={s}
                        href={`#${s}`}
                        className={active === s ? "active" : ""}
                    >
                        {s === "home"
                            ? "Home"
                            : s.charAt(0).toUpperCase() + s.slice(1)}
                    </a>
                ))}
            </nav>
            <div className="cta-group">
                <a
                    className="btn btn--primary"
                    href="https://wa.me/919000000000"
                >
                    Book on WhatsApp
                </a>
                <a className="btn btn--ghost" href="tel:+919000000000">
                    Call Now
                </a>
            </div>
        </header>
    );
}
