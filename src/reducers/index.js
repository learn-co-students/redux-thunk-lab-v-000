import cats_reducer from './cats_reducer';
import { combineReducers } from 'redux'; 

export default combineReducers({
  cats: cats_reducer
});
