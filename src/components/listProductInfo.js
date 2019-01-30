import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { mapCurrencyId } from '../model/mappers/commonMappers';
import { formatProductPrice } from '../model/formatters/priceFormatter';

export default function ListProductInfo({
  props: {
    price, title, currencyId, address, id, shipping,
  },
}) {
  return (
    <Fragment>
      <p className="product-info__price">
        <span>
          {mapCurrencyId(currencyId)} {formatProductPrice(price)}
          {shipping.free_shipping && <img src="/img/ic_shipping.png" className="free-shipping" alt="Free shipping" title="Free shipping" />}
        </span>
        <span className="product-info__address">{address.state_name}</span>
      </p>
      <p className="product-info__title">
        <Link to={`/items/${id}`}>{title}</Link>
      </p>
    </Fragment>
  );
}

ListProductInfo.propTypes = { props: PropTypes.object };
