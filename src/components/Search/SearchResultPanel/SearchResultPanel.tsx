import { SearchResults } from "./interfaces";
import logo from "../../../assets/images/plurality_logo.png";
import SearchResultsSkeleton from "./SearchResultsSkeleton";
import { Link } from "react-router-dom";

export interface SearchResultProps {
  resultsArray: SearchResults;
  isLoading: boolean;
  isError: boolean;
}

function SearchResultPanel(props: SearchResultProps) {
  console.log(props);

  if (props.isLoading) {
    return <SearchResultsSkeleton />;
  }

  if (props.isError) {
    return <div>Algo salió mal</div>;
  }

  return props.resultsArray.results.length > 0 ? (
    <div className="w-1/2 h-0 overflow-visible">
      <div className="bg-gray-100  border border-gray-300 border-t-0">
        {props.resultsArray.results.map((result: any) => {
          return (
            <div key={result.resourceType}>
              <div className="flex flex-col">
                <div className="font-bold p-3  border-b-2">
                  {result.resourceType}
                </div>
                {result.resourceList.map((resource: any) => {
                  return (
                    <div
                      key={resource.id}
                      onClick={() => {
                        console.log("click");
                      }}
                      className="p-3 flex space-x-6 align-middle content-center items-center hover:cursor-pointer hover:bg-gray-50"
                    >
                      <img
                        src={resource.poster}
                        alt="resource_img"
                        className="h-12 w-12"
                      />
                      <div className="flex flex-col">
                        <div className="font-bold">{resource.title}</div>
                        <div className="font-light">{resource.teacher}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex justify-center p-4">
          <Link to={""} className="text-xl text-gray-600 font-semibold">
            Ver todos los resultados
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default SearchResultPanel;
