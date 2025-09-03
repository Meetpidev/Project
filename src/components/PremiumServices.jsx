import React from "react";

const PREMIUM_SERVICES = [
  {
    name: "Mobile App Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Software Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Web Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: ".NET Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Flutter App Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "PHP Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Hire Dedicated Developers",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Mern Stack Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Full Stack Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
  {
    name: "Laravel Development",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXJ7hkPLsgWmBXs07adqKVbPJbRN33FHTFA&s",
  },
];

export default function PremiumServices() {
  return (
    <section className="bg-[#056288] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-4xl font-bold text-center mb-4">Our Premium Services</h2>
        <p className="text-white text-center text-lg mb-10 max-w-3xl mx-auto">
          As a certified IT company, Sapphire helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PREMIUM_SERVICES.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl px-6 py-6 flex flex-col items-center shadow-md"
            >
              <img
                src={service.icon}
                alt={service.name}
                className="h-12 w-12 mb-3"
              />
              <p className="text-gray-900 text-lg font-semibold text-center">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
