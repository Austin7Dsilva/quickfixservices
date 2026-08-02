import React from 'react';

const galleryColumns = [
  [
    { 
      id: 1, 
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', 
      aspect: 'tall', 
      alt: 'Technician working with tool belt' 
    },
    { 
      id: 2, 
      imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      alt: 'Electrical plans blueprint' 
    }
  ],
  [
    { 
      id: 3, 
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      alt: 'Precision wiring breaker panel' 
    },
    { 
      id: 4, 
      imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      alt: 'Modern living room home install' 
    },
    { 
      id: 5, 
      imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      alt: 'Furniture assembly craftsmanship' 
    }
  ],
  [
    { 
      id: 6, 
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      alt: 'Professional plumbing setup' 
    },
    { 
      id: 7, 
      imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80', 
      aspect: 'short', 
      alt: 'Carpentry hand saw ruler' 
    }
  ],
  [
    { 
      id: 8, 
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', 
      aspect: 'super-tall', 
      alt: 'Woodwork details and blueprints' 
    }
  ]
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="gallery-badge">OUR WORK</span>
          <h2 className="gallery-title">
            A Glimpse of <span className="text-blue">Our Craftsmanship</span>
          </h2>
          <p className="gallery-description">
            Real work, real results. Browse a selection of repairs and installations completed by our team across Shivamogga.
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
