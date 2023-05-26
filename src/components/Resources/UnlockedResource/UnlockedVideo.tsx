import React, { useEffect, useRef, useState } from "react";

const UnlockedVideo = ({ data }) => {
  const videoFrame = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (videoFrame.current !== null) {
      setLoading(false);
    }
  }, [videoFrame]);

  return (
    <>
      {loading && <h1 className="text-white">Cargando</h1>}
      <iframe
        ref={videoFrame}
        title="video"
        src={`${data?.link}`}
        loading="eager"
        className="p-0 border-none top-0 w-full h-[13.8rem] md:h-[30rem]"
        allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
        allowFullScreen={true}
      ></iframe>
    </>
  );
};

export default UnlockedVideo;
