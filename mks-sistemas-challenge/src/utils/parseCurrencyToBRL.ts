const parseCurrencyToBRL = (currency: number) => {
  return currency.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export default parseCurrencyToBRL;
