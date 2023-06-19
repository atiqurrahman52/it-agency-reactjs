import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { recentWorkData } from "../../data/home/recentWorkData";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
const RecentWork = () => {
  return (
   


    <div className="container">
      <div className="py-8 md:py-16">
        <h5 className="font-Inter font-medium text-base text-secondary_color text-center">Case Study</h5>
        <h4
          className="font-NotoSerif font-black text-xl md:text-[32px] text-black_color text-center leading-[34px] md:leading-[48px] mb-6">
          Let’s know Something About Our Recent <br className="md:block hidden" /> Work</h4>

          <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="pb-14"
    >
      {recentWorkData.map(({ id, video, title, description }) => (
        <SwiperSlide key={id}>
          <div className="border rounded overflow-hidden">
            <div className="relative">
              <video src={video} autoPlay loop muted>
                Your browser does not support the video tag.
              </video>
              <span className="absolute top-4 left-3 bg-[#77BECD] py-1 px-3 rounded-full font-Inter font-medium text-xs text-white">
                Business
              </span>
            </div>
            <div className="p-3">
              <h3 className="font-NotoSerif font-black text-base md:text-xl text-[#06182D] text-center mb-2">
                {title}
              </h3>
              <p className="font-Inter text-sm text-black/80 text-center mb-6">
                {description}
              </p>

              <Link
                to="#"
                className="flex justify-center items-center text-secondary_color gap-1 mx-auto mb-1"
              >
                <span className="font-Inter font-medium text-sm md:text-base">
                  Learn
                </span>
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

      </div>

    </div>
  );
};

export default RecentWork;
