<<<<<<< HEAD
import {combineReducers} from 'redux';
import catsReducer from './cats_reducer';

=======
import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

// combine reducers
>>>>>>> labRequirements
const rootReducer = combineReducers({
    cats: catsReducer
})

export default rootReducer