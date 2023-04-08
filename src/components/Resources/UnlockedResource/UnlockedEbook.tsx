import React from "react";
import ResourceImage from "../ResourceImage/ResourceImage";
import { doDownloadEbook } from "./service";
import { useMutation } from "@tanstack/react-query";

const UnlockedEbook = ({ data }) => {
  const mutation = useMutation({
    mutationKey: ["DOWNLOAD_EBOOK_QUERY"],
    mutationFn: doDownloadEbook,
    onSuccess: (response: any) => {
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(response);
      link.download = `${data.title}-${+new Date()}.pdf`;
      link.click();
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  const downloadEbook = async () => {
    mutation.mutate(data.id);
  };

  return (
    <div className="flex flex-col gap-4">
      <ResourceImage
        img={data.image}
        className={
          "object-cover mx-auto h-96 w-80 border-2 border-gray-400 rounded-xl"
        }
      />
      <button
        onClick={() => downloadEbook()}
        className="bg-info w-80 mx-auto text-white font-bold text-2xl rounded-lg p-2 hover:bg-secondary hover:text-black ease-in transition-all duration-150"
      >
        Descargar Ebook
      </button>
    </div>
  );
};

export default UnlockedEbook;
