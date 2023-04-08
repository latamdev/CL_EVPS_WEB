import React, { useState } from "react";
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
      <div className="magicpattern flex flex-col gap-4 p-10">
        <h1 className="text-white font-bold text-3xl font-face-bb">
          {data.title}
        </h1>
        <div className="w-full lg:w-3/4 xl:w-1/2 h-fit mx-auto">
          {data._class?.includes("Video") ? (
            <UnlockedVideo data={data} />
          ) : (
            <UnlockedEbook data={data} />
          )}
        </div>
      </div>
      <UnlockedResourceInfoRow data={data} />
    </>
  );
};

export default UnlockedResource;
