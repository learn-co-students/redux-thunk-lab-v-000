import { combineReducers } from 'redux';
import catsReducer from '../reducers/cats_reducer';

const rootReducer = combineReducers({
  cats: catsReducer
});

export default rootReducer;
