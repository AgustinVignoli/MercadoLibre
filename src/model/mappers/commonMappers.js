export const mapCurrencyId = (id) => {
  const currencyMap = {
    ARS: '$',
    USD: 'US $',
    BRL: 'BR $',
    UYU: 'UY $',
    EUR: '€',
  };

  return currencyMap[id] || '$';
};

export const mapProductCondition = (condition) => {
  const conditionsMap = {
    used: 'Usado',
    new: 'Nuevo',
  };

  return conditionsMap[condition] || '';
};
