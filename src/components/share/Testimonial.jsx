import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { testimonialData } from "../../data/share/testimonialData";
const Testimonial = () => {
    return (
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
        {testimonialData.map(({ id, UserImg, userName, designation,comment,date }) => (
         <div key={id} className="testimonial">
             <SwiperSlide>
            <div className="drop-shadow-[0_1px_3px_rgba(75,75,75,0.06)] bg-white p-4  testimonial-card">
                <img
                  className="rounded border-[3px] border-white w-12 md:w-14 h-12 md:h-14 mb-4 md:mb-1 object-cover testimonial-avatar"
                  src={UserImg} alt="" />
                <h4 className="font-Inter font-bold text-sm md:text-base text-[#08192B] mb-4 md:mb-2 testimonial-name">
                  {userName}</h4>
                <div className="flex justify-between mb-3 md:mb-[14px]">
                  <p className="font-Inter font-semibold text-xs md:text-sm text-secondary_color testimonial-company">{designation}
                    </p>
                  <p className="font-Inter font-semibold text-xs md:text-sm text-[#393545] testimonial-date">{date}</p>
                </div>
                <p className="font-Inter text-sm text-black/40 testimonial-comment">{comment}</p>
              </div>
          </SwiperSlide>
         </div>
        ))}
      </Swiper>
  
    );
};

export default Testimonial;