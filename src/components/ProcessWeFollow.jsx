import React, { useState, useEffect } from "react";

const processSteps = [
  // ... your processSteps array as before ...
  {
    title: "Requirement Gathering",
    desc: "Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.",
    step: "01",
    color: "bg-[#e4dcfa]",
    icon: (
      <svg className="w-8 h-8 text-purple-600 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" /></svg>
    ),
  },
  {
    title: "Designs, Wireframes, & Mockups",
    desc: "We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.",
    step: "02",
    color: "bg-[#cdf3fa]",
    icon: (
      <svg className="w-8 h-8 text-sky-600 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M16 3v5"/></svg>
    ),
  },
  {
    title: "Prototype Demo",
    desc: "After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.",
    step: "03",
    color: "bg-[#ffe7e0]",
    icon: (
      <svg className="w-8 h-8 text-orange-400 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6"/></svg>
    ),
  },
  {
    title: "Changes And Confirmation",
    desc: "Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same.",
    step: "04",
    color: "bg-[#fdf3d6]",
    icon: (
      <svg className="w-8 h-8 text-yellow-500 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 4v6h6M20 20v-6h-6"/></svg>
    ),
  },
  {
    title: "Development",
    desc: "With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as committed by our technical team.",
    step: "05",
    color: "bg-[#ffe7f5]",
    icon: (
      <svg className="w-8 h-8 text-pink-400 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 14l2-2 2 2"/></svg>
    ),
  },
  {
    title: "Deployment",
    desc: "We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in client’s platform.",
    step: "06",
    color: "bg-[#e6fae4]",
    icon: (
      <svg className="w-8 h-8 text-green-500 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
    ),
  },
  {
    title: "Support And Maintenance",
    desc: "We provide free service and support as per decided terms in our agreement. We also provide packages further monthly or yearly based on your requirement.",
    step: "07",
    color: "bg-[#f5e4fa]",
    icon: (
      <svg className="w-8 h-8 text-purple-400 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M18 15a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"/><path d="M12 9v2l2 1"/></svg>
    ),
  },
  {
    title: "SEO",
    desc: "We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing them a help hand to market their product/business.",
    step: "08",
    color: "bg-[#fafad6]",
    icon: (
      <svg className="w-8 h-8 text-yellow-400 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M8 16h8"/></svg>
    ),
  },
];

export default function ProcessWeFollow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSmallOrMedium, setIsSmallOrMedium] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallOrMedium(window.innerWidth < 1024); // Tailwind lg breakpoint
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isSmallOrMedium) return; // Only auto-advance on small/medium
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev === processSteps.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isSmallOrMedium]);

  const prevStep = () => {
    setCurrentStep(prev => (prev === 0 ? processSteps.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setCurrentStep(prev => (prev === processSteps.length - 1 ? 0 : prev + 1));
  };

  if (isSmallOrMedium) {
    // Carousel mode single card
    const step = processSteps[currentStep];
    return (
      <div className="px-4 py-12 bg-white max-w-md mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Process We Follow</h2>

        <div className={`${step.color} rounded-2xl p-6 shadow flex flex-col h-full text-center`}>
          <div className="flex justify-center">{step.icon}</div>
          <div className="font-bold mt-2 text-xl">{step.title}</div>
          <p className="mt-2 text-gray-700 text-base">{step.desc}</p>
          <div className="text-black-300 text-5xl font-bold mt-auto self-center">{step.step}</div>
        </div>

        <div className="flex justify-center gap-10 mt-8">
          <button
            aria-label="Previous step"
            onClick={prevStep}
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            aria-label="Next step"
            onClick={nextStep}
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // Grid mode for large devices
  return (
    <div className="px-4 py-12 bg-white max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-5">Process We Follow</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        {processSteps.slice(0, 4).map((step) => (
          <div key={step.title} className={`${step.color} rounded-2xl p-6 shadow flex flex-col h-full`}>
            <div>{step.icon}</div>
            <div className="font-bold mt-2">{step.title}</div>
            <p className="mt-1 text-gray-700 text-[15px]">{step.desc}</p>
            <div className="text-black-300 text-4xl font-bold mt-auto self-end">{step.step}</div>
          </div>
        ))}
      </div>

      {/* Timeline dots and lines */}
      <div className="flex justify-center w-full mb-10">
        <div className="w-[90%] h-12 flex items-center relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative z-10 flex-1 flex justify-center">
              <span
                className="block w-5 h-5 rounded-full border-4 border-white"
                style={{
                  background:
                    i === 0
                      ? "#b2a1fa"
                      : i === 1
                      ? "#7fdff3"
                      : i === 2
                      ? "#ffb997"
                      : i === 3
                      ? "#ffecab"
                      : i === 4
                      ? "#fcbce9"
                      : i === 5
                      ? "#a5efba"
                      : i === 6
                      ? "#dbc0fa"
                      : "#eceea6",
                  boxShadow: "0 2px 8px 0 rgba(44,62,80,.08)",
                }}
              ></span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {processSteps.slice(4).map((step) => (
          <div key={step.title} className={`${step.color} rounded-2xl p-6 shadow flex flex-col h-full`}>
            <div>{step.icon}</div>
            <div className="font-bold mt-2">{step.title}</div>
            <p className="mt-1 text-gray-700 text-[15px]">{step.desc}</p>
            <div className="text-black-300 text-4xl font-bold mt-auto self-end">{step.step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
