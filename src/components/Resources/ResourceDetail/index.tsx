import { useParams } from "react-router-dom";
import SkeletonWrapper from "../../SkeletonWrapper";
import ResourceDetailSkeleton from "./ResourceDetailSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getResourceById } from "./servce";
import { formatCurrencyToCLP } from "./utils";

const ResourceDetail = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery(
    ["getResourceByIdKey", id],
    () => getResourceById(id as string)
  );

  const showDurationOrTotalPages = () => {
    return data?.videoId ? (
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
      <span className="bg-blue-600 p-2 rounded-full">Video</span>
    ) : (
      <span className="bg-orange-600 p-2 rounded-full">Ebook</span>
    );
  };

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="px-10 py-10">
      <SkeletonWrapper
        isLoading={isLoading}
        skeleton={<ResourceDetailSkeleton />}
      >
        <div>
          <div className="flex flex-row space-x-3">
            <h1 className="font-bold text-4xl self-center">{data?.title}</h1>
            <div className="font-medium text-white align-middle self-center">
              {showTypeOfResource()}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/3 mt-10">
              <img
                src={data?.image}
                alt="resource_img"
                className="object-cover h-80 w-full border-2 border-gray-400 rounded-xl"
              />
            </div>
            <div className="w-full mt-10 ml-10 mr-10 flex flex-col">
              <p>{data?.description ? data.description : "---"}</p>

              <div className="mt-10 flex space-x-5">
                <p>
                  <span className="font-bold">Profesor:</span>{" "}
                  {data?.teacher ? data.teacher : "--"}
                </p>
                <p>{showDurationOrTotalPages()}</p>
              </div>
              <div className="text-center mt-auto w-full">
                <button className="rounded-xl bg-blue-900 text-white font-bold w-1/2 text-2xl h-14 hover:bg-blue-800">
                  {data?.free
                    ? "Gratis"
                    : `Comprar ${
                        formatCurrencyToCLP(data?.price as number) || 0
                      }`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </SkeletonWrapper>
    </div>
  );
};

export default ResourceDetail;
