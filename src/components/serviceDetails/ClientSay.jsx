import Testimonial from "../share/Testimonial";
const ClientSay = () => {
  return (
    <div className="container">
      <div className="py-8 md:py-16">
        <div className="max-w-[620px] mx-auto">
          <h5 className="font-Inter font-medium text-sm md:text-base text-secondary_color text-center mb-2">
            Testimonials
          </h5>
          <h4 className="font-NotoSerif font-black text-xl md:text-[32px] text-black_color leading-[34px] md:leading-[48px]  text-center mb-8 md:mb-20">
            Let&apos;s see what&apos;s clints say about our service
          </h4>
        </div>
        <Testimonial />
      </div>
    </div>
  );
};

export default ClientSay;
