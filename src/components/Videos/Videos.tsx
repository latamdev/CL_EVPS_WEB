import React, { FC, useEffect, useState } from "react";
import { MOCK_VIDEO_RESPONSE } from "./VideosMockResponse";
import VideoListItem from "./VideoListItem";
import { VideoResponse, Details } from "./interfaces";
import VideoDetails from "./VideoDetails";
import "./Videos.css";
import TopNavbar from "../TopNavbar/TopNavbar";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllEbooks, getAllVideos } from "./service";
import { Resource } from "../Resources/ResourceDetail/interfaces";
import SearchResultsSkeleton from "../Search/SearchResultPanel/SearchResultsSkeleton";
import VideoListSkeleton from "./VideoListSkeleton";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "../Tooltip/Tooltip";
import ResourceDetailTooltip from "./ResourceDetailTooltip/ResourceDetailTooltip";
import { TooltipVideos } from "./TooltipVideos/TooltipVideos";

const ALL_RESOURCE_QUERY = "ALL_RESOURCE_QUERY";

const Videos: React.FC<any> = ({ parent }) => {
  const navigate = useNavigate();

  const {
    data,
    isLoading: isPendingRequest,
    isError,
  } = useQuery([ALL_RESOURCE_QUERY], () => getAllVideos());

  const queryClient = useQueryClient();

  const [videosList, setVideosList] = useState(MOCK_VIDEO_RESPONSE);
  const [videoDetails, setVideoDetails] = useState<Resource>();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDetails = (video: Resource) => {
    navigate(`/platform/resources/${video.id}`);
    //setVideoDetails(video);
    //setShowModal(true);
  };

  const filters = [
    { name: "Videos", type: "video" },
    { name: "E-Books", type: "ebook" },
    { name: "Otros Recursos", type: "" },
  ];

  const subFilters = [{ name: "Todos" }, { name: "Más populares" }];

  const retrieveList = (resourceType: string) => {
    setIsLoading(true);
    if (resourceType === "video") {
      queryClient
        .fetchQuery([ALL_RESOURCE_QUERY], () => getAllVideos())
        .then(() => setIsLoading(false));
    } else {
      queryClient
        .fetchQuery([ALL_RESOURCE_QUERY], () => getAllEbooks())
        .then(() => setIsLoading(false));
    }
  };

  if (isError) {
    return <></>;
  }

  return (
    <>
      {
        <div className="flex-col pl-5 pr-5">
          <TopNavbar pathName={"Recursos"} />
          <div className="flex flex-col">
            <div className="flex items-center  border-y border-gray-200">
              {filters.map((filter) => {
                return (
                  <button
                    key={filter.name}
                    onClick={() => retrieveList(filter.type)}
                    className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-morazul relative group"
                  >
                    <span className="font-medium"> {filter.name} </span>
                    <span className="absolute w-full h-1 left-3 bg-customYellow rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
                  </button>
                );
              })}
            </div>
            {/*         <div className="flex items-center px-4 border-y border-gray-200">
          {subFilters.map((filter) => {
            return (
              <button className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-morazul relative group">
                <span className="font-medium"> {filter.name} </span>
                <span className="absolute w-full h-1 left-3 bg-customYellow rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
              </button>
            );
          })}
        </div> */}

            {!isLoading && !isPendingRequest ? (
              <table className="border-b border-gray-200 flex-row w-full">
                <thead></thead>
                <tbody>
                  {data?.items?.map((video: Resource) => {
                    return (
                      <VideoListItem
                        video={video}
                        callbackHandleVideoDetails={() => handleDetails(video)}
                      />
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <VideoListSkeleton />
            )}
          </div>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                {Object.keys(videoDetails as {}).length !== 0 ? (
                  <VideoDetails
                    details={videoDetails}
                    setShowModal={setShowModal}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      }
    </>
  );
};

export default Videos;
