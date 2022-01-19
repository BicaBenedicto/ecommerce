import { combineReducers } from 'redux';
import user from './user';
import categories from './categories';
import products from './products';

const rootReducer = combineReducers({
  user,
  categories,
  products,
});

export default rootReducer;
