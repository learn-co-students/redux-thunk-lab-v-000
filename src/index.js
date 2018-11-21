import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import catsReducer from './reducers/index'
import thunkMiddleware from 'redux-thunk';


const store = createStore(catsReducer,
  applyMiddleware(thunkMiddleware));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
