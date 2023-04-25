import React, { useContext, useState } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { UserContext } from "../../Root";
import { Tooltip } from "../Tooltip/Tooltip";
import { IMG_USER_URL } from "./constants";
import UpdateAvatarModal from "./UpdateAvatarModal/UpdateAvatarModal";
import "./UserConfiguration.css";

const UserConfiguration: React.FC = () => {
  const { currentUser: user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useContext(UserContext);

  return (
    <div className="w-full h-full">
      <div className="magicpattern text-white p-10">
        <div className="rounded flex flex-col items-center justify-center">
          <div className="flex w-full justify-end">
            <Link
              to={"/platform/configuration/edit"}
              className="bg-info p-2 rounded-xl shadow-sm text-white font-bold flex items-center gap-2 hover:cursor-pointer hover:bg-secondary transit hover:text-morazul ease-linear transition-all duration-150"
            >
              <FaPen />
              Editar
            </Link>
          </div>

          <img
            src={`${IMG_USER_URL}${currentUser.avatar}`}
            alt="user_profile_img"
            className="rounded-full h-60 w-60 bg-cover border absolute"
          />
          <Tooltip message="Editar Avatar">
            <button
              onClick={() => setShowModal(true)}
              className="bg-info p-2 text-white text-sm font-bold rounded-full ease-linear transition-full duration-150 hover:cursor-pointer hover:text-lg relative left-28 top-16"
            >
              <FaPen />
            </button>
          </Tooltip>

          <div className="mt-72">
            <h1 className="text-2xl">
              {user.first_name + " " + user.last_name}
            </h1>
            <h1 className="text-lg text-center mt-3 font-bold bg-info text-white rounded-full p-2">
              {user.isAdmin ? "Profesor" : "Alumno"}
            </h1>
          </div>
        </div>
      </div>
      <div className="px-2 md:px-10 py-10 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border shadow-lg rounded-lg p-2 md:p-10  h-fit flex flex-col items-center space-y-4">
            <h1 className="text-lg text-center md:text-3xl text-morazul">
              Videos Comprados
            </h1>
            <span className="text-2xl font-bold">2</span>
          </div>
          <div className="bg-white border shadow-lg rounded-lg p-2 md:p-10  h-fit flex flex-col items-center space-y-4">
            <h1 className="text-lg text-center md:text-3xl text-morazul">
              Ebooks Comprados
            </h1>
            <span className="text-2xl font-bold">5</span>
          </div>
        </div>

        <div className="bg-white border shadow-lg rounded-lg p-5 md:p-10 w-full h-fit flex flex-col space-y-4">
          <h1 className="text-3xl text-morazul">Tus preguntas</h1>
          <ul className="flex flex-col space-y-5">
            <li>
              <p className="border rounded-2xl p-3 flex flex-col gap-2">
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
              <p className="border  rounded-2xl p-3 flex flex-col gap-2">
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
              <p className="border rounded-2xl p-3 flex flex-col gap-2">
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

      <UpdateAvatarModal show={showModal} setShow={setShowModal} />
    </div>
  );
};

export default UserConfiguration;
