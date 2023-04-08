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
    <div className="flex flex-row justify-center gap-10 w-full">
      <div className="flex flex-row bg-gray-100 rounded-xl py-2 px-5 gap-3">
        <p className="font-face-bb text-6xl">{finishedVideos}</p>
        <p className="pt-3">Videos completed</p>
      </div>
      <div className="flex flex-row bg-gray-100 rounded-xl py-2 px-5 gap-3">
        <p className="font-face-bb text-6xl">{inProgressVideos}</p>
        <p className="pt-3">Videos in progress</p>
      </div>
    </div>
  );
};

export default VideoSummary;
