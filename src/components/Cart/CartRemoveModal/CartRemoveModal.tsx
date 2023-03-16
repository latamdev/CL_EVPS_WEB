import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useCart } from "react-use-cart";

interface CartRemoveModalProps {
  show: boolean;
  setShowModal: (value: boolean) => void;
  item: any;
}

const CartRemoveModal: React.FC<CartRemoveModalProps> = (props) => {
  const { setShowModal, item, show } = props;
  const { removeItem } = useCart();

  const handleRemoveItem = () => {
    removeItem(item.id);
    setShowModal(false);
  };

  return (
    <>
      {show ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="modal-header"></div>
                <div className="modal-body flex flex-row justify-center space-x-3 items-center">
                  <div className="h-12 w-12 flex  bg-red-100 rounded-full">
                    <FaExclamationTriangle className="text-red-800 text-2xl  mx-auto self-center" />
                  </div>
                  <div>
                    Quitar <b>{item.title ? item.title : item.name}</b> del
                    carrito?
                  </div>
                </div>
                <div className="modal-footer flex flex-row space-x-3 justify-end mt-5">
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-md bg-white border-black border-2 rounded-lg p-2 w-24"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => handleRemoveItem()}
                    className="text-md bg-danger text-white font-bold border-2 border-red-200 rounded-lg p-2 w-24"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CartRemoveModal;
