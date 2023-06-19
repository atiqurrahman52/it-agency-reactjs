import Testimonial from "../share/Testimonial";


const ClientSay = () => {
    return (
        <div className="container">
      <div className="py-8 md:py-16">
        <h5 className="font-Inter font-medium text-base text-secondary_color text-center mb-2">Testimonials</h5>
        <h4
          className="font-NotoSerif font-black text-xl md:text-[32px] text-black_color text-center mb-8 md:mb-12 xl:mb-24">
          Let’s see what’s clints say about us</h4>

       <Testimonial />

      </div>
    </div>
    );
};

export default ClientSay;