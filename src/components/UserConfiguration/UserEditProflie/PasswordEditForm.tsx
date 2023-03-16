import React, { FormEvent } from "react";

function PasswordEditForm() {
  const handleChangePassword = (event: FormEvent) => {
    event.preventDefault();
    alert("Password has been changed");
  };
  return (
    <div className="p-5">
      <form
        onSubmit={(e) => handleChangePassword(e)}
        className="mt-10 flex flex-col space-y-4"
      >
        <label htmlFor="password">Nueva Contraseña:</label>
        <input
          type="password"
          id="password"
          className="form-input px-4 py-3 focus:border-morazul rounded-lg"
        />
        <label htmlFor="confirm-password">Confirma la nueva contraseña:</label>
        <input
          type="password"
          id="confirm-password"
          className="form-input px-4 py-3 focus:border-morazul rounded-lg"
        />
        <div className="flex justify-center w-full">
          <button className="ease-linear transition-all duration-150 rounded-lg w-1/2 font-bold text-lg bg-morazul text-white p-3 pl-4 pr-4 hover:bg-secondary hover:text-black">
            Cambiar Contraseña
          </button>
        </div>
      </form>
    </div>
  );
}

export default PasswordEditForm;
