import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaLaptopCode, FaPalette, FaShareAlt, FaBullhorn, FaVideo, FaExternalLinkAlt, FaPlay, FaGoogle, FaCogs } from 'react-icons/fa';

// Web Development Mockups
import web1 from '../assets/website-1.jpg';
import web2 from '../assets/website-2.jpg';
import web3 from '../assets/website-3.jpg';
import web4 from '../assets/website-4.jpg';
import web5 from '../assets/website-5.jpg';
import web6 from '../assets/website-6.jpg';
import web7 from '../assets/website-7.jpg';
import web8 from '../assets/website-8.jpg';

// Graphic Design Mockups
import graphic1 from '../assets/Graphics Design/1.jpg';
import graphic2 from '../assets/Graphics Design/2.jpg';
import graphic3 from '../assets/Graphics Design/3.jpg';
import graphic4 from '../assets/Graphics Design/4.jpg';
import graphic5 from '../assets/Graphics Design/5-5.jpg';
import graphic6 from '../assets/Graphics Design/6.jpg';
import graphic7 from '../assets/Graphics Design/7.jpg';
import graphic8 from '../assets/Graphics Design/8.jpg';

// Social Media Mockups
import social1 from '../assets/facebook-ashwashaktiagro.jpg';
import social2 from '../assets/facebook-khedutirrigationindia.jpg';
import social3 from '../assets/facebook-patelholidayrajkot.jpg';
import social4 from '../assets/facebook-cometpolyplast.jpg';
import social5 from '../assets/facebook-profile-paw.jpg';
import social6 from '../assets/facebook-FarmkingFoodOfficial.jpg';
import social7 from '../assets/instagram-aksharchemicals.jpeg';
import social8 from '../assets/instagram-svpv.jpeg';
import social9 from '../assets/instagram-devarshcosmetic.jpeg';
import social10 from '../assets/instagram-kosmodent.jpeg';
import social11 from '../assets/instagram-blossomvalleynursery.jpeg';
import social12 from '../assets/instagram-kenton-fittings.jpeg';

// Facebook Ads Mockups
import ad1 from '../assets/facbookAds-1.jpg';
import ad2 from '../assets/facbookAds-2.jpg';
import ad3 from '../assets/facbookAds-3.jpg';
import ad4 from '../assets/facbookAds-4.jpg';
import ad5 from '../assets/facbookAds-5.jpg';
import ad6 from '../assets/facbookAds-6.jpg';
import ad7 from '../assets/facbookAds-7.jpg';
import ad8 from '../assets/facbookAds-8.jpg';

// Video Editing Mockups
import video1 from '../assets/Short Videos/1.mp4';
import video2 from '../assets/Short Videos/2.mp4';
import video3 from '../assets/Short Videos/3.mp4';
import video4 from '../assets/Short Videos/4.mp4';
import video5 from '../assets/Short Videos/5.mp4';
import video6 from '../assets/Short Videos/6.mp4';
import video7 from '../assets/Short Videos/7.mp4';
import video8 from '../assets/Short Videos/8.mp4';
import video9 from '../assets/Short Videos/9.mp4';

