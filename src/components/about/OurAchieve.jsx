import award from '../../assets/images/about/award.webp'

const OurAchieve = () => {
    return (
        <div className="container">
      <div className="py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-NotoSerif font-black text-2xl md:text-3xl text-center text-csk mb-6">We&apos;ve achieved many <span
                className="text-secondary_color">world</span> wide awards...</h4>
            <p className="font-Inter text-base text-black/60 text-center">There are many variations of passages of Lorem Ipsum but their majority have suffered alteration in some
              form by injected humor, or then. eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          </div>
          <div className="w-full h-full">
            <img className="w-fit h-full" src={award} alt="" />
          </div>

        </div>
      </div>
    </div>
    );
};

export default OurAchieve;