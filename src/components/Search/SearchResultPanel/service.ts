import { SearchResultProps } from "./SearchResultPanel";
import {
  MOCK_SEARCH_RESULT,
  MOCK_SEARCH_RESULT_BLANK,
} from "./searchResultsStubs";

export const getSearchResults = async (criteria: string): Promise<any> => {
  //httpPostRequest<LoginResponse>(LOGIN_URL, filters);

  console.log(criteria);
  if (criteria !== "") {
    console.log("filtrando");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_SEARCH_RESULT);
      }, 1000);
    });
  }
  return MOCK_SEARCH_RESULT_BLANK;
};
