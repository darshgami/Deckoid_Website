import { Link } from 'react-router-dom';
import { FaBullseye, FaRegEye, FaRegHandshake, FaAward, FaCalendarAlt, FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import founderImg from '../assets/owner.JPG';
import storyImg from '../assets/ourstory.jpg';
import StatCounter from '../components/StatCounter';

export default function About() {
  return (
    <div className="space-y-0">
      
      {/* 1. Header Banner */}
      {/* <section className="relative bg-transparent py-20 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lavender/5 via-transparent to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              Our Journey
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight font-display">
              Elevating Digital Excellence
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Learn about the core values, history, and people behind Deckoid Solutions—helping brands establish strong, conversion-focused digital identities.
            </p>
          </div>
        </div>
      </section> */}

      {/* 2. Parallax Story Block */}
      <section className="bg-transparent py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Story text */}
            <div className="lg:col-span-7 text-left space-y-6 reveal-element-left">
              <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                How We Started & Where We Stand
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full" />
              
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                <p>
                  Founded with a vision to simplify complex online growth, **Deckoid Solutions** has grown from a specialized design studio into a full-scale digital consulting agency. We noticed that many growing brands struggled to bridge the gap between creative design, modern web tech, and performance-based marketing. 
                </p>
                <p>
                  Our solution was to build an all-in-one growth partner: a team that understands how to write optimized custom web apps, create beautiful social media visuals, execute high-conversion marketing campaigns, and keep layouts fast and clean.
                </p>
                <p>
                  Today, we support organizations across industries, focusing on measurable business metrics, absolute transparency, and long-term brand equity.
                </p>
              </div>
            </div>

            {/* Story image */}
            <div className="lg:col-span-5 reveal-element-right">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-lavender/30 to-indigo-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
                <div className="relative p-2 glass-card border border-gray-200 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md aspect-4/3">
                  <img 
                    src={storyImg} 
                    alt="Deckoid Solutions Office Collaborative Space" 
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Founder Profile Section */}
      <section className="bg-transparent py-24 border-y border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-lavender/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Founder Photo */}
            <div className="lg:col-span-5 flex justify-center reveal-element-left">
              <div className="relative group max-w-sm w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
                <div className="relative p-2 glass-card border border-gray-200 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
                  <img 
                    src={founderImg} 
                    alt="Jigna Pipalia - Founder and Director of Deckoid Solution" 
                    className="w-full h-auto object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-101"
                    loading="lazy"
                  />
                  <div className="p-4 bg-transparent border-t border-gray-200 mt-2 rounded-xl text-center">
                    <span className="text-gray-900 font-bold text-lg block">Jigna Pipalia</span>
                    <span className="text-xs text-accent-purple font-semibold block uppercase tracking-wider">Founder & Executive Director</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Profile Text */}
            <div className="lg:col-span-7 text-left space-y-6 reveal-element-right">
              <div className="space-y-2">
                <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
                  Executive Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  Meet Our Founder
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full" />
              </div>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  As the driving force behind **Deckoid Solution**, **Jigna Pipalia** blends years of professional technical training with a passionate, result-oriented approach to digital brand strategy. With a strong background in **Information Technology and Graphic Architecture**, she has guided hundreds of enterprises through full-scale digital modernization.
                </p>
                <p>
                  Under her leadership, Deckoid Solution has grown to be recognized as one of the most reliable and creative digital firms in Saurashtra. Her approach focuses on understanding client business structures and translating them into user experiences that achieve actual conversions.
                </p>
                <p>
                  Beyond consulting, she is actively dedicated to mentoring young creative professionals, keeping our standards of design, development, and customer satisfaction high.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent-purple shrink-0" />
                  <span>IT Consulting Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent-purple shrink-0" />
                  <span>Award-Winning Director</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-accent-purple shrink-0" />
                  <span>Strategic Brand Architect</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Mission, Vision, and Values Section */}
      <section className="bg-transparent py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              Our Compass
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Mission, Vision & Core Values
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="group text-left p-8 glass-card border border-gray-200 rounded-3xl hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1.5 reveal-element">
              <div className="w-14 h-14 rounded-2xl bg-lavender/10 border border-lavender/25 flex items-center justify-center text-accent-purple text-3xl group-hover:bg-lavender group-hover:text-midnight transition-colors duration-300 mb-6">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-accent-purple transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To empower brands by building conversion-oriented custom code structures and visual strategies that eliminate online clutter, strengthen customer relationships, and drive measurable sales growth.
              </p>
            </div>

            {/* Vision */}
            <div className="group text-left p-8 glass-card border border-gray-200 rounded-3xl hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1.5 reveal-element" style={{ transitionDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-lavender/10 border border-lavender/25 flex items-center justify-center text-accent-purple text-3xl group-hover:bg-lavender group-hover:text-midnight transition-colors duration-300 mb-6">
                <FaRegEye />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-accent-purple transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To be recognized as a premier global digital design and growth partner, known for setting modern benchmarks in design quality, tech integration, and transparent results that elevate industry standards.
              </p>
            </div>

            {/* Core Values */}
            <div className="group text-left p-8 glass-card border border-gray-200 rounded-3xl hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1.5 reveal-element" style={{ transitionDelay: '200ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-lavender/10 border border-lavender/25 flex items-center justify-center text-accent-purple text-3xl group-hover:bg-lavender group-hover:text-midnight transition-colors duration-300 mb-6">
                <FaRegHandshake />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-accent-purple transition-colors duration-300">
                Our Core Values
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We operate with absolute transparency, creative fearlessness, structural integrity, and an ongoing focus on helping our clients grow, ensuring our strategic relationships generate mutual value.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SWOT Circles and Counters Section */}
      <section className="about-metrics-section relative isolate py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,66,218,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal-element">
            <span className="about-metrics-kicker text-xs font-bold tracking-widest uppercase">
              By The Numbers
            </span>
            <h2 className="about-metrics-title text-3xl sm:text-4xl font-black font-display">
              Metrics That Define Our Strengths
            </h2>
            <div className="about-metrics-divider w-20 h-1 rounded-full mx-auto" />
            <p className="about-metrics-copy text-sm sm:text-base max-w-2xl mx-auto">
              A brief look at the numbers that define our achievements, consistency, and standard of execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 justify-center reveal-element-scale">
            
            {/* Counter Circle 1 */}
            <div className="about-metric-card group relative overflow-hidden rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1">
              <div className="about-metric-topline absolute inset-x-0 top-0 h-px opacity-90" />
              <div className="about-metric-glow absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center text-center gap-3">
                <StatCounter target={100} title="" suffix="+" duration={1200} className="about-metric-value text-center" />
                <span className="about-metric-label text-lg font-semibold">Happy Users</span>
                <span className="about-metric-subtitle text-sm">Trusted strategic relationships</span>
              </div>
            </div>

            {/* Counter Circle 2 */}
            <div className="about-metric-card group relative overflow-hidden rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1">
              <div className="about-metric-topline absolute inset-x-0 top-0 h-px opacity-90" />
              <div className="about-metric-glow absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center text-center gap-3">
                <StatCounter target={500} title="" suffix="+" duration={1400} className="about-metric-value text-center" />
                <span className="about-metric-label text-lg font-semibold">Total Orders</span>
                <span className="about-metric-subtitle text-sm">Successful projects finished</span>
              </div>
            </div>

            {/* Counter Circle 3 */}
            <div className="about-metric-card group relative overflow-hidden rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1">
              <div className="about-metric-topline absolute inset-x-0 top-0 h-px opacity-90" />
              <div className="about-metric-glow absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center text-center gap-3">
                <StatCounter target={1500} title="" suffix="+" duration={1600} className="about-metric-value text-center" />
                <span className="about-metric-label text-lg font-semibold">Successful Delivery</span>
                <span className="about-metric-subtitle text-sm">Optimized assets rendered</span>
              </div>
            </div>

            {/* Counter Circle 4 */}
            <div className="about-metric-card group relative overflow-hidden rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1">
              <div className="about-metric-topline absolute inset-x-0 top-0 h-px opacity-90" />
              <div className="about-metric-glow absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center text-center gap-3">
                <StatCounter target={80000} title="" suffix="+" duration={1800} className="about-metric-value text-center" />
                <span className="about-metric-label text-lg font-semibold">Transactions</span>
                <span className="about-metric-subtitle text-sm">Marketing operations handled</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Call To Action Footer */}
      <section className="bg-transparent py-24 relative overflow-hidden border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 reveal-element-scale">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Let's Collaborate on Your Vision
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            We are always excited to connect with visionary companies. Reach out today to share your goals and discover how we can help you build a stronger digital presence.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-midnight bg-lavender rounded-full shadow-lg transition-transform hover:scale-103 active:scale-98"
            >
              Get in Touch
              <FaChevronRight className="text-xs" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-gray-900 glass-card border border-gray-200 rounded-full hover:glass-card transition-colors"
            >
              See Our Works
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
