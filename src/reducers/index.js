import { combineReducers } from "redux";
import catsReducer from "./cats_reducer"

const rootReducer = combineReducers({
  catPics: catsReducer
})

export default rootReducer;
