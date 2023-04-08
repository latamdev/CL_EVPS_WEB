export const formatCurrencyToCLP = (price: number) => {
  return new Intl.NumberFormat("es-CL", {
    currency: "CLP",
    style: "currency",
  }).format(price);
};
