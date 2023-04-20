import { useQuery } from "@tanstack/react-query";
import { FaHome } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import ErrorAlert from "../../Alerts/ErrorAlert";
import SuccessAlert from "../../Alerts/SuccessAlert";
import SkeletonWrapper from "../../SkeletonWrapper";
import { ConfirmPaymentResponse } from "../interface";
import { doCheck } from "../service";

const CheckPayment = () => {
  const { token } = useParams();
  const { emptyCart } = useCart();

  const { data, isLoading } = useQuery(
    ["CHECK_PAYMENT_QUERY", token],
    () => doCheck(token as string),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data: ConfirmPaymentResponse) => {
        if (data.paymentData.date) {
          emptyCart();
        }
      },
    }
  );

  return (
    <div className="px-10 py-10 w-full">
      <SkeletonWrapper isLoading={isLoading} skeleton={<h1>Cargando</h1>}>
        {data?.status === 2 ? (
          <SuccessAlert title="Transacción Aprobada">
            <p className="flex items-center">
              Felicidades por la compra de tu nuevo material de estudio, puedes
              revisarlos en tu
              <b>
                <Link
                  to={"/platform/"}
                  className="ml-1 flex gap-1 items-center hover:text-primary"
                >
                  <FaHome /> Inicio
                </Link>
              </b>
            </p>
          </SuccessAlert>
        ) : (
          <ErrorAlert title="Transacción Rechazada">
            <p>
              No se pudo comprobar tu pago, intentalo mas tarde, si el problema
              persiste, ponte en contacto con tu entidad <b>financiera</b>
            </p>
          </ErrorAlert>
        )}
      </SkeletonWrapper>
    </div>
  );
};

export default CheckPayment;
