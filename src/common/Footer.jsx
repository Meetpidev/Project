import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = {
    Company: [
      "About Sapphire",
      "Events & Activities",
      "Careers",
      "Contact-Us",
      "Portfolio",
      "Awards & Recognition",
      "Why Choose Us"
    ],
    Services: [
      "Web Development",
      "Mobile App Development", 
      "Custom Software Development",
      "Graphics & UI/UX Design",
      "Digital Marketing",
      "ERP & CRM Solutions",
      "Domain & Hosting"
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
    {link === "About Sapphire" ? (
      <Link to="/about-Kryzen-Software-Solutions" className="text-gray-600 hover:text-blue-600 text-sm">
        • {link}
      </Link>
    ) : link === "Why Choose Us" ? (
      <Link to="/choose" className="text-gray-600 hover:text-blue-600 text-sm">
        • {link}
      </Link>
    ) : (
      <Link to="#" className="text-gray-600 hover:text-blue-600 text-sm">
        • {link}
      </Link>
    )}
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
    </footer>
  );
}
