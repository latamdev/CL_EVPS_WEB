import { useMutation } from "@tanstack/react-query";
import React, { FormEvent, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { doRegister } from "./service";
import pluralityLogo from "../../assets/images/plurality_logo_v2.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ["REGISTER_QUERY"],
    mutationFn: doRegister,
    onSuccess: (response) => {
      navigate("/sign-in");

      console.log(response);
    },
    onError: (err: any) => {
      const errorCode = err.response.data.code;
      if (errorCode === 104) {
        setError("El usuario ya existe");
      }
    },
  });

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Las Contraseñas no coinciden");
      return;
    }
    mutation.mutate({ email, password });
  };

  const handleErrorMessage = (errorMsg: string) => {
    return errorMsg;
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="px-10 py-10 md:mx-auto my-auto flex flex-col w-96 justify-center">
        <img src={pluralityLogo} className="w-60 mx-auto" alt={"logo"} />
        <h1 className="mx-auto text-xl">
          Registra una cuenta en <b>Plurality</b>
        </h1>
        <form
          onSubmit={(e) => handleRegister(e)}
          className="mt-10 flex flex-col space-y-4"
        >
          <label htmlFor="email">Correo:</label>
          <input
            required
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-input px-4 py-3 rounded-lg focus:border-morazul"
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            required
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-input px-4 py-3 rounded-lg focus:border-morazul"
          />

          <label htmlFor="confirmPassword">Confirma tu contraseña:</label>
          <input
            required
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="form-input px-4 py-3 rounded-lg focus:border-morazul"
          />

          {error && (
            <div className="bg-danger text-white border border-red-600 rounded-lg font-bold p-3">
              {handleErrorMessage(error)}
            </div>
          )}

          <button
            disabled={mutation.isLoading}
            className="rounded-lg flex items-center justify-center text-center font-bold bg-morazul text-white p-2 pl-4 pr-4 hover:bg-secondary hover:text-black ease-linear transition-all duration-150"
          >
            {mutation.isLoading ? <LoadingSpinner /> : <div>Registrar</div>}
          </button>
          <Link
            to={"/sign-in"}
            className="text-primary text-center hover:text-blue-500"
          >
            Volver al inicio de sesión
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
