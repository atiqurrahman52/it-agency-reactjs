import { useState } from "react";
import { Link } from "react-router-dom";
import { latestPostData } from "../../data/blog/latestPostData";

const LatestPost = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filterLatestPost = activeTab === "All" ? latestPostData: latestPostData.filter((item) => item.category === activeTab);

  return (
    <div className="container">
      <div className="py-8 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-5 md:mb-8">
          <h4 className="font-NotoSerif font-extrabold text-xl text-black_color">
            Latest Posts
          </h4>

          <div className="tab-filter flex gap-4">
            {["All", "Popular", "Recent"].map((id) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`font-Inter font-semibold text-base text-[#0D0D0E] shadow-[0_20px_24px_-4px_rgba(35,160,156,0.04),0px_8px_8px_-4px_rgba(35,160,156,0.03)] rounded-lg border  py-2 px-4 ${
                  id === activeTab ? "text-white bg-secondary_color" : ""
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
         {
            filterLatestPost.length > 0 ? (
               filterLatestPost.map(({id,img,name,user,date,durationToRead,topic,title,description}) =>(
                <Link
                key={id}
                 to={`/blog-details/${id}`}>
                <div className="bg-[#F9F9F9] p-3 md:p-5 rounded-md">
                  <img
                    className="rounded-lg w-full"
                    src={img}
                    alt=""
                  />
                  <div className="flex items-center gap-3 mt-3 mb-5">
                   
                   {user}
    
                    <div>
                      <h4 className="font-Inter font-bold text-sm mb-1">
                        {name}
                      </h4>
                      <p className="font-Inter font-medium text-xs md:text-sm text-black/40 flex items-center gap-2">
                       {date}
                        <span className="bg-secondary_color w-1 h-1 block rounded-full"></span>
                        {durationToRead}
                      </p>
                    </div>
                  </div>
                  <h4 className="font-Inter font-bold text-xs md:text-sm text-black/40 mb-2">
                    {topic}
                  </h4>
                  <h5 className="font-openSans font-extrabold text-base  text-black_color mb-2">
                   {title}
                  </h5>
                  <p className="font-SpaceGrotesk text-sm text-black/60">
                     {description}
                  </p>
                </div>
              </Link>
               ))
            ) :(
                <div> 
                <p className="font-Inter text-base text-red-600">No Data Found... </p>
                </div>
            )
         }
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
