import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { getResourceById } from "../Resources/ResourceDetail/service";

function Breadcrumbs() {
  const GetResourceBreadcrumb = ({ match }: any) => {
    const { data } = useQuery(["GET_RESOURCE_DATA"], () =>
      getResourceById(match.params.id)
    );

    console.log(data);

    return <span>{data?.title}</span>;
  };

  const routes = [
    { path: "/platform", breadcrumb: "Inicio" },
    { path: "/platform/videos", breadcrumb: "Videos" },
    { path: "/platform/resources", breadcrumb: "Recursos" },
    { path: "/platform/resources/:id", breadcrumb: GetResourceBreadcrumb },
    { path: "/platform/messages", breadcrumb: "Mensajes" },
    { path: "/platform/configuration", breadcrumb: "Configuración" },
    { path: "/platform/configuration/edit", breadcrumb: "Editar Usuario" },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();
  console.log(breadcrumbs);

  return (
    <nav className="pl-2 gap-3 flex flex-row last:af'ter:content-[''] w-full  font-light bg-primary">
      {breadcrumbs
        .filter(({ match }) => match.pathname !== "/")
        .map(({ match, breadcrumb }) => (
          <Link
            key={match.pathname}
            to={match.pathname}
            className={
              match.pathname === location.pathname
                ? "breadcrumb-active  font-semibold text-white "
                : "after:content-['>'] after:font-bold after:relative after:left-1  text-white hover:border-b-white border-b-2 border-b-transparent hover:border-b-2 hover:font-semibold "
            }
          >
            {breadcrumb}
          </Link>
        ))}
    </nav>
  );
}

export default Breadcrumbs;
