import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-8 md:py-16 mt-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-12">
          <div>
            <h2 className="font-openSans font-bold text-2xl md:text-5xl text-black_color mb-6">
              Contact us
            </h2>
            <p className="font-Inter font-medium text-base text-black/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:webmaster@example.com" className="flex  gap-4">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    fill="#005564"
                  />
                  <path
                    d="M11.9991 12.872C11.1591 12.872 10.3091 12.612 9.65907 12.082L6.52907 9.58199C6.38352 9.45561 6.29238 9.27791 6.27466 9.08597C6.25693 8.89402 6.31399 8.70265 6.43393 8.55175C6.55388 8.40085 6.72745 8.30208 6.91844 8.27604C7.10944 8.25 7.30311 8.2987 7.45907 8.41199L10.5891 10.912C11.3491 11.522 12.6391 11.522 13.3991 10.912L16.5291 8.41199C16.8491 8.15199 17.3291 8.20199 17.5791 8.53199C17.8391 8.85199 17.7891 9.33199 17.4591 9.58199L14.3291 12.082C13.6891 12.612 12.8391 12.872 11.9991 12.872Z"
                    fill="#005564"
                  />
                </svg>
              </span>
              <div>
                <span className="font-Inter block font-bold text-base md:text-lg text-black_color mb-2">
                  Email
                </span>
                <span className="font-Inter block text-sm md:text-base text-secondary_color">
                  hello@relume.io
                </span>
              </div>
            </a>

            <a href="tel:+1 (555) 000-0000" className="flex  gap-4">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M11.79 14.21L8.52 17.48C8.16 17.16 7.81 16.83 7.47 16.49C6.45877 15.472 5.5261 14.3789 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.09 13.57 11.44 13.91 11.79 14.21Z"
                    fill="#005564"
                  />
                  <path
                    d="M21.9701 18.33C21.9688 18.7074 21.8834 19.0798 21.7201 19.42C21.5501 19.78 21.3301 20.12 21.0401 20.44C20.5501 20.98 20.0101 21.37 19.4001 21.62C19.3901 21.62 19.3801 21.63 19.3701 21.63C18.7801 21.87 18.1401 22 17.4501 22C16.4301 22 15.3401 21.76 14.1901 21.27C13.0401 20.78 11.8901 20.12 10.7501 19.29C10.3601 19 9.9701 18.71 9.6001 18.4L12.8701 15.13C13.1501 15.34 13.4001 15.5 13.6101 15.61C13.6601 15.63 13.7201 15.66 13.7901 15.69C13.8701 15.72 13.9501 15.73 14.0401 15.73C14.2101 15.73 14.3401 15.67 14.4501 15.56L15.2101 14.81C15.4601 14.56 15.7001 14.37 15.9301 14.25C16.1601 14.11 16.3901 14.04 16.6401 14.04C16.8301 14.04 17.0301 14.08 17.2501 14.17C17.4701 14.26 17.7001 14.39 17.9501 14.56L21.2601 16.91C21.5201 17.09 21.7001 17.3 21.8101 17.55C21.9101 17.8 21.9701 18.05 21.9701 18.33Z"
                    fill="#005564"
                  />
                </svg>
              </span>
              <div>
                <span className="font-Inter block font-bold text-base md:text-lg text-black_color mb-2">
                  Phone
                </span>
                <span className="font-Inter block text-sm md:text-base text-secondary_color">
                  +1 (555) 000-0000
                </span>
              </div>
            </a>

            <div className="flex gap-4">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75H11.9911C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.23479 21.7012 10.5903 22.2498 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45Z"
                    fill="#005564"
                  />
                  <path
                    d="M12.0021 13.46C12.4157 13.46 12.8253 13.3785 13.2075 13.2202C13.5897 13.0619 13.9369 12.8299 14.2294 12.5374C14.5219 12.2449 14.754 11.8976 14.9123 11.5155C15.0706 11.1333 15.1521 10.7237 15.1521 10.31C15.1521 9.89634 15.0706 9.48673 14.9123 9.10455C14.754 8.72238 14.5219 8.37512 14.2294 8.08262C13.9369 7.79011 13.5897 7.55809 13.2075 7.39978C12.8253 7.24148 12.4157 7.16 12.0021 7.16C11.1666 7.16 10.3654 7.49188 9.77466 8.08262C9.18392 8.67336 8.85205 9.47457 8.85205 10.31C8.85205 11.1454 9.18392 11.9467 9.77466 12.5374C10.3654 13.1281 11.1666 13.46 12.0021 13.46Z"
                    fill="#005564"
                  />
                </svg>
              </span>
              <div>
                <span className="font-Inter block font-bold text-base md:text-lg text-black_color mb-2">
                  Office
                </span>
                <span className="font-Inter block text-sm md:text-base text-secondary_color">
                  123 Sample St, Sydney NSW 2000 AU
                </span>
              </div>
            </div>
          </div>
        </div>

        <form>
          <label
            htmlFor="name"
            className="font-Inter block font-medium text-sm text-black_color mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border rounded-lg w-full outline-none h-12 px-3 hover:border hover:border-secondary_color transition-all duration-300 mb-6"
          />
          <label
            htmlFor="name"
            className="font-Inter block font-medium text-sm text-black_color mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            className="border rounded-lg w-full outline-none h-12 px-3 hover:border hover:border-secondary_color transition-all duration-300 mb-6"
          />
          <label
            htmlFor="name"
            className="font-Inter block font-medium text-sm text-black_color mb-2"
          >
            Message
          </label>

          <textarea
            rows=""
            cols=""
            placeholder="Type your message..."
            className="border rounded-lg h-[180px] w-full outline-none  px-3 py-3 hover:border hover:border-secondary_color transition-all duration-300 mb-6"
          ></textarea>

          <div className="flex items-center gap-3 mb-6">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
              className="accent-secondary_color"
            />
            <label
              htmlFor="terms"
              className="font-Inter font-semibold text-xs text-black"
            >
              {" "}
              I accept the{" "}
              <Link
                to="#"
                className="text-secondary_color border-b border-secondary_color"
              >
                Terms
              </Link>{" "}
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            className=" bg-secondary_color h-10 cursor-pointer w-[262px] rounded font-Inter font-medium text-base  text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
