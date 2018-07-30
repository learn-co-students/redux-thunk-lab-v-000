import { combineReducers } from 'redux';
import cats_Reducer from './cats_reducer';

const rootReducer =  combineReducers({
  cats: cats_Reducer
});

export default rootReducer