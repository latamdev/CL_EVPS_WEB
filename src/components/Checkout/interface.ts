export interface Checkout {
  items: Array<Item>;
  userId: string;
  userEmail: string;
  totalPrice: number;
  paymentPlatform: string;
  subject: string;
  urlConfirmation: string;
  urlResult: string;
  commerceOrder: string;
}

export interface CheckoutResponse {
  flowOrder: number;
  token: string;
  url: string;
  urlToPayment: string;
}

export interface ConfirmPaymentResponse {
  commercerder: string;
  items: Array<Item>;
  payer: string;
  paymentData: PaymentData;
  quantity: number;
  status: number;
  totalAndTaxPrice: number;
}

export interface Item {
  id: string;
  name: string;
  price: number;
}

interface PaymentData {
  amount: string;
  balance: number;
  conversionDate: string;
  conversionRate: string;
  currency: string;
  date: string;
  fee: string;
  taxes: number;
  transferDate: string;
}
