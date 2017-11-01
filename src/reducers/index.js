import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

//export default catsReducer
export default combineReducers({
  cats: catsReducer
})

// combinedReducers changes state to a nested hash
// nested under the name of the reducer as the key, like so:
// {
//   CatsReducer: {
//     cats: {
//       cats: [...],
//       meow: [...]
//     }
//   }
// }
