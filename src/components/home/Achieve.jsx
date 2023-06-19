import achive from '../../assets/images/achieve/achieve.webp'
const Achieve = () => {
    return (
        <div className="bg-[#FCFDFE]">
        <div className="container">
          <div className="py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img className="w-full" src={achive} alt="" />
              </div>
              <div>
                <h2 className="font-NotoSerif font-black text-lg md:text-3xl mb-4">We&apos;ve achieved many world wide awards</h2>
                <p className="font-Inter text-sm md:text-base text-black/60 mb-4">There are many variations of passages of
                  Lorem Ipsum but their majority have suffered alteration in
                  some form by injected humor, or then</p>
                <div className="flex items-center gap-2 md:gap-3 mb-3">
                  <span>
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.2246 2.64627C6.07068 2.64627 1.87085 6.8461 1.87085 12C1.87085 17.1539 6.07068 21.3538 11.2246 21.3538C16.3785 21.3538 20.5783 17.1539 20.5783 12C20.5783 6.8461 16.3785 2.64627 11.2246 2.64627ZM15.6957 9.84865L10.3921 15.1522C10.2612 15.2832 10.0834 15.358 9.89636 15.358C9.70928 15.358 9.53156 15.2832 9.40061 15.1522L6.7535 12.5051C6.48224 12.2339 6.48224 11.7849 6.7535 11.5136C7.02476 11.2424 7.47374 11.2424 7.745 11.5136L9.89636 13.665L14.7042 8.85716C14.9754 8.5859 15.4244 8.5859 15.6957 8.85716C15.9669 9.12841 15.9669 9.56804 15.6957 9.84865Z"
                        fill="#005564" />
                    </svg>
  
                  </span>
                  <p className="font-Inter font-medium text-sm md:text-base text-[#2B2D42]">Lorem Ipsum but their majority
                    have suffered.</p>
                </div>
                <div className="flex items-center gap-2 md:gap-3 mb-3">
                  <span>
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.2246 2.64627C6.07068 2.64627 1.87085 6.8461 1.87085 12C1.87085 17.1539 6.07068 21.3538 11.2246 21.3538C16.3785 21.3538 20.5783 17.1539 20.5783 12C20.5783 6.8461 16.3785 2.64627 11.2246 2.64627ZM15.6957 9.84865L10.3921 15.1522C10.2612 15.2832 10.0834 15.358 9.89636 15.358C9.70928 15.358 9.53156 15.2832 9.40061 15.1522L6.7535 12.5051C6.48224 12.2339 6.48224 11.7849 6.7535 11.5136C7.02476 11.2424 7.47374 11.2424 7.745 11.5136L9.89636 13.665L14.7042 8.85716C14.9754 8.5859 15.4244 8.5859 15.6957 8.85716C15.9669 9.12841 15.9669 9.56804 15.6957 9.84865Z"
                        fill="#005564" />
                    </svg>
  
                  </span>
                  <p className="font-Inter font-medium text-sm md:text-base text-[#2B2D42]">Lorem Ipsum but their majority
                    have suffered alteration in some form by injected </p>
                </div>
  
                <div className="flex items-center gap-2 md:gap-3 mb-3">
                  <span>
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.2246 2.64627C6.07068 2.64627 1.87085 6.8461 1.87085 12C1.87085 17.1539 6.07068 21.3538 11.2246 21.3538C16.3785 21.3538 20.5783 17.1539 20.5783 12C20.5783 6.8461 16.3785 2.64627 11.2246 2.64627ZM15.6957 9.84865L10.3921 15.1522C10.2612 15.2832 10.0834 15.358 9.89636 15.358C9.70928 15.358 9.53156 15.2832 9.40061 15.1522L6.7535 12.5051C6.48224 12.2339 6.48224 11.7849 6.7535 11.5136C7.02476 11.2424 7.47374 11.2424 7.745 11.5136L9.89636 13.665L14.7042 8.85716C14.9754 8.5859 15.4244 8.5859 15.6957 8.85716C15.9669 9.12841 15.9669 9.56804 15.6957 9.84865Z"
                        fill="#005564" />
                    </svg>
  
                  </span>
                  <p className="font-Inter font-medium text-sm md:text-base text-[#2B2D42]">Lorem Ipsum but their majority
                    have suffered.</p>
                </div>
  
                <div className="flex flex-col lg:flex-row gap-6 mt-16">
                  <button type=""
                    className="p-3 md:p-4 btn-4 bg-secondary_color rounded w-full  font-Inter font-medium text-base text-white">
                    Meet with Us
                  </button>
                  <button type=""
                    className="p-3 md:p-4 border border-secondary_color rounded w-full  font-Inter font-medium text-base text-secondary_color">
                    Meet with Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Achieve;