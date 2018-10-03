import { combineReducers } from 'redux';
import catsReducer from './cats_Reducer';

export default combineReducers({
  cats: catsReducer
});
