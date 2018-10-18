import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import rootReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
//  use Redux's createStore function to initialize your store in src/index.js.

// Once you initialize your store with the reducer and middleware, make sure you pass it to the
// <Provider> component and wrap your <App> component in the <Provider> in src/index.js.
