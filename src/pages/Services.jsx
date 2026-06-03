import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaChevronDown } from 'react-icons/fa';

const servicesList = [
  {
    title: 'SEO — Search Engine Optimisation',
    desc: 'Get your business found on Google by customers actively searching for your services. We use AI-assisted keyword research, technical SEO, local SEO and on-page optimisation to increase rankings and drive qualified traffic.',
    route: '/services/seo-services',
  },
  {
    title: 'Facebook & Instagram Ads',
    desc: 'Stop spending on ads that do not convert. We create AI-powered Facebook and Instagram campaigns focused on leads, sales and measurable ROI through smart targeting and continuous optimisation.',
    route: '/services/facebook-ads',
  },
  {
    title: 'Social Media Management',
    desc: 'We manage your complete social media presence including strategy, content creation, posting schedules and audience engagement across Instagram, Facebook and LinkedIn.',
    route: '/services/social-media-management',
  },
  {
    title: 'Website Design & Development',
    desc: 'Fast, modern and conversion-focused websites designed to perform. From business websites to eCommerce stores, every website is built for growth.',
    route: '/services/website-design',
  },
  {
    title: 'Graphic Design',
    desc: 'Brand-focused design solutions including logos, social creatives, marketing materials, packaging design and visual identity systems.',
    route: '/services/graphic-design',
  },
  {
    title: 'AI Video Creation & Video Editing',
    desc: 'Professional reels, brand videos, product showcases and AI-generated video content delivered faster and more efficiently without compromising quality.',
    route: '/services/video-editing',
  },
  {
    title: 'Google Ads',
    desc: 'Reach customers the moment they search for what you offer. We run high-performance Google Search, Display, YouTube, and Shopping Ads campaigns with AI-assisted targeting and optimised bidding.',
    route: '/services/google-ads',
  },
  {
    title: 'Customized ERP Software',
    desc: 'We build customised ERP software to automate operations, improve reporting, and streamline inventory, billing, and sales processes for growing businesses.',
    route: '/services/erp-software',
  }
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqData = [
    {
      question: "What digital marketing services does Deckoid Solution offer?",
      answer: "Deckoid Solution offers six core services: SEO (Search Engine Optimisation), Facebook & Instagram Ads, Social Media Management, Website Design & Development, Graphic Design, and Video Editing & AI Video Creation. All services are available for businesses in Rajkot, Gujarat, and across India."
    },
    {
      question: "Can I get multiple services from Deckoid Solution as a package?",
      answer: "Yes. Many of our clients combine services — for example, SEO + Website Design, or Social Media Management + Graphic Design + Video Editing. We build custom service combinations based on your goals and budget. Contact us to discuss what combination makes sense for your business."
    },
    {
      question: "How is Deckoid Solution different from other digital marketing agencies in Rajkot?",
      answer: "Three things set Deckoid Solution apart: we use AI tools across every service to deliver faster, smarter results; we are a RITA award-winning agency recognised for outstanding achievement in IT and Digital Marketing; and all services are managed by our founder, Jigna Pipalia, who has 8+ years of experience and has personally served 1,000+ clients across India."
    },
    {
      question: "Do you work with small businesses or only large companies?",
      answer: "We work with businesses of all sizes — from solo entrepreneurs and small local businesses in Rajkot to mid-sized companies operating nationally across India. Every strategy is tailored to the client's specific goals and budget."
    },
    {
      question: "How do I get started with Deckoid Solution?",
      answer: "The easiest way is to reach us on WhatsApp or by filling out the contact form on our website. We start with a free consultation to understand your business goals — then recommend the right services and build a strategy around your needs."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": { "@type": "Answer", "text": q.answer }
    }))
  };

  return (
    <div className="space-y-0">
      <Helmet>
        <title>Digital Marketing Services in Rajkot, India — Deckoid Solution</title>
        <meta name="description" content="Explore Deckoid Solution's full range of digital marketing services — SEO, Facebook Ads, Web Design, Social Media, Graphic Design & AI-powered Video Editing. Serving businesses across Rajkot, Gujarat & India." />
        <link rel="canonical" href="https://www.deckoid.com/services" />
        <meta name="keywords" content="digital marketing services Rajkot, SEO services Rajkot, Facebook Ads agency India, web design Rajkot, social media management India, graphic design Rajkot, video editing services India, AI video creation India" />
        <meta property="og:title" content="Digital Marketing Services in Rajkot — Deckoid Solution" />
        <meta property="og:description" content="Explore Deckoid Solution's full range of digital marketing services — SEO, Facebook Ads, Web Design, Social Media, Graphic Design & AI-powered Video Editing." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

     <>
  {/* HERO SECTION */}
  <section className="bg-transparent pt-40 sm:pt-48 lg:pt-50 pb-10">
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      <div className="bg-[#0b0a25] rounded-[28px] p-15 md:p-12 space-y-8 text-left reveal-element shadow-[0_18px_45px_rgba(11,10,37,0.12)]">
        <h1
          className="text-4xl sm:text-4xl lg:text-3xl font-bold leading-tight text-white"
          style={{ maxWidth: "850px", color: "rgba(255, 255, 255, 0.92)" }}
        >
          Digital Marketing Services That Drive Real Results
        </h1>

        <h1
          className="text-4xl sm:text-4xl lg:text-3xl font-bold leading-tight text-white"
          style={{ maxWidth: "850px", color: "rgba(255, 255, 255, 0.92)" }}
        >
          Deckoid Solution, Rajkot
        </h1>

        <p
          className="max-w-2xl font-light leading-tight text-white"
          style={{ maxWidth: "850px", color: "rgba(255, 255, 255, 0.92)" }}
        >
          At Deckoid Solution, every service we offer is built around one goal:
          measurable growth for your business. From AI-powered SEO and
          performance-driven Facebook Ads to stunning web design, social media
          management, graphic design, and video editing, we cover every channel
          your brand needs to succeed online. Serving businesses across Rajkot,
          Gujarat, and India since 2018.
        </p>
      </div>
    </div>
  </section>

  {/* SERVICES SECTION */}
  <section className="py-10">
    <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-black text-accent-purple text-gray-900">
          Our Services
        </h1>
      </div>

      <div className="space-y-5 max-w-[900px] mx-auto">
        {servicesList.map((service, idx) => (
          <div
            key={service.title}
            className="group rounded-[20px] border border-slate-200/80 bg-white px-4 py-4 shadow-[0_10px_22px_rgba(13,11,39,0.05)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="grid gap-3 items-center sm:grid-cols-[52px_minmax(0,1fr)_52px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8b5cf6] shadow-[0_8px_16px_rgba(139,92,246,0.18)] text-base font-extrabold text-white">
                0{idx + 1}
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-950 leading-snug">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {service.desc}
                </p>

                <div className="mt-3">
                  <Link
                    to={service.route}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#8b5cf6] transition-transform duration-300 hover:translate-x-1"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* INDUSTRIES SECTION */}
  <section className="py-10">
    <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-3">
          Industries We've Helped Grow
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          We've worked across many industries. Select one to learn more about
          how we tailor strategies to your sector.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[
          ["🏢", "Real Estate & Property"],
          ["🎓", "Education & Coaching"],
          ["👗", "Fashion & Apparel"],
          ["💎", "Jewellery & Accessories"],
          ["💚", "Health & Wellness"],
          ["✈️", "Travel & Hospitality"],
          ["🛒", "Retail & E-Commerce"],
          ["🏭", "Manufacturing & Industrial"],
          ["🌾", "Agriculture & Agri-Products"],
          ["⚗️", "Chemicals & Pharmaceuticals"],
          ["🦷", "Dental & Medical Clinics"],
          ["🍔", "Food & Beverage / FMCG"],
          ["🏗️", "Construction & Infrastructure"],
          ["💻", "IT & Technology"],
          ["🍃", "Organic & Natural Products"],
          ["🐾", "Pet Care & Veterinary"]
        ].map(([emoji, name]) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-md border border-gray-100 bg-white px-4 py-3"
          >
            <div className="text-xl">{emoji}</div>
            <div className="text-sm text-gray-700">{name}</div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-sm text-gray-600">
        Don't see your industry? Get in touch and we'll show how we can help
        your specific business grow online.
      </p>
    </div>
  </section>

  {/* FAQ SECTION */}
<section className="pt-16 pb-24">
  <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
    <div className="text-center mb-10 space-y-4">
      <span className="text-xs font-bold text-accent-purple tracking-widest uppercase">FAQS</span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">Frequently Asked Questions About Deckoid Solution's Services</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full mx-auto" />
      <p className="text-gray-500 text-sm sm:text-base">Get quick answers to the most common questions about our services, delivery approach, and how we help businesses grow.</p>
    </div>

    <div className="space-y-4">
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
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 pt-0 text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA SECTION */}
<section className="mt-20 mb-20 px-4">
  <div className="max-w-[1200px] mx-auto">
    <div
      className="rounded-[32px] p-[80px] sm:p-[48px] text-center border border-white/10 shadow-[0_35px_85px_rgba(13,11,39,0.25)]"
      style={{
        background:
          "linear-gradient(180deg, rgba(30,18,73,0.95) 0%, rgba(26,16,48,0.98) 100%)"
      }}
    >
      <h2 className="text-[54px] sm:text-[42px] text-[32px] font-extrabold text-white drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
        Ready to Grow Your Business? Let's Talk.
      </h2>

      <p
        className="mt-6 mx-auto text-[20px] leading-[1.9] text-white"
        style={{
          maxWidth: "850px",
          color: "rgba(255, 255, 255, 0.92)"
        }}
      >
        Whether you need SEO, paid ads, a new website, social media management,
        design, or video content — Deckoid Solution has the expertise, the
        tools, and the proven track record to help your business grow online.
        Serving businesses in Rajkot, Gujarat, and across India since 2018.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
        <a
          href="https://api.whatsapp.com/send/?phone=919586536724"
          className="inline-flex items-center justify-center px-9 py-4 bg-[#8b5cf6] text-white font-semibold rounded-full shadow-[0_10px_30px_rgba(139,92,246,0.28)]"
        >
          Let's Talk
        </a>
      </div>
    </div>
  </div>
</section>
</>
    </div>
  );
}
