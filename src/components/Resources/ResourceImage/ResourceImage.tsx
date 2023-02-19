import React from "react";
import noImage from "../../../assets/images/no-photo.svg";

interface ResourceImageProps {
  img: string;
  className: string;
}

const ResourceImage: React.FC<ResourceImageProps> = ({ img, className }) => {
  return (
    <>
      <img src={img || noImage} alt="resource_img" className={className} />
    </>
  );
};

export default ResourceImage;
