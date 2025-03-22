import { Icon } from "@mui/material";
import React from "react";

const VideoCard = ({ data }) => {
  return (
    <div className=" max-w-86 mt-3 mr-3  ">
      <div>
        <video
          height="240"
          poster="/dummy-preview.jpg"
          controls
          className="rounded-lg"
        >
          <source src="/dummy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
        <Icon className="w-6 h-6">account_circle</Icon>
        <div>
          <p className="truncate max-w-[250px]">{data.title}</p>
          <p className="text-sm text-[#919191]">{data.channel}</p>
          <p className="text-sm text-[#919191]">
            {data.views} views - {data.uploaded}{" "}
          </p>
        </div>
        <Icon className="w-6 h-6">more_vert</Icon>
      </div>
    </div>
  );
};

export default VideoCard;
