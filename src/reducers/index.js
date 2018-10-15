import { combineReducers } from "redux";
import catsReducer from './catsReducer'

const rootReducer = combineReducers({
  cats: catsReducer
});

export default rootReducer