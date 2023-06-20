import Services from "../share/Services";


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
       <Services />
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
