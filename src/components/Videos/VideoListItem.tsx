import React, { FC } from "react";
import { VideoResponse } from "./interfaces";
import { ClockIcon, ChartBarIcon } from "@heroicons/react/24/outline";

import vidPlaceholder from '../../assets/images/video_placeholder.jpg'

const VideoListItem: FC<{ video: VideoResponse, callbackHandleVideoDetails: any, parent: string }> = ({ video, callbackHandleVideoDetails, parent }) => {
    const buttonText = parent !== 'Dashboard' ? 'Detalles' : 'Ver';
    
    return (
        <tr className="hover:bg-yellow-100 transition-colors group gap-x-7">
            <td className="flex-row items-center py-4 px-4  pr-1">
                <img alt="logo" src={vidPlaceholder} className="w-20 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200" />
            </td>
            <td className="flex-row font-medium text-left my-auto ">
                <div className="text-morazul">
                    {video.title}
                </div>
                <div className="text-gray-600">
                    by {video.teacher}
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
                    <p className="h-6 text-morazul">Advanced</p>
                </div>
            </td>
            <td className="flex-row font-medium text-center mt-auto mb-auto ">
                <button onClick={callbackHandleVideoDetails} className="btn-custom btn-primary">{buttonText}</button>
            </td>
        </tr>
    )
}

export default VideoListItem;