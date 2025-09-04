// import { useState, useEffect } from "react";
// import { ChevronDown, Menu, X, Gem, Mail, Calendar, MapPin } from "lucide-react";
// import logo from "./image.png";
// import { Link } from 'react-router-dom';

// const navigationItems = [
//   {
//     label: "Product",
//     items: [
//       { label: "Software Solutions", href: "#" },
//       { label: "Mobile Apps", href: "#" },
//       { label: "Web Applications", href: "#" },
//       { label: "Enterprise Solutions", href: "#" },
//     ],
//   },
// ];

// const products = [
//   {
//     logo: "",
//     title: "Vidyalaya School Management Software",
//     desc: "",
//   },
//   {
//     logo: '',
//     title: "Vidyalaya Learning Management System",
//     desc: "",
//   },
//   {
//     logo: 'demoLogo3',
//     title: "Occupational Health And Safety Software",
//     desc: "",
//   },
// ];

// const ratings = [
//   { logo: '/google-logo.png', label: 'Google', stars: 5, reviews: '1012 REVIEWS' },
//   { logo: '/clutch-logo.png', label: 'Clutch', stars: 5, reviews: '301 REVIEWS' },
//   { logo: '/goodfirms-logo.png', label: 'GoodFirms', stars: 5, reviews: '201 REVIEWS' },
//   { logo: '/designrush-logo.png', label: 'DesignRush', stars: 5, reviews: '55 REVIEWS' },
//   { logo: '', label: 'Techreviewer', stars: 5, reviews: '5.0 RATING' },
// ];

// const services = [
//   {
//     label: "Mobile App Development",
//     sub: [
//       "Watch App Development",
//       "Mobile App Development",
//       "Cross Platform App Development",
//       "IPad App Development Services",
//       "Kotlin App Development",
//       "Hybrid App Development",
//       "Progressive Web App Development",
//       "Swift App Development",
//       "IBeacon App Development",
//       "Wearable App Development",
//       "Native App Development",
//       "Windows App Development",
//       "Custom Mobile App Development",
//       "B2B Mobile App Development",
//     ],
//   },
//   { label: "Back End Development", sub: [] },
//   { label: "AI & ML Development", sub: [] },
//   // More services...
// ];

// const solutions = [
//   "Health Care App Development",
//   "Education App Development",
//   "Uber Like App Development",
//   "Spotify Like App Development",
//   "Zomato Like App Development",
//   "Amazon Like App Development",
//   "Visitor Management System",
//   "Warehouse Management System",
//   "Clover App Development"
// ];


// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
//   const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
//   const [megaMenuVisible, setMegaMenuVisible] = useState(null);
//   const [activeService, setActiveService] = useState("Mobile App Development");

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       setIsScrolled(scrollTop > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     if (!isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//       setOpenMobileDropdown(null);
//     }
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     document.body.style.overflow = "auto";
//     setOpenMobileDropdown(null);
//   };

//   const toggleMobileDropdown = (label) => {
//     setOpenMobileDropdown(openMobileDropdown === label ? null : label);
//   };

//   const toggleDesktopDropdown = (label) => {
//     setOpenDesktopDropdown(openDesktopDropdown === label ? null : label);
//   };

//   const handleLetsTalkAI = () => {
//     console.log("Let's Talk AI clicked");
//   };

//   const handleContactUs = () => {
//     console.log("Contact Us clicked");
//   };

//   return (
//     <div className="relative">
      // {/* Contact Information Bar */}
      // <div
      //   className={`contact-bar-transition bg-contact-bg text-black px-4 py-2 text-sm overflow-hidden fixed top-0 left-0 right-0 z-40 ${isScrolled ? "hidden" : ""
      //     }`}
      //   data-testid="contact-bar"
      // >
      //   <div className="container mx-auto">
      //     <div className="flex flex-wrap items-center justify-between gap-4">
      //       {/* Contact Details Left Side */}
      //       <div className="flex flex-wrap items-center gap-6">
      //         {/* US Sales */}
      //         <div className="flex items-center gap-2">
      //           <img
      //             src="https://flagcdn.com/w20/us.png"
      //             alt="US Flag"
      //             className="w-4 h-3"
      //           />
      //           <span className="text-xs lg:text-sm">For Sales: +1-954-258-7870</span>
      //         </div>

      //         {/* India Sales */}
      //         <div className="flex items-center gap-2">
      //           <img
      //             src="https://flagcdn.com/w20/in.png"
      //             alt="India Flag"
      //             className="w-4 h-3"
      //           />
      //           <span className="text-xs lg:text-sm">For Sales: +91-942-070-8662</span>
      //         </div>

      //         {/* Company Location */}
      //         <div className="flex items-center gap-2">
      //           <MapPin className="w-4 h-4 text-blue-300" />
      //           <span className="text-xs lg:text-sm">Kryzen Software Solutions</span>
      //         </div>
      //       </div>

      //       {/* Contact Details Right Side */}
      //       <div className="flex items-center gap-4">
      //         {/* Email Contact */}
      //         <div className="flex items-center gap-2">
      //           <Mail className="w-4 h-4 text-blue-300" />
      //           <span className="text-xs lg:text-sm">contact@Kryzensolutions.net</span>
      //         </div>

      //         {/* Schedule Meeting */}
      //         <div className="flex items-center gap-2">
      //           <Calendar className="w-4 h-4 text-blue-300" />
      //           <button
      //             className="text-xs lg:text-sm cursor-pointer hover:text-blue-200 transition-colors"
      //             data-testid="button-schedule-meeting"
      //           >
      //             Schedule a Meeting
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav
//         className={`navbar-transition fixed left-0 right-0 z-50 shadow-lg transition-all duration-300 ${isScrolled
//           ? "top-0 bg-white text-gray-900"
//           : "top-12 bg-navbar-bg text-navbar-text"
//           }`}
//         data-testid="main-navbar"
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center h-16 w-full">
//             {/* LOGO AND BRAND */}
//             <div className="flex items-center whitespace-nowrap gap-3 mr-8 flex-shrink-0">
//               <Link to='/' className="rounded p-2 flex-shrink-0">
//                 <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
//               </Link>
//               <Link to='/'>
//                 <span
//                   className={`text-2xl font-bold ${isScrolled ? "text-gray-900" : "text-navbar-text"
//                     }`}
//                   data-testid="text-company-name"
//                 >
//                   Kryzen
//                 </span>
//                 <p className="text-gray">Software solutions</p>
//               </Link>
//             </div>

//             <div className="flex ml-7">
//               <div className="flex items-center space-x-8">
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setMegaMenuVisible("company")}
//                   onMouseLeave={() => setMegaMenuVisible(null)}
//                 >
//                   <button
//                     className="flex items-center font-semibold text-gray-900 hover:text-blue-700 px-4 py-2 transition"
//                     type="button"
//                   >
//                     Company
//                     <ChevronDown className="w-4 h-4 ml-1" />
//                   </button>
//                   {/* Mega Menu, shown only on hover */}
//                   {megaMenuVisible == 'company' && (
                //     <div className="absolute left-[24rem] top-full mt-3 w-[100vw] max-w-[1750px] -translate-x-1/2 bg-white z-50 py-0 px-0 overflow-x-auto">
                //       <div className="flex">
                //         {/* Left section */}
                //         <div className="bg-[#005D89] text-white flex flex-col items-start p-10 min-w-[330px] max-w-[390px]">
                //           <div className="text-3xl font-bold mb-5">Company</div>
                //           <div className="mb-7 text-lg">
                //             We Partner You To Deliver A Innovative Solution To Your Needs With Our 20+ Year Of Technical Experience With Fortune 500 Organizations.
                //           </div>
                //           <Link to="/about-Kryzen-Software-Solutions" className="bg-white border-0 text-blue-900 text-xl font-bold px-10 py-3 rounded shadow hover:bg-slate-50 transition mb-6 whitespace-nowrap">
                //             About Company
                //           </Link>
                //         </div>
                //         {/* Mega grid */}
                //         <div className="flex-1 px-6 py-8 w-full">
                //           <div className="grid grid-cols-4 gap-10 pb-7">
                //             {/* ABOUT US */}
                //             <div>
                //               <div className="font-bold text-blue-800 text-lg mb-4">ABOUT US</div>
                //               <div className="space-y-2 text-gray-800">
                //                 <div className="flex gap-15 whitespace-nowrap">
                //                   <div className="w-full">
                //                     <Link to='/about-Kryzen-Software-Solutions' onClick={() => setMegaMenuVisible(null)} className="w-full hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">About Kryzen</Link>
                //                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">CEO Message</div>
                //                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Events & Activities</div>
                //                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Brochure</div>
                //                   </div>
                //                   <div>
                //                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Why Choose Us</div>
                //                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Women Empowerment</div>
                //                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Awards & Recognition</div>
                //                   </div>
                //                   <div>
                //                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Blog</div>
                //                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Careers</div>
                //                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">CSR</div>
                //                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Podcast</div>
                //                   </div>
                //                 </div>
                //               </div>
                //             </div>
                //             {/* MODELS */}
                //             <div className="ml-[17rem] whitespace-nowrap group">
                //               <div className="font-bold text-blue-800 text-lg mb-4">MODELS</div>
                //               <div className="space-y-2 text-gray-800">
                //                 <div className="hover:bg-white hover:text-blue-800 hover:p-1 cursor-pointer py-1 rounded">Delivery Models</div>
                //                 <div className="hover:bg-white hover:text-blue-800 hover:p-1 cursor-pointer py-1 rounded">Engagement Models</div>
                //                 <div className="hover:bg-white hover:text-blue-800 hover:p-1 cursor-pointer py-1 rounded">Development Methodology</div>
                //               </div>
                //             </div>

                //             {/* TESTIMONIAL */}
                //             <div className="ml-[17rem] whitespace-nowrap">
                //               <div className="font-bold text-blue-800 text-lg mb-4">TESTIMONIAL</div>
                //               <div className="space-y-2 text-gray-800">
                //                 <div className="hover:bg-white hover:p-1 hover:text-blue-800 cursor-pointer py-1 rounded">Client Testimonials</div>
                //               </div>
                //             </div>


                //           </div>
                //           {/* Reviews and Rating Row */}
                //           <div className="mt-4 flex gap-7 items-center pt-5 border-t">
                //             <div className="font-bold text-blue-800 text-lg mr-4">REVIEWS AND RATING</div>
                //             <div className="flex gap-6 pt-4" style={{ transform: 'transLateX(-15rem)' }}>
                //               <div className="flex flex-col"><img src="/google-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">1012 REVIEWS</span></div>
                //               <div className="flex flex-col"><img src="/clutch-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">301 REVIEWS</span></div>
                //               <div className="flex flex-col"><img src="/goodfirms-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">201 REVIEWS</span></div>
                //               <div className="flex flex-col"><img src="/designrush-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">55 REVIEWS</span></div>
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   )}
                // </div>
//               </div>

//               <div className="flex items-center space-x-8">
//                 <div className="relative"
//                   onMouseEnter={() => setMegaMenuVisible('products')}
//                   onMouseLeave={() => setMegaMenuVisible(null)}
//                 >
//                   <button
//                     className="flex items-center font-semibold text-gray-900 hover:text-blue-700 px-4 py-2 transition"
//                     type="button"
//                   >
//                     products
//                     <ChevronDown className="w-4 h-4 ml-1" />
//                   </button>

