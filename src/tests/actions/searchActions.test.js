import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import searchReducer from '../../reducers/searchReducer';
import productDetailReducer from '../../reducers/productDetailReducer';

import {
  loadProductDetail as loadProductDetailSvc,
  loadResults as loadResultsSvc,
  loadProductDescription as loadProductDescriptionSvc,
} from '../../model/services/searchServices';

import {
  loadSearchResults,
  loadSearchProductDetail,
} from '../../actions/searchActions';

jest.mock('../../model/services/searchServices');

describe('Mercado Libre action test', () => {
  let store;

  beforeEach(() => {
    jest.resetAllMocks();
    store = createStore(combineReducers({ searchReducer, productDetailReducer }), compose(applyMiddleware(thunk, promiseMiddleware())));
  });

  it('dispatch LOAD_RESULTS_FULFILLED action on successfull fetch', async () => {
    loadResultsSvc.mockReturnValueOnce(Promise.resolve({ data: { results: [], filters: [] } }));

    const result = await store.dispatch(loadSearchResults());
    expect(result.action.type).toEqual('LOAD_RESULTS_FULFILLED');
    expect(result.action.payload).toEqual({ data: { results: [], filters: [] } });
  });

  it('dispatch LOAD_PRODUCT_DETAIL_FULFILLED action on successfull fetch', async () => {
    loadProductDetailSvc.mockReturnValueOnce(Promise.resolve({ data: {} }));
    loadProductDescriptionSvc.mockReturnValueOnce(Promise.resolve({ data: {} }));

    const result = await store.dispatch(loadSearchProductDetail());
    expect(result.action.type).toEqual('LOAD_PRODUCT_DESCRIPTION_FULFILLED');
    expect(result.action.payload).toEqual({ data: {} });
  });
});
