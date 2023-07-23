import { CaretRight } from "@phosphor-icons/react";



const PricingPlan = () => {
   
    return (
        <div className="container">
            <div className="py-8 md:py-16">
                <h5 className="font-Inter font-medium text-base text-secondary_color text-center mb-2">Pricing</h5>
                <h4 className="font-NotoSerif font-black text-xl md:text-[32px] text-black_color text-center mb-8 md:mb-12">
                    No Extra Charges.Choose <br className="md:hidden block" /> Your Plan</h4>


                <div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                        <div className="border p-4 md:p-8 rounded h-fit">
                            <div className="border-b pb-6 md:pb-8">
                                <h6 className="font-NotoSerif font-black text-xl text-yellow mb-1">Basic plan</h6>
                                <p className="font-SpaceGrotesk text-sm text-black/60">Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="pt-6 md:pt-8">
                                <p className="text-5xl md:text-[56px] font-openSans text-yellow mb-2">$19<span
                                        className="text-xl text-[#6A6773] font-SpaceGrotesk">/mo</span> </p>
                                <p className="font-Inter font-medium text-sm text-black/40 mb-6 md:mb-8">or $199 yearly</p>
                                <div className="pb-6 md:pb-8 border-b">
                                    <button type=""
                                        className="border border-yellow w-full   h-10 md:h-12 font-Inter font-bold text-base text-yellow">
                                        Get started
                                    </button>
                                </div>
                            </div>

                            <div className="pt-6 md:pt-10 pb-5 md:pb-7 space-y-3 md:space-y-4">
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-yellow text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-yellow text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-yellow text-2xl"></i></span>
                                    <span> <CaretRight size={16} /></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                            </div>
                            <a href="#" className="flex justify-cente items-center gap-4">
                                <p className="font-Inter font-bold text-sm md:text-base text-yellow">See Details Price plan
                                </p>
                             
                                <span> <CaretRight size={20} className="text-yellow" /></span>
                            </a>
                        </div>

                        <div className="border p-4 md:p-8 rounded h-fit">
                            <div className="border-b pb-6 md:pb-8">
                                <h6 className="font-NotoSerif font-black text-xl text-primary mb-1">Business plan</h6>
                                <p className="font-SpaceGrotesk text-sm text-black/60">Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="pt-6 md:pt-8">
                                <p className="text-5xl md:text-[56px] font-openSans text-primary mb-2">$29<span
                                        className="text-xl text-[#6A6773] font-SpaceGrotesk">/mo</span> </p>
                                <p className="font-Inter font-medium text-sm text-black/40 mb-6 md:mb-8">or $199 yearly</p>
                                <div className="pb-6 md:pb-8 border-b">
                                    <button type=""
                                        className="bg-primary w-full h-10 md:h-12 font-Inter font-bold text-base text-white">
                                        Get started
                                    </button>
                                </div>
                            </div>

                            <div className="pt-6 md:pt-10 pb-5 md:pb-7 space-y-3 md:space-y-4">
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-primary text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-primary text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-primary text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-primary text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                            </div>
                            <a href="#" className="flex justify-cente items-center gap-4">
                                <p className="font-Inter font-bold text-sm md:text-base text-primary">See Details Price plan
                                </p>
                               
                                <span> <CaretRight size={20} className="text-primary" /></span>
                            </a>
                        </div>
                        <div className="border p-4 md:p-8 rounded h-fit ">
                            <div className="border-b pb-6 md:pb-8">
                                <h6 className="font-NotoSerif font-black text-xl text-[#113355] mb-1">Basic plan</h6>
                                <p className="font-SpaceGrotesk text-sm text-black/60">Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="pt-6 md:pt-8">
                                <p className="text-5xl md:text-[56px] font-openSans text-[#06182D] mb-2">$129<span
                                        className="text-xl text-[#6A6773] font-SpaceGrotesk">/mo</span> </p>
                                <p className="font-Inter font-medium text-sm text-black/40 mb-6 md:mb-8">or $199 yearly</p>
                                <div className="pb-6 md:pb-8 border-b">
                                    <button type=""
                                        className="border border-[#113355] w-full h-10 md:h-12 font-Inter font-bold text-base text-[#113355]">
                                        Get started
                                    </button>
                                </div>
                            </div>

                            <div className="pt-6 md:pt-10 pb-5 md:pb-7 space-y-3 md:space-y-4">
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-[#113355] text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-[#113355] text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-[#113355] text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-[#113355] text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span> <i className="ph ph-check text-[#113355] text-2xl"></i></span>
                                    <span className="font-Inter font-medium text-sm md:text-base text-black/60">Feature text
                                        goes
                                        here</span>
                                </div>
                            </div>
                            <a href="#" className="flex justify-cente items-center gap-4">
                                <p className="font-Inter font-bold text-sm md:text-base text-[#113355]">See Details Price
                                    plan</p>
                                
                                <span> <CaretRight size={20} className="text-[#113355]" /></span>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default PricingPlan;