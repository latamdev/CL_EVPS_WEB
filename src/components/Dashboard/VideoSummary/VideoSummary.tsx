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
    <div className="flex flex-row gap-10  ">
      <div className="flex flex-row bg-gray-100 p-3 rounded-xl gap-2 items-center">
        <p className="font-face-bb text-6xl">{finishedVideos}</p>
        <p className="">Videos completados</p>
      </div>
      <div className="flex flex-row bg-gray-100 p-3 rounded-xl gap-2 items-center">
        <p className="font-face-bb text-6xl">{inProgressVideos}</p>
        <p className="">Videos en progreso</p>
      </div>
    </div>
  );
};

export default VideoSummary;
