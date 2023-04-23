import React, { FC } from "react";
//import { ClockIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { getResource } from "./service";
import SkeletonWrapper from "../SkeletonWrapper";
//import ResourceImage from "../Resources/ResourceImage/ResourceImage";
import { Link, useNavigate } from "react-router-dom";
import ResourceListItemSkeleton from "./ResourceListItemSkeleton";
import student from "../../assets/images/login_page_bg.jpg";
import { Tooltip } from "../Tooltip/Tooltip";
import { FaClock } from "react-icons/fa";

interface ResourceListItemProps {
  resourceId: string;
  userId?: string;
  parent: string;
}

const ResourceListItem: FC<ResourceListItemProps> = ({
  resourceId,
  userId,
  parent,
}) => {
  //const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    ["RESOURCE_ITEM_QUERY", resourceId],
    () => getResource(resourceId)
  );

  /*   const getLevelInfo = (level: number) => {
    if (level === 0) {
      return <h1>Básico</h1>;
    } else if (level === 1) {
      return <h1>Intermedio</h1>;
    }

    return <h1>Avanzado</h1>;
  }; */

  return (
    <SkeletonWrapper
      isLoading={isLoading}
      skeleton={<ResourceListItemSkeleton />}
    >
      {/*       <tr className=" transition-colors group gap-x-7 border-b">
        <td
          className={
            "flex-row items-center py-4 px-4 flex-1 h-20 " +
            (data?.unlocked && parent !== "Dashboard" && " pb-10 ") +
            (!data?.unlocked && parent !== "Dashboard" && " pb-16 ")
          }
        >
          <ResourceImage
            img={data?.image as string}
            className={
              "object-contain w-20 aspect-[3/2] border-2 border-gray-200 rounded-lg " +
              (parent !== "Dashboard" ? "absolute" : "")
            }
          />
          {data?.unlocked && parent !== "Dashboard" ? (
            <span className="bg-green-600 text-white text-sm font-bold pl-1 pr-1 rounded-full relative left-16  bottom-1">
              &#10003;
            </span>
          ) : (
            <></>
          )}
        </td>
        <td className="flex-row font-medium text-left my-auto ">
          <div className="text-morazul">{data?.title}</div>
          <div className="text-gray-600 text-sm">Profesor: {data?.teacher}</div>
        </td>
        <td className="flex-row font-medium text-center mt-auto mb-auto ">
          <div className="flex w-fit gap-x-5 justify-between ">
            <ClockIcon className="h-6 text-blue-500 " />
            <p className="h-6 text-morazul ">{data?.duration}</p>
          </div>
        </td>
        <td className="flex-row font-medium text-center mt-auto mb-auto ">
          <div className="flex w-fit gap-x-5 justify-between">
            <ChartBarIcon className="h-6 text-orange-600 " />
            <p className="h-6 text-morazul">
              {getLevelInfo(data?.level as number)}
            </p>
          </div>
        </td>
        <td className="flex-row font-medium text-center mt-auto mb-auto ">
          <button
            onClick={() => navigate(`/platform/resources/${data?.id}`)}
            className="btn-custom btn-primary"
          >
            {data?.unlocked ? "Ver" : "Detalles"}
          </button>
        </td>
      </tr> */}
      <div className="flex-col w-full border shadow-md rounded-xl hover:cursor-pointer">
        <div className="relative mx-auto">
          <img
            src={data?.image || student}
            alt="resource_img"
            className="object-cover max-h-40 w-full border-2 border-gray-400 rounded-xl rounded-b-none hover:opacity-50 inset-0 z-20 "
          />
        </div>
        <div className="justify-between p-2 mt-2 items-center">
          <Tooltip message={data?.title as string}>
            <Link
              to={`/platform/resources/${data?.id}`}
              className="text-lg font-bold truncate"
            >
              {data?.title}
            </Link>
          </Tooltip>
        </div>
        <div className="flex flex-row p-2 justify-between mt-2 items-center">
          <h1 className="text-lg font-light">{data?.teacher}</h1>
          <span className="flex items-center gap-1">
            <FaClock /> {data?.duration || data?.totalPages}
          </span>
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default ResourceListItem;
