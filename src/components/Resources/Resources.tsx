import { useLocation } from "react-router-dom";
import { SearchResults } from "../Search/SearchResultPanel/interfaces";

function Resources() {
  const location = useLocation();
  let results = location.state as SearchResults;

  console.log(results);
  return <div>Resources</div>;
}

export default Resources;
