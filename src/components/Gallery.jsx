import React from "react";

const IMAGES = new Array(9)
    .fill(0)
    .map((_, i) => `https://images.unsplash.com/photo-15${i}?...&w=800&q=60`);

export default function Gallery() {
    return (
        <section id="gallery" className="section">
            <div className="container">
                <h2>Gallery</h2>
                <p style={{ color: "var(--color-muted)" }}>
                    Recent jobs and installations. Hover to preview.
                </p>
                <div className="masonry" style={{ marginTop: 18 }}>
                    {[
                        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=60&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1581578017427-59d7f3f8b3a8?w=900&q=60&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1582719478250-1a4f23b1a4d0?w=900&q=60&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1542444459-db4d3b20a0e7?w=900&q=60&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1598300053329-9b2bd6a3af66?w=900&q=60&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=60&auto=format&fit=crop",
                    ].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`job ${i + 1}`}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
