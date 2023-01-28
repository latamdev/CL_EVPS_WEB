import React, { useEffect, useState } from "react";
import { MOCK_VIDEO_RESPONSE } from "./VideosMockResponse";
import VideoListItem from "./VideoListItem";
import { VideoResponse, Details } from "./interfaces";
import VideoDetails from "./VideoDetails";
import "./Videos.css";
import TopNavbar from "../TopNavbar/TopNavbar";

const Videos = ({ }) => {
    const [videosList, setVideosList] = useState(MOCK_VIDEO_RESPONSE)
    const [videoDetails, setVideoDetails] = useState<Details>({})

    const handleDetails = (video: VideoResponse) => {
        const details: Details = {
            id: video.id,
            title: video.title,
            description: video.description,
            price: video.price
        }

        setVideoDetails(details)
    }

    const filters = [
        { name: "Todos" },
        { name: "Recientes" },
        { name: "Mejor calificados" },
        { name: "Más populares" },
    ];

    return (
        <div>
            <TopNavbar pathName={'Videos'} />

            <div className="flex flex-row flex-2">
                <div className="flex flex-col">
                    <div className="flex gap-x-24 items-center px-4 border-y border-gray-200">
                        {filters.map((filter) => {
                            return (
                                <button
                                    className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group"
                                >
                                    <span className="font-medium"> {filter.name} </span>
                                    <span
                                        className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"
                                    />
                                </button>
                            )
                        })
                        }
                    </div>
                    <table className="w-full border-b border-gray-200">
                        <thead>
                            <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                                <td className="pl-10">
                                    <div className="flex items-center gap-x-4">
                                        <span>Producto</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-center">Descripción</td>
                                <td className="py-4 px-4 text-center">Duración</td>
                                <td className="py-4 px-4 text-center">Calificación</td>
                                <td className="py-4 px-4 text-center"></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                videosList.items.map((video) => {
                                    return (
                                        <VideoListItem video={video} callbackHandleVideoDetails={() => handleDetails(video)} />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="mr-16"></div>
                <div className="">
                <h1 className="text-center font-bold text-5xl">
                {videoDetails.title}
                    </h1>
                    <div className="pt-24">
                        {
                            Object.keys(videoDetails).length !== 0 && <VideoDetails details={videoDetails} />
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Videos;