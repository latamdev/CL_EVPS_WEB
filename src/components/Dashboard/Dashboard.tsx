import Videos from "../Videos/Videos";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import VideoSummary from "./VideoSummary/VideoSummary";
import VideoStatistics from "./VideoStatistics/VideoStatistics";

const Dashboard = ({}) => {
  return (
    <div className="flex flex-col px-10 py-10">
      <div className="flex w-1/2">
        <WelcomeMessage />
      </div>
      <div className="flex flex-row">
        <div className="flex-col w-1/2 ">
          <div className=" w-full mt-10">
            <Videos title={"Tus Recursos"} parent={"Dashboard"} />
          </div>
        </div>
        <div className="flex-col w-1/2 px-5 py-5">
          <div className="flex justify-center  mt-10">
            <VideoSummary />
          </div>
          <div className="flex justify-center mt-16">
            <VideoStatistics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
