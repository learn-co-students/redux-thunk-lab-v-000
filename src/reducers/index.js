import { combineReducers } from 'redux';
import catsReducer from './cats_reducer.js';

export const rootReducer = combineReducers({
  cats: catsReducer
});
