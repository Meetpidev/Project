import React, { useState, useEffect } from "react";

const models = [
  {
    title: "Fixed Price",
    desc: "This model is for projects with well-defined scope and requirements. When Clients know what they want and have fixed requirements, it works the best for small businesses and medium projects with limited or fixed budgets.",
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0z" />
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 17v.01M12 19a5 5 0 00-5 5h10a5 5 0 00-5-5z" />
      </svg>
    ),
    color: "text-purple-600",
  },
  {
    title: "Dedicated Hiring",
    desc: "For projects when clients want to have a full-time, dedicated team working on their projects. Works best for projects which require fast scaling or require expert developers to work on a long-term basis.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M7 7a4 4 0 118 0 4 4 0 01-8 0zM15 14a5 5 0 11-10 0v-1a5 5 0 0110 0v1z" />
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M17 17v-1a4 4 0 10-8 0v1m7-1a3 3 0 106 0v-1a3 3 0 00-6 0v1z" />
      </svg>
    ),
    color: "text-orange-500",
  },
  {
    title: "Time Material",
    desc: "For projects where requirements are dynamic and constantly changing, and scope is not clearly defined. Works the best for when clients need short-term consulting or want to build a proof of concepts.",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    ),
    color: "text-green-500",
  },
  {
    title: "Buckets Approach",
    desc: "A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M16 9V7a4 4 0 00-8 0v2a4 4 0 008 0zM12 17v.01" />
      </svg>
    ),
    color: "text-cyan-400",
  },
];

export default function EngagementModels() {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isSmallOrMedium, setIsSmallOrMedium] = useState(false);

  // useEffect(() => {
  //   const checkScreen = () => {
  //     setIsSmallOrMedium(window.innerWidth < 1024);
  //   };
  //   checkScreen();
  //   window.addEventListener("resize", checkScreen);
  //   return () => window.removeEventListener("resize", checkScreen);
  // }, []);

  // useEffect(() => {
  //   if (!isSmallOrMedium) return;
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [isSmallOrMedium]);

  // const prev = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? models.length - 1 : prev - 1));
  // };

  // const next = () => {
  //   setCurrentIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
  // };

  // if (isSmallOrMedium) {
  //   const model = models[currentIndex];
  //   return (
  //     <div className="bg-[#07688c] py-10 px-4 md:px-8 w-full min-h-screen flex flex-col items-center">
  //       <h2 className="text-4xl font-bold text-white mb-4">Our Engagement Models</h2>
  //       <p className="text-white max-w-3xl mx-auto mb-8 leading-relaxed px-2 md:px-0">
  //         At Sapphire, we provide full-cycle custom software development services to meet your financial requirements. Our software development team leverages their expertise in delivering process-oriented and high-performance software products for Cloud, Mobile, and Web.
  //       </p>

  //       {/* Single Service Card */}
  //       <div className="bg-white rounded-2xl px-6 py-8 flex flex-col items-center shadow-md transition-transform hover:scale-105">
  //         <img
  //           src={model.icon.props.src || undefined} // icons are svg React nodes so directly use icon component
  //           alt={model.name}
  //           className="h-16 w-16 mb-4"
  //           loading="lazy"
  //           decoding="async"
  //         />
  //         {/* Render icon node here */}
  //         <div>{model.icon}</div>
  //         <p className="text-gray-900 text-xl font-semibold text-center mt-2">{model.title}</p>
  //         <p className="text-gray-700 text-base mt-2">{model.desc}</p>
  //       </div>

  //       {/* Navigation Buttons */}
  //       <div className="flex justify-center gap-6 mt-8">
  //         <button onClick={prev} aria-label="Previous service" className="bg-white p-3 rounded-full hover:bg-gray-100 transition">
  //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#07688c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  //           </svg>
  //         </button>
  //         <button onClick={next} aria-label="Next service" className="bg-white p-3 rounded-full hover:bg-gray-100 transition">
  //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#07688c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  //           </svg>
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  // // Large screen grid
  // return (
  //   <div className="bg-[#07688c] py-10 px-2 md:px-0 max-w-6xl mx-auto text-center rounded-lg">
  //     <h2 className="text-4xl font-bold text-white mb-2">Our Engagement Models</h2>
  //     <p className="text-center text-white max-w-3xl mx-auto mb-8 leading-relaxed">
  //       At Sapphire, we provide full-cycle custom software development services to meet your financial requirements. Our software development team leverages their expertise in delivering process-oriented and high- performance software products for Cloud, Mobile, and Web.
  //     </p>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
  //       {models.map((model) => (
  //         <div
  //           key={model.title}
  //           className="bg-white rounded-xl shadow p-6 flex flex-col items-start hover:scale-105 transition-transform"
  //         >
  //           {model.icon}
  //           <div className={`font-semibold text-lg mt-4 mb-2 ${model.color}`}>{model.title}</div>
  //           <div className="text-gray-700 text-[15px]">{model.desc}</div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
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
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isSmallOrMedium]);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? models.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
  };

  if (isSmallOrMedium) {
    const model = models[currentIndex];
    return (
      <div className="bg-[#07688c] py-10 px-4 md:px-8 w-full min-h-screen flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-4 w-full text-center">
          Our Engagement Models
        </h2>
        <p className="text-white mb-8 leading-relaxed w-full max-w-screen-lg text-center px-2">
          At Sapphire, we provide full-cycle custom software development services to meet your financial requirements. Our software development team leverages their expertise in delivering process-oriented and high-performance software products for Cloud, Mobile, and Web.
        </p>

        {/* Single Service Card */}
        <div className="bg-white rounded-2xl px-6 py-8 flex flex-col items-center shadow-md transition-transform hover:scale-105 w-full max-w-screen-lg">
          <div>{model.icon}</div>
          <p className="text-gray-900 text-xl font-semibold text-center mt-4">{model.title}</p>
          <p className="text-gray-700 text-base mt-2">{model.desc}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-8 w-full max-w-screen-lg">
          <button onClick={prev} aria-label="Previous service" className="bg-white p-3 rounded-full hover:bg-gray-100 transition">
            {/* left arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#07688c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={next} aria-label="Next service" className="bg-white p-3 rounded-full hover:bg-gray-100 transition">
            {/* right arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#07688c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
          <div className="flex justify-center mt-10 w-full max-w-screen-lg">
        <button className="bg-white text-[#07688c] font-semibold text-lg px-8 py-3 rounded shadow hover:bg-gray-100 transition">
          Get In Touch
        </button>
      </div>
      </div>
    );
  }

  // Large screen grid full width
  return (
    <div className="bg-[#07688c] py-10 px-4 md:px-8 w-full min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-4 w-full text-center">
        Our Engagement Models
      </h2>
      <p className="text-white mb-8 leading-relaxed w-full max-w-screen-lg text-center px-2">
        At Sapphire, we provide full-cycle custom software development services to meet your financial requirements. Our software development team leverages their expertise in delivering process-oriented and high-performance software products for Cloud, Mobile, and Web.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-screen-lg">
        {models.map((model) => (
          <div key={model.title} className="bg-white rounded-xl shadow p-6 flex flex-col items-start hover:scale-105 transition-transform w-full">
            {model.icon}
            <div className={`font-semibold text-lg mt-4 mb-2 ${model.color}`}>{model.title}</div>
            <div className="text-gray-700 text-[15px]">{model.desc}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 w-full max-w-screen-lg">
        <button className="bg-white text-[#07688c] font-semibold text-lg px-8 py-3 rounded shadow hover:bg-gray-100 transition">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
