import catsReducer from './cats_reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  pictures: catsReducer
})

export default rootReducer