import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function WebsiteDesign() {
  const faq = [
    { question: 'Do you build e-commerce sites?', answer: 'Yes — we build e-commerce stores as well as marketing landing pages and custom web apps.' },
    { question: 'Are your websites SEO-ready?', answer: 'All sites are built with performance and SEO best-practices in mind.' }
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deckoid.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.deckoid.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Website Design & Development", "item": "https://www.deckoid.com/services/website-design" }
    ]
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Website Design & Development | Deckoid Solution, Rajkot</title>
        <meta name="description" content="Fast, mobile-responsive, SEO-ready website design and development — from business websites and landing pages to e-commerce and custom builds." />
        <link rel="canonical" href="https://www.deckoid.com/services/website-design" />
        <meta property="og:title" content="Website Design & Development | Deckoid Solution" />
        <meta property="og:description" content="Fast, mobile-responsive, SEO-ready website design and development — from business websites and landing pages to e-commerce and custom builds." />
        <meta property="og:url" content="https://www.deckoid.com/services/website-design" />
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
            <span className="font-semibold">Website Design & Development</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Website Design & Development</h1>
          <p className="text-sm text-gray-600 mt-4">A website that looks exceptional and performs even better. We design and build fast, mobile-responsive, SEO-ready websites — from business websites and landing pages to e-commerce stores and custom builds. Every site is built to convert visitors into customers.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg">Service Overview</h3>
              <p className="text-sm text-gray-600 mt-2">We design conversion-first UX, implement performant builds, and ensure accessibility and SEO readiness.</p>

              <h4 className="mt-6 font-semibold">Benefits</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                <li>Fast-loading mobile-responsive sites</li>
                <li>Conversion-driven design</li>
                <li>SEO & performance optimisations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Our Process</h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
                <li>Discovery & sitemap</li>
                <li>Wireframes & design</li>
                <li>Development & optimisation</li>
                <li>QA, launch & monitoring</li>
              </ol>

              <h4 className="mt-6 font-semibold">Why Choose Deckoid Solution</h4>
              <p className="text-sm text-gray-600 mt-2">We marry design with performance: beautiful interfaces that load fast and convert.</p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-bold">Industries Served</h4>
            <p className="text-sm text-gray-600 mt-2">E-commerce, Real Estate, Education, Healthcare, Manufacturing, Travel, Retail, and more.</p>
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
            <h4 className="text-xl font-bold">Ready to build a website that converts?</h4>
            <p className="text-sm text-gray-600 mt-2">Contact us for a website strategy and quote.</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-midnight font-bold rounded-full">Get Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
