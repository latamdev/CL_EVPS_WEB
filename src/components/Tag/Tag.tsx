import React from "react";
import { ITag } from "../Resources/ResourceDetail/interfaces";

interface TagProps {
  tagEl: ITag;
}

const Tag: React.FC<TagProps> = (props) => {
  const { tagEl } = props;
  return (
    <div className="border-2 border-black font-semibold text-black rounded-full pl-3 pr-3 hover:cursor-pointer hover:bg-black hover:text-white hover:font-semibold">
      {tagEl.name}
    </div>
  );
};

export default Tag;
