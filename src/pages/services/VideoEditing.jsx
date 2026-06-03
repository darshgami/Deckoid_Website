import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function VideoEditing() {
  const faq = [
    { question: 'Do you shoot video or only edit?', answer: 'We can edit your footage or create AI-powered videos from assets without a camera crew.' },
    { question: 'What formats do you deliver?', answer: 'We deliver social-ready formats (reels, shorts), web videos, and full HD/4K masters as needed.' }
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.deckoid.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.deckoid.com/services" },
      { "@type": "ListItem", "position": 3, "name": "AI Video Creation & Video Editing", "item": "https://www.deckoid.com/services/video-editing" }
    ]
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>AI Video Creation & Video Editing | Deckoid Solution, Rajkot</title>
        <meta name="description" content="Professional video content — traditional editing or AI-powered video creation from scratch. Reels, brand videos, explainer videos, product showcases and more." />
        <link rel="canonical" href="https://www.deckoid.com/services/video-editing" />
        <meta property="og:title" content="AI Video Creation & Video Editing | Deckoid Solution" />
        <meta property="og:description" content="Professional video content — traditional editing or AI-powered video creation from scratch. Reels, brand videos, explainer videos, product showcases and more." />
        <meta property="og:url" content="https://www.deckoid.com/services/video-editing" />
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
            <span className="font-semibold">AI Video Creation & Video Editing</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">AI Video Creation & Video Editing</h1>
          <p className="text-sm text-gray-600 mt-4">Professional video content — with or without a camera crew. We offer traditional video editing for your existing footage and AI-powered video creation from scratch. Reels, brand videos, explainer videos, product showcases, and more. Faster. More cost-effective. Same professional quality.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg">Service Overview</h3>
              <p className="text-sm text-gray-600 mt-2">We edit raw footage, produce social-ready formats, and can create videos using AI workflows for fast turnarounds and lower costs.</p>

              <h4 className="mt-6 font-semibold">Benefits</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                <li>Fast, professional video production</li>
                <li>AI-assisted editing for speed and consistency</li>
                <li>Formats optimised for every platform</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Our Process</h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
                <li>Footage review or asset intake</li>
                <li>Edit pass & creative direction</li>
                <li>Final deliverables & format variations</li>
              </ol>

              <h4 className="mt-6 font-semibold">Why Choose Deckoid Solution</h4>
              <p className="text-sm text-gray-600 mt-2">We combine creative storytelling with AI-assisted workflows to deliver professional results faster and at lower cost.</p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-bold">Industries Served</h4>
            <p className="text-sm text-gray-600 mt-2">Retail, FMCG, Education, Healthcare, Travel, Real Estate, IT and more.</p>
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
            <h4 className="text-xl font-bold">Ready to produce video content?</h4>
            <p className="text-sm text-gray-600 mt-2">Contact us for a video strategy and quote.</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-lavender text-midnight font-bold rounded-full">Get Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
