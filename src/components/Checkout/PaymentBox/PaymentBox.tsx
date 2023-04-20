import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { formatCurrencyToCLP } from "../../Resources/ResourceDetail/utils";
import logoFlow from "../../../assets/images/logo-flow.svg";
import {
  FLOW_FEES_PERCENTAGE,
  PAYMENT_PLATFORM,
  PAYMENT_SUBJECT,
  URL_CONFIRMATION,
  URL_RESULT,
} from "../constants";
import { UserContext } from "../../../Root";
import { useMutation } from "@tanstack/react-query";
import { doPayment } from "../service";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const PaymentBox: React.FC = () => {
  const { items: cartItems, cartTotal, totalItems } = useCart();
  const { currentUser } = useContext(UserContext);

  const mutation = useMutation({
    mutationKey: ["PAYMENT_QUERY"],
    mutationFn: doPayment,
    onSuccess: (data) => {
      console.log(data);
      window.location.href = data.urlToPayment;
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const doCheckout = () => {
    const payload = {
      items: cartItems.map(({ id, name, price }) => {
        return { id, name, price };
      }),
      userId: currentUser.id,
      userEmail: "evpservice1@gmail.com",
      totalPrice: Math.round(cartTotal * FLOW_FEES_PERCENTAGE),
      paymentPlatform: PAYMENT_PLATFORM,
      subject: PAYMENT_SUBJECT,
      urlConfirmation: URL_CONFIRMATION,
      urlResult: URL_RESULT,
      commerceOrder: Date.now().toString(),
    };

    //console.log(payload);
    mutation.mutate(payload);
  };

  return (
    <>
      {totalItems > 0 ? (
        <div className="flex flex-col space-y-3">
          <h1 className="text-xl">Total:</h1>
          <h1 className="text-3xl font-bold">
            {formatCurrencyToCLP(Math.round(cartTotal * FLOW_FEES_PERCENTAGE))}
          </h1>
          <button
            onClick={doCheckout}
            disabled={mutation.isLoading}
            className="bg-primary disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-wait hover:bg-secondary hover:text-black hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 text-white text-xl font-bold rounded-xl w-1/2 ease-linear transition-all duration-150"
          >
            {mutation.isLoading ? <LoadingSpinner /> : <div>Pagar</div>}
          </button>

          <div className="flex flex-row w-1/2 space-x-5 items-center">
            <h1 className="text-md font-bold">Paga usando:</h1>
            <img className="w-1/2" src={logoFlow} alt="flow" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PaymentBox;
