import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { WrapperApp } from './App'

const store = createStore(rootReducer, applyMiddleware(thunk));
//initializing store with the reducer and middleware

ReactDOM.render(
  <Provider store={store} >
    <WrapperApp />,
  </Provider>,
    document.getElementById('container')
);
