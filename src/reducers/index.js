import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

 const rootReducers = combineReducers({
  cats: catsReducer
})
export default rootReducers
