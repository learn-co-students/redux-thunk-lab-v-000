import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

const rootReducer = combineReducers({//function combineReducers takes an object who's key is cats: and the value is catsReducer which is imported from ./cats_reducer
  cats: catsReducer
});

export default rootReducer;
