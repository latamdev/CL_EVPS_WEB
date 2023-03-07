import { useLocation } from "react-router-dom";
import { SearchResults } from "../Search/SearchResultPanel/interfaces";
import Videos from "../Videos/Videos";

function Resources() {
  const location = useLocation();
  let results = location.state as SearchResults;

  console.log(results);
  return (
    <div className="px-10 py-10">
      <div className="w-3/4">
        <Videos title={"Recursos"} parent={"Root"} />
      </div>
    </div>
  );
}

export default Resources;
