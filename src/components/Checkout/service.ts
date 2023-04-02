import { httpGetRequest, httpPostRequest } from "../../http/PaymentClient";
import {
  Checkout,
  CheckoutResponse,
  ConfirmPaymentResponse,
} from "./interface";

const PAYMENT_URL = "/payment/generate-payment";
const CHECK_URL = "/payment/confirm-payment";

export const doPayment = (
  paymentPayload: Checkout
): Promise<CheckoutResponse> => {
  return httpPostRequest(PAYMENT_URL, paymentPayload);
};

export const doCheck = async (
  paymentToken: string
): Promise<ConfirmPaymentResponse> => {
  return (await httpGetRequest(CHECK_URL, { token: paymentToken })) ?? [];
};
