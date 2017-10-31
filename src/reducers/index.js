import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

//export default catsReducer
export default combineReducers({
  catsReducer
})

// with combined reducers, the state is now a nested hash, like so:
// {
//   CatsReducer: {
//     cats: {
//       cats: [...]
//     }
//   }
// }
