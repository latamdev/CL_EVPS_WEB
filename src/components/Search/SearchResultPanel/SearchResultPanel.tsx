import { SearchResults } from "./interfaces";
import SearchResultsSkeleton from "./SearchResultsSkeleton";
import { useNavigate } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { getSearchResults } from "./service";
import ResourceImage from "../../Resources/ResourceImage/ResourceImage";
import { IMG_RESOURCE_URL } from "../constants";

export interface SearchResultProps {
  resultsArray: SearchResults;
  isLoading: boolean;
  isError: boolean;
  searchTerm: string;
}

function SearchResultPanel(props: SearchResultProps) {
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const handleOnResourceClick = (result: any) => {
    navigate(`/platform/resources/${result.id}`);
  };

  const handleQueryForAllResults = () => {
    queryClient
      .fetchQuery({
        queryKey: ["searchResultsKey"],
        queryFn: () => getSearchResults(props.searchTerm, 0),
      })
      .then((results) => navigate(`/platform/resources`, { state: results }));
  };

  if (props.isLoading) {
    return <SearchResultsSkeleton />;
  }

  if (props.isError) {
    return <div>Algo salió mal</div>;
  }

  return props.resultsArray.results.length > 0 ? (
    <div className="w-[20rem] sm:w-[30rem] lg:w-[20rem] xl:w-[30rem] 2xl:w-[50rem] absolute z-10 top-[4.5rem]">
      <div className="bg-white text-black  border border-black border-t-0 rounded-b-lg">
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
                      onClick={() => handleOnResourceClick(resource)}
                      className="p-3 flex space-x-6 align-middle content-center items-center hover:cursor-pointer hover:bg-danger hover:text-white"
                    >
                      <ResourceImage
                        img={resource.image}
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
        <div
          onClick={() => {
            handleQueryForAllResults();
          }}
          className="flex justify-center p-4 hover:bg-danger text-gray-600  hover:text-white hover:cursor-pointer"
        >
          <h1 className="text-xl font-semibold hover:border-b-2 hover:text-white">
            Ver todos los resultados
          </h1>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default SearchResultPanel;
