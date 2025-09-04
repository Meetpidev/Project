import React from "react";

// Individual value proposition section with alternating image/content layout
function ValuePropositionSection({
  number,
  title,
  description,
  imageUrl,
  imageAlt,
  imageLeft,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
      <div className={`${imageLeft ? 'order-1 lg:order-1' : 'order-2 lg:order-2'} lg:w-1/2`}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="rounded-xl shadow-lg w-full max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300"
          data-testid={`img-${title.toLowerCase().replace(/\s+/g, '-')}`}
        />
      </div>
      <div className={`lg:w-1/2 ${imageLeft ? 'order-1 lg:order-2' : ''}`}>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg" data-testid={`number-${number}`}>
              {number}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900" data-testid={`title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h2>
        </div>
        <p className="text-lg text-gray-500 leading-relaxed" data-testid={`description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

// Main Choose page with value propositions and call-to-action
export default function Choose() {
  const valuePropositions = [
    {
      number: "01",
      title: "Client-Centric Approach",
      description: "Your success is our primary metric. We work collaboratively with you, acting as a true extension of your team to ensure the final product exceeds your expectations. Every decision we make is guided by your business goals and user needs.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Business team collaboration",
      imageLeft: true,
    },
    {
      number: "02",
      title: "Comprehensive Expertise",
      description: "As a one-stop digital agency, we offer a complete range of services, providing a single, reliable point of contact for all your technology needs. From strategy to implementation, we handle every aspect of your digital transformation journey.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Digital technology workspace",
      imageLeft: false,
    },
    {
      number: "03",
      title: "Commitment to Quality",
      description: "We adhere to the highest standards of quality assurance and testing throughout the development lifecycle to deliver flawless, bug-free solutions. Our rigorous testing protocols ensure every product meets enterprise-grade standards.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Quality assurance testing process",
      imageLeft: true,
    },
    {
      number: "04",
      title: "Agile Methodology",
      description: "We are flexible, adaptable, and transparent. Our agile development process allows for continuous feedback and iteration, ensuring the project stays on track and aligns with your evolving needs. Collaboration and communication are at the heart of everything we do.",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Agile development sprint planning",
      imageLeft: false,
    },
    {
      number: "05",
      title: "Future-Focused",
      description: "We stay ahead of technology trends to ensure the solutions we build are not just relevant today but are also scalable and ready for the challenges of tomorrow. Our forward-thinking approach future-proofs your digital investments.",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Future technology innovation",
      imageLeft: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white mt-32">
      <div className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" data-testid="title-main">
            Why Choose Our Digital Agency?
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed" data-testid="description-main">
            Discover the five core values that make us the trusted partner for over 1500+ clients across two decades of digital excellence.
          </p>
        </div>

        {/* Value Proposition Sections */}
        {valuePropositions.map((proposition, index) => (
          <ValuePropositionSection
            key={index}
            number={proposition.number}
            title={proposition.title}
            description={proposition.description}
            imageUrl={proposition.imageUrl}
            imageAlt={proposition.imageAlt}
            imageLeft={proposition.imageLeft}
          />
        ))}

        {/* Call to Action Section */}
        <div className="text-center bg-gray-100 rounded-2xl p-12 mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-4" data-testid="title-cta">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto" data-testid="description-cta">
            Join the 1500+ clients who have trusted us to deliver exceptional digital solutions for over two decades.
          </p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            data-testid="button-cta"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </div>
  );
}
