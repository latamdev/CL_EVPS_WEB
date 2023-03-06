import { useEffect, useState } from "react";

const WelcomeMessage = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    //TODO: obtener name de context de sesion
    setName("Josh");
  }, []);

  return (
    <div>
      <p className="font-face-bb text-6xl">Hello {name} 👋</p>
      <p className="font-face-bb">It's good to see you again.</p>
    </div>
  );
};

export default WelcomeMessage;
