import { createActions } from 'redux-actions';
import {
  loadProductDetail as loadProductDetailSvc,
  loadResults as loadResultsSvc,
} from '../model/services/searchServices';
import { LOAD_PRODUCT_DETAIL, LOAD_RESULTS } from '../constants';

export const {
  loadProductDetail,
  loadResults,
} = createActions(LOAD_PRODUCT_DETAIL, LOAD_RESULTS);

export function loadSearchResults(search) {
  return dispatch => (
    dispatch(loadResults({ promise: loadResultsSvc(search) }))
  );
}

export function loadSearchProductDetail(id) {
  return dispatch => (
    dispatch(loadProductDetail({ promise: loadProductDetailSvc(id) }))
  );
}
