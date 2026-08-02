import React from 'react';

const galleryColumns = [
  [
    { 
      id: 1, 
      imageUrl: '/gallery/work_1.png', 
      aspect: 'tall', 
      width: 600,
      height: 350,
      alt: 'Matte black ceiling fan installation with gold lining in Shivamogga home' 
    },
    { 
      id: 2, 
      imageUrl: '/gallery/work_2.png', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'TV installation on custom wooden cabinet with concealed wiring' 
    },
    { 
      id: 3, 
      imageUrl: '/gallery/work_3.png', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Precision wall drilling and wall mount brackets installation' 
    }
  ],
  [
    { 
      id: 4, 
      imageUrl: '/gallery/work_4.png', 
      aspect: 'tall', 
      width: 600,
      height: 350,
      alt: 'Secure study table and desk assembly completed by our carpenter' 
    },
    { 
      id: 5, 
      imageUrl: '/gallery/work_5.png', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Curtain rod installation with precise drill holes' 
    },
    { 
      id: 6, 
      imageUrl: '/gallery/work_6.png', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Electrical panel terminal connections setup by our electrician' 
    }
  ],
  [
    { 
      id: 7, 
      imageUrl: '/gallery/work_7.png', 
      aspect: 'tall', 
      width: 600,
      height: 350,
      alt: 'Home repair tools circular saw, drill, angle grinder and jigsaw setup' 
    },
    { 
      id: 8, 
      imageUrl: '/gallery/work_8.png', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Bathroom tap replacement and pipe leakage repairs' 
    },
    { 
      id: 9, 
      imageUrl: '/gallery/work_9.png', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'High quality switch board repair and socket installation' 
    }
  ],
  [
    { 
      id: 10, 
      imageUrl: '/gallery/work_10.png', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Professional wardrobe assembly and hinge fittings in bedroom' 
    },
    { 
      id: 11, 
      imageUrl: '/gallery/work_11.jpeg', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Conduit wiring and distribution board box setup above door frame' 
    },
    { 
      id: 12, 
      imageUrl: '/gallery/work_12.jpeg', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Clean plumbing pipe repair and valve installation' 
    },
    { 
      id: 13, 
      imageUrl: '/gallery/work_13.jpeg', 
      aspect: 'short', 
      width: 600,
      height: 180,
      alt: 'Geyser service and plumbing line check completed in bathroom' 
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
