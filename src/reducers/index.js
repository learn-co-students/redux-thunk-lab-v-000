import { combineReducers, createStore } from 'redux'
import { catsReducer } from './cats_reducer'

export const rootReducer = combineReducers({
  catsReducer
})

// export const store = createStore(rootReducer)