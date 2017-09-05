import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import { WrapperApp } from './App'

function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk))
}

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
    document.getElementById('root')
);
