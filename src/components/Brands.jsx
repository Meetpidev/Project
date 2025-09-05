import { useState, useEffect } from "react";

const logos = [
  "https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
  "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZlaUXIWozu3xqknYB3S9nknCPGFPAEVZLA&s",
  "https://png.pngtree.com/png-vector/20220509/ourmid/pngtree-company-logo-design-trademark-design-creative-logo-png-image_4569380.png",
  "https://media.istockphoto.com/id/1201144331/vector/icon-design-element-logo-for-technology-innovation-company-tech-icon-and-symbol.jpg?s=612x612&w=0&k=20&c=Q-zPPtCY9aNohWqcUTB-rEBSd3xoC6fqSEgWDgulrf8=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlHE49S-L9Y44HsqNZ1xd-1sQe6e3L2Y2Ew&s",
  "https://cdn.pixabay.com/photo/2023/02/01/00/54/company-7759278_1280.png",
  "https://www.logoai.com/uploads/output/2025/02/08/562a52c054f32cd0c5b692d9f5fec756.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1735230095",
  "https://img.freepik.com/premium-vector/beautiful-unique-logo-design-ecommerce-retail-company_1287271-14561.jpg",
  "https://template.canva.com/EAFyLk6KnAY/2/0/1600w-sRJrS--yClI.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-5746111ce930e4340aa34a9eb626a302_screen.jpg?ts=1671431883",
  "https://png.pngtree.com/png-clipart/20200709/original/pngtree-repairing-service-logo-png-image_3562607.jpg",
  "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?semt=ais_hybrid&w=740&q=80",
  "https://template.canva.com/EAFyYS36jTM/2/0/1600w-0mcAWJVKyko.jpg",
  "https://template.canva.com/EAFyYS36jTM/2/0/1600w-0mcAWJVKyko.jpg",
  "https://template.canva.com/EAFyYS36jTM/2/0/1600w-0mcAWJVKyko.jpg",
];

function Brands() {
  // Show 4 logos at a time on small devices
  const [startIndex, setStartIndex] = useState(0);
  const logosPerPage = 4;

  // Calculate wrapping next/prev indices
  const prev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - logosPerPage : prevIndex - logosPerPage
    );
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      prevIndex + logosPerPage >= logos.length ? 0 : prevIndex + logosPerPage
    );
  };

    useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  // Logos slice to display on small devices
  const currentLogos = logos.slice(startIndex, startIndex + logosPerPage);

  // If slicing goes out of range, concat from start to keep logosPerPage count
  if (currentLogos.length < logosPerPage) {
    currentLogos.push(
      ...logos.slice(0, logosPerPage - currentLogos.length)
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Trusted By The World’s Leading Brands
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We are glad to be a digital technology and innovation partner with world’s leading brands. 
          Building greater futures through innovation and collective knowledge.
        </p>

        {/* Logos Grid for md+ devices */}
        <div className="hidden md:grid md:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl flex items-center justify-center p-6 hover:shadow-lg transition"
            >
              <img src={logo} alt="brand logo" className="max-h-12 object-contain" />
            </div>
          ))}
        </div>

        {/* Logos carousel for small devices */}
      <div className="md:hidden">
  <div className="grid grid-cols-2 grid-rows-2 gap-6 mb-6">
    {currentLogos.map((logo, index) => (
      <div
        key={`${startIndex}-${index}`}
        className="bg-white shadow-md rounded-xl flex items-center justify-center p-6 hover:shadow-lg transition"
      >
        <img src={logo} alt="brand logo" className="max-h-12 object-contain" />
      </div>
    ))}
  </div>

  {/* Arrows below logos */}
  <div className="flex justify-center gap-4">
    <button
      onClick={prev}
      aria-label="Previous logos"
      className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
    >
      {/* Left arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      onClick={next}
      aria-label="Next logos"
      className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
    >
      {/* Right arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
