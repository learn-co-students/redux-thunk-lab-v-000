import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { WrapperApp } from './App'

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store} >
    <WrapperApp />
  </Provider>,
  document.getElementById('root')
);