export default function Services() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.selectedService || 'web');

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setActiveTab(location.state.selectedService);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.state]);

  const tabs = [
    { id: 'web', label: 'Website Design & Development', icon: FaLaptopCode },
    { id: 'graphics', label: 'Graphic Design', icon: FaPalette },
    { id: 'social', label: 'Social Media', icon: FaShareAlt },
    { id: 'ads', label: 'Facebook Ads', icon: FaBullhorn },
    { id: 'google', label: 'Google Ads', icon: FaGoogle },
    { id: 'videos', label: 'Ai Video Editing', icon: FaVideo },
    { id: 'erp', label: 'Customized ERP Software', icon: FaCogs }
  ];

  // Portfolio items data
  const webMockups = [
    { title: 'Corporate Portal', client: 'Enterprise SaaS', img: web1 },
    { title: 'Agriculture Hub', client: 'FarmKing Foods', img: web2 },
    { title: 'Fintech Dashboard', client: 'Zenith Pay', img: web3 },
    { title: 'Industrial Web Portal', client: 'Comet Polyplast', img: web4 },
    { title: 'E-commerce Platform', client: 'Devarsh Cosmetic', img: web5 },
    { title: 'E-learning Portal', client: 'SVPV School', img: web6 },
    { title: 'Pharma Digital Portal', client: 'Akshar Chem', img: web7 },
    { title: 'Real Estate Platform', client: 'Patel Holidays', img: web8 }
  ];

  const graphicsMockups = [
    { title: 'Brand Identity', client: 'Premium Packaging', img: graphic1 },
    { title: 'Corporate Brochure', client: 'Industrial Fittings', img: graphic2 },
    { title: 'Product Showcase Banner', client: 'Agro Chemicals', img: graphic3 },
    { title: 'Exhibition Rollup', client: 'Techno Plast', img: graphic4 },
    { title: 'Label Design Suite', client: 'Skin Cosmetics', img: graphic5 },
    { title: 'Vector Pattern Asset', client: 'Modern Textile', img: graphic6 },
    { title: 'Marketing Flier', client: 'Nursery Valley', img: graphic7 },
    { title: 'Social Cover Art', client: 'Dental Clinic', img: graphic8 }
  ];

  const socialMockups = [
    { title: 'Agro Facebook Post', client: 'Ashwashakti Agro', img: social1 },
    { title: 'Irrigation Social Banner', client: 'Khedut Irrigation', img: social2 },
    { title: 'Travel Instagram Story', client: 'Patel Holidays', img: social3 },
    { title: 'Plastics Facebook Flier', client: 'Comet Polyplast', img: social4 },
    { title: 'Pet Care Cover Art', client: 'Paw Paradise', img: social5 },
    { title: 'Organic Foods Post', client: 'Farmking Foods', img: social6 },
    { title: 'Chemicals Brand Post', client: 'Akshar Chemicals', img: social7 },
    { title: 'School Admission Grid', client: 'SVPV Group', img: social8 },
    { title: 'Beauty Product Launch', client: 'Devarsh Cosmetic', img: social9 },
    { title: 'Dental Clinic Campaign', client: 'KosmoDent', img: social10 },
    { title: 'Nursery Valley Social Post', client: 'Blossom Valley', img: social11 },
    { title: 'Fittings Instagram Reel Cover', client: 'Kenton Fittings', img: social12 }
  ];

  const adsMockups = [
    { title: 'Consulting Lead Campaign', client: 'Business Solution', img: ad1 },
    { title: 'Product Sales Paid Ad', client: 'Skin Health Set', img: ad2 },
    { title: 'Dental Camp Ads', client: 'Oral Care Rajkot', img: ad3 },
    { title: 'Retail E-commerce Ad', client: 'Fashion Boutique', img: ad4 },
    { title: 'Course Enrolment Campaign', client: 'Technical Institute', img: ad5 },
    { title: 'B2B Leads Campaign', client: 'Export Polymers', img: ad6 },
    { title: 'Holiday Booking Conversion', client: 'Group Package Ad', img: ad7 },
    { title: 'Agricultural Seed Offer', client: 'High-Yield Seeds', img: ad8 }
  ];

  const videosMockups = [
    { title: 'Creative Reel 1', type: 'Short Promo', src: video1 },
    { title: 'Creative Reel 2', type: 'Product Unboxing', src: video2 },
    { title: 'Creative Reel 3', type: 'Corporate Story', src: video3 },
    { title: 'Creative Reel 4', type: 'Exhibition Summary', src: video4 },
    { title: 'Creative Reel 5', type: 'Social Campaign', src: video5 },
    { title: 'Creative Reel 6', type: 'Customer Review', src: video6 },
    { title: 'Creative Reel 7', type: 'Educational Tutorial', src: video7 },
    { title: 'Creative Reel 8', type: 'Brand Showcase', src: video8 },
    { title: 'Creative Reel 9', type: 'Event Highlights', src: video9 }
  ];

  const googleMockups = [
    { title: 'Search Engine SEM Lead Campaign', client: 'B2B Logistics', img: ad1 },
    { title: 'Google Display Network Campaign', client: 'SaaS Startup', img: ad2 },
    { title: 'Local Business Ads (MAP/Search)', client: 'Medical Rajkot', img: ad3 },
    { title: 'Google Shopping Feed Campaign', client: 'E-commerce Retail', img: ad4 }
  ];

  const erpMockups = [
    { title: 'Enterprise Resource System', client: 'Manufacturing ERP', img: web4 },
    { title: 'Fintech Billing Suite', client: 'Zenith Pay ERP', img: web3 },
    { title: 'Hospital Management System', client: 'Pharma Digital Portal', img: web7 }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Header Banner */}
      <section className="relative bg-transparent py-20 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lavender/5 via-transparent to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight font-display">
              Creative Designs, Solid Results
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Explore our diverse works spanning custom web architectures, visual layouts, strategic social media campaigns, paid conversion ads, and video storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Portfolio Grid and Tabs */}
      <section className="bg-transparent py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 reveal-element">
            <div className="flex flex-wrap justify-center gap-1 md:gap-2 p-1.5 glass-card border border-gray-200 rounded-2xl backdrop-blur-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-xl text-[10px] sm:text-xs lg:text-sm font-bold tracking-wide uppercase whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-lavender text-midnight shadow-[0_4px_15px_rgba(182,149,231,0.4)]'
                      : 'text-gray-600 hover:text-gray-900 hover:glass-card'
                  }`}
                >
                  <tab.icon className="text-xs sm:text-sm shrink-0" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Panel Render */}
          <div className="min-h-[500px]">
            
            {/* WEB DEVELOPMENT PANEL */}
            {activeTab === 'web' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webMockups.map((item, index) => (
                  <div 
                    key={item.title} 
                    className="flex flex-col glass-card border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-lavender/30 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Scrolling mockups viewport */}
                    <div className="relative overflow-hidden h-96 w-full bg-transparent group border-b border-gray-200 cursor-pointer">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full absolute top-0 transition-transform duration-[6000ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-24rem)]"
                        loading="lazy"
                      />
                      {/* Interactive scroll help hint */}
                      <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-transparent border border-gray-200 text-[10px] font-bold text-accent-purple uppercase tracking-widest pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
                        Hover to scroll
                      </div>
                    </div>
                    {/* Mockup details */}
                    <div className="p-5 text-left flex justify-between items-center">
                      <div>
                        <h4 className="text-gray-900 font-bold text-lg mb-1">{item.title}</h4>
                        <span className="text-xs text-accent-purple font-semibold uppercase tracking-wider">{item.client}</span>
                      </div>
                      <a href="#" className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-gray-500 hover:bg-lavender hover:text-midnight transition-colors" aria-label="Visit site">
                        <FaExternalLinkAlt size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* GRAPHIC DESIGN PANEL */}
            {activeTab === 'graphics' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {graphicsMockups.map((item, index) => (
                  <div 
                    key={item.title} 
                    className="group glass-card border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="relative overflow-hidden aspect-square w-full">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 text-left border-t border-gray-200">
                      <h4 className="text-gray-900 font-bold text-base mb-0.5 truncate">{item.title}</h4>
                      <span className="text-2xs text-gray-500 uppercase tracking-widest">{item.client}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SOCIAL MEDIA PANEL */}
            {activeTab === 'social' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {socialMockups.map((item, index) => (
                  <div 
                    key={index} 
                    className="group glass-card border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="relative overflow-hidden aspect-square w-full">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 text-left border-t border-gray-200">
                      <h4 className="text-gray-900 font-bold text-sm mb-0.5 truncate">{item.title}</h4>
                      <span className="text-2xs text-accent-purple font-bold uppercase tracking-wider block truncate">{item.client}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FACEBOOK PAID ADS PANEL */}
            {activeTab === 'ads' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {adsMockups.map((item, index) => (
                  <div 
                    key={item.title} 
                    className="flex flex-col glass-card border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-lavender/30 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Scrolling mockups viewport */}
                    <div className="relative overflow-hidden h-96 w-full bg-transparent group border-b border-gray-200 cursor-pointer">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full absolute top-0 transition-transform duration-[6000ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-24rem)]"
                        loading="lazy"
                      />
                      {/* Interactive scroll help hint */}
                      <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-transparent border border-gray-200 text-[10px] font-bold text-accent-purple uppercase tracking-widest pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
                        Hover to scroll
                      </div>
                    </div>
                    {/* Mockup details */}
                    <div className="p-5 text-left">
                      <h4 className="text-gray-900 font-bold text-lg mb-1">{item.title}</h4>
                      <span className="text-xs text-accent-purple font-semibold uppercase tracking-wider">{item.client}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* GOOGLE ADS PANEL */}
            {activeTab === 'google' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {googleMockups.map((item, index) => (
                  <div 
                    key={item.title} 
                    className="flex flex-col glass-card border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-lavender/30 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="relative overflow-hidden h-96 w-full bg-transparent group border-b border-gray-200 cursor-pointer">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full absolute top-0 transition-transform duration-[6000ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-24rem)]"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-transparent border border-gray-200 text-[10px] font-bold text-accent-purple uppercase tracking-widest pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
                        Hover to scroll
                      </div>
                    </div>
                    <div className="p-5 text-left">
                      <h4 className="text-gray-900 font-bold text-lg mb-1">{item.title}</h4>
                      <span className="text-xs text-accent-purple font-semibold uppercase tracking-wider">{item.client}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* VIDEO EDITING PANEL (HTML5 Replayable Controls) */}
            {activeTab === 'videos' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videosMockups.map((item, index) => (
                  <div 
                    key={item.title} 
                    className="flex flex-col glass-card border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-lavender/30 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* HTML5 Native Video Viewport */}
                    <div className="relative h-[480px] bg-transparent overflow-hidden flex items-center justify-center border-b border-gray-200 group">
                      <video 
                        className="w-full h-full object-cover"
                        controls 
                        preload="none"
                        playsInline
                      >
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {/* Custom play icon helper overlay (hides on play click if default browser handles) */}
                      <div className="absolute w-14 h-14 rounded-full bg-lavender text-midnight flex items-center justify-center shadow-lg transition-transform duration-300 pointer-events-none group-hover:scale-110 opacity-70 group-hover:opacity-0 z-10">
                        <FaPlay className="text-lg ml-0.5" />
                      </div>
                    </div>
                    {/* Mockup details */}
                    <div className="p-5 text-left">
                      <h4 className="text-gray-900 font-bold text-base mb-0.5 truncate">{item.title}</h4>
                      <span className="text-xs text-gray-500">{item.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ERP SOFTWARE PANEL */}
            {activeTab === 'erp' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {erpMockups.map((item, index) => (
                  <div 
                    key={item.title} 
                    className="flex flex-col glass-card border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-lavender/30 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="relative overflow-hidden h-96 w-full bg-transparent group border-b border-gray-200 cursor-pointer">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full absolute top-0 transition-transform duration-[6000ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-24rem)]"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-transparent border border-gray-200 text-[10px] font-bold text-accent-purple uppercase tracking-widest pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
                        Hover to scroll
                      </div>
                    </div>
                    <div className="p-5 text-left">
                      <h4 className="text-gray-900 font-bold text-lg mb-1">{item.title}</h4>
                      <span className="text-xs text-accent-purple font-semibold uppercase tracking-wider">{item.client}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
