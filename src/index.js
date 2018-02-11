import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' // Connects App to redux store
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // to make async requests
import rootReducer from './reducers/index'
import App from './App'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
