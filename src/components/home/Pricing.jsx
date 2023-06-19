import { useEffect, useState } from "react";
import { priceData } from "../../data/home/pricingData";
import { CaretRight, Check } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [tabActive, setTabActive] = useState(0);
  const [data, setData] = useState(priceData[tabActive]);
  useEffect(() => {
    setData(priceData[tabActive]);
  }, [tabActive]);
  const { item } = data;
  console.log("MY ITEM", item);
  console.log("MYDATA", data);
  const {basicPlan,businessPlan,EnterprisePlan} = data;
  // const {basicPlan} = data;
  console.log("BASIC", basicPlan);
  return (
    <div className="container">
      <div className="py-8 md:py-16">
        <h5 className="font-Inter font-medium text-base text-secondary_color text-center mb-2">
          Pricing
        </h5>
        <h4 className="font-NotoSerif font-black text-xl md:text-[32px] text-black_color text-center mb-8 md:mb-12">
          No Extra Charges.Choose <br className="md:hidden block" /> Your Plan
        </h4>

        <div>
          <ul className="tabs scrollbar-hidden max-w-[750px] mx-auto flex md:flex-wrap md:justify-center  items-center gap-3 md:gap-6 overflow-x-auto md:overflow-hidden overflow-y-clip whitespace-nowrap py-5 mb-8 md:mb-12">
            {priceData.map(({ id, header }) => (
              <li
                key={id}
                onClick={() => setTabActive(id)}
                className={`bg-[#F5F7F8] py-[10px] cursor-pointer px-3 rounded-lg font-Inter font-medium text-sm md:text-xl text-[#6699A2] ${
                  id === tabActive ? "border border-primary text-primary" : ""
                }`}
              >
                {header}
              </li>
            ))}
          </ul>

          <div className="panelContainer">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

             {
                basicPlan.map(({id,packageName,packageDescription,monthlyPrice,yearlyPrice,featuresList}) =>(
                    <div key={id} className="border p-4 md:p-8 rounded h-fit">
                    <div className="border-b pb-6 md:pb-8">
                      <h6 className="font-NotoSerif font-black text-xl text-yellow mb-1">
                       {packageName}
                      </h6>
                      <p className="font-SpaceGrotesk text-sm text-black/60">
                     { packageDescription}
                      </p>
                    </div>
                    <div className="pt-6 md:pt-8">
                      <p className="text-5xl md:text-[56px] font-openSans text-yellow mb-2">
                        ${monthlyPrice}
                        <span className="text-xl text-[#6A6773] font-SpaceGrotesk">
                          /mo
                        </span>{" "}
                      </p>
                      <p className="font-Inter font-medium text-sm text-black/40 mb-6 md:mb-8">
                        or ${yearlyPrice} yearly
                      </p>
                      <div className="pb-6 md:pb-8 border-b">
                        <button
                          type=""
                          className="border border-yellow w-full   h-10 md:h-12 font-Inter font-bold text-base text-yellow"
                        >
                          Get started
                        </button>
                      </div>
                    </div>
    
                    <div className="pt-6 md:pt-10 pb-5 md:pb-7 space-y-3 md:space-y-4">
                     {
                        featuresList.map(({id,feature}) =>(
                           
                            <div key={id} className="flex items-center gap-4">
                            <span>
                              {" "}
                              <i className="ph ph-check text-yellow text-2xl"></i>
                              <Check size={24} className="text-yellow" />
                            </span>
                            <span className="font-Inter font-medium text-sm md:text-base text-black/60">
                              {feature}
                            </span>
                          </div>
                        ))
                     }
                    </div>
                    <Link to="#" className="flex justify-cente items-center gap-4">
                      <p className="font-Inter font-bold text-sm md:text-base text-yellow">
                        See Details Price plan
                      </p>
                      
                      <CaretRight size={20} className="text-yellow" />
                    </Link>
                  </div>
                ))
             }

             {
              businessPlan.map(({id,packageName,packageDescription,monthlyPrice,yearlyPrice,featuresList}) =>(
                <div key={id} className="border p-4 md:p-8 rounded h-fit">
                <div className="border-b pb-6 md:pb-8">
                  <h6 className="font-NotoSerif font-black text-xl text-primary mb-1">
                   {packageName}
                  </h6>
                  <p className="font-SpaceGrotesk text-sm text-black/60">
                   {packageDescription}
                  </p>
                </div>
                <div className="pt-6 md:pt-8">
                  <p className="text-5xl md:text-[56px] font-openSans text-primary mb-2">
                    ${monthlyPrice}
                    <span className="text-xl text-[#6A6773] font-SpaceGrotesk">
                      /mo
                    </span>{" "}
                  </p>
                  <p className="font-Inter font-medium text-sm text-black/40 mb-6 md:mb-8">
                    or ${yearlyPrice} yearly
                  </p>
                  <div className="pb-6 md:pb-8 border-b">
                    <button
                      type=""
                      className="bg-primary w-full h-10 md:h-12 font-Inter font-bold text-base text-white"
                    >
                      Get started
                    </button>
                  </div>
                </div>

                <div className="pt-6 md:pt-10 pb-5 md:pb-7 space-y-3 md:space-y-4">
                {
                        featuresList.map(({id,feature}) =>(
                           
                            <div key={id} className="flex items-center gap-4">
                            <span>
                              {" "}
                              <i className="ph ph-check text-yellow text-2xl"></i>
                              <Check size={24} className="text-primary" />
                            </span>
                            <span className="font-Inter font-medium text-sm md:text-base text-black/60">
                              {feature}
                            </span>
                          </div>
                        ))
                     }
                </div>
                <Link to="#" className="flex justify-cente items-center gap-4">
                  <p className="font-Inter font-bold text-sm md:text-base text-primary">
                    See Details Price plan
                  </p>
                 
                  <CaretRight size={20} className=" text-primary" />
                </Link>
              </div>
              ))
             }



    {
      EnterprisePlan.map(({id,packageName,packageDescription,monthlyPrice,yearlyPrice,featuresList}) =>(
        
        <div key={id} className="border p-4 md:p-8 rounded h-fit ">
        <div className="border-b pb-6 md:pb-8">
          <h6 className="font-NotoSerif font-black text-xl text-[#113355] mb-1">
            {packageName}
          </h6>
          <p className="font-SpaceGrotesk text-sm text-black/60">
            {packageDescription}
          </p>
        </div>
        <div className="pt-6 md:pt-8">
          <p className="text-5xl md:text-[56px] font-openSans text-[#06182D] mb-2">
            ${monthlyPrice}
            <span className="text-xl text-[#6A6773] font-SpaceGrotesk">
              /mo
            </span>{" "}
          </p>
          <p className="font-Inter font-medium text-sm text-black/40 mb-6 md:mb-8">
            or ${yearlyPrice} yearly
          </p>
          <div className="pb-6 md:pb-8 border-b">
            <button
              type=""
              className="border border-[#113355] w-full h-10 md:h-12 font-Inter font-bold text-base text-[#113355]"
            >
              Get started
            </button>
          </div>
        </div>

        <div className="pt-6 md:pt-10 pb-5 md:pb-7 space-y-3 md:space-y-4">
        {
                        featuresList.map(({id,feature}) =>(
                           
                            <div key={id} className="flex items-center gap-4">
                            <span>
                              {" "}
                              <i className="ph ph-check text-yellow text-2xl"></i>
                              <Check size={24} className="text-black" />
                            </span>
                            <span className="font-Inter font-medium text-sm md:text-base text-black/60">
                              {feature}
                            </span>
                          </div>
                        ))
                     }
        </div>
        <Link to="#" className="flex justify-cente items-center gap-4">
          <p className="font-Inter font-bold text-sm md:text-base text-[#06182D]">
            See Details Price plan
          </p>
          <CaretRight size={20} className=" text-[#06182D]" />
        </Link>
      </div>
      ))
    }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
