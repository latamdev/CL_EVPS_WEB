import Videos from "../Videos/Videos";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import VideoSummary from "./VideoSummary/VideoSummary";
import VideoStatistics from "./VideoStatistics/VideoStatistics";

const Dashboard = ({}) => {
    return (
        <div className="flex flex-row  justify-evenly py-5">
            <div className="flex-col ">
                <div className="flex "><WelcomeMessage /></div>
                <div className="flex mt-10"><Videos parent={'Dashboard'}/></div>
            </div>
            <div className="flex-col px-5 py-5">
                <div className="flex  mt-10"><VideoSummary /></div>
                <div className="flex  mt-20"><VideoStatistics /></div>
            </div>
        </div>
    )
}

export default Dashboard;