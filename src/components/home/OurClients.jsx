import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { ourClientsData } from "../../data/home/ourClientsData";

const OurClients = () => {
  return (
    <div className="py-8 md:py-16">
      <h2 className="font-openSans font-extrabold text-xl text-black_color text-center mb-10">
        Our Clients
      </h2>

      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 13,
          },
        }}
        spaceBetween={10}
        loop={true}
        speed={1000}
        autoplay={{
          delay: -1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {ourClientsData.map(({ id, icon }) => (
          <div key={id}>
            <SwiperSlide>
              <div className="flex items-center">
                <img
                  className="w-[66px] md:w-[100px] h-7"
                  src={icon}
                  alt="icon-client"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default OurClients;
