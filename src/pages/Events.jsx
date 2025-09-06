import { CTASubscribe, CTAWorkTogether } from "../components/FeaturedLogos";
import { useState, useEffect } from "react";

export default function Events() {
const galleryData = {
  2025: [
    { src: "team_win_image.jpg", alt: "Team victory celebration" },
    { src: "birthday_decor.jpg", alt: "Birthday celebration decor" },
    { src: "award_ceremony.jpg", alt: "Awards ceremony" },
    { src: "office_birthday.jpg", alt: "Birthday in office" },
    { src: "employee_group.jpg", alt: "Employees standing" },
    { src: "sapphire_logo.jpg", alt: "Sapphire office logo wall" },
    { src: "office_team.jpg", alt: "Team at their desks" },
    { src: "holi_celebration.jpg", alt: "Holi celebration group" }
  ],
  2024: [/* ...images for 2024... */],
  2023: [/* ... */],
  // ... more years as needed
};

const years = [
  2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015
];

  const [selectedYear, setSelectedYear] = useState(2025);
  const images = galleryData[selectedYear] || [];


  return (
    <>
    <section className="bg-blue-50 md:py-17 md:mt-30 px-2 md:px-7 mt-30 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-14">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Events & Celebrations</h2>
          <p className="mb-3 text-gray-600">
            At Kryzen, we believe that celebrating success is just as important as achieving it. Our culture thrives on a balanced blend of dedication and joyful celebration.
          </p>
          <a href="#contact" className="inline-block mt-4 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-900 transition-all">
            Let's Talk <span className="ml-2">&#8594;</span>
          </a>
        </div>
        {/* Right Image */}
        <div className="max-w-md md:max-w-lg w-full mx-auto flex-shrink-0 flex justify-center">
          <img
            src="https://lh3.googleusercontent.com/proxy/EOMSqj1pCzJnP0aXqfhk4J2PFCTzJh4F0DoXO3qNwJBInJMD1KHmPkIiiUIpknI7PmenxKKGi1QRNCGiuwprGg"
            alt="Why Choose Us"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      </section>

      <section className="px-2 md:px-8 py-12 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold mb-3">Life @Sapphire</h2>
      <p className="text-center text-gray-600 mb-8">
        At Sapphire, we constantly try new ways to make our work environment, enjoyable and inspiring. From company outings to birthdays, we just need a reason to celebrate. Have a glimpse at life and culture @Sapphire!
      </p>

      {/* Year Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        {years.map((yr) => (
          <button
            key={yr}
            className={`pb-1 px-4 text-xl font-semibold transition border-b-2 ${
              selectedYear === yr
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-700 hover:text-blue-500"
            }`}
            onClick={() => setSelectedYear(yr)}
            aria-label={`Show images from ${yr}`}
          >
            {yr}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow border bg-white flex items-center justify-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-48 sm:h-44 md:h-40 lg:h-44"
              loading="lazy"
            />
          </div>
        ))}
        {images.length === 0 && (
          <div className="text-gray-400 py-16 col-span-full text-center">
            No images available for {selectedYear}.
          </div>
        )}
      </div>
    </section>
      
      <section>
        <CTAWorkTogether />
        <CTASubscribe />
      </section>
      </>
  );
}
