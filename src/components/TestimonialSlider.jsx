import React, { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    img: "https://via.placeholder.com/100?text=1",
    text:
      "From Idea to Reality | Client's Success Story with Sapphire - Best Mobile App...",
  },
  {
    img: "https://via.placeholder.com/100?text=2",
    text:
      "From Vision to Wellness | Client's Success Story with Sapphire - Top Digital Solution...",
  },
  {
    img: "https://via.placeholder.com/100?text=3",
    text:
      "Hear out Tim got to say about working with Team Sapphire on building an app...",
  },
  {
    img: "https://via.placeholder.com/100?text=4",
    text:
      "Testimonial from client who expanded their business using Sapphire's technology...",
  },
  {
    img: "https://via.placeholder.com/100?text=5",
    text:
      "Another happy client shares unique experience with Sapphire Solutions...",
  },
];

export default function TestimonialSlider() {
  const sliderRef = useRef(null);
  const [isSmallOrMedium, setIsSmallOrMedium] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const cardWidth = 340; // approx card width + gap

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

    const slideCount = testimonials.length;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slideCount);
    }, 3200);
    return () => clearInterval(interval);
  }, [isSmallOrMedium]);

  useEffect(() => {
    if (isSmallOrMedium && sliderRef.current) {
      sliderRef.current.scrollTo({ left: currentIdx * cardWidth, behavior: "smooth" });
    }
  }, [currentIdx, isSmallOrMedium]);

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (isSmallOrMedium) {
    return (
      <section className="bg-blue-100 py-10 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-2 w-full max-w-xl">Our Story, Their Words</h2>
        <p className="text-gray-700 text-center mb-8 max-w-xl px-4">
          From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
        </p>
        <div className="relative overflow-hidden w-full max-w-xl">
          <div
            ref={sliderRef}
            className="flex overflow-x-hidden gap-6 px-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow flex flex-col min-w-[320px] snap-start mb-4"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex flex-col items-center py-6 px-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img src={t.img} alt="user" className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="px-6 pb-6 grow flex flex-col justify-between">
                  <p className="text-gray-800 text-base font-medium mb-4">{t.text}</p>
                  <div className="flex justify-end">
                    <span className="bg-blue-400 p-3 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
                      <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                        <polygon points="10,8 16,12 10,16" fill="#fff" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-6 w-full max-w-xl px-4">
          <button onClick={prev} aria-label="Previous testimonial" className="p-3 bg-white rounded-full hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={next} aria-label="Next testimonial" className="p-3 bg-white rounded-full hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    );
  }

  // Large devices: show all testimonials horizontally scrollable without arrows
  return (
    <section className="bg-blue-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-2 max-w-7xl mx-auto">Our Story, Their Words</h2>
      <p className="text-gray-700 text-center mb-8 max-w-4xl mx-auto">
        From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
      </p>
      <div className="flex overflow-x-auto max-w-7xl mx-auto gap-6 scrollbar-hide px-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-xl shadow flex flex-col min-w-[320px] snap-start mb-4">
            <div className="flex flex-col items-center py-6 px-4">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img src={t.img} alt="user" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="px-6 pb-6 grow flex flex-col justify-between">
              <p className="text-gray-800 text-base font-medium mb-4">{t.text}</p>
              <div className="flex justify-end">
                <span className="bg-blue-400 p-3 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
                  <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                    <polygon points="10,8 16,12 10,16" fill="#fff" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
