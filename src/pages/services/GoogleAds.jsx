import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function GoogleAds() {
  const faq = [
    {
      question: "What types of Google Ads campaigns does Deckoid Solution run?",
      answer: "We run Search, Display, YouTube, and Shopping Ads campaigns with AI-assisted audience targeting, conversion optimisation, and transparent reporting."
    },
    {
      question: "How does Google Ads help my business in Rajkot?",
      answer: "Google Ads helps your business appear exactly when customers search for what you offer, generating high-intent leads and measurable sales growth across local and national markets."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": { "@type": "Answer", "text": q.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deckoid.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.deckoid.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.deckoid.com/services/google-ads" }
    ]
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Google Ads | Deckoid Solution, Rajkot</title>
        <meta name="description" content="Reach customers with Google Search, Display, YouTube and Shopping Ads. Deckoid Solution builds AI-assisted ad campaigns that maximise return on every rupee spent." />
        <link rel="canonical" href="https://www.deckoid.com/services/google-ads" />
        <meta property="og:title" content="Google Ads | Deckoid Solution" />
        <meta property="og:description" content="Reach customers with Google Search, Display, YouTube and Shopping Ads. Deckoid Solution builds AI-assisted ad campaigns that maximise return on every rupee spent." />
        <meta property="og:url" content="https://www.deckoid.com/services/google-ads" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="bg-transparent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4">
            <Link to="/" className="text-gray-600 hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="text-gray-600 hover:underline">Services</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">Google Ads</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Google Ads</h1>
          <p className="text-sm text-gray-600 mt-4">Reach customers the moment they search for what you offer. Deckoid Solution runs high-performance Google Search, Display, YouTube, and Shopping Ads campaigns — AI-assisted targeting, optimised bidding, and transparent reporting to maximise your return on every rupee spent.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg">What We Deliver</h3>
              <p className="text-sm text-gray-600 mt-2">We build every campaign around your business goals, whether you want leads, sales, bookings, or brand awareness. Our focus is high-intent traffic, efficient spend, and measurable ROI.</p>

              <h4 className="mt-6 font-semibold">Benefits</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>Instant visibility to ready-to-buy customers</li>
                <li>AI-assisted audience and keyword optimisation</li>
                <li>Performance tracking with transparent reporting</li>
                <li>Local and national campaign optimisation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Our Google Ads Process</h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>Campaign strategy & goal alignment</li>
                <li>Keyword research and audience definition</li>
                <li>Ad creative, extensions, and landing page review</li>
                <li>Bid management, tracking, and optimisation</li>
                <li>Weekly reporting with conversion insights</li>
              </ol>

              <h4 className="mt-6 font-semibold">Ideal For</h4>
              <p className="text-sm text-gray-600 mt-2">Retail, education, healthcare, real estate, manufacturing, hospitality, eCommerce, and service businesses that need faster lead flow from search and video channels.</p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-bold">Industries Served</h4>
            <p className="text-sm text-gray-600 mt-2">Local businesses in Rajkot, Gujarat and India that want measurable search and display performance from Google Ads.</p>
          </div>

          <div className="mt-10">
            <h4 className="font-bold">Frequently Asked Questions</h4>
            <div className="mt-3 space-y-2 text-sm text-gray-600">
              {faq.map((q, idx) => (
                <details key={idx} className="p-4 glass-card border border-gray-200 rounded-2xl">
                  <summary className="font-semibold">{q.question}</summary>
                  <p className="mt-2">{q.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <h4 className="text-xl font-bold">Ready to get Google Ads working for your business?</h4>
            <p className="text-sm text-gray-600 mt-2">Contact Deckoid Solution for a custom Google Ads plan built around your goals.</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-midnight font-bold rounded-full">Get Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
