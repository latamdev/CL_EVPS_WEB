import React, { FC } from "react";
import { VideoResponse } from "./interfaces";
import { VideoCameraIcon, ClockIcon, FireIcon } from "@heroicons/react/24/outline";
import vidPlaceholder from '../../assets/images/video_placeholder.jpg'

const VideoListItem: FC<{ video: VideoResponse, callbackHandleVideoDetails: any }> = ({ video, callbackHandleVideoDetails }) => {
    return (
        <tr className="hover:bg-gray-100 transition-colors group">
            <td className="flex gap-x-4 items-center py-4 pl-10">
                <img alt="logo" src={vidPlaceholder} className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200" />
            </td>
            <td className="font-medium text-left">
                <div className="col-title text-morazul">
                    {video.title}
                </div>
                <div className="col-teacher text-morazul">
                    by {video.teacher}
                </div>
            </td>
            <td className="font-medium text-center flex-row">
                <ClockIcon className="h-6 h-6 text-gray-500" /><p className="text-morazul">{video.duration}</p>
            </td>
            <td className="font-medium text-center flex-row">
                <FireIcon className="h-6 h-6 text-gray-500" />
                {video.rating}
            </td>
            <td className="font-medium text-center">
                <button onClick={callbackHandleVideoDetails} className="btn-custom btn-primary">Detalles</button>
            </td>
        </tr>
    )
}

export default VideoListItem;