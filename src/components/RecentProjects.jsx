import React from "react";

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
  return (
    <div className="bg-white py-8 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-2">Our Recent Projects</h2>
      <p className="text-center text-gray-500 max-w-3xl mx-auto mb-10">
        Presenting the wide range of solutions that we have successfully delivered to our clients with the high-quality standard
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={proj.title}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center transition transform hover:-translate-y-1"
          >
            <img src={proj.img} alt={proj.title} className="w-full object-cover h-48" />
            <div className="flex-1 flex items-end justify-center py-4">
              <div className="bg-white px-6 py-2 rounded-xl shadow-lg -mt-10 font-semibold text-lg text-center">
                {proj.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-800 hover:bg-blue-900 text-white text-lg font-semibold py-3 px-10 rounded-lg shadow-md transition">
          View All
        </button>
      </div>
    </div>
  );
}
