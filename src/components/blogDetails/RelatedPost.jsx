import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { recentWorkData } from "../../data/home/recentWorkData";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { latestPostData } from "../../data/blog/latestPostData";
const RelatedPost = () => {
  return (
    <div className="container">
      <div className="py-8 md:py-16">
        <h5 className="font-Inter font-medium text-base text-secondary_color text-center">
          Blog
        </h5>
        <h4 className="font-NotoSerif font-black text-xl md:text-[32px] text-black_color text-center leading-[34px] md:leading-[48px] mb-6">
          Related Post
        </h4>

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
          loop={false}
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
          {latestPostData.map(({ id,img,name,user,date,durationToRead,topic,title,description }) => (
            <SwiperSlide key={id}>
               <div className="bg-[#F9F9F9] p-3 md:p-5 rounded-md">
                  <img
                    className="rounded-lg w-full"
                    src={img}
                    alt=""
                  />
                  <div className="flex items-center gap-3 mt-3 mb-5">
                   
                   {user}
    
                    <div>
                      <h4 className="font-Inter font-bold text-sm mb-1">
                        {name}
                      </h4>
                      <p className="font-Inter font-medium text-xs md:text-sm text-black/40 flex items-center gap-2">
                       {date}
                        <span className="bg-secondary_color w-1 h-1 block rounded-full"></span>
                        {durationToRead}
                      </p>
                    </div>
                  </div>
                  <h4 className="font-Inter font-bold text-xs md:text-sm text-black/40 mb-2">
                    {topic}
                  </h4>
                  <h5 className="font-openSans font-extrabold text-base  text-black_color mb-2">
                   {title}
                  </h5>
                  <p className="font-SpaceGrotesk text-sm text-black/60">
                     {description}
                  </p>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedPost;
