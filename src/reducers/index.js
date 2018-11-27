import { combineReducers } from "redux";
import catsReducer from "./cats_reducer"



const rootReducer = combineReducers({
  cats: catsReducer,
});


export default rootReducer;


// CHANGE FOR THIS PROJECTs
// function booksReducer(state = [], action) {
//   let idx;
//   switch (action.type) {
//     case "ADD_BOOK":
//       return [...state, action.book];
//
//     case "REMOVE_BOOK":
//       idx = state.indexOf(action.id);
//       return [...state.slice(0, idx), ...state.slice(idx + 1)];
//
//     default:
//       return state;
//   }
// }
//
