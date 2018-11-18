// first attempt 5/29/18
// import { combineReducers } from 'redux';
// import catsReducer from './cats_reducer';
//
// const rootReducer = combineReducers({
//   catsReducer
// });
//
// export default rootReducer;

// second attempt 11/18/18
import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

const rootReducer = combineReducers({
  cats: catsReducer
});

export default rootReducer;
