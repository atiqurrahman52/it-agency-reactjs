import { Link } from "react-router-dom";
import { professionalServicesData } from "../../data/home/professionalServicesData";
import { ArrowRight } from "@phosphor-icons/react";

const ProfessionalServices = () => {
  return (
    <div className="container">
      <div className="py-8 md:py-16">
        <h5 className="font-Inter font-medium text-sm md:text-base text-secondary_color text-center mb-2">
          Our Service
        </h5>
        <h4 className="font-NotoSerif font-extrabold text-2xl md:text-[32px] text-black_color text-center mb-16">
          Our Professional IT Services
        </h4>
        <div className="grid grid-cols-1 lsm:grid-cols-2 lg:grid-cols-3 gap-4">
          {professionalServicesData
            .slice(0, 6)
            .map(({ id, icon, serviceName, description }) => (
              <div
                key={id}
                className="hover-card relative rounded-lg overflow-hidden bg-[#F9FCFF] p-[1px]"
              >
                <div className="box bg-[#F9FCFF]"></div>
                <div className="bg-[#F9FCFF] py-4 px-3 md:py-6 md:px-6 box-content relative z-10 rounded-lg">
                  <span className="bg-primary inline-block p-2 md:p-3 rounded drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mb-4  md:mb-6">
                    {icon}
                  </span>

                  <h6 className="font-NotoSerif font-black text-base md:text-xl text-[#08192B] mb-3">
                    {serviceName}
                  </h6>
                  <p className="font-Inter text-sm md:text-base text-black/60 mb-4 md:mb-6">
                    {description}
                  </p>
                  <Link
                    to="/service-details"
                    className="flex items-center text-secondary_color gap-1"
                  >
                    <span className="font-Inter font-medium text-sm md:text-base">
                      Learn
                    </span>

                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="pt-7 md:pt-14 text-center">
          <button
            type=""
            className="border view-btn relative hover:text-whit  border-secondary_color p-[10px] font-Inter font-medium text-sm text-secondary_color rounded"
          >
            View all service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServices;
