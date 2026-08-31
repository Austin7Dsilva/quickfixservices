import React, { useState, useEffect, useCallback } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa';

// Dynamically import all images from src/assets/gallery/
const imageModules = import.meta.glob(
  '../assets/gallery/*.{png,jpg,jpeg,webp,svg,gif,PNG,JPG,JPEG,WEBP,avif,AVIF}',
  { eager: true, import: 'default' }
);

// Curated descriptions for known gallery work samples
const knownDescriptions = {
  '10.23.40': 'Matte black ceiling fan installation with gold lining in Shivamogga home',
  '10.23.53': 'TV installation on custom wooden cabinet with concealed wiring',
  '10.24.01': 'Precision wall drilling and wall mount brackets installation',
  '10.24.11': 'Secure study table and desk assembly completed by our carpenter',
  '10.24.18': 'Curtain rod installation with precise drill holes',
  '10.24.25': 'Electrical panel terminal connections setup by our electrician',
  '10.24.32': 'Home repair tools circular saw, drill, angle grinder and jigsaw setup',
  '10.24.38': 'Bathroom tap replacement and pipe leakage repairs',
  '10.24.52': 'High quality switch board repair and socket installation',
  '10.24.57': 'Professional wardrobe assembly and hinge fittings in bedroom',
  '22.25.35 (1)': 'Conduit wiring and distribution board box setup above door frame',
  '22.25.35 (2)': 'Clean plumbing pipe repair and valve installation',
  '22.25.35': 'Geyser service and plumbing line check completed in bathroom',
  '17.43.49': 'Concealed conduit electrical wiring and distribution box work',
  '21.36.49': 'Wall electrical wiring channel and switch board box fitting',
  '21.37.06': 'Ceiling lighting and electrical cabling installation',
  '21.37.08 (1)': 'Master bedroom electrical conduit piping and box fitting',
  '21.37.08': 'Precision wall grooving and conduit pipe installation',
  '21.37.09': 'Main switchboard distribution cabling and conduit setup',
  '20.05.49': 'Conduit line laying and ceiling wiring work in progress',
  '23.01.03': 'Sanitary pipe fittings and bathroom plumbing installation',
  '09.17.59': 'Concealed water line pipe joints and leak-proof testing',
  '09.18.00': 'Bathroom shower line plumbing and pipe fittings',
  '09.22.25': 'Wall conduit wiring with multi-gang switch boxes setup',
  '09.22.26': 'Modular switch board wiring and electrical junction setup',
  '09.22.27 (1)': 'Precision electrical groove cutting and pipe casing',
  '09.22.27': 'Complete wall conduit wiring network installation',
};

// Generate SEO-friendly alt and title description from path
function getAltDescription(path, index) {
  for (const [key, desc] of Object.entries(knownDescriptions)) {
    if (path.includes(key)) {
      return desc;
    }
  }
  
  // Extract clean filename without path and extension
  const fileName = path.split('/').pop().replace(/\.[^/.]+$/, '');
  const cleanName = fileName
    .replace(/^WhatsApp Image /i, '')
    .replace(/^Screenshot /i, '')
    .replace(/[-_]/g, ' ')
    .trim();

  if (cleanName && !/^\d/.test(cleanName)) {
    return `${cleanName} - QuickFix Services Shivamogga`;
  }
  
  return `QuickFix Electrical, Plumbing & Carpentry Work in Shivamogga - Project #${index + 1}`;
}

// Build structured gallery item list dynamically
const allGalleryItems = Object.entries(imageModules)
  .sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' })
  )
  .map(([path, imageUrl], index) => ({
    id: index + 1,
    imageUrl,
    path,
    alt: getAltDescription(path, index),
  }));

// Multi-column masonry layout configuration
const NUM_COLS = 4;
const aspectPatterns = [
  ['tall', 'short', 'short', 'tall', 'short', 'tall', 'short'],
  ['short', 'tall', 'short', 'short', 'tall', 'short', 'tall'],
  ['short', 'short', 'tall', 'tall', 'short', 'short', 'tall'],
  ['tall', 'short', 'tall', 'short', 'tall', 'short', 'short'],
];

const galleryColumns = Array.from({ length: NUM_COLS }, () => []);

allGalleryItems.forEach((item, index) => {
  const colIndex = index % NUM_COLS;
  const rowIndex = Math.floor(index / NUM_COLS);
  const pattern = aspectPatterns[colIndex];
  const aspect = pattern[rowIndex % pattern.length];
  
  galleryColumns[colIndex].push({
    ...item,
    globalIndex: index,
    aspect,
  });
});

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const activeItem = lightboxIndex !== null ? allGalleryItems[lightboxIndex] : null;

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : allGalleryItems.length - 1));
  }, []);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev < allGalleryItems.length - 1 ? prev + 1 : 0));
  }, []);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling when lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

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
            Real work, real results. Browse our latest electrical repairs, concealed conduit wiring, plumbing installations, and carpentry completed across Shivamogga.
          </p>
          <div className="gallery-header-line" aria-hidden="true" />
        </div>

        {/* Dynamic Masonry Columns Grid */}
        <div className="gallery-grid-cols">
          {galleryColumns.map((col, colIdx) => (
            <div className="gallery-grid-col" key={colIdx}>
              {col.map((item, itemIdx) => (
                <div 
                  key={item.id} 
                  className={`gallery-grid-item ${item.aspect} reveal`}
                  style={{ animationDelay: `${(colIdx * 2 + itemIdx) * 40}ms` }}
                  onClick={() => setLightboxIndex(item.globalIndex)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View larger image: ${item.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(item.globalIndex);
                    }
                  }}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.alt} 
                    className="gallery-grid-img"
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-overlay-icon" aria-hidden="true">
                      <FaSearchPlus />
                    </span>
                    <span className="gallery-overlay-text">{item.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeItem && (
        <div 
          className="gallery-lightbox-overlay"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Image Lightbox"
        >
          <div 
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="gallery-lightbox-close"
              onClick={handleClose}
              aria-label="Close image viewer"
            >
              <FaTimes />
            </button>

            {/* Navigation: Previous */}
            <button 
              className="gallery-lightbox-nav prev"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              <FaChevronLeft />
            </button>

            {/* Navigation: Next */}
            <button 
              className="gallery-lightbox-nav next"
              onClick={handleNext}
              aria-label="Next photo"
            >
              <FaChevronRight />
            </button>

            {/* Main Lightbox Image */}
            <div className="gallery-lightbox-img-wrapper">
              <img 
                src={activeItem.imageUrl} 
                alt={activeItem.alt}
                className="gallery-lightbox-img" 
              />
            </div>

            {/* Lightbox Caption / Counter Bar */}
            <div className="gallery-lightbox-caption">
              <p className="gallery-lightbox-title">{activeItem.alt}</p>
              <span className="gallery-lightbox-counter">
                {lightboxIndex + 1} / {allGalleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

