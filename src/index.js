import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { createStore } from "redux";
import catReducer from './reducers/cats_reducer'

const store = createStore(catReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);
