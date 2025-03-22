import React from "react";
import { Categories } from "../components/common/Categories";
import Videos from "../components/common/Videos";

const HomePage = () => {
  return (
    <div className=" w-full">
      <Categories />
      <Videos />
    </div>
  );
};

export default HomePage;
