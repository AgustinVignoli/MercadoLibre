import { handleActions } from 'redux-actions';
import {
  LOAD_PRODUCT_DETAIL_FULFILLED,
  LOAD_PRODUCT_DETAIL_PENDING,
  LOAD_PRODUCT_DETAIL_REJECTED,
} from '../constants';

const productDetailReducer = handleActions(
  {
    [LOAD_PRODUCT_DETAIL_PENDING]: state => ({
      ...state,
      isLoaded: false,
    }),
    [LOAD_PRODUCT_DETAIL_REJECTED]: (state, action) => {
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
  },
  {},
);

export default productDetailReducer;
