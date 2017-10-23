import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import catsReducer from './reducers'

const store = createStore(catsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
