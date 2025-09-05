import React, { useState, useEffect } from "react";

const PREMIUM_SERVICES = [
  {
    name: "Mobile App Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Software Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Web Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: ".NET Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Flutter App Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "PHP Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Hire Dedicated Developers",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Mern Stack Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Full Stack Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Laravel Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
];

export default function PremiumServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallOrMedium, setIsSmallOrMedium] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallOrMedium(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isSmallOrMedium) return;
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === PREMIUM_SERVICES.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);
    return () => clearInterval(intervalId);
  }, [isSmallOrMedium]);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PREMIUM_SERVICES.length - 1 : prevIndex - 1,
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PREMIUM_SERVICES.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (isSmallOrMedium) {
    const service = PREMIUM_SERVICES[currentIndex];
    return (
      <section className="bg-[#056288] py-12 px-4 w-full min-h-[80vh] flex flex-col items-center">
        <h2 className="text-white text-4xl font-bold text-center mb-4 w-full max-w-screen-lg">
          Our Premium Services
        </h2>
        <p className="text-white text-center text-lg mb-10 max-w-screen-lg px-2">
          As a certified IT company, Sapphire helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!
        </p>

        <div className="bg-white rounded-2xl px-6 py-8 flex flex-col items-center shadow-md transition-transform hover:scale-105 w-full max-w-screen-md">
          <img src={service.icon} alt={service.name} className="h-16 w-16 mb-4" loading="lazy" decoding="async" />
          <p className="text-gray-900 text-xl font-semibold text-center">{service.name}</p>
        </div>

        <div className="flex justify-center gap-6 mt-8 w-full max-w-screen-md">
          <button onClick={prev} aria-label="Previous service" className="bg-white p-3 rounded-full hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#056288]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={next} aria-label="Next service" className="bg-white p-3 rounded-full hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#056288]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#056288] py-12 px-4 w-full min-h-[84vh] flex flex-col items-center">
      <h2 className="text-white text-4xl font-bold text-center mb-4 w-full max-w-screen-lg">
        Our Premium Services
      </h2>
      <p className="text-white text-center text-lg mb-10 max-w-screen-lg px-2">
        As a certified IT company, Sapphire helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-[76rem]">
        {PREMIUM_SERVICES.map((service) => (
          <div key={service.name} className="bg-white rounded-2xl px-6 py-6 flex flex-col items-center shadow-md">
            <img src={service.icon} alt={service.name} className="h-12 w-12 mb-3" />
            <p className="text-gray-900 text-lg font-semibold text-center">{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
