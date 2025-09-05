import React, { useState } from "react";
import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    "About Sapphire",
    "Events & Activities",
    "Careers",
    "Contact-Us",
    "Portfolio",
    "Awards & Recognition",
    "Why Choose Us",
  ],
  Services: [
    "Web Development",
    "Mobile App Development", 
    "Custom Software Development",
    "Graphics & UI/UX Design",
    "Digital Marketing",
    "ERP & CRM Solutions",
    "Domain & Hosting",
  ],
  Technology: [
    ".NET",
    "PHP",
    "Android",
    "iOS",
    "Flutter",
    "Xamarin",
  ]
};

const solutions = {
  "Solutions Column 1": [
    "Taxi Booking App",
    "Covid Tracker App",
    "E-Commerce App",
    "Product Finder App",
    "Eyelash Booking App",
    "Language Learning App",
    "Barber shop Booking App",
    "On Demand App Development",
  ],
  "Solutions Column 2": [
    "Fitness App",
    "Dating App",
    "Salon App",
    "Car Wash App",
    "E-Learning App",
    "Car Rental App",
    "Bike Rental App",
    "Food Delivery App",
  ],
  "Solutions Column 3": [
    "E-Commerce Solution",
    "Car Rental App",
    "Medicine Delivery App",
    "Chat App Development",
    "Pet Management App",
    "Emergency Alert App",
    "Payment Service App",
    "Sports App Development",
  ]
};

const getLinks = (category, links) => (
  <ul className="space-y-2 mt-3">
    {links.map((link, index) => (
      <li key={index}>
        {link === "About Sapphire" ? (
          <Link to="/about-Kryzen-Software-Solutions" className="text-gray-600 hover:text-blue-600 text-sm block">
            • {link}
          </Link>
        ) : link === "Why Choose Us" ? (
          <Link to="/choose" className="text-gray-600 hover:text-blue-600 text-sm block">
            • {link}
          </Link>
        ) : (
          <Link to="#" className="text-gray-600 hover:text-blue-600 text-sm block">
            • {link}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

const getSolutionsLinks = links => (
  <ul className="space-y-2 mt-3">
    {links.map((link, index) => (
      <li key={index}>
        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm block">
          • {link}
        </a>
      </li>
    ))}
  </ul>
);

export default function Footer() {
  // Accordion state for mobile/tablet
  const [open, setOpen] = useState("");

  // Solutions accordion is just one group on mobile
  const solutionsArray = Object.values(solutions).flat();

  const sections = [
    { key: "Company", label: "Company", links: getLinks("Company", footerLinks.Company) },
    { key: "Services", label: "Services", links: getLinks("Services", footerLinks.Services) },
    { key: "Technology", label: "Technology", links: getLinks("Technology", footerLinks.Technology) },
    { key: "Solutions", label: "Solutions", links: getSolutionsLinks(solutionsArray) },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Large screens: current layout */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company, Services, Technology */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-600 mb-4">{category}</h3>
              {getLinks(category, links)}
            </div>
          ))}
          {/* Solutions: 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-blue-600 mb-4">Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(solutions).map(([colTitle, links]) => (
                <div key={colTitle}>
                  {getSolutionsLinks(links)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Small/medium screens: accordion */}
      <div className="block lg:hidden max-w-[42rem] mx-auto px-3 pt-8 pb-8">
        <div className="rounded-xl border border-gray-200 p-3 bg-white">
          {sections.map(({ key, label, links }) => (
            <div key={key}>
              <button
                onClick={() => setOpen(open === key ? "" : key)}
                className="w-full flex items-center justify-between text-left py-4"
                aria-expanded={open === key}
                aria-controls={`footer-sec-${key}`}
              >
                <span className="font-bold text-blue-700 text-lg">{label}</span>
                <span className="text-blue-700 text-2xl font-extrabold select-none">
                  {open === key ? "−" : "+"}
                </span>
              </button>
              <div
                id={`footer-sec-${key}`}
                className={`overflow-hidden transition-max-height duration-300 ${open === key ? "max-h-96" : "max-h-0"}`}
                style={{
                  transition: "max-height 0.3s ease",
                }}
              >
                {open === key && links}
              </div>
              <hr className="border-t border-gray-100 my-0" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
