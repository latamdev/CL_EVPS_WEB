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
    <div className="flex-col w-full bg-white border shadow-lg rounded-lg p-10 h-fit">
      {parent !== "Dashboard" ? (
        <TopNavbar pathName={"Recursos"} />
      ) : (
        <p className="font-face-bb text-2xl">Tus Recursos</p>
      )}
      <div className="flex flex-col">
        <div className="flex items-center space-x-10 border-y border-gray-200">
          {filters.map((filter) => {
            return (
              <button
                onClick={() => {
                  setTabSelected(filter.value);
                  setResourceType(filter.value);
                }}
                className="flex gap-x-2 items-center py-5  text-gray-500 hover:text-morazul relative group"
              >
                <span className="font-medium"> {filter.name} </span>

                {tabSelected === filter.value ? (
                  <span className="absolute w-full h-1 bg-customYellow rounded bottom-0 scale-x-100 group-hover:scale-x-100 transition-transform ease-in-out" />
                ) : (
                  <span className="absolute w-full h-1 bg-customYellow rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
                )}
              </button>
            );
          })}
        </div>

        <table className="border-b border-gray-200 flex-row">
          <thead></thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceTable;
