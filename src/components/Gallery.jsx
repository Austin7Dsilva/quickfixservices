import React from 'react';

const galleryColumns = [
  [
    { 
      id: 1, 
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', 
      aspect: 'tall', 
      width: 600,
      height: 350,
      alt: 'Vetted local handyman technician in Shivamogga with tool belt working on home repairs' 
    },
    { 
      id: 2, 
      imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'House electrical wiring blueprint plan for residential installation in Shivamogga' 
    }
  ],
  [
    { 
      id: 3, 
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Professional electrician installing precision wiring and MCB breaker panel in Shivamogga' 
    },
    { 
      id: 4, 
      imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Secure TV wall mount installation in a modern living room in Shivamogga' 
    },
    { 
      id: 5, 
      imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Professional carpenter performing wardrobe furniture assembly and installation in Shivamogga' 
    }
  ],
  [
    { 
      id: 6, 
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Experienced plumber setting up pipes and fixing leaks in bathroom in Shivamogga' 
    },
    { 
      id: 7, 
      imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Skilled carpenter sizing wood for custom cabinet repairs in Shivamogga' 
    }
  ],
  [
    { 
      id: 8, 
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', 
      aspect: 'super-tall', 
      width: 600,
      height: 550,
      alt: 'Detailed carpentry blueprints for custom wood fitting and furniture design in Shivamogga' 
    }
  ]
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="gallery-badge">OUR WORK IN SHIVAMOGGA</span>
          <h2 className="gallery-title">
            A Glimpse of <span className="text-blue">Our Craftsmanship</span>
          </h2>
          <p className="gallery-description">
            Real work, real results. Browse a selection of electrical repairs, plumbing installations, and carpentry completed across Shivamogga.
          </p>
          <div className="gallery-header-line" aria-hidden="true" />
        </div>

        {/* Masonry Columns Grid */}
        <div className="gallery-grid-cols">
          {galleryColumns.map((col, colIdx) => (
            <div className="gallery-grid-col" key={colIdx}>
              {col.map((item, itemIdx) => (
                <div 
                  key={item.id} 
                  className={`gallery-grid-item ${item.aspect} reveal`}
                  style={{ animationDelay: `${(colIdx * 2 + itemIdx) * 50}ms` }}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.alt} 
                    width={item.width}
                    height={item.height}
                    className="gallery-grid-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
