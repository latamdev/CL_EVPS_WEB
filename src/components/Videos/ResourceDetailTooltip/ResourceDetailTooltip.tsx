import React from "react";
import CartButtonAdd from "../../Cart/CartButtonAdd/CartButtonAdd";

const ResourceDetailTooltip: React.FC<any> = ({ item }) => {
  return (
    <div className="w-80 p-2 rounded-xl relative max-h-40 overflow-y-hidden bg-gray-100 shadow-lg -top-40">
      <h1 className="text-xl">{item.title}</h1>
      <div className="flex flex-col">
        <div className="p-3">
          <p className="font-bold">{item.description}</p>
        </div>
        <div className="p-3">
          <CartButtonAdd item={item} />
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailTooltip;
