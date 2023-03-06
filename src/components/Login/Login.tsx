import { Link, Navigate } from "react-router-dom";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import logo from "../../assets/images/plurality_logo.png";
import { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { doLogin } from "./service";
import { MOCK_LOGIN_REQUEST } from "./LoginStubs";
import useUser from "../../hooks/useUser";

function Login() {
  const { login } = useUser();

  const mutation = useMutation({
    mutationFn: doLogin,
    onSuccess: (response) => {
      login(response.token);
      console.log("Login success", response);
    },
  });

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    await mutation.mutate(MOCK_LOGIN_REQUEST);
  };

  if (mutation.isSuccess) {
    return <Navigate to={"/platform"} />;
  }

  return (
    <div className="w-screen">
      <div className="columns-2 flex">
        <div className="h-screen w-4/12 flex justify-center items-center">
          <div className="w-10/12">
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
                type="text"
                id="email"
                className="form-input px-4 py-3 rounded-lg"
              />
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                className="form-input px-4 py-3 rounded-lg"
              />
              <button className="rounded-lg text-center font-bold bg-blue-800 text-white p-2 pl-4 pr-4 hover:bg-blue-700">
                Ingresar
              </button>

              <SocialLogin />
            </form>
          </div>
        </div>
        <div className="h-screen w-8/12 gradient-bg blur-[1px]"></div>
      </div>
    </div>
  );
}

export default Login;
