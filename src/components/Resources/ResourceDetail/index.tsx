import { useParams } from "react-router-dom";
import SkeletonWrapper from "../../SkeletonWrapper";
import students from "../../../assets/images/login_page_bg.jpg";
import ResourceDetailSkeleton from "./ResourceDetailSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getResourceById } from "./servce";

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
          <h1 className="font-bold text-4xl">{data?.title}</h1>

          <div className="flex justify-between">
            <div className="w-1/3 mt-10">
              <img
                src={data?.image}
                alt="resource_img"
                className="object-cover h-80 w-full border-2 border-gray-400 rounded-xl"
              />
            </div>
            <div className="w-full mt-10 ml-10 mr-10 flex flex-col">
              <p>{data?.description}</p>

              <div className="mt-10 flex space-x-5">
                <p>
                  <span className="font-bold">Profesor:</span> {data?.teacher}
                </p>
                <p>{showDurationOrTotalPages()}</p>
              </div>
              <div className="text-center mt-auto w-full">
                <button className="rounded-xl bg-blue-900 text-white font-bold w-1/2 text-2xl h-14 hover:bg-blue-800">
                  {data?.free ? "Gratis" : `Comprar $ ${data?.price || 0}`}
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
