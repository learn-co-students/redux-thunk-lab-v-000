import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';


let rootReducer = combineReducers({
  cats: catsReducer
});


export default rootReducer
