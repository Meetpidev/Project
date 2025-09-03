import React from "react";

const models = [
  {
    title: "Fixed Price",
    desc: "This model is for projects with well-defined scope and requirements. When Clients know what they want and have fixed requirements, it works the best for small businesses and medium projects with limited or fixed budgets.",
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0z"/>
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 17v.01M12 19a5 5 0 00-5 5h10a5 5 0 00-5-5z"/>
      </svg>
    ),
    color: "text-purple-600"
  },
  {
    title: "Dedicated Hiring",
    desc: "For projects when clients want to have a full-time, dedicated team working on their projects. Works best for projects which require fast scaling or require expert developers to work on a long-term basis.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M7 7a4 4 0 118 0 4 4 0 01-8 0zM15 14a5 5 0 11-10 0v-1a5 5 0 0110 0v1z" />
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M17 17v-1a4 4 0 10-8 0v1m7-1a3 3 0 106 0v-1a3 3 0 00-6 0v1z"/>
      </svg>
    ),
    color: "text-orange-500"
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
    color: "text-green-500"
  },
  {
    title: "Buckets Approach",
    desc: "A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth={2}/>
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M16 9V7a4 4 0 00-8 0v2a4 4 0 008 0zM12 17v.01"/>
      </svg>
    ),
    color: "text-cyan-400"
  }
];

export default function EngagementModels() {
  return (
    <div className="bg-[#07688c] py-10 px-2 md:px-0">
      <h2 className="text-4xl font-bold text-center text-white mb-2">Our Engagement Models</h2>
      <p className="text-center text-white max-w-3xl mx-auto mb-8 leading-relaxed">
        At Sapphire, we provide full-cycle custom software development services to meet your financial requirements. Our software development team leverages their expertise in delivering process-oriented and high- performance software products for Cloud, Mobile, and Web.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {models.map((model) => (
          <div key={model.title} className="bg-white rounded-xl shadow p-6 flex flex-col items-start hover:scale-105 transition-transform">
            {model.icon}
            <div className={`font-semibold text-lg mt-4 mb-2 ${model.color}`}>{model.title}</div>
            <div className="text-gray-700 text-[15px]">{model.desc}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-white text-[#07688c] font-semibold text-lg px-8 py-3 rounded shadow hover:bg-gray-100 transition">Get In Touch</button>
      </div>
    </div>
  );
}
