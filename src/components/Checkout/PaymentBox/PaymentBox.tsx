import React from "react";
import { useCart } from "react-use-cart";
import { formatCurrencyToCLP } from "../../Resources/ResourceDetail/utils";
import logoFlow from "../../../assets/images/logo-flow.svg";

const PaymentBox: React.FC = () => {
  const { cartTotal } = useCart();

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-xl">Total:</h1>
      <h1 className="text-3xl font-bold">{formatCurrencyToCLP(cartTotal)}</h1>
      <button className="bg-morazul hover:bg-customYellow hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 text-white text-xl font-bold rounded-xl w-1/2">
        Pagar
      </button>

      <div className="flex flex-row w-1/2 space-x-5 items-center">
        <h1 className="text-md font-bold">Paga usando:</h1>
        <img className="w-1/2" src={logoFlow} alt="flow" />
      </div>
    </div>
  );
};

export default PaymentBox;
