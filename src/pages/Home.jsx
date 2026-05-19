import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { 
  FaArrowRight, FaWhatsapp, FaUserCheck, FaCheck, FaDraftingCompass, 
  FaHeadphones, FaLaptopCode, FaPalette, FaShareAlt, FaBullhorn, 
  FaVideo, FaSearch, FaEnvelope, FaUser, FaStickyNote, FaLocationArrow,
  FaBolt, FaGoogle, FaCogs
} from 'react-icons/fa';
import { BiLineChart, BiAward, BiGroup, BiBullseye, BiPalette } from 'react-icons/bi';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Asset Imports
import heroVideo from '../assets/MicrosoftTeams-video.mp4';
import team1 from '../assets/teamimg.jpg';
import team2 from '../assets/team img1.jpg';
import awardTrophy from '../assets/Group 5.png';

// Service Images
import serviceWeb from '../assets/website-design&dev.jpeg';
import serviceGraphic from '../assets/graphic-design.jpeg';
import serviceSocial from '../assets/social-media-managment.jpeg';
import serviceAds from '../assets/facebook-ads.jpeg';
import serviceVideo from '../assets/video-editing.jpeg';
import serviceSEO from '../assets/SEO.jpeg';

// Metrics Images
import metric1 from '../assets/Metrics-1.png';
import metric2 from '../assets/Metrics-2.png';
import metric3 from '../assets/Metrics-3.png';
import metric4 from '../assets/Metrics-4.jpeg';

// Testimonials Images
import t1Profile from '../assets/testimonial-1-profile.png';
import t1Img from '../assets/testimonial-1.png';
import t2Profile from '../assets/testimonial-2-profile.png';
import t2Img from '../assets/testimonial-2.png';
import t3Profile from '../assets/testimonial-3-profile.png';
import t3Img from '../assets/testimonial-3.png';
import t4Profile from '../assets/testimonial-4-profile.png';
import t4Img from '../assets/testimonial-4.jpeg';
import t5Profile from '../assets/testimonial-5-profile.png';
import t5Img from '../assets/testimonial-5.png';
import t6Profile from '../assets/testimonial-6-profile.png';
import t6Img from '../assets/testimonial-6.png';
import t7Profile from '../assets/testimonial-7-profile.png';
import t7Img from '../assets/testimonial-7.png';

import StatCounter from '../components/StatCounter';

