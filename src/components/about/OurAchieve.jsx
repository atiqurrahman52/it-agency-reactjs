import CountUp from "react-countup";

const OurAchieve = () => {
  return (
    <div className="container">
      <div className="py-8 md:py-16">
        <div className="grid grid-cols-12 md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <h4 className="font-NotoSerif font-black text-2xl md:text-3xl  text-csk mb-6">
              We&apos;ve achieved many{" "}
              <span className="text-secondary_color">world</span> wide awards...
            </h4>
            <p className="font-Inter text-base text-black/60 text-justify ">
              There are many variations of passages of Lorem Ipsum but their
              majority have suffered alteration in some form by injected humor,
              or then. eros dolor interdum nulla, ut commodo diam libero vitae
              erat.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 flex items-center justify-center">
            <div className="grid grid-cols-12 gap-4 max-w-[350px] w-full">
              <div className="col-span-6 h-[150px] md:h-[160px] text-center p-4 border border-[#D4E5F7] rounded space-y-9">
                <h1 className="font-NotoSerif font-black text-[#002B33] text-[32px] md:text-[40px]">
                  <CountUp end={820} duration={2} />+{" "}
                </h1>
                <h3 className="font-Inter font-medium text-sm md:text-base text-[#08192B]">
                  Active clients
                </h3>
              </div>
              <div className="col-span-6 h-[150px] md:h-[160px] text-center p-4 border border-[#D4E5F7] rounded space-y-9">
                <h1 className="font-NotoSerif font-black text-[#002B33] text-[32px] md:text-[40px]">
                  <CountUp end={100} duration={2} />+
                </h1>
                <h3 className="font-Inter font-medium text-sm md:text-base text-[#08192B]">
                  Ready Projects
                </h3>
              </div>
              <div className="col-span-6 h-[150px] md:h-[160px] text-center p-4 border border-[#D4E5F7] rounded space-y-9">
                <h1 className="font-NotoSerif font-black text-[#002B33] text-[32px] md:text-[40px]">
                  <CountUp end={5} duration={2} />
                  k+
                </h1>
                <h3 className="font-Inter font-medium text-sm md:text-base text-[#08192B]">
                  Happy clients
                </h3>
              </div>
              <div className="col-span-6 h-[150px] md:h-[160px] text-center p-4 border border-[#D4E5F7] rounded space-y-9">
                <h1 className="font-NotoSerif font-black text-[#002B33] text-[32px] md:text-[40px]">
                  <CountUp end={520} duration={2} />+
                </h1>
                <h3 className="font-Inter font-medium text-sm md:text-base text-[#08192B]">
                  Project Done
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchieve;