//                   {megaMenuVisible == 'products' && (
                    // <div className="absolute left-[17rem] w-[100vw] mt-3 max-w-[1750px] -translate-x-1/2 bg-white z-50 shadow-xl flex rounded">
                    //   {/* Left Panel */}
                    //   <div className="bg-[#0178a8] flex flex-col justify-between text-white p-10 min-w-[350px] max-w-[390px]">
                    //     <div>
                    //       <div className="text-3xl font-bold mb-5">Product</div>
                    //       <div className="mb-7 text-xl leading-snug">
                    //         Our Curiosity Has Led Us To Break New Grounds And Nurture A Brave New World Of Innovative Products.
                    //       </div>
                    //     </div>
                    //     <button className="bg-white text-[#0178a8] px-8 py-3 rounded font-bold mt-5 hover:bg-blue-50 transition">
                    //       Book A Demo
                    //     </button>
                    //   </div>

                    //   {/* Main Product Cards and Reviews Row */}
                    //   <div className="flex-1 flex flex-col justify-between px-6 py-8">
                    //     {/* Product Cards */}
                    //     <div className="flex justify-between items-start gap-6 mb-5">
                    //       {products.map((prod) => (
                    //         <div key={prod.title} className="bg-[#f5fafc] rounded-xl flex flex-col justify-center items-center px-8 py-9 w-1/3 mx-1 shadow-sm">
                    //           <div className="font-bold text-xl text-gray-800 text-center leading-tight">
                    //             {prod.title}
                    //           </div>
                    //           {prod.desc && <div className="text-sm text-center text-gray-600 mt-1">{prod.desc}</div>}
                    //         </div>
                    //       ))}
                    //     </div>
                    //     {/* Reviews and Rating Row */}
                    //     <div>
                    //       <div className="font-bold text-blue-800 text-lg mb-2">REVIEWS AND RATING</div>
                    //       <div className="flex items-center gap-8">
                    //         {ratings.map((rate) => (
                    //           <div key={rate.label} className="flex flex-col items-center">
                    //             <span className="text-black font-bold text-xs">{rate.reviews}</span>
                    //           </div>
                    //         ))}
                    //       </div>
                    //     </div>
                    //   </div>

                    //   {/* Right Partner Panel */}
                    //   <div className="bg-blue-50 flex flex-col items-center justify-center min-w-[350px] max-w-[400px] px-12 py-6 text-center">
                    //     <div className="text-2xl font-bold text-gray-900 mb-3">
                    //       Let's grow together <br /><span className="text-black">Partner with us</span>
                    //     </div>
                    //     <button className="bg-[#0178a8] text-white font-semibold px-8 py-3 rounded mt-4 mb-8 hover:bg-blue-900 transition">
                    //       Get A Quote
                    //     </button>
                    //     <img src='https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg' alt="Partner Illustration" className="w-52 max-w-full" />
                    //   </div>
                    // </div>
//                   )}
//                 </div>

//               </div>

//               <div className="flex items-center space-x-8">
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setMegaMenuVisible('service')}
//                   onMouseLeave={() => setMegaMenuVisible(null)}
//                 >
//                   <button
//                     className="flex items-center font-semibold text-gray-900 hover:text-blue-700 px-4 py-2 transition"
//                     type="button">Service
//                     <ChevronDown className="w-4 h-4 ml-1" />
//                   </button>

//                   {megaMenuVisible === "service" && (
                    // <div className="absolute left-[9rem] w-[100vw] mt-3 max-w-[1750px] -translate-x-1/2 bg-white z-50 shadow-xl flex rounded">
                    //   {/* Left info panel */}
                    //   <div className="bg-[#0178a8] text-white flex flex-col justify-between p-10 min-w-[330px] max-w-[390px]">
                    //     <div>
                    //       <div className="text-3xl font-bold mb-5">Service</div>
                    //       <div className="mb-7 text-xl">
                    //         Our Portfolio Of Services Range From Designing Strategy To Delivering Impact.
                    //       </div>
                    //     </div>
                    //     <button className="bg-white text-[#0178a8] px-8 py-3 rounded font-bold mt-5">Hire Now</button>
                    //   </div>
                    //   {/* Main menu */}
                    //   <div className="flex-1 flex">
                    //     {/* Vertical root list */}
                    //     <div className="bg-gray-50 min-w-[320px] max-w-[320px] divide-y">
                    //       {services.map((svc) => (
                    //         <div
                    //           key={svc.label}
                    //           className={`px-8 py-3 flex items-center justify-between cursor-pointer font-semibold text-lg ${activeService === svc.label
                    //             ? "bg-white text-[#0178a8]"
                    //             : "hover:bg-gray-100"
                    //             }`}
                    //           onMouseEnter={() => setActiveService(svc.label)}
                    //         >
                    //           {svc.label}
                    //           {svc.sub?.length > 0 && (
                    //             <span className="ml-auto text-[#0178a8]">&gt;</span>
                    //           )}
                    //         </div>
                    //       ))}
                    //     </div>
                    //     {/* Right sub-menu (columns) */}
                    //     {services.find((s) => s.label === activeService)?.sub?.length > 0 && (
                    //       <div className="bg-white flex-1 flex flex-wrap p-8">
                    //         {/* Split sub-services into two columns; adjust as needed */}
                    //         {[
                    //           services
                    //             .find((s) => s.label === activeService)
                    //             .sub.slice(0, 7),
                    //           services
                    //             .find((s) => s.label === activeService)
                    //             .sub.slice(7),
                    //         ].map((col, i) => (
                    //           <div key={i} className="w-1/2">
                    //             {col.map((item) => (
                    //               <div key={item} className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">
                    //                 {item}
                    //               </div>
                    //             ))}
                    //           </div>
                    //         ))}
                    //       </div>
                    //     )}
                    //   </div>
                    // </div>
//                   )}
//                 </div>

//               </div>

