import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "react-use-cart";
import { formatCurrencyToCLP } from "../Resources/ResourceDetail/utils";

function ShoppingCartAlert() {
  const { totalUniqueItems, cartTotal } = useCart();

  return (
    <div className=" w-1/6 flex flex-row justify-end">
      <div className="self-center hover:cursor-pointer">
        <FaShoppingCart className="text-3xl absolute text-gray-800" />
        {totalUniqueItems > 0 ? (
          <span className="bg-red-600 text-white text-sm font-bold pl-1 pr-1 rounded-full relative left-7  bottom-3">
            {totalUniqueItems}
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className="pl-10 mr-10 self-center">
        <span className="font-bold">Total</span> :{" "}
        {formatCurrencyToCLP(cartTotal)}
      </div>
    </div>
  );
}

export default ShoppingCartAlert;
