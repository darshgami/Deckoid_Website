import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function SocialMediaManagement() {
  const faq = [
    { question: 'What platforms do you manage?', answer: 'We manage Instagram, Facebook, and LinkedIn primarily, tailoring content to each platform.' },
    { question: 'Do you provide content calendars?', answer: 'Yes — each client receives a monthly content calendar and post assets for approval.' }
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deckoid.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.deckoid.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Social Media Management", "item": "https://www.deckoid.com/services/social-media-management" }
    ]
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Social Media Management | Deckoid Solution, Rajkot</title>
        <meta name="description" content="Full-service social media management — strategy, content creation, scheduling and community engagement for Instagram, Facebook and LinkedIn. Serving Rajkot, Gujarat & India." />
        <link rel="canonical" href="https://www.deckoid.com/services/social-media-management" />
        <meta property="og:title" content="Social Media Management | Deckoid Solution" />
        <meta property="og:description" content="Full-service social media management — strategy, content creation, scheduling and community engagement for Instagram, Facebook and LinkedIn. Serving Rajkot, Gujarat & India." />
        <meta property="og:url" content="https://www.deckoid.com/services/social-media-management" />
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
            <span className="font-semibold">Social Media Management</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Social Media Management</h1>
          <p className="text-sm text-gray-600 mt-4">Your brand's social media presence, fully managed. From strategy and content creation to scheduling, posting, and community engagement — we handle everything so your brand stays consistent, active, and growing on Instagram, Facebook, and LinkedIn.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg">Service Overview</h3>
              <p className="text-sm text-gray-600 mt-2">We create a consistent content strategy, produce assets, schedule posts, and manage community interactions to grow your brand presence and engagement.</p>

              <h4 className="mt-6 font-semibold">Benefits</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                <li>Consistent brand voice and visual identity</li>
                <li>Higher engagement and follower growth</li>
                <li>Data-driven posting schedules</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Our Process</h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
                <li>Strategy & content planning</li>
                <li>Creative production & scheduling</li>
                <li>Community management & reporting</li>
              </ol>

              <h4 className="mt-6 font-semibold">Why Choose Deckoid Solution</h4>
              <p className="text-sm text-gray-600 mt-2">We combine creative excellence, AI-assisted scheduling and performance analytics to maximise reach and engagement.</p>
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
            <h4 className="text-xl font-bold">Ready for a consistent social presence?</h4>
            <p className="text-sm text-gray-600 mt-2">Contact us for a social media strategy and content plan.</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-midnight font-bold rounded-full">Get Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
