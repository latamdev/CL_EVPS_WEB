import React from "react";
import { Resource } from "../ResourceDetail/interfaces";
import UnlockedVideo from "./UnlockedVideo";
import UnlockedEbook from "./UnlockedEbook";
import UnlockedResourceInfoRow from "./UnlockedResourceInfoRow";

interface UnlockedResourceProps {
  data: Resource;
}

const UnlockedResource: React.FC<UnlockedResourceProps> = (props) => {
  const { data } = props;

  return (
    <>
      <div className="magicpattern flex flex-col  md:gap-1 ">
        <h1 className="text-white text-center py-2 font-bold text-2xl lg:text-3xl font-face-bb">
          {data.title}
        </h1>
        <div className="w-full lg:w-3/4 xl:w-1/2 h-fit mx-auto">
          {data._class?.includes("Video") ? (
            <div className="md:py-5">
              <UnlockedVideo data={data} />
            </div>
          ) : (
            <div className="p-5">
              <UnlockedEbook data={data} />
            </div>
          )}
        </div>
      </div>
      <UnlockedResourceInfoRow data={data} />
    </>
  );
};

export default UnlockedResource;
