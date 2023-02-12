import { httpGetRequest } from "../../../http/Client";
import { SearchResults } from "./interfaces";
import { MOCK_SEARCH_RESULT_BLANK } from "./searchResultsStubs";
const SEARCH_URL = "/resource/search/by-title";

export const getSearchResults = async (
  title: string
): Promise<SearchResults> => {
  if (title !== "") {
    const result = await httpGetRequest(SEARCH_URL, { title: title });
    let resultsQuery = { results: result } as SearchResults;
    return resultsQuery;
  }

  return MOCK_SEARCH_RESULT_BLANK;
};
