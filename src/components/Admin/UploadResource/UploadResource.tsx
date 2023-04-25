import React, { useEffect, useState } from "react";
import { Stepper } from "react-form-stepper";
import InformationResourceFormStep from "./InformationResourceFormStep";
import { UploadResourceForm } from "./interface";
import ResourceTypeFormStep from "./ResourceTypeFormStep";
import "./index.css";
import ResumeUploadFormStep from "./ResumeUploadFormStep";
import { STEPS_CONNECTOR_STYLE_CONFIG, STEPS_STYLE_CONFIG } from "./constants";
import { doUploadResource } from "./service";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import SuccessAlert from "../../Alerts/SuccessAlert";
import ErrorAlert from "../../Alerts/ErrorAlert";

const UploadResource = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [resourceForm, setResourceForm] = useState<UploadResourceForm>();
  const [uploadResourceActive, setUploadResourceActive] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const mutation = useMutation({
    mutationKey: ["UPLOAD_RESOURCE_QUERY"],
    mutationFn: doUploadResource,
    onSuccess: (response: any) => {
      setSuccess(response.success || response.id);
    },
    onError: (error: any) => {
      setError(true);
    },
  });

  const handleSteps = (action: string) => {
    action === "prev"
      ? setActiveStep(activeStep - 1 >= 0 ? activeStep - 1 : activeStep)
      : setActiveStep(activeStep + 1 <= 2 ? activeStep + 1 : activeStep);

    if (action === "prev") {
      setResourceForm({ ...resourceForm, file: undefined });
    }
  };

  const uploadResource = () => {
    const tagsText = resourceForm?.tags?.map((tag) => tag.value).join(",");
    const formData = new FormData();
    formData.append(
      "file",
      resourceForm?.file as Blob,
      resourceForm?.file?.name as string
    );
    formData.append(
      "poster",
      resourceForm?.poster as Blob,
      resourceForm?.poster?.name as string
    );
    formData.append("title", resourceForm?.title as string);
    formData.append("description", resourceForm?.description as string);
    formData.append("price", resourceForm?.price?.toString() as string);
    formData.append("teacher", resourceForm?.teacher as string);
    formData.append("level", resourceForm?.level?.toString() as string);
    formData.append("tags", tagsText?.toString() as string);
    formData.append(
      "resourceType",
      resourceForm?.resourceType?.toString() as string
    );

    mutation.mutate(formData);
  };

  useEffect(() => {
    if (resourceForm?.file) {
      setUploadResourceActive(true);
    } else {
      setUploadResourceActive(false);
    }
  }, [resourceForm?.file]);

  return (
    <div className="w-full max-w-full flex-0 py-10 px-10">
      {error && (
        <ErrorAlert title="Hubo un error">
          No se pudo crear el recurso. Intenta subirlo nuevamente.
        </ErrorAlert>
      )}
      {success ? (
        <SuccessAlert title="Recurso creado exitosamente">
          <p>
            El recurso ya ha sido subido y se encuentra disponible para ser
            comprado por los estudiantes. Puedes administrar todos los recursos
            de la plataforma haciendo click <b>Aquí</b>.
          </p>
        </SuccessAlert>
      ) : (
        <div className=" bg-white border shadow-lg rounded-lg md:p-10">
          <Stepper
            steps={[
              { label: "Tipo de recurso" },
              { label: "Información" },
              { label: "Subir" },
            ]}
            activeStep={activeStep}
            styleConfig={STEPS_STYLE_CONFIG}
            connectorStyleConfig={STEPS_CONNECTOR_STYLE_CONFIG}
            stepClassName={"bg-primary md:py-10 px-0"}
          />

          {activeStep === 0 && (
            <ResourceTypeFormStep
              formData={resourceForm}
              setFormData={setResourceForm}
            />
          )}
          {activeStep === 1 && (
            <InformationResourceFormStep
              formData={resourceForm}
              setFormData={setResourceForm}
            />
          )}
          {activeStep === 2 && (
            <ResumeUploadFormStep
              formData={resourceForm}
              setFormData={setResourceForm}
            />
          )}

          <div className="flex flex-row justify-center gap-5 md:justify-between items-center px-10 pb-10 md:pb-0 md:px-24">
            <button
              disabled={activeStep === 0}
              onClick={() => handleSteps("prev")}
              className="bg-primary disabled:bg-gray-300 hover:disabled:bg-gray-300 hover:disabled:text-white text-white w-40 rounded py-2 px-4 hover:bg-secondary hover:text-black ease-linear transition-all duration-150"
            >
              Atrás
            </button>

            {activeStep === 2 ? (
              <button
                onClick={() => uploadResource()}
                disabled={!uploadResourceActive || mutation.isLoading}
                className="bg-primary disabled:bg-gray-300 w-40 disabled:hover:bg-gray-300 disabled:hover:text-white text-white rounded py-2 px-4  hover:bg-secondary hover:text-black ease-linear transition-all duration-150"
              >
                {mutation.isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <div>Subir Recurso</div>
                )}
              </button>
            ) : (
              <button
                onClick={() => handleSteps("next")}
                className="bg-primary text-white w-40 rounded py-2 px-4  hover:bg-secondary hover:text-black ease-linear transition-all duration-150"
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadResource;
