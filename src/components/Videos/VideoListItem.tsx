import React, { FC } from "react";
import { VideoResponse } from "./interfaces";
import { ClockIcon, ChartBarIcon } from "@heroicons/react/24/outline";

import vidPlaceholder from "../../assets/images/video_placeholder.jpg";
import { Resource } from "../Resources/ResourceDetail/interfaces";
import ResourceImage from "../Resources/ResourceImage/ResourceImage";
import { TooltipVideos } from "./TooltipVideos/TooltipVideos";
import ResourceDetailTooltip from "./ResourceDetailTooltip/ResourceDetailTooltip";

const VideoListItem: FC<{
  video: Resource;
  callbackHandleVideoDetails: any;
}> = ({ video, callbackHandleVideoDetails }) => {
  return (
    <tr className="hover:bg-yellow-100 transition-colors w-full flex flex-row justify-between  gap-x-7 mb-5">
      <td className="flex-row items-center py-4 px-4  pr-1">
        <ResourceImage
          img={video.image}
          className="w-20 rounded-lg object-cover object-top border border-gray-200"
        />
      </td>
      <td className="flex-row font-medium text-left my-auto ">
        <div className="text-morazul truncate">{video.title}</div>
        <div className="text-gray-600">
          by {video.teacher ? video.teacher : "---"}
        </div>
      </td>
      <td className="flex-row font-medium text-center mt-auto mb-auto ">
        <div className="flex w-fit gap-x-5 justify-between ">
          <ClockIcon className="h-6 text-blue-500 " />
          <p className="h-6 text-morazul ">{video.duration}</p>
        </div>
      </td>
      <td className="flex-row font-medium text-center mt-auto mb-auto ">
        <div className="flex w-fit gap-x-5 justify-between">
          <ChartBarIcon className="h-6 text-orange-600 " />
          <p className="h-6 text-morazul">
            {video.level ? video.level : "Básico"}
          </p>
        </div>
      </td>
      <td className="flex-row font-medium text-center mt-auto mb-auto ">
        <button
          onClick={callbackHandleVideoDetails}
          className="btn-custom btn-primary"
        >
          Detalles
        </button>
      </td>
    </tr>
  );
};

export default VideoListItem;
