import { Link, Navigate } from "react-router-dom";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import logo from "../../assets/images/plurality_logo.png";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { doLogin } from "./service";
import useUser from "../../hooks/useUser";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Login() {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const mutation = useMutation({
    mutationFn: doLogin,
    onSuccess: (response) => {
      login(response.token);
      console.log("Login success", response);
    },
    onError: ({ response: { data } }) => {
      console.log(data);
      setError(data.message);
    },
  });

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    await mutation.mutate({ email, password });
  };

  const handleErrorMessage = (message: string) => {
    return message.includes("Password")
      ? "La contraseña es incorrecta"
      : "El usuario no se ha encontrado";
  };

  if (mutation.isSuccess) {
    return <Navigate to={"/platform"} />;
  }

  return (
    <div className="w-screen">
      <div className="px-10 md:px-0 md:columns-2 flex">
        <div className="h-screen w-full md:w-4/12 flex justify-center items-center">
          <div className="w-full md:w-10/12">
            <Link to={"/"} className="flex items-center">
              <img alt="logo" src={logo} className="h-20  relative -left-4" />
              <h3 className="text-gray-900">
                Plurality <b>idiomas</b>
              </h3>
            </Link>
            <h1 className="text-2xl mt-10">Ingresa a tu cuenta</h1>
            <p className="mt-5">
              No tienes una cuenta todavía?{" "}
              <Link
                to={"/create-account"}
                className="text-blue-900 font-blod hover:text-blue-700"
              >
                Registrate
              </Link>
            </p>
            <form
              onSubmit={(e) => handleLogin(e)}
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

              {error && (
                <div className="bg-danger text-white border border-red-600 rounded-lg font-bold p-3">
                  {handleErrorMessage(error)}
                </div>
              )}

              <button className="rounded-lg flex items-center justify-center text-center font-bold bg-morazul text-white p-2 pl-4 pr-4 hover:bg-secondary hover:text-black ease-linear transition-all duration-150">
                {mutation.isLoading ? <LoadingSpinner /> : <div>Ingresar</div>}
              </button>

              <SocialLogin />
            </form>
          </div>
        </div>
        <div className="h-screen md:w-8/12 gradient-bg blur-[1px]"></div>
      </div>
    </div>
  );
}

export default Login;
