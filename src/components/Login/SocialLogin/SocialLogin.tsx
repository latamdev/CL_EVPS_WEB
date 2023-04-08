import { Link } from "react-router-dom";
import facebook from "../../../assets/images/facebook.svg";
import google from "../../../assets/images/google.svg";

function SocialLogin() {
  return (
    <div className="container text-center ">
      <h1 className="font-medium">También puedes ingresar con:</h1>
      <div className="mt-5 flex flex-column space-x-10 justify-center items-center">
        <Link to={"/"}>
          <img alt="facebook" src={facebook} className="h-10" />
        </Link>
        <Link to={"/"}>
          <img alt="google" src={google} className="h-10 " />
        </Link>
      </div>
    </div>
  );
}

export default SocialLogin;
