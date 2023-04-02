import React, { useState } from "react";
import { Resource } from "../ResourceDetail/interfaces";
import ResourceImage from "../ResourceImage/ResourceImage";
import Heart from "react-heart";

interface UnlockedResourceProps {
  data: Resource;
}

const UnlockedResource: React.FC<UnlockedResourceProps> = (props) => {
  const { data } = props;
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <div className="magicpattern flex flex-col gap-4 p-10">
        <h1 className="text-white font-bold text-3xl">{data.title}</h1>
        <div className="w-full lg:w-3/4 xl:w-1/2 h-fit mx-auto">
          {data._class?.includes("Video") ? (
            <iframe
              title="video"
              src={`${data?.link}`}
              loading="lazy"
              className="p-0 border-none top-0 w-full h-96"
              allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
              allowFullScreen={true}
            ></iframe>
          ) : (
            <div className="flex flex-col gap-4">
              <ResourceImage
                img={data.image}
                className={
                  "object-cover mx-auto h-96 w-80 border-2 border-gray-400 rounded-xl"
                }
              />
              <button className="bg-info w-80 mx-auto text-white font-bold text-2xl rounded-lg p-2 hover:bg-secondary hover:text-black ease-in transition-all duration-150">
                Descargar ebook
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-5 gap-5">
        <button className="border border-black  bg-white rounded-lg p-2 pl-4 pr-4">
          <Heart
            isActive={isClick}
            onClick={() => setIsClick(!isClick)}
            animationScale={1.25}
            activeColor="#D63B6C"
            className="w-fit h-9"
            style={{ margin: "0 auto" }}
          />
        </button>
        <button className="border border-black bg-white rounded-lg p-2 pl-4 pr-4">
          <span className="w-fit h-10 text-3xl"> {data.level}</span>
        </button>
      </div>
    </>
  );
};

export default UnlockedResource;
