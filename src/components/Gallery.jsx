import React, { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Precision Electrical Wiring',
    tag: 'Electrical',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
    aspect: 'video', // aspect-ratio selector
  },
  {
    id: 2,
    title: 'Professional Leak Repair',
    tag: 'Plumbing',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    aspect: 'square',
  },
  {
    id: 3,
    title: 'Custom Furniture Assembly',
    tag: 'Assembly',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
    aspect: 'tall',
  },
  {
    id: 4,
    title: 'TV Wall Mount Alignment',
    tag: 'Mounting',
    imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80',
    aspect: 'tall',
  },
  {
    id: 5,
    title: 'Clean Wall Drilling',
    tag: 'Drilling',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
    aspect: 'video',
  },
  {
    id: 6,
    title: 'Lock Replacement & Repair',
    tag: 'Maintenance',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
    aspect: 'square',
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const tags = ['all', 'Electrical', 'Plumbing', 'Assembly', 'Mounting', 'Drilling', 'Maintenance'];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.tag === filter);

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Visual Portfolio</span>
          <h2 className="section-title">Work Showcase</h2>
          <p className="section-description">
            A glimpse of our recent home repair and installation projects completed across Shivamogga.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="gallery-filter reveal">
          {tags.map(tag => (
            <button
              key={tag}
              className={`gallery-filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery-masonry">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-item ${item.aspect} reveal`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-item-tag">{item.tag}</span>
                <h3 className="gallery-item-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
