import { combineReducers } from 'redux';
import manageCats from './catsReducer'

const rootReducer = combineReducers({
  cats: manageCats
})

export default rootReducer;