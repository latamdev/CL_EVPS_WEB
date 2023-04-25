import React from "react";
import { UploadResourceForm } from "./interface";
import LevelResourceForm from "./LevelResourceForm";
import TagsSelect from "./TagsSelect";
import TeacherSelect from "./TeacherSelect";

interface InformationResourceFormProps {
  formData: UploadResourceForm | undefined;
  setFormData: (form: UploadResourceForm | undefined) => void;
}

const InformationResourceFormStep: React.FC<InformationResourceFormProps> = (
  props
) => {
  const { formData, setFormData } = props;
  return (
    <div className="py-5 px-5 mx-auto">
      <h1 className="text-base md:text-3xl text-center font-bold mb-10 text-gray-700">
        Completa la información
      </h1>

      <div className="mt-10 flex flex-wrap -mx-3 mb-6 px-5 md:px-20 items-center space-y-10">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="title"
          >
            Título:
          </label>
          <input
            required
            type="text"
            id="title"
            value={formData?.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
            className="form-input w-full px-4 py-3 rounded-lg focus:border-morazul"
          />
        </div>

        <div className="w-full mt-0-i md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="price"
          >
            Precio:
          </label>
          <input
            required
            type="number"
            id="price"
            value={formData?.price}
            onChange={(event) =>
              setFormData({ ...formData, price: Number(event.target.value) })
            }
            className="form-input w-full px-4 py-3 rounded-lg focus:border-morazul"
          />
        </div>

        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="description"
          >
            Descripción:
          </label>
          <textarea
            required
            id="description"
            value={formData?.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
            className="form-input w-full px-4 py-3 rounded-lg focus:border-morazul"
            rows={5}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor=""
          >
            Selecciona o agrega tags:
          </label>
          <TagsSelect formData={formData} setFormData={setFormData} />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor=""
          >
            Selecciona al profesor:
          </label>
          <TeacherSelect formData={formData} setFormData={setFormData} />
        </div>

        <div className="w-full md:h-20 flex flex-col md:flex-row items-center px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor=""
          >
            Selecciona un nivel:
          </label>
          <LevelResourceForm formData={formData} setFormData={setFormData} />
        </div>
      </div>
    </div>
  );
};

export default InformationResourceFormStep;
