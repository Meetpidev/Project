export default function Footer() {
  const footerLinks = {
    Company: [
      "About Sapphire",
      "Our Team",
      "Events & Activities",
      "Careers (Jobs)",
      "Contact-Us",
      "Portfolio",
      "Awards & Recognition",
      "Why Choose Us"
    ],
    Services: [
      "Product Development",
      "Cloud Development", 
      "UI/UX Design",
      "Microsoft Development",
      "IT Outsourcing",
      "Testing & QA",
      "Hire Dedicated Developers"
    ],
    Technology: [
      ".NET",
      "PHP",
      "Android",
      "iOS",
      "Flutter",
      "Xamarin"
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
      "On Demand App Development"
    ],
    "Solutions Column 2": [
      "Fitness App",
      "Dating App",
      "Salon App",
      "Car Wash App",
      "E-Learning App",
      "Car Rental App",
      "Bike Rental App",
      "Food Delivery App"
    ],
    "Solutions Column 3": [
      "E-Commerce Solution",
      "Car Rental App",
      "Medicine Delivery App",
      "Chat App Development",
      "Pet Management App",
      "Emergency Alert App",
      "Payment Service App",
      "Sports App Development"
    ]
  };

  const awards = [
    { src: "https://via.placeholder.com/80x80?text=Award1", alt: "Award 1" },
    { src: "https://via.placeholder.com/80x80?text=Award2", alt: "Award 2" },
    { src: "https://via.placeholder.com/80x80?text=Award3", alt: "Award 3" },
    { src: "https://via.placeholder.com/80x80?text=Award4", alt: "Award 4" },
    { src: "https://via.placeholder.com/80x80?text=Award5", alt: "Award 5" },
    { src: "https://via.placeholder.com/80x80?text=Award6", alt: "Award 6" },
    { src: "https://via.placeholder.com/80x80?text=Award7", alt: "Award 7" },
    { src: "https://via.placeholder.com/80x80?text=Award8", alt: "Award 8" },
    { src: "https://via.placeholder.com/80x80?text=Award9", alt: "Award 9" },
    { src: "https://via.placeholder.com/80x80?text=Award10", alt: "Award 10" },
    { src: "https://via.placeholder.com/80x80?text=Award11", alt: "Award 11" },
    { src: "https://via.placeholder.com/80x80?text=Award12", alt: "Award 12" },
    { src: "https://via.placeholder.com/80x80?text=Award13", alt: "Award 13" },
    { src: "https://via.placeholder.com/80x80?text=Award14", alt: "Award 14" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company, Services, Technology - Each takes 1 column */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-600 mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                      • {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Solutions - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-blue-600 mb-4">Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(solutions).map(([columnTitle, links]) => (
                <div key={columnTitle}>
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                          • {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Recognition Section */}
      {/* <div className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold text-blue-600 mb-6">Awards & Recognition</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-14 gap-4">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={award.src}
                  alt={award.alt}
                  className="max-h-16 max-w-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </footer>
  );
}
