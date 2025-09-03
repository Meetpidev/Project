// import React, { useState } from "react";

// const dummySlides = [
//   { id: 1, title: "AI Document Analyzer", desc: "AI-powered document quality analyzer.", img: "https://via.placeholder.com/300x200" },
//   { id: 2, title: "Hide App", desc: "Best Mobile App Development.", img: "https://via.placeholder.com/300x200" },
//   { id: 3, title: "Team Communication", desc: "Innovative Team Communication App.", img: "https://via.placeholder.com/300x200" },
//   { id: 4, title: "Real Estate App", desc: "Leading Real Estate App.", img: "https://via.placeholder.com/300x200" },
//   { id: 5, title: "Sapphire Software", desc: "Software development with Sapphire.", img: "https://via.placeholder.com/300x200" },
// ];

// const InnovativeSlider = () => {
//   const [start, setStart] = useState(0);
//   const visibleCount = 3;

//   const handleNext = () => {
//     setStart(prev => prev + visibleCount < dummySlides.length ? prev + 1 : prev);
//   };
//   const handlePrev = () => {
//     setStart(prev => (prev > 0 ? prev - 1 : 0));
//   };

//   return (
//     <div className="bg-blue-900 text-white py-8 px-2">
//       <h2 className="text-3xl font-bold text-center mb-4">
//         Unveiling Our Innovative Solution
//       </h2>
//       <p className="text-center mb-8 max-w-2xl mx-auto">
//         From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it’s a glimpse into the future of innovation.
//       </p>
//       <div className="flex justify-center items-center space-x-6">
//         {dummySlides.slice(start, start + visibleCount).map(slide => (
//           <div key={slide.id} className="bg-white rounded-lg shadow-lg w-80">
//             <img src={slide.img} alt={slide.title} className="rounded-t-lg w-full h-40 object-cover" />
//             <div className="p-4 text-black">
//               <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
//               <p className="mb-4">{slide.desc}</p>
//               <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
//                 View
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-6 space-x-4">
//         <button
//           onClick={handlePrev}
//           className="bg-white text-blue-900 px-4 py-2 rounded-full shadow active:scale-95"
//           disabled={start === 0}
//         >
//           &lt;
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-white text-blue-900 px-4 py-2 rounded-full shadow active:scale-95"
//           disabled={start + visibleCount >= dummySlides.length}
//         >
//           &gt;
//         </button>
//       </div>
//       <div className="flex justify-center mt-8">
//         <button className="bg-white text-blue-900 px-6 py-3 rounded shadow hover:bg-blue-50 text-lg font-medium">
//           View Insightful Videos
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InnovativeSlider;

import React, { useRef, useEffect } from "react";

const dummyData = [
  { title: "Quality Analyzer", desc: "AI-Powered Document...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
  { title: "Hide App", desc: "Best Mobile App...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
  { title: "Team Communication", desc: "Innovative Team...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
  { title: "Real Estate App", desc: "Leading Real Estate...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
    { title: "Sapphire Software", desc: "Software Development...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
    { title: "Sapphire Software", desc: "Software Development...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
  { title: "Sapphire Software", desc: "Software Development...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnpT7fGp9UW4UaXtCTh-wGpV8admcfogoOA&s" },
];

export default function InnovativeSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let childWidth = 0;
    if (slider && slider.children[0]) {
      childWidth = slider.children[0].offsetWidth + 24; // card width + gap
    }
    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      if (idx > dummyData.length - 1) idx = 0;
      if (slider) slider.scrollTo({ left: idx * childWidth, behavior: "smooth" });
    }, 2300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-cyan-900 py-8 pb-16">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Unveiling Our Innovative Solution</h2>
      <p className="text-cyan-100 text-center mb-8 max-w-2xl mx-auto">
        From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued.<br/>
        This is more than just a video – it's a glimpse into the future.
      </p>
      {/* The outer container provides the 'peek' effect by cropping the edge cards */}
      <div className="relative mx-auto max-w-16xl px-6">
        <div
          className="flex overflow-x-hidden scrollbar-hide gap-6 px-4"
          ref={sliderRef}
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {dummyData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md min-w-[350px] max-w-[350px] flex-shrink-0 pb-4 scrollSnapAlign-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h3 className="font-bold text-lg text-cyan-900">{item.title}</h3>
                <p className="text-cyan-800 mt-2 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="bg-white text-cyan-900 rounded px-4 py-2 font-semibold hover:bg-cyan-200 transition">
          View Insightful Videos
        </button>
      </div>
    </div>
  );
}

