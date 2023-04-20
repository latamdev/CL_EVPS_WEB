import React from "react";
import { SelectTag } from "../Admin/UploadResource/interface";
import { ITag } from "../Resources/ResourceDetail/interfaces";

interface TagProps {
  tagEl: ITag | SelectTag;
}

const Tag: React.FC<TagProps> = (props) => {
  const { tagEl } = props;
  return (
    <div className="border-2 border-black font-semibold text-black rounded-full pl-3 pr-3 hover:cursor-pointer hover:bg-black hover:text-white hover:font-semibold">
      {(tagEl as ITag).name || (tagEl as SelectTag).label}
    </div>
  );
};

export default Tag;
