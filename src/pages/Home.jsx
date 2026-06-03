import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import {
  FaArrowRight, FaWhatsapp, FaUserCheck, FaCheck, FaDraftingCompass,
  FaHeadphones, FaLaptopCode, FaPalette, FaShareAlt, FaBullhorn,
  FaVideo, FaSearch, FaEnvelope, FaUser, FaStickyNote, FaLocationArrow,
  FaBolt, FaGoogle, FaCogs, FaChevronDown
} from 'react-icons/fa';
import { BiLineChart, BiAward, BiGroup, BiBullseye, BiPalette } from 'react-icons/bi';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Asset Imports
import awardPic from '../assets/awardpic.jpg';
import awardCert from '../assets/award .jpeg';
import award12 from '../assets/award12.jpeg';
import award123 from '../assets/award123.jpeg';
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
import t4Profile from '../assets/testimonial-4-profile.png';
import t4Img from '../assets/testimonial-4.jpeg';
import t5Profile from '../assets/testimonial-5-profile.png';
import t5Img from '../assets/testimonial-5.png';
import t6Profile from '../assets/testimonial-6-profile.png';
import t6Img from '../assets/testimonial-6.png';
import t7Profile from '../assets/testimonial-7-profile.png';
import t7Img from '../assets/testimonial-7.png';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const awardSlides = [
    { src: awardPic, alt: 'Award certificate image' },
    { src: awardCert, alt: 'Award recognition image' },
    { src: award12, alt: 'Award recognition image 12' },
    { src: award123, alt: 'Award recognition image 123' },
    { src: awardTrophy, alt: 'Saurashtra IT-ITeS Excellence Trophy' },
  ];

  const faqData = [
    {
      question: "What services does Deckoid Solution offer?",
      answer: "Deckoid Solution is a full-service digital marketing agency in Rajkot offering SEO, social media management, Facebook Ads, website design, graphic design, video editing, and branding. We serve businesses across Gujarat and India."
    },
    {
      question: "Is Deckoid Solution a local agency in Rajkot or do they serve clients across India?",
      answer: "Both. We are based in Rajkot, Gujarat, and serve local businesses in Saurashtra as well as clients across India. Our strategies are tailored to each client's target market — local, regional, or national."
    },
    {
      question: "Has Deckoid Solution won any awards?",
      answer: "Yes. Deckoid Solution was recognised at the Saurashtra IT-ITeS Excellence Awards 2024, presented by the Rajkot Information Technology Association (RITA), for outstanding achievements in IT and Digital Marketing."
    },
    {
      question: "How can digital marketing help my business in Rajkot grow?",
      answer: "Digital marketing helps Rajkot businesses reach more customers online through SEO, social media, paid ads, and a strong website. Deckoid Solution creates data-backed strategies to increase website traffic, generate quality leads, and improve ROI for businesses of all sizes."
    },
    {
      question: "What results has Deckoid Solution achieved for its clients?",
      answer: "Our campaigns have delivered a 120% increase in website traffic, 2x lead growth through Facebook Ads, and an average 200% ROI for our clients across multiple industries in India."
    },
    {
      question: "How do I get started with Deckoid Solution?",
      answer: "You can reach us via WhatsApp, email at digitaldeckoid@gmail.com, or by filling out the contact form on our website. We start with a free consultation to understand your business goals before recommending any strategy."
    },
    {
      question: "Does Deckoid Solution use AI in their digital marketing services?",
      answer: "Yes. Deckoid Solution integrates AI tools across all major services — including AI-assisted keyword research and content analysis for SEO, AI-powered audience targeting for Facebook Ads, behaviour-based UX decisions for website design, and AI-enhanced production for graphic design and video editing. This allows us to deliver faster, more precise, and more cost-effective results for businesses in Rajkot and across India."
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received successfully. A Deckoid representative will connect with you shortly.');
  };

  const services = [
    { title: 'Website Design & Development', img: serviceWeb, icon: FaLaptopCode, desc: 'AI-informed UX decisions based on user behaviour data.', route: '/services/website-design' },
    { title: 'Graphic Design', img: serviceGraphic, icon: FaPalette, desc: 'AI-enhanced production for faster creative turnaround.', route: '/services/graphic-design' },
    { title: 'Social Media Management', img: serviceSocial, icon: FaShareAlt, desc: 'AI-assisted content scheduling & performance analytics.', route: '/services/social-media-management' },
    { title: 'Facebook Paid Ads', img: serviceAds, icon: FaBullhorn, desc: 'AI-powered audience targeting & budget optimisation.', route: '/services/facebook-ads' },
    { title: 'Google Ads', img: serviceAds, icon: FaGoogle, desc: 'Targeted search engine marketing and display campaigns for instant leads.' },
    { title: 'Ai Video Editing', img: serviceVideo, icon: FaVideo, desc: 'AI-assisted editing, subtitles & format optimisation', route: '/services/video-editing' },
    { title: 'Search Engine Optimization', img: serviceSEO, icon: FaSearch, desc: 'AI-assisted keyword research, content gap analysis & rank tracking.', route: '/services/seo-services' },
    { title: 'Customized ERP Software', img: serviceWeb, icon: FaCogs, desc: 'Tailored enterprise resource systems to streamline operations and business workflow.' }
  ];

  const valueCards = [
    { icon: BiLineChart, title: 'AI-Powered Business Growth', desc: 'We deploy advanced digital marketing systems and AI-driven analytics to exponentially scale your business revenue.' },
    { icon: BiAward, title: 'Data-Backed Digital Expertise', desc: 'Our team leverages predictive AI insights to craft high-converting campaigns that dominate your industry.' },
    { icon: FaBolt, title: 'Rapid Agile Adaptation', desc: 'Using real-time machine learning trends, we adapt your digital presence instantly to stay miles ahead of competitors.' },
    { icon: BiGroup, title: 'Full-Stack Marketing Partner', desc: 'From custom ERPs to AI video editing, we are the comprehensive growth engine for modern, tech-forward businesses.' },
    { icon: BiBullseye, title: 'Precision Market Targeting', desc: 'We utilize AI audience modeling to deliver hyper-personalized digital ads that maximize ROI across all channels.' },
    { icon: BiPalette, title: 'Intelligent Creative Design', desc: 'Combining human creativity with AI enhancement, we produce striking visual assets and websites that captivate and convert.' }
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
      <section className="relative w-full h-[110vh] min-h-[630px] flex items-center justify-center overflow-hidden bg-[#0a0a1a]">
        {/* Banner Image Background */}
        <img
          src="/Deckoid_Banner.png"
          alt="Deckoid Banner Background"
          className="absolute inset-0 w-full h-[110vh] object-cover object-bottom z-0"
          loading="eager"
        />
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

      {/* 3. Modern Award Section */}
      <section className="relative py-10 md:py-14 overflow-hidden border-t border-gray-200">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f7f4ff_0%,#ffffff_45%,#f3efff_100%)]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at top left, rgba(139,92,246,0.10), transparent 30%), radial-gradient(circle at right center, rgba(79,70,229,0.10), transparent 28%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="glass-card rounded-[28px] border border-white/70 p-6 md:p-8 lg:p-10 shadow-[0_14px_35px_rgba(124,92,255,0.10)] bg-white/70 backdrop-blur-md">
            <div className="space-y-8">
              <div className="text-center space-y-6 reveal-element-left max-w-4xl mx-auto">
                <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-purple">IT-ITeS Excellence</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">Recognized for Digital Brilliance</h2>
                <p className="text-base sm:text-lg text-accent-purple font-semibold">Award-Winning Digital Marketing Agency – Deckoid Solutions</p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
                  <b>Deckoid Solutions</b> is proud to be honored at the <b>Saurashtra IT-ITeS Excellence Awards 2024</b>, presented by the <b>Rajkot Information Technology Association (RITA).</b> This prestigious recognition celebrates our outstanding achievements in <b>IT and Digital Marketing</b>, reaffirming our commitment to innovation, creativity, and measurable success for our clients.
                </p>
              </div>

              <div className="reveal-element-right">
                <div className="p-0">
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                    effect="coverflow"
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 120,
                      modifier: 2.2,
                      slideShadows: false,
                    }}
                    spaceBetween={16}
                    slidesPerView={3}
                    centeredSlides={true}
                    autoplay={{ delay: 3200, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    loop={true}
                    grabCursor={true}
                    watchOverflow={true}
                    speed={700}
                    breakpoints={{
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="award-carousel"
                  >
                    {awardSlides.map((slide, idx) => (
                      <SwiperSlide key={idx} className="!bg-transparent !shadow-none">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="h-64 sm:h-72 md:h-80 w-full object-contain rounded-[18px]"
                          loading="lazy"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. Services Cards Section */}
      <section className="bg-transparent py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Result-Driven Services
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full mx-auto" />
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Every service at Deckoid Solutions is designed with clarity, creativity, and purpose. From SEO and Facebook Ads to website design, graphic design, social media management, and video editing — our team covers every channel your brand needs to grow. Each service is enhanced with AI tools that improve speed, targeting, and results without adding to your cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group flex flex-col glass-card border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1 reveal-element"
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
                <div className="p-5 flex-grow flex flex-col justify-between text-left space-y-3">
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
                      to={service.route || '/services'}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-purple tracking-wider uppercase group-hover:text-gray-900 transition-colors duration-300"
                    >
                      Learn More
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
      <section className="bg-transparent py-10 md:py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4 reveal-element">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">

            {/* Metric 1 */}
            <div className="flex flex-col glass-card border border-gray-200 rounded-3xl overflow-hidden p-5 sm:p-6 space-y-4 hover:border-lavender/30 transition-all duration-300 reveal-element-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Winning Awards for <span className="text-accent-purple">2024-2025 Year</span>
                </h3>
                <p className="text-sm text-gray-500">
                  Recognized as the Best Digital Marketing Company in Saurashtra for outstanding marketing results.
                </p>
              </div>
              <div className="relative group overflow-hidden flex items-center justify-center">
                <img
                  src={metric1}
                  alt="Award Winning Performance analytics"
                  className="max-h-56 w-auto object-contain  transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col glass-card border border-gray-200 rounded-3xl overflow-hidden p-5 sm:p-6 space-y-4 hover:border-lavender/30 transition-all duration-300 reveal-element-right">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Increasing Website Traffic by <span className="text-accent-purple">120%</span>
                </h3>
                <p className="text-sm text-gray-500">
                  Transformed search visibility into meaningful user engagement with Deckoid's proven approach.
                </p>
              </div>
              <div className="relative group overflow-hidden flex items-center justify-center">
                <img
                  src={metric2}
                  alt="Website Traffic Analytics chart"
                  className="max-h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col glass-card border border-gray-200 rounded-3xl overflow-hidden p-5 sm:p-6 space-y-4 hover:border-lavender/30 transition-all duration-300 reveal-element-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Driving <span className="text-accent-purple">2x Lead Growth</span> via Facebook Ads
                </h3>
                <p className="text-sm text-gray-500">
                  Generated consistent, sales-ready, high-intent lead pipelines using Deckoid's proven paid search campaigns.
                </p>
              </div>
              <div className="relative group overflow-hidden flex items-center justify-center">
                <img
                  src={metric3}
                  alt="Facebook Ads Lead Generation chart"
                  className="max-h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col glass-card border border-gray-200 rounded-3xl overflow-hidden p-5 sm:p-6 space-y-4 hover:border-lavender/30 transition-all duration-300 reveal-element-right">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Generating <span className="text-accent-purple">200% Average ROI</span>
                </h3>
                <p className="text-sm text-gray-500">
                  Maximizing client return on investment through smart, data-powered marketing pipelines.
                </p>
              </div>
              <div className="relative group overflow-hidden flex items-center justify-center">
                <img
                  src={metric4}
                  alt="Average ROI Marketing dashboard representation"
                  className="max-h-56 w-auto object-contain  transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Why Choose Deckoid Section */}
      <section className="bg-transparent py-10 md:py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              Our Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Why Businesses Trust <br />
              <span className="text-accent-purple">Deckoid Solutions?</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full mx-auto" />
            <p className="text-gray-500 text-sm sm:text-base">
              Businesses across Rajkot, Gujarat, and India choose Deckoid because we focus on real results not vanity metrics. We use AI tools to work smarter: faster research, better targeting, and clearer reporting so your budget goes further. We think strategically, execute creatively, and stay with you through every stage of growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueCards.map((card, index) => (
              <div
                key={card.title}
                className="group text-left p-5 glass-card border border-gray-200 rounded-2xl hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1 reveal-element"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lavender/10 border border-lavender/20 text-accent-purple text-lg group-hover:bg-lavender group-hover:text-midnight transition-colors duration-300">
                    <card.icon />
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold leading-snug text-gray-900 group-hover:text-accent-purple transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Call To Action Connect Banner */}
      <section className="bg-transparent py-2 relative overflow-hidden">
      </section>

      {/* 9. Testimonial Section */}
      <section className="bg-transparent py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4 reveal-element">
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
              loop={true}
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
                  <div className="flex flex-col items-center glass-card border border-gray-200 rounded-3xl p-5 h-full text-center hover:border-lavender/30 transition-all duration-300 hover:-translate-y-1">

                    {/* User profile picture */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-lavender glass-card mb-6 shrink-0">
                      <img
                        src={test.profile}
                        alt="Client review profile"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Testimonial Google review image */}
                    <div className="flex items-center justify-center overflow-hidden mb-4 w-full flex-grow">
                      <img
                        src={test.reviewImg}
                        alt="Google Review snippet details"
                        className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-[1.03]"
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

      {/* 9.5 FAQ Section */}
      <section className="bg-transparent py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 space-y-4 reveal-element">
            <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">
              FAQS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Everything You Need to Know
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full mx-auto" />
            <p className="text-gray-500 text-sm sm:text-base">
              Get answers to the most common questions about our digital marketing,<br />
              branding, website development, SEO, and AI-powered business solutions.
            </p>
          </div>

          <div className="space-y-4 reveal-element">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`glass-card border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-lavender shadow-[0_8px_30px_rgba(182,149,231,0.15)]' : 'border-gray-200 hover:border-lavender/50'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className={`text-base sm:text-lg font-bold pr-8 transition-colors duration-300 ${openFaq === index ? 'text-accent-purple' : 'text-gray-900'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-lavender text-accent-purple' : 'bg-gray-100 text-gray-500'}`}>
                    <FaChevronDown className={`text-sm transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Contact Us Form Section */}
      <section className="bg-transparent py-16 md:py-20 relative overflow-hidden">
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
                Transform your brand with AI-driven digital marketing strategies built for modern business growth. We combine creativity, analytics, and intelligent marketing solutions to help businesses attract the right audience, increase engagement, and generate high-quality leads. Whether you're launching a new campaign or scaling your online presence, our team delivers performance-focused strategies that create measurable impact.
              </p>

              <div className="p-6 glass-card border border-gray-200 rounded-2xl space-y-4">
                <p className="text-lg font-medium text-gray-900">
                  “At Deckoid Solution,
                  <br />
                  we analyze, optimize, and accelerate growth with AI-driven strategies.                </p>
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
