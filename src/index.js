import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

let store = createStore(
    rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
    document.getElementById('root')
);
