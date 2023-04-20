import React, { FC } from "react";
import { VideoResponse } from "./interfaces";
import { ClockIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import vidPlaceholder from "../../assets/images/video_placeholder.jpg";
import { useQuery } from "@tanstack/react-query";
import { getResource } from "./service";
import SkeletonWrapper from "../SkeletonWrapper";
import ResourceImage from "../Resources/ResourceImage/ResourceImage";
import { useNavigate } from "react-router-dom";
import ResourceListItemSkeleton from "./ResourceListItemSkeleton";

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
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery(
    ["RESOURCE_ITEM_QUERY", resourceId],
    () => getResource(resourceId)
  );

  const getLevelInfo = (level: number) => {
    if (level === 0) {
      return <h1>Básico</h1>;
    } else if (level === 1) {
      return <h1>Intermedio</h1>;
    }

    return <h1>Avanzado</h1>;
  };

  return (
    <SkeletonWrapper
      isLoading={isLoading}
      skeleton={<ResourceListItemSkeleton />}
    >
      <tr className=" transition-colors group gap-x-7 border-b">
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
      </tr>
    </SkeletonWrapper>
  );
};

export default ResourceListItem;
