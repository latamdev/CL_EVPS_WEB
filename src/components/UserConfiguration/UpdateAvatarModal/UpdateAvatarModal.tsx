import { useMutation } from "@tanstack/react-query";
import React, { FormEvent, useContext, useState } from "react";
import useUser from "../../../hooks/useUser";
import { httpPostRequest } from "../../../http/UserClient";
import { UserContext } from "../../../Root";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

interface UpdateAvatarModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const MULTIPART_FORM_DATA = "multipart/form-data";

const UpdateAvatarModal: React.FC<UpdateAvatarModalProps> = (props) => {
  const { setShow } = props;
  const [avatarFile, setAvatarFile] = useState<any>();
  const { setCurrentUser } = useUser();
  const { setCurrentUser: setUser } = useContext(UserContext);

  const handleUploadAvatar = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatarFile, avatarFile.name);
    mutation.mutate(formData);
  };

  const updateAvatar = async (formData: FormData): Promise<any> => {
    return httpPostRequest("user/update-avatar", formData, MULTIPART_FORM_DATA);
  };

  const mutation = useMutation({
    mutationKey: ["UPDATE_AVATAR_QUERY"],
    mutationFn: updateAvatar,
    onSuccess: (response: any) => {
      localStorage.removeItem("token");
      localStorage.setItem("token", JSON.stringify(response.token));
      setCurrentUser(response.user);
      setUser(response.user);
      setShow(false);
    },
  });

  return (
    <>
      {props.show && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setShow(false)}
          ></div>

          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="flex flex-col">
                <h1 className="text-2xl">Actualizar avatar</h1>
                <hr />
                <form
                  onSubmit={(e) => handleUploadAvatar(e)}
                  className="mt-10 flex flex-col gap-4"
                  encType="multipart/form-data"
                >
                  <input
                    className="relative hover:border hover:border-primary m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 dark:text-neutral-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-morazul file:text-white hover:cursor-pointer file:hover:bg-secondary file:hover:cursor-pointer file:hover:text-black file:font-bold dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                    type="file"
                    onChange={(e) => {
                      if (e.target.files) {
                        setAvatarFile(e.target.files[0]);
                      }
                    }}
                    id="formFile"
                  />

                  <button
                    disabled={mutation.isLoading}
                    className="text-lg text-center font-bold text-white bg-primary p-2 rounded-lg ease-linear transition-all duration-150 hover:bg-secondary hover:text-black"
                  >
                    {mutation.isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <div>Actualizar</div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateAvatarModal;
