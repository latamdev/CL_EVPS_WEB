import Videos from "../Videos/Videos";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import VideoSummary from "./VideoSummary/VideoSummary";
import VideoStatistics from "./VideoStatistics/VideoStatistics";

const Dashboard = ({}) => {
  return (
    <div className="flex flex-col lg:flex-row px-10 py-10 w-full justify-evenly ">
      <div className="w-full lg:w-3/4">
        <div className="flex ">
          <WelcomeMessage />
        </div>
        <div className="flex mt-10">
          <Videos parent={"Dashboard"} />
        </div>
      </div>
      <div className="w-full mx-auto lg:w-1/4 py-5">
        <div className="flex mt-10 justify-center">
          <VideoSummary />
        </div>
        <div className="flex mt-20">
          <VideoStatistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