//               <div className="flex items-center space-x-8">
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setMegaMenuVisible('technology')}
//                   onMouseLeave={() => setMegaMenuVisible(null)}
//                 >
//                   <button
//                     className="flex items-center font-semibold text-gray-900 hover:text-blue-700 px-4 py-2 transition"
//                     type="button"
//                   >
//                     Technology
//                     <ChevronDown className="w-4 h-4 ml-1" />
//                   </button>
//                   {megaMenuVisible == 'technology' && (
                    // <div className="absolute left-[3rem] top-full mt-3 w-[100vw] max-w-[1800px] -translate-x-1/2 bg-white z-50 shadow-xl rounded transition-all duration-200 py-0 px-0 overflow-x-auto">
                    //   <div className="flex">
                    //     {/* Left Blue Section */}
                    //     <div className="bg-[#005D89] text-white flex flex-col items-start p-10 min-w-[330px] max-w-[390px]">
                    //       <div className="text-3xl font-bold mb-5">Technology</div>
                    //       <div className="mb-7 text-xl">
                    //         Technology Is Best When It Brings People Together.
                    //       </div>
                    //       <Link
                    //         to="/about-company"
                    //         className="bg-white mt-22 border-0 text-blue-900 text-lg font-bold px-8 py-3 rounded shadow hover:bg-blue-50 transition mb-6 whitespace-nowrap"
                    //       >
                    //         About Company
                    //       </Link>
                    //     </div>
                    //     {/* Mega Grid */}
                    //     <div className="flex-1 px-8 py-10 w-full">
                    //       <div className="grid grid-cols-4 gap-16 pb-2">
                    //         {/* MOBILE */}
                    //         <div>
                    //           <div className="font-bold text-blue-800 text-lg mb-4">MOBILE</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Android</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">IOS</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Flutter</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">React Native</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Xamarin</div>
                    //           <div className="font-bold text-blue-800 text-lg mb-4 mt-6">FRONTEND</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Angular</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">React</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Vuejs</div>
                    //         </div>
                    //         {/* BACKEND & FRONTEND */}
                    //         <div>
                    //           <div className="font-bold text-blue-800 text-lg mb-4">BACKEND</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">.NET</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">PHP</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Java</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Nodejs</div>
                    //         </div>
                    //         {/* TRENDING */}
                    //         <div>
                    //           <div className="font-bold text-blue-800 text-lg mb-4">TRENDING</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Generative AI</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">AI & ML</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Blockchain</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Full Stack</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">VR & AR</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">IoT</div>
                    //         </div>
                    //         {/* OTHERS */}
                    //         <div>
                    //           <div className="font-bold text-blue-800 text-lg mb-4">OTHERS</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Wordpress</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Drupal</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Umbraco</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Sitecore</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Sitefinity</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Magento</div>
                    //           <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Shopify</div>
                    //         </div>
                    //       </div>
                    //     </div>
                    //     <div className="bg-blue-50 flex flex-col items-center justify-center min-w-[350px] max-w-[400px] px-12 py-6">
                    //       <div className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    //         Let's grow together <br /> <span className="text-black">Partner with us</span>
                    //       </div>
                    //       <button className="bg-blue-800 text-white font-semibold px-8 py-3 rounded mt-4 mb-8 hover:bg-blue-900 transition">
                    //         Get A Quote
                    //       </button>
                    //       <img src="https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg" className="h-55" alt="" />
                    //       {/* or use an <img> with a network URL as in your screenshot */}
                    //     </div>
                    //   </div>
                    // </div>
//                   )}
//                 </div>
//               </div>

//               <div className="flex items-center space-x-8">
//                 <div className="relative"
//                   onMouseEnter={() => setMegaMenuVisible('ourwork')}
//                   onMouseLeave={() => setMegaMenuVisible(null)}
//                 >
//                   <button
//                     className="flex whitespace-nowrap items-center font-semibold text-gray-900 hover:text-blue-700 px-4 py-2 transition"
//                     type="button"
//                   >
//                     Our work
//                     <ChevronDown className="w-4 h-4 ml-1" />
//                   </button>

//                   <div className="absolute left-[-5rem] mt-3 w-[100vw] max-w-[1800px] -translate-x-1/2 bg-white z-50 shadow-xl rounded transition-all duration-200 py-0 px-0 overflow-x-auto">
//                     {megaMenuVisible == 'ourwork' && (
                      // <div className="w-full flex bg-white text-gray-900 rounded shadow-xl pb-7 overflow-hidden" style={{ minHeight: 390 }}>
                      //   {/* Left Panel */}
                      //   <div className="bg-[#0178a8] flex flex-col justify-between text-white p-10 min-w-[350px] max-w-[390px]">
                      //     <div>
                      //       <div className="text-3xl font-bold mb-5">Our Work</div>
                      //       <div className="mb-7 text-xl leading-snug">
                      //         Insights From Sapphire Experts Who Help The World's Most Successful Fortune 500 Companies Solve Key Challenges. Lets Shape Happier Tomorrow.
                      //       </div>
                      //     </div>
                      //     <button className="bg-white text-[#0178a8] px-8 py-3 rounded font-bold mt-5 hover:bg-blue-50 transition">
                      //       Request A Quote
                      //     </button>
                      //   </div>

                      //   {/* Center Solutions & Right Portfolio */}
                      //   <div className="flex-1 flex px-6 py-8 items-start gap-9">
                      //     {/* Solutions Column */}
                      //     <div className="w-1/3">
                      //       <div className="font-bold text-blue-800 text-xl mb-3 uppercase">SOLUTIONS</div>
                      //       {solutions.map((sol) => (
                      //         <div key={sol} className="py-2 font-medium hover:text-[#0178a8] cursor-pointer transition">{sol}</div>
                      //       ))}
                      //     </div>
                      //     {/* Case Study */}
                      //     <div className="w-1/3 flex flex-col items-center justify-start">
                      //       <div className="font-bold text-blue-800 text-xl mb-3 uppercase text-center">CASE STUDY</div>
                      //       <div className="bg-[#f5fafc] rounded-xl flex items-center justify-center w-full py-4 px-0 h-48">
                      //         <img src='https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg' alt="Case Study" className="object-contain h-36" />
                      //       </div>
                      //     </div>
                      //     {/* Portfolio */}
                      //     <div className="w-1/3 flex flex-col items-center justify-start">
                      //       <div className="font-bold text-blue-800 text-xl mb-3 uppercase text-center">PORTFOLIO</div>
                      //       <div className="bg-[#f5fafc] rounded-xl flex items-center justify-center w-full py-4 px-0 h-48">
                      //         <img src='https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg' alt="Portfolio" className="object-contain h-36" />
                      //       </div>
                      //     </div>
                      //   </div>
                      // </div>
//                     )}
//                   </div>

//                 </div>

//               </div>

//               {/* NAVIGATION ITEMS + ACTION BUTTON */}
              // <div className="flex items-center justify-between w-full p-4">

              //   <div className="hidden lg:flex items-center ml-2 mr-5">
              //     <button
              //       onClick={handleContactUs}
              //       className="bg-[#D2497E] hover:bg-cyan-600 text-white px-6 py-2 font-bold rounded-lg transition"
              //       data-testid="button-contact-us"
              //       style={{ minWidth: 120 }}
              //     >
              //       Let's Talk AI
              //     </button>
              //   </div>

              //   {/* CONTACT US BUTTON */}
              //   <div className="hidden lg:flex items-center">
              //     <button
              //       onClick={handleContactUs}
              //       className="bg-cyan-500 hover:bg-cyan-600 text-black py-2 font-bold rounded-lg transition"
              //       data-testid="button-contact-us"
              //       style={{ minWidth: 120 }}
              //     >
              //       Contact Us
              //     </button>
              //   </div>
              // </div>
