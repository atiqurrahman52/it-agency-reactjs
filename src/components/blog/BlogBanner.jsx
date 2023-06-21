
const BlogBanner = () => {
    return (
        <div className="blog_header bg-center w-full bg-cover bg-no-repeat mt-20">
        <div className="container">
            <div className="py-16 md:py-10">
                <h3 className="font-Inter font-medium text-sm md:text-base text-white text-center mb-2">Blog</h3>
                <p className="font-openSans font-bold text-2xl md:text-[48px] text-white text-center mb-2">Articles
                    <span className="text-secondary_color">/</span> News
                </p>
                <p className="font-Inter font-medium text-base text-white text-center mb-10">Get the latest news,
                    updates and tips</p>
                <div
                    className="flex mx-auto items-center px-2 w-auto xl:w-[514px] h-14  bg-white rounded drop-shadow-[0_0px_20px_rgba(0,0,0,0.08)]">

                    <input type="" name=""  className="w-full h-14  px-3 outline-none text-xs md:text-base"
                        placeholder="Search article, news or recipe..." />
                    <button
                        className="w-[101px] h-[48px] bg-primary font-Inter font-semibold text-xs md:text-sm text-white p-3 rounded"
                        type="">
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BlogBanner;