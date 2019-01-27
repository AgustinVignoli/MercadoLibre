export const mapCurrencyId = (id) => {
  const currencyMap = {
    ARS: '$',
    USD: 'US $',
    BRL: 'BR $',
    UYU: 'UY $',
    EUR: '€',
  };

  return currencyMap[id];
};
