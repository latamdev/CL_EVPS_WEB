import React, { useState } from "react";
import Heart from "react-heart";

const UnlockedResourceInfoRow = ({ data }) => {
  const [isClick, setIsClick] = useState(false);

  const getLevelInfo = (level: number) => {
    if (level === 0) {
      return <h1>Básico</h1>;
    } else if (level === 1) {
      return <h1>Intermedio</h1>;
    }

    return <h1>Avanzado</h1>;
  };

  return (
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
      <button className="border border-black  bg-secondary  rounded-lg py-2 px-4">
        <span className="w-fit h-10 text-2xl">{getLevelInfo(data.level)}</span>
      </button>

      {data._class?.includes("Ebook") ? (
        <button className="border border-black  bg-white  rounded-lg py-2 px-4">
          <span className="w-fit h-10 text-2xl">
            Páginas: {data.totalPages}
          </span>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UnlockedResourceInfoRow;
