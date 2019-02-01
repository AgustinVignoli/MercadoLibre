import React from 'react';
import { formatProductPrice } from '../../../model/formatters/priceFormatter';

describe('Price formatter test', () => {
  it('should format price 125.25', () => {
    const price1 = 125.25;
    const formattedPrice1 = formatProductPrice(price1);

    expect(formattedPrice1).toEqual(
      <span>
        {125}
        <sup>{25}</sup>
      </span>,
    );
  });

  it('should format price 200', () => {
    const price2 = 200;
    const formattedPrice2 = formatProductPrice(price2);

    expect(formattedPrice2).toEqual(
      <span>
        {200}
        {false}
      </span>,
    );
  });

  it('should return empty string as price is not a number', () => {
    const price3 = 'abc';
    const formattedPrice3 = formatProductPrice(price3);

    expect(formattedPrice3).toEqual('');

    const price4 = null;
    const formattedPrice4 = formatProductPrice(price4);

    expect(formattedPrice4).toEqual('');

    const price5 = undefined;
    const formattedPrice5 = formatProductPrice(price5);

    expect(formattedPrice5).toEqual('');
  });
});
