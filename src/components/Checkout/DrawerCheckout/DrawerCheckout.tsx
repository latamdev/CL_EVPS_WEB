import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import CartButtonAdd from "../../Cart/CartButtonAdd/CartButtonAdd";
import { formatCurrencyToCLP } from "../../Resources/ResourceDetail/utils";
import ResourceImage from "../../Resources/ResourceImage/ResourceImage";

interface DrawerCheckoutProps {
  toggleDrawer: () => void;
}

const DrawerCheckout: React.FC<DrawerCheckoutProps> = (props) => {
  const { toggleDrawer } = props;
  const { items, cartTotal, isEmpty } = useCart();
  const navigate = useNavigate();

  const handleCheckoutAction = () => {
    navigate("/platform/checkout");
    toggleDrawer();
  };

  return (
    <div>
      <div
        className="mt-2 flex flex-row justify-end px-5 hover:cursor-pointer"
        onClick={toggleDrawer}
      >
        <span className="text-xl font-bold self-end">X</span>
      </div>
      {!isEmpty ? (
        <div className="px-5 py-5 flex flex-col">
          <h1 className="text-lg md:text-2xl font-face-bb">Tus selecciones</h1>
          <div className="mt-5">
            {items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="border-b border-b-primary flex flex-row gap-5 p-2"
                >
                  <ResourceImage img={item.image} className="w-16 rounded" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm">{item.name}</span>
                    <span> {formatCurrencyToCLP(item.price)}</span>
                    <CartButtonAdd item={item as any} asLink={true} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            <span className="font-bold">
              Total: {formatCurrencyToCLP(cartTotal)}
            </span>
          </div>

          <div className="self-center mt-5">
            <button
              className="p-2 bg-primary text-white rounded-xl md:hover:bg-secondary font-semibold md:hover:text-black ease-linear transition-all duration-150"
              onClick={() => handleCheckoutAction()}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center h-screen px-5 py-5">
          <span className="font-bold">
            Todavía no has agregado items a tu carro
          </span>
        </div>
      )}
    </div>
  );
};

export default DrawerCheckout;
