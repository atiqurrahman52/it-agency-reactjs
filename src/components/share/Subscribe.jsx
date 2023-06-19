

const Subscribe = () => {
    return (
        <div className="subscribe">
      <div className="py-24">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h4 className="font-Inter font-bold text-sm md:text-base text-secondary_color text-center">Get connect</h4>
              <p className="font-NotoSerif font-black text-xl md:text-2xl text-black_color text-center mb-6">Subscribe to
                our newsletter</p>
              <p className="font-Inter font-medium text-sm text-black/40 text-center mb-16">
                Get notification about tips, new product and exclusive promo news just for you.
              </p>
            </div>

            <div
              className="flex items-center px-2 w-auto xl:w-[514px] h-14 md:h-[70px] bg-white rounded drop-shadow-[0_0px_20px_rgba(0,0,0,0.08)]">
              <button type="" className="bg-[#FFBEAF] w-8 md:w-6 h-[17px]  rounded flex justify-center items-center">
                <svg width="13" height="5" viewBox="0 0 13 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.49907 4.87192C5.65907 4.87192 4.80907 4.61193 4.15907 4.08192L1.02907 1.58192C0.883521 1.45554 0.79238 1.27785 0.774655 1.08591C0.75693 0.893963 0.81399 0.702586 0.933934 0.551688C1.05388 0.40079 1.22745 0.302022 1.41844 0.275982C1.60944 0.249943 1.80311 0.298643 1.95907 0.411925L5.08907 2.91192C5.84907 3.52192 7.13907 3.52192 7.89907 2.91192L11.0291 0.411925C11.3491 0.151925 11.8291 0.201925 12.0791 0.531925C12.3391 0.851925 12.2891 1.33192 11.9591 1.58192L8.82907 4.08192C8.18907 4.61193 7.33907 4.87192 6.49907 4.87192Z"
                    fill="#FF5E37" />
                </svg>

              </button>
              <input type="" name=""  className="w-full h-14 md:h-[70px] px-3 outline-none text-xs md:text-base"
                placeholder="Enter your email address" />
              <button
                className="w-[101px] h-[48px] bg-secondary_color font-Inter font-semibold text-xs md:text-sm text-white p-3 rounded"
                type="">
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
};

export default Subscribe;