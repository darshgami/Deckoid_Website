import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function FacebookAds() {
  const faq = [
    { question: 'What objectives can your Facebook & Instagram Ads campaigns achieve?', answer: 'We design campaigns for leads, sales, traffic, and brand awareness depending on your goals.' },
    { question: 'Do you handle creative and copy for ads?', answer: 'Yes — we produce ad creatives, copy, and landing pages as part of our ad campaigns.' }
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deckoid.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.deckoid.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Facebook & Instagram Ads", "item": "https://www.deckoid.com/services/facebook-ads" }
    ]
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Facebook & Instagram Ads | Deckoid Solution, Rajkot</title>
        <meta name="description" content="AI-powered Facebook and Instagram Ads campaigns that focus on conversions — precise targeting, compelling creatives, and continuous optimisation for measurable ROI." />
        <link rel="canonical" href="https://www.deckoid.com/services/facebook-ads" />
        <meta property="og:title" content="Facebook & Instagram Ads | Deckoid Solution" />
        <meta property="og:description" content="AI-powered Facebook and Instagram Ads campaigns that focus on conversions — precise targeting, compelling creatives, and continuous optimisation for measurable ROI." />
        <meta property="og:url" content="https://www.deckoid.com/services/facebook-ads" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <section className="bg-transparent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4">
            <Link to="/" className="text-gray-600 hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="text-gray-600 hover:underline">Services</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">Facebook & Instagram Ads</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Facebook & Instagram Ads</h1>
          <p className="text-sm text-gray-600 mt-4">Stop spending on ads that don't convert. Our AI-powered Facebook and Instagram Ads campaigns are built around your goals — whether that's leads, sales, or brand awareness. Precise targeting, compelling creatives, and continuous optimisation to deliver real ROI.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg">Service Overview</h3>
              <p className="text-sm text-gray-600 mt-2">We setup conversion-focused campaigns, creatives, tracking and landing pages to maximise ROI while continuously optimising via data-driven insights.</p>

              <h4 className="mt-6 font-semibold">Benefits</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                <li>Higher-converting, goal-oriented campaigns</li>
                <li>AI-driven audience discovery and split-testing</li>
                <li>Creative production and copywriting</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Our Process</h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
                <li>Campaign strategy and funnel design</li>
                <li>Creative & landing page production</li>
                <li>Audience testing & optimisation</li>
                <li>Scaling and conversion tracking</li>
              </ol>

              <h4 className="mt-6 font-semibold">Why Choose Deckoid Solution</h4>
              <p className="text-sm text-gray-600 mt-2">We focus on measurable results and ROI, combining creative excellence with data-driven optimisation.</p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-bold">Industries Served</h4>
            <p className="text-sm text-gray-600 mt-2">Retail, Education, Travel, Real Estate, Healthcare, FMCG, IT, Manufacturing and more.</p>
          </div>

          <div className="mt-10">
            <h4 className="font-bold">FAQ</h4>
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
            <h4 className="text-xl font-bold">Ready to get better ROI from ads?</h4>
            <p className="text-sm text-gray-600 mt-2">Contact us for a paid ads strategy session.</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-midnight font-bold rounded-full">Get Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
