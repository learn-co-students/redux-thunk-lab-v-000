import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

// combine reducers
const rootReducer = combineReducers({
    cats: catsReducer
})

export default rootReducer