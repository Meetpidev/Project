import React, { useRef, useEffect } from "react";

const cards = [
  {
    size: "large",
    bg: "bg-pink-100",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCV2yF0IIinLkrCkqucK0PFl4bgnlHu5moaQ&s",
    title: "MORRIS GARAGES",
    desc: "MG Motor is a well-known firm that have large number of employee. It is their major responsibility to keep track of employees' health and records. The system from their end was to have one secure locker for the protection of all the papers in order to keep track of employee Examination and OPD records for audit...",
    bullets: [
      "Real-time health data analytics",
      "HIPAA-compliant data security",
      "24/7 access to health resources and support",
      "Personalized health recommendations",
      "98% improvement in employee health monitoring"
    ],
    actions: [
      { text: "View Case Study", style: "bg-black text-white" },
      { text: "View Portfolio", style: "border border-black text-black" },
    ]
  },
  {
    size: "gallery",
    bg: "bg-pink-50 flex flex-col gap-4 justify-between",
    gallery: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCV2yF0IIinLkrCkqucK0PFl4bgnlHu5moaQ&s",
        caption: "MG Details"
      },
    ],
  },
  {
    size: "normal",
    bg: "bg-gray-100",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzXwuGfVnbHCT9z6I4ZoMXZ0LAZKMzZSj7Q&s",
    title: "L'ORÉAL SAFE@WORK",
    desc: "This safety improvement application collects the observations from organizational Staff and non-staff, and the respective department take care of the closure observation, and some observation categories are verified by the top management.",
    bullets: [
      "97% reduction in safety incidents",
      "Scalable solution for large enterprises",
      "Recognized for excellence in safety innovation",
      "Automated safety reminders and alerts",
      "Real-time hazard identification and reporting"
    ],
    actions: [
      { text: "View Case Study", style: "bg-black text-white" },
      { text: "View Portfolio", style: "border border-black text-black" },
    ]
    },
  {
    size: "gallery",
    bg: "bg-pink-50 flex flex-col gap-4 justify-between",
    gallery: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCV2yF0IIinLkrCkqucK0PFl4bgnlHu5moaQ&s",
        caption: "MG Details"
      },
    ],
  },
];

export default function CaseStudySlider() {
  const sliderRef = useRef(null);
  const slideCount = 3;
  // Simulate slide width for auto scroll (customize if card widths are changed)
  const slideWidth = 540 + 24; 

  useEffect(() => {
    let idx = 0;
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      idx = (idx + 1) % slideCount;
      slider.scrollTo({ left: idx * slideWidth, behavior: "smooth" });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 px-3 w-full bg-white">
      <h2 className="text-3xl font-bold text-center mb-2">
        Digital Transformation Through Innovation and Collective Knowledge
      </h2>
      <p className="text-gray-800 text-center mb-8 max-w-3xl mx-auto text-lg">
        At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
      </p>
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden scrollbar-hide gap-6 px-2 py-2 transition-all"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {/* Large Feature Card */}
          <div className="snap-start min-w-[540px] max-w-[540px] rounded-2xl p-8 shadow flex flex-col justify-between items-start bg-pink-100">
            <img src={cards[0].logo} alt="logo" className="h-10 mb-3" />
            <div>
              <p className="text-xl font-bold mb-2 text-red-900">{cards[0].title}</p>
              <p className="text-gray-800 mb-4 text-sm">{cards[0].desc}</p>
              <ul className="mb-4 space-y-2">
                {cards[0].bullets.map((b, i) => (
                  <li className="flex items-start text-base font-medium" key={i}>
                    <span className="mr-2 text-lg text-black">»</span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 mt-2">
              {cards[0].actions.map((a,i) => (
                <button key={i} className={`rounded-full px-6 py-2 font-semibold text-sm transition ${a.style}`}>{a.text}</button>
              ))}
            </div>
          </div>
          {/* Gallery Card */}
          <div className="snap-start min-w-[360px] max-w-[360px] py-4 flex flex-col items-center justify-center gap-4 bg-pink-50 rounded-2xl shadow">
            {cards[1].gallery.map((g, i) => (
              <div key={i} className="mb-2 flex flex-col items-center">
                <img src={g.img} alt={g.caption} className="rounded-xl h-40 object-cover mb-2" />
                <span className="text-xs text-gray-500">{g.caption}</span>
              </div>
            ))}
          </div>
          {/* Normal Card */}
          <div className="snap-start min-w-[420px] max-w-[420px] rounded-2xl p-8 shadow flex flex-col justify-between items-start bg-gray-100">
            <img src={cards[2].logo} alt="logo" className="h-10 mb-3" />
            <div>
              <p className="text-xl font-bold mb-2 text-yellow-900">{cards[2].title}</p>
              <p className="text-gray-800 mb-4 text-sm">{cards[2].desc}</p>
              <ul className="mb-4 space-y-2">
                {cards[2].bullets.map((b, i) => (
                  <li className="flex items-start text-base font-medium" key={i}>
                    <span className="mr-2 text-lg text-black">»</span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 mt-2">
              {cards[2].actions.map((a,i) => (
                <button key={i} className={`rounded-full px-6 py-2 font-semibold text-sm transition ${a.style}`}>{a.text}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* (Optional) Manual arrows can also be added similar to above examples */}
    </section>
  );
}
