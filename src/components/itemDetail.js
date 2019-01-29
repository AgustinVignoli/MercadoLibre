import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import ContentZoom from 'react-content-zoom';
import { loadSearchProductDetail } from '../actions/searchActions';
import SearchBar from './searchBar';
import { mapCurrencyId, mapProductCondition } from '../model/mappers/commonMappers';
import { formatProductPrice } from '../model/formatters/priceFormatter';

class ItemDetail extends Component {
  componentDidMount() {
    const {
      match: { params: { id } },
      onLoadProductDetail,
    } = this.props;

    if (!isEmpty(id)) {
      onLoadProductDetail(id);
    }
  }

  render() {
    const { isLoaded, productDescription, productDetail } = this.props;
    const {
      pictures, title, condition, sold_quantity: soldQuantity, base_price: price, currency_id: currency,
    } = productDetail || {};
    const { plain_text: description } = productDescription || {};
    const showDetail = isLoaded && productDetail && productDescription;
    const mainImage = pictures && pictures[0].secure_url;

    return (
      <Fragment>
        <SearchBar {...this.props} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 product-detail">
              {showDetail && (
                <div className="row">
                  <div className="col-xs-12 col-sm-8 product-detail__picture">
                    <ContentZoom zoomPercent={200} largeImageUrl={mainImage} imageUrl={mainImage} contentHeight={500} contentWidth={500} />
                    <div className="product-detail__description">
                      <h2>Descripci&oacute;n del producto</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <p className="product-detail__data">
                      {mapProductCondition(condition)}
                      {Boolean(soldQuantity) && ` - ${soldQuantity} vendidos`}
                    </p>
                    <h4 className="product-detail__title">{title}</h4>
                    <h2 className="product-detail__price">
                      {mapCurrencyId(currency)} {formatProductPrice(price)}
                    </h2>
                    <button type="button" className="btn-comprar">
                      Comprar
                    </button>
                  </div>
                </div>
              )}
              {!showDetail && 'Cargando...'}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ItemDetail.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { productDetailReducer: { productDetail, productDescription, isLoaded, errors } } = state;

  return {
    productDetail: productDetail || null,
    productDescription: productDescription || null,
    isLoaded: isLoaded || false,
    errors,
  };
};

const mapDispatchToProps = dispatch => ({
  onLoadProductDetail(id) {
    dispatch(loadSearchProductDetail(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemDetail);
