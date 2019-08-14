
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'react-redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
  document.getElementById('root')
);
