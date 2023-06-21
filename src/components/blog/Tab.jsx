import { useState } from "react";

export const tabData = [
  {
    id: 0,
    img: "1",
    name: "One",
    category: "Developer",
    title: " Title Title Title Title Title",
  },
  {
    id: 1,
    img: "2",
    name: "Two",
    category: "Designer",
    title: " Title Title Title Title Title",
  },
  {
    id: 2,
    img: "3",
    name: "Three",
    category: "Designer",
    title: " Title Title Title Title Title",
  },
  {
    id: 3,
    img: "4",
    name: "Four",
    category: "Designer",
    title: " Title Title Title Title Title",
  },
  {
    id: 4,
    img: "5",
    name: "Five",
    category: "Developer",
    title: " Title Title Title Title Title",
  },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filteredData =
    activeTab === "All"
      ? tabData
      : tabData.filter((item) => item.category === activeTab);
  return (
    <div className="container">
     
      {["All", "Developer", "Manager"].map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`border border-green-500 my-8 p-2 text-black text-xl ${
            category === activeTab ? "text-red-600" : "text-yellow"
          }`}
        >
          {category}
        </button>
      ))}

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id}>
                {item.name} - {item.category}
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center text-center">No results found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab;
