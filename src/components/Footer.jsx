import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0a25] text-white border-t border-white/10 font-sans relative overflow-hidden rounded-t-4xl">
      {/* Decorative subtle background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8f42da]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Address & Contacts */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-bold tracking-wide uppercase border-b-2 border-white/15 pb-2 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-3 pt-2">
              <a
                href="tel:+919426225742"
                className="flex items-center gap-3 text-white hover:text-[#b895e5] transition-colors duration-300"
              >
                <FaPhoneAlt className="text-white shrink-0" />
                <span>+91 94262 25742</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=digitaldeckoid@gmail.com&su=Inquiry%20for%20Deckoid%20Solution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-[#b895e5] transition-colors duration-300 break-all"
              >
                <FaEnvelope className="text-white shrink-0" />
                <span>digitaldeckoid@gmail.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-4">

              <a
                href="https://www.facebook.com/deckoidsolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/deckoid_solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/deckoid-solution-digital-marketing/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Our Services Links */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-bold tracking-wide uppercase border-b-2 border-white/15 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2 pt-2">
              {[
                { name: 'Social Media Management', href: '/services/social-media-management' },
                { name: 'Search Engine Optimization', href: '/services/seo-services' },
                { name: 'Graphic Design', href: '/services/graphic-design' },
                { name: 'Website Design & Development', href: '/services/website-design' },
                { name: 'AI Video Editing', href: '/services/video-editing' },
                { name: 'Facebook Ads', href: '/services/facebook-ads' },
                { name: 'Google Ads', href: '/services/google-ads' },
                { name: 'Customized ERP Software', href: '/services/website-design' }
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-white hover:text-[#b895e5] hover:pl-2 transition-all duration-300 block text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-bold tracking-wide uppercase border-b-2 border-white/15 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 pt-2">
              <li>
                <Link to="/" className="text-white hover:text-[#b895e5] hover:pl-2 transition-all duration-300 block text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-[#b895e5] hover:pl-2 transition-all duration-300 block text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-[#b895e5] hover:pl-2 transition-all duration-300 block text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white hover:text-[#b895e5] hover:pl-2 transition-all duration-300 block text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-[#b895e5] hover:pl-2 transition-all duration-300 block text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Location / Address */}
          <div className="space-y-4 flex flex-col h-full">
            <div>
              <h4 className="text-white text-lg font-bold tracking-wide uppercase border-b-2 border-white/15 pb-2 inline-block">
                Our Location
              </h4>
              <div className="pt-2 text-sm text-white leading-relaxed space-y-2">
                <p className="font-semibold text-white">Deckoid Solution</p>
                <p>6, Bhaktinagar Station Plot, Bhakti Nagar, Rajkot, Gujarat 360002</p>
                <a 
                  href="https://maps.app.goo.gl/GgkAf4b9vhiCGvHa8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-white hover:text-[#b895e5] transition-colors duration-300 font-bold"
                >
                  View on Google Maps
                  <span className="text-[10px]">&rarr;</span>
                </a>
              </div>
            </div>
            
            {/* Embedded Map */}
            <div className="mt-4 w-full h-40 rounded-xl overflow-hidden glass-card border border-white/10">
              <iframe 
                src="https://maps.google.com/maps?q=Deckoid+Solution,+6,+Bhaktinagar+Station+Plot,+Rajkot,+Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Deckoid Solution Location Map"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/70">
          <p className="text-center md:text-left select-none">
            &copy; {currentYear} <span className="text-white font-semibold">Deckoid Solution</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-[#b895e5] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white hover:text-[#b895e5] transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
