import React, { FC } from "react";
import { Details } from "./interfaces";

const VideoDetails: FC<{ details: Details; setShowModal: any }> = ({
  details,
  setShowModal,
}) => {
  return (
    <div className="px-10">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">{details.title}</h3>
          </div>

          {/*body*/}
          <div className="relative p-6 flex-auto">
            <div>
              {/**<img src={vidPlaceholder} className="ml-auto mr-auto w-80 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200" />*/}
              <iframe
                width="560"
                height="315"
                className="ml-0 w-full border-8 border-customYellow"
                src="https://www.youtube.com/embed/RGqAVLLtX14?start=1086"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <br />
            <p>{details.description}</p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Agregar a carrito ${details.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
