import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(logger, thunk))


ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);
