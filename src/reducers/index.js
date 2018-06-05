import { combineReducers } from 'redux';
import cats_Reducer from './cats_reducer';

export default combineReducers({
  cats: cats_Reducer
});