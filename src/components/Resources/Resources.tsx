import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
//import { useLocation } from "react-router-dom";
//import { SearchResults } from "../Search/SearchResultPanel/interfaces";
import SkeletonWrapper from "../SkeletonWrapper";
import ResourceTable from "../Videos/ResourceTable";
import ResourcesSkeleton from "./ResourcesSkeleton";
import { getAllResources } from "./service";

function Resources() {
  // const location = useLocation();
  const [resourceType, setResourceType] = useState("video");
  /*   let results = location.state !== null ? (location.state as SearchResults) : undefined;
  const [dataList, setDataList] = useState<any>([]); */

  const { data, isLoading } = useQuery(
    ["GET_ALL_RESOURCES", resourceType],
    () => getAllResources(resourceType)
  );

  /*   useEffect(() => {
    if (results) {
      setDataList(
        results.results[0].resourceList.concat(results.results[1].resourceList)
      );
    } else {
      console.log("No resources", data);
      setDataList(data?.items);
    }
  }, [results, data]); */

  console.log(data);

  return (
    <div className="w-full py-10 px-2 md:px-10">
      <SkeletonWrapper isLoading={isLoading} skeleton={<ResourcesSkeleton />}>
        <ResourceTable
          parent="resources"
          resourceList={data?.items}
          setResourceType={setResourceType}
          resourceType={resourceType}
        />
      </SkeletonWrapper>
    </div>
  );
}

export default Resources;
