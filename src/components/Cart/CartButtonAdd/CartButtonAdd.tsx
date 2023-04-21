import React, { useState } from "react";
import { Resource } from "../../Resources/ResourceDetail/interfaces";
import { useCart } from "react-use-cart";
import { formatCurrencyToCLP } from "../../Resources/ResourceDetail/utils";
import CartModal from "../CartModal/CartModal";
import CartRemoveModal from "../CartRemoveModal/CartRemoveModal";

interface CartButtonProps {
  item: Resource;
  asLink?: boolean;
}

const CartButtonAdd: React.FC<CartButtonProps> = (props) => {
  const { item: data, asLink } = props;
  const { addItem, inCart } = useCart();
  const [showModal, setshowModal] = useState<boolean>();
  const [showRemoveModal, setShowRemoveModal] = useState<boolean>();

  const handleAddToCart = () => {
    addItem({
      id: data.id as string,
      name: data.title,
      price: data.price as number,
      quantity: 1,
      teacher: data.teacher,
      image: data.image,
    });
    setshowModal(true);
  };

  const handleRemoveFromCart = () => {
    setShowRemoveModal(true);
  };

  return (
    <>
      {inCart(data.id as string) ? (
        <button
          onClick={() => handleRemoveFromCart()}
          className={
            asLink
              ? ` bg-danger pl-2 pr-2 rounded font-bold  text-white w-fit h-fit hover:cursor-pointer hover:bg-red-400 ease-linear transition-all duration-150`
              : `rounded-xl bg-danger text-white font-bold w-1/2 lg:text-xl h-14 hover:bg-red-400`
          }
        >
          {asLink ? "Eliminar" : "Quitar del carro"}
        </button>
      ) : (
        <button
          onClick={() => handleAddToCart()}
          className="rounded-xl bg-primary text-white font-bold w-1/2 lg:text-xl h-14 hover:bg-secondary hover:text-black ease-linear transition-all duration-150"
        >
          {data.free
            ? "Gratis"
            : `Comprar ${formatCurrencyToCLP(data.price as number) || 0}`}
        </button>
      )}

      <CartModal
        show={showModal as boolean}
        setShowModal={setshowModal}
        item={data as Resource}
      />

      <CartRemoveModal
        show={showRemoveModal as boolean}
        setShowModal={setShowRemoveModal}
        item={data as Resource}
      />
    </>
  );
};

export default CartButtonAdd;
