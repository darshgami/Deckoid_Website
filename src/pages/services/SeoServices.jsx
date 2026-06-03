import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function SeoServices() {
  const faq = [
    {
      question: "What is included in Deckoid Solution's SEO service?",
      answer: "Our SEO service includes AI-assisted keyword research, on-page optimisation, technical SEO auditing, local SEO, content strategy, and monthly reporting to track improvements."
    },
    {
      question: "How long does SEO take to show results?",
      answer: "SEO is a medium-to-long term investment. You may see initial improvements within 3 months, with more significant, sustained results between 6-12 months depending on competition and website condition."
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
      { "@type": "ListItem", "position": 3, "name": "SEO — Search Engine Optimisation", "item": "https://www.deckoid.com/services/seo-services" }
    ]
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>SEO — Search Engine Optimisation | Deckoid Solution, Rajkot</title>
        <meta name="description" content="Get your business found on Google with Deckoid Solution's AI-assisted SEO services — local SEO, technical SEO, on-page optimisation and keyword strategy for Rajkot and India." />
        <link rel="canonical" href="https://www.deckoid.com/services/seo-services" />
        <meta property="og:title" content="SEO — Search Engine Optimisation | Deckoid Solution" />
        <meta property="og:description" content="Get your business found on Google with Deckoid Solution's AI-assisted SEO services — local SEO, technical SEO, on-page optimisation and keyword strategy for Rajkot and India." />
        <meta property="og:url" content="https://www.deckoid.com/services/seo-services" />
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
            <span className="font-semibold">SEO — Search Engine Optimisation</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">SEO — Search Engine Optimisation</h1>
          <p className="text-sm text-gray-600 mt-4">Get your business found on Google by customers who are actively searching for what you offer. We use AI-assisted keyword research, on-page optimisation, technical SEO, and local SEO to increase your organic rankings and drive qualified traffic — in Rajkot, Gujarat, and across India.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg">Service Overview</h3>
              <p className="text-sm text-gray-600 mt-2">We audit your site, fix technical issues, create a content plan, and optimise pages to rank for high-intent queries. Our approach blends proven SEO fundamentals with AI-driven insights for faster impact.</p>

              <h4 className="mt-6 font-semibold">Benefits</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                <li>Increase organic visibility and qualified traffic</li>
                <li>Better local presence for Rajkot customers</li>
                <li>Data-driven content targeting</li>
                <li>Long-term sustainable growth</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Our Process</h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
                <li>Technical SEO audit & fixes</li>
                <li>Keyword strategy & content plan</li>
                <li>On-page optimisation & schema</li>
                <li>Local SEO & citations</li>
                <li>Monitoring, reporting & refinement</li>
              </ol>

              <h4 className="mt-6 font-semibold">Why Choose Deckoid Solution</h4>
              <p className="text-sm text-gray-600 mt-2">We combine local market experience in Rajkot with AI-assisted research to produce SEO strategies that drive measurable business outcomes.</p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-bold">Industries Served</h4>
            <p className="text-sm text-gray-600 mt-2">Real Estate, Education, Fashion, Jewellery, Health, Travel, Retail, Manufacturing, Agriculture, Chemicals, Dental Clinics, Food & Beverage, Construction, IT & Technology, Organic Products, Pet Care.</p>
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
            <h4 className="text-xl font-bold">Ready to rank higher on Google?</h4>
            <p className="text-sm text-gray-600 mt-2">Contact us for a free SEO consultation.</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-midnight font-bold rounded-full">Get Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
