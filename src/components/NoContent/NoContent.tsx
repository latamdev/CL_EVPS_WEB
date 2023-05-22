import React from "react";
import noContent from "../../assets/images/no-content.png";

const NoContent = ({ message }) => {
  return (
    <div className="flex flex-col justify-center align-middle items-center gap-5">
      <h1 className="page-title text-center text-2xl">{message}</h1>
      <img src={noContent} width={300} alt="" />
    </div>
  );
};

export default NoContent;
