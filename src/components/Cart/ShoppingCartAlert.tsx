import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "react-use-cart";
import useScreenSize from "../../hooks/useScreenSize";
import { formatCurrencyToCLP } from "../Resources/ResourceDetail/utils";

interface ShoppingCartAlertProps {
  onClick?: (event: Event) => void;
}

const ShoppingCartAlert: React.FC<ShoppingCartAlertProps> = (props) => {
  const { totalUniqueItems, cartTotal } = useCart();
  const { onClick } = props;
  const isDesktop = useScreenSize();

  return (
    <div className="md:flex md:flex-row md:justify-end">
      <div className="self-center hover:cursor-pointer">
        <FaShoppingCart
          onClick={onClick as any}
          className="self-center bottom-4 left-4 md:bottom-auto md:left-auto text-xl md:text-3xl absolute text-white md:hover:text-secondary"
        />
        {totalUniqueItems > 0 ? (
          <span className="bg-danger text-white text-sm font-bold pl-1 pr-1 rounded-full relative left-4 md:left-7 bottom-3">
            {totalUniqueItems}
          </span>
        ) : (
          <span className="bg-gray-600 text-white text-sm font-bold pl-1 pr-1 rounded-full relative left-4 md:left-7 bottom-3">
            0
          </span>
        )}
      </div>
      {isDesktop && (
        <div className="pl-10 mr-10 self-center">
          <span className="font-bold">Total</span> :{" "}
          {formatCurrencyToCLP(cartTotal)}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartAlert;
