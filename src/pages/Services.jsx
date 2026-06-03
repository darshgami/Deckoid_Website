import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
  const faqData = [
    {
      question: "What services does Deckoid Solution offer?",
      answer: "Deckoid Solution is a full-service digital marketing agency in Rajkot offering SEO, social media management, Facebook Ads, website design, graphic design, video editing, and branding. We serve businesses across Gujarat and India."
    },
    {
      question: "How long does SEO take to show results?",
      answer: "SEO typically shows initial improvements within 3 months and more consistent results in 6-12 months depending on competition and site health."
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
    <div className="space-y-6">
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

      <section className="bg-transparent pt-28 sm:pt-32 lg:pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-4 reveal-element">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-black text-gray-900 leading-tight">Digital Marketing Services That Drive Real Results — Deckoid Solution, Rajkot</h1>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">At Deckoid Solution, every service we offer is built around one goal: measurable growth for your business. From AI-powered SEO and performance-driven Facebook Ads to stunning web design, social media management, graphic design, and video editing — we cover every channel your brand needs to succeed online. Serving businesses across Rajkot, Gujarat, and India since 2018.</p>
          </div>

          {/* Our Services Infographic */}
          <div className="max-w-[1200px] mx-auto mt-16 mb-20 px-2 sm:px-0">
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl font-black text-accent-purple text-gray-900">Our Services</h1>
            </div>

            <div className="space-y-4 max-w-[900px] mx-auto">
              {servicesList.map((service, idx) => (
                <div key={service.title} className="group rounded-[20px] border border-slate-200/80 bg-white px-4 py-4 shadow-[0_10px_22px_rgba(13,11,39,0.05)] transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="grid gap-3 items-center sm:grid-cols-[52px_minmax(0,1fr)_52px]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8b5cf6] shadow-[0_8px_16px_rgba(139,92,246,0.18)] text-base font-extrabold text-white">
                      0{idx + 1}
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-slate-950 leading-snug">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{service.desc}</p>
                      <div className="mt-3">
                        <Link to={service.route} className="inline-flex items-center gap-2 text-sm font-semibold text-[#8b5cf6] transition-transform duration-300 hover:translate-x-1">Learn More →</Link>
                      </div>
                    </div>

            
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Section — Full Width Below Services */}
          <div className="mt-16">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-2xl font-bold mb-3">Industries We've Helped Grow</h2>
              <p className="text-sm text-gray-600 mb-6">We've worked across many industries. Select one to learn more about how we tailor strategies to your sector.</p>
            </div>
            <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ['🏢', 'Real Estate & Property'],
                ['🎓', 'Education & Coaching'],
                ['👗', 'Fashion & Apparel'],
                ['💎', 'Jewellery & Accessories'],
                ['💚', 'Health & Wellness'],
                ['✈️', 'Travel & Hospitality'],
                ['🛒', 'Retail & E-Commerce'],
                ['🏭', 'Manufacturing & Industrial'],
                ['🌾', 'Agriculture & Agri-Products'],
                ['⚗️', 'Chemicals & Pharmaceuticals'],
                ['🦷', 'Dental & Medical Clinics'],
                ['🍔', 'Food & Beverage / FMCG'],
                ['🏗️', 'Construction & Infrastructure'],
                ['💻', 'IT & Technology'],
                ['🍃', 'Organic & Natural Products'],
                ['🐾', 'Pet Care & Veterinary']
              ].map(([emoji, name]) => (
                <div key={name} className="flex items-center gap-3 rounded-md border border-gray-100 bg-white px-4 py-3">
                  <div className="text-xl">{emoji}</div>
                  <div className="text-sm text-gray-700">{name}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-[900px] mx-auto text-center text-sm text-gray-600">Don't see your industry? Get in touch and we'll show how we can help your specific business grow online.</p>
          </div>

          {/* FAQ Section - Redesigned */}
          <div className="pt-[100px] pb-[100px]">
            <div className="max-w-[1100px] mx-auto text-center">
              <h2 className="text-[52px] sm:text-[42px] text-[32px] md:text-[52px] font-extrabold text-[#0d0b27]">Frequently Asked Questions About Deckoid Solution's Services</h2>
              <div className="w-20 h-1 rounded-full bg-[#8b5cf6] mx-auto mt-6 mb-12" style={{width: '80px', height: '4px', borderRadius: '50px'}} />
            </div>

            <div className="max-w-[900px] mx-auto space-y-5">
              {[
                {
                  question: 'What digital marketing services does Deckoid Solution offer?',
                  answer: `Deckoid Solution offers six core services: SEO (Search Engine Optimisation), Facebook & Instagram Ads, Social Media Management, Website Design & Development, Graphic Design, and Video Editing & AI Video Creation. All services are available for businesses in Rajkot, Gujarat, and across India.`
                },
                {
                  question: 'Can I get multiple services from Deckoid Solution as a package?',
                  answer: `Yes. Many of our clients combine services — for example, SEO + Website Design, or Social Media Management + Graphic Design + Video Editing. We build custom service combinations based on your goals and budget. Contact us to discuss what combination makes sense for your business.`
                },
                {
                  question: 'How is Deckoid Solution different from other digital marketing agencies in Rajkot?',
                  answer: `Three things set Deckoid Solution apart: we use AI tools across every service to deliver faster, smarter results; we are a RITA award-winning agency recognised for outstanding achievement in IT and Digital Marketing; and all services are managed by our founder, Jigna Pipalia, who has 8+ years of experience and has personally served 1,000+ clients across India.`
                },
                {
                  question: 'Do you work with small businesses or only large companies?',
                  answer: `We work with businesses of all sizes — from solo entrepreneurs and small local businesses in Rajkot to mid-sized companies operating nationally across India. Every strategy is tailored to the client's specific goals and budget.`
                },
                {
                  question: 'How do I get started with Deckoid Solution?',
                  answer: `The easiest way is to reach us on WhatsApp or by filling out the contact form on our website. We start with a free consultation to understand your business goals — then recommend the right services and build a strategy around your needs.`
                }
              ].map((item, idx) => (
                <details key={idx} className="bg-white rounded-[20px] p-[28px] border" style={{boxShadow: '0 12px 30px rgba(13,11,39,0.08)', border: '1px solid rgba(139,92,246,0.08)', transition: 'transform .3s ease'}}>
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="text-left">
                      <div className="text-[22px] font-bold text-[#0d0b27]">{item.question}</div>
                    </div>
                    <div className="text-[#8b5cf6] text-[20px] ml-4">*</div>
                  </summary>
                  <div className="mt-4 overflow-hidden transition-all duration-300">
                    <p className="text-[18px] leading-[1.9] text-[#64748b] text-left">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* CTA - Redesigned */}
          <div className="max-w-[1200px] mx-auto mt-[80px] mb-[100px] px-4">
            <div className="rounded-[32px] p-[80px] sm:p-[48px] text-center border border-white/10 shadow-[0_35px_85px_rgba(13,11,39,0.25)]" style={{background: 'linear-gradient(180deg, rgba(30,18,73,0.95) 0%, rgba(26,16,48,0.98) 100%)'}}>
              <h2 className="text-[54px] sm:text-[42px] text-[32px] font-extrabold text-white drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]">Ready to Grow Your Business? Let's Talk.</h2>
              <p className="mt-6 mx-auto text-[20px] leading-[1.9] text-white" style={{maxWidth: '850px', color: 'rgba(255,255,255,0.92)'}}>
                Whether you need SEO, paid ads, a new website, social media management, design, or video content — Deckoid Solution has the expertise, the tools, and the proven track record to help your business grow online. Serving businesses in Rajkot, Gujarat, and across India since 2018.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
                <a href="https://api.whatsapp.com/send/?phone=919586536724" className="inline-flex items-center justify-center px-9 py-4 bg-[#8b5cf6] text-white font-semibold rounded-full shadow-[0_10px_30px_rgba(139,92,246,0.28)]">Let's Talk</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
