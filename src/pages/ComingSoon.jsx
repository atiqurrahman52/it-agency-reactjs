import { Link } from "react-router-dom";
import comming from "../assets/images/coming-soon/coming-soon.webp";

import { CaretRight } from "@phosphor-icons/react";

const ComingSoon = () => {
  return (
    <div className="banner__background h-screen bg-cover bg-center bg-no-repeat w-full">
      <div className="flex flex-col justify-center items-center h-screen">
        <img
          className="w-[283px] md:w-[620px] h-[162px] md:h-[354px]"
          src={comming}
          alt=""
        />
        <p className="font-Inter font-medium text-sm text-white text-center pt-10">
          &ldquo;we are here to empowering your digital transformation&rdquo;
        </p>
        <Link
          to="/"
          className="mt-20 p-3 border rounded-lg flex justify-center items-center gap-4"
        >
          <span className="text-white font-Inter font-bold text-sm md:text-base">
            Back to home
          </span>
          <span className="bg-white px-[3px] md:px-[4px] py-[4px] rounded-full flex">
            <CaretRight size={16} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
