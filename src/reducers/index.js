import { combineReducers } from 'redux';
import manageCats from './cats_reducer'

const rootReducer = combineReducers({
  cats: manageCats
})

export default rootReducer;