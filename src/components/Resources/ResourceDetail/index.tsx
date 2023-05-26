import { useParams } from "react-router-dom";
import SkeletonWrapper from "../../SkeletonWrapper";
import ResourceDetailSkeleton from "./ResourceDetailSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getResourceById } from "./service";
import CartButtonAdd from "../../Cart/CartButtonAdd/CartButtonAdd";
import { Resource } from "./interfaces";
import Recommend from "../../Recommend/Recommend";
import ResourceImage from "../ResourceImage/ResourceImage";
import "./index.css";
import TeacherCard from "../TeacherCard/TeacherCard";
import TeacherCardSkeleton from "../TeacherCard/TeacherCardSkeleton/TeacherCardSkeleton";
import UnlockedResource from "../UnlockedResource/UnlockedResource";

const ResourceDetail = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(
    ["getResourceByIdKey", id],
    () => getResourceById(id as string)
  );

  const showDurationOrTotalPages = () => {
    return data?._class?.includes("Video") ? (
      <>
        <span className="font-bold">Duración:</span>{" "}
        {data.duration ? data.duration : "--"}
      </>
    ) : (
      <>
        <span className="font-bold">Páginas:</span>{" "}
        {data?.totalPages ? data.totalPages : "--"}
      </>
    );
  };

  const showTypeOfResource = () => {
    return data?._class?.includes("Video") ? (
      <span className="bg-blue-600 p-1 lg:p-2 rounded-full">Video</span>
    ) : (
      <span className="bg-orange-600 p-1  lg:p-2 rounded-full">Ebook</span>
    );
  };

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col w-full">
      <div>
        {data?.unlocked ? (
          <UnlockedResource data={data} />
        ) : (
          <div className="flex items-stretch xl:flex-row flex-col gap-10 px-2 md:px-10 py-10 w-full">
            <div className="flex-3">
              <SkeletonWrapper
                isLoading={isLoading}
                skeleton={<ResourceDetailSkeleton />}
              >
                <div className="bg-white border shadow-lg rounded-lg p-5 md:p-10 h-fit">
                  <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
                    <h1 className="font-bold text-lg md:text-3xl text-center lg:text-4xl font-face-bb">
                      {data?.title}
                    </h1>
                    <div className="text-sm lg:text-base lg:font-medium text-white align-middle self-center">
                      {showTypeOfResource()}
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row md:justify-between">
                    <div className="mx-auto w-full md:w-1/2 lg:w-1/3 mt-5 md:mt-10">
                      <ResourceImage
                        img={data?.image as string}
                        className="object-contain md:h-80 w-full border-2 border-gray-400 rounded-xl inset-0 z-20 "
                      />
                    </div>
                    <div className="w-full mt-5 md:mt-10 flex-1 lg:ml-10 lg:mr-10 flex flex-col">
                      <p>{data?.description ? data.description : "---"}</p>

                      <div className="mt-5 md:mt-10 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
                        <p>
                          <span className="font-bold">Profesor:</span>{" "}
                          {data?.teacher ? data.teacher : "--"}
                        </p>
                        <p>{showDurationOrTotalPages()}</p>
                      </div>
                      <div className="text-center pt-10 mt-auto w-full">
                        <CartButtonAdd item={data as Resource} />
                      </div>
                    </div>
                  </div>
                </div>
              </SkeletonWrapper>
            </div>

            <div className="flex-1">
              <SkeletonWrapper
                isLoading={isLoading}
                skeleton={<TeacherCardSkeleton />}
              >
                <TeacherCard name="Paula Rojas" picture="" videosCount={10} />
              </SkeletonWrapper>
            </div>
          </div>
        )}
      </div>
      <div className="px-2 md:px-10 py-2 md:py-5 w-full">
        <Recommend ids={[id as string]} />
      </div>
    </div>
  );
};

export default ResourceDetail;
