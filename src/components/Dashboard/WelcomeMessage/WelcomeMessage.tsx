import { useEffect, useState } from "react";

const WelcomeMessage = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    //TODO: obtener name de context de sesion
    setName("Josh");
  }, []);

  return (
    <div className="px-10 py-5 bg-gray-100 rounded-xl w-3/4">
      <p className="font-face-bb text-6xl">Hello {name} 👋</p>
      <p className="font-face-bb">It's good to see you again.</p>
    </div>
  );
};

export default WelcomeMessage;
