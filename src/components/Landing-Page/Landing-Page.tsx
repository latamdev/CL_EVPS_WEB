import { Link } from "react-router-dom";
import "./LandingPage.css";
import students from "../../assets/images/students.png";
import user_dashboard from "../../assets/images/user_dashboard.png";
import VerticalTabs from "./VerticalTabs/VerticalTabs";
import { useState } from "react";
import Quote from "./Quote/Quote";
import { TabData } from "./VerticalTabs/Interfaces";
import { TABS_DATA } from "./VerticalTabs/TabsStubs";

function LandingPage() {
  const [tabImage, setTabImage] = useState(user_dashboard);

  const printDownArrow = () => {
    return (
      <div className="arrow-down">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    );
  };

  return (
    <div className="py-5">
      <div className="container mx-auto md:mt-20">
        <div className="flex pt-10 h-[32rem] text-center">
          <div className="container p-10">
            <h1 className="text-4xl md:text-8xl font-light">
              <span className="font-bold text-blue-800">Comienza</span> ahora{" "}
              <br></br>a mejorar tu{" "}
              <span className="underline decoration-dashed decoration-blue-800">
                futuro
              </span>
            </h1>
            <div className="mt-10 md:mx-auto break-normal md:w-4/6">
              <b>Plurality</b> es la plataforma de videos, e-books y recursos de
              idiomas que necesitas para mejorar tu nivel, lo mejor de todo es
              que se adapta completamente a ti, solo paga por el recurso que
              necesites y nada mas!
            </div>
            <div className="mt-10">
              <Link
                to={"/create-account"}
                className="rounded-full font-bold bg-indigo-800 text-white p-2 pl-4 pr-4 hover:bg-indigo-700"
              >
                Comienza Ahora
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-bl from-indigo-950 to-indigo-500 pb-10">
        {printDownArrow()}

        <div className="container mx-auto mb-auto max-h-fit">
          <div className="columns-2 flex-col flex md:flex-row text-white">
            <div className="container">
              {TABS_DATA.map((data: TabData) => (
                <VerticalTabs
                  changeImage={setTabImage}
                  data={data}
                  active={tabImage === data.image}
                />
              ))}
            </div>
            <div className="container px-5 md:px-0 mt-5 md:mt-0">
              <img
                src={tabImage}
                alt="tab"
                className="rounded-md shadow-lg drop-shadow-2xl "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto mb-auto">
          <div className="md:columns-2 flex flex-col md:flex-row pt-10 ">
            <div className="container p-10">
              <img src={students} alt="students" />
            </div>
            <div className="container p-10">
              <h1 className="text-3xl font-semibold underline decoration-sky-600">
                Paula Rojas
              </h1>
              <p className="font-normal mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                maiores. Placeat quo voluptas, deleniti porro aut omnis ipsa
                quae a similique quas ipsam recusandae error et doloribus
                officia. Quisquam, maiores. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequatur laudantium cumque
                eaque officia, libero, nam fuga dignissimos sit repellendus
                porro maxime dolorem fugit asperiores impedit eos sint expedita,
                assumenda debitis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-bl from-indigo-950 to-indigo-500 pb-10">
        {printDownArrow()}

        <div className="container mx-auto mb-auto">
          <div className="flex">
            <div className="container flex flex-col space-y-5 text-center text-white">
              <h1 className="font-light text-3xl md:text-5xl ">
                Comienza ahora
              </h1>
              <Link
                to={"/create-account"}
                className="rounded-full p mx-auto w-fit font-bold bg-gray-200  text-gray-900 p-2 pl-5 pr-5 hover:bg-gray-100"
              >
                Me anoto!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto mb-auto">
          <div className="flex flex-col space-y-5">
            <div className="container p-10 text-center">
              <h1 className="font-light text-2xl md:text-5xl">
                Nuestros estudiantes estan alcanzando sus <b>metas</b>
              </h1>
              <p className="mt-5">
                Únete a <em>ellas y ellos</em> y mejora tu futuro hoy.
              </p>
            </div>
            <div className="container px-5 md:pr-10 md:pb-20 md:pl-10 flex flex-col md:flex-row gap-5">
              {[0, 1, 2].map((element) => (
                <Quote key={element} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
