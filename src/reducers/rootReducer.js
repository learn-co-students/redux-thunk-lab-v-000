import { combineReducers } from 'redux';
import catsReducer from './cats_reducer.js'

const rootReducer = combineReducers({
  cats: catsReducer
});

export default rootReducer;