import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ITag, Resource } from "../../Resources/ResourceDetail/interfaces";
import ResourceImage from "../../Resources/ResourceImage/ResourceImage";
import Tag from "../../Tag/Tag";

interface CartModalProps {
  show: boolean;
  setShowModal: (value: boolean) => void;
  item: Resource;
}

const CartModal: React.FC<CartModalProps> = (props) => {
  const { setShowModal, item } = props;
  const navigate = useNavigate();

  const handleCheckoutAction = () => {
    navigate("/platform/checkout");
    setShowModal(false);
  };

  return (
    <>
      {props.show ? (
        <>
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className=" flex flex-col">
                  <div className="flex flex-row w-full space-x-8">
                    <div className="h-12 w-12 flex  bg-green-100 rounded-full">
                      <FaCheckCircle className="text-green-800 text-2xl  mx-auto self-center" />
                    </div>

                    <h4 className="text-lg font-medium text-gray-800 self-center">
                      Has añadido <b>{item.title}</b> al carro
                    </h4>
                  </div>

                  <div className="flex mb-2 ">
                    <div className="w-0 lg:w-1/3"></div>
                    <h1 className="text-2xl text-black w-full lg:w-1/2">
                      Temas relacionados
                    </h1>
                  </div>

                  <div className="flex align-center  flex-col lg:w-fit  lg:flex-row lg:space-x-12 mt-2 text-[15px] leading-relaxed text-gray-500">
                    <ResourceImage
                      img={item.image as string}
                      className="object-cover h-32 w-32 border-2 border-gray-400 rounded-xl self-center"
                    />

                    <div className="flex space-x-2 overflow-auto h-max justify-center lg:justify-start ">
                      {item.tags?.length > 0 ? (
                        item.tags?.map((tag: ITag) => {
                          return <Tag key={tag.id} tagEl={tag} />;
                        })
                      ) : (
                        <span className="ml-1">---</span>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 flex justify-center lg:justify-end">
                    <div className="items-center gap-3 mt-3 sm:flex">
                      <button
                        className=" mt-2 p-2.5  text-white bg-primary rounded-md outline-none ring-offset-2 ring-customYellow focus:ring-2"
                        onClick={() => handleCheckoutAction()}
                      >
                        Finalizar Compra
                      </button>
                      <button
                        className=" mt-2 p-2.5  text-gray-800 rounded-md outline-none border ring-offset-2 ring-morazul focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Seguir Revisando
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CartModal;
