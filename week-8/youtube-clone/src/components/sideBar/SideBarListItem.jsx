import React from "react";
import { Icon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const SideBarListItem = ({ icon, title }) => {
  return (
    <div className="px-3">
      <div className="flex gap-6 px-2 pt-2 side-bar-item h-[42px] ">
        <Icon>{icon}</Icon>
        <p className=" hidden lg:block">{title}</p>
      </div>
    </div>
  );
};

export default SideBarListItem;
