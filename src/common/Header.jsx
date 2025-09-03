import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Gem, Mail, Calendar, MapPin } from "lucide-react";
import logo from "./image.png";
import { Link } from 'react-router-dom';

const navigationItems = [
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about-Kryzen-Software-Solutions" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" },
    ],
  },
  {
    label: "Product",
    items: [
      { label: "Software Solutions", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "Web Applications", href: "#" },
      { label: "Enterprise Solutions", href: "#" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Consulting", href: "#" },
      { label: "Development", href: "#" },
      { label: "Support", href: "#" },
      { label: "Maintenance", href: "#" },
    ],
  },
  {
    label: "Technology",
    items: [
      { label: "React.js", href: "#" },
      { label: "Node.js", href: "#" },
      { label: "Python", href: "#" },
      { label: "Cloud Solutions", href: "#" },
    ],
  },
  {
    label: "Work",
    href: "#",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setOpenMobileDropdown(null); // close mobile dropdowns when menu closes
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  const toggleDesktopDropdown = (label) => {
    setOpenDesktopDropdown(openDesktopDropdown === label ? null : label);
  };

  const handleLetsTalkAI = () => {
    console.log("Let's Talk AI clicked");
  };

  const handleContactUs = () => {
    console.log("Contact Us clicked");
  };

  return (
    <div className="relative">
      {/* Contact Information Bar */}
      <div
        className={`contact-bar-transition bg-contact-bg text-black px-4 py-2 text-sm overflow-hidden fixed top-0 left-0 right-0 z-40 ${
          isScrolled ? "hidden" : ""
        }`}
        data-testid="contact-bar"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Contact Details Left Side */}
            <div className="flex flex-wrap items-center gap-6">
              {/* US Sales */}
              <div className="flex items-center gap-2">
                <img
                  src="https://flagcdn.com/w20/us.png"
                  alt="US Flag"
                  className="w-4 h-3"
                />
                <span className="text-xs lg:text-sm">For Sales: +1-954-258-7870</span>
              </div>

              {/* India Sales */}
              <div className="flex items-center gap-2">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India Flag"
                  className="w-4 h-3"
                />
                <span className="text-xs lg:text-sm">For Sales: +91-942-070-8662</span>
              </div>

              {/* Company Location */}
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-xs lg:text-sm">Sapphire Software Solutions</span>
              </div>
            </div>

            {/* Contact Details Right Side */}
            <div className="flex items-center gap-4">
              {/* Email Contact */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-300" />
                <span className="text-xs lg:text-sm">contact@sapphiresolutions.net</span>
              </div>

              {/* Schedule Meeting */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-300" />
                <button
                  className="text-xs lg:text-sm cursor-pointer hover:text-blue-200 transition-colors"
                  data-testid="button-schedule-meeting"
                >
                  Schedule a Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
        <nav
        className={`navbar-transition fixed left-0 right-0 z-50 shadow-lg transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-white text-gray-900"
            : "top-12 bg-navbar-bg text-navbar-text"
        }`}
        data-testid="main-navbar"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16 w-full">
            {/* LOGO AND BRAND */}
            <div className="flex items-center whitespace-nowrap gap-3 mr-8 flex-shrink-0">
              <Link to='/' className="rounded p-2 flex-shrink-0">
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
              </Link>
              <Link to='/'>
              <span
                className={`text-2xl font-bold ${
                  isScrolled ? "text-gray-900" : "text-navbar-text"
                }`}
                data-testid="text-company-name"
              >
                Kryzen Software Solutions
                </span>
                </Link>
            </div>

            {/* NAVIGATION ITEMS + ACTION BUTTON */}
            <div className="flex items-center justify-between w-full">
              {/* Nav links */}
              <div className="hidden lg:flex items-center flex-1 space-x-6">
                {navigationItems.map((item) => (
                  <div key={item.label} className="relative dropdown">
                    {item.items ? (
                      <>
                        <button
                          onClick={() => toggleDesktopDropdown(item.label)}
                          className={`flex items-center gap-1 px-3 py-2 hover:text-blue-600 transition-colors nav-text ${
                            isScrolled ? "text-gray-900" : "text-navbar-text"
                          }`}
                          data-testid={`button-dropdown-${item.label
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          type="button"
                          aria-expanded={openDesktopDropdown === item.label}
                          aria-controls={`dropdown-menu-${item.label}`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {openDesktopDropdown === item.label && (
                          <div
                            id={`dropdown-menu-${item.label}`}
                            className="dropdown-content absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl border z-50"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                                data-testid={`link-${subItem.label
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                onClick={() => setOpenDesktopDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`px-3 py-2 hover:text-blue-600 transition-colors nav-text ${
                          isScrolled ? "text-gray-900" : "text-navbar-text"
                        }`}
                        data-testid={`link-${item.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* CONTACT US BUTTON */}
              <div className="hidden lg:flex items-center ml-8">
                <button
                  onClick={handleContactUs}
                  className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-2 font-bold rounded-lg transition"
                  data-testid="button-contact-us"
                  style={{ minWidth: 120 }}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="lg:hidden flex-shrink-0 ml-auto">
              <button
                onClick={toggleMobileMenu}
                className={`hover:text-blue-600 transition-colors p-2 ${
                  isScrolled ? "text-gray-900" : "text-navbar-text"
                }`}
                aria-label="Toggle mobile menu"
                data-testid="button-mobile-menu-toggle"
                type="button"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-120 max-w-full bg-white shadow-2xl z-50 lg:hidden ${
          isMobileMenuOpen ? "open" : "hidden"
        }`}
        data-testid="mobile-menu"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="rounded p-2">
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain"/>
              </div>
              <span className="text-xl font-bold text-gray-900">Kryzen Software Solutions</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2"
              aria-label="Close mobile menu"
              data-testid="button-close-mobile-menu"
              type="button"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="space-y-2 px-6">
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-4">
                  {item.items ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full text-left py-3 text-gray-900 font-medium flex items-center justify-between"
                        data-testid={`button-mobile-dropdown-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                        type="button"
                        aria-expanded={openMobileDropdown === item.label}
                        aria-controls={`mobile-dropdown-menu-${item.label}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform ${
                            openMobileDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openMobileDropdown === item.label && (
                        <div
                          id={`mobile-dropdown-menu-${item.label}`}
                          className="pl-4 space-y-2 mt-2"
                        >
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={closeMobileMenu}
                              data-testid={`link-mobile-${subItem.label.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-3 text-gray-900 font-medium"
                      onClick={closeMobileMenu}
                      data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200 space-y-3">
            <button
              onClick={handleLetsTalkAI}
              className="w-full bg-pink-button hover:bg-pink-button-hover text-black px-6 py-3 rounded-lg font-medium transition-colors"
              data-testid="button-mobile-lets-talk-ai"
              type="button"
            >
              <span className="mr-2">🤖</span>
              Let's Talk AI
            </button>
            <button
              onClick={handleContactUs}
              className="w-full bg-cyan-button hover:bg-cyan-button-hover text-black px-6 py-3 rounded-lg font-medium transition-colors"
              data-testid="button-mobile-contact-us"
              type="button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
          data-testid="mobile-menu-backdrop"
        />
      )}
    </div>
  );
}


