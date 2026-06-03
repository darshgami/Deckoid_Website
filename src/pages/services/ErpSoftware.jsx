import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ErpSoftware() {
  const faq = [
    {
      question: "What kinds of ERP systems does Deckoid Solution build?",
      answer: "We build customised ERP systems for inventory, billing, sales, HR, manufacturing, and retail operations with integrations and reporting tailored to your business."
    },
    {
      question: "How long does ERP development take?",
      answer: "ERP development timelines vary by scope, but our modular approach delivers core capabilities quickly and adds advanced workflows in phases for fast value delivery." 
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
      { "@type": "ListItem", "position": 3, "name": "Customized ERP Software", "item": "https://www.deckoid.com/services/erp-software" }
    ]
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Customized ERP Software | Deckoid Solution, Rajkot</title>
        <meta name="description" content="Get custom ERP software that automates operations, improves reporting, and puts data-driven control in your hands. Deckoid Solution builds ERP systems tailored to your business processes." />
        <link rel="canonical" href="https://www.deckoid.com/services/erp-software" />
        <meta property="og:title" content="Customized ERP Software | Deckoid Solution" />
        <meta property="og:description" content="Get custom ERP software that automates operations, improves reporting, and puts data-driven control in your hands. Deckoid Solution builds ERP systems tailored to your business processes." />
        <meta property="og:url" content="https://www.deckoid.com/services/erp-software" />
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
            <span className="font-semibold">Customized ERP Software</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Customized ERP Software</h1>
          <p className="text-sm text-gray-600 mt-4">We build customised ERP software to automate your workflows, streamline inventory and billing, and give you full operational visibility. Every system is designed around your processes so your business runs smarter, faster, and more reliably.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg">What We Deliver</h3>
              <p className="text-sm text-gray-600 mt-2">From requirements and architecture to development and integration, we deliver ERP systems that match the way your business works — not the other way around.</p>

              <h4 className="mt-6 font-semibold">Benefits</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>Automated inventory, sales, billing and operations</li>
                <li>Custom dashboards and real-time reporting</li>
                <li>Improved process control and reduced manual work</li>
                <li>Scalable systems built for Indian businesses</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Our ERP Development Process</h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>Process discovery and system planning</li>
                <li>Architecture, data model, and integrations</li>
                <li>Development with UX-driven interfaces</li>
                <li>Testing, training, and phased rollout</li>
                <li>Support, enhancements, and scaling</li>
              </ol>

              <h4 className="mt-6 font-semibold">Ideal For</h4>
              <p className="text-sm text-gray-600 mt-2">Manufacturing, distribution, retail, hospitality, education, and service businesses that need custom ERP software for operations, inventory, sales, and finance.</p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-bold">Industries Served</h4>
            <p className="text-sm text-gray-600 mt-2">Small and medium businesses across Gujarat and India looking for ERP systems tailored to their operational workflows.</p>
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
            <h4 className="text-xl font-bold">Ready to automate your business with a custom ERP?</h4>
            <p className="text-sm text-gray-600 mt-2">Talk to Deckoid Solution about ERP software that fits your exact operations.</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-midnight font-bold rounded-full">Get Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
