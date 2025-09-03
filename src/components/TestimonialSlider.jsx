import React, { useEffect, useRef } from "react";

// Dummy testimonials
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
  const sliderRef = useRef();
  // Simulated card width (with Tailwind min-w-[320px] and gap-x-8)
  const cardWidth = 340;

  useEffect(() => {
    let idx = 0;
    const slideCount = testimonials.length;
    const timer = setInterval(() => {
      idx = (idx + 1) % slideCount;
      sliderRef.current.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-blue-100 py-10 px-2">
      <h2 className="text-3xl font-bold text-center mb-2">Our Story, Their Words</h2>
      <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
        From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
      </p>
      <div className="relative max-w-16xl mx-auto">
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden gap-8 px-6 scroll-smooth scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow flex flex-col min-w-[320px] snap-start mb-4"
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
    </section>
  );
}
