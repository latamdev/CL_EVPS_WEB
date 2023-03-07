import React from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { IMG_USER_DEFAULT } from "./constants";
import "./UserConfiguration.css";

const UserConfiguration: React.FC = () => {
  const { currentUser: user } = useUser();

  return (
    <div className="bg-white h-screen">
      <div className=" px-10 py-10 divider">
        <h1 className="text-4xl font-face-bb">Perfil</h1>
        <div className="flex flex-col items-center space-y-5 justify-center">
          <img
            src={IMG_USER_DEFAULT}
            alt="user_profile_img"
            className="rounded-full h-60 w-60 bg-cover border"
          />
          <h1 className="text-2xl">{user.first_name + " " + user.last_name}</h1>
          <h1 className="text-lg bg-customYellow text-morazul rounded-full p-2">
            {user.isAdmin ? "Profesor" : "Alumno"}
          </h1>
        </div>
      </div>
      <div className="px-10 py-10 bg-customYellow flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <div className="bg-white shadow-lg rounded-lg p-10 w-1/2 h-fit flex flex-col items-center space-y-4">
            <h1 className="text-3xl text-morazul font-face-bb">
              Videos Comprados
            </h1>
            <span className="text-2xl font-bold">2</span>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-10 w-1/2 h-fit flex flex-col items-center space-y-4">
            <h1 className="text-3xl text-morazul font-face-bb">
              Ebooks Comprados
            </h1>
            <span className="text-2xl font-bold">5</span>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-10 w-full h-fit flex flex-col space-y-4">
          <h1 className="text-3xl text-morazul font-face-bb">Tus preguntas</h1>
          <ul className="flex flex-col space-y-5">
            <li>
              <p className="border border-black rounded-2xl p-3 flex flex-col gap-2">
                <h1>
                  <span className="text-xl font-bold">Video:</span>{" "}
                  <Link to={"#"}>Verb To Be</Link>
                </h1>
                <h1 className="text-xl font-bold">Pregunta: </h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                a, soluta dolore, neque quidem tempore nobis iusto blanditiis
                corrupti modi enim dolorem et nam illum exercitationem suscipit
                ipsum aliquam aliquid.
              </p>
            </li>
            <li>
              <p className="border border-black rounded-2xl p-3 flex flex-col gap-2">
                <h1>
                  <span className="text-xl font-bold">Video:</span>{" "}
                  <Link to={"#"}>Verb To Be</Link>
                </h1>
                <h1 className="text-xl font-bold">Pregunta: </h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                a, soluta dolore, neque quidem tempore nobis iusto blanditiis
                corrupti modi enim dolorem et nam illum exercitationem suscipit
                ipsum aliquam aliquid.
              </p>
            </li>
            <li>
              <p className="border border-black rounded-2xl p-3 flex flex-col gap-2">
                <h1>
                  <span className="text-xl font-bold">Video:</span>{" "}
                  <Link to={"#"}>Verb To Be</Link>
                </h1>
                <h1 className="text-xl font-bold">Pregunta: </h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                a, soluta dolore, neque quidem tempore nobis iusto blanditiis
                corrupti modi enim dolorem et nam illum exercitationem suscipit
                ipsum aliquam aliquid.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white px-10 py-10 divider"></div>
    </div>
  );
};

export default UserConfiguration;
