import React, { FC, useEffect, useState } from "react";
import { MOCK_VIDEO_RESPONSE } from "./VideosMockResponse";
import VideoListItem from "./VideoListItem";
import { VideoResponse, Details } from "./interfaces";
import VideoDetails from "./VideoDetails";
import "./Videos.css";
import TopNavbar from "../TopNavbar/TopNavbar";

const Videos: FC<{ parent: string }> = ({ parent }) => {
  const [videosList, setVideosList] = useState(MOCK_VIDEO_RESPONSE);
  const [videoDetails, setVideoDetails] = useState<Details>({});
  const [showModal, setShowModal] = useState(false);

  const handleDetails = (video: VideoResponse) => {
    if (parent !== "Dashboard") {
      const details: Details = {
        id: video.id,
        title: video.title,
        description: video.description,
        price: video.price,
      };

      setVideoDetails(details);
      setShowModal(true);
    } else {
      //TODO: accion de ver video
    }
  };

  const filters =
    parent !== "Dashboard"
      ? [{ name: "Videos" }, { name: "E-Books" }, { name: "Otros Recursos" }]
      : [{ name: "Todos" }, { name: "Favoritos" }];

  const subFilters = [{ name: "Todos" }, { name: "Más populares" }];

  return (
    <div className="flex-col w-full pr-10">
      {parent !== "Dashboard" ? (
        <TopNavbar pathName={"Videos"} />
      ) : (
        <p className="font-face-bb text-2xl">Tus Videos</p>
      )}
      <div className="flex flex-col">
        <div className="flex items-center px-4 border-y border-gray-200">
          {filters.map((filter) => {
            return (
              <button className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-morazul relative group">
                <span className="font-medium"> {filter.name} </span>
                <span className="absolute w-full h-1 left-3 bg-customYellow rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
              </button>
            );
          })}
        </div>
        {parent !== "Dashboard" && (
          <div className="flex items-center px-4 border-y border-gray-200">
            {subFilters.map((filter) => {
              return (
                <button className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-morazul relative group">
                  <span className="font-medium"> {filter.name} </span>
                  <span className="absolute w-full h-1 left-3 bg-customYellow rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
                </button>
              );
            })}
          </div>
        )}

        <table className="border-b border-gray-200 flex-row">
          <thead></thead>
          <tbody>
            {videosList.items.map((video) => {
              return (
                <VideoListItem
                  video={video}
                  callbackHandleVideoDetails={() => handleDetails(video)}
                  parent={parent}
                />
              );
            })}
          </tbody>
        </table>
        <div className="ml-auto mr-auto mt-6">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-yellow-100 hover:text-yellow-700 "
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-yellow-100 hover:text-yellow-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-yellow-100 hover:text-yellow-700 "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 px-3 py-2 leading-tight text-yellow-600 border border-yellow-300 bg-yellow-100 hover:bg-customYellow hover:text-yellow-700"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-yellow-100 hover:text-yellow-700"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-yellow-100 hover:text-yellow-700 "
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-yellow-100 hover:text-yellow-700"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {Object.keys(videoDetails).length !== 0 ? (
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
  );
};

export default Videos;
