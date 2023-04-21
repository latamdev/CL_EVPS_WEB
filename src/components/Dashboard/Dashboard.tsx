import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import VideoSummary from "./VideoSummary/VideoSummary";
import VideoStatistics from "./VideoStatistics/VideoStatistics";
import { useQuery } from "@tanstack/react-query";
import { getAllUserResources } from "./service";
import { useContext } from "react";
import { UserContext } from "../../Root";
import SkeletonWrapper from "../SkeletonWrapper";
import ResourceTable from "../Videos/ResourceTable";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  const { data, isLoading } = useQuery(["USER_RESOURCE_QUERY"], () =>
    getAllUserResources(currentUser.id)
  );

  return (
    <div className="flex flex-col flex-3 lg:flex-row gap-10 px-10 py-10 w-full ">
      <div className="w-full lg:w-3/4">
        <div className="flex ">
          <WelcomeMessage />
        </div>
        <div className="flex  mt-10">
          <SkeletonWrapper isLoading={isLoading} skeleton={<h1>Cargando</h1>}>
            <ResourceTable
              parent={"Dashboard"}
              resourceList={data}
              setResourceType={() => {}}
            />
          </SkeletonWrapper>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-full mx-auto lg:w-fit py-2">
        <div className="flex mt-10 justify-center">
          <VideoSummary />
        </div>
        <div className="flex mt-10">
          <VideoStatistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
