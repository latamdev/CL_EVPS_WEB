import { useEffect, useState } from "react";
import SkeletonWrapper from "../SkeletonWrapper";
import CheckoutSkeleton from "./CheckoutSkeleton/CheckoutSkeleton";
import { useCart } from "react-use-cart";
import { formatCurrencyToCLP } from "../Resources/ResourceDetail/utils";
import PaymentBox from "./PaymentBox/PaymentBox";
import CartButtonAdd from "../Cart/CartButtonAdd/CartButtonAdd";
import ResourceImage from "../Resources/ResourceImage/ResourceImage";
import ConfirmationModal from "../Cart/ConfirmationModal/ConfirmationModal";
import Recommend from "../Recommend/Recommend";

function Checkout() {
  const { items, emptyCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="px-10 w-full py-10">
      <SkeletonWrapper isLoading={isLoading} skeleton={<CheckoutSkeleton />}>
        <>
          <h1 className="font-bold text-4xl self-center">Checkout</h1>
          <div className="flex">
            <div className="w-1/2">
              <div className="mt-3 border-b-2 pb-2 flex justify-between items-center">
                <p>
                  Tienes <b>{items.length}</b> artículos en el carro
                </p>
                <button
                  onClick={() => setShowEmptyCartModal(true)}
                  disabled={items.length === 0}
                  className="text-danger font-bold disabled:text-gray-500 disabled:border-b-0 w-fit h-fit hover:cursor-pointer ease-in-out transition-all duration-150"
                >
                  Vaciar carrito
                </button>
              </div>

              <div className="mt-10">
                {items.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex justify-between space-x-14 items-center border-b-2 pb-5 mb-5"
                    >
                      <ResourceImage
                        img={item?.image}
                        className="object-cover flex-1 h-28 w-28 border-2 border-gray-400 rounded-xl"
                      />

                      <div className="flex flex-1 flex-col space-y-2">
                        <h1 className="text-xl">{item.name}</h1>
                        <h1 className="text-sm font-light">
                          Profesor: {item.teacher ? item.teacher : "---"}
                        </h1>
                      </div>
                      <div className="flex-1">
                        <CartButtonAdd item={item as any} asLink={true} />
                      </div>
                      <h1 className="text-xl font-bold flex-1 text-morazul">
                        {formatCurrencyToCLP(item.price)}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-1/2 pl-20">
              <PaymentBox />
            </div>
          </div>
        </>
      </SkeletonWrapper>

      <Recommend ids={items.map((item) => item.id)} />

      <ConfirmationModal
        show={showEmptyCartModal}
        setShowModal={setShowEmptyCartModal}
        text="Deseas vaciar el carrito?"
        confirmationAction={emptyCart}
        confirmationButtonText="Vaciar"
      />
    </div>
  );
}

export default Checkout;
