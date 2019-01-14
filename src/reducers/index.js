
import { combineReducers } from 'redux';
import catReducer from '../reducers/cats_reducer'

export default combineReducers({
  cats: catReducer
})
