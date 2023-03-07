import { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";

const WelcomeMessage = () => {
  const [name, setName] = useState("");

  const { currentUser: user } = useUser();

  useEffect(() => {
    //TODO: obtener name de context de sesion
    setName(user.first_name + " " + user.last_name);
  }, []);

  return (
    <div className="bg-gray-100 p-3 rounded-xl w-full">
      <p className="font-face-bb text-6xl">Hello {name} 👋</p>
      <p className="font-face-bb">Es bueno verte de nuevo.</p>
    </div>
  );
};

export default WelcomeMessage;
