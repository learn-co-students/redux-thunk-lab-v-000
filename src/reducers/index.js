import { combineReducers} from 'redux'
import catsReducer from './cats_reducer'

export default combineReducers({
  cats: catsReducer
})

// export const store = createStore(rootReducer)