import { combineReducers } from 'redux';
import cats from './cats_reducer'

const rootReducer = combineReducers({
  cats: cats
});

export default rootReducer;
