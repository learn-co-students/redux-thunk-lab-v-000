import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
//npm install --save redux-thunk
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <App store={store} />
  </Provider>,document.getElementById('root')
);
