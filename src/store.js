import rootReducer from './reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

export function configureStore(){
  return createStore(rootReducer,
  	compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

}

export const store = configureStore()
