import { Link } from "react-router-dom";
import "./LandingFooter.css";

function LandingFooter() {
  const renderWaves = () => {
    return (
      <div className="wave-footer">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    );
  };

  return (
    <>
      {renderWaves()}

      <div className="bg-blue-900 text-white ">
        <div className="container mx-auto flex justify-between p-5">
          <div className="flex flex-col space-y-2">
            <Link to={"/about"}> Quienes somos</Link>

            <Link to={"/legal-terms"}>Términos Legales</Link>

            <Link to={"/contact"}>Contacto</Link>
          </div>
          <div>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingFooter;
