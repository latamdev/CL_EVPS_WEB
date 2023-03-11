import { Link, Navigate } from "react-router-dom";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import logo from "../../assets/images/plurality_logo.png";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { doLogin } from "./service";
import useUser from "../../hooks/useUser";

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

  const showLoaderSpinner = () => {
    return (
      <svg
        aria-hidden="true"
        className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-400 fill-gray-100"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    );
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
                <div className="bg-yellow-200 text-yellow-600 border border-yellow-600 rounded-lg font-bold p-3">
                  {handleErrorMessage(error)}
                </div>
              )}

              <button className="rounded-lg flex items-center justify-center text-center font-bold bg-morazul text-white p-2 pl-4 pr-4 hover:bg-customYellow hover:text-black ease-linear transition-all duration-150">
                {mutation.isLoading ? showLoaderSpinner() : <div>Ingresar</div>}
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
