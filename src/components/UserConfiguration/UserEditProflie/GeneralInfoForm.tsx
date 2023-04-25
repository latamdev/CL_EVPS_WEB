import { useMutation, useQuery } from "@tanstack/react-query";
import React, { FormEvent, useState } from "react";
import useUser from "../../../hooks/useUser";
import SuccessAlert from "../../Alerts/SuccessAlert";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { COUNTRIES_ENDPOINT, QUERY_KEY_COUNTRIES } from "../constants";
import { updateUser } from "./service";

function GeneralInfoForm() {
  const { currentUser: user, setCurrentUser } = useUser();
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username || "");
  const [birthday, setBirthday] = useState(user.birthday || "");
  const [country, setCountry] = useState(user.country || "");
  const [showAlert, setShowAlert] = useState(false);

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (response: any) => {
      localStorage.removeItem("token");
      localStorage.setItem("token", JSON.stringify(response.token));
      setCurrentUser(response.user);
      setShowAlert(true);
      console.log("update success", user);
    },
  });

  const getCountries = async () => {
    const res = await fetch(COUNTRIES_ENDPOINT);
    return res.json();
  };

  const { data: countries, isLoading: loadingCountries } = useQuery({
    queryKey: [QUERY_KEY_COUNTRIES],
    queryFn: getCountries,
  });

  const handleUpdateUserInfo = async (e: FormEvent) => {
    e.preventDefault();

    user.email = email;
    user.username = username;
    user.birthday = birthday;
    user.country = country;

    console.log(country);

    const { roles, ...newUser } = user;

    await mutation.mutate(newUser);
    console.log("new user", newUser);
  };

  return (
    <div className="p-5">
      {!mutation.isLoading && showAlert && (
        <SuccessAlert title="Datos actualizados">
          <p>Tus datos han sido actualizados exitosamente.</p>
        </SuccessAlert>
      )}

      <form onSubmit={(e) => handleUpdateUserInfo(e)} className="mt-5 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
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
              onChange={(event) => setCountry(event.target.value)}
              className="form-input px-4 py-3 focus:border-morazul rounded-lg"
              value={country}
            >
              {!loadingCountries &&
                countries?.map((country: any) => {
                  return (
                    <option key={country.name} value={country.name}>
                      {country.translations.es}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>

        <div className="flex justify-center w-full mt-5">
          <button
            disabled={mutation.isLoading}
            className="ease-linear transition-all duration-150 rounded-lg w-full md:w-1/2 font-bold text-lg bg-morazul text-white p-3 pl-4 pr-4 hover:bg-secondary hover:text-black"
          >
            {mutation.isLoading ? (
              <LoadingSpinner />
            ) : (
              <div> Actualizar Datos</div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default GeneralInfoForm;
