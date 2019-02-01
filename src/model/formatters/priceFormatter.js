import React from 'react';

export const formatProductPrice = (price) => {
  if (/^\d+$/.test(price) || /^\d+\.\d+$/.test(price)) {
    const priceDecimalPart = (price - Math.floor(price)).toFixed(2) * 100;
    return (
      <span>
        {Math.floor(price)}
        {priceDecimalPart !== 0 && <sup>{priceDecimalPart}</sup>}
      </span>
    );
  }
  return '';
};
