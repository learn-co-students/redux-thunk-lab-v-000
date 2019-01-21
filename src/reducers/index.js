import { combineReducers } from 'redux'
import fetch from 'isomorphic-fetch'
import catsReducer from './cats_reducer'


const rootReducer = combineReducers({
  cats: catsReducer
});

export default rootReducer;
