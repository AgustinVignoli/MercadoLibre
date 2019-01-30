import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ListProductInfo from './listProductInfo';
import ProductListThumbnail from './productListThumbnail';

function SearchResultsList({ results }) {
  const items = results.map(({
    thumbnail, title, price, currency_id: currencyId, address, id, shipping,
  }) => (
    <article className="product" key={`product-${id}`}>
      <figure className="product__image">
        <ProductListThumbnail props={{ id, title, thumbnail }} />
      </figure>
      <div className="product-info">
        <ListProductInfo
          props={{
            title,
            price,
            currencyId,
            address,
            id,
            shipping,
          }}
        />
      </div>
    </article>
  ));

  return (
    <ReactCSSTransitionGroup
      transitionName="animation"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      {items}
    </ReactCSSTransitionGroup>
  );
}

SearchResultsList.propTypes = { results: PropTypes.array };

export default SearchResultsList;
