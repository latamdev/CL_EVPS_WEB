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
      ["teacher"]: data.teacher,
      ["image"]: data.image,
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
              ? `text-yellow-500 w-fit h-fit hover:cursor-pointer hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600`
              : `rounded-xl bg-red-600 text-white font-bold w-1/2 lg:text-xl h-14 hover:bg-red-500`
          }
        >
          {asLink ? "Eliminar" : "Quitar del carro"}
        </button>
      ) : (
        <button
          onClick={() => handleAddToCart()}
          className="rounded-xl bg-morazul text-white font-bold w-1/2 lg:text-xl h-14 hover:bg-yellow-400 hover:text-black"
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
