import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Root";

const WelcomeMessage = () => {
  const { currentUser } = useContext(UserContext);
  const [name, setName] = useState("");
  useEffect(() => {
    //TODO: obtener name de context de sesion
    setName("Josh");
  }, []);

  console.log(currentUser);

  return (
    <div className="px-10 py-5 w-3/4 bg-white border shadow-lg rounded-lg p-10 h-fit">
      <p className="font-face-bb text-6xl">Hola {currentUser.first_name} 👋</p>
      <p className="font-face-bb">Es bueno verte otra vez.</p>
    </div>
  );
};

export default WelcomeMessage;
