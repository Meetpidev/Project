import React from "react";

// Dummy podcast data
const podcasts = [
    {
        title: "Mobile App Testing and Quality Assurance: Ensuring a Seamless User Experience",
        description:
            "In today’s fast-paced digital world, mobile applications have become an integral part of our daily lives. From communication to...",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VFS160-EDXrxXBrzCvAZHXBhKfPAsB9FDQ&s",
        link: "#"
    },
    {
        title: "Why Does Your Business Need Software Applications?",
        description:
            "In today’s fast-paced and digitally-driven world, businesses of all sizes and industries are recognizing the importance of integration...",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VFS160-EDXrxXBrzCvAZHXBhKfPAsB9FDQ&s",
        link: "#"
    },
    {
        title: "A Chat with a Client: Why They Chose Sapphire",
        description:
            "There are several mobile app development companies worldwide. While searching for a reliable IT services provider, I came across...",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VFS160-EDXrxXBrzCvAZHXBhKfPAsB9FDQ&s",
        link: "#"
    },
];

export default function PodcastsSection() {
    return (
        <>
            <section className="bg-white w-full py-10 px-3">
                <h2 className="text-3xl font-bold text-center mb-2">Our Recent Podcasts</h2>
                <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
                    Listen to our series of podcasts that expose you to a broad array of concepts. Whether you’re looking
                    for the latest trends or want to hear customer experience, our podcasts will be a treat for your ears.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto">
                    {podcasts.map((pod, i) => (
                        <div key={i} className="bg-white shadow rounded-xl flex flex-col items-start overflow-hidden w-full max-w-sm">
                            <div className="relative w-full">
                                <img
                                    src={pod.img}
                                    alt={pod.title}
                                    className="w-full h-56 object-cover"
                                />
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-white bg-opacity-80 rounded-full p-3 shadow-lg hover:bg-opacity-100 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-sky-600" viewBox="0 0 16 16">
                                            <path d="M6.5 5.5v5l4-2.5-4-2.5z" />
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2z" />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            <div className="p-5 flex flex-col gap-3 flex-grow">
                                <h3 className="font-semibold text-lg text-gray-900 leading-tight">
                                    {pod.title.length > 64 ? pod.title.substring(0, 61) + "..." : pod.title}
                                </h3>
                                <p className="text-gray-700 text-sm flex-grow">
                                    {pod.description}
                                </p>
                                <a
                                    href={pod.link}
                                    className="text-sky-500 font-medium text-sm inline-flex items-center hover:underline group"
                                >
                                    Explore
                                    <span className="ml-1 group-hover:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-7 flex justify-center">
                    <button className="bg-sky-900 text-white rounded px-8 py-2 font-semibold hover:bg-sky-700 transition">
                        View All
                    </button>
                </div>
            </section>

            <section className="bg-blue-50 w-full py-10 px-3">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Download Our Brochure To Take A Glimpse Of Our Offerings
        </h2>
        <form className="flex flex-col lg:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Your name *"
            className="w-full lg:w-1/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="email"
            placeholder="Your Email ID *"
            className="w-full lg:w-1/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <div className="flex w-full lg:w-1/4">
            <span className="inline-flex items-center px-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l text-gray-600">
              +91
            </span>
            <input
              type="tel"
              placeholder="Mobile Number *"
              className="w-full px-4 py-2 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </form>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-900 text-white font-semibold px-10 py-2 rounded hover:bg-blue-800 transition mt-2"
          >
            Download
          </button>
        </div>
      </div>
    </section>
        </>
    );
}
