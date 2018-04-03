/* looks unnecessary to me.
We have just one reducer function, why do we need to docombineReducer?
I am writing this for the tests to pass and because the file was already provided
*/
import {combineReducers} from 'redux';
import catsReducer from './cats_reducer';

const reducer = combineReducers({
  cats: catsReducer
});

export default reducer;