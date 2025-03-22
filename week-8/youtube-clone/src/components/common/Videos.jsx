import React from "react";
import VideoCard from "./VideoCard";
import { Videos } from "../../utils/dummyData";

const VideosCard = () => {
  return (
    <div className="flex justify-center mt-3 gap-3">
      <div className="flex flex-wrap justify-center sm:justify-start">
        {Videos.map((data, i) => (
          <VideoCard data={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default VideosCard;
