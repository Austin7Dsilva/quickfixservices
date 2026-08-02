import React from "react";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div
                className="container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 20,
                }}
            >
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <img
                        src="/logo.svg"
                        alt="Quick Fix Services"
                        style={{ height: 44 }}
                    />
                    <div>
                        <div style={{ fontWeight: 800 }}>
                            Quick Fix Services
                        </div>
                        <div
                            style={{
                                fontSize: 12,
                                color: "rgba(255,255,255,0.7)",
                            }}
                        >
                            Shivamogga • Home Repair
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                    <div>
                        <div style={{ fontWeight: 700 }}>Services</div>
                        <div
                            style={{
                                color: "rgba(255,255,255,0.7)",
                                marginTop: 8,
                            }}
                        >
                            Electrical · Plumbing · Carpentry · TV Installation
                        </div>
                    </div>
                    <div
                        style={{
                            textAlign: "right",
                            color: "rgba(255,255,255,0.7)",
                        }}
                    >
                        <div>Phone: +91 90000 00000</div>
                        <div style={{ marginTop: 6 }}>Privacy · Terms</div>
                        <div style={{ marginTop: 6 }}>
                            © {new Date().getFullYear()} Quick Fix Services
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
