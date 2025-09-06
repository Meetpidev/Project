// import { useEffect, useState } from "react";
// export default function Demo() {
//   const [currentVideo, setCurrentVideo] = useState(0);

//   const videos = [
//     "https://sample-videos.com/video123/mp4/480/asdasdas.mp4",
//     "https://www.w3schools.com/html/mov_bbb.mp4",
//   ];

  
//   const rightContents = [
//     {
//       heading1: "Shaping the future of Architecture",
//       heading2: "With AI-Driven Creativity",
//     },
//     {
//       heading1: "Empowering Business with AI",
//       heading2: "Innovate, Automate, Accelerate",
//     },
//     {
//       heading1: "Transforming Industries",
//       heading2: "One Algorithm at a Time",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideo((prev) => (prev + 1) % videos.length);
//     }, 12000); // Switch video and right content every 12 seconds
//     return () => clearInterval(interval);
//   }, [videos.length]);

//   const content = rightContents[currentVideo];

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
//       {/* Background Video Container */}
//       <div className="absolute inset-0 z-0">
//         {videos.map((video, idx) => (
//           <video
//             key={video}
//             className="absolute inset-0 w-full h-full object-cover transition-opacity duration-2000"
//             style={{ opacity: idx === currentVideo ? 0.6 : 0, zIndex: -1 }}
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//           >
//             <source src={video} type="video/mp4" />
//           </video>
//         ))}
//         {/* Dark translucent overlay */}
//         <div className="absolute inset-0 bg-black/70" />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 lg:px-8 min-h-[600px] flex items-center">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
//           {/* Left Column - Static Content */}
//           <div className="lg:col-span-7 space-y-6 text-white">
//             <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-2" data-testid="text-main-heading">
//               AI Innovation
//             </h1>
//             <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4">
//               <span className="text-cyan-400">Your Vision, </span>
//               <span
//                 className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
//                 style={{ WebkitBackgroundClip: "text" }}
//               >
//                 Our Technology
//               </span>
//             </h2>
//             <p className="text-lg md:text-xl text-slate-200 mb-2">(Limitless Possibilities)</p>

//             <ul className="pl-5 space-y-2 text-white text-base md:text-lg font-medium">
//               <li>
//                 <span className="font-bold text-white">•</span> Most-rated <span className="font-bold text-blue-300">#1 App Development</span> Company <span className="text-blue-300">on Clutch</span> in India and USA.
//               </li>
//               <li>
//                 <span className="font-bold text-white">•</span> Trusted by <span className="font-bold text-blue-300">20+ Fortune 500 Companies</span> and a <span className="text-blue-300">Clutch Leader</span>.
//               </li>
//               <li>
//                 <span className="font-bold text-white">•</span> We've been Redefining Excellence for over <span className="text-blue-300">Two Decades</span>.
//               </li>
//             </ul>

//             <button className="mt-8 px-8 py-3 text-lg font-semibold rounded-lg bg-cyan-600 hover:bg-purple-600 text-white shadow-lg transition-colors">
//               Let's Talk
//             </button>
//           </div>

//           {/* Right Column - Dynamic Content based on current video */}
//           <div className="lg:col-span-5 flex flex-col justify-end items-end text-right pt-16 lg:pt-0 text-white">
//             <h3 className="text-2xl font-bold mb-2">{content.heading1}</h3>
//             <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               {content.heading2}
//             </h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import video1 from "../common/video1.mp4";
import video2 from "../common/video2.mp4";

export default function Demo() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [video1, video2];

  const rightContents = [
    {
      line1: "Streamlining Success With",
      line2: "Intelligent AI Solutions",
    },
    {
      line1: "Transform Your Workflow",
      line2: "AI That Delivers ROI",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [videos.length]);

  const rightContent = rightContents[currentVideo];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Videos */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, idx) => (
          <video
            key={video}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: idx === currentVideo ? 0.65 : 0, zIndex: -1 }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col min-h-screen justify-start">
        <div className="pt-20 px-6 md:px-16 max-w-full sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mt-12 md:mt-20">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 leading-tight">
            AI Innovation
          </h1>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 leading-snug">
            <span className="text-cyan-400">Your Vision, </span>
            <span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text" }}
            >
              Our Technology
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-semibold mb-2">
            (Limitless Possibilities)
          </p>

          <ul className="list-disc pl-7 space-y-2 text-white text-base sm:text-lg md:text-xl font-bold mb-7">
            <li>
              Named by <span className="text-blue-300 font-bold">Clutch</span> as the{" "}
              <span className="font-bold">Top AI (Artificial Intelligence)</span> Company in India and USA.
            </li>
            <li>
              Trusted by <span className="text-blue-300 font-bold">20+ Fortune 500 Companies</span> and a Clutch Leader.
            </li>
            <li>
              We’ve been Redefining Excellence for over <span className="text-blue-300 font-bold">Two Decades.</span>
            </li>
          </ul>

          <button className="mt-1 mb-8 px-7 py-3 text-lg sm:text-xl font-semibold rounded-lg bg-cyan-600 hover:bg-purple-600 text-white shadow-lg transition-colors text-left">
            Let’s Talk
          </button>
        </div>

        <div className="absolute bottom-14 right-6 sm:right-10 md:right-16 xl:right-24 text-right max-w-xs sm:max-w-sm whitespace-nowrap">
          <h3 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl mb-1 leading-tight">
            {rightContent.line1}
          </h3>
          <h4
            className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text" }}
          >
            {rightContent.line2}
          </h4>
        </div>
      </div>
    </div>
  );
}


