import React from "react";

const successMatrixData = [
  {
    title: "SEO and Digital Marketing",
    icon: (
      <svg className="w-10 h-10 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M2 12l2 2 4-4m0-4v16m4-16.618l2 2 4-4m0-4v16" />
      </svg>
    ),
  },
  {
    title: "4 months + Free Post Launch Support",
    icon: (
      <svg className="w-10 h-10 text-orange-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "Non-Disclosure",
    icon: (
      <svg className="w-10 h-10 text-sky-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M7 12l5 5 5-5" />
      </svg>
    ),
  },
  {
    title: "100% value for the money",
    icon: (
      <svg className="w-10 h-10 text-yellow-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 8c-2.486 0-4.5 2.014-4.5 4.5S9.514 17 12 17s4.5-2.014 4.5-4.5S14.486 8 12 8zm0-6c-2.761 0-5 2.239-5 5h2c0-1.656 1.343-3 3-3s3 1.344 3 3a1 1 0 002 0c0-2.761-2.239-5-5-5z" />
      </svg>
    ),
  },
  {
    title: "Professional coding and version controls",
    icon: (
      <svg className="w-10 h-10 text-violet-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 15V9M17 15v-2a2 2 0 00-2-2h-2" />
      </svg>
    ),
  },
  {
    title: "Flexible payment plans",
    icon: (
      <svg className="w-10 h-10 text-orange-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <circle cx="12" cy="14" r="4" />
      </svg>
    ),
  },
  {
    title: "Real-time project tracking tools",
    icon: (
      <svg className="w-10 h-10 text-blue-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M2 12h4l2 2m0-4l4 4m0-2l2 2h4" />
      </svg>
    ),
  },
  {
    title: "Custom Tailored support | AMC Plans",
    icon: (
      <svg className="w-10 h-10 text-purple-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2v8m0 0l-4-4m4 4l4-4m-4 4V22" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance and Unit Test Cases",
    icon: (
      <svg className="w-10 h-10 text-yellow-300 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 22v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
      </svg>
    ),
  },
  {
    title: "Penalty enforcement in case of Delivery Delay",
    icon: (
      <svg className="w-10 h-10 text-orange-300 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="8" rx="2" />
        <path d="M7 15h2" />
      </svg>
    ),
  },
  {
    title: "In-dept analysis of revenue business Models",
    icon: (
      <svg className="w-10 h-10 text-green-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 17V9a4 4 0 014-4h10a4 4 0 014 4v8" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Mind Maps and video demos",
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

export default function SuccessMatrix() {
  return (
    <div className="bg-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-2 text-gray-900">Success Matrix</h2>
        <p className="mb-12 text-lg text-gray-700">
          We offer comprehensive services to develop digital solutions &amp; manage complete product lifecycle. We've robust work history with diverse business services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {successMatrixData.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
              {item.icon}
              <div className="font-bold text-lg text-center">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
