import { handleActions } from 'redux-actions';
import { LOAD_RESULTS_FULFILLED, LOAD_RESULTS_PENDING, LOAD_RESULTS_REJECTED } from '../constants';

const searchReducer = handleActions(
  {
    [LOAD_RESULTS_PENDING]: state => ({
      ...state,
      isLoaded: false,
    }),
    [LOAD_RESULTS_REJECTED]: (state, action) => {
      const errors = state.errors ? [...state.errors] : [];

      return {
        ...state,
        errors: [...errors, action.payload],
        isLoaded: true,
      };
    },
    [LOAD_RESULTS_FULFILLED]: (state, action) => {
      const { payload: { data: { results } } } = action;

      return {
        ...state,
        searchResults: results.slice(0, 4),
        isLoaded: true,
      };
    },
  },
  {},
);

export default searchReducer;
