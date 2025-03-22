import React from "react";
import SideBarListItem from "./SideBarListItem";
import { youtubeSidebarItems } from "../../utils/dummyData";

const Index = () => {
  return (
    <div className="w-65  mr-1">
      <div className=" h-full sidebar pt-5 ">
        {youtubeSidebarItems.map((item, i) => (
          <div key={i}>
            <p className="pt-4 hidden sm:block">{item.section}</p>
            {item.items.map((singleItem, i) => (
              <SideBarListItem
                icon={singleItem.icon}
                title={singleItem.title}
                key={i}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
