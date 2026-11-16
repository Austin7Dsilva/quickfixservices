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
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import Billing from './components/Billing';
import AuthModal from './components/AuthModal';
import ChangePasswordModal from './components/ChangePasswordModal';
import OrdersModal from './components/OrdersModal';
import Admin from './components/Admin';

const sectionIds = [
  'home',
  'services',
  'why-choose-us',
  'how-it-works',
  'gallery',
  'reviews',
  'faq',
  'contact',
];

export default function App() {
  const activeSection = useScrollSpy(sectionIds, 120);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [view, setView] = useState(() => {
    if (window.location.pathname.replace(/\/+$/, '') === '/admin') return 'admin';
    return window.location.hash === '#billing' ? 'billing' : 'landing';
  });
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isPasswordChangeOpen, setIsPasswordChangeOpen] = useState(false);
  const [authUser, setAuthUser] = useState(() => {
    const savedUser = localStorage.getItem('quickfix_user');
    if (!savedUser) return null;

    try {
      return JSON.parse(savedUser);
    } catch {
      localStorage.removeItem('quickfix_user');
      localStorage.removeItem('quickfix_token');
      return null;
    }
  });

  // Trigger scroll-reveal animations
  useScrollReveal();

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.pathname.replace(/\/+$/, '') === '/admin') {
        setView('admin');
      } else if (window.location.hash === '#billing') {
        setView('billing');
      } else {
        setView('landing');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (view !== 'landing') return;

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
  }, [view]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isBillingView = view === 'billing';
  const isAdminView = view === 'admin';
  const isPortalView = isBillingView || isAdminView;

  const handleAuthSuccess = (user, token) => {
    localStorage.setItem('quickfix_user', JSON.stringify(user));
    localStorage.setItem('quickfix_token', token);
    setAuthUser(user);
  };

  const handleSignOut = () => {
    localStorage.removeItem('quickfix_user');
    localStorage.removeItem('quickfix_token');
    setAuthUser(null);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      {!isPortalView && (
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
      )}

      {/* Sticky Navigation */}
      {!isAdminView && (
        <Navbar
          activeSection={activeSection}
          isBillingView={isBillingView}
          authUser={authUser}
          onAuthClick={() => setIsAuthOpen(true)}
          onOrdersClick={() => setIsOrdersOpen(true)}
          onChangePassword={() => setIsPasswordChangeOpen(true)}
          onSignOut={handleSignOut}
        />
      )}

      {!isPortalView && (
        <AuthModal
          isOpen={isAuthOpen}
          user={authUser}
          onClose={() => setIsAuthOpen(false)}
          onAuthSuccess={handleAuthSuccess}
          onSignOut={handleSignOut}
        />
      )}

      {!isPortalView && (
        <ChangePasswordModal
          isOpen={isPasswordChangeOpen}
          onClose={() => setIsPasswordChangeOpen(false)}
        />
      )}

      {!isPortalView && isOrdersOpen && (
        <OrdersModal onClose={() => setIsOrdersOpen(false)} />
      )}

      {/* Main Content Layout */}
      <main id="main-content" role="main">
        {isAdminView ? (
          <Admin
            onExit={() => {
              window.history.pushState({}, '', '/');
              setView('landing');
            }}
          />
        ) : isBillingView ? (
          <Billing />
        ) : (
          <>
            <Hero />
            <Services
              authUser={authUser}
              onAuthClick={() => setIsAuthOpen(true)}
            />
            <WhyChooseUs />
            <HowItWorks />
            <Gallery />
            <Reviews />
            <FAQ />
            <Contact />
          </>
        )}
      </main>

      {/* Persistent Floating Quick CTAs */}
      {!isPortalView && <FloatingCTA />}

      {/* Sticky Footer */}
      {!isAdminView && <Footer isBillingView={isBillingView} />}

      {/* Scroll To Top Action Button */}
      {!isPortalView && (
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
      )}
    </>
  );
}
