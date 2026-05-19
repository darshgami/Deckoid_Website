import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#d4c7ff61] backdrop-blur-md border-b border-gray-200/40 py-4 shadow-[0_2px_15px_rgba(124,92,255,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center transition-transform duration-300 hover:scale-103">
            <img 
              src="/deckoid_logo.png" 
              alt="Deckoid Solution Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-1 items-center bg-white px-2 py-1.5 rounded-full border border-gray-200/60 shadow-sm">
            <NavLink 
              to="/" 
              className={({ isActive }) => `px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                isActive 
                  ? 'bg-[#d4c7ff61] text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                isActive 
                  ? 'bg-[#d4c7ff61] text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                isActive 
                  ? 'bg-[#d4c7ff61] text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                isActive 
                  ? 'bg-[#d4c7ff61] text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Contact
            </NavLink>
          </nav>

          {/* WhatsApp CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="https://api.whatsapp.com/send/?phone=919586536724" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-indigo-600 rounded-full shadow-[0_4px_20px_rgba(124,92,255,0.15)] transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_4px_25px_rgba(124,92,255,0.25)] hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-lg animate-pulse" />
              Let's Talk
              <FaArrowRight className="text-xs transition-transform duration-300 hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile burger button */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-900 hover:text-accent-purple p-2 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white/95 backdrop-blur-lg border-t border-gray-200 transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="px-4 py-8 space-y-4 flex flex-col justify-between h-full max-w-md mx-auto">
          <nav className="flex flex-col space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => `block px-4 py-3 rounded-xl text-lg font-semibold transition-all ${
                isActive ? 'bg-[#d4c7ff61] text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `block px-4 py-3 rounded-xl text-lg font-semibold transition-all ${
                isActive ? 'bg-[#d4c7ff61] text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `block px-4 py-3 rounded-xl text-lg font-semibold transition-all ${
                isActive ? 'bg-[#d4c7ff61] text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `block px-4 py-3 rounded-xl text-lg font-semibold transition-all ${
                isActive ? 'bg-[#d4c7ff61] text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Contact
            </NavLink>
          </nav>

          <div className="pb-16">
            <a 
              href="https://api.whatsapp.com/send/?phone=919586536724" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-3 w-full py-4 text-base font-bold text-white bg-indigo-600 rounded-xl shadow-lg transition-transform active:scale-98"
            >
              <FaWhatsapp className="text-xl" />
              Let's Talk on WhatsApp
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
