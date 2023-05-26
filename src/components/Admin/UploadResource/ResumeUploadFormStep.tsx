import React from "react";
import { formatCurrencyToCLP } from "../../Resources/ResourceDetail/utils";
import Tag from "../../Tag/Tag";
import { UploadResourceForm, SelectTag } from "./interface";

interface ResumeUploadFormProps {
  formData: UploadResourceForm | undefined;
  setFormData: (form: UploadResourceForm | undefined) => void;
}

const ResumeUploadFormStep: React.FC<ResumeUploadFormProps> = (props) => {
  const { formData, setFormData } = props;

  const showTypeOfResource = () => {
    return formData?.resourceType === 0 ? (
      <span className="bg-blue-600 p-2 rounded-full text-white">Video</span>
    ) : (
      <span className="bg-orange-600 p-2 rounded-full text-white">Ebook</span>
    );
  };

  return (
    <div className="py-5 px-5 md:px-20 mx-auto mb-5">
      <h1 className="text-base md:text-3xl text-center font-bold mb-10 text-gray-700">
        Resumen y subida del recurso
      </h1>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 flex px-5 flex-col space-y-3">
          <div className="flex flex-row space-x-4 items-center">
            <span className="text-lg md:text-3xl">
              <b>{formData?.title}</b>
            </span>
            {showTypeOfResource()}
          </div>
          <span>
            <b>Descripción:</b> {formData?.description}
          </span>
          <span>
            <b>Precio:</b> {formatCurrencyToCLP(formData?.price as number)}
          </span>
          <span>
            <b>Profesor:</b> {formData?.teacher}
          </span>

          <div className="flex space-x-2 overflow-auto h-max justify-start lg:justify-start ">
            {(formData?.tags?.length as number) > 0 ? (
              formData?.tags?.map((tag: SelectTag, index: number) => {
                return <Tag key={index} tagEl={tag} />;
              })
            ) : (
              <span className="ml-1">---</span>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <form
            className="mt-10 flex flex-col gap-4"
            encType="multipart/form-data"
          >
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="formImage"
            >
              Sube una imagen de portada:
            </label>
            <input
              className="relative hover:border hover:border-primary m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 dark:text-neutral-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-morazul file:text-white hover:cursor-pointer file:hover:bg-secondary file:hover:cursor-pointer file:hover:text-black file:font-bold dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setFormData({ ...formData, poster: e.target.files[0] });
                }
              }}
              id="formImage"
            />
          </form>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="formFile"
          >
            Sube el archivo del recurso:
          </label>
          <form
            className="mt-10 flex flex-col gap-4"
            encType="multipart/form-data"
          >
            <input
              className="relative hover:border hover:border-primary m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 dark:text-neutral-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-morazul file:text-white hover:cursor-pointer file:hover:bg-secondary file:hover:cursor-pointer file:hover:text-black file:font-bold dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setFormData({ ...formData, file: e.target.files[0] });
                }
              }}
              id="formFile"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadFormStep;
