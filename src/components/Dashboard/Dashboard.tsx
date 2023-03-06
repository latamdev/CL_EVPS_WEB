import Videos from "../Videos/Videos";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import VideoSummary from "./VideoSummary/VideoSummary";
import VideoStatistics from "./VideoStatistics/VideoStatistics";

const Dashboard = ({}) => {
  return (
    <div className="flex flex-row pl-10 pr-10  py-5">
      <div className="flex-col w-1/2 ">
        <div className="flex ">
          <WelcomeMessage />
        </div>
        <div className="flex w-full mt-10">
          <Videos parent={"Dashboard"} />
        </div>
      </div>
      <div className="flex-col w-1/2 px-5 py-5">
        <div className="flex justify-center  mt-10">
          <VideoSummary />
        </div>
        <div className="flex justify-center mt-20">
          <VideoStatistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
