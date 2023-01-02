import { Link } from "react-router-dom";
import "./LandingPage.css";
import students from "../../assets/images/students.png";

function LandingPage() {
  return (
    <div className="container mx-auto mb-auto mt-20">
      <div className="columns-2 flex pt-10">
        <div className="container p-10">
          <h1 className="text-7xl text-blue-900">
            <span className="font-bold text-7xl text-blue-900">Comienza </span>
            ahora a mejorar tu futuro.
          </h1>
          <div className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut
            sed iure necessitatibus nihil beatae ad, numquam nobis ipsam
            incidunt repudiandae ducimus et earum qui optio dignissimos maiores
            dolorem. Magnam.
          </div>
          <div className="mt-10">
            <Link
              to={"/create-account"}
              className="rounded-full font-bold bg-blue-800 text-white p-2 pl-4 pr-4 hover:bg-blue-700"
            >
              Comienza Ahora
            </Link>
          </div>
        </div>
        <div className="container p-10 ">
          <img src={students} alt="students" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
