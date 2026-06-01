import { FaPhoneAlt, FaEnvelope, FaClock, FaUser, FaStickyNote, FaLocationArrow, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received successfully. A Deckoid representative will connect with you shortly.');
  };

  return (
    <div className="space-y-0">
      
      {/* 1. Header Banner */}
      <section className="relative bg-transparent py-20  overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lavender/5 via-transparent to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight font-display">
              Let's Build Something Great
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Have a project in mind, need branding advice, or want to scale your digital reach? Get in touch with our team today and let's work together.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Info Cards Section */}
      <section className="bg-transparent py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Call card */}
            <a 
              href="tel:+919426225742" 
              className="group flex flex-col items-center justify-center p-8 glass-card border border-gray-200 rounded-3xl hover:border-lavender/30 hover:shadow-[0_10px_30px_rgba(182,149,231,0.1)] hover:-translate-y-1.5 transition-all duration-300 reveal-element"
            >
              <div className="w-16 h-16 rounded-2xl bg-lavender/10 border border-lavender/25 flex items-center justify-center text-accent-purple text-2xl group-hover:bg-lavender group-hover:text-midnight transition-colors duration-300 mb-6">
                <FaPhoneAlt />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm text-gray-500 mb-3">Questions? Speak to our team.</p>
              <span className="text-lg font-extrabold text-gray-900 group-hover:text-accent-purple transition-colors duration-300">
                +91 94262 25742
              </span>
            </a>

            {/* Email card */}
            <a 
              href="mailto:digitaldeckoid@gmail.com" 
              className="group flex flex-col items-center justify-center p-8 glass-card border border-gray-200 rounded-3xl hover:border-lavender/30 hover:shadow-[0_10px_30px_rgba(182,149,231,0.1)] hover:-translate-y-1.5 transition-all duration-300 reveal-element"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-lavender/10 border border-lavender/25 flex items-center justify-center text-accent-purple text-2xl group-hover:bg-lavender group-hover:text-midnight transition-colors duration-300 mb-6">
                <FaEnvelope />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-sm text-gray-500 mb-3">Drop us a line anytime.</p>
              <span className="text-lg font-extrabold text-gray-900 group-hover:text-accent-purple transition-colors duration-300 break-all px-2">
                digitaldeckoid@gmail.com
              </span>
            </a>

            {/* Hours card */}
            <div 
              className="group flex flex-col items-center justify-center p-8 glass-card border border-gray-200 rounded-3xl hover:border-lavender/30 hover:shadow-[0_10px_30px_rgba(182,149,231,0.1)] hover:-translate-y-1.5 transition-all duration-300 reveal-element"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-lavender/10 border border-lavender/25 flex items-center justify-center text-accent-purple text-2xl group-hover:bg-lavender group-hover:text-midnight transition-colors duration-300 mb-6">
                <FaClock />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-sm text-gray-500 mb-3">Drop by or chat live.</p>
              <span className="text-base font-extrabold text-gray-900 text-center leading-relaxed">
                Mon - Sat: 9:00 AM - 7:00 PM <br />
                <span className="text-xs font-normal text-gray-500">Sunday: Closed</span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Dual Column Contact and Form Block */}
      <section className="bg-transparent py-20 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side details */}
            <div className="lg:col-span-5 text-left space-y-8 reveal-element-left">
              <div className="space-y-4">
                <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
                  Our Base
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                  Start the Conversation Today
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full" />
                <p className="text-base text-gray-600 leading-relaxed font-normal pt-2">
                  At Deckoid Solutions, we are dedicated to helping businesses grow with purpose. Whether you have a clear blueprint or just a rough concept, our team will analyze your needs, provide strategic input, and construct digital assets that deliver results. 
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Send us a quick message using the form, or reach out directly on WhatsApp/Social channels. We look forward to pair-programming your digital future!
                </p>
              </div>

              {/* Social Channels List */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider">
                  Connect on Social Media
                </h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.facebook.com/deckoidsolution" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-900 hover:bg-lavender hover:text-midnight transition-all duration-300 hover:-translate-y-0.5"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a 
                    href="https://www.instagram.com/deckoid_solution/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-900 hover:bg-lavender hover:text-midnight transition-all duration-300 hover:-translate-y-0.5"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/jigna-pipalia-/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-900 hover:bg-lavender hover:text-midnight transition-all duration-300 hover:-translate-y-0.5"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side Form */}
            <div className="lg:col-span-7 reveal-element-right">
              <div className="glass-card border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-left">
                  Send a Quick Message
                </h3>
                <p className="text-sm text-gray-500 mb-8 text-left">
                  Fill out the form below and we will contact you within 24 business hours.
                </p>
                
                <form onSubmit={handleContactSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative group">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-purple transition-colors duration-300" />
                      <input 
                        type="text" 
                        id="name"
                        placeholder="Your Name" 
                        required
                        className="w-full glass-card border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-sm text-gray-900 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/30 transition-all duration-300"
                      />
                    </div>
                    {/* Email */}
                    <div className="relative group">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-purple transition-colors duration-300" />
                      <input 
                        type="email" 
                        id="email"
                        placeholder="Your Email" 
                        required
                        className="w-full glass-card border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-sm text-gray-900 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/30 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <FaStickyNote className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-purple transition-colors duration-300" />
                    <input 
                      type="text" 
                      id="subject"
                      placeholder="Subject" 
                      required
                      className="w-full glass-card border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-sm text-gray-900 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/30 transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <textarea 
                      id="message"
                      placeholder="Share details about your project, goals, or questions..." 
                      rows="5"
                      required
                      className="w-full glass-card border border-gray-200 rounded-xl py-3.5 px-4 text-sm text-gray-900 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/30 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button 
                      type="submit" 
                      className="w-full flex items-center justify-center gap-2 py-4 text-base font-bold text-gray-900 bg-indigo-600 rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.3)] transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_4px_25px_rgba(79,70,229,0.5)] active:scale-98"
                    >
                      <FaLocationArrow className="text-sm" />
                      Send Message Now
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
