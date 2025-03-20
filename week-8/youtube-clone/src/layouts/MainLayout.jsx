import React from "react";
import NavBar from "../components/navBar/Index.jsx";
import SideBar from "../components/sideBar/Index.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-[97vh]">
      <NavBar />
      <div className="flex h-full ">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
