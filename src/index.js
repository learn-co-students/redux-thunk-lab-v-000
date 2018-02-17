import React from 'react';
import ReactDOM from 'react-dom'
import { WrapperApp } from './App'
//npm install --save redux-thunk
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store} >
    <WrapperApp />
  </Provider>,
  document.getElementById('root')
);
