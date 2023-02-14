import React, { useState } from "react";
import { Resource } from "../../Resources/ResourceDetail/interfaces";
import { useCart } from "react-use-cart";
import { formatCurrencyToCLP } from "../../Resources/ResourceDetail/utils";
import CartModal from "../CartModal/CartModal";

interface CartButtonProps {
  item: Resource;
}

const CartButtonAdd: React.FC<CartButtonProps> = (props) => {
  const { item: data } = props;
  const { addItem, inCart, removeItem } = useCart();
  const [showModal, setshowModal] = useState<boolean>();

  const handleAddToCart = () => {
    addItem({
      id: data.id as string,
      name: data.title,
      price: data.price as number,
      quantity: 1,
      ["techer"]: data.teacher,
      ["image"]: data.image,
    });
    setshowModal(true);
  };

  const handleRemoveFromCart = () => {
    removeItem(data.id);
  };

  return (
    <>
      {inCart(data.id as string) ? (
        <button
          onClick={() => handleRemoveFromCart()}
          className="rounded-xl bg-red-600 text-white font-bold w-1/2 lg:text-xl h-14 hover:bg-red-500"
        >
          Quitar del carro
        </button>
      ) : (
        <button
          onClick={() => handleAddToCart()}
          className="rounded-xl bg-blue-900 text-white font-bold w-1/2 lg:text-xl h-14 hover:bg-blue-800"
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
    </>
  );
};

export default CartButtonAdd;
