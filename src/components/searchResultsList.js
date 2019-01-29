import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { mapCurrencyId } from '../model/mappers/commonMappers';
import { formatProductPrice } from '../model/formatters/priceFormatter';

function SearchResultsList({ results }) {
  return (
    <Fragment>
      {results.map(({
        thumbnail, title, price, currency_id: currencyId, address, id, shipping,
      }) => (
        <div className="product" key={`product-${id}`}>
          <div className="product__image">
            <Link to={`/items/${id}`} tile={title}>
              <img src={thumbnail} alt={title} width="180px" height="180px" />
            </Link>
          </div>
          <div className="product-info">
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
          </div>
        </div>
      ))}
    </Fragment>
  );
}

SearchResultsList.propTypes = { results: PropTypes.array };

export default SearchResultsList;
