import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import useScrollReveal from '../hooks/useScrollReveal';

export default function MainLayout() {
  const location = useLocation();
  
  // Initialize scroll reveal animations
  useScrollReveal();

  // Re-trigger scroll reveals when route pathname changes
  useEffect(() => {
    // Small timeout to allow DOM to finish rendering
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const revealCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(revealCallback, observerOptions);
      const revealTargets = document.querySelectorAll(
        '.reveal-element, .reveal-element-left, .reveal-element-right, .reveal-element-scale'
      );
      
      revealTargets.forEach((target) => {
        // If it's already animated in past render, don't re-observe
        if (target.classList.contains('revealed')) return;
        observer.observe(target);
      });

      return () => {
        revealTargets.forEach((target) => {
          observer.unobserve(target);
        });
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-gray-900 selection:bg-lavender selection:text-midnight">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[0px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
