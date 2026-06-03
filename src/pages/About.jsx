import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaChevronRight, FaTrophy } from 'react-icons/fa';
import StatCounter from '../components/StatCounter';
import founderImg from '../assets/owner.JPG';

export default function About() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the founder of Deckoid Solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jigna Pipalia is the founder of Deckoid Solution, a RITA award-winning digital marketing agency based in Rajkot, Gujarat. She founded the agency in 2018 and has personally built and grown it over 8+ years, serving 1,000+ clients across India."
        }
      },
      {
        "@type": "Question",
        "name": "Who founded Deckoid Solution and where is it based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deckoid Solution was founded by Jigna Pipalia and is headquartered in Rajkot, Gujarat, India. The agency was built to help businesses across Saurashtra and India grow online through strategic branding, SEO, web design, social media management, and Facebook Ads."
        }
      },
      {
        "@type": "Question",
        "name": "What award has Deckoid Solution won?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deckoid Solution was honored at the Saurashtra IT-ITeS Excellence Awards 2024, presented by the Rajkot Information Technology Association (RITA). The award recognised Deckoid’s outstanding achievements in IT and Digital Marketing, making it one of the most recognised digital agencies in Rajkot and Saurashtra."
        }
      },
      {
        "@type": "Question",
        "name": "Does Deckoid Solution use AI in their work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Deckoid Solution integrates AI tools across its full workflow — including AI-assisted keyword research and content analysis for SEO, AI-powered audience targeting for Facebook Ads, AI-enhanced production for graphic design and video editing, and AI-powered analytics for clearer client reporting. This makes campaigns faster, more targeted, and more cost-effective."
        }
      },
      {
        "@type": "Question",
        "name": "Does Deckoid Solution work with businesses outside Rajkot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While Deckoid Solution is based in Rajkot, Gujarat, the agency works with businesses across India. Services are tailored to each client's target market — whether local, regional within Gujarat, or national across India."
        }
      },
      {
        "@type": "Question",
        "name": "What results has Deckoid Solution delivered for its clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deckoid Solution has delivered measurable results including a 120% average increase in website traffic, 2x lead growth through Facebook Ads, and an average 200% return on investment for clients across multiple industries in India."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Deckoid Solution",
    "url": "https://www.deckoid.com/",
    "logo": "https://www.deckoid.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/deckoidsolution",
      "https://www.instagram.com/deckoid_solution/",
      "https://www.linkedin.com/company/deckoid-solution-digital-marketing/"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Deckoid Solution",
    "image": "https://www.deckoid.com/office.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6, Bhaktinagar Station Plot, Bhakti Nagar",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "postalCode": "360002",
      "addressCountry": "IN"
    },
    "telephone": "+91 94262 25742",
    "url": "https://www.deckoid.com/"
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jigna Pipalia",
    "jobTitle": "Founder & Executive Director",
    "worksFor": {
      "@type": "Organization",
      "name": "Deckoid Solution"
    },
    "sameAs": "https://www.linkedin.com/in/jigna-pipalia/"
  };

  const awardSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Deckoid Solution",
    "award": "Saurashtra IT-ITeS Excellence Award 2024"
  };

  return (
    <div className="space-y-0">
      <Helmet>
        <title>About Deckoid Solution | Award-Winning AI-Powered Digital Marketing Agency in Rajkot</title>
        <meta name="description" content="Learn about Deckoid Solution, Rajkot's award-winning AI-powered digital marketing agency. Meet founder Jigna Pipalia, explore our mission, values, AI-driven approach, and proven client results." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(awardSchema)}</script>
      </Helmet>

      {/* Header - Balanced two-column hero */}
      <section className="relative bg-transparent  pt-28 sm:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="reveal-element text-left">
              <h1 className="font-black text-gray-900 font-display w-full" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: 1.02 }}>
              We Are <span className="text-[#8b5cf6]">Deckoid Solution</span> — Rajkot's AI-Powered Digital Marketing Agency
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full my-5" />
            <p className="text-gray-600 text-sm md:text-base max-w-3xl" style={{ lineHeight: 1.85 }}>
              We started with one belief: that every business in Rajkot, Gujarat, and across India deserves marketing that actually works. Today, Deckoid Solution is a RITA award-winning digital marketing agency combining strategic thinking, creative design, and AI-powered tools to help businesses grow online — consistently, measurably, and with clarity.
            </p>
          </div>
        </div>
        </section>

      {/* Our Story */}
      <section className="bg-transparent py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-left space-y-6 reveal-element-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our Story — From Rajkot to Businesses Across India</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full" />
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                <p>
                  Deckoid Solution was founded in Rajkot, Gujarat, with a clear purpose: to bridge the gap between great businesses and the digital strategies they need to reach their full potential. We saw local businesses struggling to make sense of SEO, social media, and digital advertising — spending money without a clear strategy or measurable returns.
                </p>
                <p>
                  So we built an agency that does things differently. We start with your goals. We build strategies that fit your market — whether you’re targeting customers in Saurashtra, Gujarat, or anywhere across India. And we stay accountable to results, not just deliverables.
                </p>
                <p>
                  In 2024, that commitment was recognised at the Saurashtra IT-ITeS Excellence Awards, where Deckoid Solution received the award for outstanding achievement in IT and Digital Marketing — making us one of the most recognised digital agencies in Rajkot.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 reveal-element-right">
              <div className="relative group">
                <div className="relative p-2 glass-card border border-gray-200 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md aspect-4/3">
                  <img src={founderImg} alt="Deckoid Solution Story" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="bg-transparent py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center reveal-element-left">
              <div className="w-full max-w-[420px] mx-auto lg:mx-0">
                <div
                  className="transform transition-all duration-400"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(139,92,246,0.15)',
                    borderRadius: '32px',
                    boxShadow: '0 20px 60px rgba(13,11,39,0.20)'
                  }}
                >
                  <div className="p-8">
                    <div className="overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(13,11,39,0.15)]">
                      <img
                        src={founderImg}
                        alt="Jigna Pipalia - Founder"
                        className="w-full h-auto object-cover aspect-[4/5]"
                        loading="lazy"
                      />
                    </div>

                    {/* Name and designation removed per request; kept inside quote block */}

                    <div
                      className="mt-6 mx-auto"
                      style={{
                        background: 'rgba(139,92,246,0.08)',
                        borderLeft: '4px solid #8b5cf6',
                        borderRadius: '16px',
                        padding: '20px',
                        maxWidth: '100%'
                      }}
                    >
                      <div className="text-[#0d0b27] font-bold" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                        "Every brand has a voice — my mission is to help it be heard."
                      </div>
                        <div className="mt-3 text-[#8b5cf6] font-bold text-right" style={{ fontSize: '15px' }}>
                          - JIGNA PIPALIYA
                          <div>( FOUNDER & CEO )</div>
                        </div>
                    </div>
                  </div>
                </div>
                {/* Hover effect wrapper to translate card */}
                <style>{`.reveal-element-left > div > div:hover { transform: translateY(-8px); box-shadow: 0 30px 80px rgba(13,11,39,0.25); transition: all 0.4s ease; }`}</style>
              </div>
            </div>
            <div className="lg:col-span-7 text-left space-y-6 reveal-element-right">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Meet the Founder — The Woman Behind Deckoid Solution</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full" />
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Jigna Pipalia is the founder and sole driving force behind Deckoid Solution — one of Rajkot’s most recognised digital marketing agencies. For over 8 years, she has built, managed, and grown the agency entirely on her own, treating it with the same dedication and care she gives her family.
                </p>
                <p>
                  A Computer Engineering graduate from Marwadi University and a proud self-learner, Jigna discovered her passion for marketing and internet strategy early in her career — and has never stopped deepening it. Today she is an AI Practitioner and Digital Marketing Strategist with hands-on expertise across SEO, Social Media Marketing, Google and Facebook Ads, Web & App Development, and Graphic Design.
                </p>
                <p>
                  Since founding Deckoid Solution in April 2018, Jigna has personally served 1,000+ clients across industries, including coaching, manufacturing, real estate, fashion and jewellery, health and wellness, education, travel, and retail — helping each one grow their digital presence and generate measurable business results.
                </p>
                <p>
                  Beyond her agency, Jigna is an active and valued member of both the IT Association Rajkot and the Patel Business Association — two communities where she contributes her expertise and builds meaningful connections across the Gujarat business ecosystem.
                </p>
                <p>
                  What makes Jigna’s story particularly remarkable is that she has built all of this while raising two children — a testament to the resilience, focus, and quiet determination that define everything she does. Deckoid Solution is not just a business she runs — it is something she has grown, protected, and nurtured from the ground up, the same way she does everything she loves.
                </p>
                <p>
                  Connect with Jigna on LinkedIn for insights on digital marketing, AI, and growing your business online in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values as Cards */}
      <section className="bg-transparent py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4 reveal-element">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">What We Stand For — Our Mission & Values</h2>
            <p className="text-sm text-gray-600">We don’t just run campaigns. We grow businesses.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 glass-card border border-gray-200 rounded-3xl">
              <h3 className="font-bold text-gray-900 mb-2">Results First</h3>
              <p className="text-sm text-gray-600">Every strategy we build is measured against real business outcomes — traffic, leads, and revenue. Vanity metrics don’t count.</p>
            </div>
            <div className="p-6 glass-card border border-gray-200 rounded-3xl">
              <h3 className="font-bold text-gray-900 mb-2">Full Transparency</h3>
              <p className="text-sm text-gray-600">You’ll always know exactly what we’re doing, why we’re doing it, and what results it’s delivering — no hidden fees, no vague reports.</p>
            </div>
            <div className="p-6 glass-card border border-gray-200 rounded-3xl">
              <h3 className="font-bold text-gray-900 mb-2">AI-Enhanced Work</h3>
              <p className="text-sm text-gray-600">We use AI tools across research, targeting, design, and reporting to deliver faster, smarter, and more cost-effective outcomes for every client.</p>
            </div>
            <div className="p-6 glass-card border border-gray-200 rounded-3xl">
              <h3 className="font-bold text-gray-900 mb-2">Creative Integrity</h3>
              <p className="text-sm text-gray-600">Great marketing is both strategic and beautiful. We never compromise on design quality, even when deadlines are tight.</p>
            </div>
            <div className="p-6 glass-card border border-gray-200 rounded-3xl">
              <h3 className="font-bold text-gray-900 mb-2">Partnership Mindset</h3>
              <p className="text-sm text-gray-600">We treat your business like it’s our own — staying invested in your growth long after the campaign launches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="bg-transparent py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4 reveal-element">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How We Use AI to Deliver Better Results</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 glass-card border border-gray-200 rounded-3xl">
              <h4 className="font-bold mb-2">Smarter Research</h4>
              <p className="text-sm text-gray-600">AI-assisted keyword research, competitor analysis, and content gap identification means we build strategies on data, not guesswork.</p>
            </div>
            <div className="p-6 glass-card border border-gray-200 rounded-3xl">
              <h4 className="font-bold mb-2">Better Targeting</h4>
              <p className="text-sm text-gray-600">For Facebook Ads and social campaigns, AI helps us identify the most relevant audience segments, reducing wasted spend and improving conversion rates.</p>
            </div>
            <div className="p-6 glass-card border border-gray-200 rounded-3xl">
              <h4 className="font-bold mb-2">Faster Creative</h4>
              <p className="text-sm text-gray-600">AI-enhanced production workflows for graphic design and video editing mean faster turnaround without compromising on quality.</p>
            </div>
            <div className="p-6 glass-card border border-gray-200 rounded-3xl">
              <h4 className="font-bold mb-2">Clearer Reporting</h4>
              <p className="text-sm text-gray-600">AI-powered analytics give you performance insights that are easy to understand and act on — no jargon, just results.</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-600">The result? Campaigns that are more precise, more efficient, and more effective — for businesses of every size in Rajkot and across India.</p>
        </div>
      </section>

      {/* Award Section - Premium Showcase */}
      <section className="bg-transparent py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Recognised for Excellence — Saurashtra IT-ITeS Excellence Award 2024</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-lavender to-indigo-600 rounded-full my-4" />
              <p className="text-sm text-gray-600">At Deckoid Solution, we let our work speak for itself — and in 2024, that work was officially recognised.</p>
              <p className="text-sm text-gray-600 mt-4">🏆 Deckoid Solution was honoured at the Saurashtra IT-ITeS Excellence Awards 2024, presented by the Rajkot Information Technology Association (RITA) — the leading body representing IT and digital businesses across Saurashtra and Gujarat.</p>
              <p className="text-sm text-gray-600 mt-3">The award recognised Deckoid’s outstanding achievements in IT and Digital Marketing, placing us among the most respected digital agencies in Rajkot and Saurashtra. For our founder Jigna Pipalia and the entire Deckoid team, this recognition represents not just an accolade — but a confirmation of the standard we hold ourselves to for every client, every campaign, every day.</p>
              <p className="text-sm text-gray-600 mt-3">It is a milestone that reflects 8+ years of consistent work, 1,000+ clients served, and an unwavering commitment to results that matter.</p>

              {/* Trust Metrics - horizontal stats row */}
              <div className="mt-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  <div className="py-4">
                    <div className="text-2xl font-extrabold text-gray-900">8+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="py-4">
                    <div className="text-2xl font-extrabold text-gray-900">1000+</div>
                    <div className="text-sm text-gray-600">Clients Served</div>
                  </div>
                  <div className="py-4">
                    <div className="text-2xl font-extrabold text-gray-900">2024</div>
                    <div className="text-sm text-gray-600">Award Winner</div>
                  </div>
                  <div className="py-4">
                    <div className="text-2xl font-extrabold text-gray-900">Rajkot</div>
                    <div className="text-sm text-gray-600">Based Agency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              {/* Premium Award Card (placeholder trophy view when no award photo exists) */}
              <div className="bg-white p-6 rounded-[32px] shadow" style={{ boxShadow: '0 25px 80px rgba(13,11,39,0.15)', border: '1px solid rgba(139,92,246,0.10)', maxWidth: 420, width: '100%' }}>
                <div className="overflow-hidden rounded-[24px]">
                  {/* No award photo in assets - render premium recognition layout */}
                  <div className="w-full bg-transparent p-6 flex flex-col items-center text-center">
                    <div className="text-[#8b5cf6] mb-4">
                      <FaTrophy className="text-[64px]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Saurashtra IT-ITeS<br/>Excellence Award 2024</h3>
                    <div className="mt-3 inline-block bg-[#8b5cf6] text-white px-4 py-1 rounded-full text-sm font-semibold">Award Winner</div>
                    <div className="mt-6 text-sm text-gray-600">Awarded for<br/>Outstanding Achievement<br/>in IT & Digital Marketing</div>
                  </div>
                </div>

                {/* Award Highlight Box */}
                <div className="mt-6" style={{ background: 'rgba(139,92,246,0.08)', borderLeft: '4px solid #8b5cf6', borderRadius: '16px', padding: '20px' }}>
                  <div className="font-semibold text-[#0d0b27]">🏆 Award Winner</div>
                  <div className="text-sm text-gray-700 mt-1">Saurashtra IT-ITeS Excellence Awards 2024</div>
                  <div className="text-sm text-gray-600 mt-1">Presented by Rajkot Information Technology Association (RITA)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers / Counters */}
      <section className="about-metrics-section relative isolate py-24 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4 reveal-element">
            <h2 className="about-metrics-title text-3xl sm:text-4xl font-black font-display">Real Results for Real Businesses — Our Numbers</h2>
            <div className="about-metrics-divider w-20 h-1 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            <div className="about-metric-card p-7 rounded-[28px]">
              <StatCounter target={120} suffix="%" duration={1200} className="about-metric-value text-center" />
              <span className="about-metric-label text-lg font-semibold">Average Website Traffic Growth</span>
            </div>
            <div className="about-metric-card p-7 rounded-[28px]">
              <StatCounter target={2} suffix="X" duration={1400} className="about-metric-value text-center" />
              <span className="about-metric-label text-lg font-semibold">Lead Growth Through Facebook Ads</span>
            </div>
            <div className="about-metric-card p-7 rounded-[28px]">
              <StatCounter target={200} suffix="%" duration={1600} className="about-metric-value text-center" />
              <span className="about-metric-label text-lg font-semibold">Average Client ROI</span>
            </div>
            <div className="about-metric-card p-7 rounded-[28px]">
              <StatCounter target={1000} suffix="+" duration={1800} className="about-metric-value text-center" />
              <span className="about-metric-label text-lg font-semibold">Clients Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-transparent py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Frequently Asked Questions About Deckoid Solution</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <details className="p-4 glass-card border border-gray-200 rounded-2xl">
                <summary className="font-semibold">Who is the founder of Deckoid Solution?</summary>
                <p className="mt-2">Jigna Pipalia is the founder of Deckoid Solution, a RITA award-winning digital marketing agency based in Rajkot, Gujarat. She founded the agency in 2018 and has personally built and grown it over 8+ years, serving 1,000+ clients across India.</p>
              </details>
              <details className="p-4 glass-card border border-gray-200 rounded-2xl">
                <summary className="font-semibold">Who founded Deckoid Solution and where is it based?</summary>
                <p className="mt-2">Deckoid Solution was founded by Jigna Pipalia and is headquartered in Rajkot, Gujarat, India. The agency was built to help businesses across Saurashtra and India grow online through strategic branding, SEO, web design, social media management, and Facebook Ads.</p>
              </details>
              <details className="p-4 glass-card border border-gray-200 rounded-2xl">
                <summary className="font-semibold">What award has Deckoid Solution won?</summary>
                <p className="mt-2">Deckoid Solution was honored at the Saurashtra IT-ITeS Excellence Awards 2024, presented by the Rajkot Information Technology Association (RITA). The award recognised Deckoid’s outstanding achievements in IT and Digital Marketing, making it one of the most recognised digital agencies in Rajkot and Saurashtra.</p>
              </details>
              <details className="p-4 glass-card border border-gray-200 rounded-2xl">
                <summary className="font-semibold">Does Deckoid Solution use AI in their work?</summary>
                <p className="mt-2">Yes. Deckoid Solution integrates AI tools across its full workflow — including AI-assisted keyword research and content analysis for SEO, AI-powered audience targeting for Facebook Ads, AI-enhanced production for graphic design and video editing, and AI-powered analytics for clearer client reporting. This makes campaigns faster, more targeted, and more cost-effective.</p>
              </details>
              <details className="p-4 glass-card border border-gray-200 rounded-2xl">
                <summary className="font-semibold">Does Deckoid Solution work with businesses outside Rajkot?</summary>
                <p className="mt-2">Yes. While Deckoid Solution is based in Rajkot, Gujarat, the agency works with businesses across India. Services are tailored to each client's target market — whether local, regional within Gujarat, or national across India.</p>
              </details>
              <details className="p-4 glass-card border border-gray-200 rounded-2xl">
                <summary className="font-semibold">What results has Deckoid Solution delivered for its clients?</summary>
                <p className="mt-2">Deckoid Solution has delivered measurable results including a 120% average increase in website traffic, 2x lead growth through Facebook Ads, and an average 200% return on investment for clients across multiple industries in India.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-transparent py-24 relative overflow-hidden border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 reveal-element-scale">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Ready to Grow Your Business? Let’s Talk.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">Whether you’re a local business in Rajkot looking to grow online, or a company across India ready to scale — we’d love to start with a conversation. Tell us about your goals, and we’ll show you exactly how Deckoid Solution can help you get there.</p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-midnight bg-lavender rounded-full shadow-lg transition-transform hover:scale-103 active:scale-98">Get Free Consultation <FaChevronRight className="text-xs" /></Link>
          </div>
        </div>
      </section>

    </div>
  );
}
