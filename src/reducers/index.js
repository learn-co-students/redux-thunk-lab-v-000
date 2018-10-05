import { combineReducers } from 'redux'
import catReducer from './cats_reducer'

export default combineReducers({
  catReducer: catReducer
})
