import { combineReducers } from 'redux';
import { picsReducer, loadReducer } from './cats_reducer'

export default combineReducers(
  {
    pictures: picsReducer,
    loading: loadReducer
  }
)
