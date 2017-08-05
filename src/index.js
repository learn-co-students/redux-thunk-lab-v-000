import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import catsReducer from './reducers/cats_reducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ cats: catsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
    document.getElementById('root')
);
