import { createActions } from 'redux-actions';
import {
  loadProductDetail as loadProductDetailSvc,
  loadResults as loadResultsSvc,
  loadProductDescription as loadProductDescriptionSvc,
} from '../model/services/searchServices';
import { LOAD_PRODUCT_DETAIL, LOAD_RESULTS, LOAD_PRODUCT_DESCRIPTION } from '../constants';

export const {
  loadProductDetail,
  loadResults,
  loadProductDescription,
} = createActions(LOAD_PRODUCT_DETAIL, LOAD_RESULTS, LOAD_PRODUCT_DESCRIPTION);

export function loadSearchResults(search) {
  return dispatch => (
    dispatch(loadResults({ promise: loadResultsSvc(search) }))
  );
}

export function loadSearchProductDetail(id) {
  return dispatch => (
    dispatch(loadProductDetail({ promise: loadProductDetailSvc(id) })).then(() => (
      dispatch(loadProductDescription({ promise: loadProductDescriptionSvc(id) }))
    ))
  );
}
