import { combineReducers } from 'redux'
import { createStore } from 'redux';
import catsReducers from './cats_reducer'
import thunk from 'redux-thunk';
// we wrap store in a function for testing purposes
export const configureStore = () => {
  return createStore(catsReducers, applyMiddleware(thunk))
}

const rootReducer = combineReducers({catsReducers})
