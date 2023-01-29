import React, { FC } from "react";
import { VideoResponse } from "./interfaces";
import { VideoCameraIcon, ClockIcon, FireIcon } from "@heroicons/react/24/outline";
import vidPlaceholder from '../../assets/images/video_placeholder.jpg'

const VideoListItem: FC<{ video: VideoResponse, callbackHandleVideoDetails: any }> = ({ video, callbackHandleVideoDetails }) => {
    return (
        <tr className="hover:bg-yellow-100 transition-colors group flex space-x-5">
            <td className="flex-1 gap-x-4 items-center py-4 pl-10">
                <img alt="logo" src={vidPlaceholder} className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200" />
            </td>
            <td className="flex-1 font-medium text-left mt-auto mb-auto">
                <div className="col-title text-morazul">
                    {video.title}
                </div>
                <div className="col-teacher text-gray-600">
                    by {video.teacher}
                </div>
            </td>
            <td className="flex-1 font-medium text-center flex mt-auto mb-auto">
                <ClockIcon className="flex-1 h-6 h-6 text-blue-500 " />
                <p className="flex-1 h-6 h-6 text-morazul ">{video.duration}</p>
            </td>
            <td className="flex-1 font-medium text-center flex mt-auto mb-auto">
                <FireIcon className="flex-1 h-6 h-6 text-orange-600" />
                <p className="flex-1 h-6 h-6 text-morazul ">{video.rating}</p>
            </td>
            <td className="flex-1 font-medium text-center mt-auto mb-auto pr-7">
                <button onClick={callbackHandleVideoDetails} className="btn-custom btn-primary">Detalles</button>
            </td>
        </tr>
    )
}

export default VideoListItem;