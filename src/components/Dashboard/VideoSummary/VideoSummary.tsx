import { useEffect, useState } from "react";

const VideoSummary = () => {
  const [finishedVideos, setFinishedVideos] = useState(0);
  const [inProgressVideos, setInProgressVideos] = useState(0);

  useEffect(() => {
    //TODO: obtener valores reales
    setFinishedVideos(11);
    setInProgressVideos(4);
  }, []);

  return (
    <div className="flex lg:flex-row justify-center gap-2 md:gap-10 w-full">
      <div className="flex text-center items-center flex-row bg-white border shadow-lg rounded-lg p-10 h-fit  py-2 px-5 gap-3">
        <p className="font-face-bb text-3xl md:text-6xl">{finishedVideos}</p>
        <p className="">Videos completed</p>
      </div>
      <div className="flex text-center items-center flex-row bg-white border shadow-lg rounded-lg p-10 h-fit py-2 px-5 gap-3">
        <p className="font-face-bb text-3xl md:text-6xl">{inProgressVideos}</p>
        <p className="">Videos in progress</p>
      </div>
    </div>
  );
};

export default VideoSummary;
