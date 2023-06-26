import { useState } from "react";

export const dataTab = [
  {
    id: 0,
    header: "Tab1",
    name: "David",
    content: "David Content",
  },
  {
    id: 1,
    header: "Tab2",
    name: "Nicholas",
    content: "Nicholas Content",
  },
  {
    id: 2,
    header: "Tab3",
    name: "Salies",
    content: "Salies Content",
  },
  {
    id: 3,
    header: "Tab4",
    name: "Garren",
    content: "Garren Content",
  },
];

const Tab2 = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="container">
      {/* {["Tab1", "Tab2", "Tab3", "Tab4"].map((id) => (
        <p 
        onClick={()=> setActive(id)}
        className={`text-red-600 ${id === active ? "text-green-600 text-xl":""}`}
        key={id}>{id}</p>
      ))} */}
      {dataTab.map((item, index) => (
        <button
          onClick={() => setActive(index)}
          className={`pr-4  font-Inter text-xl text-black ${
            index === active ? "text-pink-600" : ""
          }`}
          key={index}
        >
          {item.header} 
        </button>
      ))}
      <div>
        {
            dataTab.map((tab,i) =>(
              <div key={i}
              className={` ${i === active ? "active":""}`}
              >
                <p>{tab.content}</p>
              </div>  
            ))
        }
      </div>
    </div>
  );
};

export default Tab2;
