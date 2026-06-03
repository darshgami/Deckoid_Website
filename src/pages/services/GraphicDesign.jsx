import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function GraphicDesign() {
  const faq = [
    { question: 'What graphic design services do you offer?', answer: 'Logos, brand identity, social creatives, packaging, brochures and print collateral.' },
    { question: 'Can you follow existing brand guidelines?', answer: 'Yes — we work with your brand handbook or create one if needed.' }
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deckoid.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.deckoid.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Graphic Design", "item": "https://www.deckoid.com/services/graphic-design" }
    ]
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Graphic Design | Deckoid Solution, Rajkot</title>
        <meta name="description" content="Design that makes your brand impossible to ignore — logos, brand identity, social creatives, marketing materials, and packaging." />
        <link rel="canonical" href="https://www.deckoid.com/services/graphic-design" />
        <meta property="og:title" content="Graphic Design | Deckoid Solution" />
        <meta property="og:description" content="Design that makes your brand impossible to ignore — logos, brand identity, social creatives, marketing materials, and packaging." />
        <meta property="og:url" content="https://www.deckoid.com/services/graphic-design" />
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
            <span className="font-semibold">Graphic Design</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Graphic Design</h1>
          <p className="text-sm text-gray-600 mt-4">Design that makes your brand impossible to ignore. From logos and brand identity to social media creatives, marketing materials, and packaging — our in-house design team delivers brand-aligned visuals that communicate your value and build recognition.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg">Service Overview</h3>
              <p className="text-sm text-gray-600 mt-2">We craft visual systems that scale across digital and print, ensuring consistency and recognisability across every touchpoint.</p>

              <h4 className="mt-6 font-semibold">Benefits</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                <li>Clear brand identity and visual language</li>
                <li>Faster creative turnaround with quality</li>
                <li>Assets ready for web and print</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Our Process</h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
                <li>Discovery & moodboarding</li>
                <li>Design iterations & approvals</li>
                <li>Delivery of final assets & variations</li>
              </ol>

              <h4 className="mt-6 font-semibold">Why Choose Deckoid Solution</h4>
              <p className="text-sm text-gray-600 mt-2">We combine brand thinking with execution speed to deliver designs that perform across digital marketing channels.</p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-bold">Industries Served</h4>
            <p className="text-sm text-gray-600 mt-2">Retail, Fashion, FMCG, Packaging, Real Estate, Education, Healthcare and more.</p>
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
            <h4 className="text-xl font-bold">Ready for a brand refresh?</h4>
            <p className="text-sm text-gray-600 mt-2">Contact us for a design audit and creative plan.</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-midnight font-bold rounded-full">Get Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
