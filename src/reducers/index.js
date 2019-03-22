import manageCats from './cats_reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cats: manageCats
})

export default rootReducer;
