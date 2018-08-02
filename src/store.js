import { createStore } from 'redux'
import rootReducer from './reducers/index'

export function configureStore () {
  return createStore(rootReducer, window.__REDUC_DEVTOOLS_EXTENSION__ && window.__REDUC_DEVTOOLS_EXTENSION__())
}

export const store = configureStore()
