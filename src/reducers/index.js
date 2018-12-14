import { combineReducers } from 'redux'
import manageCats from './cats_reducer'

export const rootReducer = combineReducers({cats: manageCats})
