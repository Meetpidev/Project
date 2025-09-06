import { FaLinkedinIn } from "react-icons/fa";

const logos = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        alt: "Microsoft",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://yt3.googleusercontent.com/ytc/AIdro_m_5VVnbUDsq-tTT51qiDCrPX5v5CFi-LK1EbJnMKtcIQ4=s900-c-k-c0x00ffffff-no-rj",
        alt: "Inc.",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Google_Play_2022_logo.svg/2560px-Google_Play_2022_logo.svg.png",
        alt: "Google Play",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg",
        alt: "App Store",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/1024px-Forbes_logo.svg.png",
        alt: "Forbes",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/1024px-Forbes_logo.svg.png",
        alt: "Forbes",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://www.banyannation.com/wp-content/uploads/2016/03/headerV3_YS-1.jpg",
        alt: "Yourstory",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
        alt: "wikipedia",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSHzgps7tFy7f844bPAmAtdpw2r_DkptP_A&s",
        alt: "Mashable",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-GAmIYfuNTvIBPLRuq8xu0heJqp7KHZ7tg&s",
        alt: "Capterra",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSHzgps7tFy7f844bPAmAtdpw2r_DkptP_A&s",
        alt: "Mashable",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSHzgps7tFy7f844bPAmAtdpw2r_DkptP_A&s",
        alt: "Mashable",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSHzgps7tFy7f844bPAmAtdpw2r_DkptP_A&s",
        alt: "Mashable",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSHzgps7tFy7f844bPAmAtdpw2r_DkptP_A&s",
        alt: "Mashable",
        colorClass: "hover:grayscale-0",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSHzgps7tFy7f844bPAmAtdpw2r_DkptP_A&s",
        alt: "Mashable",
        colorClass: "hover:grayscale-0",
    },
];

export function CTAWorkTogether() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Let's Work Together On Your Next Digital Project
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
                    Ready to start your next project ? We would love to hear from you. Let's discuss how we can help you achieve your business goals.
                </p>
                <button className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Request A Free Quote
                </button>
            </div>
        </section>
    );
}

export function CTASubscribe() {
    return (
        <section className="bg-blue-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Subscribe us and Get the latest updates and news
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <input
                        type="text"
                        placeholder="Your name *"
                        className="flex-1 max-w-xs px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email ID *"
                        className="flex-1 max-w-xs px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex flex-1 max-w-xs">
                        <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600">
                            +91
                        </span>
                        <input
                            type="tel"
                            placeholder="Mobile Number *"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
}

export default function FeaturedLogos() {
    return (
        <>
            <section className="w-full bg-white py-12 px-3">
                <h2 className="hidden lg:block text-4xl font-bold text-center mb-6">We Have Been Featured In</h2>
                <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7 max-w-5xl mx-auto">
                    {logos.map((logo, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-md rounded-2xl flex items-center justify-center aspect-square transition group"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className={`block max-h-16 grayscale group-hover:grayscale-0 transition-all duration-300`}
                                style={{ maxWidth: 110, minHeight: 48, objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <CTAWorkTogether />

            <CTASubscribe />
        </>
    );
}
