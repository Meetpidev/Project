
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="w-[100%] bg-[#f5fbff] py-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper max-w-7xl mx-auto"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div className="p-6">
              <h2 className="text-2xl md:text-4xl font-bold leading-snug">
                Named by <span className="font-semibold italic">clutch</span> as the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Top AI (Artificial Intelligence)
                </span>{" "}
                Company In India And USA
              </h2>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                Let’s Talk
              </button>
              <div className="flex gap-6 mt-6">
                <div>
                  <p className="font-bold text-lg">Google ⭐⭐⭐⭐⭐</p>
                  <p>1007 REVIEWS</p>
                </div>
                <div>
                  <p className="font-bold text-lg">Clutch ⭐⭐⭐⭐⭐</p>
                  <p>300 REVIEWS</p>
                </div>
                <div>
                  <p className="font-bold text-lg">GoodFirms ⭐⭐⭐⭐⭐</p>
                  <p>201 REVIEWS</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/slide1.png"
                alt="AI Illustration"
                className="w-full"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-[400px] bg-blue-100">
            <h2 className="text-3xl font-bold">Slide 2 Content</h2>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-[400px] bg-green-100">
            <h2 className="text-3xl font-bold">Slide 3 Content</h2>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-[400px] bg-purple-100">
            <h2 className="text-3xl font-bold">Slide 4 Content</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
