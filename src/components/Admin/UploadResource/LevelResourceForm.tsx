import React, { useState } from "react";
import { UploadResourceForm } from "./interface";

interface ResourceTypeFormStepProps {
  formData: UploadResourceForm | undefined;
  setFormData: (form: UploadResourceForm | undefined) => void;
}

const LevelResourceForm: React.FC<ResourceTypeFormStepProps> = (props) => {
  const { formData, setFormData } = props;

  const [selected, setSelected] = useState(formData?.level);

  return (
    <div className="py-5 px-5">
      <div className="flex flex-row gap-[5rem]">
        <div
          onClick={() => {
            setFormData({ ...formData, level: 0 });
            setSelected(0);
          }}
          className={`${
            selected === 0
              ? "text-info border-info"
              : "text-gray-400 border-gray-400 "
          } border-2 p-5 rounded-lg hover:p-[1.26rem] hover:text-lg ease-in-out transition-all duration-200 hover:text-info hover:border-info hover:cursor-pointer`}
        >
          <div className="flex flex-col gap-2 font-bold justify-center items-center">
            <span>Principiante</span>
          </div>
        </div>

        <div
          onClick={() => {
            setFormData({ ...formData, level: 1 });
            setSelected(1);
          }}
          className={`${
            selected === 1
              ? "text-info border-info"
              : "text-gray-400 border-gray-400 "
          } border-2 p-5 rounded-lg  hover:p-[1.26rem] hover:text-lg ease-in-out transition-all duration-200 hover:text-info hover:border-info hover:cursor-pointer`}
        >
          <div className="flex flex-col gap-2 font-bold justify-center items-center">
            <span>Intermedio</span>
          </div>
        </div>

        <div
          onClick={() => {
            setFormData({ ...formData, level: 2 });
            setSelected(2);
          }}
          className={`${
            selected === 2
              ? "text-info border-info"
              : "text-gray-400 border-gray-400 "
          } border-2 p-5 rounded-lg  hover:p-[1.26rem] hover:text-lg ease-in-out transition-all duration-200 hover:text-info hover:border-info hover:cursor-pointer`}
        >
          <div className="flex flex-col gap-2 font-bold justify-center items-center">
            <span>Avanzado</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelResourceForm;
