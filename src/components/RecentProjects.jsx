import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "AI Chatbot App Development",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iadB5s2GUAeIHFP3TZ4yQ6H8qW7StYUfZQ&s",
  },
  {
    title: "AI Traffic Management System",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSieUJ63AeJyxLUFjKlN9ta9nIWFH_XRtZFGg&s",
  },
  {
    title: "Real Estate App Development",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s",
  },
  {
    title: "AI Travel App Development",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5fNmRjj7k4jn17nO9Pf9_9F5ZOkUSWQ_Qw&s",
  },
  {
    title: "On Demand AI Recruitment",
    img: "https://appinventiv.com/wp-content/uploads/2024/07/how_artificial_intelligence_is_revolutionizing_talent_sourcing_and_hiring.webp",
  },
  {
    title: "Car Rental App Development",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTE5CkWsFz6VtMgi6UrTPhJPmdLC4xGcu1QQ&s",
  },
];

export default function RecentProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallOrMedium, setIsSmallOrMedium] = useState(false);

  useEffect(() => {
    function checkScreen() {
      setIsSmallOrMedium(window.innerWidth < 1024); // Tailwind lg breakpoint at 1024px
    }
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isSmallOrMedium) return; // no carousel auto-advance on large screens
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isSmallOrMedium]);

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isSmallOrMedium) {
    const project = projects[currentIndex];
    return (
      <div className="bg-white py-8 px-4 w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          Our Recent Projects
        </h2>
        <p className="text-center text-gray-500 max-w-full mx-auto mb-10 px-2 sm:px-0">
          Presenting the wide range of solutions that we have successfully delivered to our clients with the high-quality standard
        </p>

        <div className="relative max-w-full mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center transition-transform transform hover:-translate-y-1 hover:shadow-xl w-full">
            <img
              src={project.img}
              alt={project.title}
              className="w-full object-cover h-64 sm:h-72 md:h-80 rounded-t-2xl"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-1 flex items-end justify-center py-4 w-full">
              <div className="bg-white px-6 py-2 rounded-xl shadow-lg -mt-10 font-semibold text-lg text-center max-w-full mx-auto">
                {project.title}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={prevProject}
              aria-label="Previous project"
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition"
            >
              {/* SVG left arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextProject}
              aria-label="Next project"
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition"
            >
              {/* SVG right arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Large screen grid - full width with padding
  return (
    <div className="bg-white py-8 px-4 md:px-8 lg:px-12 w-full">
      <h2 className="text-4xl font-bold text-center mb-6 w-full">Our Recent Projects</h2>
      <p className="text-center text-gray-500 w-full mb-12">
        Presenting the wide range of solutions that we have successfully delivered to our clients with the high-quality standard
      </p>
      <div className="grid grid-cols-3 gap-8 w-full">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center w-full"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full object-cover h-64 md:h-60 lg:h-64"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-1 flex items-end justify-center py-4 w-full">
              <div className="bg-white px-6 py-2 rounded-xl shadow-lg -mt-10 font-semibold text-lg text-center max-w-full mx-auto">
                {proj.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
