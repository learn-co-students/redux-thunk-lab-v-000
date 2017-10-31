import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

export default function rootReducer() {
  return combineReducers({catsReducer});
}