//             </div>
//             {/* MOBILE MENU TOGGLE */}
//             <div className="lg:hidden flex-shrink-0 ml-auto">
//               <button
//                 onClick={toggleMobileMenu}
//                 className={`hover:text-blue-600 transition-colors p-2 ${isScrolled ? "text-gray-900" : "text-navbar-text"
//                   }`}
//                 aria-label="Toggle mobile menu"
//                 data-testid="button-mobile-menu-toggle"
//                 type="button"
//               >
//                 <Menu className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`mobile-menu fixed top-0 right-0 h-full w-120 max-w-full bg-white shadow-2xl z-50 lg:hidden ${isMobileMenuOpen ? "open" : "hidden"
//           }`}
//         data-testid="mobile-menu"
//       >
//         <div className="flex flex-col h-full">
//           {/* Mobile Menu Header */}
//           <div className="flex items-center justify-between p-6 border-b border-gray-200">
//             <div className="flex items-center gap-3">
//               <div className="rounded p-2">
//                 <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
//               </div>
//               <span className="text-xl font-bold text-gray-900">Kryzen Software Solutions</span>
//             </div>
//             <button
//               onClick={closeMobileMenu}
//               className="text-gray-600 hover:text-gray-900 transition-colors p-2"
//               aria-label="Close mobile menu"
//               data-testid="button-close-mobile-menu"
//               type="button"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Mobile Menu Content */}
//           <div className="flex-1 overflow-y-auto py-6">
//             <div className="space-y-2 px-6">
//               {navigationItems.map((item) => (
//                 <div key={item.label} className="border-b border-gray-100 pb-4">
//                   {item.items ? (
//                     <>
//                       <button
//                         onClick={() => toggleMobileDropdown(item.label)}
//                         className="w-full text-left py-3 text-gray-900 font-medium flex items-center justify-between"
//                         data-testid={`button-mobile-dropdown-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
//                         type="button"
//                         aria-expanded={openMobileDropdown === item.label}
//                         aria-controls={`mobile-dropdown-menu-${item.label}`}
//                       >
//                         <span>{item.label}</span>
//                         <ChevronDown
//                           className={`w-4 h-4 text-gray-400 transition-transform ${openMobileDropdown === item.label ? "rotate-180" : ""
//                             }`}
//                         />
//                       </button>
//                       {openMobileDropdown === item.label && (
//                         <div
//                           id={`mobile-dropdown-menu-${item.label}`}
//                           className="pl-4 space-y-2 mt-2"
//                         >
//                           {item.items.map((subItem) => (
//                             <Link
//                               key={subItem.label}
//                               to={subItem.href}
//                               className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
//                               onClick={closeMobileMenu}
//                               data-testid={`link-mobile-${subItem.label.toLowerCase().replace(/\s+/g, "-")}`}
//                             >
//                               {subItem.label}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link
//                       to={item.href}
//                       className="block py-3 text-gray-900 font-medium"
//                       onClick={closeMobileMenu}
//                       data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Menu Footer */}
//           <div className="p-6 border-t border-gray-200 space-y-3">
//             <button
//               onClick={handleLetsTalkAI}
//               className="w-full bg-pink-button hover:bg-pink-button-hover text-black px-6 py-3 rounded-lg font-medium transition-colors"
//               data-testid="button-mobile-lets-talk-ai"
//               type="button"
//             >
//               <span className="mr-2">🤖</span>
//               Let's Talk AI
//             </button>
//             <button
//               onClick={handleContactUs}
//               className="w-full bg-cyan-button hover:bg-cyan-button-hover text-black px-6 py-3 rounded-lg font-medium transition-colors"
//               data-testid="button-mobile-contact-us"
//               type="button"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Backdrop */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={closeMobileMenu}
//           data-testid="mobile-menu-backdrop"
//         />
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Mail, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "./image.png"; // Replace with your actual logo import

const products = [
  { title: "Vidyalaya School Management Software" },
  { title: "Vidyalaya Learning Management System" },
  { title: "Occupational Health And Safety Software" }
];
const ratings = [
  { label: "Google", reviews: "1012 REVIEWS" },
  { label: "Clutch", reviews: "301 REVIEWS" },
  { label: "GoodFirms", reviews: "201 REVIEWS" },
  { label: "DesignRush", reviews: "55 REVIEWS" }
];

const services = [
  {
    label: "Mobile App Development",
    sub: [
      "Watch App Development", "Mobile App Development", "Cross Platform App Development", "IPad App Development Services",
      "Kotlin App Development", "Hybrid App Development", "Progressive Web App Development", "Swift App Development",
      "IBeacon App Development", "Wearable App Development", "Native App Development", "Windows App Development",
      "Custom Mobile App Development", "B2B Mobile App Development"
    ]
  },
  { label: "Back End Development", sub: [] },
  { label: "AI & ML Development", sub: [] }
];

const solutions = [
  "Health Care App Development", "Education App Development", "Uber Like App Development", "Spotify Like App Development",
  "Zomato Like App Development", "Amazon Like App Development", "Visitor Management System", "Warehouse Management System",
  "Clover App Development"
];

