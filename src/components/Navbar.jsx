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
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] py-3' 
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center transition-opacity duration-300 hover:opacity-80">
          <img 
            src="/deckoid_logo.png" 
            alt="Deckoid Solution Logo" 
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `nav-link text-sm tracking-wide transition-colors duration-300 ${
                isActive
                  ? 'active text-[#8f42da] font-semibold'
                  : 'text-white/90 hover:text-[#b895e5] font-medium'
              }`}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center">
          <a 
            href="https://api.whatsapp.com/send/?phone=919586536724" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#8f42da] rounded-full shadow-[0_4px_15px_rgba(124,92,255,0.3)] transition-all duration-300 hover:bg-[#6A4BE6] hover:shadow-[0_6px_20px_rgba(124,92,255,0.4)] hover:-translate-y-1"
          >
            Let's Talk
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile burger button */}
        <div className="flex md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-900 bg-white/60 backdrop-blur-md hover:bg-white/90 p-2.5 rounded-full border border-gray-200/60 shadow-sm transition-all focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <div className={`md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 origin-top overflow-hidden ${
        isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
      }`}>
        <div className="p-4 flex flex-col space-y-1">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `mobile-nav-link block px-5 py-3.5 rounded-xl text-base font-medium transition-all ${
                isActive
                  ? 'active bg-[#f5effd] text-[#8f42da]'
                  : 'text-gray-700 hover:text-[#8f42da] hover:bg-gray-50'
              }`}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-3 pb-1">
            <a 
              href="https://api.whatsapp.com/send/?phone=919586536724" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md transition-transform active:scale-98"
            >
              Let's Talk
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
