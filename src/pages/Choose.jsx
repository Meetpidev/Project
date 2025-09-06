import { CTASubscribe, CTAWorkTogether } from "../components/FeaturedLogos";
import { useState, useEffect } from "react";

export default function Choose() {
  const features = [
    {
      title: "Fortune 15 clientele",
      description: "Effective solutions with delivering satisfactory outcomes has enabled us to add fortune 10-15 clients to our list."
    },
    {
      title: "Clients Presence",
      description: "Clients in more than 15 countries across the globe are advocates of Kryzen's deliverability, quality, and production."
    },
    {
      title: "Since 2024!",
      description: "Having presence in market for more than 2 years and still counting. Choosing us benefits you by getting your product deployed under expert technicians as per your expectations."
    },
    {
      title: "No Hidden Costs",
      description: "Pay for the service you get and nothing else. Kryzen has a strict policy of avoiding any additional charges and takes payment once the work is completely done."
    },
    {
      title: "Free Guidance",
      description: "New to web or app development? Please feel free to ask for any guidance or consultation—Kryzen provides it completely free of charge."
    },
    {
      title: "Trust",
      description: "Hire Kryzen and get secured. Hand over your worries to a 2+ years."
    },
    {
      title: "Domain Expertise",
      description: "Continuously evolving—offering technologies such as Flutter, React Native, ML, React JS, Node JS, etc."
    },
    {
      title: "Secured & Safe",
      description: "We sign NDAs and implement essential steps to protect sensitive project data on high-security systems."
    },
    {
      title: "Easy Handover",
      description: "Honest enough to say “Not a good fit for you”? We provide complete KT (Knowledge Transfer) for a smooth exit process."
    },
    {
      title: "Enterprise Apps",
      description: "Expertise not only in on-demand apps, but also ERP, CRM, SaaS products."
    },
    {
      title: "Problem Solving",
      description: "We help not just with code but with roadmaps, providing client-centric solutions."
    },
    {
      title: "Strategy Development",
      description: "Agile methodology with precise development and post-launch client retention strategies—helping us maintain 100% client retention."
    },
    {
      title: "Flexible Availability",
      description: "40 hours per week, 8 hours per day. Available on weekends for urgent deliveries (with advance notice). Dedicated updates and daily progress reporting."
    },
    {
      title: "Cost Optimization",
      description: "Hire a team at the cost of a single individual. Hourly rates vary depending on developer complexity."
    },
    {
      title: "Timely Delivery",
      description: "Proven track record of on-time delivery. Deadline established early, including buffer for debugging and training—offering a clear roadmap before you award the project."
    },
    {
      title: "Testing Prototypes",
      description: "Multiple testing layers: unit testing, prototype testing, UI/UX testing, and deployment testing."
    },
    {
      title: "English Proficiency",
      description: "No language barrier. Our team—from Sales to Support—is trained in proficient English for seamless communication."
    },
    {
      title: "Always In Touch",
      description: "We believe in staying connected with clients, partners, and prospects to build strong relationships."
    },
    {
      title: "Innovation",
      description: "Innovation is the birth of new invention. We incorporate modern and precise touches into your project/product."
    },
    {
      title: "Support Help",
      description: "Relationships extend beyond development—long-term support and maintenance included."
    },
    {
      title: "Flexibility",
      description: "Work across different time zones to suit your schedule."
    },
    {
      title: "Support & Maintenance",
      description: "Written commitments to provide configuration, orientation, customization, maintenance, and backup services."
    },
    {
      title: "Application Ownership",
      description: "We are white-label providers. All graphics, source code, and related content belong to you for future scaling or upgrades."
    },
    {
      title: "Clear Communication",
      description: "Our developers are proactive communicators—offering suggestions, problem-solving, and transparent updates."
    },
    {
      title: "Quality Assurance",
      description: "QA begins as soon as code is ready—not just at the end of the project."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change feature every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Handlers for manual navigation
  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  return (
    <>
    <section className="bg-blue-50 md:py-17 md:mt-30 px-2 md:px-7 mt-30 py-10">
      {/* Top Split Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-14">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Why Choose Us?</h2>
          <p className="mb-3 text-gray-600">
            We understand the seriousness of your project, and here are the few reasons that why should you join the Kryzen club and get added to the list of 15+ clients who have been trusting us since 2 decades.
          </p>
          <a href="#contact" className="inline-block mt-4 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-900 transition-all">
            Connect Now <span className="ml-2">&#8594;</span>
          </a>
        </div>
        {/* Right Image */}
        <div className="max-w-md md:max-w-lg w-full mx-auto flex-shrink-0 flex justify-center">
          <img
            src="https://lh3.googleusercontent.com/proxy/EOMSqj1pCzJnP0aXqfhk4J2PFCTzJh4F0DoXO3qNwJBInJMD1KHmPkIiiUIpknI7PmenxKKGi1QRNCGiuwprGg"
            alt="Why Choose Us"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      </section>

      <section className="mt-13 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Why Kryzen?</h2>
        <p className="text-center text-gray-500 mb-10">Reasons why our clients keep coming back to us:</p>

        {/* For large screens: show grid as before */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-blue-50 px-6 py-8 flex flex-col justify-between min-h-[170px]">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* For small/medium screens: show one feature at a time with arrows */}
        <div className="lg:hidden bg-white rounded-2xl shadow-sm border border-blue-50 px-6 py-8 flex flex-col justify-between min-h-[170px] max-w-md mx-auto">
          <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">{features[currentIndex].title}</h3>
          <p className="text-gray-600 text-sm text-center mb-6">{features[currentIndex].description}</p>
          <div className="flex justify-center gap-6">
            <button
              onClick={prevFeature}
              aria-label="Previous feature"
              className="bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900 transition"
            >
              &#8592;
            </button>
            <button
              onClick={nextFeature}
              aria-label="Next feature"
              className="bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900 transition"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>
      
      <section>
        <CTAWorkTogether />
        <CTASubscribe />
      </section>
      </>
  );
}
