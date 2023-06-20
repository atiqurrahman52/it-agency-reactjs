import Services from "../components/share/Services";
import Subscribe from "../components/share/Subscribe";


const Service = () => {
    return (
        <div>
               <div className="container">
            <div className="py-16 md:py-32">
                <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-10">
                    <div>
                        <h5 className="font-openSans font-extrabold text-xl md:text-2xl text-[#113355]">Our Professional IT
                            Services</h5>
                        <p className="font-Inter font-medium text-sm md:text-base text-black/40">Simplifying solutions,
                            transforming business</p>
                    </div>
                    <label htmlFor="" className="relative block">
                        <input type="" name="" 
                            className="border border-[#008299] w-full lg:w-[326px] outline-none px-2 rounded-[10px] h-12"
                            placeholder="Search..." />
                        <button type="" className="absolute right-3 top-1/2 -translate-y-1/2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.5 10.75H8.5C8.09 10.75 7.75 10.41 7.75 10C7.75 9.59 8.09 9.25 8.5 9.25H14.5C14.91 9.25 15.25 9.59 15.25 10C15.25 10.41 14.91 10.75 14.5 10.75ZM11.5 13.75H8.5C8.09 13.75 7.75 13.41 7.75 13C7.75 12.59 8.09 12.25 8.5 12.25H11.5C11.91 12.25 12.25 12.59 12.25 13C12.25 13.41 11.91 13.75 11.5 13.75Z"
                                    fill="#005564" />
                                <path opacity="0.4"
                                    d="M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z"
                                    fill="#005564" />
                                <path
                                    d="M21.2997 21.9986C21.1197 21.9986 20.9397 21.9286 20.8097 21.7986L18.9497 19.9386C18.8198 19.8066 18.7471 19.6288 18.7471 19.4436C18.7471 19.2584 18.8198 19.0806 18.9497 18.9486C19.2197 18.6786 19.6597 18.6786 19.9397 18.9486L21.7997 20.8086C22.0697 21.0786 22.0697 21.5186 21.7997 21.7986C21.6597 21.9286 21.4797 21.9986 21.2997 21.9986Z"
                                    fill="#005564" />
                            </svg>

                        </button>
                    </label>
                </div>
                <Services />

                
                <div className="pt-7 md:pt-14 text-center">
                    <button type=""
                        className="border border-secondary_color p-[10px] font-Inter font-medium text-sm text-secondary_color rounded">
                        Load More
                    </button>
                </div>
            </div>

        </div>
            <Subscribe />
        </div>
    );
};

export default Service;