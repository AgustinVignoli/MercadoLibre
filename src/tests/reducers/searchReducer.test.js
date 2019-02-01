import reducer from '../../reducers/searchReducer';
import { LOAD_RESULTS_FULFILLED, LOAD_RESULTS_REJECTED } from '../../constants/searchConstants';
import { result } from './searchResultMock';

describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle LOAD_RESULTS_FULFILLED', () => {
    const { results, filters } = result;
    const successAction = {
      type: LOAD_RESULTS_FULFILLED,
      payload: { data: { results, filters } },
    };
    expect(reducer({}, successAction)).toEqual({
      isLoaded: true,
      searchResults: results.slice(0, 4),
      filters,
    });
  });

  it('should handle LOAD_RESULTS_REJECTED', () => {
    const failAction = {
      type: LOAD_RESULTS_REJECTED,
      payload: 'error',
      errors: ['error'],
    };
    expect(reducer({}, failAction)).toEqual({ errors: ['error'], isLoaded: true });
  });
});
