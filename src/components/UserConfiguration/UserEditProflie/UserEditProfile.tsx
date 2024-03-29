import React, { useState } from "react";
import { FaCogs, FaKey } from "react-icons/fa";
import GeneralInfoForm from "./GeneralInfoForm";
import PasswordEditForm from "./PasswordEditForm";

const UserEditProfile: React.FC = () => {
  const [editOption, setEditOption] = useState(0);

  return (
    <div className="py-10 w-full px-10">
      <h1 className="text-3xl">Editar perfil</h1>

      <div className="rounded-xl border w-full mt-10 shadow-lg">
        <div className="grid grid-cols-2 border-b">
          <div
            onClick={() => setEditOption(0)}
            className={`${
              editOption === 0 ? "bg-secondary font-bold" : "bg-gray-50"
            } rounded-l-xl rounded-bl-none p-2 flex justify-center hover:bg-secondary hover:font-bold hover:cursor-pointer ease-in transition-all duration-75`}
          >
            <h1 className="flex items-center gap-2">
              <FaCogs></FaCogs> Informacion General
            </h1>
          </div>
          <div
            onClick={() => setEditOption(1)}
            className={`${
              editOption === 1 ? "bg-secondary font-bold" : "bg-gray-50"
            } p-2 flex justify-center border-l rounded-br-none ease-in transition-linear duration-75 rounded-r-xl hover:bg-secondary hover:font-bold hover:cursor-pointer`}
          >
            <h1 className="flex items-center gap-2">
              <FaKey></FaKey> Cambiar Contraseña
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
