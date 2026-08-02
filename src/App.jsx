import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

// Styles
import './App.css';

// Hooks
import useScrollSpy from './hooks/useScrollSpy';
import useScrollReveal from './hooks/useScrollReveal';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

const sectionIds = [
  'home',
  'services',
  'why-choose-us',
  'how-it-works',
  'gallery',
  'faq',
  'contact',
];

export default function App() {
  const activeSection = useScrollSpy(sectionIds, 120);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Trigger scroll-reveal animations
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll Progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Toggle Scroll To Top Visibility
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-indicator"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '4px',
          width: `${scrollProgress}%`,
          background: 'var(--primary-gradient)',
          zIndex: 9999,
          transition: 'width 0.1s ease-out',
        }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Layout */}
      <main id="main-content" role="main">
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      {/* Persistent Floating Quick CTAs */}
      <FloatingCTA />

      {/* Sticky Footer */}
      <Footer />

      {/* Scroll To Top Action Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top of the page"
        style={{
          position: 'fixed',
          bottom: '95px',
          right: '35px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          color: 'var(--primary-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 998,
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease, border-color 0.3s ease, color 0.3s ease',
          pointerEvents: showScrollTop ? 'auto' : 'none',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
        }}
      >
        <FaChevronUp size={16} />
      </button>
    </>
  );
}
