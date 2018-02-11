// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'; //
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk'; // middleware for asynchronous fetching
// import rootReducer from './reducers/index' // combineReducers
// import App from './App'
//
// // initialize store with rootReducer (combineReducers) and thunk middleware
// const store = createStore(rootReducer, applyMiddleware(thunk))
//
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { WrapperApp } from './App'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
  document.getElementById('root')
);
