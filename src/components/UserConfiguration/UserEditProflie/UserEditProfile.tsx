import React, { useState } from "react";
import { FaCogs, FaKey } from "react-icons/fa";
import GeneralInfoForm from "./GeneralInfoForm";
import PasswordEditForm from "./PasswordEditForm";

const UserEditProfile: React.FC = () => {
  const [editOption, setEditOption] = useState(0);

  return (
    <div className="py-5 md:py-10 w-full px-2 md:px-10">
      {/* <h1 className="text-lg md:text-3xl font-face-bb">Editar perfil</h1> */}

      <div className="rounded-xl bg-white border w-full mt-5 md:mt-10 shadow-lg">
        <div className="grid grid-cols-2 border-b">
          <div
            onClick={() => setEditOption(0)}
            className={`${
              editOption === 0 ? "bg-secondary font-semibold" : "bg-gray-50"
            } rounded-l-xl rounded-bl-none p-2 flex justify-center hover:bg-secondary hover:font-semibold hover:cursor-pointer ease-in transition-all duration-75`}
          >
            <h1 className="flex flex-col md:flex-row items-center text-center gap-2">
              <FaCogs></FaCogs>
              <span className="text-sm md:text-base">Informacion General</span>
            </h1>
          </div>
          <div
            onClick={() => setEditOption(1)}
            className={`${
              editOption === 1 ? "bg-secondary font-semibold" : "bg-gray-50"
            } p-2 flex justify-center border-l rounded-br-none ease-in transition-linear duration-75 rounded-r-xl hover:bg-secondary hover:font-semibold hover:cursor-pointer`}
          >
            <h1 className="flex flex-col md:flex-row text-center items-center gap-2">
              <FaKey></FaKey>
              <span className="text-sm md:text-base">Cambiar Contraseña</span>
            </h1>
          </div>
        </div>

        <div>
          {editOption === 0 && <GeneralInfoForm />}

          {editOption === 1 && <PasswordEditForm />}
        </div>
      </div>
    </div>
  );
};

export default UserEditProfile;
