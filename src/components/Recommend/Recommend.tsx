import React from "react";
import SkeletonWrapper from "../SkeletonWrapper";
import student from "../../assets/images/login_page_bg.jpg";
import { FaClock } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getRecommendsById } from "./service";
import { Resource } from "../Resources/ResourceDetail/interfaces";
import { Tooltip } from "../Tooltip/Tooltip";
import RecommendSkeleton from "./RecommendSkeleton/RecommendSkeleton";
import { Link } from "react-router-dom";
import { isArray } from "lodash";

interface RecommendProps {
  ids: Array<string>;
}

const Recommend: React.FC<RecommendProps> = ({ ids }) => {
  const { data, isLoading, isError } = useQuery(
    ["GET_RECOMMENDS_QUERY", ids],
    () => getRecommendsById(ids.toString())
  );

  const showTypeOfResource = (classType: string) => {
    return classType.includes("Video") ? (
      <span className="text-white bg-blue-600 p-2 rounded-full">Video</span>
    ) : (
      <span className="text-white bg-orange-600 p-2 rounded-full">Ebook</span>
    );
  };

  if (ids.length === 0) {
    return <></>;
  }

  if (isError && ids.length !== 0) {
    return <div>Error</div>;
  }

  if (data && !isArray(data)) {
    return <></>;
  }

  if (data && data?.length === 0) {
    return <></>;
  }

  return (
    <SkeletonWrapper isLoading={isLoading} skeleton={<RecommendSkeleton />}>
      <div className="bg-white border shadow-lg rounded-lg p-10 h-fit mt-14">
        <h1 className="text-4xl font-bold font-face-bb">
          También podría gustarte
        </h1>
        <div className=" gap-4 grid grid-cols-2 lg:grid lg:grid-cols-4 2xl:grid-cols-5 justify-between mt-10">
          {data?.map((resource: Resource, index) => {
            return (
              <div
                key={index}
                className="flex-col w-full border shadow-md rounded-xl hover:cursor-pointer"
              >
                <div className="relative mx-auto">
                  <img
                    src={resource.image || student}
                    alt="resource_img"
                    className="object-cover max-h-40 w-full border-2 border-gray-400 rounded-xl rounded-b-none hover:opacity-50 inset-0 z-20 "
                  />
                  <span className="absolute top-2 right-0">
                    {showTypeOfResource(resource._class as string)}
                  </span>
                </div>
                <div className="justify-between p-2 mt-2 items-center">
                  <Tooltip message={resource.title}>
                    <Link
                      to={`/platform/resources/${resource.id}`}
                      className="text-lg font-bold truncate"
                    >
                      {resource.title}
                    </Link>
                  </Tooltip>
                </div>
                <div className="flex flex-row p-2 justify-between mt-2 items-center">
                  <h1 className="text-lg font-light">{resource.teacher}</h1>
                  <span className="flex items-center gap-1">
                    <FaClock /> {resource.duration || resource.totalPages}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default Recommend;
