import cats_reducer from "./cats_reducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  catsReducer: cats_reducer
})

export default rootReducer;
