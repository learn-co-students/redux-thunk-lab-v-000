// import reducers here, and combine them to export a rootreducer.
import catsReducer from './cats_reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
    {
        cats: catsReducer,
    }
);

export default rootReducer;