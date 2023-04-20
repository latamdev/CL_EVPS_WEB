import React, { useState } from "react";
import { FaBook, FaVideo } from "react-icons/fa";
import { UploadResourceForm } from "./interface";

interface ResourceTypeFormStepProps {
  formData: UploadResourceForm | undefined;
  setFormData: (form: UploadResourceForm | undefined) => void;
}

const ResourceTypeFormStep: React.FC<ResourceTypeFormStepProps> = (props) => {
  const { formData, setFormData } = props;

  const [selected, setSelected] = useState(formData?.resourceType);

  return (
    <div className="py-5 px-5 mx-auto h-[25rem]">
      <h1 className="text-3xl text-center font-bold mb-10 text-gray-700">
        ¿Qué tipo de recurso quieres subir?
      </h1>
      <div className="flex flex-row gap-[5rem] justify-center">
        <div
          onClick={() => {
            setFormData({ ...formData, resourceType: 0 });
            setSelected(0);
          }}
          className={`${
            selected === 0
              ? "text-info border-info"
              : "text-gray-400 border-gray-400 "
          } border-2 p-20 rounded-lg hover:p-[5.2rem] hover:text-lg ease-in-out transition-all duration-200 hover:text-info hover:border-info hover:cursor-pointer`}
        >
          <div className="flex flex-col gap-2 font-bold justify-center items-center">
            <span className="text-3xl">
              <FaVideo />
            </span>
            <span>Video</span>
          </div>
        </div>

        <div
          onClick={() => {
            setFormData({ ...formData, resourceType: 1 });
            setSelected(1);
          }}
          className={`${
            selected === 1
              ? "text-info border-info"
              : "text-gray-400 border-gray-400 "
          } border-2 p-20 rounded-lg  hover:p-[5.2rem] hover:text-lg ease-in-out transition-all duration-200 hover:text-info hover:border-info hover:cursor-pointer`}
        >
          <div className="flex flex-col gap-2 font-bold justify-center items-center">
            <span className="text-3xl">
              <FaBook />
            </span>
            <span>Ebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceTypeFormStep;
