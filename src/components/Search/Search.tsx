import { useQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { useMemo, useState } from "react";
import { SearchResults } from "./SearchResultPanel/interfaces";
import SearchResultPanel from "./SearchResultPanel/SearchResultPanel";
import { getSearchResults } from "./SearchResultPanel/service";
import "./search.css";

const LIMIT_OF_RESULTS = 3;

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleBlurEvent = (e: any) => {
    e.target.value = "";
    setSearchQuery("");
  };

  const debouncedResults = useMemo(() => {
    return debounce(setSearchQuery, 1000);
  }, []);

  const debounceClickOutside = useMemo(() => {
    return debounce(handleBlurEvent, 500);
  }, []);

  const {
    data = { results: [] },
    isLoading,
    isError,
  } = useQuery(["searchResultsKey", searchQuery, LIMIT_OF_RESULTS], () =>
    getSearchResults(searchQuery, LIMIT_OF_RESULTS)
  );

  return (
    <div
      className="w-full lg:flex-3 flex flex-col justify-center items-center p-5"
      style={{ zIndex: 10 }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[20rem] sm:w-[30rem] lg:w-[20rem] xl:w-[30rem] 2xl:w-[50rem] lg:mx-auto"
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-white sr-only dark:text-white"
        >
          Buscar
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-700 dark:text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="query-search"
            name="query-search"
            autoComplete="off"
            className={
              "block w-full p-4 pl-10 text-sm text-gray-900 border-1 border-white bg-primary " +
              (data?.results.length > 0
                ? "rounded-lg rounded-b-none border-b-0"
                : "rounded-lg ") +
              "  focus:ring-gray-300 focus:border-black focus:bg-gray-50 dark:placeholder-gray-500 dark:text-black dark:focus:ring-none dark:focus:border-black"
            }
            onBlur={(e) => debounceClickOutside(e)}
            placeholder="Busca videos, e-books, recursos..."
            onChange={(e) => debouncedResults(e.target.value)}
          />
        </div>
      </form>

      <SearchResultPanel
        searchTerm={searchQuery}
        isLoading={isLoading}
        isError={isError}
        resultsArray={data as SearchResults}
      />
    </div>
  );
}

export default Search;
