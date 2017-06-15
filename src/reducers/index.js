import { combineReducers } from 'redux'
import catsReducer from './cats_reducer'

const rootReducer = combineReducers({
    cats: catsReducer
});
console.log(typeof rootReducer); // => undefined??
export default rootReducer;