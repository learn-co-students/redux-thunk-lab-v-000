import { combineReducers } from 'redux';
import cats_reducer from './cats_reducer';

export default combineReducers({
  cats: cats_reducer,
});