export default function Home() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received successfully. A Deckoid representative will connect with you shortly.');
  };

  const services = [
    { title: 'Website Design & Development', img: serviceWeb, icon: FaLaptopCode, desc: 'High-performance optimized custom code architectures built to convert visitors.' },
    { title: 'Graphic Design', img: serviceGraphic, icon: FaPalette, desc: 'Impactful brand identity design, visuals, and marketing assets.' },
    { title: 'Social Media Management', img: serviceSocial, icon: FaShareAlt, desc: 'End-to-end strategic organic brand building, design, and consistency.' },
    { title: 'Facebook Paid Ads', img: serviceAds, icon: FaBullhorn, desc: 'ROI-focused campaigns designed to scale leads and digital revenues.' },
    { title: 'Google Ads', img: serviceAds, icon: FaGoogle, desc: 'Targeted search engine marketing and display campaigns for instant leads.' },
    { title: 'Ai Video Editing', img: serviceVideo, icon: FaVideo, desc: 'Premium, modern storytelling, reels, and video ads powered by AI.' },
    { title: 'Search Engine Optimization', img: serviceSEO, icon: FaSearch, desc: 'Rank high on Google for relevant search keywords to drive organic leads.' },
    { title: 'Customized ERP Software', img: serviceWeb, icon: FaCogs, desc: 'Tailored enterprise resource systems to streamline operations and business workflow.' }
  ];

  const valueCards = [
    { icon: BiLineChart, title: 'Driving Growth With Smart Strategy', desc: 'We build marketing and communication systems that help your brand grow faster and perform better.' },
    { icon: BiAward, title: 'Expertise That Delivers', desc: 'Our experienced team blends creativity with strategy to craft solutions that generate real impact.' },
    { icon: FaBolt, title: 'Built To Adapt & Evolve', desc: 'Markets change fast—we help your brand stay ahead with ideas that evolve even faster.' },
    { icon: BiGroup, title: 'Your All-In-One Marketing Partner', desc: 'From design to development to digital marketing, we manage your full growth engine.' },
    { icon: BiBullseye, title: 'Strategies That Lead The Market', desc: 'High-impact ideas crafted to stand out, perform, and convert across every digital channel.' },
    { icon: BiPalette, title: 'Creative That Captures Attention', desc: 'We craft visuals, websites, ads, and content that captivate audiences and elevate your brand.' }
  ];

  const testimonials = [
    { profile: t1Profile, reviewImg: t1Img, name: 'Google Reviewer' },
    { profile: t2Profile, reviewImg: t2Img, name: 'Google Reviewer' },
    { profile: t4Profile, reviewImg: t4Img, name: 'Google Reviewer' },
    { profile: t5Profile, reviewImg: t5Img, name: 'Google Reviewer' },
    { profile: t6Profile, reviewImg: t6Img, name: 'Google Reviewer' },
    { profile: t7Profile, reviewImg: t7Img, name: 'Google Reviewer' }
  ];

  return (
    <div className="space-y-0 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-start overflow-hidden">
        {/* Ambient Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-45 contrast-105"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="metadata"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark subtle vignette layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-6 text-left reveal-element">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight font-display tracking-tight">
              Crafting Digital Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender via-indigo-300 to-white">Build, Elevate & Accelerate</span> Brands
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              At Deckoid Solutions, we design strategic brand identities, high-performance websites, and result-driven digital communication. Our approach blends creativity, technology, and business clarity to deliver solutions that attract customers, improve visibility, and strengthen long-term growth.
            </p>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-semibold tracking-wide text-accent-purple/90 pt-2 border-t border-gray-200">
              <span>Branding</span> • <span>Web Design</span> • <span>Digital Communication</span> • <span>Creative Strategy</span>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-midnight bg-lavender rounded-full shadow-[0_4px_20px_rgba(182,149,231,0.4)] transition-all duration-300 hover:bg-white hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] hover:-translate-y-0.5"
              >
                Explore Our Work
                <FaArrowRight className="text-xs" />
              </Link>
              <a 
                href="https://api.whatsapp.com/send/?phone=919586536724" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-gray-900 glass-card rounded-full border border-gray-200 backdrop-blur-sm transition-all duration-300 hover:glass-card hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-lg text-emerald-400" />
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About us Brief Section */}
      {/* <section className="bg-transparent py-24 relative overflow-hidden"> */}
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-lavender/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Carousel */}
            {/* <div className="lg:col-span-5 reveal-element-left">
              <div className="relative group p-2 glass-card rounded-3xl border border-gray-200 shadow-2xl backdrop-blur-md overflow-hidden aspect-4/3">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="rounded-2xl h-full w-full"
                >
                  <SwiperSlide>
                    <img 
                      src={team1} 
                      alt="Deckoid Team Collaboration" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img 
                      src={team2} 
                      alt="Deckoid Workspaces" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div> */}

            {/* Right Text Content */}
            {/* <div className="lg:col-span-7 space-y-6 text-left reveal-element-right">
              <div className="space-y-2">
                <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                  About Deckoid Solutions
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full" />
              </div>

              <p className="text-lg text-gray-600 leading-relaxed font-semibold">
                Deckoid Solutions is a performance-focused digital agency helping businesses grow with strategic design, modern technology, and impactful marketing.
              </p>
              
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Our approach begins with understanding your goals and challenges, allowing us to create digital solutions that connect with audiences and support real business results. We focus on clarity, quality, and measurable outcomes—delivering websites, branding, and marketing strategies that strengthen your digital presence and drive sustainable growth.
                </p>
                <p>
                  Our team stays committed to continuous improvement, ensuring every project meets modern standards and delivers lasting value.
                </p>
              </div>

              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-gray-900 border border-gray-200 rounded-full transition-all duration-300 hover:bg-white hover:text-midnight hover:border-gray-200 hover:-translate-y-0.5"
                >
                  Learn More About Us
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div> */}

          </div>
        </div>
      {/* </section> */}

      {/* 3. Full-width Award Header Section */}
      <section className="bg-transparent py-20 border-y border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="lg:col-span-7 text-left space-y-6 reveal-element-left">
              <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
                IT-ITeS Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Recognized for Digital Brilliance
              </h2>
              <i className="text-base sm:text-lg text-accent-purple font-medium block">
                Award-Winning Digital Marketing Agency – Deckoid Solutions
              </i>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                <b>Deckoid Solutions</b> is proud to be honored at the <b>Saurashtra IT-ITeS Excellence Awards 2024</b>, presented by the <b>Rajkot Information Technology Association (RITA).</b> This prestigious recognition celebrates our outstanding achievements in <b>IT and Digital Marketing</b>, reaffirming our commitment to innovation, creativity, and measurable success for our clients.
              </p>
            </div>

            {/* Right: Award Trophy Image */}
            <div className="lg:col-span-5 flex justify-center reveal-element-right">
              <div className="relative group max-w-sm">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-lavender to-indigo-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <img 
                  src={awardTrophy} 
                  alt="Saurashtra IT-ITeS Excellence Award Trophy" 
                  className="relative img-fluid max-h-96 object-contain transition-transform duration-500 group-hover:scale-103 animate-pulse"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Facts Counter Row */}
      <section className="bg-transparent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal-element-scale">
            <StatCounter target={120} title="Traffic Growth" suffix="%" />
            <StatCounter target={2} title="Lead Ads Scale" prefix="" suffix="x" />
            <StatCounter target={200} title="Average Return" suffix="% ROI" />
            <StatCounter target={100} title="Happy Clients" suffix="+" />
          </div>
        </div>
      </section>

      {/* 5. Services Cards Section */}
      <section className="bg-transparent py-24 relative overflow-hidden border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Result-Driven Services
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full mx-auto" />
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Every service at Deckoid Solutions is designed with clarity, creativity, and purpose. We combine strategic thinking, strong visual identity, powerful messaging, and performance-driven marketing to help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="group flex flex-col glass-card border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1.5 reveal-element"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Thumbnail Image */}
                <div className="relative overflow-hidden h-52">
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent z-10" />
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Info Text */}
                <div className="p-6 flex-grow flex flex-col justify-between text-left space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent-purple transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link 
                      to="/services" 
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-purple tracking-wider uppercase group-hover:text-gray-900 transition-colors duration-300"
                    >
                      View Works
                      <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Metrics and Analytics Section */}
      <section className="bg-transparent py-24 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              Proven Performance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Metrics That Prove Our Edge
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full mx-auto" />
            <p className="text-gray-500 text-sm sm:text-base">
              Discover the real analytics and marketing outcomes that define our digital expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
            
            {/* Metric 1 */}
            <div className="flex flex-col glass-card border border-gray-200 rounded-3xl overflow-hidden p-6 sm:p-8 space-y-6 hover:border-lavender/30 transition-all duration-300 reveal-element-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Winning Awards for <span className="text-accent-purple">2024-2025 Year</span>
                </h3>
                <p className="text-sm text-gray-500">
                  Recognized as the Best Digital Marketing Company in Saurashtra for outstanding marketing results.
                </p>
              </div>
              <div className="relative group bg-transparent border border-gray-200 rounded-2xl p-4 overflow-hidden flex items-center justify-center">
                <img 
                  src={metric1} 
                  alt="Award Winning Performance analytics" 
                  className="max-h-72 w-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col glass-card border border-gray-200 rounded-3xl overflow-hidden p-6 sm:p-8 space-y-6 hover:border-lavender/30 transition-all duration-300 reveal-element-right">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Increasing Website Traffic by <span className="text-accent-purple">120%</span>
                </h3>
                <p className="text-sm text-gray-500">
                  Transformed search visibility into meaningful user engagement with Deckoid's proven approach.
                </p>
              </div>
              <div className="relative group bg-transparent border border-gray-200 rounded-2xl p-4 overflow-hidden flex items-center justify-center">
                <img 
                  src={metric2} 
                  alt="Website Traffic Analytics chart" 
                  className="max-h-72 w-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col glass-card border border-gray-200 rounded-3xl overflow-hidden p-6 sm:p-8 space-y-6 hover:border-lavender/30 transition-all duration-300 reveal-element-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Driving <span className="text-accent-purple">2x Lead Growth</span> via Facebook Ads
                </h3>
                <p className="text-sm text-gray-500">
                  Generated consistent, sales-ready, high-intent lead pipelines using Deckoid's proven paid search campaigns.
                </p>
              </div>
              <div className="relative group bg-transparent border border-gray-200 rounded-2xl p-4 overflow-hidden flex items-center justify-center">
                <img 
                  src={metric3} 
                  alt="Facebook Ads Lead Generation chart" 
                  className="max-h-72 w-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col glass-card border border-gray-200 rounded-3xl overflow-hidden p-6 sm:p-8 space-y-6 hover:border-lavender/30 transition-all duration-300 reveal-element-right">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Generating <span className="text-accent-purple">200% Average ROI</span>
                </h3>
                <p className="text-sm text-gray-500">
                  Maximizing client return on investment through smart, data-powered marketing pipelines.
                </p>
              </div>
              <div className="relative group bg-transparent border border-gray-200 rounded-2xl p-4 overflow-hidden flex items-center justify-center">
                <img 
                  src={metric4} 
                  alt="Average ROI Marketing dashboard representation" 
                  className="max-h-72 w-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Why Choose Deckoid Section */}
      <section className="bg-transparent py-24 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              Our Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Why Choose Deckoid Solutions?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full mx-auto" />
            <p className="text-gray-500 text-sm sm:text-base">
              Purpose-driven creativity, clear strategy, and digital solutions that create real business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueCards.map((card, index) => (
              <div 
                key={card.title} 
                className="group text-left p-8 glass-card border border-gray-200 rounded-2xl hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1 reveal-element"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-lavender/10 border border-lavender/20 flex items-center justify-center text-accent-purple text-3xl group-hover:bg-lavender group-hover:text-midnight transition-colors duration-300 mb-6">
                  <card.icon />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-accent-purple transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Call To Action Connect Banner */}
      <section className="bg-transparent py-20 border-y border-gray-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 reveal-element-scale">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Let's Build a Digital Experience That Stands Out ✨
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            We help forward-thinking brands grow with strategy, creativity, and technology. From branding to conversion-driven web design — let's transform your digital future together.
          </p>
          <div className="pt-4">
            <a 
              href="https://api.whatsapp.com/send/?phone=919586536724" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-midnight bg-lavender rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-xl text-emerald-600 animate-bounce" />
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      {/* 9. Testimonial Section */}
      <section className="bg-transparent py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              What Our Clients Say
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full mx-auto" />
          </div>

          <div className="reveal-element-scale">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="px-4 py-12"
            >
              {testimonials.map((test, idx) => (
                <SwiperSlide key={idx} className="h-full">
                  <div className="flex flex-col items-center glass-card border border-gray-200 rounded-3xl p-6 h-full text-center hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1">
                    
                    {/* User profile picture */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-lavender glass-card mb-6 shrink-0">
                      <img 
                        src={test.profile} 
                        alt="Client review profile" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Testimonial Google review image overlay */}
                    <div className="glass-card border border-gray-200 rounded-2xl p-4 flex items-center justify-center overflow-hidden mb-4 aspect-4/3 w-full flex-grow">
                      <img 
                        src={test.reviewImg} 
                        alt="Google Review snippet details" 
                        className="max-h-36 object-contain rounded-lg transition-transform duration-300 hover:scale-103"
                        loading="lazy"
                      />
                    </div>
                    
                    <span className="text-xs italic text-gray-500 tracking-wider">
                      {test.name} • Google Review
                    </span>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* 10. Contact Us Form Section */}
      <section className="bg-transparent py-24 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: content */}
            <div className="lg:col-span-5 text-left space-y-6 reveal-element-left">
              <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
                Let's Partner
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Let's Start a Conversation
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full" />
              <p className="text-base text-gray-600 leading-relaxed">
                Ready to elevate your brand with strategic digital solutions? Let's begin a meaningful conversation. We take the time to understand your goals, identify key opportunities, and provide clear, results-driven strategies. Whether you're launching a new project or seeking expert guidance, our team is here to support your digital growth.
              </p>
              
              <div className="p-6 glass-card border border-gray-200 rounded-2xl space-y-4">
                <p className="text-lg font-medium text-gray-900 italic">
                  “At Deckoid Solution, we don't just reply — we understand, plan, and deliver results.”
                </p>
                <div className="text-right">
                  <span className="text-sm font-bold text-accent-purple block">— Jigna Pipalia</span>
                  <span className="text-xs text-gray-500 block">Founder, Deckoid Solution</span>
                </div>
              </div>
            </div>

            {/* Right side: form */}
            <div className="lg:col-span-7 reveal-element-right">
              <div className="glass-card border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-left">
                  Quick Message
                </h3>
                <p className="text-sm text-gray-500 mb-8 text-left">
                  Send us a note and we will get back to you within 24 hours.
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
                      placeholder="Write your message details..." 
                      rows="4"
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
                      Get in Touch
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
