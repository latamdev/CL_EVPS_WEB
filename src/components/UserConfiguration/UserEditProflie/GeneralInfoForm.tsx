import React, { FormEvent, useState } from "react";
import useUser from "../../../hooks/useUser";

function GeneralInfoForm() {
  const { currentUser: user } = useUser();
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username || "");
  const [birthday, setBirthday] = useState(user.birthday || "");

  const handleUpdateUserInfo = (e: FormEvent) => {
    e.preventDefault();

    user.email = email;
    user.username = username;

    console.log("new user", user);
  };

  return (
    <div className="p-5">
      <form onSubmit={(e) => handleUpdateUserInfo(e)} className="mt-10">
        <div className="grid grid-cols-2  gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="first_name">Nombres:</label>
            <input
              type="text"
              id="first_name"
              disabled={true}
              value={user.first_name}
              className="disabled:bg-gray-100 form-input px-4 py-3 focus:border-morazul rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 w-full mt-0">
            <label htmlFor="last_name">Apellidos:</label>
            <input
              type="text"
              id="last_name"
              value={user.last_name}
              disabled={true}
              className="disabled:bg-gray-100 form-input px-4 py-3 focus:border-morazul rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(value) => setUsername(value.target.value)}
              className="form-input px-4 py-3 focus:border-morazul rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Correo:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(value) => setEmail(value.target.value)}
              className="form-input px-4 py-3 focus:border-morazul rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
            <input
              type="date"
              id="fecha_nacimiento"
              value={birthday}
              onChange={(value) => setBirthday(value.target.value)}
              className="form-input px-4 py-3 focus:border-morazul rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="country">Pais:</label>
            <select
              id="country"
              className="form-input px-4 py-3 focus:border-morazul rounded-lg"
            >
              <option value="cl">Chile</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center w-full mt-5">
          <button className="ease-linear transition-all duration-150 rounded-lg w-1/2 font-bold text-lg bg-morazul text-white p-3 pl-4 pr-4 hover:bg-customYellow hover:text-black">
            Actualizar Datos
          </button>
        </div>
      </form>
    </div>
  );
}

export default GeneralInfoForm;
