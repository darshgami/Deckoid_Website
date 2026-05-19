import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-transparent text-gray-600 border-t border-gray-200 font-sans relative overflow-hidden">
      {/* Decorative subtle background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Address & Contacts */}
          <div className="space-y-4">
            <h4 className="text-gray-900 text-lg font-bold tracking-wide uppercase border-b-2 border-lavender/25 pb-2 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-3 pt-2">
              <a
                href="tel:+919426225742"
                className="flex items-center gap-3 text-gray-600 hover:text-accent-purple transition-colors duration-300"
              >
                <FaPhoneAlt className="text-accent-purple shrink-0" />
                <span>+91 94262 25742</span>
              </a>
              <a
                href="mailto:digitaldeckoid@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-accent-purple transition-colors duration-300 break-all"
              >
                <FaEnvelope className="text-accent-purple shrink-0" />
                <span>digitaldeckoid@gmail.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-4">

              <a
                href="https://www.facebook.com/deckoidsolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-900 hover:bg-lavender hover:text-midnight hover:shadow-[0_4px_12px_rgba(182,149,231,0.4)] hover:-translate-y-1 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/deckoid_solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-900 hover:bg-lavender hover:text-midnight hover:shadow-[0_4px_12px_rgba(182,149,231,0.4)] hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/jigna-pipalia-/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-900 hover:bg-lavender hover:text-midnight hover:shadow-[0_4px_12px_rgba(182,149,231,0.4)] hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Our Services Links */}
          <div className="space-y-4">
            <h4 className="text-gray-900 text-lg font-bold tracking-wide uppercase border-b-2 border-lavender/25 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2 pt-2">
              {[
                'Social Media Management',
                'Search Engine Optimization',
                'Graphic Design',
                'Website Design & Development',
                'Ai Video Editing',
                'Facebook Ads',
                'Google Ads',
                'Lead Generation',
                'Customized ERP Software'
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="hover:text-accent-purple hover:pl-2 transition-all duration-300 block text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gray-900 text-lg font-bold tracking-wide uppercase border-b-2 border-lavender/25 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 pt-2">
              <li>
                <Link to="/" className="hover:text-accent-purple hover:pl-2 transition-all duration-300 block text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-purple hover:pl-2 transition-all duration-300 block text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent-purple hover:pl-2 transition-all duration-300 block text-sm">
                  Services & Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent-purple hover:pl-2 transition-all duration-300 block text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-4">
            <h4 className="text-gray-900 text-lg font-bold tracking-wide uppercase border-b-2 border-lavender/25 pb-2 inline-block">
              Newsletter
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed pt-2">
              Subscribe to stay updated with our latest insights, case studies, and digital marketing trends.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative mt-4">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full glass-card border border-gray-200 rounded-xl py-3.5 pl-4 pr-12 text-sm text-gray-900 placeholder-white/40 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/30 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 -translate-y-1/2 w-9 h-9 rounded-lg bg-lavender text-midnight flex items-center justify-center hover:bg-white hover:text-accent-purple hover:shadow-lg transition-all duration-300"
                aria-label="Subscribe"
              >
                <FaPaperPlane size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p className="text-center md:text-left select-none">
            &copy; {currentYear} <span className="text-gray-900 font-semibold">Deckoid Solution</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
