import { combineReducers } from "redux";
import catsReducer from './cats_reducer';
 
const rootReducer = combineReducers({
  pictures: catsReducer
})

export default rootReducer;