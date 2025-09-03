const blogs = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VFS160-EDXrxXBrzCvAZHXBhKfPAsB9FDQ&s",
    date: "August 18, 2023",
    title: "Mobile App Development: Unveiling the Role of Databases ...",
    desc:
      "Mobile apps have become an essential part of our everyday lives due to the change brought ...",
    action: "Get more details",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAu6pTtcSdQHUODx1kXXbTx_3vLMxphWJI2g&s",
    date: "August 23, 2023",
    title: "Elevating Business Potential: Advantages of Custom Software...",
    desc:
      "The importance of bespoke software development services in USA has increased since the corporate...",
    action: "Get more details",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkyw0fo7KtseoJEgLyCqToJ_26R4bXSRzpg&s",
    date: "August 28, 2023",
    title: "Choosing the Right Framework for Your Blockchain App:...",
    desc:
      "Contemporary web developers must choose the correct framework to create reliable and effective blockchain apps....",
    action: "Get more details",
  },
];

export default function BlogCards() {
  return (
    <section className="w-full bg-white py-10 px-2">
      <h2 className="text-4xl font-bold text-center mb-2">Our Recent Blogs</h2>
      <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
        Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
      </p>
      <div className="flex flex-wrap justify-center gap-7">
        {blogs.map((b, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl min-w-[340px] max-w-[400px] w-full flex flex-col mb-6"
          >
            <img
              src={b.img}
              alt="Blog Visual"
              className="rounded-t-3xl w-full h-56 object-cover"
            />
            <div className="p-7 flex flex-col grow">
              <span className="block text-gray-500 mb-2 font-medium">{b.date}</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
                {b.title}
              </h3>
              <p className="text-gray-700 text-sm mb-6">{b.desc}</p>
              <a
                href="#"
                className="text-sky-600 font-medium text-base inline-flex items-center hover:underline group ml-[-2px]"
              >
                {b.action}
                <span className="ml-2 group-hover:translate-x-1 transition-transform text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
