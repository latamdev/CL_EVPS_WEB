export interface SearchResults {
  results: Array<SearchResult>;
}

interface SearchResult {
  resourceType: string;
  resourceList: Array<any>;
}