// import { useEffect, useState } from "react";

// export default function Demo() {
//   const [currentVideo, setCurrentVideo] = useState(0);

//   // Demo background videos (use accessible mp4 links)
//   const videos = [
//     "https://cdn.pixabay.com/vimeo/360234318/abstract-futuristic-5315.mp4",
//     "https://cdn.pixabay.com/vimeo/361540728/virtual-brain-6474.mp4",
//   ];

//   // Right content for each video
//   const rightContents = [
//     {
//       line1: "Streamlining Success With",
//       line2: "Intelligent AI Solutions",
//     },
//     {
//       line1: "Transform Your Workflow",
//       line2: "AI That Delivers ROI",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideo((prev) => (prev + 1) % videos.length);
//     }, 12000);
//     return () => clearInterval(interval);
//   }, [videos.length]);

//   const rightContent = rightContents[currentVideo];

//   return (
//     <div className="relative min-h-screen bg-black overflow-hidden">
//       {/* Background Videos */}
//       <div className="absolute inset-0 z-0">
//         {videos.map((video, idx) => (
//           <video
//             key={video}
//             className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
//             style={{ opacity: idx === currentVideo ? 0.65 : 0, zIndex: -1 }}
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//           >
//             <source src={video} type="video/mp4" />
//           </video>
//         ))}
//         <div className="absolute inset-0 bg-black/80" />
//       </div>

//       {/* Main content: left-aligned */}
//       <div className="relative z-10 flex flex-col min-h-screen justify-start">
//         <div className="pt-20 pl-6 md:pl-16 max-w-[640px] mt-54">
//           <h1 className="text-white font-bold text-[2.8rem] md:text-1xl lg:text-[2.7rem] mb-1 leading-snug">
//             AI Innovation
//           </h1>
//           <h2 className="font-bold text-[2.1rem] md:text-[2rem] lg:text-[2rem] mb-3 leading-tight">
//             <span className="text-cyan-400">Your Vision, </span>
//             <span
//               className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
//               style={{ WebkitBackgroundClip: "text" }}
//             >
//               Our Technology
//             </span>
//           </h2>
//           <p className="text-[1rem] md:text-xl text-slate-200 mb-2 font-semibold">(Limitless Possibilities)</p>
//           <ul className="list-disc pl-7 space-y-2 text-white text-[1.23rem] md:text-[1rem] font-bold mb-7">
//             <li>
//               <span>Named by <span className="text-blue-300 font-bold">Clutch</span> as the <span className="font-bold">Top AI (Artificial Intelligence)</span> Company in India and USA.</span>
//             </li>
//             <li>
//               <span>Trusted by <span className="text-blue-300 font-bold">20+ Fortune 500 Companies</span> and a Clutch Leader.</span>
//             </li>
//             <li>
//               <span>We’ve been Redefining Excellence for over <span className="text-blue-300 font-bold">Two Decades.</span></span>
//             </li>
//           </ul>
//           <button className="mt-1 mb-8 px-7 py-3 text-[1.2rem] font-semibold rounded-lg bg-cyan-600 hover:bg-purple-600 text-white shadow-lg transition-colors text-left">
//             Let’s Talk
//           </button>
//         </div>

//         {/* Right-corner content (anchored) */}
//         <div className="absolute bottom-14 right-8 lg:right-16 text-right">
//           <h3 className="text-white font-extrabold text-[2rem] md:text-[2rem] mb-1 leading-tight">
//             {rightContent.line1}
//           </h3>
//           <h4 className="text-[1.14rem] md:text-[1.6rem] font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: "text" }}>
//             {rightContent.line2}
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// }
