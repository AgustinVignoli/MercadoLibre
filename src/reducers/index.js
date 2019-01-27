import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import searchReducer from './searchReducer';
import productDetailReducer from './productDetailReducer';

export default history => combineReducers({
  searchReducer,
  productDetailReducer,
  router: connectRouter(history),
});