// Mobile navigation items (example)
const navigationItems = [
  {
    label: "Company",
    items: [
      { label: "About", to: "/about-Kryzen-Software-Solutions" },
      { label: "Why Choose Us", to: "/choose" },
      { label: "Careers", to: "/careers" },
      { label: "Contact Us", to: "/contact" }
    ],
  },
  {
    label: "Product",
    items: [{ label: "Demo", to: "/demo" }],
  },
  {
    label: "Service",
    items: [{ label: "Mobile App", to: "/mobile-app" }],
  },
  {
    label: "Technology",
    items: [{ label: "React", to: "/technology/react" }],
  },
  {
    label: "Our Work",
    items: [{ label: "Cases", to: "/our-work/cases" }],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [megaMenuVisible, setMegaMenuVisible] = useState(null);
  const [activeService, setActiveService] = useState("Mobile App Development");
const [openDropdown, setOpenDropdown] = useState(null);

  
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
      setOpenMobileDropdown(null);
    }
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
    setOpenMobileDropdown(null);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="relative">
      {/* Contact Bar */}
      <div
        className={`contact-bar-transition bg-contact-bg text-black px-4 py-2 text-sm overflow-hidden fixed top-0 left-0 right-0 z-40 ${isScrolled ? "hidden" : ""
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
                <span className="text-xs lg:text-sm">Kryzen Software Solutions</span>
              </div>
            </div>

            {/* Contact Details Right Side */}
            <div className="flex items-center gap-4">
              {/* Email Contact */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-300" />
                <span className="text-xs lg:text-sm">contact@Kryzensolutions.net</span>
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
      <nav className={`fixed left-0 right-0 z-50 shadow-lg transition-all duration-300 ${isScrolled ? "top-0 bg-white text-gray-900" : "top-12 bg-navbar-bg text-navbar-text"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16 w-full">
            {/* LOGO */}
            <div className="flex items-center whitespace-nowrap gap-3 mr-8 flex-shrink-0">
              <Link to='/' className="rounded p-2 flex-shrink-0">
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
              </Link>
              <Link to='/'><span className={`text-2xl font-bold ${isScrolled ? "text-gray-900" : "text-navbar-text"}`}>Kryzen</span><p className="text-gray">Software solutions</p></Link>
            </div>
            <div className="hidden lg:flex flex-1 flex-wrap items-center space-x-3">
              {/* Mega Menu Triggers */}
              {[
                { label: "Company", menu: "company" },
                { label: "Product", menu: "products" },
                { label: "Service", menu: "service" },
                { label: "Technology", menu: "technology" },
                { label: "Our Work", menu: "ourwork" }
              ].map(({ label, menu }) => (
                <div key={label} className="relative"
                  onMouseEnter={() => setMegaMenuVisible(menu)}
                  onMouseLeave={() => setMegaMenuVisible(null)}
                >
                  <button className="flex items-center font-semibold text-gray-900 hover:text-blue-700 px-4 py-2 transition">
                    {label}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  
                  {/* -------- MEGA MENUS: Responsive Layouts -------- */}
                  {megaMenuVisible === menu && (
                    <div>
                      {menu === 'company' && (
                        <div className="absolute left-[24rem] top-full mt-3 w-[100vw] max-w-[1750px] -translate-x-1/2 bg-white z-50 py-0 px-0 overflow-x-auto">
                        <div className="flex">
                         {/* Left section */}
                         <div className="bg-[#005D89] text-white flex flex-col items-start p-10 min-w-[330px] max-w-[390px]">
                           <div className="text-3xl font-bold mb-5">Company</div>
                           <div className="mb-7 text-lg">
                            We Partner You To Deliver A Innovative Solution To Your Needs With Our 20+ Year Of Technical Experience With Fortune 500 Organizations.
                          </div>
                           <Link to="/about-Kryzen-Software-Solutions" className="bg-white border-0 text-blue-900 text-xl font-bold px-10 py-3 rounded shadow hover:bg-slate-50 transition mb-6 whitespace-nowrap">
                             About Company
                           </Link>
                         </div>
                        {/* Mega grid */}
                         <div className="flex-1 px-6 py-8 w-full">
                           <div className="grid grid-cols-4 gap-10 pb-7">
                             {/* ABOUT US */}
                             <div>
                               <div className="font-bold text-blue-800 text-lg mb-4">ABOUT US</div>
                               <div className="space-y-2 text-gray-800">
                                 <div className="flex gap-15 whitespace-nowrap">
                                   <div className="w-full">
                                     <Link to='/about-Kryzen-Software-Solutions' onClick={() => setMegaMenuVisible(null)} className="w-full hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">About Kryzen</Link>
                                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">CEO Message</div>
                                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Events & Activities</div>
                                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Brochure</div>
                                   </div>
                                   <div>
                                     <Link to='/choose' onMouseLeave={() => setMegaMenuVisible(null)} className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Why Choose Us</Link>
                                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Women Empowerment</div>
                                    <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Awards & Recognition</div>                </div>
                                   <div>
                                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Blog</div>
                                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Careers</div>
                                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">CSR</div>
                                     <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Podcast</div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                             {/* MODELS */}
                              <div className="ml-[17rem] whitespace-nowrap group">
                              <div className="font-bold text-blue-800 text-lg mb-4">MODELS</div>
                               <div className="space-y-2 text-gray-800">
                                 <div className="hover:bg-white hover:text-blue-800 hover:p-1 cursor-pointer py-1 rounded">Delivery Models</div>
                                 <div className="hover:bg-white hover:text-blue-800 hover:p-1 cursor-pointer py-1 rounded">Engagement Models</div>
                                 <div className="hover:bg-white hover:text-blue-800 hover:p-1 cursor-pointer py-1 rounded">Development Methodology</div>
                               </div>
                             </div>

                             {/* TESTIMONIAL */}
                             <div className="ml-[17rem] whitespace-nowrap">
                               <div className="font-bold text-blue-800 text-lg mb-4">TESTIMONIAL</div>
                               <div className="space-y-2 text-gray-800">
                                 <div className="hover:bg-white hover:p-1 hover:text-blue-800 cursor-pointer py-1 rounded">Client Testimonials</div>
                               </div>
                             </div>


                           </div>
                           {/* Reviews and Rating Row */}
                           <div className="mt-4 flex gap-7 items-center pt-5 border-t">
                             <div className="font-bold text-blue-800 text-lg mr-4">REVIEWS AND RATING</div>
                             <div className="flex gap-6 pt-4" style={{ transform: 'transLateX(-15rem)' }}>
                               <div className="flex flex-col"><img src="/google-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">1012 REVIEWS</span></div>
                               <div className="flex flex-col"><img src="/clutch-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">301 REVIEWS</span></div>
                               <div className="flex flex-col"><img src="/goodfirms-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">201 REVIEWS</span></div>
                              <div className="flex flex-col"><img src="/designrush-logo.png" alt="" className="h-8" /><span className="text-black font-bold text-xs">55 REVIEWS</span></div>
                             </div>
                          </div>
                            </div>
                          </div>
                          </div>
                      )}
                      {menu === 'products' && (
                        <div className="absolute left-[15rem] w-[100vw] mt-3 max-w-[1750px] -translate-x-1/2 bg-white z-50 shadow-xl flex rounded">
                      {/* Left Panel */}
                      <div className="bg-[#0178a8] flex flex-col justify-between text-white p-10 min-w-[350px] max-w-[390px]">
                        <div>
                          <div className="text-3xl font-bold mb-5">Product</div>
                          <div className="mb-7 text-xl leading-snug">
                            Our Curiosity Has Led Us To Break New Grounds And Nurture A Brave New World Of Innovative Products.
                          </div>
                        </div>
                        <button className="bg-white text-[#0178a8] px-8 py-3 rounded font-bold mt-5 hover:bg-blue-50 transition">
                          Book A Demo
                        </button>
                      </div>

                      {/* Main Product Cards and Reviews Row */}
                      <div className="flex-1 flex flex-col justify-between px-6 py-8">
                        {/* Product Cards */}
                        <div className="flex justify-between items-start gap-6 mb-5">
                          {products.map((prod) => (
                            <div key={prod.title} className="bg-[#f5fafc] rounded-xl flex flex-col justify-center items-center px-8 py-9 w-1/3 mx-1 shadow-sm">
                              <div className="font-bold text-xl text-gray-800 text-center leading-tight">
                                {prod.title}
                              </div>
                              {prod.desc && <div className="text-sm text-center text-gray-600 mt-1">{prod.desc}</div>}
                            </div>
                          ))}
                        </div>
                        {/* Reviews and Rating Row */}
                        <div>
                          <div className="font-bold text-blue-800 text-lg mb-2">REVIEWS AND RATING</div>
                          <div className="flex items-center gap-8">
                            {ratings.map((rate) => (
                              <div key={rate.label} className="flex flex-col items-center">
                                <span className="text-black font-bold text-xs">{rate.reviews}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Partner Panel */}
                      <div className="bg-blue-50 flex flex-col items-center justify-center min-w-[350px] max-w-[400px] px-12 py-6 text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-3">
                          Let's grow together <br /><span className="text-black">Partner with us</span>
                        </div>
                        <button className="bg-[#0178a8] text-white font-semibold px-8 py-3 rounded mt-4 mb-8 hover:bg-blue-900 transition">
                          Get A Quote
                        </button>
                        <img src='https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg' alt="Partner Illustration" className="w-52 max-w-full" />
                      </div>
                    </div>
                      )}
                      {menu === 'service' && (
                        <div className="absolute left-[8rem] w-[100vw] mt-3 max-w-[1750px] -translate-x-1/2 bg-white z-50 shadow-xl flex rounded">
                      {/* Left info panel */}
                      <div className="bg-[#0178a8] text-white flex flex-col justify-between p-10 min-w-[330px] max-w-[390px]">
                        <div>
                          <div className="text-3xl font-bold mb-5">Service</div>
                          <div className="mb-7 text-xl">
                            Our Portfolio Of Services Range From Designing Strategy To Delivering Impact.
                          </div>
                        </div>
                        <button className="bg-white text-[#0178a8] px-8 py-3 rounded font-bold mt-5">Hire Now</button>
                      </div>
                      {/* Main menu */}
                      <div className="flex-1 flex">
                        {/* Vertical root list */}
                        <div className="bg-gray-50 min-w-[320px] max-w-[320px] divide-y">
                          {services.map((svc) => (
                            <div
                              key={svc.label}
                              className={`px-8 py-3 flex items-center justify-between cursor-pointer font-semibold text-lg ${activeService === svc.label
                                ? "bg-white text-[#0178a8]"
                                : "hover:bg-gray-100"
                                }`}
                              onMouseEnter={() => setActiveService(svc.label)}
                            >
                              {svc.label}
                              {svc.sub?.length > 0 && (
                                <span className="ml-auto text-[#0178a8]">&gt;</span>
                              )}
                            </div>
                          ))}
                        </div>
                        {/* Right sub-menu (columns) */}
                        {services.find((s) => s.label === activeService)?.sub?.length > 0 && (
                          <div className="bg-white flex-1 flex flex-wrap p-8">
                            {/* Split sub-services into two columns; adjust as needed */}
                            {[
                              services
                                .find((s) => s.label === activeService)
                                .sub.slice(0, 7),
                              services
                                .find((s) => s.label === activeService)
                                .sub.slice(7),
                            ].map((col, i) => (
                              <div key={i} className="w-1/2">
                                {col.map((item) => (
                                  <div key={item} className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">
                                    {item}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                      )}
                      {menu === 'technology' && (
                       <div className="absolute left-[1rem] top-full mt-3 w-[100vw] max-w-[1800px] -translate-x-1/2 bg-white z-50 shadow-xl rounded transition-all duration-200 py-0 px-0 overflow-x-auto">
                      <div className="flex">
                        {/* Left Blue Section */}
                        <div className="bg-[#005D89] text-white flex flex-col items-start p-10 min-w-[330px] max-w-[390px]">
                          <div className="text-3xl font-bold mb-5">Technology</div>
                          <div className="mb-7 text-xl">
                            Technology Is Best When It Brings People Together.
                          </div>
                          <Link
                            to="/about-company"
                            className="bg-white mt-22 border-0 text-blue-900 text-lg font-bold px-8 py-3 rounded shadow hover:bg-blue-50 transition mb-6 whitespace-nowrap"
                          >
                            About Company
                          </Link>
                        </div>
                        {/* Mega Grid */}
                        <div className="flex-1 px-8 py-10 w-full">
                          <div className="grid grid-cols-4 gap-16 pb-2">
                            {/* MOBILE */}
                            <div>
                              <div className="font-bold text-blue-800 text-lg mb-4">MOBILE</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Android</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">IOS</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Flutter</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">React Native</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Xamarin</div>
                              <div className="font-bold text-blue-800 text-lg mb-4 mt-6">FRONTEND</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Angular</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">React</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Vuejs</div>
                            </div>
                            {/* BACKEND & FRONTEND */}
                            <div>
                              <div className="font-bold text-blue-800 text-lg mb-4">BACKEND</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">.NET</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">PHP</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Java</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Nodejs</div>
                            </div>
                            {/* TRENDING */}
                            <div>
                              <div className="font-bold text-blue-800 text-lg mb-4">TRENDING</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Generative AI</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">AI & ML</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Blockchain</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Full Stack</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">VR & AR</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">IoT</div>
                            </div>
                            {/* OTHERS */}
                            <div>
                              <div className="font-bold text-blue-800 text-lg mb-4">OTHERS</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Wordpress</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Drupal</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Umbraco</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Sitecore</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Sitefinity</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Magento</div>
                              <div className="hover:bg-blue-600 hover:text-white hover:p-1 cursor-pointer py-1 rounded">Shopify</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue-50 flex flex-col items-center justify-center min-w-[350px] max-w-[400px] px-12 py-6">
                          <div className="text-2xl font-bold text-gray-900 mb-3 text-center">
                            Let's grow together <br /> <span className="text-black">Partner with us</span>
                          </div>
                          <button className="bg-blue-800 text-white font-semibold px-8 py-3 rounded mt-4 mb-8 hover:bg-blue-900 transition">
                            Get A Quote
                          </button>
                          <img src="https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg" className="h-55" alt="" />
                          {/* or use an <img> with a network URL as in your screenshot */}
                        </div>
                      </div>
                    </div>
                      )}
                      {menu === 'ourwork' && (
                        <div className="absolute left-[-8rem] mt-3 w-[100vw] max-w-[1800px] -translate-x-1/2 bg-white z-50 shadow-xl rounded transition-all duration-200 py-0 px-0 overflow-x-auto">
                   <div className="w-full flex bg-white text-gray-900 rounded shadow-xl pb-7 overflow-hidden" style={{ minHeight: 390 }}>
                        {/* Left Panel */}
                        <div className="bg-[#0178a8] flex flex-col justify-between text-white p-10 min-w-[350px] max-w-[390px]">
                          <div>
                            <div className="text-3xl font-bold mb-5">Our Work</div>
                            <div className="mb-7 text-xl leading-snug">
                              Insights From Sapphire Experts Who Help The World's Most Successful Fortune 500 Companies Solve Key Challenges. Lets Shape Happier Tomorrow.
                            </div>
                          </div>
                          <button className="bg-white text-[#0178a8] px-8 py-3 rounded font-bold mt-5 hover:bg-blue-50 transition">
                            Request A Quote
                          </button>
                        </div>

                        {/* Center Solutions & Right Portfolio */}
                        <div className="flex-1 flex px-6 py-8 items-start gap-9">
                          {/* Solutions Column */}
                          <div className="w-1/3">
                            <div className="font-bold text-blue-800 text-xl mb-3 uppercase">SOLUTIONS</div>
                            {solutions.map((sol) => (
                              <div key={sol} className="py-2 font-medium hover:text-[#0178a8] cursor-pointer transition">{sol}</div>
                            ))}
                          </div>
                          {/* Case Study */}
                          <div className="w-1/3 flex flex-col items-center justify-start">
                            <div className="font-bold text-blue-800 text-xl mb-3 uppercase text-center">CASE STUDY</div>
                            <div className="bg-[#f5fafc] rounded-xl flex items-center justify-center w-full py-4 px-0 h-48">
                              <img src='https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg' alt="Case Study" className="object-contain h-36" />
                            </div>
                          </div>
                          {/* Portfolio */}
                          <div className="w-1/3 flex flex-col items-center justify-start">
                            <div className="font-bold text-blue-800 text-xl mb-3 uppercase text-center">PORTFOLIO</div>
                            <div className="bg-[#f5fafc] rounded-xl flex items-center justify-center w-full py-4 px-0 h-48">
                              <img src='https://www.shutterstock.com/shutterstock/photos/1549501607/display_1500/stock-vector-two-people-shake-hands-as-a-result-of-agreement-successful-cooperation-happy-businessman-1549501607.jpg' alt="Portfolio" className="object-contain h-36" />
                            </div>
                          </div>
                        </div>
                          </div>
                          </div>
                      )}
                    </div>
                    
                  )}
                </div>

                
              ))}
              {/* ... End main nav ... */}
            </div>

            {/* Desktop-only buttons */}
          <div className="hidden lg:flex items-center ml-auto space-x-4">
            <button
             
              className="bg-[#D2497E] hover:bg-cyan-600 text-white px-6 py-2 font-bold rounded-lg transition"
              data-testid="button-lets-talk-ai"
              style={{ minWidth: 120 }}
            >
              Let's Talk AI
            </button>
            <button
              
              className="bg-cyan-500 hover:bg-cyan-600 text-black py-2 font-bold rounded-lg transition"
              data-testid="button-contact-us"
              style={{ minWidth: 120 }}
            >
              Contact Us
            </button>
          </div>
            {/* Mobile Hamburger Toggle */}
            <div className="ml-auto flex lg:hidden">
              <button onClick={toggleMobileMenu} className="hover:text-blue-600 transition-colors p-2" aria-label="Toggle mobile menu">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
    <div
  className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl z-50 transform transition-transform duration-300 
    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
>
  {/* HEADER: Logo + Close button */}
  <div className="flex items-center justify-between w-full p-4 border-b border-gray-200">
    <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className="text-black-900 ml-4" style={{fontWeight: 'bold'}}>Kryzenm Software solutions</span>
    </Link>
    <button
      className="text-blue-700 p-2"
      onClick={() => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
        document.body.style.overflow = "auto";
      }}
      aria-label="Close mobile menu"
    >
      <X className="w-7 h-7" />
    </button>
  </div>

  <nav className="px-4 py-6 space-y-6 overflow-y-auto h-full">
    {navigationItems.map(({ label, items }) => (
      <div key={label}>
        <button
          className="flex justify-between items-center w-full font-semibold text-blue-700 text-lg mb-2"
          onClick={() => toggleDropdown(label)}
          aria-expanded={openDropdown === label}
        >
          {label}
          <ChevronDown
            className={`transition-transform duration-300 ${openDropdown === label ? "rotate-180" : ""}`}
          />
        </button>
        {openDropdown === label && (
          <ul className="pl-4 space-y-1 border-l border-blue-200">
            {items.map(({ label: itemLabel, to }) => (
              <li key={itemLabel}>
                <Link
                  to={to}
                  className="block py-1 text-gray-700 hover:text-blue-700"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setOpenDropdown(null);
                    document.body.style.overflow = "auto";
                  }}
                >
                  {itemLabel}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}

    <div className="flex items-center justify-between w-full p-4 border-t border-gray-200">
      <button
        className="bg-[#D2497E] mr-4 whitespace-nowrap hover:bg-cyan-600 text-white px-4 py-2 font-bold rounded-lg transition"
        data-testid="button-lets-talk-ai"
        style={{ minWidth: 120 }}
      >
        Let's Talk AI
      </button>
      <button
        className="bg-cyan-500 hover:bg-cyan-600 text-black py-2 font-bold rounded-lg transition"
        data-testid="button-contact-us"
        style={{ minWidth: 120 }}
      >
        Contact Us
      </button>
    </div>
  </nav>
</div>

{/* SINGLE backdrop only */}
{isMobileMenuOpen && (
  <div
    className="fixed inset-0 bg-white bg-opacity-50 z-40 lg:hidden"
    onClick={() => {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
      document.body.style.overflow = "auto";
    }}
  />
)} 
    </div>
  );
}


