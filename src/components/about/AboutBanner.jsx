

const AboutBanner = () => {
    return (
        <div>
            <div className="about h-screen bg-cover bg-center w-full md:block hidden">
      <div className="flex justify-center items-center h-screen p-4">
        <div className="about-bg w-[834px] md:h-[277px] rounded-xl p-6 md:p-12 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)]">
          <h1 className="font-openSans text-2xl lsm:text-4xl md:text-[56px] md:leading-[67px] text-white text-center mb-5">
            Discover Our <span className="text-secondary_color">Service</span> Around the World</h1>
          <p className="font-Inter font-medium text-sm md:text-lg text-white text-center">Excellent IT services for your
            success...</p>
        </div>
      </div>
    </div>
    {/* <!-- For mobile start --> */}
    <div className="about_mobile h-screen bg-cover bg-center w-full md:hidden">
      <div className="flex justify-center items-center h-screen p-4">
        <div className="about-bg w-[834px] md:h-[277px] rounded-xl p-6 md:p-12 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)]">
          <h1 className="font-openSans text-2xl lsm:text-4xl md:text-[56px] md:leading-[67px] text-white text-center mb-5">
            Discover Our <span className="text-secondary_color">Service</span> Around the World 3 </h1>
          <p className="font-Inter font-medium text-sm md:text-lg text-white text-center">Excellent IT services for your
            success...</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AboutBanner;