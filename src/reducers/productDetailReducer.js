import { handleActions, combineActions } from 'redux-actions';
import {
  LOAD_PRODUCT_DETAIL_FULFILLED,
  LOAD_PRODUCT_DETAIL_PENDING,
  LOAD_PRODUCT_DETAIL_REJECTED,
  LOAD_PRODUCT_DESCRIPTION_FULFILLED,
  LOAD_PRODUCT_DESCRIPTION_PENDING,
  LOAD_PRODUCT_DESCRIPTION_REJECTED,
} from '../constants';

const productDetailReducer = handleActions(
  {
    [combineActions(LOAD_PRODUCT_DETAIL_PENDING, LOAD_PRODUCT_DESCRIPTION_PENDING)]: state => ({
      ...state,
      isLoaded: false,
    }),
    [combineActions(LOAD_PRODUCT_DETAIL_REJECTED, LOAD_PRODUCT_DESCRIPTION_REJECTED)]: (state, action) => {
      const errors = state.errors ? [...state.errors] : [];

      return {
        ...state,
        errors: [...errors, action.payload],
        isLoaded: true,
      };
    },
    [LOAD_PRODUCT_DETAIL_FULFILLED]: (state, action) => {
      const { payload: { data } } = action;

      return {
        ...state,
        productDetail: data,
        isLoaded: true,
      };
    },
    [LOAD_PRODUCT_DESCRIPTION_FULFILLED]: (state, action) => {
      const { payload: { data } } = action;

      return {
        ...state,
        productDescription: data,
        isLoaded: true,
      };
    },
  },
  {},
);

export default productDetailReducer;
