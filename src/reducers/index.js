import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

// combineReducers not required here, but will be useful for scaling app in the future, when different types of data may be stored and different reducers are required
export default combineReducers({
  cats: catsReducer
});
