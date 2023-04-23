import React, { FC, useState } from "react";
import "./Videos.css";
import TopNavbar from "../TopNavbar/TopNavbar";
import ResourceListItem from "./ResourceListItem";

interface ResourcesProps {
  parent: string;
  resourceList?: Array<any> | undefined;
  setResourceType: (type: string) => void;
  resourceType?: string;
}

const ResourceTable: FC<ResourcesProps> = ({
  parent,
  resourceList,
  setResourceType,
  resourceType,
}) => {
  const [tabSelected, setTabSelected] = useState(resourceType);

  const filters =
    parent !== "Dashboard"
      ? [
          { name: "Videos", value: "video" },
          { name: "E-Books", value: "ebook" },
        ]
      : [{ name: "Todos" }, { name: "Favoritos" }];

  return (
    <div className="flex-col w-full bg-white border shadow-lg z-10 rounded-lg p-5 md:p-10 h-fit">
      {parent !== "Dashboard" ? (
        <TopNavbar pathName={"Recursos"} />
      ) : (
        <p className="font-face-bb text-2xl">Tus Recursos</p>
      )}
      <div className="flex flex-col">
        <div className="flex z-auto items-center space-x-10 border-y border-gray-200">
          {filters.map((filter) => {
            return (
              <button
                onClick={() => {
                  setTabSelected(filter.value);
                  setResourceType(filter.value);
                }}
                className="flex gap-x-2 items-center py-5  text-gray-500 hover:text-morazul relative group"
              >
                <span className="font-medium z-0"> {filter.name} </span>

                {tabSelected === filter.value ? (
                  <span className="absolute w-full h-1 bg-customYellow rounded bottom-0 scale-x-100 group-hover:scale-x-100 transition-transform ease-in-out" />
                ) : (
                  <span className="absolute w-full h-1 bg-customYellow rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
                )}
              </button>
            );
          })}
        </div>

        <div className="gap-4 grid grid-cols-1 xl:grids-cols-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 justify-between mt-10">
          {resourceList?.map((resource: any) => {
            return (
              <ResourceListItem
                key={resource.id}
                resourceId={
                  resource.resourceId ? resource.resourceId : resource.id
                }
                parent={parent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourceTable;
